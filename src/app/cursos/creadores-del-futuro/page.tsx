'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, CheckCircle2, Clock, Laptop, Calendar, 
  Sparkles, ExternalLink, MessageCircle, ShieldCheck, 
  Layers, Code2, Rocket, ArrowRight, UserCheck, Users,
  Gamepad2, Film, Globe, Music, Cpu, Tv, Shield,
  Trophy, Sparkle, Heart, Smile, Sun, Award,
  HelpCircle, Copy, Check, CheckCheck
} from 'lucide-react'

interface WeekMission {
  id: number
  title: string
  subtitle: string
  icon: string
  tag: string
  dias: {
    dia: string
    nombre: string
    resultado: string
    pasos: string
  }[]
  finalProject: string
}

export default function CreadoresDelFuturoPage() {
  const waUrlGroup = 'https://wa.me/523335769348?text=Hola%2C%20me%20interesa%20inscribir%20a%20mi%20hijo(a)%20al%20curso%20de%20verano%20%22Creadores%20del%20Futuro%22.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%3F'
  const waUrlPersonal = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20conocer%20los%20paquetes%20por%20semana%20y%20el%20verano%20completo%20de%20%22Creadores%20del%20Futuro%22.'
  const waUrlBook = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20apartar%20lugar%20para%20el%20curso%20de%20verano%20%22Creadores%20del%20Futuro%22.'

  // Interactive 8-Week Explorer State
  const [selectedWeek, setSelectedWeek] = useState<number>(1)

  const weeks: WeekMission[] = [
    {
      id: 1,
      title: "Semana 1 · Mi Primera Película con IA",
      subtitle: "Narración + Imagen + Animación",
      icon: "Film",
      tag: "CINE & ANIMACIÓN",
      dias: [
        { dia: "Día 1", nombre: "Nace una historia", resultado: "Guion de 3 a 5 escenas", pasos: "Idea → Personaje principal → Conflicto → 3 actos → Guion gráfico" },
        { dia: "Día 2", nombre: "Damos rostro al personaje", resultado: "Ficha del personaje", pasos: "Descripción → Paleta de colores → Variaciones → Ficha aprobada" },
        { dia: "Día 3", nombre: "Construimos el mundo", resultado: "Fondos y locaciones", pasos: "Espacios → Iluminación → Objetos clave → Galería de fondos" },
        { dia: "Día 4", nombre: "Damos vida a las imágenes", resultado: "Escenas animadas", pasos: "Movimiento → Expresión → Efectos visuales → Clips aprobados" },
        { dia: "Día 5", nombre: "Gran Premiere", resultado: "Cortometraje terminado", pasos: "Voz → Música → Montaje → Título → Premiere con palomitas" },
      ],
      finalProject: "Cortometraje animado original con créditos, voces y música propia."
    },
    {
      id: 2,
      title: "Semana 2 · Creadores de Videojuegos",
      subtitle: "Lógica + Diseño + Jugabilidad",
      icon: "Gamepad2",
      tag: "VIDEOJUEGOS RETRO",
      dias: [
        { dia: "Día 1", nombre: "¿Qué hace divertido a un juego?", resultado: "Mecánica principal", pasos: "Explorar géneros → Movimiento → Salto → Reglas básicas" },
        { dia: "Día 2", nombre: "Héroes y enemigos", resultado: "Sprites del juego", pasos: "Pixel art → Héroe → Enemigo → Monedas → Animación idle/walk" },
        { dia: "Día 3", nombre: "Diseñamos el mundo", resultado: "Nivel 1 jugable", pasos: "Plataformas → Obstáculos → Coleccionables → Meta final" },
        { dia: "Día 4", nombre: "Poderes y sonidos", resultado: "Efectos sonoros y vidas", pasos: "Música chiptune → Sonido de salto → Contador de vidas → Game Over" },
        { dia: "Día 5", nombre: "Torneo Arcade", resultado: "Videojuego publicado", pasos: "Ajuste de dificultad → Menú de inicio → Publicación web → Torneo grupal" },
      ],
      finalProject: "Videojuego arcade funcional publicado en web para jugar en celular y computadora."
    },
    {
      id: 3,
      title: "Semana 3 · Mi Primera Página Web",
      subtitle: "Diseño Web + Identidad Digital",
      icon: "Globe",
      tag: "DISEÑO WEB",
      dias: [
        { dia: "Día 1", nombre: "Mi rincón en internet", resultado: "Tema de la web", pasos: "Elegir tema → Qué quiero mostrar → Secciones → Boceto en papel" },
        { dia: "Día 2", nombre: "Estructura y diseño", resultado: "Wireframe visual", pasos: "Encabezado → Botones → Galería → Paleta de colores" },
        { dia: "Día 3", nombre: "Contenido que atrapa", resultado: "Textos e imágenes", pasos: "Presentación → Fotos → Logotipo con IA → Redacción divertida" },
        { dia: "Día 4", nombre: "Interactividad", resultado: "Botones y enlaces", pasos: "Links → Modo oscuro → Efectos hover → Tarjetas interactivas" },
        { dia: "Día 5", nombre: "Lanzamiento mundial", resultado: "Sitio web en línea", pasos: "Publicación en internet → Código QR para papás → Muestra digital" },
      ],
      finalProject: "Sitio web interactivo publicado en internet con enlace propio y código QR."
    },
    {
      id: 4,
      title: "Semana 4 · Estrella de Música & Videoclip",
      subtitle: "Composición + Voz + Producción",
      icon: "Music",
      tag: "MÚSICA & VIDEOCLIP",
      dias: [
        { dia: "Día 1", nombre: "Nace una banda", resultado: "Nombre y concepto", pasos: "Género musical → Estilo → Nombre de la banda → Portada con IA" },
        { dia: "Día 2", nombre: "Escribimos la letra", resultado: "Letra completa", pasos: "Tema de la canción → Rimas → Verso → Coro pegajoso" },
        { dia: "Día 3", nombre: "Hacemos música", resultado: "Canción producida", pasos: "Ritmo → Beats → Instrumentos → Síntesis de voz → Master de audio" },
        { dia: "Día 4", nombre: "Grabamos el videoclip", resultado: "Grabación de tomas", pasos: "Shot list → Actuación frente a cámara → Planos → Luces" },
        { dia: "Día 5", nombre: "Estreno musical", resultado: "Videoclip terminado", pasos: "Sincronización → Edición con ritmo → Portada del sencillo → Estreno" },
      ],
      finalProject: "Canción grabada y videoclip musical editado con portada oficial de banda."
    },
    {
      id: 5,
      title: "Semana 5 · Inventores del Futuro",
      subtitle: "Creatividad + Prototipado + Pitch",
      icon: "Cpu",
      tag: "INVENTOS & ROBOTS",
      dias: [
        { dia: "Día 1", nombre: "Encontramos un problema", resultado: "Reto de innovación", pasos: "Observar el entorno → Problemas cotidianos → Elegir reto" },
        { dia: "Día 2", nombre: "Inventamos la solución", resultado: "Concepto del invento", pasos: "Brainstorming → Funciones del invento → Nombre → Boceto" },
        { dia: "Día 3", nombre: "Construimos el prototipo", resultado: "Modelo físico", pasos: "Cartón / LEGO / material reciclado → Ensamble → Pruebas de uso" },
        { dia: "Día 4", nombre: "Creamos la marca", resultado: "Campaña publicitaria", pasos: "Logotipo → Slogan → Póster comercial → Precio imaginario" },
        { dia: "Día 5", nombre: "Feria de Inventores", resultado: "Exposición & Pitch", pasos: "Demostración en vivo → Pitch de 1 minuto → Feria de inventos" },
      ],
      finalProject: "Prototipo físico construido + póster publicitario y presentación de pitch."
    },
    {
      id: 6,
      title: "Semana 6 · Mi Estudio de Televisión",
      subtitle: "Cámaras + Conducción + Grabación",
      icon: "Tv",
      tag: "ESTUDIO DE TV",
      dias: [
        { dia: "Día 1", nombre: "¿Cómo se hace la TV?", resultado: "Concepto del show", pasos: "Formatos → Secciones de noticias/juegos → Escaleta de tiempos" },
        { dia: "Día 2", nombre: "Presentadores y reporteros", resultado: "Cápsulas de conducción", pasos: "Voz → Teleprompter → Mirada a cámara → Práctica de conducción" },
        { dia: "Día 3", nombre: "Cámaras, luces y sonido", resultado: "Operación de estudio", pasos: "Planos → Micrófonos de solapa → Claqueta → Dirección técnica" },
        { dia: "Día 4", nombre: "Grabamos el programa", resultado: "Programa completo grabado", pasos: "Ensayo general → Grabación multicámara → Rotación de roles" },
        { dia: "Día 5", nombre: "Postproducción y estreno", resultado: "Programa transmitido", pasos: "Cortes de edición → Gráficos en pantalla → Proyección del show" },
      ],
      finalProject: "Programa de televisión grabado y editado con los niños como conductores y camarógrafos."
    },
    {
      id: 7,
      title: "Semana 7 · Superhéroes: Crea tu Universo",
      subtitle: "Personajes + Cómic + Trailer",
      icon: "Shield",
      tag: "CÓMIC & SUPERHÉROES",
      dias: [
        { dia: "Día 1", nombre: "Nace un héroe", resultado: "Ficha del superhéroe", pasos: "Poderes → Debilidad → Emblema en el pecho → Traje heroico" },
        { dia: "Día 2", nombre: "Nace el archienemigo", resultado: "Villano y conflicto", pasos: "Antagonista → Motivación → Poderes oscuros → Póster del duelo" },
        { dia: "Día 3", nombre: "Construimos el cómic", resultado: "Mini cómic ilustrado", pasos: "Viñetas → Diálogos → Globos de texto → Secuencia de acción" },
        { dia: "Día 4", nombre: "Del cómic al trailer", resultado: "Trailer cinematográfico", pasos: "Animación de viñetas → Efectos de poderes → Voces y rugidos" },
        { dia: "Día 5", nombre: "Universo expandido", resultado: "Paquete del héroe", pasos: "Cómic impreso → Trailer proyectado → Exposición de superhéroes" },
      ],
      finalProject: "Cómic impreso original de 4 páginas + trailer cinematográfico animado."
    },
    {
      id: 8,
      title: "Semana 8 · Gran Festival Creadores del Futuro",
      subtitle: "Integración + Portafolio + Gala",
      icon: "Trophy",
      tag: "FESTIVAL FINAL",
      dias: [
        { dia: "Día 1", nombre: "Elijo mi gran misión", resultado: "Brief del proyecto final", pasos: "Elegir disciplina favorita o combinarlas → Plan de trabajo" },
        { dia: "Día 2", nombre: "Preproducción & diseño", resultado: "Storyboard / Maqueta", pasos: "Guion → Diseño de piezas → Roles → Pruebas iniciales" },
        { dia: "Día 3", nombre: "Día de construcción", resultado: "Versión funcional", pasos: "Creación guiada → Pruebas de usuario → Resolución de dudas" },
        { dia: "Día 4", nombre: "Pulido y detalles", resultado: "Versión maestra", pasos: "Acabados visuales → Sonido → Montaje de stand de exhibición" },
        { dia: "Día 5", nombre: "Gala & Festival Final", resultado: "Presentación a familias", pasos: "Stands interactivos → Proyección de gala → Entrega de diplomas" },
      ],
      finalProject: "Gran proyecto maestro presentado en vivo a papás y familiares con diploma de honor."
    }
  ]

  const currentWeek = weeks[selectedWeek - 1]

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
              VERANO MODULAR · 9 A 17 AÑOS
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
            <Sun size={14} /> CURSO DE VERANO INFANTIL & JUVENIL (MODULAR DE 8 SEMANAS)
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-sans leading-none">
            Creadores del Futuro
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold font-sans text-zinc-800 max-w-3xl leading-snug">
            El programa donde los niños no solo consumen tecnología, sino que la usan para inventar videojuegos, películas con IA, páginas web, música y robots.
          </p>

          <p className="text-base sm:text-lg text-zinc-600 font-sans max-w-3xl leading-relaxed">
            Estructurado en <strong>8 semanas independientes y 100% modulares</strong>. Inscribe a tus hijos a semanas individuales, por paquetes de interés o al verano completo. ¡Cada día termina con un proyecto terminado que pueden mostrar a su familia!
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Users size={14} className="text-brand-pink" /> Edades
              </div>
              <div className="text-base font-extrabold text-black">9 a 17 Años</div>
              <div className="text-[11px] text-zinc-600">3 Grupos por nivel</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Calendar size={14} className="text-brand-pink" /> Duración
              </div>
              <div className="text-base font-extrabold text-black">1 a 8 Semanas</div>
              <div className="text-[11px] text-zinc-600">Inscripción flexible</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Sparkles size={14} className="text-brand-pink" /> Metodología
              </div>
              <div className="text-base font-extrabold text-black">1 Proyecto x Día</div>
              <div className="text-[11px] text-zinc-600">Crear vs solo mirar</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Award size={14} className="text-brand-pink" /> Entrega
              </div>
              <div className="text-base font-extrabold text-black">Portafolio Web</div>
              <div className="text-[11px] text-zinc-600">+ Gala de exhibición</div>
            </div>
          </div>
        </section>

        {/* 3 AGE TIERS */}
        <section className="bg-black text-white p-6 sm:p-8 border-2 border-black shadow-neo">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <div className="flex items-center justify-between">
                <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-xs">GRUPO 1</span>
                <span className="text-zinc-400 text-xs">9 a 11 años</span>
              </div>
              <h3 className="font-bold text-lg text-white uppercase">Descubrimiento & Lógica</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Prioriza creatividad, narración, dibujo digital, música, prompts guiados y primeros conceptos de programación y diseño.
              </p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <div className="flex items-center justify-between">
                <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-xs">GRUPO 2</span>
                <span className="text-zinc-400 text-xs">12 a 14 años</span>
              </div>
              <h3 className="font-bold text-lg text-white uppercase">Creación & Producción</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Equilibrio entre diseño y control técnico: prompts estructurados, diseño de niveles en videojuegos, edición de video y páginas web interactivas.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-xs">GRUPO 3</span>
                <span className="text-zinc-400 text-xs">15 a 17 años</span>
              </div>
              <h3 className="font-bold text-lg text-white uppercase">Autonomía & Proyectos Pro</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Mayor profundidad técnica: pipeline audiovisual completo, desarrollo web con código, mecánicas de juego avanzadas y proyectos para portafolio.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE 8-WEEK SUMMER EXPLORER */}
        <section id="summer-weeks" className="space-y-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// EXPLORADOR INTERACTIVO · 8 SEMANAS INDEPENDIENTES"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Descubre las 8 Misiones Semanales
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-1 max-w-2xl">
                Haz clic en cada semana para ver el plan de 5 días y el proyecto final que los niños completarán.
              </p>
            </div>

            <div className="font-mono text-xs text-zinc-500 bg-white p-2 border-2 border-black inline-block">
              ★ 100% Modular: Cursa 1, 2, 4 u 8 semanas
            </div>
          </div>

          {/* Week Selector Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 font-mono text-xs">
            {weeks.map(w => (
              <button
                key={w.id}
                onClick={() => setSelectedWeek(w.id)}
                className={`p-2.5 border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  selectedWeek === w.id
                    ? 'bg-brand-yellow text-black border-black shadow-[3px_3px_0px_#000] font-bold scale-[1.02]'
                    : 'bg-white text-zinc-700 border-black hover:bg-zinc-100 font-medium'
                }`}
              >
                <span className="text-[10px] text-zinc-500 uppercase">Semana {w.id}</span>
                <span className="text-xs font-extrabold line-clamp-1">{w.tag.split('&')[0]}</span>
              </button>
            ))}
          </div>

          {/* Week Detail Container */}
          <div className="border-4 border-black bg-zinc-950 p-5 sm:p-8 shadow-neo text-white">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-4 gap-2">
                <div>
                  <div className="font-mono text-xs text-brand-yellow font-bold uppercase tracking-wider flex items-center gap-2">
                    <Sparkle size={14} /> {currentWeek.tag} · {currentWeek.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-sans text-white mt-1">
                    {currentWeek.title}
                  </h3>
                </div>

                <div className="bg-zinc-900 border border-zinc-700 px-3 py-1.5 font-mono text-xs text-emerald-400">
                  Entregable: <strong>{currentWeek.finalProject}</strong>
                </div>
              </div>

              {/* 5-Day Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
                {currentWeek.dias.map(d => (
                  <div key={d.dia} className="bg-zinc-900 border-2 border-zinc-700 p-3.5 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="bg-brand-yellow text-black font-bold px-1.5 py-0.5 text-[10px]">
                          {d.dia}
                        </span>
                      </div>
                      <div className="font-bold text-white text-xs pt-1">{d.nombre}</div>
                      <div className="text-[11px] text-emerald-400 font-bold">✓ {d.resultado}</div>
                    </div>
                    <div className="text-[10px] text-zinc-400 border-t border-zinc-800 pt-2 leading-relaxed">
                      {d.pasos}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* DAILY SCHEDULE STRUCTURE */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// ESTRUCTURA DE CADA JORNADA"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              ¿Cómo es un día en el curso?
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Diseñado para mantener el entusiasmo, equilibrar pantalla con dinámicas físicas y asegurar que cada niño termine su misión.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 font-mono text-xs">
            <div className="bg-white border-2 border-black p-4 shadow-neo space-y-1.5">
              <span className="text-[10px] bg-black text-white px-1.5 py-0.5 font-bold">00:00 - 00:30</span>
              <h4 className="font-bold text-black text-sm">Descubrimiento</h4>
              <p className="text-zinc-600 font-sans text-xs">Demostración en vivo, reto del día y lluvia de ideas.</p>
            </div>

            <div className="bg-white border-2 border-black p-4 shadow-neo space-y-1.5">
              <span className="text-[10px] bg-black text-white px-1.5 py-0.5 font-bold">00:30 - 01:15</span>
              <h4 className="font-bold text-black text-sm">Microhabilidad</h4>
              <p className="text-zinc-600 font-sans text-xs">Aprender únicamente las herramientas para el reto de hoy.</p>
            </div>

            <div className="bg-zinc-100 border-2 border-dashed border-black p-4 space-y-1.5">
              <span className="text-[10px] bg-zinc-700 text-white px-1.5 py-0.5 font-bold">01:15 - 01:30</span>
              <h4 className="font-bold text-black text-sm">Snack & Pausa</h4>
              <p className="text-zinc-600 font-sans text-xs">Refrigerio y descanso fuera de pantalla.</p>
            </div>

            <div className="bg-white border-2 border-black p-4 shadow-neo space-y-1.5">
              <span className="text-[10px] bg-brand-pink text-white px-1.5 py-0.5 font-bold">01:30 - 02:30</span>
              <h4 className="font-bold text-black text-sm">Misión Principal</h4>
              <p className="text-zinc-600 font-sans text-xs">Construcción individual o en equipo de su proyecto.</p>
            </div>

            <div className="bg-white border-2 border-black p-4 shadow-neo space-y-1.5">
              <span className="text-[10px] bg-black text-white px-1.5 py-0.5 font-bold">02:45 - 03:30</span>
              <h4 className="font-bold text-black text-sm">Pulido & Pruebas</h4>
              <p className="text-zinc-600 font-sans text-xs">Correcciones, personalización y detalles de calidad.</p>
            </div>

            <div className="bg-brand-yellow border-2 border-black p-4 shadow-neo space-y-1.5">
              <span className="text-[10px] bg-black text-white px-1.5 py-0.5 font-bold">03:30 - 04:00</span>
              <h4 className="font-bold text-black text-sm">Show & Tell</h4>
              <p className="text-black font-sans text-xs">Presentación de resultados y celebración del día.</p>
            </div>
          </div>
        </section>

        {/* ENROLLMENT OPTIONS & PRICING */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// PLANES DE INSCRIPCIÓN FLEXIBLES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Elige cómo inscribir a tus hijos
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Flexibilidad total: arma tu verano seleccionando las semanas que coincidan con sus gustos o con las vacaciones familiares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {/* 1 Week */}
            <div className="border-4 border-black bg-white p-6 shadow-neo space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-yellow px-2 py-0.5 border border-black font-bold uppercase text-[10px]">
                    SEMANA INDIVIDUAL
                  </span>
                  <span className="text-zinc-500 font-bold">1 Semana</span>
                </div>
                <h3 className="text-xl font-extrabold uppercase font-sans text-black">
                  Misión Específica
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Inscribe a tu hijo únicamente a la temática que más le apasione (por ejemplo: solo Videojuegos o solo Cine con IA).
                </p>
                <div className="border-t border-zinc-200 pt-3 space-y-1.5 text-zinc-700 text-[11px]">
                  <div>✓ 5 Jornadas de creación práctica</div>
                  <div>✓ 5 Proyectos terminados</div>
                  <div>✓ Acceso a todos los materiales</div>
                </div>
              </div>

              <div>
                <a 
                  href={waUrlGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-black text-white font-bold border-2 border-black hover:bg-brand-yellow hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={14} /> COTIZAR 1 SEMANA
                </a>
              </div>
            </div>

            {/* 4 Weeks Package */}
            <div className="border-4 border-black bg-white p-6 shadow-neo space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-pink text-white px-2 py-0.5 border border-black font-bold uppercase text-[10px]">
                    POPULAR · 4 SEMANAS
                  </span>
                  <span className="text-zinc-500 font-bold">Paquete Medio</span>
                </div>
                <h3 className="text-xl font-extrabold uppercase font-sans text-black">
                  Paquete 4 Semanas
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Elige las 4 semanas que prefieras (consecutivas o salteadas) con descuento preferencial por paquete.
                </p>
                <div className="border-t border-zinc-200 pt-3 space-y-1.5 text-zinc-700 text-[11px]">
                  <div>✓ 20 Proyectos terminados</div>
                  <div>✓ Portafolio web personalizado</div>
                  <div>✓ Descuento especial sobre precio semanal</div>
                </div>
              </div>

              <div>
                <a 
                  href={waUrlPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-black text-white font-bold border-2 border-black hover:bg-brand-pink hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={14} /> COTIZAR 4 SEMANAS
                </a>
              </div>
            </div>

            {/* Full 8 Weeks Summer */}
            <div className="border-4 border-black bg-zinc-950 text-white p-6 shadow-neo space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-yellow text-black px-2 py-0.5 font-bold uppercase text-[10px]">
                    COMPLETO · 8 SEMANAS
                  </span>
                  <span className="text-zinc-400 font-bold">Verano Total</span>
                </div>
                <h3 className="text-xl font-extrabold uppercase font-sans text-white">
                  Verano Creadores Total
                </h3>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  La experiencia formativa completa: 40 proyectos terminados, gala final con familias y diploma de honor.
                </p>
                <div className="border-t border-zinc-800 pt-3 space-y-1.5 text-zinc-300 text-[11px]">
                  <div>✓ 8 Semanas temáticas completas</div>
                  <div>✓ Participación estelar en la Gala Final</div>
                  <div>✓ Mayor ahorro y materiales incluidos</div>
                </div>
              </div>

              <div>
                <a 
                  href={waUrlBook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-brand-yellow text-black font-bold border-2 border-white hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={14} /> APARTAR VERANO COMPLETO
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// RESOLUCIÓN DE DUDAS PARA PAPÁS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Se necesita experiencia previa en computación?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Ninguna. Los grupos están divididos por edades (9-11, 12-14 y 15-17 años) y las actividades inician desde los conceptos más sencillos y lúdicos con acompañamiento continuo.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Qué pasa si mi hijo solo puede asistir 2 o 3 semanas?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                El programa está diseñado de forma 100% modular. Cada semana es independiente, por lo que puede incorporarse en cualquier momento sin perder el hilo de aprendizaje.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Los papás podemos ver los proyectos creados?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                ¡Sí! Cada viernes se realiza la muestra de proyectos del día y cada alumno cuenta con un enlace web para que sus papás puedan jugar sus videojuegos, ver sus videos y visitar su página web.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Se pasan todo el día frente a la pantalla?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. La jornada incluye dinámicas físicas fuera de pantalla, construcción manual con cartón/LEGO, pausas activas y ejercicios de actuación y locución en vivo.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL BANNER CTA */}
        <section className="bg-black text-white p-8 sm:p-12 border-2 border-black shadow-neo text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-yellow font-bold">
              {"// INSCRIPCIONES ABIERTAS · CUPO LIMITADO POR EDADES"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-sans">
              ¡Despierta el talento creador de tus hijos!
            </h2>
            <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
              Un verano inolvidable donde aprenderán a construir el futuro jugando, inventando y programando.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={waUrlGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25d366] text-black font-mono font-bold text-base border-2 border-white hover:bg-brand-yellow hover:text-black transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_#fff]"
            >
              <MessageCircle size={20} /> CONSULTAR FECHAS & SEDES POR WHATSAPP
            </a>
          </div>

          <div className="font-mono text-xs text-zinc-400 pt-4 border-t border-zinc-800">
            Atención personalizada a familias al WhatsApp: <span className="text-brand-yellow font-bold">333 576 9348</span>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t-2 border-black bg-white py-6 px-6 text-center font-mono text-xs text-zinc-500">
        <div>© {new Date().getFullYear()} Rubén Oroz · Creadores del Futuro · Todos los derechos reservados</div>
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
