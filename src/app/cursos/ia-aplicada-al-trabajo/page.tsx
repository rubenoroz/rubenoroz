'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Sparkles,
  Clock,
  Users,
  Laptop,
  Target,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  Building2,
  Briefcase,
  FileText,
  Workflow,
  AlertTriangle,
  UserCheck,
  BarChart3,
  HelpCircle,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'

interface AreaOpportunity {
  id: string
  area: string
  label: string
  friction: string
  traditionalFlow: string
  aiIntervention: string
  privacySafeguard: string
  humanControl: string
  metric: string
  promptBlueprint: string
}

export default function IAAplicadaAlTrabajoPage() {
  const WHATSAPP_BASE = 'https://wa.me/523335769348'
  const waUrlMain = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    'Hola, me interesa solicitar información para mi empresa sobre el programa "IA Aplicada al Trabajo" (8 horas).'
  )}`
  const waUrlEsencial = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    'Hola, me interesa conocer más sobre el taller "Capacitación Esencial en IA" (4 horas) para mi equipo.'
  )}`
  const waUrlPremium = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    'Hola, me interesa explorar el servicio de consultoría y diagnóstico "Transformación con IA" para mi organización.'
  )}`

  // Interactive Opportunity Canvas State
  const [selectedArea, setSelectedArea] = useState<string>('rh')
  const [copiedBlueprint, setCopiedBlueprint] = useState(false)

  const areasData: { [key: string]: AreaOpportunity } = {
    rh: {
      id: 'rh',
      area: 'Administración y Recursos Humanos',
      label: 'ADMIN & RH',
      friction:
        'Redacción repetitiva de perfiles de puesto, filtros iniciales de CV desordenados y comunicados internos con tono inconsistente.',
      traditionalFlow:
        'El equipo redacta desde cero cada documento, busca en carpetas viejas y dedica horas a sintetizar evaluaciones.',
      aiIntervention:
        'Generación de matrices de competencias, homologación de vacantes y redacción de minutas a partir de notas de reunión.',
      privacySafeguard:
        'Eliminación obligatoria de nombres, números telefónicos, domicilios y salarios antes de procesar cualquier texto.',
      humanControl:
        'El responsable de RH valida la adecuación legal, el tono corporativo y la coherencia con el tabulador interno.',
      metric: 'Reducción del 60% en tiempo de redacción de vacantes y homologación de políticas.',
      promptBlueprint: `Actúa como Consultor Senior en Gestión del Talento y Procesos de Recursos Humanos.
Contexto: Empresa en crecimiento del sector [SECTOR / INDUSTRIA].
Objetivo: Diseñar el perfil de puesto estandarizado y matriz de evaluación para [NOMBRE DE LA VACANTE].
Información de entrada:
• Objetivos del puesto: [LISTAR 3 OBJETIVOS CLAVE]
• Herramientas que usará: [HERRAMIENTAS]
• Nivel de experiencia requerido: [JUNIOR / MID / SENIOR]

Restricciones estrictas:
1. No utilices términos discriminatorios ni clichés genéricos de IA ("apasionado", "proactivo sin sustento").
2. Estructura el entregable en: (a) Misión del puesto, (b) 5 Responsabilidades medibles, (c) Rúbrica de 4 preguntas de entrevista técnica con respuestas esperadas.
3. Formato de salida: Tabla markdown limpia y lista para publicar en canales de reclutamiento.`,
    },
    ventas: {
      id: 'ventas',
      area: 'Ventas, Marketing y Atención al Cliente',
      label: 'VENTAS & CLIENTES',
      friction:
        'Retraso en responder dudas complejas de cotizaciones, mensajes iniciales improvisados y análisis disperso de quejas de clientes.',
      traditionalFlow:
        'Cada ejecutivo responde a su criterio; se pierden prospectos por falta de seguimiento ágil con argumentos estandarizados.',
      aiIntervention:
        'Asistente de primer borrador para propuestas comerciales, matriz de objeciones y síntesis de tickets de soporte recurrente.',
      privacySafeguard:
        'Sustituir nombres de clientes, cotizaciones específicas y márgenes confidenciales por variables genéricas ([CLIENTE_A], [VALOR_X]).',
      humanControl:
        'El asesor comercial revisa términos de servicio, montos finales y firma personalmente la comunicación.',
      metric: 'Incremento del 40% en velocidad de primera respuesta calificada a prospectos.',
      promptBlueprint: `Actúa como Especialista en Operaciones Comerciales y Éxito del Cliente.
Contexto: Recibimos esta consulta técnica / objeción de un prospecto: "[PEGAR CONSULTA O DUDA DEL CLIENTE]".
Servicio o producto relacionado: [BREVE DESCRIPCIÓN DEL CATÁLOGO].

Instrucciones:
1. Analiza el dolor central del prospecto y clasifícalo en: (Duda técnica / Presupuesto / Tiempo de entrega / Confianza).
2. Redacta 2 opciones de respuesta ejecutiva (máx. 120 palabras):
   • Opción A: Directa, concisa y orientada a agendar llamada de 10 minutos.
   • Opción B: Explicativa con viñetas claras que resuelven la objeción con argumentos comprobables.
