import { createClient } from '@/utils/supabase/server'
import fallbackData from './fallback-data.json'

export interface Profile {
  full_name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  linkedin_url: string
  github_url: string
  cv_url: string
}

export interface Experience {
  id?: string
  company: string
  position: string
  description: string
  start_date: string
  end_date: string
  is_current: boolean
}

export interface Education {
  id?: string
  institution: string
  degree: string
  description: string
  start_date: string
  end_date: string
}

export interface Project {
  id?: string
  title: string
  description: string
  image_url: string
  link_url: string
  category: string
  status: string
  sort_order: number
}

export interface Publication {
  id?: string
  title: string
  authors: string
  journal_event: string
  publication_year: number
  link_url: string
  description: string
  is_coil: boolean
}

export interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: string
  created_at: string
}

export interface PageData {
  profile: Profile
  experiences: Experience[]
  education: Education[]
  projects: Project[]
  publications: Publication[]
}

export async function getPageData(): Promise<PageData> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    return fallbackData as PageData
  }

  try {
    const supabase = await createClient()

    const [
      profileRes,
      expRes,
      eduRes,
      projRes,
      pubRes
    ] = await Promise.all([
      supabase.from('profiles').select('*').maybeSingle(),
      supabase.from('experiences').select('*').order('created_at', { ascending: false }),
      supabase.from('education').select('*').order('created_at', { ascending: false }),
      supabase.from('projects').select('*').order('sort_order', { ascending: true }),
      supabase.from('publications').select('*').order('publication_year', { ascending: false })
    ])

    // If profile data is missing, we fall back
    if (!profileRes.data) {
      return fallbackData as PageData
    }

    return {
      profile: profileRes.data as Profile,
      experiences: (expRes.data || []) as Experience[],
      education: (eduRes.data || []) as Education[],
      projects: (projRes.data || []) as Project[],
      publications: (pubRes.data || []) as Publication[]
    }
  } catch (error) {
    console.warn('Failed to fetch from Supabase. Falling back to local data.', error)
    return fallbackData as PageData
  }
}
