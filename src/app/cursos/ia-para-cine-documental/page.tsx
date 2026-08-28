'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, CheckCircle2, Clock, Laptop, Calendar, 
  Sparkles, ExternalLink, MessageCircle, ShieldCheck, 
  Layers, Code2, Rocket, ArrowRight, UserCheck, Users,
  Film, Video, Clapperboard, FileText, Search, ShieldAlert,
  Mic, Scissors, Eye, Copy, Check, CheckCheck, HelpCircle,
  Terminal, Building2, BookOpen, Scale, Award
} from 'lucide-react'

export default function IACineDocumentalPage() {
  const waUrlGroup = 'https://wa.me/523335769348?text=Hola%2C%20me%20interesa%20el%20programa%20profesional%20%22De%20la%20Fuente%20al%20Corte%3A%20IA%20para%20Cine%20Documental%22.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%3F'
  const waUrlPersonal = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20cotizar%20el%20programa%20institucional%20o%20asesor%C3%ADa%20de%20%22IA%20para%20Cine%20Documental%22.'
  const waUrlBook = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20programa%20%22De%20la%20Fuente%20al%20Corte%22.'

  // Interactive Pipeline Simulator State
  const [activeStage, setActiveStage] = useState<'investigacion' | 'entrevistas' | 'archivo' | 'etica'>('investigacion')
  const [copiedPrompt, setCopiedPrompt] = useState(false)

  const stages = {
    investigacion: {
      title: "1. Investigación & Trazabilidad de Fuentes",
      tag: "RIGOR DE FUENTES",
      principio: "Fuente antes que respuesta",
      descripcion: "Uso de LLMs para mapear actores, contrastar documentos históricos y estructurar la hipótesis sin confundir la IA con una fuente de verdad.",
      promptSnippet: `Actúa como Investigador Documental. Analiza estos 3 documentos judiciales y artículos de prensa: [DOCUMENTOS_ADJUNTOS].
Instrucciones:
1. Extrae una matriz cronológica de eventos clave señalando estrictamente la página y fuente exacta de cada hecho.
2. Identifica contradicciones entre testimonios oficiales y relatos de testigos.
3. Formula 3 Preguntas Documentales centrales y una Hipótesis de Conflicto.
Regla estricta: NO inventes datos ni asumas hechos no contenidos en el corpus.`,
      deliverable: "Matriz de Fuentes con Trazabilidad + Mapa de Actores y Pregunta Documental."
    },
    entrevistas: {
      title: "2. Análisis de Entrevistas & Guía de Rodaje",
      tag: "DESARROLLO NARRATIVO",
      principio: "IA como asistente, no como autor",
      descripcion: "Procesamiento de transcripciones extensas para detectar momentos de clímax, contradicciones y estructurar la guía de entrevista en rodaje.",
      promptSnippet: `Analiza la transcripción completa de la entrevista a [TESTIGO_CLAVE] (1 hora 40 min).
Instrucciones:
1. Identifica los 5 'selects' más potentes emocional y narrativamente, con sus códigos de tiempo (Timecode IN / OUT).
2. Agrupa los testimonios por núcleos temáticos (Memoria, Conflicto, Reconciliación).
3. Diseña 4 preguntas de repregunta para la segunda sesión de rodaje basadas en los vacíos del relato.`,
      deliverable: "Transcripción anotada + Selects organizados por Timecode + Guía de Repregunta."
    },
    archivo: {
      title: "3. Curaduría de Archivo & Material Sintético",
      tag: "PRODUCCIÓN & ARCHIVO",
      principio: "Transparencia antes que simulación",
      descripcion: "Organización de material histórico mediante búsqueda semántica y definición de límites éticos para recreaciones generativas.",
      promptSnippet: `Analiza la lista de planos del archivo fotográfico de 1985.
Propón un protocolo de uso audiovisual:
• Planos de archivo original: Restauración/escalado sin alteración de contenido factual.
• Recreaciones sintéticas con IA: Únicamente para visualización de conceptos abstractos o archivos destruidos, obligatoriamente señalizados en pantalla con marca de agua 'Recreación Generativa con IA'.`,
      deliverable: "Protocolo de Ingesta y Archivo + Declaración de Uso de Material Generativo."
    },
    etica: {
      title: "4. Paper Edit & Declaración Ética de Uso",
      tag: "MONTAJE & AUDITORÍA",
      principio: "Método antes que herramienta",
      descripcion: "Construcción del paper edit previo a la línea de tiempo y redacción de la Declaración de Transparencia Editorial para festivales.",
      promptSnippet: `Genera una estructura de Paper Edit para el teaser documental de 90 segundos:
• Minuto 0:00 - 0:25: Planteamiento del dilema (Voz real en off + Archivo histórico).
• Minuto 0:25 - 0:65: Testimonio central y contradicción de fuentes (Corte directo).
• Minuto 0:65 - 0:90: Clímax y pregunta abierta al espectador.
Adjunta el cuadro de Declaración Ética: Detalla dónde se usó IA (transcripción, asistencia de corte) y dónde NO se permitió intervención algorítmica.`,
      deliverable: "Paper Edit estructurado + Declaración Ética de Transparencia de IA."
    }
  }

  const currentStage = stages[activeStage]

  const handleCopyPrompt = () => {
    const fullText = `DOCUMENTARY AI PROTOCOL (${currentStage.tag}):
ETAPA: ${currentStage.title}
PRINCIPIO ÉTICO: "${currentStage.principio}"
DESCRIPCIÓN: ${currentStage.descripcion}

PROMPT MAESTRO / INSTRUCCIÓN DEL SISTEMA:
${currentStage.promptSnippet}

ENTREGABLE REQUERIDO:
${currentStage.deliverable}`

    navigator.clipboard.writeText(fullText)
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
              16 HORAS · PROGRAMA PROFESIONAL
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
            <Film size={14} /> CINE DOCUMENTAL & INTELIGENCIA ARTIFICIAL ÉTICA
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-sans leading-none">
            De la Fuente al Corte
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold font-sans text-zinc-800 max-w-3xl leading-snug">
            IA aplicada al Cine Documental: Programa profesional de 16 horas, de la investigación al prototipo audiovisual.
          </p>

          <p className="text-base sm:text-lg text-zinc-600 font-sans max-w-3xl leading-relaxed">
            Integra la Inteligencia Artificial en el flujo documental completo —desde el análisis de fuentes y transcripciones de entrevistas hasta el montaje y la postproducción— sin sustituir la evidencia, el rigor investigativo ni el criterio editorial del realizador.
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Clock size={14} className="text-brand-pink" /> Duración
              </div>
              <div className="text-base font-extrabold text-black">16 Horas</div>
              <div className="text-[11px] text-zinc-600">4 Sesiones de 4 hrs</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Clapperboard size={14} className="text-brand-pink" /> Producto
              </div>
              <div className="text-base font-extrabold text-black">Dossier + Teaser</div>
              <div className="text-[11px] text-zinc-600">Prototipo de 60 a 120s</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Scale size={14} className="text-brand-pink" /> Enfoque
              </div>
              <div className="text-base font-extrabold text-black">Ética & Rigor</div>
              <div className="text-[11px] text-zinc-600">Trazabilidad de fuentes</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Building2 size={14} className="text-brand-pink" /> Formatos
              </div>
              <div className="text-base font-extrabold text-black">Abierto / Cerrado</div>
              <div className="text-[11px] text-zinc-600">Para cineastas y escuelas</div>
            </div>
          </div>
        </section>

        {/* 4 CORE PRINCIPLES BANNER */}
        <section className="bg-black text-white p-6 sm:p-8 border-2 border-black shadow-neo space-y-6">
          <div>
            <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest font-bold">
              {"// MARCO DEONTOLÓGICO DEL PROGRAMA"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-white mt-1">
              Los 4 Principios del Documentalista con IA
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="bg-zinc-900 border-2 border-zinc-700 p-4 space-y-2">
              <div className="w-7 h-7 bg-brand-yellow text-black flex items-center justify-center font-bold text-xs border border-white">
                01
              </div>
              <h3 className="font-bold text-brand-yellow text-sm uppercase">IA Asistente, No Autor</h3>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                La máquina puede proponer, resumir o generar; la decisión editorial y la autoría permanecen en el realizador.
              </p>
            </div>

            <div className="bg-zinc-900 border-2 border-zinc-700 p-4 space-y-2">
              <div className="w-7 h-7 bg-brand-yellow text-black flex items-center justify-center font-bold text-xs border border-white">
                02
              </div>
              <h3 className="font-bold text-brand-yellow text-sm uppercase">Fuente antes que Respuesta</h3>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                Toda afirmación factual debe remontarse a una fuente humana o documental verificable. El modelo no es fuente.
              </p>
            </div>

            <div className="bg-zinc-900 border-2 border-zinc-700 p-4 space-y-2">
              <div className="w-7 h-7 bg-brand-yellow text-black flex items-center justify-center font-bold text-xs border border-white">
                03
              </div>
              <h3 className="font-bold text-brand-yellow text-sm uppercase">Método antes que Herramienta</h3>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                El curso se organiza por tareas del oficio documental. Las aplicaciones de software son una capa intercambiable.
              </p>
            </div>

            <div className="bg-zinc-900 border-2 border-zinc-700 p-4 space-y-2">
              <div className="w-7 h-7 bg-brand-yellow text-black flex items-center justify-center font-bold text-xs border border-white">
                04
              </div>
              <h3 className="font-bold text-brand-yellow text-sm uppercase">Transparencia antes que Simulación</h3>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                Cualquier recreación o material sintético exige criterio explícito, señalización en pantalla y declaración de uso.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE DOCUMENTARY PIPELINE SIMULATOR */}
        <section id="documentary-lab" className="space-y-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// SIMULADOR INTERACTIVO · FLUJO DOCUMENTAL"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Laboratorio: Pipeline Documental con IA
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-1 max-w-2xl">
                Explora cómo se aplican los prompts y las directrices metodológicas en cada una de las 4 etapas del oficio documental.
              </p>
            </div>

            {/* Stage Selector */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              <button
                onClick={() => setActiveStage('investigacion')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  activeStage === 'investigacion' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                1. Investigación
              </button>
              <button
                onClick={() => setActiveStage('entrevistas')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  activeStage === 'entrevistas' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                2. Entrevistas
              </button>
              <button
                onClick={() => setActiveStage('archivo')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  activeStage === 'archivo' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                3. Archivo
              </button>
              <button
                onClick={() => setActiveStage('etica')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer ${
                  activeStage === 'etica' 
                    ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]' 
                    : 'bg-white hover:bg-zinc-100'
                }`}
              >
                4. Montaje & Ética
              </button>
            </div>
          </div>

          {/* Simulator Frame */}
          <div className="border-4 border-black bg-zinc-950 p-4 sm:p-6 shadow-neo text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Stage Info & Protocol */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 font-mono text-xs">
                  <span className="font-bold text-brand-yellow flex items-center gap-1.5">
                    <Terminal size={15} /> ETAPA: {currentStage.tag}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-bold">SESIÓN ASIGNADA</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-zinc-900 border-l-4 border-blue-400 p-3">
                    <div className="text-blue-400 font-bold uppercase text-[10px] mb-1">Nombre de la Fase</div>
                    <div className="text-white font-bold text-sm">{currentStage.title}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-brand-yellow p-3">
                    <div className="text-brand-yellow font-bold uppercase text-[10px] mb-1">Principio Fundamental</div>
                    <div className="text-white font-bold text-xs italic">"{currentStage.principio}"</div>
                    <div className="text-zinc-300 font-sans text-xs mt-1.5">{currentStage.descripcion}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-emerald-400 p-3">
                    <div className="text-emerald-400 font-bold uppercase text-[10px] mb-1">Entregable de la Sesión</div>
                    <div className="text-zinc-200 font-sans text-xs">{currentStage.deliverable}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyPrompt}
                  className="w-full py-2.5 bg-white text-black font-mono font-bold text-xs border-2 border-white hover:bg-brand-yellow transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#fff] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  {copiedPrompt ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  {copiedPrompt ? '¡PROTOCOLO COPIADO AL PORTAPAPELES!' : 'COPIAR PROTOCOLO & PROMPT'}
                </button>
              </div>

              {/* Right Column: Prompt Blueprint & Rigor Checklist */}
              <div className="lg:col-span-7 bg-black border-2 border-zinc-800 p-4 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <FileText size={14} /> PROTOCOLO METODOLÓGICO (PROMPT DOCUMENTAL)
                    </span>
                    <span className="text-[10px] font-mono bg-zinc-900 text-zinc-300 px-2 py-0.5 border border-zinc-700">
                      TRAZABLE & VERIFICABLE
                    </span>
                  </div>

                  <div className="bg-zinc-950 p-4 border border-zinc-800 font-mono text-xs text-zinc-200 whitespace-pre-line leading-relaxed min-h-[240px]">
                    {currentStage.promptSnippet}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex flex-wrap items-center justify-between font-mono text-[11px] text-zinc-400 gap-2">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCheck size={14} /> Criterio editorial blindado
                  </span>
                  <span>Sin alucinaciones · Fuentes citadas</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TARGET AUDIENCE SECTION */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// PERFILES PARTICIPANTES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              ¿A quién está dirigido?
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Diseñado para la comunidad audiovisual profesional, académica e institucional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Realizadores & Productores
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Cine Documental & Series</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Incorpora IA a tu flujo de trabajo sin comprometer la integridad editorial, la verdad factual ni los derechos de tus sujetos.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Universidades & Escuelas de Cine
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Docentes & Estudiantes</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Formación estructurada, documentada y replicable con dossier final evaluable y discusión deontológica rigurosa.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Periodistas & Casas Productoras
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Medios & Equipos Editoriales</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Estandariza un protocolo compartido de verificación, transcripción asistida y uso responsable de material sintético.
              </p>
            </div>
          </div>
        </section>

        {/* 4 SESSIONS (16 HOURS) CURRICULUM */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// TEMARIO OFICIAL (16 HORAS)"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Programa en 4 Sesiones de 4 Horas
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              De la diferenciación de riesgos en investigación hasta el corte final con declaración de transparencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            {/* Session 1 */}
            <div className="border-4 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-black text-white font-bold text-xs">SESIÓN 1</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 4 HORAS</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Pensamiento Documental, IA e Investigación
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Diferenciar usos de IA por riesgo (analítico, operativo, interpretativo y generativo). Transformar un tema en investigación verificable con trazabilidad de fuentes y matriz de actores.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Matriz de fuentes con verificación cruzada</div>
                <div>✓ Formulación de Pregunta Documental e Hipótesis</div>
              </div>
            </div>

            {/* Session 2 */}
            <div className="border-4 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-black text-white font-bold text-xs">SESIÓN 2</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 4 HORAS</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Desarrollo Narrativo & Preproducción
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                De la investigación a la estructura cinematográfica. Construcción de logline, sinopsis, tratamiento dramático, guías de entrevista estructuradas y propuesta visual de rodaje.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Dossier narrativo y tratamiento de personajes</div>
                <div>✓ Guía de entrevistas y repreguntas clave</div>
              </div>
            </div>

            {/* Session 3 */}
            <div className="border-4 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-black text-white font-bold text-xs">SESIÓN 3</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 4 HORAS</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Producción, Archivo & Generación Audiovisual
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Organización de archivo histórico mediante etiquetado y búsqueda semántica. Transcripciones asistidas, selects de testimonios y definición estricta de límites para recreaciones generativas.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Protocolo de ingesta y selects por Timecode</div>
                <div>✓ Criterios de señalización de material sintético</div>
              </div>
            </div>

            {/* Session 4 */}
            <div className="border-4 border-black bg-brand-yellow/30 p-6 shadow-neo space-y-3 border-brand-yellow">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-brand-pink text-white font-bold text-xs">SESIÓN 4</span>
                <span className="text-zinc-700 font-bold flex items-center gap-1"><Clock size={12} /> 4 HORAS</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Montaje, Postproducción, Ética & Prototipo Final
              </h3>
              <p className="text-zinc-800 font-sans text-xs leading-relaxed">
                Construcción del paper edit, asistencia en software de edición no lineal (NLE), auditoría crítica del montaje, redacción de la Declaración de Transparencia de IA y entrega del teaser (60-120s).
              </p>
              <div className="pt-2 border-t border-black/20 text-zinc-900 text-[11px] space-y-1 font-bold">
                <div>★ Teaser documental (60-120s) o Paper Edit final</div>
                <div>★ Declaración Ética de Uso de IA para festivales</div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES & EVALUATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-2 border-black">
          {/* Deliverables */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-neo space-y-4">
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// PRODUCTO FINAL ENTREGABLE"}
            </span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans">
              Dossier + Prototipo Audiovisual
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Dossier de desarrollo documental</strong> con investigación, mapa de fuentes, sinopsis y tratamiento.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Prototipo o Teaser documental de 60 a 120s</strong> con montaje, audio y estructura narrativa.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Declaración Ética de Transparencia</strong> justificando dónde se utilizó IA y por qué.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Plantillas y protocolos metodológicos</strong> para proyectos documentales futuros.</span>
              </li>
            </ul>
          </div>

          {/* Evaluation Matrix */}
          <div className="bg-zinc-50 border-2 border-black p-6 sm:p-8 shadow-neo space-y-4">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
              {"// MATRIZ DE EVALUACIÓN (100%)"}
            </span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans">
              Criterios de Acreditación
            </h3>
            <div className="space-y-2.5 font-mono text-xs text-zinc-700">
              <div className="flex justify-between items-center bg-white p-2.5 border border-zinc-300">
                <span>Investigación y trazabilidad de fuentes</span>
                <span className="font-bold text-black">20%</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2.5 border border-zinc-300">
                <span>Desarrollo narrativo y dossier</span>
                <span className="font-bold text-black">20%</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2.5 border border-zinc-300">
                <span>Uso metodológico de herramientas de IA</span>
                <span className="font-bold text-black">20%</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2.5 border border-zinc-300">
                <span>Prototipo / Teaser / Paper edit</span>
                <span className="font-bold text-black">25%</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2.5 border border-zinc-300">
                <span>Criterio ético y declaración de uso</span>
                <span className="font-bold text-black">15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* MODALITIES & INSTITUTIONAL CTA */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// MODALIDADES DE CONTRATACIÓN"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Formatos Abiertos e Institucionales
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Disponible como programa cerrado para escuelas de cine, festivales y medios, o en convocatorias abiertas para profesionales independientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
            {/* Institutional Option */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-yellow px-2.5 py-1 border border-black font-bold uppercase text-xs">
                    INSTITUCIONAL CERRADO
                  </span>
                  <span className="text-zinc-500 font-bold">16 Horas</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-black">
                  Para Universidades, Festivales & Medios
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Impartido exclusivamente para el equipo, alumnado o comunidad de tu institución, con posibilidad de adaptar el caso de laboratorio a tu contexto.
                </p>
                <div className="border-t border-zinc-200 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Formato intensivo (2 días) o extendido (4 semanas)
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Manual del instructor y casos adaptados
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Emisión de constancias de acreditación
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
                  <MessageCircle size={16} /> COTIZAR PROGRAMA INSTITUCIONAL
                </a>
              </div>
            </div>

            {/* Public Cohort / Individual Mentoring */}
            <div className="border-4 border-black bg-zinc-950 text-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-pink text-white px-2.5 py-1 border border-white font-bold uppercase text-xs">
                    CONVOCATORIA & MENTORÍA
                  </span>
                  <span className="text-zinc-400 font-bold">Cupos Limitados</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-white">
                  Convocatoria Abierta & Asesoría
                </h3>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Para realizadores y documentalistas independientes que buscan integrar IA a su proyecto personal en desarrollo.
                </p>
                <div className="border-t border-zinc-800 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Grupos reducidos de debate crítico
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Acompañamiento personalizado en tu proyecto
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Revisión ética y técnica del teaser final
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
                  <MessageCircle size={16} /> CONSULTAR PRÓXIMA CONVOCATORIA
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
                ¿El programa promueve reemplazar el rodaje con IA?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                De ninguna manera. El cine documental se fundamenta en el encuentro con la realidad. La IA se enseña como herramienta de asistencia investigativa, análisis de archivo y aceleración del montaje, no para simular falsos testimonios.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Qué pasa con los derechos de autor y licencias de software?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                El programa no depende de licencias de pago obligatorias: cada función cuenta con opciones gratuitas o de código abierto, y se enseñan las pautas de propiedad intelectual para festivales internacionales.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Puedo trabajar con mi propio material de archivo?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Sí. Puedes traer tu propia investigación, entrevistas grabadas o corpus de archivo para avanzar tu película durante las 16 horas del curso.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿En qué formatos de tiempo se puede impartir?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                En formato intensivo de fin de semana (2 días de 8 horas), en 4 semanas (1 sesión de 4 horas semanal) o distribuido a lo largo de un semestre académico.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL BANNER CTA */}
        <section className="bg-black text-white p-8 sm:p-12 border-2 border-black shadow-neo text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-yellow font-bold">
              {"// CONVOCATORIA & CONTACTO"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-sans">
              ¡Rigor documental con tecnología de vanguardia!
            </h2>
            <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
              Aprende a integrar Inteligencia Artificial en el cine de no-ficción con criterio ético y metodológico.
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
            Información y vinculación institucional al WhatsApp: <span className="text-brand-yellow font-bold">333 576 9348</span>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t-2 border-black bg-white py-6 px-6 text-center font-mono text-xs text-zinc-500">
        <div>© {new Date().getFullYear()} Rubén Oroz · De la Fuente al Corte: IA para Cine Documental · Todos los derechos reservados</div>
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
