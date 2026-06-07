import { createClient } from '@/utils/supabase/server'
import DashboardClient from './DashboardClient'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Retrieve current profile ID or authenticated user context
  const { data: { user } } = await supabase.auth.getUser()
  const userId = user?.id

  // Fetch all CMS content collections
  const [
    profileRes,
    expRes,
    eduRes,
    projRes,
    pubRes,
    msgRes
  ] = await Promise.all([
    userId ? supabase.from('profiles').select('*').eq('id', userId).maybeSingle() : Promise.resolve({ data: null }),
    supabase.from('experiences').select('*').order('created_at', { ascending: false }),
    supabase.from('education').select('*').order('created_at', { ascending: false }),
    supabase.from('projects').select('*').order('sort_order', { ascending: true }),
    supabase.from('publications').select('*').order('publication_year', { ascending: false }),
    supabase.from('messages').select('*').order('created_at', { ascending: false })
  ])

  const defaultProfile = {
    full_name: 'José Rubén Oroz Arriola',
    title: 'Coordinación de ABP & Producción Audiovisual',
    bio: '',
    email: 'hola@rubenoroz.com',
    phone: '',
    location: 'Guadalajara, Jalisco, México',
    linkedin_url: 'https://www.linkedin.com/in/rubenoroz',
    github_url: '',
    cv_url: ''
  }

  return (
    <DashboardClient 
      initialData={{
        profile: profileRes?.data || defaultProfile,
        experiences: expRes.data || [],
        education: eduRes.data || [],
        projects: projRes.data || [],
        publications: pubRes.data || [],
        messages: msgRes.data || []
      }}
    />
  )
}
