'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, CheckCircle2, Clock, Laptop, Calendar, 
  Sparkles, ExternalLink, MessageCircle, ShieldCheck, 
  Layers, Code2, Rocket, ArrowRight, UserCheck, Users,
  Database, Server, Mail, Terminal, Lock, Trash2, Edit3,
  Plus, Send, RefreshCw, CheckCheck, HelpCircle, HardDrive,
  Workflow, ArrowUpRight, Check
} from 'lucide-react'

interface LeadRecord {
  id: number
  nombre: string
  email: string
  servicio: string
  fecha: string
  notificado: boolean
}

export default function DeInternetAAplicacionPage() {
  const waUrlGroup = 'https://wa.me/523335769348?text=Hola%2C%20me%20interesa%20el%20taller%20%22De%20Internet%20a%20Aplicaci%C3%B3n%22.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%3F'
  const waUrlPersonal = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso%20personal%20o%20asesor%C3%ADa%201%20a%201%20de%20%22De%20Internet%20a%20Aplicaci%C3%B3n%22.'
  const waUrlBook = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20taller%20%22De%20Internet%20a%20Aplicaci%C3%B3n%22.'

  // Interactive Live CRUD & Supabase Simulator State
  const [records, setRecords] = useState<LeadRecord[]>([
    { id: 1, nombre: 'Ana Sofía Ruiz', email: 'ana@estudio.mx', servicio: 'Consultoría Web', fecha: '28 Ago 10:14', notificado: true },
    { id: 2, nombre: 'Carlos Mendoza', email: 'carlos@techcorp.com', servicio: 'Integración IA', fecha: '28 Ago 11:30', notificado: true },
    { id: 3, nombre: 'Mariana López', email: 'mlopez@agencia.com', servicio: 'Desarrollo App', fecha: '28 Ago 12:05', notificado: true },
  ])
  
  const [formNombre, setFormNombre] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formServicio, setFormServicio] = useState('Consultoría Web')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [lastNotification, setLastNotification] = useState<string | null>(null)
  const [isSending, setIsSending] = useState(false)

  const handleSaveRecord = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formNombre.trim() || !formEmail.trim()) return

    setIsSending(true)

    setTimeout(() => {
      if (editingId !== null) {
        // Update
        setRecords(prev => prev.map(rec => rec.id === editingId ? {
          ...rec,
          nombre: formNombre,
          email: formEmail,
          servicio: formServicio
        } : rec))
        setEditingId(null)
      } else {
        // Create
        const newRecord: LeadRecord = {
          id: Date.now(),
          nombre: formNombre,
          email: formEmail,
          servicio: formServicio,
          fecha: 'Ahora',
          notificado: true
        }
        setRecords(prev => [newRecord, ...prev])
        setLastNotification(`Correo enviado a ${formEmail} vía Resend`)
      }

      setFormNombre('')
      setFormEmail('')
      setIsSending(false)
    }, 400)
  }

  const handleDeleteRecord = (id: number) => {
    setRecords(prev => prev.filter(rec => rec.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setFormNombre('')
      setFormEmail('')
    }
  }

  const handleEditRecord = (rec: LeadRecord) => {
    setEditingId(rec.id)
    setFormNombre(rec.nombre)
    setFormEmail(rec.email)
    setFormServicio(rec.servicio)
  }

  return (
    <div className="min-h-screen bg-background text-foreground tech-grid flex flex-col">
      {/* Top sticky navigation */}
      <header className="border-b-2 border-black bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link 
            href="/#courses" 
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-black hover:text-brand-pink transition-colors"
          >
            <ArrowLeft size={16} /> Volver a cursos
          </Link>
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="hidden sm:inline bg-brand-yellow px-2 py-0.5 border border-black font-bold">
              ESTACIÓN 2 · RUTA WEB
            </span>
            <a 
              href={waUrlBook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-black text-white hover:bg-brand-pink font-bold border-2 border-black transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <MessageCircle size={14} /> APARTAR LUGAR
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-16 flex-1 w-full">
        
        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000]">
            <Sparkles size={14} /> RUTA WEB Y PRODUCTOS DIGITALES · NIVEL 2
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-sans leading-none">
            De Internet a Aplicación
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold font-sans text-zinc-800 max-w-3xl leading-snug">
            Convierte una página web estática en una aplicación real que guarda, consulta, actualiza y muestra información.
          </p>

          <p className="text-base sm:text-lg text-zinc-600 font-sans max-w-3xl leading-relaxed">
            Tu sitio web deja de ser una simple vitrina digital y se transforma en una aplicación funcional conectada a una base de datos PostgreSQL en la nube (Supabase), con operaciones CRUD, notificaciones por correo (Resend) y despliegue continuo en Vercel.
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Clock size={14} className="text-brand-pink" /> Duración
              </div>
              <div className="text-base font-extrabold text-black">4 Horas</div>
              <div className="text-[11px] text-zinc-600">Sesión intensiva</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Laptop size={14} className="text-brand-pink" /> Modalidad
              </div>
              <div className="text-base font-extrabold text-black">Presencial / Online</div>
              <div className="text-[11px] text-zinc-600">En vivo con tu código</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Workflow size={14} className="text-brand-pink" /> Nivel
              </div>
              <div className="text-base font-extrabold text-black">Continuación</div>
              <div className="text-[11px] text-zinc-600">Requiere web publicada</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Users size={14} className="text-brand-pink" /> Cupo
              </div>
              <div className="text-base font-extrabold text-black">8 - 15 Cupos</div>
              <div className="text-[11px] text-zinc-600">Acompañamiento 100%</div>
            </div>
          </div>
        </section>

        {/* 3 CORE PILLARS */}
        <section className="bg-black text-white p-6 sm:p-8 border-2 border-black shadow-neo">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                01
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Base de Datos en la Nube</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Conecta tu frontend con Supabase (PostgreSQL). Crea tablas, columnas y reglas de seguridad para almacenar registros persistentes.
              </p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                02
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">CRUD Completo</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Aprende el ciclo de vida de los datos: Crear nuevos registros con formularios, Leer y mostrarlos en tiempo real, Actualizar y Eliminar.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                03
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Emails & Producción</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Integra la API de Resend para disparar correos transaccionales automáticos ante nuevos registros y redespliega en Vercel con variables de entorno seguras.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE LIVE CRUD & SUPABASE SIMULATOR COMPONENT */}
        <section id="crud-simulator" className="space-y-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// DEMO INTERACTIVA · ARQUITECTURA DEL TALLER"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Simulador: Base de Datos & Notificaciones
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-1 max-w-2xl">
                Prueba en vivo cómo funciona la conexión entre el formulario web, la base de datos Supabase y el envío automático de correos con Resend.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 border border-emerald-500 font-bold flex items-center gap-1.5">
                <Database size={13} /> SUPABASE CONNECTED
              </span>
            </div>
          </div>

          {/* Simulator Frame */}
          <div className="border-4 border-black bg-zinc-950 p-4 sm:p-6 shadow-neo text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Form (Frontend View) */}
              <div className="lg:col-span-5 bg-zinc-900 border-2 border-zinc-700 p-4 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="font-mono text-xs font-bold text-brand-yellow flex items-center gap-1.5">
                    <Laptop size={14} /> FORMULARIO EN TU WEB
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {editingId ? 'MODO: EDITAR' : 'MODO: CREAR'}
                  </span>
                </div>

                <form onSubmit={handleSaveRecord} className="space-y-3 font-mono text-xs">
                  <div>
                    <label className="block text-zinc-400 mb-1 text-[11px]">Nombre Completo</label>
                    <input
                      type="text"
                      value={formNombre}
                      onChange={e => setFormNombre(e.target.value)}
                      placeholder="Ej. Laura González"
                      className="w-full px-3 py-2 bg-black border border-zinc-700 text-white focus:border-brand-yellow focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1 text-[11px]">Correo Electrónico</label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={e => setFormEmail(e.target.value)}
                      placeholder="laura@empresa.com"
                      className="w-full px-3 py-2 bg-black border border-zinc-700 text-white focus:border-brand-yellow focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1 text-[11px]">Servicio Solicitado</label>
                    <select
                      value={formServicio}
                      onChange={e => setFormServicio(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-zinc-700 text-white focus:border-brand-yellow focus:outline-none cursor-pointer"
                    >
                      <option value="Consultoría Web">Consultoría Web</option>
                      <option value="Integración IA">Integración IA</option>
                      <option value="Desarrollo App">Desarrollo App</option>
                      <option value="Diseño UI/UX">Diseño UI/UX</option>
                    </select>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="flex-1 py-2.5 bg-brand-yellow text-black font-bold border border-white hover:bg-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_#fff]"
                    >
                      {editingId ? <Edit3 size={14} /> : <Plus size={14} />}
                      {editingId ? 'GUARDAR CAMBIOS' : 'ENVIAR & GUARDAR'}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={() => { setEditingId(null); setFormNombre(''); setFormEmail(''); }}
                        className="px-3 py-2.5 bg-zinc-800 text-white hover:bg-zinc-700 transition-all font-bold"
                      >
                        Cancelar
                      </button>
                    )}
                  </div>
                </form>

                {lastNotification && (
                  <div className="bg-emerald-950/80 border border-emerald-600 p-2.5 font-mono text-[11px] text-emerald-300 flex items-center gap-2 animate-pulse">
                    <Mail size={14} className="shrink-0 text-emerald-400" />
                    <span>{lastNotification}</span>
                  </div>
                )}
              </div>

              {/* Right Column: Database Table (Backend/Supabase View) */}
              <div className="lg:col-span-7 bg-black border-2 border-zinc-800 p-4 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <Database size={14} /> TABLA EN SUPABASE: `leads_clientes`
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">{records.length} REGISTROS</span>
                  </div>

                  {/* Data Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full font-mono text-xs text-left border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-800 text-zinc-400 text-[10px] uppercase">
                          <th className="py-1.5 px-2">ID</th>
                          <th className="py-1.5 px-2">Nombre</th>
                          <th className="py-1.5 px-2">Email</th>
                          <th className="py-1.5 px-2">Servicio</th>
                          <th className="py-1.5 px-2 text-right">Acciones</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-900">
                        {records.map(rec => (
                          <tr key={rec.id} className="hover:bg-zinc-900/60 transition-colors">
                            <td className="py-2 px-2 text-zinc-500 text-[10px]">{rec.id.toString().slice(-4)}</td>
                            <td className="py-2 px-2 font-bold text-white">{rec.nombre}</td>
                            <td className="py-2 px-2 text-zinc-300">{rec.email}</td>
                            <td className="py-2 px-2">
                              <span className="px-1.5 py-0.5 bg-zinc-800 text-brand-yellow text-[10px] border border-zinc-700">
                                {rec.servicio}
                              </span>
                            </td>
                            <td className="py-2 px-2 text-right space-x-1.5">
                              <button
                                onClick={() => handleEditRecord(rec)}
                                className="text-zinc-400 hover:text-brand-yellow p-1 transition-colors cursor-pointer"
                                title="Editar"
                              >
                                <Edit3 size={13} />
                              </button>
                              <button
                                onClick={() => handleDeleteRecord(rec.id)}
                                className="text-zinc-400 hover:text-red-400 p-1 transition-colors cursor-pointer"
                                title="Eliminar"
                              >
                                <Trash2 size={13} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex flex-wrap items-center justify-between font-mono text-[11px] text-zinc-400 gap-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>Row Level Security (RLS) Activado</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail size={14} className="text-brand-pink" />
                    <span>Webhook de Resend API configurado</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TARGET AUDIENCE SECTION */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// PERFIL DE PARTICIPANTES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              ¿A quién está dirigido?
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Ideal para creadores y profesionales que ya tienen una web publicada y quieren dar el salto a construir aplicaciones con datos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Egresados Taller 1
              </span>
              <h3 className="font-bold text-black text-sm uppercase">De Cero a Internet</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Personas que ya tienen su sitio estático en Vercel y quieren transformarlo en un sistema interactivo con formularios y base de datos.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Emprendedores
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Captación de Clientes</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Dueños de negocio que necesitan recibir solicitudes, registrar prospectos y recibir avisos al correo en automático sin pagar suscripciones.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Diseñadores Web
              </span>
              <h3 className="font-bold text-black text-sm uppercase">De Vitrina a Sistema</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Diseñadores que quieren ofrecer a sus clientes páginas con paneles de administración, bases de datos y registros editables.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Curiosos & No-Coders
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Fullstack Práctico</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Aprende cómo interactúan Frontend, Backend, APIs y Bases de Datos de forma visual y sin años de teoría técnica.
              </p>
            </div>
          </div>
        </section>

        {/* 4-STEP PRACTICAL WORKFLOW */}
        <section className="bg-white border-2 border-black p-6 sm:p-10 shadow-neo space-y-8">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// METODOLOGÍA DEL TALLER"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Flujo de Trabajo en 4 Pasos
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Paso a paso, desde crear tu tabla en PostgreSQL hasta recibir notificaciones en tu bandeja de entrada en producción.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="border-2 border-black p-4 bg-zinc-50 space-y-2 relative">
              <div className="text-brand-pink font-extrabold text-2xl">01</div>
              <h3 className="font-bold text-black text-sm uppercase">Configurar Supabase</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Crea tu proyecto en la nube, define la tabla en PostgreSQL con su esquema y obtén las claves de API seguras.
              </p>
            </div>

            <div className="border-2 border-black p-4 bg-zinc-50 space-y-2 relative">
              <div className="text-brand-pink font-extrabold text-2xl">02</div>
              <h3 className="font-bold text-black text-sm uppercase">Conectar Frontend</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Integra el cliente de JavaScript de Supabase y maneja variables de entorno (`.env.local`) de forma profesional.
              </p>
            </div>

            <div className="border-2 border-black p-4 bg-zinc-50 space-y-2 relative">
              <div className="text-brand-pink font-extrabold text-2xl">03</div>
              <h3 className="font-bold text-black text-sm uppercase">Implementar CRUD</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Construye el formulario para Crear registros, la vista para Leerlos en tiempo real, y los botones para Editar y Eliminar.
              </p>
            </div>

            <div className="border-2 border-black p-4 bg-zinc-50 space-y-2 relative">
              <div className="text-brand-pink font-extrabold text-2xl">04</div>
              <h3 className="font-bold text-black text-sm uppercase">Emails & Vercel</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Conecta la API de Resend para disparar emails automáticos, configura variables en Vercel y publica en tu dominio.
              </p>
            </div>
          </div>
        </section>

        {/* DETAILED 6-BLOCK CURRICULUM */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// TEMARIO DETALLADO"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Estructura del Taller (4 Horas)
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
                4 horas intensivas divididas en 5 bloques prácticos y 2 descansos.
              </p>
            </div>
            
            <div className="font-mono text-xs text-zinc-500 bg-zinc-100 p-2 border border-black inline-block">
              Total: 4 Horas · 100% Funcional
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            {/* Block 1 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 1</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 45 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Frontend, Backend y Bases de Datos
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Qué hace cada capa y por qué una web estática no puede recordar información. Tablas, registros, campos y IDs. Creación del proyecto y primera tabla en Supabase desde su editor visual.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Arquitectura cliente-servidor sin tecnicismos</div>
                <div>✓ Configuración de tabla en PostgreSQL en la nube</div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 2</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 50 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Conexión y Variables de Entorno Seguras
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Instalación del cliente oficial de Supabase. Qué son las variables de entorno (`.env`) y por qué nunca debes subir tus claves secretas a GitHub. Configuración local y en Vercel.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Buenas prácticas de seguridad para API Keys</div>
                <div>✓ Inicialización del cliente de base de datos</div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 3</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 50 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Guardar y Mostrar Datos (Create & Read)
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Construcción del formulario HTML conectado a Supabase. Envío de datos con validación y consulta/renderizado en tiempo real de los registros guardados en la pantalla del usuario.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Inserción de datos (INSERT)</div>
                <div>✓ Lectura y renderizado reactivo (SELECT)</div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 4</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 45 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                CRUD Completo (Update & Delete)
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Actualización de registros existentes directamente desde la interfaz. Eliminación de datos con ventana de confirmación para evitar borrados accidentales.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Edición en línea (UPDATE)</div>
                <div>✓ Eliminación segura (DELETE)</div>
              </div>
            </div>

            {/* Block 5 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 5</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 35 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Notificaciones por Correo con Resend
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Creación de cuenta y API Key en Resend. Disparo de un correo transaccional automático cada vez que un nuevo usuario llena el formulario en tu sitio web.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Plantillas de correo dinámicas</div>
                <div>✓ Avisos inmediatos a tu bandeja de entrada</div>
              </div>
            </div>

            {/* Block 6 / Cierre */}
            <div className="border-2 border-black bg-brand-yellow/30 p-6 shadow-neo space-y-3 border-brand-yellow">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">CIERRE</span>
                <span className="text-zinc-700 font-bold flex items-center gap-1"><Clock size={12} /> 20 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Seguridad & Despliegue en Producción
              </h3>
              <p className="text-zinc-800 font-sans text-xs leading-relaxed">
                Activación de Row Level Security (RLS) en Supabase, verificación de variables en Vercel y prueba final del flujo completo en la URL pública del alumno.
              </p>
              <div className="pt-2 border-t border-black/20 text-zinc-900 text-[11px] space-y-1 font-bold">
                <div>★ Web App 100% funcional en producción</div>
                <div>★ Formulario, Base de datos y Emails activos</div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES & REQUIREMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-2 border-black">
          {/* Deliverables */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-neo space-y-4">
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// LO QUE TE LLEVAS"}
            </span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans">
              Entregable Final del Taller
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Aplicación web publicada en Vercel</strong> con URL pública y segura (HTTPS).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Base de datos real en Supabase (PostgreSQL)</strong> configurada y lista para recibir miles de registros.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Sistema CRUD completo</strong> para guardar, consultar, editar y borrar información desde la web.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Notificaciones automáticas por correo (Resend)</strong> cada vez que entra un nuevo contacto.</span>
              </li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-zinc-50 border-2 border-black p-6 sm:p-8 shadow-neo space-y-4">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
              {"// PRERREQUISITOS TÉCNICOS"}
            </span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans">
              ¿Qué necesitas antes del taller?
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                <span><strong className="text-black">Haber tomado "De Cero a Internet"</strong> o tener un sitio web estático ya publicado en Vercel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                <span><strong className="text-black">Cuenta de GitHub activa</strong> y repositorio de tu página web clonado en tu laptop.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                <span><strong className="text-black">Cuentas gratuitas creadas</strong> en Supabase (supabase.com) y Resend (resend.com).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">4</span>
                <span><strong className="text-black">Laptop con Node.js (v18+)</strong> y un editor de código instalado (VS Code recomendado).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* MODALITIES & PRICING */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// MODALIDADES DISPONIBLES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Elige tu modalidad
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Disponible en formato grupal en vivo para aprender en comunidad, o en asesoría técnica personalizada 1 a 1 para tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
            {/* Group Option */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-yellow px-2.5 py-1 border border-black font-bold uppercase text-xs">
                    TALLER GRUPAL
                  </span>
                  <span className="text-zinc-500 font-bold">8 - 15 personas</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-black">
                  Sesión Grupal en Vivo
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Acompañamiento en tiempo real para conectar tu web, resolver dudas de bases de datos y salir con tu app funcionando.
                </p>
                <div className="border-t border-zinc-200 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Sesión intensiva de 4 horas
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Presencial o Virtual interactivo
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Soporte técnico en vivo para cada alumno
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href={waUrlGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-black text-white font-bold border-2 border-black hover:bg-brand-yellow hover:text-black transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <MessageCircle size={16} /> CONSULTAR PRÓXIMA FECHA
                </a>
              </div>
            </div>

            {/* 1-on-1 Option */}
            <div className="border-4 border-black bg-zinc-950 text-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-pink text-white px-2.5 py-1 border border-white font-bold uppercase text-xs">
                    MENTORÍA DIRECTA
                  </span>
                  <span className="text-zinc-400 font-bold">1 a 1</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-white">
                  Sesión 1 a 1 con Rubén
                </h3>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Para quienes quieren implementar una base de datos o sistema de gestión específico para su negocio propio.
                </p>
                <div className="border-t border-zinc-800 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Sesión privada adaptada a tu propio proyecto
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Modelado de datos a la medida de tu negocio
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Revisión de arquitectura y seguridad
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href={waUrlPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-yellow text-black font-bold border-2 border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_#fff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <MessageCircle size={16} /> COTIZAR SESIÓN PRIVADA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// RESOLUCIÓN DE DUDAS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Necesito ser programador avanzado para tomarlo?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. Solo necesitas tener nociones básicas de HTML/CSS y haber seguido el flujo de Git/Vercel visto en el taller "De Cero a Internet".
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Las herramientas tienen costo durante o después del taller?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. Supabase, Resend, GitHub y Vercel ofrecen niveles gratuitos (Free Tier) sumamente generosos, ideales para tus primeros proyectos.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Qué pasa si mis datos crecen mucho en el futuro?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Supabase corre sobre PostgreSQL estándar, la base de datos relacional más sólida del mundo. Tu aplicación estará lista para escalar sin rehacer el código.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Cuál es el siguiente paso sugerido en la ruta?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Este taller conecta con "De aplicación a producto" (autenticación de usuarios, login y paneles privados) y luego "De producto a negocio" (cobros y pagos).
              </p>
            </div>
          </div>
        </section>

        {/* FINAL BANNER CTA */}
        <section className="bg-black text-white p-8 sm:p-12 border-2 border-black shadow-neo text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-yellow font-bold">
              {"// REGISTRO & CONTACTO DIRECTO"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-sans">
              ¡Dale vida y datos a tu página web!
            </h2>
            <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
              Convierte tu diseño en una aplicación web interactiva que guarda información y envía correos en solo 4 horas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={waUrlGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25d366] text-black font-mono font-bold text-base border-2 border-white hover:bg-brand-yellow hover:text-black transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_#fff]"
            >
              <MessageCircle size={20} /> ESCRÍBENOS POR WHATSAPP
            </a>
          </div>

          <div className="font-mono text-xs text-zinc-400 pt-4 border-t border-zinc-800">
            Información e inscripción directa al WhatsApp: <span className="text-brand-yellow font-bold">333 576 9348</span>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t-2 border-black bg-white py-6 px-6 text-center font-mono text-xs text-zinc-500">
        <div>© {new Date().getFullYear()} Rubén Oroz · Taller De Internet a Aplicación · Todos los derechos reservados</div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={waUrlGroup}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
        title="Contactar por WhatsApp"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

    </div>
  )
}
