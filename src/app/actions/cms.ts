'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { Profile, Experience, Education, Project, Publication } from '@/data/db'

// Helper function to verify user authentication
async function verifyAuth() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) {
    throw new Error('Not authorized to perform this operation')
  }
  return { supabase, user }
}

export async function updateProfile(profileData: Profile) {
  try {
    const { supabase, user } = await verifyAuth()

    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        full_name: profileData.full_name,
        title: profileData.title,
        bio: profileData.bio,
        email: profileData.email,
        phone: profileData.phone || '',
        location: profileData.location,
        linkedin_url: profileData.linkedin_url || '',
        github_url: profileData.github_url || '',
        cv_url: profileData.cv_url || '',
        updated_at: new Date().toISOString()
      })

    if (error) throw error

    revalidatePath('/')
    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function upsertExperience(experienceData: Experience) {
  try {
    const { supabase, user } = await verifyAuth()

    const { error } = await supabase
      .from('experiences')
      .upsert({
        id: experienceData.id || undefined, // Generates new UUID if missing
        profile_id: user.id,
        company: experienceData.company,
        position: experienceData.position,
        description: experienceData.description,
        start_date: experienceData.start_date,
        end_date: experienceData.end_date || 'Presente',
        is_current: experienceData.is_current || false
      })

    if (error) throw error

    revalidatePath('/')
    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function deleteExperience(id: string) {
  try {
    const { supabase } = await verifyAuth()

    const { error } = await supabase
      .from('experiences')
      .delete()
      .eq('id', id)

    if (error) throw error

    revalidatePath('/')
    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function upsertEducation(educationData: Education) {
  try {
    const { supabase, user } = await verifyAuth()

    const { error } = await supabase
      .from('education')
      .upsert({
        id: educationData.id || undefined,
        profile_id: user.id,
        institution: educationData.institution,
        degree: educationData.degree,
        description: educationData.description,
        start_date: educationData.start_date,
        end_date: educationData.end_date
      })

    if (error) throw error

    revalidatePath('/')
    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function deleteEducation(id: string) {
  try {
    const { supabase } = await verifyAuth()

    const { error } = await supabase
      .from('education')
      .delete()
      .eq('id', id)

    if (error) throw error

    revalidatePath('/')
    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function upsertProject(projectData: Project) {
  try {
    const { supabase, user } = await verifyAuth()

    const { error } = await supabase
      .from('projects')
      .upsert({
        id: projectData.id || undefined,
        profile_id: user.id,
        title: projectData.title,
        description: projectData.description,
        image_url: projectData.image_url || '',
        link_url: projectData.link_url || '',
        category: projectData.category,
        status: projectData.status || '',
        sort_order: Number(projectData.sort_order || 0)
      })

    if (error) throw error

    revalidatePath('/')
    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function deleteProject(id: string) {
  try {
    const { supabase } = await verifyAuth()

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) throw error

    revalidatePath('/')
    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function upsertPublication(publicationData: Publication) {
  try {
    const { supabase, user } = await verifyAuth()

    const { error } = await supabase
      .from('publications')
      .upsert({
        id: publicationData.id || undefined,
        profile_id: user.id,
        title: publicationData.title,
        authors: publicationData.authors,
        journal_event: publicationData.journal_event,
        publication_year: Number(publicationData.publication_year),
        link_url: publicationData.link_url || '',
        description: publicationData.description,
        is_coil: publicationData.is_coil || false
      })

    if (error) throw error

    revalidatePath('/')
    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function deletePublication(id: string) {
  try {
    const { supabase } = await verifyAuth()

    const { error } = await supabase
      .from('publications')
      .delete()
      .eq('id', id)

    if (error) throw error

    revalidatePath('/')
    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function deleteMessage(id: string) {
  try {
    const { supabase } = await verifyAuth()

    const { error } = await supabase
      .from('messages')
      .delete()
      .eq('id', id)

    if (error) throw error

    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}

export async function updateMessageStatus(id: string, status: string) {
  try {
    const { supabase } = await verifyAuth()

    const { error } = await supabase
      .from('messages')
      .update({ status })
      .eq('id', id)

    if (error) throw error

    return { success: true }
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: msg }
  }
}
