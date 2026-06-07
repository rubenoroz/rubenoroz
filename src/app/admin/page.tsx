'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { Key, Mail, ShieldAlert, Sparkles } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const envWarning = !supabaseUrl || !supabaseKey

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    if (envWarning) {
      setErrorMsg('No se puede iniciar sesión: Faltan las variables de entorno de Supabase en .env.local.')
      setLoading(false)
      return
    }

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setErrorMsg(error.message || 'Credenciales incorrectas.')
      } else {
        router.push('/admin/dashboard')
        router.refresh()
      }
    } catch {
      setErrorMsg('Ocurrió un error inesperado al conectar.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-foreground flex items-center justify-center p-6 tech-grid relative">
      <div className="absolute top-10 text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">
        RO // CONTROL PANEL
      </div>

      <div className="max-w-md w-full bg-white border-2 border-black p-8 relative shadow-neo">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center text-black bg-brand-yellow shadow-[2px_2px_0px_#000]">
            <Sparkles size={16} />
          </div>
          <h1 className="text-2xl font-bold font-mono uppercase tracking-tight text-black">
            CMS Login
          </h1>
        </div>

        {envWarning && (
          <div className="p-4 border-2 border-brand-pink text-brand-pink text-xs font-mono mb-6 bg-white flex gap-3 items-start shadow-neo">
            <ShieldAlert size={20} className="shrink-0" />
            <div>
              <div className="font-bold uppercase mb-1">Advertencia de Sistema</div>
              Faltan las credenciales de Supabase en el archivo `.env.local`. Crea una cuenta en Supabase, ejecuta el script `schema.sql` en su consola y copia las claves correspondientes.
            </div>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6 font-mono text-sm">
          <div className="space-y-2">
            <label className="text-zinc-700 uppercase text-xs font-bold block">Email Administrador</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                <Mail size={16} />
              </span>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border-2 border-black focus:border-brand-pink p-3 pl-10 text-black focus:outline-none transition-colors"
                placeholder="admin@rubenoroz.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-zinc-700 uppercase text-xs font-bold block">Contraseña</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
                <Key size={16} />
              </span>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border-2 border-black focus:border-brand-pink p-3 pl-10 text-black focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 border-2 border-brand-pink text-brand-pink text-xs bg-white font-bold">
              {errorMsg}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-brand-yellow hover:bg-black hover:text-white border-2 border-black text-black font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50"
          >
            {loading ? 'ACCEDIENDO...' : 'INGRESAR'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-zinc-500 hover:text-brand-pink text-xs uppercase font-bold transition-colors">
            ← Volver al Sitio Público
          </Link>
        </div>
      </div>
    </div>
  )
}