3. Lista 2 preguntas de calificación que el vendedor debe hacer para avanzar el trato.`,
    },
    operaciones: {
      id: 'operaciones',
      area: 'Operaciones, Logística y Procesos Internos',
      label: 'OPERACIONES',
      friction:
        'Manuales de procedimientos desactualizados, listas de verificación incompletas y dificultad para transferir conocimiento a nuevos colaboradores.',
      traditionalFlow:
        'El conocimiento reside en la memoria de 2 personas; documentar un proceso toma semanas y nadie lo consulta por denso.',
      aiIntervention:
        'Conversión de grabaciones de voz o notas desordenadas en manuales paso a paso tipo SOP (Standard Operating Procedure).',
      privacySafeguard:
        'Omitir contraseñas, IPs, credenciales de sistemas y datos de proveedores estratégicos en las solicitudes.',
      humanControl:
        'El líder de operaciones prueba el procedimiento paso a paso en el entorno real antes de oficializarlo.',
      metric: 'De 2 semanas a 2 horas para documentar y estandarizar un procedimiento operativo clave.',
      promptBlueprint: `Actúa como Ingeniero de Procesos y Diseñador de Documentación Operativa (SOP).
Materia prima: Aquí están las notas desordenadas tomadas durante la operación: "[PEGAR PASOS / NOTAS EN BRUTO]".

Genera un Procedimiento Operativo Estandarizado (SOP) formal:
1. Título y Código de Procedimiento.
2. Objetivo y Alcance (Quién lo ejecuta y cuándo aplica).
3. Requisitos previos y herramientas necesarias.
4. Flujo paso a paso numerado con: Acción exacta, Responsable, y Criterio de aceptación (Cómo saber que quedó bien hecho).
5. Sección de Errores Comunes y Solución Inmediata (Troubleshooting).
6. Checklist de verificación final de 5 casillas.`,
    },
    direccion: {
      id: 'direccion',
      area: 'Coordinación, Gerencia y Dirección',
      label: 'DIRECCIÓN & ESTRATEGIA',
      friction:
        'Informes mensuales densos que nadie lee, minutas de reunión sin responsables claros y toma de decisiones lenta por sobrecarga documental.',
      traditionalFlow:
        'Directivos pasan horas revisando reportes de 40 páginas para extraer 3 números que importan para la estrategia.',
      aiIntervention:
        'Extracción de puntos de decisión, cotejo de avances contra objetivos trimestrales y matriz de riesgos de proyectos.',
      privacySafeguard:
        'Utilizar modelos cerrados o corporativos aprobados; aplicar enmascaramiento sobre estados financieros auditados.',
      humanControl:
        'La dirección contrasta las conclusiones de la IA contra el criterio del negocio y asume la responsabilidad total de las decisiones.',
      metric: 'Ahorro de 5+ horas semanales por directivo en lectura y síntesis de documentación.',
      promptBlueprint: `Actúa como Chief of Staff y Analista Estratégico Ejecutivo.
Adjunto / Texto: Transcripción o notas de la junta directiva / reporte de avance: "[PEGAR MINUTA O RESUMEN EJECUTIVO]".

Instrucciones de síntesis de alto impacto:
1. Resumen en un solo párrafo (máx. 50 palabras) del estado general de la iniciativa.
2. Tabla de Acuerdos Clave: Columna (Acuerdo / Responsable directo / Fecha límite / Dependencia crítica).
3. Matriz de Alertas y Riesgos: Identifica 3 cuellos de botella que podrían descarrilar la entrega si no se atienden en 48 horas.
4. 3 Preguntas estratégicas que la dirección general debe hacer a los líderes de área en la siguiente sesión de seguimiento.`,
    },
  }

  const currentArea = areasData[selectedArea]

  const handleCopyBlueprint = () => {
    const textToCopy = `FICHA DE OPORTUNIDAD & PROMPT MAESTRO (${currentArea.label}):
ÁREA: ${currentArea.area}
PROBLEMA DETECTADO: ${currentArea.friction}
INTERVENCIÓN CON IA: ${currentArea.aiIntervention}
PRIVACIDAD Y DATOS: ${currentArea.privacySafeguard}
CONTROL HUMANO: ${currentArea.humanControl}
MÉTRICA / INDICADOR: ${currentArea.metric}

