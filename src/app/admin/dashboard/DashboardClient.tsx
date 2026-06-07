'use client'

import React, { useState } from 'react'
import { 
  User, Briefcase, GraduationCap, FolderGit2, BookOpen, 
  Mail, Save, Trash2, Edit2, Plus
} from 'lucide-react'
import { 
  updateProfile, 
  upsertExperience, deleteExperience,
  upsertEducation, deleteEducation,
  upsertProject, deleteProject,
  upsertPublication, deletePublication,
  deleteMessage, updateMessageStatus
} from '@/app/actions/cms'
import { Profile, Experience, Education, Project, Publication, Message } from '@/data/db'

interface DashboardClientProps {
  initialData: {
    profile: Profile
    experiences: Experience[]
    education: Education[]
    projects: Project[]
    publications: Publication[]
    messages: Message[]
  }
}

type TabType = 'profile' | 'experiences' | 'education' | 'projects' | 'publications' | 'messages'

function getTempId(): string {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID()
  }
  return Date.now().toString() + '-' + Math.floor(Math.random() * 1000).toString()
}

export default function DashboardClient({ initialData }: DashboardClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>('profile')
  const [data, setData] = useState(initialData)
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' })

  // Form states
  const [profileForm, setProfileForm] = useState({ ...initialData.profile })
  
  // Experience Form
  const [expForm, setExpForm] = useState({ id: '', company: '', position: '', description: '', start_date: '', end_date: '', is_current: false })
  const [isEditingExp, setIsEditingExp] = useState(false)

  // Education Form
  const [eduForm, setEduForm] = useState({ id: '', institution: '', degree: '', description: '', start_date: '', end_date: '' })
  const [isEditingEdu, setIsEditingEdu] = useState(false)

  // Project Form
  const [projForm, setProjForm] = useState({ id: '', title: '', description: '', image_url: '', link_url: '', category: 'saas', status: '', sort_order: 0 })
  const [isEditingProj, setIsEditingProj] = useState(false)

  // Publication Form
  const [pubForm, setPubForm] = useState({ id: '', title: '', authors: '', journal_event: '', publication_year: new Date().getFullYear(), link_url: '', description: '', is_coil: false })
  const [isEditingPub, setIsEditingPub] = useState(false)

  const showStatus = (type: 'success' | 'error', text: string) => {
    setStatusMsg({ type, text })
    setTimeout(() => setStatusMsg({ type: '', text: '' }), 4000)
  }

  // PROFILE ACTION
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await updateProfile(profileForm)
    if (res.success) {
      showStatus('success', 'Perfil actualizado con éxito.')
    } else {
      showStatus('error', res.error || 'Error al actualizar perfil.')
    }
  }

  // EXPERIENCE ACTIONS
  const handleExpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await upsertExperience(expForm)
    if (res.success) {
      showStatus('success', 'Experiencia guardada con éxito.')
      // Refresh local list state
      const updatedExps = isEditingExp
        ? data.experiences.map(item => item.id === expForm.id ? { ...expForm } : item)
        : [{ ...expForm, id: getTempId() }, ...data.experiences] // Placeholder temp ID
      setData({ ...data, experiences: updatedExps })
      resetExpForm()
    } else {
      showStatus('error', res.error || 'Error al guardar experiencia.')
    }
  }

  const handleEditExp = (item: Experience) => {
    setExpForm({
      id: item.id || '',
      company: item.company,
      position: item.position,
      description: item.description,
      start_date: item.start_date,
      end_date: item.end_date || '',
      is_current: item.is_current
    })
    setIsEditingExp(true)
  }

  const handleDeleteExp = async (id: string) => {
    if (!confirm('¿Seguro que deseas eliminar esta experiencia?')) return
    const res = await deleteExperience(id)
    if (res.success) {
      showStatus('success', 'Experiencia eliminada.')
      setData({ ...data, experiences: data.experiences.filter(item => item.id !== id) })
    } else {
      showStatus('error', res.error || 'Error al eliminar.')
    }
  }

  const resetExpForm = () => {
    setExpForm({ id: '', company: '', position: '', description: '', start_date: '', end_date: '', is_current: false })
    setIsEditingExp(false)
  }

  // EDUCATION ACTIONS
  const handleEduSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await upsertEducation(eduForm)
    if (res.success) {
      showStatus('success', 'Educación guardada con éxito.')
      const updatedEdus = isEditingEdu
        ? data.education.map(item => item.id === eduForm.id ? { ...eduForm } : item)
        : [{ ...eduForm, id: getTempId() }, ...data.education]
      setData({ ...data, education: updatedEdus })
      resetEduForm()
    } else {
      showStatus('error', res.error || 'Error al guardar educación.')
    }
  }

  const handleEditEdu = (item: Education) => {
    setEduForm({
      id: item.id || '',
      institution: item.institution,
      degree: item.degree,
      description: item.description,
      start_date: item.start_date,
      end_date: item.end_date
    })
    setIsEditingEdu(true)
  }

  const handleDeleteEdu = async (id: string) => {
    if (!confirm('¿Seguro que deseas eliminar esta formación?')) return
    const res = await deleteEducation(id)
    if (res.success) {
      showStatus('success', 'Formación eliminada.')
      setData({ ...data, education: data.education.filter(item => item.id !== id) })
    } else {
      showStatus('error', res.error || 'Error al eliminar.')
    }
  }

  const resetEduForm = () => {
    setEduForm({ id: '', institution: '', degree: '', description: '', start_date: '', end_date: '' })
    setIsEditingEdu(false)
  }

  // PROJECT ACTIONS
  const handleProjSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await upsertProject(projForm)
    if (res.success) {
      showStatus('success', 'Proyecto guardado con éxito.')
      const updatedProjs = isEditingProj
        ? data.projects.map(item => item.id === projForm.id ? { ...projForm } : item)
        : [...data.projects, { ...projForm, id: getTempId() }].sort((a,b) => a.sort_order - b.sort_order)
      setData({ ...data, projects: updatedProjs })
      resetProjForm()
    } else {
      showStatus('error', res.error || 'Error al guardar proyecto.')
    }
  }

  const handleEditProj = (item: Project) => {
    setProjForm({
      id: item.id || '',
      title: item.title,
      description: item.description,
      image_url: item.image_url || '',
      link_url: item.link_url || '',
      category: item.category,
      status: item.status || '',
      sort_order: item.sort_order
    })
    setIsEditingProj(true)
  }

  const handleDeleteProj = async (id: string) => {
    if (!confirm('¿Seguro que deseas eliminar este proyecto?')) return
    const res = await deleteProject(id)
    if (res.success) {
      showStatus('success', 'Proyecto eliminado.')
      setData({ ...data, projects: data.projects.filter(item => item.id !== id) })
    } else {
      showStatus('error', res.error || 'Error al eliminar.')
    }
  }

  const resetProjForm = () => {
    setProjForm({ id: '', title: '', description: '', image_url: '', link_url: '', category: 'saas', status: '', sort_order: 0 })
    setIsEditingProj(false)
  }

  // PUBLICATION ACTIONS
  const handlePubSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await upsertPublication(pubForm)
    if (res.success) {
      showStatus('success', 'Publicación guardada con éxito.')
      const updatedPubs = isEditingPub
        ? data.publications.map(item => item.id === pubForm.id ? { ...pubForm } : item)
        : [pubForm, ...data.publications]
      setData({ ...data, publications: updatedPubs })
      resetPubForm()
    } else {
      showStatus('error', res.error || 'Error al guardar publicación.')
    }
  }

  const handleEditPub = (item: Publication) => {
    setPubForm({
      id: item.id || '',
      title: item.title,
      authors: item.authors,
      journal_event: item.journal_event,
      publication_year: item.publication_year,
      link_url: item.link_url || '',
      description: item.description,
      is_coil: item.is_coil
    })
    setIsEditingPub(true)
  }

  const handleDeletePub = async (id: string) => {
    if (!confirm('¿Seguro que deseas eliminar esta publicación?')) return
    const res = await deletePublication(id)
    if (res.success) {
      showStatus('success', 'Publicación eliminada.')
      setData({ ...data, publications: data.publications.filter(item => item.id !== id) })
    } else {
      showStatus('error', res.error || 'Error al eliminar.')
    }
  }

  const resetPubForm = () => {
    setPubForm({ id: '', title: '', authors: '', journal_event: '', publication_year: new Date().getFullYear(), link_url: '', description: '', is_coil: false })
    setIsEditingPub(false)
  }

  // MESSAGES ACTIONS
  const handleDeleteMsg = async (id: string) => {
    if (!confirm('¿Seguro que deseas eliminar este mensaje de contacto?')) return
    const res = await deleteMessage(id)
    if (res.success) {
      showStatus('success', 'Mensaje eliminado.')
      setData({ ...data, messages: data.messages.filter(item => item.id !== id) })
    } else {
      showStatus('error', res.error || 'Error al eliminar mensaje.')
    }
  }

  const handleToggleMsgStatus = async (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'unread' ? 'read' : 'unread'
    const res = await updateMessageStatus(id, nextStatus)
    if (res.success) {
      setData({ 
        ...data, 
        messages: data.messages.map(item => item.id === id ? { ...item, status: nextStatus } : item) 
      })
    } else {
      showStatus('error', res.error || 'Error al actualizar estado.')
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-black">
      {/* Sidebar navigation */}
      <div className="lg:col-span-3 flex flex-col gap-3 font-mono text-xs uppercase">
        <button 
          onClick={() => setActiveTab('profile')} 
          className={`flex items-center gap-3 p-3 border-2 border-black transition-all text-left cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${activeTab === 'profile' ? 'bg-brand-yellow text-black font-bold shadow-neo' : 'bg-white text-black hover:bg-zinc-50'}`}
        >
          <User size={14} /> Perfil Bio
        </button>
        <button 
          onClick={() => setActiveTab('experiences')} 
          className={`flex items-center gap-3 p-3 border-2 border-black transition-all text-left cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${activeTab === 'experiences' ? 'bg-brand-yellow text-black font-bold shadow-neo' : 'bg-white text-black hover:bg-zinc-50'}`}
        >
          <Briefcase size={14} /> Experiencias (Escaleta)
        </button>
        <button 
          onClick={() => setActiveTab('education')} 
          className={`flex items-center gap-3 p-3 border-2 border-black transition-all text-left cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${activeTab === 'education' ? 'bg-brand-yellow text-black font-bold shadow-neo' : 'bg-white text-black hover:bg-zinc-50'}`}
        >
          <GraduationCap size={14} /> Formación Académica
        </button>
        <button 
          onClick={() => setActiveTab('projects')} 
          className={`flex items-center gap-3 p-3 border-2 border-black transition-all text-left cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${activeTab === 'projects' ? 'bg-brand-yellow text-black font-bold shadow-neo' : 'bg-white text-black hover:bg-zinc-50'}`}
        >
          <FolderGit2 size={14} /> Portafolio (Proyectos)
        </button>
        <button 
          onClick={() => setActiveTab('publications')} 
          className={`flex items-center gap-3 p-3 border-2 border-black transition-all text-left cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${activeTab === 'publications' ? 'bg-brand-yellow text-black font-bold shadow-neo' : 'bg-white text-black hover:bg-zinc-50'}`}
        >
          <BookOpen size={14} /> Publicaciones / COIL
        </button>
        <button 
          onClick={() => setActiveTab('messages')} 
          className={`flex items-center justify-between p-3 border-2 border-black transition-all text-left cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${activeTab === 'messages' ? 'bg-brand-yellow text-black font-bold shadow-neo' : 'bg-white text-black hover:bg-zinc-50'}`}
        >
          <span className="flex items-center gap-3"><Mail size={14} /> Mensajes Recibidos</span>
          {data.messages.filter(m => m.status === 'unread').length > 0 && (
            <span className="bg-brand-pink text-white font-mono text-[9px] px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_#000]">
              {data.messages.filter(m => m.status === 'unread').length} NUEVO
            </span>
          )}
        </button>
      </div>

      {/* Workspace Area */}
      <div className="lg:col-span-9 bg-white border-2 border-black p-6 md:p-8 relative shadow-neo">
        {statusMsg.text && (
          <div className={`absolute top-4 right-4 p-3 border-2 font-mono text-xs uppercase z-20 shadow-neo ${statusMsg.type === 'success' ? 'border-brand-cyan text-brand-cyan bg-white' : 'border-brand-pink text-brand-pink bg-white'}`}>
            {statusMsg.text}
          </div>
        )}

        {/* TAB 1: PROFILE */}
        {activeTab === 'profile' && (
          <div>
            <h2 className="text-xl font-bold font-mono uppercase text-brand-pink mb-6 pb-2 border-b-2 border-black flex items-center gap-2">
              <User size={18} /> Datos de Perfil
            </h2>
            <form onSubmit={handleProfileSubmit} className="space-y-6 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-zinc-700 font-bold uppercase">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    value={profileForm.full_name}
                    onChange={(e) => setProfileForm({ ...profileForm, full_name: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-black p-3 text-black focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-700 font-bold uppercase">Título Profesional</label>
                  <input 
                    type="text" 
                    required
                    value={profileForm.title}
                    onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-black p-3 text-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-zinc-700 font-bold uppercase">Biografía Principal</label>
                <textarea 
                  rows={6}
                  required
                  value={profileForm.bio}
                  onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                  className="w-full bg-zinc-50 border-2 border-black p-3 text-black focus:outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-zinc-700 font-bold uppercase">Email Público</label>
                  <input 
                    type="email" 
                    required
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-black p-3 text-black focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-700 font-bold uppercase">Ubicación</label>
                  <input 
                    type="text" 
                    required
                    value={profileForm.location}
                    onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-black p-3 text-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-zinc-700 font-bold uppercase">LinkedIn URL</label>
                  <input 
                    type="url" 
                    value={profileForm.linkedin_url || ''}
                    onChange={(e) => setProfileForm({ ...profileForm, linkedin_url: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-black p-3 text-black focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-700 font-bold uppercase">Enlace Documento CV (PDF o Imagen)</label>
                  <input 
                    type="text" 
                    value={profileForm.cv_url || ''}
                    onChange={(e) => setProfileForm({ ...profileForm, cv_url: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-black p-3 text-black focus:outline-none"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="px-6 py-3 bg-brand-yellow hover:bg-black hover:text-white border-2 border-black text-black font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                <Save size={14} /> Guardar Perfil
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: EXPERIENCES */}
        {activeTab === 'experiences' && (
          <div>
            <h2 className="text-xl font-bold font-mono uppercase text-brand-pink mb-6 pb-2 border-b-2 border-black flex justify-between items-center">
              <span className="flex items-center gap-2"><Briefcase size={18} /> Experiencias Profesionales</span>
              {isEditingExp && (
                <button onClick={resetExpForm} className="text-xs uppercase text-zinc-500 hover:text-black cursor-pointer">
                  Cancelar Edición
                </button>
              )}
            </h2>

            {/* Form */}
            <form onSubmit={handleExpSubmit} className="bg-zinc-50 border-2 border-black p-6 mb-8 space-y-4 font-mono text-xs shadow-neo">
              <div className="text-[10px] uppercase text-zinc-500 font-bold mb-2">
                {isEditingExp ? 'MODIFICAR REGISTRO' : 'NUEVO REGISTRO (ESCALETA)'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Empresa / Organización</label>
                  <input 
                    type="text" 
                    required
                    value={expForm.company}
                    onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Cargo / Puesto</label>
                  <input 
                    type="text" 
                    required
                    value={expForm.position}
                    onChange={(e) => setExpForm({ ...expForm, position: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Año Inicio</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej. 2015"
                    value={expForm.start_date}
                    onChange={(e) => setExpForm({ ...expForm, start_date: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Año Fin</label>
                  <input 
                    type="text" 
                    placeholder="Ej. 2020 o Presente"
                    disabled={expForm.is_current}
                    value={expForm.is_current ? 'Presente' : expForm.end_date}
                    onChange={(e) => setExpForm({ ...expForm, end_date: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink disabled:opacity-40"
                  />
                </div>
                <div className="flex items-center pt-6">
                  <label className="flex items-center gap-2 text-black font-bold cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={expForm.is_current}
                      onChange={(e) => setExpForm({ ...expForm, is_current: e.target.checked, end_date: e.target.checked ? 'Presente' : '' })}
                      className="accent-brand-pink w-4 h-4"
                    />
                    ¿TRABAJO ACTUAL?
                  </label>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-700 font-bold uppercase">NARRATIVA (Descripción de logros, ABP y Operación)</label>
                <textarea 
                  rows={4}
                  required
                  value={expForm.description}
                  onChange={(e) => setExpForm({ ...expForm, description: e.target.value })}
                  className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink resize-none"
                />
              </div>

              <button 
                type="submit"
                className="px-4 py-2.5 bg-brand-yellow hover:bg-black hover:text-white border-2 border-black text-black font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {isEditingExp ? <><Save size={12} /> Modificar</> : <><Plus size={12} /> Registrar en Escaleta</>}
              </button>
            </form>

            {/* List */}
            <div className="space-y-4 font-mono text-xs">
              <div className="text-[10px] text-zinc-500 uppercase font-bold">REGISTROS ACTUALES</div>
              {data.experiences.map((exp) => (
                <div key={exp.id} className="border-2 border-black p-4 bg-white flex justify-between items-center gap-4 hover:shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div>
                    <span className="text-brand-pink font-bold">{exp.start_date} — {exp.end_date}</span>
                    <h4 className="font-bold text-black uppercase text-sm mt-1">{exp.position} {" // "} <span className="text-zinc-500">{exp.company}</span></h4>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button 
                      onClick={() => handleEditExp(exp)}
                      className="p-2 border-2 border-black text-black hover:bg-brand-pink hover:text-white cursor-pointer hover:shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                      title="Editar"
                    >
                      <Edit2 size={12} />
                    </button>
                    <button 
                      onClick={() => exp.id && handleDeleteExp(exp.id)}
                      className="p-2 border-2 border-black text-black hover:bg-brand-pink hover:text-white cursor-pointer hover:shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                      title="Eliminar"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: EDUCATION */}
        {activeTab === 'education' && (
          <div>
            <h2 className="text-xl font-bold font-mono uppercase text-brand-pink mb-6 pb-2 border-b-2 border-black flex justify-between items-center">
              <span className="flex items-center gap-2"><GraduationCap size={18} /> Formación Académica</span>
              {isEditingEdu && (
                <button onClick={resetEduForm} className="text-xs uppercase text-zinc-500 hover:text-black cursor-pointer">
                  Cancelar Edición
                </button>
              )}
            </h2>

            {/* Form */}
            <form onSubmit={handleEduSubmit} className="bg-zinc-50 border-2 border-black p-6 mb-8 space-y-4 font-mono text-xs shadow-neo">
              <div className="text-[10px] uppercase text-zinc-500 font-bold mb-2">
                {isEditingEdu ? 'MODIFICAR EDUCACIÓN' : 'REGISTRAR NUEVA FORMACIÓN'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Institución</label>
                  <input 
                    type="text" 
                    required
                    value={eduForm.institution}
                    onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Título / Grado Académico</label>
                  <input 
                    type="text" 
                    required
                    value={eduForm.degree}
                    onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Año Inicio</label>
                  <input 
                    type="text" 
                    required
                    value={eduForm.start_date}
                    onChange={(e) => setEduForm({ ...eduForm, start_date: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Año Fin</label>
                  <input 
                    type="text" 
                    required
                    value={eduForm.end_date}
                    onChange={(e) => setEduForm({ ...eduForm, end_date: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-700 font-bold uppercase">Descripción / Detalles de Tesis</label>
                <textarea 
                  rows={3}
                  required
                  value={eduForm.description}
                  onChange={(e) => setEduForm({ ...eduForm, description: e.target.value })}
                  className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink resize-none"
                />
              </div>

              <button 
                type="submit"
                className="px-4 py-2.5 bg-brand-yellow hover:bg-black hover:text-white border-2 border-black text-black font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {isEditingEdu ? <><Save size={12} /> Modificar</> : <><Plus size={12} /> Agregar Formación</>}
              </button>
            </form>

            {/* List */}
            <div className="space-y-4 font-mono text-xs">
              {data.education.map((edu) => (
                <div key={edu.id} className="border-2 border-black p-4 bg-white flex justify-between items-center gap-4 hover:shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div>
                    <span className="text-brand-pink font-bold">{edu.start_date} — {edu.end_date}</span>
                    <h4 className="font-bold text-black uppercase text-sm mt-1">{edu.degree} {" // "} <span className="text-zinc-500">{edu.institution}</span></h4>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button 
                      onClick={() => handleEditEdu(edu)}
                      className="p-2 border-2 border-black text-black hover:bg-brand-pink hover:text-white cursor-pointer hover:shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                    >
                      <Edit2 size={12} />
                    </button>
                    <button 
                      onClick={() => edu.id && handleDeleteEdu(edu.id)}
                      className="p-2 border-2 border-black text-black hover:bg-brand-pink hover:text-white cursor-pointer hover:shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PROJECTS */}
        {activeTab === 'projects' && (
          <div>
            <h2 className="text-xl font-bold font-mono uppercase text-brand-pink mb-6 pb-2 border-b-2 border-black flex justify-between items-center">
              <span className="flex items-center gap-2"><FolderGit2 size={18} /> Portafolio de Proyectos</span>
              {isEditingProj && (
                <button onClick={resetProjForm} className="text-xs uppercase text-zinc-500 hover:text-black cursor-pointer">
                  Cancelar Edición
                </button>
              )}
            </h2>

            {/* Form */}
            <form onSubmit={handleProjSubmit} className="bg-zinc-50 border-2 border-black p-6 mb-8 space-y-4 font-mono text-xs shadow-neo">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Título del Proyecto</label>
                  <input 
                    type="text" 
                    required
                    value={projForm.title}
                    onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Categoría</label>
                  <select 
                    value={projForm.category}
                    onChange={(e) => setProjForm({ ...projForm, category: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink cursor-pointer"
                  >
                    <option value="saas">SaaS (Software)</option>
                    <option value="tv">Producción Televisiva / ABP</option>
                    <option value="music">Música / Producción de Audio</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Link URL</label>
                  <input 
                    type="url" 
                    value={projForm.link_url}
                    onChange={(e) => setProjForm({ ...projForm, link_url: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                    placeholder="https://example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Estado del Proyecto</label>
                  <input 
                    type="text" 
                    value={projForm.status}
                    onChange={(e) => setProjForm({ ...projForm, status: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                    placeholder="Ej. Producción, Active"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Orden de Ordenamiento</label>
                  <input 
                    type="number" 
                    value={projForm.sort_order}
                    onChange={(e) => setProjForm({ ...projForm, sort_order: parseInt(e.target.value) })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-700 font-bold uppercase">Descripción Detallada</label>
                <textarea 
                  rows={4}
                  required
                  value={projForm.description}
                  onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                  className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink resize-none"
                />
              </div>

              <button 
                type="submit"
                className="px-4 py-2.5 bg-brand-yellow hover:bg-black hover:text-white border-2 border-black text-black font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {isEditingProj ? <><Save size={12} /> Modificar</> : <><Plus size={12} /> Crear Proyecto</>}
              </button>
            </form>

            {/* List */}
            <div className="space-y-4 font-mono text-xs">
              {data.projects.map((proj) => (
                <div key={proj.id} className="border-2 border-black p-4 bg-white flex justify-between items-center gap-4 hover:shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div>
                    <span className="font-mono text-zinc-500 text-[10px] uppercase border border-zinc-300 bg-zinc-50 px-2 py-0.5">{proj.category}</span>
                    <h4 className="font-bold text-black uppercase text-sm mt-2">{proj.title}</h4>
                    {proj.link_url && <a href={proj.link_url} target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:text-black text-xs underline block mt-1">{proj.link_url}</a>}
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button 
                      onClick={() => handleEditProj(proj)}
                      className="p-2 border-2 border-black text-black hover:bg-brand-pink hover:text-white cursor-pointer hover:shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                    >
                      <Edit2 size={12} />
                    </button>
                    <button 
                      onClick={() => proj.id && handleDeleteProj(proj.id)}
                      className="p-2 border-2 border-black text-black hover:bg-brand-pink hover:text-white cursor-pointer hover:shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PUBLICATIONS */}
        {activeTab === 'publications' && (
          <div>
            <h2 className="text-xl font-bold font-mono uppercase text-brand-pink mb-6 pb-2 border-b-2 border-black flex justify-between items-center">
              <span className="flex items-center gap-2"><BookOpen size={18} /> Investigación y Artículos Académicos</span>
              {isEditingPub && (
                <button onClick={resetPubForm} className="text-xs uppercase text-zinc-500 hover:text-black cursor-pointer">
                  Cancelar Edición
                </button>
              )}
            </h2>

            {/* Form */}
            <form onSubmit={handlePubSubmit} className="bg-zinc-50 border-2 border-black p-6 mb-8 space-y-4 font-mono text-xs shadow-neo">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Título del Paper / Artículo</label>
                  <input 
                    type="text" 
                    required
                    value={pubForm.title}
                    onChange={(e) => setPubForm({ ...pubForm, title: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Autores</label>
                  <input 
                    type="text" 
                    required
                    value={pubForm.authors}
                    onChange={(e) => setPubForm({ ...pubForm, authors: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Revista / Congreso / Libro</label>
                  <input 
                    type="text" 
                    required
                    value={pubForm.journal_event}
                    onChange={(e) => setPubForm({ ...pubForm, journal_event: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">Año de Publicación</label>
                  <input 
                    type="number" 
                    required
                    value={pubForm.publication_year}
                    onChange={(e) => setPubForm({ ...pubForm, publication_year: parseInt(e.target.value) })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-700 font-bold uppercase">URL Enlace de Lectura</label>
                  <input 
                    type="url" 
                    value={pubForm.link_url}
                    onChange={(e) => setPubForm({ ...pubForm, link_url: e.target.value })}
                    className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label className="flex items-center gap-2 text-black font-bold cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={pubForm.is_coil}
                    onChange={(e) => setPubForm({ ...pubForm, is_coil: e.target.checked })}
                    className="accent-brand-pink w-4 h-4"
                  />
                  ¿FUE UNA COLABORACIÓN INTERNACIONAL COIL?
                </label>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-700 font-bold uppercase">Descripción Corta / Abstract</label>
                <textarea 
                  rows={3}
                  required
                  value={pubForm.description}
                  onChange={(e) => setPubForm({ ...pubForm, description: e.target.value })}
                  className="w-full bg-white border-2 border-black p-2.5 text-black focus:outline-none focus:border-brand-pink resize-none"
                />
              </div>

              <button 
                type="submit"
                className="px-4 py-2.5 bg-brand-yellow hover:bg-black hover:text-white border-2 border-black text-black font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {isEditingPub ? <><Save size={12} /> Modificar</> : <><Plus size={12} /> Publicar</>}
              </button>
            </form>

            {/* List */}
            <div className="space-y-4 font-mono text-xs">
              {data.publications.map((pub) => (
                <div key={pub.id} className="border-2 border-black p-4 bg-white flex justify-between items-center gap-4 hover:shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div>
                    <div className="flex gap-2">
                      <span className="text-[10px] text-zinc-700 border border-zinc-300 bg-zinc-50 px-2 font-bold">{pub.publication_year}</span>
                      {pub.is_coil && <span className="text-[10px] text-brand-pink font-bold border border-brand-pink/20 bg-brand-pink/5 px-2">COIL</span>}
                    </div>
                    <h4 className="font-bold text-black uppercase text-sm mt-2">&ldquo;{pub.title}&rdquo;</h4>
                    <span className="text-zinc-500 text-xs block mt-1">{pub.authors}</span>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button 
                      onClick={() => handleEditPub(pub)}
                      className="p-2 border-2 border-black text-black hover:bg-brand-pink hover:text-white cursor-pointer hover:shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                    >
                      <Edit2 size={12} />
                    </button>
                    <button 
                      onClick={() => pub.id && handleDeletePub(pub.id)}
                      className="p-2 border-2 border-black text-black hover:bg-brand-pink hover:text-white cursor-pointer hover:shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: MESSAGES */}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-xl font-bold font-mono uppercase text-brand-pink mb-6 pb-2 border-b-2 border-black flex items-center gap-2">
              <Mail size={18} /> Bandeja de Mensajes
            </h2>

            <div className="space-y-4 font-mono text-xs">
              {data.messages.length === 0 ? (
                <div className="text-zinc-500 text-center py-10 uppercase">
                  Bandeja vacía. No has recibido mensajes de contacto todavía.
                </div>
              ) : (
                data.messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`border-2 p-6 transition-all shadow-neo ${msg.status === 'unread' ? 'border-brand-pink bg-brand-pink/5' : 'border-black bg-white'}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b-2 border-black pb-3 mb-4">
                      <div>
                        <span className="text-black font-bold text-sm block">{msg.name}</span>
                        <span className="text-zinc-600 font-semibold underline decoration-zinc-300">{msg.email}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-zinc-500 mr-2 font-bold">
                          {new Date(msg.created_at).toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}
                        </span>
                        
                        <button 
                          onClick={() => handleToggleMsgStatus(msg.id, msg.status)}
                          className={`px-2 py-1 border-2 border-black text-[9px] uppercase cursor-pointer transition-all shadow-neo active:translate-x-[1px] active:translate-y-[1px] ${msg.status === 'unread' ? 'bg-brand-cyan text-white hover:bg-black' : 'bg-zinc-50 text-black hover:bg-zinc-100'}`}
                        >
                          {msg.status === 'unread' ? 'Marcar Leído' : 'Marcar No Leído'}
                        </button>
                        
                        <button 
                          onClick={() => handleDeleteMsg(msg.id)}
                          className="p-1.5 border-2 border-black text-black hover:bg-brand-pink hover:text-white cursor-pointer active:translate-x-[1px] active:translate-y-[1px]"
                          title="Eliminar Mensaje"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-brand-pink font-extrabold uppercase text-[10px]">
                        ASUNTO: {msg.subject || 'SIN ASUNTO'}
                      </div>
                      <p className="text-zinc-800 font-sans text-sm whitespace-pre-wrap leading-relaxed">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
