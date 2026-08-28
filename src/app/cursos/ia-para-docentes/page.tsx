'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, CheckCircle2, Clock, Laptop, Calendar, 
  Sparkles, ExternalLink, MessageCircle, ShieldCheck, 
  Layers, Code2, Rocket, ArrowRight, UserCheck, Users,
  GraduationCap, BookOpen, CheckSquare, ClipboardList,
  Sparkle, FileCheck2, School, Play, Copy, Check, CheckCheck,
  Workflow, HelpCircle, Terminal, Cpu, Award
} from 'lucide-react'

export default function IAParaDocentesPage() {
  const waUrlGroup = 'https://wa.me/523335769348?text=Hola%2C%20me%20interesa%20el%20taller%20%22Desarrollo%20de%20Apps%20Web%20para%20Docentes%22.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%3F'
  const waUrlPersonal = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20asesor%C3%ADa%20o%20capacitaci%C3%B3n%20docente%20de%20%22Desarrollo%20de%20Apps%20Web%22.'
  const waUrlBook = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20taller%20%22Desarrollo%20de%20Apps%20Web%20para%20Docentes%22.'

  // Interactive Prompt Maestro & Education App Simulator State
  const [selectedCase, setSelectedCase] = useState<'rubrica' | 'asistencia' | 'proyectos'>('rubrica')
  const [copiedPrompt, setCopiedPrompt] = useState(false)

  // Simulation state for the live demo app
  const [rubricScore, setRubricScore] = useState<{ [key: string]: number }>({
    argumentacion: 3,
    claridad: 4,
    formato: 3,
  })

  const [attendanceList, setAttendanceList] = useState<{ [key: string]: boolean }>({
    'Carlos Sánchez': true,
    'Valeria Morales': true,
    'Diego Hernández': false,
    'Sofía Navarro': true,
  })

  const caseData = {
    rubrica: {
      title: "Generador de Rúbricas y Retroalimentación",
      tag: "EVALUACIÓN CONTINUA",
      q1_usuarios: "Docente (evaluador con acceso a rúbricas) y Alumnos (acceso de solo lectura para ver sus calificaciones y comentarios formativos).",
      q2_flujo: "El profesor selecciona al alumno, marca los niveles de logro por criterio, redacta una retroalimentación sugerida por IA y descarga o envía el reporte.",
      q3_datos: "Criterios de evaluación (1-4 puntos), nombre del alumno, proyecto evaluado, calificación final ponderada y comentarios cualitativos.",
      q4_pantallas: "1. Panel de grupos y alumnos · 2. Formulario interactivo de rúbrica · 3. Vista de reporte final para el estudiante.",
      q5_funciones: "Cálculo automático de puntaje, generador de comentarios constructivos con IA y exportación a PDF o enlace web."
    },
    asistencia: {
      title: "Control Rápido de Asistencia y Participación",
      tag: "GESTIÓN DE AULA",
      q1_usuarios: "Docente de asignatura y Alumnos (ver su historial de asistencias acumuladas).",
      q2_flujo: "El docente abre el pase de lista diario desde su celular o laptop, marca presentes/faltas/justificantes con 1 solo toque y la app calcula el porcentaje.",
      q3_datos: "Fecha, grupo, lista de alumnos, estado (Presente, Retardo, Falta, Justificado) y puntos extras de participación en clase.",
      q4_pantallas: "1. Selector de fecha y materia · 2. Lista rápida de asistencia con botones táctiles · 3. Tablero de alertas por inasistencias.",
      q5_funciones: "Pase de lista con 1 clic, cálculo automático de % de asistencia y alerta visual para alumnos en riesgo de no presentar examen."
    },
    proyectos: {
      title: "Seguimiento de Proyectos de Aula & Entregas",
      tag: "APRENDIZAJE BASADO EN PROYECTOS",
      q1_usuarios: "Equipos de alumnos (subir avances) y Docente (revisar entregables y asignar visto bueno).",
      q2_flujo: "Los equipos envían enlaces a sus documentos o prototipos por fase (Fase 1: Diagnóstico, Fase 2: Desarrollo, Fase 3: Producto final). El docente deja retroalimentación.",
      q3_datos: "Nombre del equipo, integrantes, fase del proyecto, archivo o enlace, fecha de entrega y estatus de aprobación.",
      q4_pantallas: "1. Tablero tipo Kanban de fases · 2. Detalle del proyecto por equipo · 3. Vista de calificaciones del docente.",
      q5_funciones: "Control de fechas límite, buzón de entregas con enlace y barra de progreso por equipo."
    }
  }

  const currentCase = caseData[selectedCase]

  const handleCopyPrompt = () => {
    const fullPrompt = `PROMPT MAESTRO DE APLICACIÓN WEB EDUCATIVA:
TITULO: ${currentCase.title}
TIPO: ${currentCase.tag}

1. USUARIOS Y PERMISOS:
${currentCase.q1_usuarios}

2. FLUJO DE TRABAJO:
${currentCase.q2_flujo}

3. INFORMACIÓN Y DATOS:
${currentCase.q3_datos}

4. PANTALLAS PRINCIPALES:
${currentCase.q4_pantallas}

5. FUNCIONES INDISPENSABLES:
${currentCase.q5_funciones}

INSTRUCCIONES DE GENERACIÓN:
Genera una aplicación web completa, responsiva y funcional en HTML/CSS/JavaScript con diseño moderno y minimalista para que el docente pueda usarla inmediatamente en su clase.`

    navigator.clipboard.writeText(fullPrompt)
    setCopiedPrompt(true)
    setTimeout(() => setCopiedPrompt(false), 2000)
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
              4 HORAS · DOCENTES & ACADEMIA
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

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-16 flex-1 w-full">
        
        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000]">
            <GraduationCap size={14} /> INNOVACIÓN EDUCATIVA & INTELIGENCIA ARTIFICIAL
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-sans leading-none">
            IA para Docentes: Apps Web
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold font-sans text-zinc-800 max-w-3xl leading-snug">
            Diseña y genera tu propia aplicación web educativa a la medida con Inteligencia Artificial sin escribir código.
          </p>

          <p className="text-base sm:text-lg text-zinc-600 font-sans max-w-3xl leading-relaxed">
            Aprende a transformar problemas reales de tu aula —rúbricas de evaluación, control de asistencias, gestión de proyectos o bancos de recursos— en una aplicación web interactiva mediante la metodología de las 5 preguntas y la redacción de un <strong>Prompt Maestro</strong>.
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Clock size={14} className="text-brand-pink" /> Duración
              </div>
              <div className="text-base font-extrabold text-black">4 Horas</div>
              <div className="text-[11px] text-zinc-600">Sesión 65% práctica</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Laptop size={14} className="text-brand-pink" /> Modalidad
              </div>
              <div className="text-base font-extrabold text-black">Presencial / Online</div>
              <div className="text-[11px] text-zinc-600">Acompañamiento en vivo</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <School size={14} className="text-brand-pink" /> Dirigido a
              </div>
              <div className="text-base font-extrabold text-black">Docentes</div>
              <div className="text-[11px] text-zinc-600">Básica, Media y Superior</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Award size={14} className="text-brand-pink" /> Entregable
              </div>
              <div className="text-base font-extrabold text-black">App Funcional</div>
              <div className="text-[11px] text-zinc-600">+ Prompt Maestro propio</div>
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
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Las 5 Preguntas Clave</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Aprende a levantar los requerimientos de tu aula: usuarios, flujo de trabajo, datos necesarios, pantallas clave y funciones indispensables.
              </p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                02
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">El Prompt Maestro</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Estructura la especificación técnica completa de tu aplicación para que cualquier IA o plataforma no-code la genere con precisión absoluta.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                03
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Prototipo 100% Usable</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Genera, prueba, itera y sal del taller con una aplicación web lista para usar con tus estudiantes y colegas desde el primer día.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PROMPT MAESTRO BUILDER & EDUCATION APP SIMULATOR */}
        <section id="docente-simulator" className="space-y-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// SIMULADOR INTERACTIVO · METODOLOGÍA DEL TALLER"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Simulador: De la Idea al Prototipo Docente
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-1 max-w-2xl">
                Selecciona un caso educativo real para ver cómo se estructuran las 5 preguntas del Prompt Maestro y prueba el prototipo generado en vivo.
              </p>
            </div>

            {/* Case Selector Buttons */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              <button
                onClick={() => setSelectedCase('rubrica')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  selectedCase === 'rubrica' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                Rúbricas
              </button>
              <button
                onClick={() => setSelectedCase('asistencia')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  selectedCase === 'asistencia' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                Asistencias
              </button>
              <button
                onClick={() => setSelectedCase('proyectos')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  selectedCase === 'proyectos' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                Proyectos ABP
              </button>
            </div>
          </div>

          {/* Interactive Frame */}
          <div className="border-4 border-black bg-zinc-950 p-4 sm:p-6 shadow-neo text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: The 5 Questions / Prompt Maestro Specification */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 font-mono text-xs">
                  <span className="font-bold text-brand-yellow flex items-center gap-1.5">
                    <Terminal size={15} /> LAS 5 PREGUNTAS DEL PROMPT MAESTRO
                  </span>
                  <span className="text-[11px] text-zinc-400 font-bold">{currentCase.tag}</span>
                </div>

                <div className="space-y-2.5 font-mono text-xs max-h-[420px] overflow-y-auto pr-1">
                  <div className="bg-zinc-900 border-l-4 border-blue-400 p-2.5">
                    <div className="text-blue-400 font-bold uppercase text-[10px] mb-0.5">1. ¿Quiénes son los usuarios y qué pueden hacer?</div>
                    <div className="text-zinc-300 font-sans text-xs">{currentCase.q1_usuarios}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-brand-yellow p-2.5">
                    <div className="text-brand-yellow font-bold uppercase text-[10px] mb-0.5">2. ¿Cuál es el flujo de trabajo en el aula?</div>
                    <div className="text-zinc-300 font-sans text-xs">{currentCase.q2_flujo}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-emerald-400 p-2.5">
                    <div className="text-emerald-400 font-bold uppercase text-[10px] mb-0.5">3. ¿Qué información y datos se registran?</div>
                    <div className="text-zinc-300 font-sans text-xs">{currentCase.q3_datos}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-purple-400 p-2.5">
                    <div className="text-purple-400 font-bold uppercase text-[10px] mb-0.5">4. ¿Cuáles son las pantallas principales?</div>
                    <div className="text-zinc-300 font-sans text-xs">{currentCase.q4_pantallas}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-red-400 p-2.5">
                    <div className="text-red-400 font-bold uppercase text-[10px] mb-0.5">5. ¿Cuáles son las funciones indispensables?</div>
                    <div className="text-zinc-300 font-sans text-xs">{currentCase.q5_funciones}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyPrompt}
                  className="w-full py-2.5 bg-white text-black font-mono font-bold text-xs border-2 border-white hover:bg-brand-yellow transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#fff] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  {copiedPrompt ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  {copiedPrompt ? '¡PROMPT MAESTRO COPIADO!' : 'COPIAR PROMPT MAESTRO'}
                </button>
              </div>

              {/* Right Column: Live Interactive Prototype Simulation */}
              <div className="lg:col-span-6 bg-black border-2 border-zinc-700 p-4 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <Laptop size={14} /> PROTOTIPO GENERADO: `{currentCase.title}`
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 border border-emerald-700">
                      EN VIVO
                    </span>
                  </div>

                  {/* Case 1: Rúbrica Interactive Demo */}
                  {selectedCase === 'rubrica' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="bg-zinc-900 p-3 border border-zinc-800 space-y-2">
                        <div className="flex justify-between items-center text-[11px] text-zinc-400">
                          <span>Alumno: <strong>Mateo Ramírez</strong></span>
                          <span>Materia: <strong>Metodología</strong></span>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-zinc-800">
                          <div>
                            <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
                              <span>Argumentación & Fuentes (40%):</span>
                              <span className="text-brand-yellow font-bold">{rubricScore.argumentacion} / 4 pts</span>
                            </div>
                            <div className="grid grid-cols-4 gap-1">
                              {[1, 2, 3, 4].map(val => (
                                <button
                                  key={val}
                                  onClick={() => setRubricScore(prev => ({ ...prev, argumentacion: val }))}
                                  className={`py-1 text-center font-bold border transition-all cursor-pointer ${
                                    rubricScore.argumentacion === val
                                      ? 'bg-brand-yellow text-black border-white'
                                      : 'bg-zinc-950 text-zinc-500 border-zinc-800 hover:text-white'
                                  }`}
                                >
                                  {val}★
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
                              <span>Claridad & Síntesis (30%):</span>
                              <span className="text-brand-yellow font-bold">{rubricScore.claridad} / 4 pts</span>
                            </div>
                            <div className="grid grid-cols-4 gap-1">
                              {[1, 2, 3, 4].map(val => (
                                <button
                                  key={val}
                                  onClick={() => setRubricScore(prev => ({ ...prev, claridad: val }))}
                                  className={`py-1 text-center font-bold border transition-all cursor-pointer ${
                                    rubricScore.claridad === val
                                      ? 'bg-brand-yellow text-black border-white'
                                      : 'bg-zinc-950 text-zinc-500 border-zinc-800 hover:text-white'
                                  }`}
                                >
                                  {val}★
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 p-2 bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-300">
                          <span className="text-brand-pink font-bold">Feedback sugerido por IA:</span> "Excelente síntesis de conceptos; se sugiere robustecer la bibliografía de contraste en el capítulo 2."
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Case 2: Asistencia Interactive Demo */}
                  {selectedCase === 'asistencia' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="bg-zinc-900 p-3 border border-zinc-800 space-y-2">
                        <div className="flex justify-between items-center text-[11px] text-zinc-400">
                          <span>Grupo: <strong>3° A - Primaria</strong></span>
                          <span>Fecha: <strong>Hoy</strong></span>
                        </div>

                        <div className="space-y-1.5 pt-2 border-t border-zinc-800">
                          {Object.entries(attendanceList).map(([name, isPresent]) => (
                            <div key={name} className="flex justify-between items-center bg-zinc-950 p-2 border border-zinc-800">
                              <span className="text-white text-xs">{name}</span>
                              <button
                                onClick={() => setAttendanceList(prev => ({ ...prev, [name]: !isPresent }))}
                                className={`px-2.5 py-1 text-[10px] font-bold border transition-all cursor-pointer ${
                                  isPresent
                                    ? 'bg-emerald-600 text-white border-emerald-400'
                                    : 'bg-red-600 text-white border-red-400'
                                }`}
                              >
                                {isPresent ? 'PRESENTE' : 'FALTA'}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Case 3: Proyectos ABP Demo */}
                  {selectedCase === 'proyectos' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="bg-zinc-900 p-3 border border-zinc-800 space-y-2">
                        <div className="flex justify-between items-center text-[11px] text-zinc-400">
                          <span>Materia: <strong>Proyectos de Aula</strong></span>
                          <span>Semana: <strong>4 de 8</strong></span>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-zinc-800">
                          <div className="bg-zinc-950 p-2.5 border border-zinc-800 flex justify-between items-center">
                            <div>
                              <div className="font-bold text-white">Equipo Alfa · EcoHuerto</div>
                              <div className="text-[10px] text-zinc-400">Fase 2: Prototipo físico</div>
                            </div>
                            <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-700 text-[10px]">
                              Aprobado ✓
                            </span>
                          </div>

                          <div className="bg-zinc-950 p-2.5 border border-zinc-800 flex justify-between items-center">
                            <div>
                              <div className="font-bold text-white">Equipo Beta · Reciclaje Digital</div>
                              <div className="text-[10px] text-zinc-400">Fase 2: Entrega pendiente</div>
                            </div>
                            <span className="px-2 py-0.5 bg-yellow-950 text-brand-yellow border border-yellow-700 text-[10px]">
                              En revisión ⏳
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCheck size={14} /> Sin programar · 100% No-Code
                  </span>
                  <span>Generado con IA</span>
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
              Diseñado para maestras, maestros, directores y coordinadores educativos de cualquier nivel y disciplina.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Docentes de Aula
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Educación Básica y Media</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Profesores que quieren automatizar pases de lista, rúbricas de evaluación rápida, juegos didácticos y retroalimentación individualizada.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Profesores Universitarios
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Educación Superior & Posgrado</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Docentes que gestionan proyectos complejos, tesis, bitácoras de investigación, laboratorios o estudios de caso con equipos.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Coordinadores Académicos
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Directores & Jefes de Área</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Líderes que buscan estandarizar rúbricas institucionales, bancos de reactivos compartidos y seguimiento del avance pedagógico.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Capacitadores & Coaches
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Formación Corporativa</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Instructores que imparten cursos empresariales y necesitan dinámicas de evaluación rápida y entrega de constancias.
              </p>
            </div>
          </div>
        </section>

        {/* DETAILED 7-BLOCK CURRICULUM */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// TEMARIO OFICIAL"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Estructura del Taller (4 Horas)
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
                Más del 65% del tiempo dedicado a la construcción guiada de tu propia aplicación.
              </p>
            </div>
            
            <div className="font-mono text-xs text-zinc-500 bg-zinc-100 p-2 border border-black inline-block">
              Total: 4 Horas · Metodología Práctica
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            {/* Block 1 & 2 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 1 Y 2</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 45 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Fundamentos: ¿Qué es una App Web Docente?
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Diferencia entre un sitio informativo, una hoja de cálculo y una aplicación interactiva. Panorama de la IA generativa y plataformas no-code/low-code aplicadas a la educación.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Casos de éxito de docentes creando software</div>
                <div>✓ Detección del problema educativo a resolver</div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 3</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 45 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Metodología del Prompt Maestro
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Las 5 preguntas clave para levantar requerimientos: Usuarios, Flujo de aula, Datos, Pantallas y Funciones indispensables. Demostración en vivo de redacción de una especificación completa.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Estructura de reglas de negocio pedagógicas</div>
                <div>✓ Diseño de interfaz centrado en el alumno y docente</div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 4</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 60 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Taller Práctico Guiado
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Cada participante elige su problema de aula, responde las 5 preguntas con acompañamiento individual del instructor y redacta su propio Prompt Maestro usando la plantilla oficial.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Mentoría paso a paso y resolución de dudas</div>
                <div>✓ Eliminación de ambigüedades en la especificación</div>
              </div>
            </div>

            {/* Block 5 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 5</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 50 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Generación & Ajuste del Prototipo
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Uso del Prompt Maestro en la herramienta de IA / No-Code seleccionada. Primeras pruebas de navegación, captura de datos, visualización y refinamiento iterativo.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Iteración en vivo sobre el resultado de la IA</div>
                <div>✓ Pruebas de usabilidad en dispositivos móviles y laptops</div>
              </div>
            </div>

            {/* Block 6 y 7 / Cierre */}
            <div className="border-2 border-black bg-brand-yellow/30 p-6 shadow-neo space-y-3 border-brand-yellow md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUES 6 Y 7</span>
                <span className="text-zinc-700 font-bold flex items-center gap-1"><Clock size={12} /> 30 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Presentación de Prototipos, Retroalimentación & Cierre
              </h3>
              <p className="text-zinc-800 font-sans text-xs leading-relaxed">
                Muestra breve de las aplicaciones generadas por los participantes, retroalimentación entre pares, evaluación formativa y entrega de recursos para continuar mejorando la aplicación en el aula.
              </p>
              <div className="pt-2 border-t border-black/20 text-zinc-900 text-[11px] space-y-1 font-bold">
                <div>★ Aplicación web educativa funcional lista para usar</div>
                <div>★ Prompt Maestro editable para futuras aplicaciones</div>
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
                <span><strong className="text-black">1 Prototipo funcional de aplicación web educativa</strong> generado por ti y adaptado a tu clase.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Documento del Prompt Maestro completo</strong> listo para reutilizar o expandir cuando gustes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Guía de las 5 preguntas clave</strong> para levantar requerimientos de software educativo.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Autonomía digital</strong> para seguir creando herramientas docentes sin depender de programadores.</span>
              </li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-zinc-50 border-2 border-black p-6 sm:p-8 shadow-neo space-y-4">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
              {"// PRERREQUISITOS"}
            </span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans">
              ¿Qué necesitas para el taller?
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                <span><strong className="text-black">Laptop</strong> con navegador de internet y conexión estable.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                <span><strong className="text-black">Cuenta gratuita</strong> en al menos una herramienta de IA generativa (ChatGPT, Claude o Gemini).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                <span><strong className="text-black">Una necesidad o problema de aula</strong> que quieras resolver (rúbrica, control, proyectos).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">4</span>
                <span><strong className="text-black">Cero conocimientos de programación</strong> requeridos.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* MODALITIES & PRICING */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// MODALIDADES PARA INSTITUCIONES Y DOCENTES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Capacitación a tu medida
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Disponible como taller institucional para claustros docentes y universidades, o como mentoría individual para profesores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
            {/* Institution / Faculty Option */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-yellow px-2.5 py-1 border border-black font-bold uppercase text-xs">
                    INSTITUCIONES EDUCATIVAS
                  </span>
                  <span className="text-zinc-500 font-bold">Grupos docentes</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-black">
                  Taller para Claustro Docente
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Capacitación intensiva para escuelas, preparatorias o facultades universitarias que desean actualizar a su plantilla docente en IA práctica.
                </p>
                <div className="border-t border-zinc-200 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Sesión intensiva de 4 horas (presencial o virtual)
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Adaptación a los modelos pedagógicos del colegio
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Cada maestro sale con una app lista para su asignatura
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
                  <MessageCircle size={16} /> COTIZAR TALLER INSTITUCIONAL
                </a>
              </div>
            </div>

            {/* Individual Mentoring Option */}
            <div className="border-4 border-black bg-zinc-950 text-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-pink text-white px-2.5 py-1 border border-white font-bold uppercase text-xs">
                    INDIVIDUAL
                  </span>
                  <span className="text-zinc-400 font-bold">1 a 1</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-white">
                  Mentoría Docente Personalizada
                </h3>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Acompañamiento 1 a 1 con Rubén Oroz para diseñar una aplicación avanzada, plataforma de posgrado o herramienta específica para tu aula.
                </p>
                <div className="border-t border-zinc-800 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Sesión privada a tu propio ritmo
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Construcción conjunta del Prompt Maestro avanzado
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Publicación y configuración personalizada
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
                  <MessageCircle size={16} /> COTIZAR MENTORÍA 1 A 1
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
                ¿Qué tipo de aplicaciones puede crear un docente?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Rúbricas de evaluación cualitativa y cuantitativa, generadores de retroalimentación, pases de lista rápidos, buzones de entregas ABP, bancos de preguntas y simuladores didácticos.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Los alumnos necesitan instalar algo en sus teléfonos?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. Las aplicaciones web funcionan directamente a través del navegador de cualquier teléfono, tablet o computadora mediante un simple enlace o código QR.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Se requieren licencias de software costosas?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. Todo el taller se desarrolla utilizando capas gratuitas de herramientas de IA generativa y plataformas web accesibles.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Se entrega constancia o diploma de participación?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Sí. En las modalidades institucionales y personalizadas se emite constancia de participación con valor curricular de horas prácticas.
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
              ¡Crea la app que tu aula necesita!
            </h2>
            <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
              Lleva tu labor docente al siguiente nivel creando herramientas digitales personalizadas con Inteligencia Artificial.
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
            Información e inscripciones al WhatsApp: <span className="text-brand-yellow font-bold">333 576 9348</span>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t-2 border-black bg-white py-6 px-6 text-center font-mono text-xs text-zinc-500">
        <div>© {new Date().getFullYear()} Rubén Oroz · Taller IA para Docentes · Todos los derechos reservados</div>
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
