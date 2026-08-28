'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, CheckCircle2, Clock, Laptop, Calendar, 
  Sparkles, ExternalLink, MessageCircle, ShieldCheck, 
  Layers, Code2, Rocket, ArrowRight, UserCheck, Users,
  Palette, PenTool, Layout, Film, Share2, Bot, Briefcase,
  Zap, Copy, Check, CheckCheck, HelpCircle, Terminal,
  Cpu, Building2, Workflow, Sliders, Award
} from 'lucide-react'

interface RoleWorkflow {
  id: string
  role: string
  label: string
  task: string
  assistantRole: string
  promptBlueprint: string
  deliverable: string
}

export default function IAEquiposCreativosPage() {
  const waUrlGroup = 'https://wa.me/523335769348?text=Hola%2C%20me%20interesa%20el%20programa%20%22IA%20para%20Equipos%20Creativos%22%20para%20mi%20empresa%20o%20agencia.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%3F'
  const waUrlPersonal = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20cotizar%20el%20workshop%20In-Company%20de%20%22IA%20para%20Equipos%20Creativos%22.'
  const waUrlBook = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20agendar%20una%20reuni%C3%B3n%20para%20el%20taller%20%22IA%20para%20Equipos%20Creativos%22.'

  // Interactive Creative Suite Simulator State
  const [selectedProfile, setSelectedProfile] = useState<string>('arte')
  const [copiedAssistant, setCopiedAssistant] = useState(false)

  const profiles: { [key: string]: RoleWorkflow } = {
    arte: {
      id: 'arte',
      role: 'Dirección de Arte & Diseño',
      label: 'DIRECCIÓN DE ARTE',
      task: 'De Brief a Key Visual & Moodboard con consistencia de marca',
      assistantRole: 'Asistente de Dirección de Arte & Fotografía',
      promptBlueprint: `Actúa como Director de Arte Senior. Analiza este brief: [OBJETIVO DE CAMPAÑA + BRAND GUIDELINES].
Genera:
1. 3 Territorios Conceptuales contrastantes (Nombre, Metáfora visual, Paleta cromática HSL, Iluminación).
2. Especificación de Key Visual: Lente fotográfico, composición (regla de tercios/simetría), materiales y estilo de render.
3. Prompt de generación para ChatGPT/Firefly priorizando consistencia de marca y evitando clichés visuales.`,
      deliverable: 'Key Visual maestro + Guía de prompts para adaptaciones 1:1, 9:16 y 16:9.'
    },
    copy: {
      id: 'copy',
      role: 'Redacción & Copywriting',
      label: 'COPY & CONTENIDO',
      task: 'Redacción de conceptos de campaña, titulares y variantes multicanal',
      assistantRole: 'Asistente de Copywriting Institucional & Tono de Marca',
      promptBlueprint: `Actúa como Copywriter Creativo para [MARCA].
Objetivo: Generar una familia de copys para campaña digital.
Reglas de tono: [Cercano / Innovador / Sofisticado / Directo]. Evita muletillas de IA.
Entrega:
• 5 Opciones de Manifiesto / Tagline principal (máx. 8 palabras).
• 3 Variantes de Titulares para anuncio display y carrusel.
• 3 Guiones de audio/voz en off para video de 15 segundos con gancho inicial y llamado a la acción.`,
      deliverable: 'Matriz de copys por canal + Guiones de locución con timing.'
    },
    motion: {
      id: 'motion',
      role: 'Animación, Motion & Video',
      label: 'MOTION & AUDIOVISUAL',
      task: 'De Key Visual estático a Storyboard animado y microsecuencia',
      assistantRole: 'Asistente de Preproducción & Dirección Audiovisual',
      promptBlueprint: `Actúa como Director de Motion Graphics. Toma este Key Visual: [IMAGEN DE CAMPAÑA].
Estructura una microsecuencia animada de 10 segundos en 3 tomas:
1. Desglose en capas (Fondo, Sujeto, Tipografía, Partículas).
2. Definición de movimiento de cámara (Dolly, Pan, Zoom) y velocidad (easing).
3. Prompt de Imagen-a-Video para Runway/Veo con restricciones estrictas de conservación de identidad.`,
      deliverable: 'Shot list con timing + Prompts de animación + Hoja de capas.'
    },
    marketing: {
      id: 'marketing',
      role: 'Estrategia & Campañas',
      label: 'MARKETING & PROCESOS',
      task: 'Arquitectura de campaña multiformato y automatización de entregables',
      assistantRole: 'Asistente de Campaña & Automatización Creativa',
      promptBlueprint: `Actúa como Estratega de Marketing Digital. Diseña la matriz de adaptaciones para [LANZAMIENTO]:
• Canales: Instagram, LinkedIn, YouTube Shorts, Web Landing, OOH Cartelera.
• Parámetros por canal: Formato (1:1, 9:16, 16:9), Jerarquía visual y CTA.
• Workflow de producción: Flujo por etapas (Brief → IA Generación → Edición en Suite → Aprobación Humana).`,
      deliverable: 'Matriz de campaña completa + Workflow automatizado de producción.'
    }
  }

  const currentProfile = profiles[selectedProfile]

  const handleCopyAssistant = () => {
    const fullText = `ASISTENTE CREATIVO ESPECIALIZADO (${currentProfile.role.toUpperCase()}):
ROL: ${currentProfile.assistantRole}
OBJETIVO: ${currentProfile.task}

INSTRUCCIONES / BLUEPRINT DEL PROMPT:
${currentProfile.promptBlueprint}

ENTREGABLE ESPERADO:
${currentProfile.deliverable}`

    navigator.clipboard.writeText(fullText)
    setCopiedAssistant(true)
    setTimeout(() => setCopiedAssistant(false), 2000)
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
              8 A 12 HORAS · PROGRAMA EJECUTIVO
            </span>
            <a 
              href={waUrlBook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-black text-white hover:bg-brand-pink font-bold border-2 border-black transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <MessageCircle size={14} /> COTIZAR WORKSHOP
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-16 flex-1 w-full">
        
        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000]">
            <Building2 size={14} /> PROGRAMA EJECUTIVO IN-COMPANY PARA AGENCIAS & EQUIPOS
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-sans leading-none">
            IA para Equipos Creativos
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold font-sans text-zinc-800 max-w-3xl leading-snug">
            De la Idea al Sistema Multimedia: Pasa del uso aislado de chatbots a un flujo creativo estructurado, reproducible y de calidad profesional.
          </p>

          <p className="text-base sm:text-lg text-zinc-600 font-sans max-w-3xl leading-relaxed">
            Diseñado para agencias de publicidad, estudios de diseño, departamentos de marketing y equipos de comunicación que necesitan integrar la Inteligencia Artificial sin perder consistencia de marca, dirección de arte ni el control humano de la calidad.
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Clock size={14} className="text-brand-pink" /> Duración
              </div>
              <div className="text-base font-extrabold text-black">8 a 12 Horas</div>
              <div className="text-[11px] text-zinc-600">2 Sesiones + Lab opcional</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Building2 size={14} className="text-brand-pink" /> Formato
              </div>
              <div className="text-base font-extrabold text-black">In-Company</div>
              <div className="text-[11px] text-zinc-600">Presencial o Virtual privado</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Layers size={14} className="text-brand-pink" /> Alcance
              </div>
              <div className="text-base font-extrabold text-black">Multimedia</div>
              <div className="text-[11px] text-zinc-600">Arte, Copy, Motion, Web</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Users size={14} className="text-brand-pink" /> Equipos
              </div>
              <div className="text-base font-extrabold text-black">Hasta 20 pax</div>
              <div className="text-[11px] text-zinc-600">Casos reales del área</div>
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
              <h3 className="font-bold text-lg text-brand-yellow uppercase">De Usar a Dirigir IA</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Transforma peticiones simples en briefs creativos profesionales. La IA actúa como director creativo para explorar, cuestionar y refinar, no solo como generador.
              </p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                02
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Consistencia de Marca</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Crea sistemas visuales y familias multiformato (1:1, 9:16, 16:9, motion, web) que respeten estrictamente la paleta, tipografía y lineamientos institucionales.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                03
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Asistentes por Perfil</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Cada participante diseña y se lleva un asistente especializado según su rol: copy institucional, dirección de arte, preproducción audiovisual o estrategia.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE WORKFLOW & CREATIVE ASSISTANT SUITE SIMULATOR */}
        <section id="agency-lab" className="space-y-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// SIMULADOR INTERACTIVO · ASISTENTES POR PERFIL CREATIVO"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Ecosistema: Asistentes de Flujo Creativo
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-1 max-w-2xl">
                Selecciona un rol del equipo para ver cómo se configuran las instrucciones de alto nivel y el entregable que produce cada asistente.
              </p>
            </div>

            {/* Profile Selectors */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {Object.values(profiles).map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProfile(p.id)}
                  className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                    selectedProfile === p.id 
                      ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                      : 'bg-white hover:bg-zinc-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Assistant Frame */}
          <div className="border-4 border-black bg-zinc-950 p-4 sm:p-6 shadow-neo text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Role Overview & Deliverable */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 font-mono text-xs">
                  <span className="font-bold text-brand-yellow flex items-center gap-1.5">
                    <Bot size={15} /> PERFIL: {currentProfile.label}
                  </span>
                  <span className="text-[11px] text-zinc-400">ESPECIALIZADO</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-zinc-900 border-l-4 border-blue-400 p-3">
                    <div className="text-blue-400 font-bold uppercase text-[10px] mb-1">Nombre del Asistente</div>
                    <div className="text-white font-bold text-sm">{currentProfile.assistantRole}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-brand-yellow p-3">
                    <div className="text-brand-yellow font-bold uppercase text-[10px] mb-1">Objetivo del Flujo</div>
                    <div className="text-zinc-300 font-sans text-xs">{currentProfile.task}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-emerald-400 p-3">
                    <div className="text-emerald-400 font-bold uppercase text-[10px] mb-1">Entregable Estandarizado</div>
                    <div className="text-zinc-200 font-sans text-xs">{currentProfile.deliverable}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyAssistant}
                  className="w-full py-2.5 bg-white text-black font-mono font-bold text-xs border-2 border-white hover:bg-brand-yellow transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#fff] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  {copiedAssistant ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  {copiedAssistant ? '¡BLUEPRINT COPIADO!' : 'COPIAR BLUEPRINT DEL ASISTENTE'}
                </button>
              </div>

              {/* Right Column: Prompt Master Blueprint */}
              <div className="lg:col-span-7 bg-black border-2 border-zinc-800 p-4 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <Terminal size={14} /> INSTRUCCIONES DEL SISTEMA (SYSTEM PROMPT)
                    </span>
                    <span className="text-[10px] font-mono bg-zinc-900 text-zinc-300 px-2 py-0.5 border border-zinc-700">
                      STACK TRANSFERIBLE
                    </span>
                  </div>

                  <div className="bg-zinc-950 p-4 border border-zinc-800 font-mono text-xs text-zinc-200 whitespace-pre-line leading-relaxed min-h-[240px]">
                    {currentProfile.promptBlueprint}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex flex-wrap items-center justify-between font-mono text-[11px] text-zinc-400 gap-2">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCheck size={14} /> Reutilizable en ChatGPT / Claude / Gemini
                  </span>
                  <span>Criterio humano como filtro final</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TARGET AUDIENCE & PROFILES */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// PERFILES PARTICIPANTES EN LA EMPRESA"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Capacitación Integral por Áreas
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              El programa unifica el lenguaje técnico de todo el departamento creativo y brinda herramientas específicas a cada rol.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Diseño & Dirección de Arte
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Key Visuals & Brand Guidelines</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Moodboards conceptuales, key visuals de alta fidelidad, paletas cromáticas, dirección fotográfica y adaptaciones multiformato.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Redacción & Contenido
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Copywriting & Tono de Marca</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Manifiestos de marca, copys para campañas digitales, guiones de locución, variantes por canal y eliminación de clichés de IA.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Motion & Audiovisual
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Animación & Video Generativo</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                De piezas estáticas a secuencias animadas de 5-10s, dirección de cámaras, consistencia de sujetos y preproducción de video.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Marketing & Estrategia
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Campañas & Automatización</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Lanzamientos de producto, matrices de adaptaciones para redes, optimización de tiempos de entrega y workflows de producción.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                UX / UI & Web
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Arquitectura & Prototipos</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Traducción de campañas a wireframes y landings interactivas, consistencia responsiva y prototipos rápidos sin programar.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Líderes & Directores
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Gobernanza & Calidad</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Criterios de control de calidad, derechos de uso comercial, seguridad de datos corporativos y estandarización del flujo creativo.
              </p>
            </div>
          </div>
        </section>

        {/* 2 SESSIONS + OPTIONAL IMPLEMENTATION LAB STRUCTURE */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// ESTRUCTURA MODULAR DEL PROGRAMA"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Programa de 8 a 12 Horas
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Dos sesiones base de 4 horas + un Laboratorio de Implementación opcional para resolver casos reales de tu agencia o empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-xs">
            {/* Session 1 */}
            <div className="border-4 border-black bg-white p-6 shadow-neo space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 bg-black text-white font-bold text-xs">SESIÓN 1</span>
                  <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 4 HORAS</span>
                </div>
                <h3 className="text-xl font-extrabold uppercase font-sans text-black">
                  IA para Pensar, Diseñar y Producir
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Pasar del uso aislado de chatbots a un proceso creativo estructurado y reproducible.
                </p>
                <div className="space-y-2 pt-2 border-t border-zinc-200 text-zinc-700 text-[11px]">
                  <div><strong>Bloque 1:</strong> De usar IA a dirigir IA (Brief creativo)</div>
                  <div><strong>Bloque 2:</strong> IA como Director Creativo (Territorios)</div>
                  <div><strong>Bloque 3:</strong> Generación y edición de Key Visuals</div>
                  <div><strong>Bloque 4:</strong> Consistencia de marca multiformato</div>
                </div>
              </div>
              <div className="p-2.5 bg-zinc-100 border border-black font-bold text-[11px] text-black">
                ★ Entregable: Key Visual + Familia Multiformato
              </div>
            </div>

            {/* Session 2 */}
            <div className="border-4 border-black bg-white p-6 shadow-neo space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 bg-black text-white font-bold text-xs">SESIÓN 2</span>
                  <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 4 HORAS</span>
                </div>
                <h3 className="text-xl font-extrabold uppercase font-sans text-black">
                  Del Diseño al Sistema Multimedia
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Extender el diseño estático hacia motion graphics, video con IA, web y asistentes por puesto.
                </p>
                <div className="space-y-2 pt-2 border-t border-zinc-200 text-zinc-700 text-[11px]">
                  <div><strong>Bloque 5 & 6:</strong> De imagen fija a Motion & Video IA</div>
                  <div><strong>Bloque 7:</strong> Del diseño a prototipo Web</div>
                  <div><strong>Bloque 8:</strong> Automatización de flujos repetitivos</div>
                  <div><strong>Bloque 9 & 10:</strong> Construye tu Asistente + Minicampaña</div>
                </div>
              </div>
              <div className="p-2.5 bg-zinc-100 border border-black font-bold text-[11px] text-black">
                ★ Entregable: Asistente + Minicampaña Multimedia
              </div>
            </div>

            {/* Session 3 / Lab */}
            <div className="border-4 border-black bg-brand-yellow/30 p-6 shadow-neo space-y-4 flex flex-col justify-between border-brand-yellow">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 bg-brand-pink text-white font-bold text-xs">SESIÓN 3 · LAB</span>
                  <span className="text-zinc-700 font-bold flex items-center gap-1"><Clock size={12} /> 4 HORAS</span>
                </div>
                <h3 className="text-xl font-extrabold uppercase font-sans text-black">
                  Laboratorio de Implementación
                </h3>
                <p className="text-zinc-800 font-sans text-xs leading-relaxed">
                  Sesión práctica 1 semana después para aterrizar problemas y campañas reales de tu empresa.
                </p>
                <div className="space-y-2 pt-2 border-t border-black/20 text-zinc-900 text-[11px]">
                  <div>✓ Priorización de cuellos de botella reales</div>
                  <div>✓ Mapeo y rediseño de procesos asistidos por IA</div>
                  <div>✓ Construcción y prueba del workflow corporativo</div>
                  <div>✓ Documentación para adopción institucional</div>
                </div>
              </div>
              <div className="p-2.5 bg-white border border-black font-bold text-[11px] text-black">
                ★ Entregable: Workflow Real Implementado en la Empresa
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES & REQUIREMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-2 border-black">
          {/* Deliverables */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-neo space-y-4">
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// LO QUE SE LLEVA EL EQUIPO"}
            </span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans">
              Entregables Corporativos
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Briefs creativos y Moodboards estructurados</strong> para dirigir IA con precisión.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Key visuals y familia multiformato</strong> (1:1, 9:16, 16:9, display, cartel).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Pieza breve de motion/video y prototipo web</strong> integrado en la misma campaña.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Asistentes creativos especializados</strong> documentados y listos para cada colaborador.</span>
              </li>
            </ul>
          </div>

          {/* Scope & Logistics */}
          <div className="bg-zinc-50 border-2 border-black p-6 sm:p-8 shadow-neo space-y-4">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
              {"// FORMATO & LOGÍSTICA"}
            </span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans">
              Modalidad de Trabajo
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                <span><strong className="text-black">In-Company Presencial</strong> en las oficinas de tu agencia/empresa o Virtual interactivo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                <span><strong className="text-black">Stack transferible y flexible</strong> (ChatGPT, Claude, Gemini, Firefly, Runway, Suite habitual).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                <span><strong className="text-black">Casos reales del equipo</strong> trabajados en vivo durante los ejercicios prácticos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">4</span>
                <span><strong className="text-black">Diferenciación por nivel</strong> (Básico, Intermedio y Avanzado según el perfil).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* MODALITIES & CORPORATE CTA */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// COTIZACIÓN & CONTRATACIÓN CORPORATIVA"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Opciones para tu Empresa
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Capacitación adaptada al tamaño de tu equipo, herramientas actuales y objetivos comerciales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
            {/* 8-Hour Intensive */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-yellow px-2.5 py-1 border border-black font-bold uppercase text-xs">
                    PROGRAMA BASE · 8 HORAS
                  </span>
                  <span className="text-zinc-500 font-bold">2 Sesiones</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-black">
                  Workshop Intensivo In-Company
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Para alinear a todo el equipo en técnicas de dirección de IA, consistencia visual, copy institucional y asistentes por puesto.
                </p>
                <div className="border-t border-zinc-200 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> 2 Sesiones de 4 horas en vivo (presencial u online)
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> 10 Bloques temáticos prácticos con brief de prueba
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Cada colaborador se lleva su asistente configurado
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
                  <MessageCircle size={16} /> COTIZAR WORKSHOP (8 HORAS)
                </a>
              </div>
            </div>

            {/* 12-Hour Program + Implementation Lab */}
            <div className="border-4 border-black bg-zinc-950 text-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-pink text-white px-2.5 py-1 border border-white font-bold uppercase text-xs">
                    RECOMENDADO · 12 HORAS
                  </span>
                  <span className="text-zinc-400 font-bold">2 Sesiones + Lab</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-white">
                  Programa Completo con Laboratorio
                </h3>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Incluye el Laboratorio de Implementación para aterrizar directamente los cuellos de botella y campañas reales de tu empresa.
                </p>
                <div className="border-t border-zinc-800 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Todo lo del programa de 8 horas
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> + 4 Horas de Laboratorio sobre proyectos reales
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Medición de impacto y manual de adopción corporativo
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
                  <MessageCircle size={16} /> COTIZAR PROGRAMA COMPLETO (12 HORAS)
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
                ¿Qué herramientas de software necesita tener contratadas la empresa?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                El programa es intencionalmente agnóstico: se adapta a las licencias que el equipo ya utilice (ChatGPT Team, Claude, Gemini, Adobe Firefly, Runway, etc.) o a herramientas estándar del mercado.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Cómo se garantiza la confidencialidad de los proyectos de clientes?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Se enseñan protocolos de seguridad de datos corporativos, configuración de privacidad en herramientas de IA y buenas prácticas para no filtrar datos sensibles de clientes.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿La capacitación es solo teórica o se producen piezas reales?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Es 100% práctica. El equipo produce en vivo una minicampaña completa multiformato y, en el laboratorio, se optimizan procesos reales del día a día del área.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Se pueden personalizar los contenidos al tipo de agencia o marca?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Sí. Previo al workshop realizamos un breve diagnóstico de los perfiles y objetivos del área para adaptar los ejercicios y el nivel de profundidad.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL BANNER CTA */}
        <section className="bg-black text-white p-8 sm:p-12 border-2 border-black shadow-neo text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-yellow font-bold">
              {"// AGENDAMIENTO & DIAGNÓSTICO INICIAL"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-sans">
              ¡Eleva la productividad creativa de tu equipo!
            </h2>
            <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
              Integra la Inteligencia Artificial en el flujo de tu agencia con metodología, consistencia de marca y control de calidad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={waUrlGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25d366] text-black font-mono font-bold text-base border-2 border-white hover:bg-brand-yellow hover:text-black transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_#fff]"
            >
              <MessageCircle size={20} /> CONTACTAR PARA PROPUESTA IN-COMPANY
            </a>
          </div>

          <div className="font-mono text-xs text-zinc-400 pt-4 border-t border-zinc-800">
            Atención corporativa directa al WhatsApp: <span className="text-brand-yellow font-bold">333 576 9348</span>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t-2 border-black bg-white py-6 px-6 text-center font-mono text-xs text-zinc-500">
        <div>© {new Date().getFullYear()} Rubén Oroz · Programa IA para Equipos Creativos · Todos los derechos reservados</div>
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
