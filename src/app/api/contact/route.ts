import { Resend } from 'resend'
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // 1. Write to Supabase if configured
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (url && key) {
      try {
        const supabase = await createClient()
        // Check if messages table exists and insert
        await supabase.from('messages').insert({
          name,
          email,
          subject: subject || 'Contact Form Submission',
          message,
          status: 'unread'
        })
      } catch (dbError) {
        console.error('Failed to write contact message to Supabase:', dbError)
      }
    }

    // 2. Send email via Resend if API key is present
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      try {
        const resend = new Resend(resendKey)
        const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || 'hola@rubenoroz.com'
        
        await resend.emails.send({
          from: 'Contacto Web <onboarding@resend.dev>',
          to: recipient,
          subject: `Contacto Web: ${subject || 'Nuevo Mensaje'}`,
          text: `Has recibido un nuevo mensaje desde tu sitio web.\n\nNombre: ${name}\nEmail: ${email}\nAsunto: ${subject || 'N/A'}\n\nMensaje:\n${message}`,
        })
      } catch (emailError) {
        console.error('Failed to send email via Resend:', emailError)
      }
    } else {
      console.log(`[Email Mock Logger] From: ${name} (${email}), Subject: ${subject}, Message: ${message}`)
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Something went wrong.'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
