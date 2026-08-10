import React from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, CheckCircle2, Clock, Laptop, Calendar, 
  Sparkles, ExternalLink, MessageCircle, ShieldCheck, 
  Layers, Code2, Rocket, ArrowRight, UserCheck, Users
} from 'lucide-react'

export const metadata = {
  title: 'Taller: De Cero a Internet | Rubén Oroz',
  description: 'Crea y publica tu sitio web con Inteligencia Artificial en 4 horas. Sin saber programar, sin complicaciones.',
}

export default function DeCeroAInternetPage() {
  const waUrlGroup = 'https://wa.me/523335769348?text=Hola%2C%20me%20interesa%20el%20taller%20%22De%20Cero%20a%20Internet%22.%20%C2%BFMe%20dan%20informaci%C3%B3n%3F'
  const waUrlPersonal = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso%20personal%20o%20la%20asesor%C3%ADa%20de%20%22De%20Cero%20a%20Internet%22.'
  const waUrlBook = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20taller%20%22De%20Cero%20a%20Internet%22.'

  return (
    <div className="min-h-screen bg-background text-foreground tech-grid flex flex-col">
      
      {/* TOPBAR / STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-black py-3 px-6 md:px-12 flex items-center justify-between shadow-sm">
        <Link 
          href="/#courses"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-black hover:text-brand-pink border-2 border-black px-3 py-1.5 bg-zinc-50 hover:bg-brand-yellow hover:shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
        >
          <ArrowLeft size={14} /> VOLVER AL PORTAFOLIO
        </Link>
        
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block font-mono text-[11px] font-bold uppercase tracking-wider bg-brand-yellow border-2 border-black px-2.5 py-1 text-black shadow-[1px_1px_0px_#000]">
            Taller Presencial / Online
          </span>
          <a
            href={waUrlGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold bg-[#25d366] text-black border-2 border-black px-3 py-1.5 hover:bg-black hover:text-white transition-all flex items-center gap-1.5 shadow-neo active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <MessageCircle size={14} /> WHATSAPP
          </a>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12 md:py-16 space-y-16">

        {/* HERO SECTION */}
        <section className="space-y-8">
          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-xs uppercase font-bold text-brand-pink bg-white border-2 border-black px-3 py-1 shadow-neo inline-flex items-center gap-1.5">
              <Sparkles size={12} className="text-brand-pink animate-pulse" /> CUPOS MUY LIMITADOS
            </span>
            <span className="font-mono text-xs uppercase font-bold text-black bg-brand-yellow border-2 border-black px-3 py-1 shadow-neo">
              INTENSIVO 4 HORAS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-none font-sans">
                DE CERO A <br />
                <span className="text-brand-pink underline decoration-brand-yellow decoration-8 underline-offset-4">
                  INTERNET
                </span>
              </h1>
              
              <p className="font-mono text-lg sm:text-xl text-zinc-800 leading-relaxed font-semibold">
                Crea y publica tu sitio web con Inteligencia Artificial en 4 horas.
              </p>
              
              <p className="text-zinc-600 font-sans text-base leading-relaxed">
                Sin saber programar, sin complicarte: solo tú, tu idea, y una mañana. Sales del taller con tu página web publicada, dominio conectado y lista para compartir con clientes.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={waUrlGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25d366] text-black font-mono font-bold border-2 border-black hover:bg-black hover:text-white hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 shadow-neo text-sm sm:text-base"
                >
                  <MessageCircle size={18} /> QUIERO SABER CUÁNDO ABRE GRUPO
                </a>
                <a 
                  href="#proceso"
                  className="px-6 py-3.5 bg-white text-black font-mono font-bold border-2 border-black hover:bg-brand-yellow hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-sm sm:text-base"
                >
                  VER RUTA Y TEMARIO ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-2 border-black bg-white p-2 shadow-neo">
                <div className="border border-black overflow-hidden aspect-video bg-zinc-100 relative">
                  <img 
                    src="/images/de_cero_a_internet.png" 
                    alt="Taller De Cero a Internet" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase text-center mt-1.5 font-bold">
                  TALLER INTENSIVO // METODOLOGÍA PRÁCTICA
                </div>
              </div>
            </div>
          </div>

          {/* Callout box */}
          <div className="bg-zinc-50 border-2 border-black p-6 font-mono shadow-neo border-l-8 border-l-brand-yellow flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <div className="text-xs uppercase font-bold text-brand-pink tracking-wider">
                {"// PROMESA DEL TALLER"}
              </div>
              <div className="text-black font-bold text-base">
                Tu sitio web publicado en una sola mañana.
              </div>
              <div className="text-zinc-600 font-sans text-sm">
                Aprende el método replicable para construir herramientas digitales que representen tu negocio durante años.
              </div>
            </div>
            <span className="shrink-0 bg-white border-2 border-black px-3 py-1 font-mono text-xs font-bold text-zinc-800">
              100% PRÁCTICO
            </span>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3">
              <div className="w-10 h-10 border-2 border-black bg-brand-yellow flex items-center justify-center text-black font-bold shadow-[2px_2px_0px_#000]">
                <Code2 size={20} />
              </div>
              <h3 className="font-mono text-base font-bold uppercase text-black">Sin código</h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                No necesitas experiencia previa en programación ni diseño web.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3">
              <div className="w-10 h-10 border-2 border-black bg-brand-pink text-white flex items-center justify-center font-bold shadow-[2px_2px_0px_#000]">
                <Sparkles size={20} />
              </div>
              <h3 className="font-mono text-base font-bold uppercase text-black">Con Inteligencia Artificial</h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                Aprende a usar herramientas de IA generativa para estructurar, redactar y diseñar en minutos.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3">
              <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center text-black font-bold shadow-[2px_2px_0px_#000]">
                <Rocket size={20} />
              </div>
              <h3 className="font-mono text-base font-bold uppercase text-black">Resultados reales</h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                Terminas el taller con tu sitio web en vivo en Internet, no solo con teoría.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION: ESCALETA / RUTA */}
        <section id="proceso" className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// RUTA DE APRENDIZAJE · PASO A PASO"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              En solo 4 horas crearás y publicarás tu sitio
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Un camino claro y guiado, del primer boceto hasta tu sitio en línea:
            </p>
          </div>

          <div className="border-2 border-black shadow-neo divide-y-2 divide-black bg-white font-mono text-sm">
            {/* Header row */}
            <div className="grid grid-cols-12 bg-black text-brand-yellow font-bold p-4 text-xs tracking-wider">
              <div className="col-span-3 sm:col-span-2">ETAPA</div>
              <div className="col-span-9 sm:col-span-10">ACTIVIDAD & RESULTADO</div>
            </div>

            {/* Step 1 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="col-span-3 sm:col-span-2 font-bold text-brand-pink text-base">
                [01]
              </div>
              <div className="col-span-9 sm:col-span-10 space-y-1">
                <span className="text-xs uppercase text-zinc-500 font-bold block">PUNTO DE PARTIDA</span>
                <h4 className="font-bold text-black uppercase text-base">Define tu idea y objetivo</h4>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Aclaramos tu propuesta de valor, estructura básica y el mensaje clave que tu sitio debe comunicar a tus clientes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="col-span-3 sm:col-span-2 font-bold text-brand-pink text-base">
                [02]
              </div>
              <div className="col-span-9 sm:col-span-10 space-y-1">
                <span className="text-xs uppercase text-zinc-500 font-bold block">CON ASISTENCIA DE IA</span>
                <h4 className="font-bold text-black uppercase text-base">Genera contenidos e imágenes</h4>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Utilizamos modelos de IA para redactar textos persuasivos, titulares y generar recursos gráficos listos para producción.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="col-span-3 sm:col-span-2 font-bold text-brand-pink text-base">
                [03]
              </div>
              <div className="col-span-9 sm:col-span-10 space-y-1">
                <span className="text-xs uppercase text-zinc-500 font-bold block">TU MARCA, TU ESTILO</span>
                <h4 className="font-bold text-black uppercase text-base">Diseña y personaliza el sitio</h4>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Configuras secciones, paleta visual y tipografía con plantillas y herramientas visuales pensadas para verse de nivel profesional.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="col-span-3 sm:col-span-2 font-bold text-brand-pink text-base">
                [04]
              </div>
              <div className="col-span-9 sm:col-span-10 space-y-1">
                <span className="text-xs uppercase text-zinc-500 font-bold block">EL GRAN PASO</span>
                <h4 className="font-bold text-black uppercase text-base">Publicación en Internet & Dominio</h4>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Desplegamos tu sitio en servidores globales de alta velocidad, conectamos tu dominio personalizado y activamos el certificado de seguridad SSL.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start bg-brand-yellow/10 hover:bg-brand-yellow/20 transition-colors">
              <div className="col-span-3 sm:col-span-2 font-bold text-black text-base">
                [05]
              </div>
              <div className="col-span-9 sm:col-span-10 space-y-1">
                <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                  LA CIMA // LANZAMIENTO
                </span>
                <h4 className="font-bold text-black uppercase text-base">Listo para compartir y vender</h4>
                <p className="text-zinc-700 font-sans text-sm leading-relaxed">
                  Tu sitio queda 100% operativo en línea para atraer clientes, prospectos y oportunidades de negocio desde el primer día.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES SECTION */}
        <section id="detalles" className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// ENTREGABLES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Esto es lo que te llevas
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2">
              No es solo un curso teórico: te llevas un activo digital real y funcionando.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
            <div className="border-2 border-black p-5 bg-white shadow-neo flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#25d366] shrink-0" />
              <span className="font-bold text-black">Tu página web publicada y funcionando</span>
            </div>
            <div className="border-2 border-black p-5 bg-white shadow-neo flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#25d366] shrink-0" />
              <span className="font-bold text-black">Lista para compartir con clientes y prospectos</span>
            </div>
            <div className="border-2 border-black p-5 bg-white shadow-neo flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#25d366] shrink-0" />
              <span className="font-bold text-black">Conexión a tu propio dominio (opcional)</span>
            </div>
            <div className="border-2 border-black p-5 bg-white shadow-neo flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#25d366] shrink-0" />
              <span className="font-bold text-black">Plantillas y metodologías reutilizables</span>
            </div>
            <div className="border-2 border-black p-5 bg-brand-yellow text-black shadow-neo sm:col-span-2 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-black shrink-0" />
              <span className="font-bold">El conocimiento práctico para volver a crear sitios cuando quieras</span>
            </div>
          </div>
        </section>

        {/* TWO PATHS / MODALITIES */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// FORMATOS DE PARTICIPACIÓN"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              ¿Grupal o personalizado?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Group Workshop */}
            <div className="bg-white border-2 border-black p-6 md:p-8 flex flex-col justify-between shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 border-2 border-black bg-brand-yellow flex items-center justify-center text-black font-bold shadow-[2px_2px_0px_#000]">
                    <Users size={24} />
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold bg-zinc-100 border border-zinc-300 px-2 py-0.5">
                    GRUPOS REDUCIDOS
                  </span>
                </div>

                <h3 className="font-mono text-2xl font-bold uppercase text-black">
                  Taller Grupal
                </h3>

                <ul className="space-y-2.5 font-mono text-xs text-zinc-700">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-pink font-bold">▪</span> Cupos muy limitados para atención directa.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-pink font-bold">▪</span> 4 horas continuas de ritmo guiado.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-pink font-bold">▪</span> Interacción y feedback en vivo.
                  </li>
                </ul>

                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Déjanos tu mensaje y te avisamos con prioridad en cuanto se abra la próxima fecha de grupo.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-black">
                <a 
                  href={waUrlGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25d366] text-black font-mono font-bold text-center border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 shadow-neo"
                >
                  <MessageCircle size={16} /> AVÍSENME CUÁNDO ABRE
                </a>
              </div>
            </div>

            {/* 1-on-1 / Private Consulting */}
            <div className="bg-white border-2 border-black p-6 md:p-8 flex flex-col justify-between shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 border-2 border-black bg-brand-pink text-white flex items-center justify-center font-bold shadow-[2px_2px_0px_#000]">
                    <UserCheck size={24} />
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold bg-brand-yellow border border-black px-2 py-0.5 text-black">
                    100% A TU MEDIDA
                  </span>
                </div>

                <h3 className="font-mono text-2xl font-bold uppercase text-black">
                  Curso Personal / Asesoría
                </h3>

                <ul className="space-y-2.5 font-mono text-xs text-zinc-700">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-pink font-bold">▪</span> 4 horas adaptadas 100% a tu proyecto.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-pink font-bold">▪</span> Fechas y horarios flexibles según tu agenda.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-pink font-bold">▪</span> Resolución de dudas técnicas específicas.
                  </li>
                </ul>

                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Ideal si tienes un proyecto específico o necesitas atención completamente enfocada en tus objetivos de negocio.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-black">
                <a 
                  href={waUrlPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-white text-black font-mono font-bold text-center border-2 border-black hover:bg-brand-yellow transition-all flex items-center justify-center gap-2 shadow-neo"
                >
                  <MessageCircle size={16} /> SOLICITAR ASESORÍA PERSONAL
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* LOGISTICS & PRICING */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// LOGÍSTICA E INVERSIÓN"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Detalles claros, sin sorpresas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="border-2 border-black p-6 bg-white shadow-neo space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase">
                <Calendar size={16} className="text-brand-pink" /> PRÓXIMA FECHA
              </div>
              <div className="text-lg font-bold text-black uppercase">
                Próximamente
              </div>
              <p className="text-zinc-600 font-sans text-xs">
                Regístrate en la lista de interés de WhatsApp para apartar tu lugar con antelación.
              </p>
            </div>

            <div className="border-2 border-black p-6 bg-white shadow-neo space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase">
                <Clock size={16} className="text-brand-pink" /> HORARIO
              </div>
              <div className="text-lg font-bold text-black uppercase">
                9:00 AM – 1:00 PM
              </div>
              <p className="text-zinc-600 font-sans text-xs">
                4 horas de taller intensivo enfocado en producción directa.
              </p>
            </div>

            <div className="border-2 border-black p-6 bg-white shadow-neo space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase">
                <Laptop size={16} className="text-brand-pink" /> REQUISITO
              </div>
              <div className="text-lg font-bold text-black uppercase">
                Trae tu laptop
              </div>
              <p className="text-zinc-600 font-sans text-xs">
                Es indispensable contar con tu propia computadora para trabajar sobre tu proyecto.
              </p>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-black bg-brand-yellow p-8 font-mono shadow-neo space-y-4">
              <span className="text-xs uppercase font-bold text-black border border-black px-2 py-0.5 bg-white">
                TALLER GRUPAL
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
                $1,499 <span className="text-sm font-bold">MXN</span>
              </div>
              <p className="font-sans text-sm text-zinc-800 leading-relaxed">
                Paga con anticipación y asegura tu lugar. Grupos pequeños para brindar atención personalizada.
              </p>
              <a 
                href={waUrlBook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-black text-white font-bold hover:bg-white hover:text-black border-2 border-black transition-all shadow-[2px_2px_0px_#000]"
              >
                <MessageCircle size={16} /> APARTAR MI LUGAR
              </a>
            </div>

            <div className="border-2 border-black bg-white p-8 font-mono shadow-neo space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-zinc-600 border border-zinc-300 px-2 py-0.5 bg-zinc-50">
                  CURSO PERSONAL / ASESORÍA
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                  4 HORAS 1 A 1
                </div>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  Precio y disponibilidad al solicitar información. Adaptado 100% a los requerimientos de tu proyecto o empresa.
                </p>
              </div>
              <a 
                href={waUrlPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-zinc-100 text-black font-bold hover:bg-brand-pink hover:text-white border-2 border-black transition-all shadow-[2px_2px_0px_#000]"
              >
                <MessageCircle size={16} /> COTIZAR ASESORÍA
              </a>
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
              ¡Reserva tu lugar en el próximo grupo!
            </h2>
            <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
              En cuatro horas puedes construir una herramienta que represente tu negocio durante años.
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
        <div>© {new Date().getFullYear()} Rubén Oroz · Taller De Cero a Internet · Todos los derechos reservados</div>
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