============================================================
PROMPT BLUEPRINT PARA EL EQUIPO:
============================================================
${currentArea.promptBlueprint}`

    navigator.clipboard.writeText(textToCopy)
    setCopiedBlueprint(true)
    setTimeout(() => setCopiedBlueprint(false), 2200)
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-yellow selection:text-black flex flex-col">
      {/* ================================================================= */}
      {/* HEADER / NAVEGACIÓN SUPERIOR (Mismo patrón oficial de rubenoroz.com) */}
      {/* ================================================================= */}
      <header className="border-b-2 border-black bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/#courses"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-black hover:text-brand-pink transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Volver a cursos</span>
          </Link>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="hidden sm:inline bg-brand-yellow px-2.5 py-1 border border-black font-bold uppercase">
              PROGRAMA EJECUTIVO · IN-COMPANY
            </span>
            <a
              href={waUrlMain}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-black text-white hover:bg-brand-pink font-bold border-2 border-black transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <MessageCircle size={14} />
              <span className="hidden md:inline">SOLICITAR INFORMACIÓN</span>
              <span className="md:hidden">COTIZAR</span>
            </a>
          </div>
        </div>
      </header>

      {/* ================================================================= */}
      {/* CONTENEDOR PRINCIPAL TECH-GRID                                    */}
      {/* ================================================================= */}
      <div className="flex-1 w-full tech-grid">
        <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-16 flex-1 w-full">
          {/* ============================================================= */}
          {/* HERO SECTION                                                  */}
          {/* ============================================================= */}
          <section className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000]">
                <Sparkles size={14} />
                PROGRAMA EJECUTIVO · IN-COMPANY
              </div>
              <span className="font-mono text-xs text-zinc-600 bg-white px-2.5 py-1 border border-black font-bold uppercase">
                EMPRESAS DE 20 A 250 COLABORADORES
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-sans leading-none text-black">
              IA APLICADA AL TRABAJO
            </h1>

            <p className="text-xl sm:text-2xl font-bold font-sans text-zinc-800 max-w-4xl leading-snug">
              Capacitación práctica para identificar oportunidades reales de mejora con inteligencia
              artificial, diseñar usos responsables y convertir tareas repetitivas en procesos más claros,
              medibles y verificables.
            </p>

            <p className="text-base sm:text-lg text-zinc-600 font-sans max-w-3xl leading-relaxed">
              Diseñado para áreas directivas, administrativas, comerciales y de operaciones. No está
              dirigido principalmente a programadores ni ingenieros de software: el objetivo es desarrollar
              criterio profesional, gobierno interno y resolución directa de cuellos de botella en la
              organización.
            </p>

            {/* Datos Rápidos (4 tarjetas neo-brutalistas) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
              <div className="border-2 border-black bg-white p-3.5 shadow-neo hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
                <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                  <Clock size={14} className="text-brand-pink" />
                  Duración
                </div>
                <div className="text-base font-extrabold text-black">8 Horas</div>
                <div className="text-[11px] text-zinc-600">Jornada ejecutiva intensiva</div>
              </div>

              <div className="border-2 border-black bg-white p-3.5 shadow-neo hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
                <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                  <Users size={14} className="text-brand-pink" />
                  Grupo
                </div>
                <div className="text-base font-extrabold text-black">Hasta 20 personas</div>
                <div className="text-[11px] text-zinc-600">Equipos y líderes de área</div>
              </div>

              <div className="border-2 border-black bg-white p-3.5 shadow-neo hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
                <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                  <Laptop size={14} className="text-brand-pink" />
                  Modalidad
                </div>
                <div className="text-base font-extrabold text-black">Presencial / En vivo</div>
                <div className="text-[11px] text-zinc-600">In-company o remoto guiado</div>
              </div>

              <div className="border-2 border-black bg-white p-3.5 shadow-neo hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
                <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                  <Target size={14} className="text-brand-pink" />
                  Enfoque
                </div>
                <div className="text-base font-extrabold text-black">Taller Aplicado</div>
                <div className="text-[11px] text-zinc-600">Problemas reales de tu empresa</div>
              </div>
            </div>

            {/* CTAs Principales del Hero */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <a
                href={waUrlMain}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black text-white hover:bg-brand-yellow hover:text-black font-bold font-mono text-xs sm:text-sm uppercase tracking-wider border-2 border-black transition-all flex items-center justify-center gap-2 shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                <MessageCircle size={16} />
                SOLICITAR INFORMACIÓN PARA MI EMPRESA
              </a>

              <a
                href="#temario"
                className="px-6 py-4 bg-white text-black hover:bg-zinc-100 font-bold font-mono text-xs sm:text-sm uppercase tracking-wider border-2 border-black transition-all flex items-center justify-center gap-2 shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                VER TEMARIO Y METODOLOGÍA
                <ChevronDown size={14} />
              </a>
            </div>

            {/* Diferenciador con De Cero a IA */}
            <div className="border-l-4 border-black bg-brand-yellow/30 p-4 font-mono text-xs text-zinc-800 space-y-1">
              <span className="font-bold uppercase tracking-wider text-black block flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-black" />
                DIFERENCIACIÓN DE PROGRAMAS CORPORATIVOS:
              </span>
              <p className="font-sans text-xs text-zinc-700 leading-relaxed">
                A diferencia de nuestro taller de adopción personal{' '}
                <strong className="text-black">“De Cero a IA”</strong> (enfocado en personas y herramientas
                aisladas), <strong className="text-black">“IA Aplicada al Trabajo”</strong> es un programa
                estructurado in-company que interviene procesos departamentales, políticas de gobernanza,
                seguridad de datos confidenciales y construcción de pilotos medibles en equipo.
              </p>
            </div>
          </section>

          {/* ============================================================= */}
          {/* PRINCIPIO RECTOR Y FLUJO METODOLÓGICO                         */}
          {/* ============================================================= */}
          <section className="bg-black text-white p-6 sm:p-10 border-2 border-black shadow-neo space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest font-bold">
                // MENSAJE CENTRAL &amp; PRINCIPIO RECTOR
              </span>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-sans tracking-tight leading-snug">
                “La IA puede generar borradores. El criterio profesional decide qué se usa, qué se verifica y
                qué se mejora.”
              </blockquote>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 font-bold">
                ENFOQUE METODOLÓGICO DE IMPLEMENTACIÓN:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-center">
                <div className="p-3 bg-zinc-900 border border-zinc-700">
                  <div className="text-brand-yellow font-extrabold text-sm mb-1">01</div>
                  <div className="font-bold text-xs uppercase text-white">PROBLEMA</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Fricción real</div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-700">
                  <div className="text-brand-yellow font-extrabold text-sm mb-1">02</div>
                  <div className="font-bold text-xs uppercase text-white">PROCESO</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Flujo actual</div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-700">
                  <div className="text-brand-yellow font-extrabold text-sm mb-1">03</div>
                  <div className="font-bold text-xs uppercase text-white">IA</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Intervención</div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-700">
                  <div className="text-brand-yellow font-extrabold text-sm mb-1">04</div>
                  <div className="font-bold text-xs uppercase text-white">IMPLEMENTACIÓN</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Uso guiado</div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-700">
                  <div className="text-brand-yellow font-extrabold text-sm mb-1">05</div>
                  <div className="font-bold text-xs uppercase text-white">VERIFICACIÓN</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Control humano</div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-700">
                  <div className="text-brand-yellow font-extrabold text-sm mb-1">06</div>
                  <div className="font-bold text-xs uppercase text-emerald-400">MEJORA</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Métrica y piloto</div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================= */}
          {/* COMPARATIVA: USO AISLADO VS IA APLICADA AL TRABAJO            */}
          {/* ============================================================= */}
          <section className="space-y-8 pt-4 border-t-2 border-black">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                // CRITERIO ORGANIZACIONAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                No se trata de usar más herramientas
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-2 max-w-3xl leading-relaxed">
                No se trata de sumar otra suscripción a la rutina mensual. Se trata de identificar dónde un
                proceso pierde tiempo, se duplica, depende de datos dispersos o genera retrabajo costoso; y
                luego evaluar con rigor si la IA puede aportar valor real.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
              {/* Tarjeta 1: Práctica improvisada */}
              <div className="border-2 border-black bg-zinc-50 p-6 sm:p-8 shadow-neo space-y-4">
                <div className="flex items-center justify-between border-b-2 border-black pb-3">
                  <div>
                    <span className="bg-zinc-200 text-black px-2 py-0.5 border border-black font-bold uppercase text-[10px] block w-fit mb-1">
                      PRÁCTICA IMPROVISADA
                    </span>
                    <h3 className="text-xl font-extrabold text-black uppercase font-sans">Uso aislado de IA</h3>
                  </div>
                  <div className="w-8 h-8 bg-zinc-200 border-2 border-black flex items-center justify-center font-bold text-base text-black">
                    ✕
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-pink font-bold text-sm leading-none shrink-0">•</span>
                    <span className="text-zinc-700 font-sans text-xs">
                      <strong>Preguntas improvisadas:</strong> Solicitudes sin contexto, restricciones ni
                      formatos de entrega definidos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-pink font-bold text-sm leading-none shrink-0">•</span>
                    <span className="text-zinc-700 font-sans text-xs">
                      <strong>Resultados genéricos:</strong> Respuestas superficiales que obligan al equipo a
                      rehacer el trabajo manualmente.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-pink font-bold text-sm leading-none shrink-0">•</span>
                    <span className="text-zinc-700 font-sans text-xs">
                      <strong>Riesgos de privacidad:</strong> Carga involuntaria de datos personales, nóminas o
                      información confidencial en servidores públicos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-pink font-bold text-sm leading-none shrink-0">•</span>
                    <span className="text-zinc-700 font-sans text-xs">
                      <strong>Respuestas sin cotejo:</strong> Aceptación ciega de datos generados que terminan en
                      reportes directivos o ante clientes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand-pink font-bold text-sm leading-none shrink-0">•</span>
                    <span className="text-zinc-700 font-sans text-xs">
                      <strong>Aislamiento operativo:</strong> Ahorros personales individuales que no elevan el
                      estándar del departamento.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tarjeta 2: Método estructurado */}
              <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo space-y-4 relative">
                <div className="flex items-center justify-between border-b-2 border-black pb-3">
                  <div>
                    <span className="bg-brand-yellow text-black px-2 py-0.5 border border-black font-bold uppercase text-[10px] block w-fit mb-1">
                      MÉTODO DE TRABAJO
                    </span>
                    <h3 className="text-xl font-extrabold text-black uppercase font-sans">
                      IA aplicada al trabajo
                    </h3>
                  </div>
                  <div className="w-8 h-8 bg-brand-yellow border-2 border-black flex items-center justify-center font-bold text-base text-black">
                    ✓
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-black font-bold text-sm leading-none shrink-0">✓</span>
                    <span className="text-zinc-800 font-sans text-xs">
                      <strong>Diagnóstico previo de procesos:</strong> Análisis del cuello de botella antes de
                      tocar cualquier software.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-black font-bold text-sm leading-none shrink-0">✓</span>
                    <span className="text-zinc-800 font-sans text-xs">
                      <strong>Brief estructurado y reutilizable:</strong> Prompts maestros con objetivo, límites,
                      tono y entregables estandarizados.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-black font-bold text-sm leading-none shrink-0">✓</span>
                    <span className="text-zinc-800 font-sans text-xs">
                      <strong>Gobernanza y anonimización:</strong> Políticas claras de protección de datos y
                      clasificación de información corporativa.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-black font-bold text-sm leading-none shrink-0">✓</span>
                    <span className="text-zinc-800 font-sans text-xs">
                      <strong>Supervisión y control humano:</strong> Protocolo de verificación estricto antes de
                      aprobar o enviar cualquier documento.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-black font-bold text-sm leading-none shrink-0">✓</span>
                    <span className="text-zinc-800 font-sans text-xs">
                      <strong>Pilotos medibles con ROI:</strong> Fichas de oportunidad con métricas de tiempo,
                      ahorro de retrabajo y calidad.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ============================================================= */}
          {/* SIMULADOR INTERACTIVO: FICHA DE OPORTUNIDAD & PROMPTS         */}
          {/* ============================================================= */}
          <section className="bg-white border-2 border-black p-6 sm:p-10 shadow-neo space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-black pb-4">
              <div>
                <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                  // SIMULADOR INTERACTIVO EN VIVO
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                  Matriz de Oportunidades &amp; Prompt Maestro por Área
                </h2>
                <p className="text-zinc-600 font-sans text-xs sm:text-sm mt-1 max-w-2xl">
                  Selecciona un departamento para explorar cómo transformamos una fricción real en una ficha de
                  trabajo con prompts listos para aplicar.
                </p>
              </div>

              {/* Selector de Pestañas */}
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {Object.values(areasData).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedArea(item.id)}
                    className={`px-3 py-2 border-2 border-black font-bold uppercase transition-all cursor-pointer ${
                      selectedArea === item.id
                        ? 'bg-brand-yellow text-black shadow-[2px_2px_0px_#000]'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ficha Desglosada */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Lado Izquierdo: Ficha de Diagnóstico Metodológico */}
              <div className="lg:col-span-7 space-y-4 font-mono text-xs">
                <div className="border-2 border-black p-4 bg-zinc-50 space-y-3">
                  <div className="flex items-center justify-between border-b border-zinc-300 pb-2">
                    <span className="font-bold uppercase text-black flex items-center gap-1.5">
                      <Briefcase size={14} className="text-brand-pink" />
                      Área Analizada:
                    </span>
                    <span className="bg-black text-white px-2 py-0.5 text-[10px] font-bold uppercase">
                      {currentArea.area}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase block mb-0.5">
                      Fricción o Cuello de Botella Tradicional:
                    </span>
                    <p className="font-sans text-xs text-zinc-700 leading-relaxed bg-white p-2.5 border border-zinc-200">
                      {currentArea.friction}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="bg-white p-3 border border-zinc-200 space-y-1">
                      <span className="text-[10px] text-zinc-500 font-bold uppercase flex items-center gap-1">
                        <Workflow size={12} className="text-zinc-700" />
                        Intervención con IA:
                      </span>
                      <p className="font-sans text-[11px] text-zinc-700 leading-snug">
                        {currentArea.aiIntervention}
                      </p>
                    </div>

                    <div className="bg-white p-3 border border-zinc-200 space-y-1">
                      <span className="text-[10px] text-brand-pink font-bold uppercase flex items-center gap-1">
                        <ShieldAlert size={12} className="text-brand-pink" />
                        Privacidad &amp; Datos:
                      </span>
                      <p className="font-sans text-[11px] text-zinc-700 leading-snug">
                        {currentArea.privacySafeguard}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="bg-emerald-50/70 p-3 border border-emerald-300 space-y-1">
                      <span className="text-[10px] text-emerald-800 font-bold uppercase flex items-center gap-1">
                        <UserCheck size={12} className="text-emerald-700" />
                        Supervisión Humana:
                      </span>
                      <p className="font-sans text-[11px] text-emerald-950 leading-snug">
                        {currentArea.humanControl}
                      </p>
                    </div>

                    <div className="bg-amber-50/70 p-3 border border-amber-300 space-y-1">
                      <span className="text-[10px] text-amber-900 font-bold uppercase flex items-center gap-1">
                        <TrendingUp size={12} className="text-amber-800" />
                        Métrica de Impacto:
                      </span>
                      <p className="font-sans text-[11px] text-amber-950 font-medium leading-snug">
                        {currentArea.metric}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Derecho: Prompt Maestro Listo para Copiar */}
              <div className="lg:col-span-5 flex flex-col justify-between border-2 border-black bg-zinc-900 text-white p-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-brand-yellow font-bold uppercase tracking-wider">
                      // PROMPT BLUEPRINT EJECUTIVO
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 border border-zinc-700">
                      REUTILIZABLE
                    </span>
                  </div>
                  <pre className="font-mono text-[11px] text-zinc-300 leading-relaxed bg-black/60 p-3.5 border border-zinc-700 overflow-x-auto max-h-[300px] whitespace-pre-wrap">
                    {currentArea.promptBlueprint}
                  </pre>
                </div>

                <button
                  onClick={handleCopyBlueprint}
                  className="w-full py-3 bg-brand-yellow text-black hover:bg-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-black flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[2px_2px_0px_#fff] active:translate-x-[1px] active:translate-y-[1px]"
                >
                  {copiedBlueprint ? (
                    <>
                      <Check size={16} className="text-black" />
                      ¡COPIADO AL PORTAPAPELES!
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      COPIAR BLUEPRINT DE ESTE PERFIL
                    </>
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* ============================================================= */}
          {/* TEMARIO: LO QUE EL EQUIPO APRENDERÁ (6 MÓDULOS)                */}
          {/* ============================================================= */}
          <section id="temario" className="space-y-8 pt-4 border-t-2 border-black">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                // CONTENIDO PROGRAMÁTICO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Lo que el equipo aprenderá
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
                6 bloques formativos diseñados para transformar las tareas documentales, operativas y analíticas
                de la organización.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
              {/* Módulo 1 */}
              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3 flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="bg-brand-yellow px-2 py-0.5 border border-black font-bold uppercase text-[10px]">
                      MÓDULO 01
                    </span>
                    <span className="text-zinc-400 font-bold">GOBIERNO &amp; ÉTICA</span>
                  </div>
                  <h3 className="font-bold text-black text-sm uppercase font-sans">
                    1. Uso Profesional y Responsable
                  </h3>
                  <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                    Capacidades, límites, alucinaciones, sesgos y protocolos de verificación. Clasificación de datos
                    corporativos (público, confidencial, restringido) y reglas para no exponer propiedad intelectual.
                  </p>
                </div>
                <div className="border-t border-zinc-200 pt-3 text-[11px] text-zinc-500">
                  • Privacidad · Alucinaciones · Gobierno corporativo
                </div>
              </div>

              {/* Módulo 2 */}
              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3 flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="bg-brand-yellow px-2 py-0.5 border border-black font-bold uppercase text-[10px]">
                      MÓDULO 02
                    </span>
                    <span className="text-zinc-400 font-bold">METODOLOGÍA</span>
                  </div>
                  <h3 className="font-bold text-black text-sm uppercase font-sans">
                    2. Método de Trabajo con IA
                  </h3>
                  <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                    El brief profesional: contexto, objetivo, insumo, restricciones, entregable esperado y formato.
                    Cómo pasar de preguntas vagas en un chat a instrucciones estandarizadas y reutilizables.
                  </p>
                </div>
                <div className="border-t border-zinc-200 pt-3 text-[11px] text-zinc-500">
                  • Brief profesional · Iteración · Plantillas de equipo
                </div>
              </div>

              {/* Módulo 3 */}
              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3 flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="bg-brand-yellow px-2 py-0.5 border border-black font-bold uppercase text-[10px]">
                      MÓDULO 03
                    </span>
                    <span className="text-zinc-400 font-bold">DOCUMENTOS</span>
                  </div>
                  <h3 className="font-bold text-black text-sm uppercase font-sans">
                    3. Documentos, Análisis e Investigación
                  </h3>
                  <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                    Síntesis, extracción y comparación de información técnica. Trabajo con manuales, contratos, minutas y
                    estados de cuenta garantizando trazabilidad y cotejo de fuentes.
                  </p>
                </div>
                <div className="border-t border-zinc-200 pt-3 text-[11px] text-zinc-500">
                  • Síntesis documental · Comparación · Cotejo de fuentes
                </div>
              </div>

              {/* Módulo 4 */}
              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3 flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="bg-brand-yellow px-2 py-0.5 border border-black font-bold uppercase text-[10px]">
                      MÓDULO 04
                    </span>
                    <span className="text-zinc-400 font-bold">DEPARTAMENTOS</span>
                  </div>
                  <h3 className="font-bold text-black text-sm uppercase font-sans">
                    4. Casos Prácticos por Área
                  </h3>
                  <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                    Aplicaciones en Recursos Humanos, ventas, finanzas, dirección, soporte y operaciones. Cada caso con
                    su insumo real, riesgo identificado y protocolo de supervisión humana.
                  </p>
                </div>
                <div className="border-t border-zinc-200 pt-3 text-[11px] text-zinc-500">
                  • RH · Ventas · Operaciones · Dirección general
                </div>
              </div>

              {/* Módulo 5 */}
              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3 flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="bg-brand-yellow px-2 py-0.5 border border-black font-bold uppercase text-[10px]">
                      MÓDULO 05
                    </span>
                    <span className="text-zinc-400 font-bold">ARQUITECTURA</span>
                  </div>
                  <h3 className="font-bold text-black text-sm uppercase font-sans">
                    5. De Plantillas a Automatización
                  </h3>
                  <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                    Diferencia entre uso asistido manual, plantillas fijas, flujos estructurados, automatizaciones y
                    agentes. Criterios de ingeniería para no sobre-diseñar soluciones innecesarias.
                  </p>
                </div>
                <div className="border-t border-zinc-200 pt-3 text-[11px] text-zinc-500">
                  • Plantilla → Flujo → Automatización → Agentes
                </div>
              </div>

              {/* Módulo 6 */}
              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3 flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="bg-brand-yellow px-2 py-0.5 border border-black font-bold uppercase text-[10px]">
                      MÓDULO 06
                    </span>
                    <span className="text-zinc-400 font-bold">MEDICIÓN &amp; ROI</span>
                  </div>
                  <h3 className="font-bold text-black text-sm uppercase font-sans">
                    6. Priorización y Medición Responsable
                  </h3>
                  <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                    Matriz de impacto vs. esfuerzo, medición de línea base, tiempos de ejecución y estimación de ROI.
                    Metodología para sustentar proyectos viables y descartar oportunamente iniciativas inviables.
                  </p>
                </div>
                <div className="border-t border-zinc-200 pt-3 text-[11px] text-zinc-500">
                  • Matriz de valor · Indicadores · ROI responsable
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================= */}
          {/* ENTREGABLE TANGIBLE: DEL CURSO AL PRIMER PILOTO               */}
          {/* ============================================================= */}
          <section className="bg-white border-2 border-black p-6 sm:p-10 shadow-neo space-y-8">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                // ENTREGABLE TANGIBLE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                DEL CURSO AL PRIMER PILOTO
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-2 max-w-3xl leading-relaxed">
                Cada equipo participante selecciona un problema real de su operación y diseña una ficha completa de
                intervención con IA con responsable, criterio de control y métrica medible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
                SECUENCIA METODOLÓGICA DE CONSTRUCCIÓN:
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 font-mono text-xs text-center">
                <div className="border-2 border-black p-3 bg-zinc-50 space-y-1">
                  <div className="text-brand-pink font-extrabold text-base">01</div>
                  <div className="font-bold uppercase text-black text-[11px] leading-tight">Problema real</div>
                  <div className="text-[10px] text-zinc-500">Fricción visible</div>
                </div>

                <div className="border-2 border-black p-3 bg-zinc-50 space-y-1">
                  <div className="text-brand-pink font-extrabold text-base">02</div>
                  <div className="font-bold uppercase text-black text-[11px] leading-tight">Proceso actual</div>
                  <div className="text-[10px] text-zinc-500">Flujo real</div>
                </div>

                <div className="border-2 border-black p-3 bg-zinc-50 space-y-1">
                  <div className="text-brand-pink font-extrabold text-base">03</div>
                  <div className="font-bold uppercase text-black text-[11px] leading-tight">
                    Cuello de botella
                  </div>
                  <div className="text-[10px] text-zinc-500">Demora / error</div>
                </div>

                <div className="border-2 border-black p-3 bg-zinc-50 space-y-1">
                  <div className="text-brand-pink font-extrabold text-base">04</div>
                  <div className="font-bold uppercase text-black text-[11px] leading-tight">
                    Intervención
                  </div>
                  <div className="text-[10px] text-zinc-500">Nivel de IA</div>
                </div>

                <div className="border-2 border-black p-3 bg-zinc-50 space-y-1">
                  <div className="text-brand-pink font-extrabold text-base">05</div>
                  <div className="font-bold uppercase text-black text-[11px] leading-tight">
                    Riesgos y datos
                  </div>
                  <div className="text-[10px] text-zinc-500">Seguridad</div>
                </div>

                <div className="border-2 border-black p-3 bg-zinc-50 space-y-1">
                  <div className="text-brand-pink font-extrabold text-base">06</div>
                  <div className="font-bold uppercase text-black text-[11px] leading-tight">
                    Supervisión
                  </div>
                  <div className="text-[10px] text-zinc-500">Control humano</div>
                </div>

                <div className="border-2 border-black p-3 bg-zinc-50 space-y-1">
                  <div className="text-brand-pink font-extrabold text-base">07</div>
                  <div className="font-bold uppercase text-black text-[11px] leading-tight">Métrica</div>
                  <div className="text-[10px] text-zinc-500">Indicador</div>
                </div>

                <div className="border-2 border-black p-3 bg-brand-yellow space-y-1">
                  <div className="text-black font-extrabold text-base">08</div>
                  <div className="font-extrabold uppercase text-black text-[11px] leading-tight">Piloto</div>
                  <div className="text-[10px] text-black font-bold">Prueba real</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-black bg-zinc-50 p-4 font-sans text-sm text-zinc-800 leading-relaxed">
              <strong className="text-black">El resultado no es una charla teórica.</strong> Es una ficha de
              oportunidad formal con responsable directo, límites de privacidad, criterio de calidad y forma de
              medir el retorno para la gerencia.
            </div>
          </section>

          {/* ============================================================= */}
          {/* TRES NIVELES DE CAPACITACIÓN CORPORATIVA                      */}
          {/* ============================================================= */}
          <section className="space-y-8 pt-4 border-t-2 border-black">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                // CATÁLOGO DE PROGRAMAS CORPORATIVOS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Tres niveles para cada etapa de madurez
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
                Desde la adopción inicial para sensibilizar al personal hasta consultoría estratégica integral de
                transformación.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-mono text-xs">
              {/* Tarjeta 1: Capacitación Esencial */}
              <div className="border-2 border-black bg-white p-6 sm:p-8 shadow-neo flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="bg-zinc-100 px-2.5 py-1 border border-black font-bold uppercase text-[10px]">
                      NIVEL 01
                    </span>
                    <span className="text-zinc-500 font-bold">4 HORAS</span>
                  </div>

                  <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans text-black">
                    CAPACITACIÓN ESENCIAL EN IA
                  </h3>

                  <div className="text-xs text-zinc-500 font-bold">4 horas · Hasta 15 personas</div>

                  <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                    Para iniciar la adopción con seguridad, criterio responsable y aplicaciones inmediatas de bajo
                    riesgo en la oficina.
                  </p>

                  <div className="border-t border-zinc-200 pt-4 space-y-1">
                    <span className="font-bold text-black uppercase text-[10px] block">Resultado:</span>
                    <p className="text-zinc-700 font-sans text-xs">
                      Sensibilización del equipo, reglas de privacidad y primera aplicación práctica por participante.
                    </p>
                  </div>
                </div>

                <a
                  href={waUrlEsencial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-white text-black font-bold border-2 border-black hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000] uppercase tracking-wider"
                >
                  SOLICITAR INFORMACIÓN
                </a>
              </div>

              {/* Tarjeta 2: IA Aplicada al Trabajo (PROGRAMA PRINCIPAL) */}
              <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6 ring-2 ring-black">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow px-3 py-0.5 border-2 border-black font-bold uppercase text-[11px] tracking-wider shadow-neo-sm">
                  ★ PROGRAMA RECOMENDADO
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="bg-brand-yellow px-2.5 py-1 border border-black font-bold uppercase text-[10px]">
                      NIVEL 02 · PRINCIPAL
                    </span>
                    <span className="text-black font-bold">8 HORAS</span>
                  </div>

                  <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans text-black">
                    IA APLICADA AL TRABAJO
                  </h3>

                  <div className="text-xs text-zinc-800 font-bold">8 horas · Hasta 20 personas</div>

                  <p className="text-zinc-700 font-sans text-xs leading-relaxed">
                    Programa insignia para llevar la IA a tareas, documentos, políticas y flujos de área con
                    metodología de diseño de pilotos.
                  </p>

                  <div className="border-t-2 border-black pt-4 space-y-1 bg-brand-yellow/20 p-3 border border-black">
                    <span className="font-bold text-black uppercase text-[10px] block">Resultado:</span>
                    <p className="text-black font-sans text-xs font-medium">
                      Oportunidades concretas diseñadas por los equipos con métricas de tiempo, calidad y supervisión
                      humana.
                    </p>
                  </div>
                </div>

                <a
                  href={waUrlMain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-black text-white hover:bg-brand-yellow hover:text-black font-bold border-2 border-black transition-all flex items-center justify-center gap-2 shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase tracking-wider"
                >
                  <MessageCircle size={16} />
                  SOLICITAR PROPUESTA PARA MI EMPRESA
                </a>
              </div>

              {/* Tarjeta 3: Transformación con IA */}
              <div className="border-2 border-black bg-white p-6 sm:p-8 shadow-neo flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="bg-zinc-100 px-2.5 py-1 border border-black font-bold uppercase text-[10px]">
                      NIVEL 03
                    </span>
                    <span className="text-zinc-500 font-bold">3 A 5 SEMANAS</span>
                  </div>

                  <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans text-black">
                    TRANSFORMACIÓN CON IA
                  </h3>

                  <div className="text-xs text-zinc-500 font-bold">
                    3 a 5 semanas · Diagnóstico + capacitación + consultoría
                  </div>

                  <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                    Servicio premium para organizaciones que requieren un mapeo integral de procesos para decidir
                    dónde intervenir y qué no conviene automatizar.
                  </p>

                  <div className="border-t border-zinc-200 pt-4 space-y-1">
                    <span className="font-bold text-black uppercase text-[10px] block">Resultado:</span>
                    <p className="text-zinc-700 font-sans text-xs">
                      5 oportunidades priorizadas con análisis técnico, hoja de ruta a 90 días y acompañamiento de
                      pilotos.
                    </p>
                  </div>
                </div>

                <a
                  href={waUrlPremium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-white text-black font-bold border-2 border-black hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000] uppercase tracking-wider"
                >
                  EXPLORAR CONSULTORÍA
                </a>
              </div>
            </div>
          </section>

          {/* ============================================================= */}
          {/* PREGUNTAS FRECUENTES (FAQ CORPORATIVO)                        */}
          {/* ============================================================= */}
          <section className="space-y-8 pt-4 border-t-2 border-black">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                // RESOLUCIÓN DE DUDAS FRECUENTES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
                <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                  <HelpCircle size={16} className="text-brand-pink shrink-0" />
                  1. ¿El equipo necesita saber programar?
                </h4>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  <strong>Respuesta:</strong> No. El programa está diseñado para perfiles administrativos, directivos,
                  comerciales y de operaciones. No se escribe código; se desarrollan habilidades de formulación de
                  instrucciones, pensamiento por procesos y verificación de calidad.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
                <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                  <HelpCircle size={16} className="text-brand-pink shrink-0" />
                  2. ¿Se requiere una herramienta específica o de pago?
                </h4>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  <strong>Respuesta:</strong> No. La metodología es agnóstica de software y se adapta a las
                  herramientas autorizadas por la empresa (ChatGPT, Claude, Gemini, Copilot u opciones corporativas en
                  la nube de la organización).
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
                <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                  <HelpCircle size={16} className="text-brand-pink shrink-0" />
                  3. ¿Podemos trabajar con información real de nuestra empresa?
                </h4>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  <strong>Respuesta:</strong> Sí, siempre que cumpla con los protocolos de gobernanza. Durante el
                  taller enseñamos a anonimizar datos confidenciales para trabajar sobre la estructura real del
                  proceso sin vulnerar secretos comerciales ni datos personales.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
                <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                  <HelpCircle size={16} className="text-brand-pink shrink-0" />
                  4. ¿La IA sustituye la toma de decisiones del personal?
                </h4>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  <strong>Respuesta:</strong> En ningún caso. La IA actúa como asistente para generar borradores,
                  resúmenes o análisis iniciales; la decisión, el cotejo ético y la responsabilidad final permanecen
                  100% en el criterio profesional humano.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2 md:col-span-2">
                <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                  <HelpCircle size={16} className="text-brand-pink shrink-0" />
                  5. ¿El taller incluye desarrollo de software o automatizaciones técnicas complejas?
                </h4>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  <strong>Respuesta:</strong> El programa capacita para identificar con claridad qué cuellos de botella
                  justifican automatizarse y cuáles deben resolverse con mejores plantillas o rediseño de procesos. Las
                  implementaciones de software a la medida posteriores se cotizan por separado según el alcance de cada
                  organización.
                </p>
              </div>
            </div>
          </section>

          {/* ============================================================= */}
          {/* CIERRE Y CTA PRINCIPAL                                        */}
          {/* ============================================================= */}
          <section className="bg-black text-white p-8 sm:p-12 border-2 border-black shadow-neo text-center space-y-6">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-yellow font-bold">
                // IMPLEMENTACIÓN PRÁCTICA DE IA
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-sans text-white">
                EMPIEZA CON UN PROBLEMA REAL, NO CON UNA HERRAMIENTA
              </h2>
              <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
                Conversemos sobre las tareas, procesos y retos operativos de tu organización para definir el formato de
                capacitación más adecuado para tu equipo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <a
                href="#chat"
                data-open-chat="true"
                data-chat-prompt="Hola Rubén, me interesa solicitar una propuesta del taller in-company 'IA Aplicada al Trabajo' para mi equipo o empresa."
                className="w-full sm:w-auto px-8 py-4 bg-brand-yellow text-black font-mono font-bold text-base border-2 border-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_#fff] cursor-pointer"
              >
                <Sparkles size={20} />
                SOLICITAR PROPUESTA EN EL CHAT ASISTENTE
              </a>
            </div>

            <div className="font-mono text-xs text-zinc-400 pt-2">
              Atención personalizada por el asistente virtual · Sesiones presenciales in-company o remotas interactivas
            </div>
          </section>
        </main>
      </div>

      {/* ================================================================= */}
      {/* FOOTER                                                            */}
      {/* ================================================================= */}
      <footer className="border-t-2 border-black bg-white py-6 px-6 text-center font-mono text-xs text-zinc-500">
        <div>© 2026 Rubén Oroz · Taller IA Aplicada al Trabajo · Todos los derechos reservados</div>
      </footer>
    </div>
  )
}
