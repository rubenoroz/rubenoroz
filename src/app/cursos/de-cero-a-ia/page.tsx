'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, CheckCircle2, Clock, Laptop, Calendar, 
  Sparkles, ExternalLink, MessageCircle, ShieldCheck, 
  Layers, Code2, Rocket, ArrowRight, UserCheck, Users,
  Bot, BrainCircuit, Lightbulb, FileText, CheckCheck,
  Search, RefreshCw, AlertTriangle, Play, Copy, Check,
  Workflow, BookOpen, Target, HelpCircle, Terminal
} from 'lucide-react'

export default function DeCeroAIAPage() {
  const waUrlGroup = 'https://wa.me/523335769348?text=Hola%2C%20me%20interesa%20el%20taller%20%22De%20Cero%20a%20IA%22.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%3F'
  const waUrlPersonal = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso%20personal%20o%20asesor%C3%ADa%201%20a%201%20de%20%22De%20Cero%20a%20IA%22.'
  const waUrlBook = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20taller%20%22De%20Cero%20a%20IA%22.'

  // Interactive Prompt Builder Simulator State
  const [selectedRole, setSelectedRole] = useState<'ventas' | 'admin' | 'consultor' | 'creador'>('ventas')
  const [activeTab, setActiveTab] = useState<'chatgpt' | 'claude' | 'gemini'>('chatgpt')
  const [copied, setCopied] = useState(false)

  const promptExamples = {
    ventas: {
      title: "Propuesta comercial para cliente indeciso",
      context: "Soy asesor comercial de servicios y tengo un cliente que mostró interés pero no ha respondido en 4 días.",
      task: "Redacta un correo de seguimiento amable, profesional y enfocado en resolver sus dudas principales sin sonar insistente.",
      restrictions: "Máximo 150 palabras, tono cercano pero formal, no uses clichés como 'espero te encuentres bien'.",
      format: "Formato de correo con Asunto + Cuerpo + Llamado a la acción claro.",
      aiResponse: {
        chatgpt: "Asunto: ¿Alguna duda sobre la propuesta para [Nombre de Empresa]?\n\nHola [Nombre],\n\nRevisando los puntos que conversamos la semana pasada, sé que evaluar opciones toma tiempo. Quería saber si tuviste oportunidad de revisar la cotización o si hay algún detalle específico en el que pueda profundizar.\n\nPodemos tener una breve llamada de 10 minutos este jueves si te viene bien para resolver cualquier duda.\n\nSaludos,\n[Tu Nombre]",
        claude: "Asunto: Seguimiento a tu proyecto de [Nombre del Proyecto]\n\nEstimado/a [Nombre],\n\nTe escribo para dar continuidad a nuestra charla del [Día]. Con gusto puedo ajustar los entregables o etapas de la propuesta si tus prioridades cambiaron.\n\n¿Te parece si coordinamos una llamada rápida mañana para validar el alcance?\n\nAtentamente,\n[Tu Nombre]",
        gemini: "Asunto: [Nombre], ¿avanzamos con la integración de [Servicio]?\n\nHola [Nombre],\n\nEspero que tu semana vaya excelente. Te comparto un resumen de los 3 beneficios clave de nuestra propuesta para facilitar tu decisión. Quedo listo para iniciar cuando tú lo indiques.\n\n¿Agendamos 10 min mañana?\n\nUn saludo,\n[Tu Nombre]"
      }
    },
    admin: {
      title: "Resumen estructurado de minuta y acuerdos",
      context: "Soy coordinador de proyectos y tengo las notas desordenadas de una reunión de 1 hora con 4 directores.",
      task: "Organiza las notas en una minuta ejecutiva clara, extrayendo los 3 acuerdos clave, fechas límite y responsables.",
      restrictions: "Presenta todo en tabla markdown, resalta en negrita a los responsables y elimina repeticiones.",
      format: "Tabla de 4 columnas: [Acuerdo / Tarea] | [Responsable] | [Fecha Límite] | [Estado]",
      aiResponse: {
        chatgpt: "| Acuerdo / Tarea | Responsable | Fecha Límite | Estado |\n|---|---|---|---|\n| Validar presupuesto Q3 | **Carlos Mendoza** | 15 de Octubre | Pendiente |\n| Entregar mockup final de diseño | **Ana Sofía** | 18 de Octubre | En progreso |\n| Contratación de proveedor cloud | **Rubén Oroz** | 22 de Octubre | Por iniciar |",
        claude: "| Acuerdo Principal | Responsable | Entrega | Prioridad |\n|---|---|---|---|\n| Cierre de auditoría interna | **Elena Torres** | 14 de Octubre | Alta |\n| Envío de contratos a clientes | **Marcos Ruiz** | 16 de Octubre | Media |\n| Plan de capacitación de equipo | **Dirección General**| 20 de Octubre | Alta |",
        gemini: "| Tarea Clave | Líder | Fecha Límite | Siguiente Acción |\n|---|---|---|---|\n| Actualización de CRM | **Soporte TI** | 12 de Octubre | Revisar logs |\n| Notificación de términos legales | **Legal** | 19 de Octubre | Redactar aviso |\n| Aprobación de presupuesto | **Finanzas** | 25 de Octubre | Firma digital |"
      }
    },
    consultor: {
      title: "Estructuración de propuesta de consultoría",
      context: "Soy consultor independiente y un prospecto me pide una propuesta para optimizar sus procesos internos.",
      task: "Genera una estructura de 4 fases de consultoría (Diagnóstico, Estrategia, Implementación, Medición) con entregables claros.",
      restrictions: "Usa lenguaje de negocios de alto impacto, enfócate en retorno de inversión (ROI) y tiempos realistas.",
      format: "Lista numerada con viñetas y entregables por fase.",
      aiResponse: {
        chatgpt: "1. Fase 1: Diagnóstico Operativo (Semanas 1-2)\n   • Mapeo de cuellos de botella y entrevistas clave.\n   • Entregable: Reporte ejecutivo de fricciones y oportunidades.\n\n2. Fase 2: Rediseño Estratégico (Semanas 3-4)\n   • Creación del nuevo flujo de trabajo asistido por IA.\n   • Entregable: Manual de procesos optimizados.\n\n3. Fase 3: Despliegue y Capacitación (Semanas 5-6)\n   • Talleres prácticos con el equipo operativo.\n   • Entregable: Equipo autónomo con herramientas activas.\n\n4. Fase 4: Medición y Ajuste (Semana 8)\n   • Auditoría de tiempos y ahorro de costos.\n   • Entregable: Tablero de métricas y ROI alcanzado.",
        claude: "Fase I: Auditoría & Detección de Fricción (10 días)\n• Análisis de flujos de comunicación y herramientas.\n• Entregable: Matriz de madurez digital.\n\nFase II: Arquitectura de Soluciones (15 días)\n• Automatizaciones y protocolos de respuesta rápida.\n• Entregable: Blueprint de automatización.\n\nFase III: Rollout & Adopción (20 días)\n• Puesta en marcha guiada.\n• Entregable: Certificación interna de usuarios.",
        gemini: "1. Diagnóstico de Eficiencia (Semana 1)\n• Identificación de horas perdidas en tareas repetitivas.\n• Entregable: Diagnóstico de impacto económico.\n\n2. Plan de Acción Inmediato (Semana 2-3)\n• Implementación de prompts y asistentes personalizados.\n• Entregable: Kit de productividad operativa."
      }
    },
    creador: {
      title: "Plan de contenidos y guiones para redes",
      context: "Soy creador de contenido y tengo un negocio de asesorías. Necesito publicar contenido educativo esta semana.",
      task: "Diseña 3 ideas de publicaciones educativas con ganchos (hooks) potentes y estructura de carrusel/video corto.",
      restrictions: "Evita tecnicismos aburridos, usa ganchos de curiosidad o contraste y termina con llamado a comentar.",
      format: "Idea | Gancho inicial | 3 puntos clave | CTA final",
      aiResponse: {
        chatgpt: "Idea 1: Los 3 errores que cometes al usar ChatGPT\n• Gancho: 'Si usas ChatGPT como Google, estás perdiendo el 80% de su poder.'\n• Puntos clave: 1. No darle contexto, 2. Aceptar la primera respuesta, 3. No pedirle formato específico.\n• CTA: Guarda este post y pruébalo hoy mismo.\n\nIdea 2: Cómo ahorrar 5 horas a la semana con IA\n• Gancho: 'Dejé de escribir minutas y correos desde cero. Aquí te muestro el método.'\n• CTA: Comenta 'PROMPT' y te mando la plantilla.",
        claude: "Post 1: La técnica de los 4 pasos para no frustrarte con la IA\n• Hook: 'La IA no te da malas respuestas, le estás haciendo malas preguntas.'\n• Estructura: Contexto + Tarea + Restricción + Formato.\n• CTA: ¿Cuál es la tarea que más tiempo te quita al día?\n\nPost 2: 3 cosas que NUNCA debes confiarle a un modelo de IA\n• Hook: 'La IA alucina con total confianza si no haces esto.'\n• CTA: Comparte con tu equipo de trabajo.",
        gemini: "Idea: Tu nuevo asistente de redacción en 3 minutos\n• Gancho: 'Así estructuro mis propuestas comerciales usando solo 1 prompt maestro.'\n• Puntos: Contexto claro, rol asignado, formato en tabla.\n• CTA: ¿Quieres el prompt completo? Déjame un comentario."
      }
    }
  }

  const currentPrompt = promptExamples[selectedRole]

  const handleCopyPrompt = () => {
    const fullText = `CONTEXTO:\n${currentPrompt.context}\n\nTAREA:\n${currentPrompt.task}\n\nRESTRICCIONES:\n${currentPrompt.restrictions}\n\nFORMATO:\n${currentPrompt.format}`
    navigator.clipboard.writeText(fullText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground tech-grid flex flex-col">
      {/* Top sticky banner / navigation */}
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
              4 HORAS · INTENSIVO
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-16 flex-1 w-full">
        
        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000]">
            <Sparkles size={14} /> RUTA INTELIGENCIA ARTIFICIAL Y PRODUCTIVIDAD
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-sans leading-none">
            De Cero a IA
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold font-sans text-zinc-800 max-w-3xl leading-snug">
            Usa la inteligencia artificial generativa de forma práctica para resolver tareas reales de trabajo y de negocio.
          </p>

          <p className="text-base sm:text-lg text-zinc-600 font-sans max-w-3xl leading-relaxed">
            No te enseñamos a memorizar una sola herramienta — te enseñamos una metodología para conversar, iterar y dirigir cualquier modelo (ChatGPT, Claude, Gemini) para obtener resultados confiables desde la primera sesión.
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Clock size={14} className="text-brand-pink" /> Duración
              </div>
              <div className="text-base font-extrabold text-black">4 Horas</div>
              <div className="text-[11px] text-zinc-600">Sesión única intensiva</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Laptop size={14} className="text-brand-pink" /> Modalidad
              </div>
              <div className="text-base font-extrabold text-black">Presencial / Online</div>
              <div className="text-[11px] text-zinc-600">En vivo y 100% interactivo</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <ShieldCheck size={14} className="text-brand-pink" /> Nivel
              </div>
              <div className="text-base font-extrabold text-black">Introductorio</div>
              <div className="text-[11px] text-zinc-600">Sin conocimientos técnicos</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Users size={14} className="text-brand-pink" /> Cupo
              </div>
              <div className="text-base font-extrabold text-black">10 - 20 Cupos</div>
              <div className="text-[11px] text-zinc-600">Atención personalizada</div>
            </div>
          </div>
        </section>

        {/* 3 CORE PILLARS BANNER */}
        <section className="bg-black text-white p-6 sm:p-8 border-2 border-black shadow-neo">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                01
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Conversar, no buscar</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                La IA no es un buscador de una sola pregunta. Aprende a sostener conversaciones productivas de varios turnos para resolver tareas complejas.
              </p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                02
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Anatomía del Prompt</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Domina los 4 elementos infalibles: Contexto, Tarea, Restricciones y Formato. Di adiós a respuestas genéricas o vagas.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                03
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Iterar & Verificar</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Aprende la técnica de refinamiento por capas y cómo detectar y verificar alucinaciones antes de usar cualquier dato en el mundo real.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PROMPT LAB / SIMULATOR COMPONENT */}
        <section id="prompt-lab" className="space-y-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// LABORATORIO INTERACTIVO · METODOLOGÍA DEL TALLER"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Simulador: Anatomía de un Prompt Real
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-1 max-w-2xl">
                Prueba cómo estructuramos los 4 bloques clave para obtener respuestas de nivel profesional en ChatGPT, Claude o Gemini.
              </p>
            </div>

            {/* Role Selectors */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              <button
                onClick={() => setSelectedRole('ventas')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  selectedRole === 'ventas' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                Ventas
              </button>
              <button
                onClick={() => setSelectedRole('admin')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  selectedRole === 'admin' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                Administración
              </button>
              <button
                onClick={() => setSelectedRole('consultor')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  selectedRole === 'consultor' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                Consultoría
              </button>
              <button
                onClick={() => setSelectedRole('creador')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  selectedRole === 'creador' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                Contenidos
              </button>
            </div>
          </div>

          {/* Interactive Lab Frame */}
          <div className="border-4 border-black bg-zinc-950 p-3 sm:p-6 shadow-neo text-white">
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Left Column: The 4 Prompt Blocks */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 font-mono text-xs">
                  <span className="font-bold text-brand-yellow flex items-center gap-1.5">
                    <Terminal size={15} /> ESTRUCTURA DEL PROMPT
                  </span>
                  <span className="text-zinc-400 text-[11px]">{currentPrompt.title}</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {/* Context Block */}
                  <div className="bg-zinc-900 border-l-4 border-blue-400 p-3">
                    <div className="text-blue-400 font-bold uppercase text-[10px] tracking-wider mb-1 flex items-center gap-1">
                      <Bot size={12} /> 1. CONTEXTO (Quién eres y situación)
                    </div>
                    <div className="text-zinc-200 font-sans text-xs">{currentPrompt.context}</div>
                  </div>

                  {/* Task Block */}
                  <div className="bg-zinc-900 border-l-4 border-brand-yellow p-3">
                    <div className="text-brand-yellow font-bold uppercase text-[10px] tracking-wider mb-1 flex items-center gap-1">
                      <Target size={12} /> 2. TAREA (Qué debe hacer exactamente)
                    </div>
                    <div className="text-zinc-200 font-sans text-xs">{currentPrompt.task}</div>
                  </div>

                  {/* Restrictions Block */}
                  <div className="bg-zinc-900 border-l-4 border-red-400 p-3">
                    <div className="text-red-400 font-bold uppercase text-[10px] tracking-wider mb-1 flex items-center gap-1">
                      <AlertTriangle size={12} /> 3. RESTRICCIONES (Qué evitar y tono)
                    </div>
                    <div className="text-zinc-200 font-sans text-xs">{currentPrompt.restrictions}</div>
                  </div>

                  {/* Format Block */}
                  <div className="bg-zinc-900 border-l-4 border-emerald-400 p-3">
                    <div className="text-emerald-400 font-bold uppercase text-[10px] tracking-wider mb-1 flex items-center gap-1">
                      <FileText size={12} /> 4. FORMATO DE SALIDA (Estructura visual)
                    </div>
                    <div className="text-zinc-200 font-sans text-xs">{currentPrompt.format}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyPrompt}
                  className="w-full py-2.5 bg-white text-black font-mono font-bold text-xs border-2 border-white hover:bg-brand-yellow transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#fff] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  {copied ? '¡PROMPT COPIADO AL PORTAPAPELES!' : 'COPIAR PROMPT ESTRUCTURADO'}
                </button>
              </div>

              {/* Right Column: AI Output Simulation */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between bg-black border-2 border-zinc-800 p-4">
                <div>
                  {/* Model Tabs */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 font-mono text-xs">
                    <span className="text-zinc-400 text-[11px] font-bold">RESPUESTA GENERADA:</span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setActiveTab('chatgpt')}
                        className={`px-2.5 py-1 text-[11px] font-bold border transition-all cursor-pointer ${
                          activeTab === 'chatgpt'
                            ? 'bg-[#10a37f] text-white border-[#10a37f]'
                            : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:text-white'
                        }`}
                      >
                        ChatGPT
                      </button>
                      <button
                        onClick={() => setActiveTab('claude')}
                        className={`px-2.5 py-1 text-[11px] font-bold border transition-all cursor-pointer ${
                          activeTab === 'claude'
                            ? 'bg-[#d97706] text-white border-[#d97706]'
                            : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:text-white'
                        }`}
                      >
                        Claude
                      </button>
                      <button
                        onClick={() => setActiveTab('gemini')}
                        className={`px-2.5 py-1 text-[11px] font-bold border transition-all cursor-pointer ${
                          activeTab === 'gemini'
                            ? 'bg-[#2563eb] text-white border-[#2563eb]'
                            : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:text-white'
                        }`}
                      >
                        Gemini
                      </button>
                    </div>
                  </div>

                  {/* Output Preview */}
                  <div className="bg-zinc-950 p-4 border border-zinc-800 rounded font-mono text-xs text-zinc-200 whitespace-pre-line leading-relaxed min-h-[220px]">
                    {currentPrompt.aiResponse[activeTab]}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCheck size={14} /> 100% Aplicable a tu negocio
                  </span>
                  <span>Metodología Agnóstica</span>
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
              Diseñado para cualquier persona que use una computadora en su trabajo y quiera ahorrar horas de tareas manuales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Administrativos & RRHH
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Redacción & Reportes</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Minutas de juntas, transcripción de acuerdos, correos diplomáticos, plantillas de inducción y síntesis de documentos extensos.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Dueños & Emprendedores
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Ventas & Clientes</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Estructuración de propuestas comerciales, respuestas rápidas a clientes, mensajes de ventas y análisis de competencia.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Profesionistas Libres
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Consultores & Creativos</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Brainstorming de ideas, estructuración de proyectos, cronogramas de consultoría y generación de borradores de trabajo.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Estudiantes & Docentes
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Estudio & Organización</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Explicación de conceptos complejos con analogías, estructuración de temarios, guías de estudio y resúmenes analíticos.
              </p>
            </div>
          </div>
        </section>

        {/* 4-STEP PRACTICAL METHODOLOGY */}
        <section className="bg-white border-2 border-black p-6 sm:p-10 shadow-neo space-y-8">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// RUTA DE APRENDIZAJE"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Cómo aprendes en 4 horas
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Cero teoría abstracta. Cada bloque incluye práctica individual guiada con tu propia computadora y tus tareas reales de trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="border-2 border-black p-4 bg-zinc-50 space-y-2 relative">
              <div className="text-brand-pink font-extrabold text-2xl">01</div>
              <h3 className="font-bold text-black text-sm uppercase">Desmitificar la IA</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Entiende cómo 'piensa' un modelo de lenguaje. En qué tareas destaca y en cuáles alucina, para evitar errores costosos.
              </p>
            </div>

            <div className="border-2 border-black p-4 bg-zinc-50 space-y-2 relative">
              <div className="text-brand-pink font-extrabold text-2xl">02</div>
              <h3 className="font-bold text-black text-sm uppercase">Conversación Guiada</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Sostén conversaciones de 3+ turnos con ChatGPT, Claude o Gemini para resolver un problema de tu trabajo en vivo.
              </p>
            </div>

            <div className="border-2 border-black p-4 bg-zinc-50 space-y-2 relative">
              <div className="text-brand-pink font-extrabold text-2xl">03</div>
              <h3 className="font-bold text-black text-sm uppercase">Ingeniería de Prompts</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Aplica la fórmula Contexto + Tarea + Restricción + Formato. Practica la iteración por capas hasta el resultado perfecto.
              </p>
            </div>

            <div className="border-2 border-black p-4 bg-zinc-50 space-y-2 relative">
              <div className="text-brand-pink font-extrabold text-2xl">04</div>
              <h3 className="font-bold text-black text-sm uppercase">Entregable & Prompts</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Sales con un documento de trabajo real terminado y tu banco con los 3 mejores prompts listos para reutilizar siempre.
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
                Diseñado para maximizar el tiempo práctico con 2 descansos intercalados.
              </p>
            </div>
            
            <div className="font-mono text-xs text-zinc-500 bg-zinc-100 p-2 border border-black inline-block">
              Total: 4 Horas · 100% Práctico
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            {/* Block 1 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 1</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 40 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Qué puede y qué no puede hacer la IA
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Cómo funciona un modelo de lenguaje sin tecnicismos: predicción de patrones. Fortalezas reales (redactar, resumir, estructurar) y limitaciones (alucinaciones, datos desactualizados).
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Casos de éxito y errores comunes</div>
                <div>✓ Cómo evitar depender de una sola marca</div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 2</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 45 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Cómo conversar con un modelo
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Cambio de paradigma: de buscador a diálogo colaborativo. Práctica guiada donde cada participante sostiene una conversación de al menos 3 turnos sobre una tarea de su trabajo.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Retroalimentación en tiempo real</div>
                <div>✓ Cómo guiar a la IA cuando se desvía</div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 3</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 50 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Anatomía de un Prompt Profesional
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Fórmula de los 4 componentes: Contexto (quién eres/situación), Tarea (qué necesitas), Restricciones (tono/límites) y Formato (tablas, correos, viñetas, guiones).
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Plantillas reusables de prompts</div>
                <div>✓ Ejercicios aplicados por industria</div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 4</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 45 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Iteración: De lo genérico a lo usable
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                La primera respuesta casi nunca es la final. Técnica de refinamiento en 3 rondas sobre una misma tarea para elevar la calidad, tono y precisión al 100%.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Ajuste de estilo y eliminación de clichés</div>
                <div>✓ Inyección de datos y ejemplos propios</div>
              </div>
            </div>

            {/* Block 5 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 5</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 40 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Comparación & Verificación de Datos
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Cómo comparar respuestas entre ChatGPT, Claude y Gemini para elegir la mejor. Protocolo de verificación: qué datos siempre deben confirmarse por fuera (cifras, leyes, fechas, precios).
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Auditoría de hechos (fact-checking)</div>
                <div>✓ Criterio humano como filtro final</div>
              </div>
            </div>

            {/* Block 6 / Cierre */}
            <div className="border-2 border-black bg-brand-yellow/30 p-6 shadow-neo space-y-3 border-brand-yellow">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">CIERRE</span>
                <span className="text-zinc-700 font-bold flex items-center gap-1"><Clock size={12} /> 25 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Entregable Práctico & Plan Personal
              </h3>
              <p className="text-zinc-800 font-sans text-xs leading-relaxed">
                Cada alumno consolida un entregable real de trabajo y documenta sus 3 mejores prompts construidos durante la sesión para llevárselos por escrito.
              </p>
              <div className="pt-2 border-t border-black/20 text-zinc-900 text-[11px] space-y-1 font-bold">
                <div>★ Documento real terminado</div>
                <div>★ Banco de prompts personal listo</div>
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
              Entregables del Taller
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">1 Entregable de trabajo real terminado</strong> listo para usar en tu negocio o empleo.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Banco con tus 3 mejores prompts</strong> estructurados y probados durante la sesión.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Plantillas maestras de prompts</strong> para redactar, resumir, tabular y comparar información.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Metodología universal</strong> independiente de marcas para usar ChatGPT, Claude o Gemini.</span>
              </li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-zinc-50 border-2 border-black p-6 sm:p-8 shadow-neo space-y-4">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
              {"// PRERREQUISITOS"}
            </span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans">
              ¿Qué necesitas para asistir?
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                <span><strong className="text-black">Laptop, tablet o celular</strong> con navegador web y conexión a internet.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                <span><strong className="text-black">Cuenta gratuita</strong> en al menos una herramienta: ChatGPT, Claude o Gemini.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                <span><strong className="text-black">Una tarea o problema real</strong> de tu trabajo diario para resolverlo en vivo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">4</span>
                <span><strong className="text-black">Cero conocimientos previos</strong> en código, programación ni teoría compleja.</span>
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
              Elige cómo quieres cursarlo
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Disponible en formato grupal para empresas y equipos, o en sesión individual 1 a 1 para resolver casos específicos de tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
            {/* Group Option */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-yellow px-2.5 py-1 border border-black font-bold uppercase text-xs">
                    EMPRESAS & GRUPOS
                  </span>
                  <span className="text-zinc-500 font-bold">10 - 20 personas</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-black">
                  Taller Grupal en Vivo
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Ideal para equipos de trabajo, áreas administrativas, despachos o grupos de emprendedores que quieren estandarizar el uso de IA.
                </p>
                <div className="border-t border-zinc-200 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Sesión intensiva de 4 horas en vivo
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Presencial en tu sede o virtual interactivo
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Ejercicios prácticos con tareas reales del equipo
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
                  <MessageCircle size={16} /> CONSULTAR FECHAS Y GRUPOS
                </a>
              </div>
            </div>

            {/* 1-on-1 Option */}
            <div className="border-4 border-black bg-zinc-950 text-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-pink text-white px-2.5 py-1 border border-white font-bold uppercase text-xs">
                    PERSONALIZADO
                  </span>
                  <span className="text-zinc-400 font-bold">1 a 1</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-white">
                  Sesión 1 a 1 con Rubén
                </h3>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Para profesionistas o directores que quieren una consultoría directa y personalizada sobre sus flujos de trabajo específicos.
                </p>
                <div className="border-t border-zinc-800 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Sesión privada a tu propio ritmo y horario
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Diseño de prompts a la medida de tu industria
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Revisión confidencial de tus tareas y documentos
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
                  <MessageCircle size={16} /> COTIZAR ASESORÍA 1 A 1
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
                ¿Necesito saber programar o tener carrera técnica?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. El taller está diseñado para personas no técnicas. Solo necesitas saber usar un navegador web, escribir texto y copiar/pegar.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Debo pagar suscripciones mensuales de IA?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. Todas las prácticas se realizan sobre las capas 100% gratuitas de ChatGPT, Claude y Gemini.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Qué pasa si mi empresa usa una herramienta específica?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                La metodología que enseñamos es agnóstica: las reglas de Contexto, Tarea, Restricciones e Iteración funcionan igual en cualquier modelo de lenguaje presente o futuro.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Cuál es el siguiente paso sugerido en la ruta?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Este taller conecta con "De usuario a creador con IA" (creación de asistentes personalizados) y "Prompting Avanzado".
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
              ¡Aprende a usar la IA a tu favor!
            </h2>
            <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
              Trae tu laptop, tus tareas pendientes y aprende en una sola sesión a delegar tareas repetitivas con total confianza.
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
        <div>© {new Date().getFullYear()} Rubén Oroz · Taller De Cero a IA · Todos los derechos reservados</div>
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
