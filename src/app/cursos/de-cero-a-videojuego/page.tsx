'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, CheckCircle2, Clock, Laptop, Calendar, 
  Sparkles, ExternalLink, MessageCircle, ShieldCheck, 
  Layers, Code2, Rocket, ArrowRight, UserCheck, Users,
  Gamepad2, Volume2, Maximize2, Minimize2, RotateCcw, Monitor,
  Compass, HelpCircle, Terminal, Flame, Music, X, Smartphone
} from 'lucide-react'

export default function DeCeroAVideojuegoPage() {
  const [gameKey, setGameKey] = useState(0)
  const [isGameActive, setIsGameActive] = useState(false)
  const [isFullscreenMode, setIsFullscreenMode] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const fullscreenIframeRef = useRef<HTMLIFrameElement>(null)

  const waUrlGroup = 'https://wa.me/523335769348?text=Hola%2C%20me%20interesa%20el%20taller%20%22De%20Cero%20a%20Videojuego%22.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%3F'
  const waUrlPersonal = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso%20personal%20o%20asesor%C3%ADa%201%20a%201%20de%20%22De%20Cero%20a%20Videojuego%22.'
  const waUrlBook = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20taller%20%22De%20Cero%20a%20Videojuego%22.'

  const handleStartGame = (openFullscreen = false) => {
    setIsGameActive(true)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    if (openFullscreen || isMobile) {
      setIsFullscreenMode(true)
      try {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {})
        }
      } catch (err) {}
    }
  }

  const handleRestartGame = () => {
    setIsGameActive(true)
    setGameKey(prev => prev + 1)
  }

  const handleToggleFullscreen = () => {
    setIsGameActive(true)
    setIsFullscreenMode(prev => {
      const nextState = !prev
      if (nextState) {
        try {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {})
          }
        } catch (err) {}
      } else {
        try {
          if (document.fullscreenElement && document.exitFullscreen) {
            document.exitFullscreen().catch(() => {})
          }
        } catch (err) {}
      }
      return nextState
    })
  }

  const handleExitFullscreen = () => {
    setIsFullscreenMode(false)
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {})
      }
    } catch (err) {}
  }

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
            <span className="font-mono text-xs uppercase font-bold text-white bg-black border-2 border-black px-3 py-1 shadow-neo inline-flex items-center gap-1.5">
              <Gamepad2 size={12} className="text-brand-yellow" /> GAME DEV CON IA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-none font-sans">
                DE CERO A <br />
                <span className="text-brand-pink underline decoration-brand-yellow decoration-8 underline-offset-4">
                  VIDEOJUEGO
                </span>
              </h1>
              
              <p className="font-mono text-lg sm:text-xl text-zinc-800 leading-relaxed font-semibold">
                Diseña, programa, sonoriza y publica tu propio videojuego de plataformas con IA en 4 horas.
              </p>
              
              <p className="text-zinc-600 font-sans text-base leading-relaxed">
                Sin experiencia previa en código. Aprenderás el flujo completo: desde conceptualizar un personaje con arte pixel art 16-bit procedural, construir físicas, música chiptune y jefes, hasta desplegarlo en una URL pública compartible.
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
                  href="#arcade-demo"
                  className="px-6 py-3.5 bg-brand-yellow text-black font-mono font-bold border-2 border-black hover:bg-black hover:text-white hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <Gamepad2 size={18} /> PROBAR JUEGO DEMO EN VIVO ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-2 border-black bg-white p-2 shadow-neo">
                <div className="border border-black overflow-hidden aspect-video bg-zinc-100 relative">
                  <img 
                    src="/images/de_cero_a_videojuego.png" 
                    alt="Taller De Cero a Videojuego" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase text-center mt-1.5 font-bold">
                  TALLER INTENSIVO // GAME DESIGN + PIXEL ART + IA
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
                Un videojuego real, jugable y publicado en solo 4 horas.
              </div>
              <div className="text-zinc-600 font-sans text-sm">
                No es un taller teórico. Sales con un juego completo que puedes abrir en tu celular o computadora, compartir con amigos y seguir expandiendo.
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
                <Gamepad2 size={20} />
              </div>
              <h3 className="font-mono text-base font-bold uppercase text-black">Sin experiencia previa</h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                No necesitas saber programar en JavaScript ni ser ilustrador digital. Aprenderás a orquestar y dirigir la IA.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3">
              <div className="w-10 h-10 border-2 border-black bg-brand-pink text-white flex items-center justify-center font-bold shadow-[2px_2px_0px_#000]">
                <Sparkles size={20} />
              </div>
              <h3 className="font-mono text-base font-bold uppercase text-black">Dirección creativa con IA</h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                La IA escribe el código técnico mientras tú defines el game design, la dificultad, el arte y la ambientación sonora.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-3">
              <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center text-black font-bold shadow-[2px_2px_0px_#000]">
                <Rocket size={20} />
              </div>
              <h3 className="font-mono text-base font-bold uppercase text-black">URL pública y jugable</h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                Publicamos tu juego en GitHub Pages para que cualquier persona del mundo pueda jugarlo instantáneamente.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE ARCADE SECTION: EL VIAJE DE COQUIMBO */}
        <section id="arcade-demo" className="space-y-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// SALA DE JUEGOS · PROYECTO DE REFERENCIA"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Juega la demo: El Viaje de Coquimbo
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-1 max-w-2xl">
                Este videojuego fue creado con la arquitectura y metodología práctica que aprenderás durante el taller.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={handleRestartGame}
                className="px-3 py-1.5 bg-white border-2 border-black hover:bg-brand-yellow font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                title="Reiniciar Demo"
              >
                <RotateCcw size={14} /> REINICIAR
              </button>
              <button
                onClick={handleToggleFullscreen}
                className="px-3 py-1.5 bg-brand-yellow text-black border-2 border-black hover:bg-black hover:text-white font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                title="Pantalla Completa"
              >
                {isFullscreenMode ? <Minimize2 size={14} /> : <Maximize2 size={14} />} 
                {isFullscreenMode ? 'SALIR FULLSCREEN' : 'PANTALLA COMPLETA'}
              </button>
              <a
                href="/games/el-viaje-de-coquimbo.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-black text-white border-2 border-black hover:bg-brand-pink font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                title="Abrir en pestaña completa"
              >
                <ExternalLink size={14} /> ABRIR JUEGO
              </a>
            </div>
          </div>

          {/* Arcade Cabinet Frame */}
          <div className="border-4 border-black bg-black p-2 md:p-4 shadow-neo relative">
            {/* Header Marquee */}
            <div className="bg-zinc-900 border-2 border-zinc-700 px-4 py-2 flex items-center justify-between font-mono text-xs mb-3 text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                <span className="font-bold text-brand-yellow">ARCADE CABIN // LIVE DEMO</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[11px]">
                <span>AUDIO: CHIPTUNE RETRO</span>
                <span>FÍSICA: PLATAFORMAS 2D</span>
                <span className="text-[#25d366] font-bold">ESTADO: ONLINE</span>
              </div>
            </div>

            {/* Iframe Viewport / Start Screen */}
            <div className="border-2 border-black bg-black overflow-hidden relative aspect-[16/9] w-full">
              {isGameActive ? (
                <iframe
                  key={gameKey}
                  ref={iframeRef}
                  src="/games/el-viaje-de-coquimbo.html"
                  className="w-full h-full border-0 block"
                  allow="fullscreen; autoplay"
                  title="El Viaje de Coquimbo - Demo de Videojuego"
                />
              ) : (
                <div className="w-full h-full relative flex flex-col items-center justify-center p-6 text-center select-none bg-zinc-950">
                  {/* Background game preview image dimmed */}
                  <img
                    src="/images/de_cero_a_videojuego.png"
                    alt="Arcade Preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-[1px]"
                  />
                  
                  {/* CRT Scanline overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />

                  {/* Centered start content */}
                  <div className="relative z-10 space-y-4 max-w-md">
                    <span className="font-mono text-[11px] uppercase font-bold text-black bg-brand-yellow border-2 border-black px-3 py-1 shadow-[2px_2px_0px_#000] inline-flex items-center gap-1.5 animate-pulse">
                      <Gamepad2 size={14} /> DEMO INTERACTIVA
                    </span>
                    
                    <h3 className="font-mono text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight drop-shadow-md">
                      El Viaje de Coquimbo
                    </h3>
                    
                    <p className="text-zinc-300 font-mono text-xs max-w-sm mx-auto">
                      Presiona el botón para cargar el arcade y activar el audio retro. En dispositivos móviles se abrirá en pantalla completa para jugar cómodamente.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        onClick={() => handleStartGame(true)}
                        className="w-full sm:w-auto px-6 py-3.5 bg-brand-yellow text-black font-mono font-bold text-sm sm:text-base border-2 border-white hover:bg-[#25d366] hover:text-black transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_#fff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
                      >
                        <Maximize2 size={18} /> ▶ JUGAR EN FULLSCREEN
                      </button>
                      <button
                        onClick={() => handleStartGame(false)}
                        className="hidden sm:inline-flex w-full sm:w-auto px-5 py-3.5 bg-zinc-900 text-white font-mono font-bold text-sm border-2 border-zinc-500 hover:bg-white hover:text-black transition-all items-center justify-center gap-2 cursor-pointer"
                      >
                        <Volume2 size={16} /> Jugar aquí
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FULLSCREEN OVERLAY MODAL FOR MOBILES & DESKTOPS */}
            {isFullscreenMode && isGameActive && (
              <div className="fixed inset-0 z-[99999] bg-black flex flex-col w-screen h-screen overflow-hidden">
                {/* Fullscreen Top Control Bar */}
                <div className="bg-zinc-950 border-b border-zinc-800 px-4 py-2 flex items-center justify-between font-mono text-xs text-white shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-brand-yellow flex items-center gap-1.5">
                      <Gamepad2 size={16} /> EL VIAJE DE COQUIMBO
                    </span>
                    <span className="hidden md:inline-block text-[11px] text-zinc-400">
                      (Modo Pantalla Completa)
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-zinc-400 text-[11px]">
                    <Smartphone size={14} className="text-brand-yellow" />
                    <span>Gira tu teléfono en horizontal para mayor comodidad</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleRestartGame}
                      className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 text-white text-[11px] border border-zinc-600 font-bold flex items-center gap-1 transition-all cursor-pointer"
                      title="Reiniciar Nivel"
                    >
                      <RotateCcw size={12} /> REINICIAR
                    </button>
                    <button
                      onClick={handleExitFullscreen}
                      className="px-3 py-1 bg-brand-pink text-white hover:bg-white hover:text-black text-xs font-bold border border-white flex items-center gap-1.5 shadow-[2px_2px_0px_#fff] transition-all cursor-pointer"
                      title="Salir de Pantalla Completa"
                    >
                      <X size={14} /> SALIR
                    </button>
                  </div>
                </div>

                {/* Fullscreen Iframe Viewport */}
                <div className="flex-1 w-full h-full bg-black relative overflow-hidden">
                  <iframe
                    key={`fullscreen-${gameKey}`}
                    ref={fullscreenIframeRef}
                    src="/games/el-viaje-de-coquimbo.html"
                    className="w-full h-full border-0 block"
                    allow="fullscreen; autoplay"
                    title="El Viaje de Coquimbo - Pantalla Completa"
                  />
                </div>
              </div>
            )}

            {/* Instructions / Controls Panel */}
            <div className="mt-3 bg-zinc-900 border-2 border-zinc-700 p-3 sm:p-4 font-mono text-xs text-zinc-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="border border-zinc-800 bg-zinc-950 p-2.5">
                  <div className="text-brand-yellow font-bold mb-1">🎮 MOVIMIENTO</div>
                  <div className="text-zinc-400">Flechas / [W][A][S][D]</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">Correr, saltar y agacharse</div>
                </div>

                <div className="border border-zinc-800 bg-zinc-950 p-2.5">
                  <div className="text-brand-yellow font-bold mb-1">⚡ SALTO & ACCIÓN</div>
                  <div className="text-zinc-400">[ESPACIO] Saltar · [X] Atacar</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">Disparar fuego con power-up</div>
                </div>

                <div className="border border-zinc-800 bg-zinc-950 p-2.5">
                  <div className="text-brand-yellow font-bold mb-1">🗺️ NIVELES & MÚSICA</div>
                  <div className="text-zinc-400">[L] Niveles · [M] Música</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">Selector de niveles directo</div>
                </div>

                <div className="border border-zinc-800 bg-zinc-950 p-2.5">
                  <div className="text-brand-yellow font-bold mb-1">📱 MÓVIL / TÁCTIL</div>
                  <div className="text-zinc-400">Controles táctiles en pantalla</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">Joystick y botones virtuales</div>
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
              Diseñado para cualquier persona que quiera experimentar la emoción de crear software lúdico real sin enredarse en años de teoría.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                01. CURIOSOS
              </span>
              <h4 className="font-bold text-black text-sm uppercase">Sin experiencia previa</h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Personas que siempre quisieron crear su propio videojuego pero no sabían por dónde empezar.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                02. EARLY ADOPTERS
              </span>
              <h4 className="font-bold text-black text-sm uppercase">Principiantes con IA</h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Quienes quieren aprender a dirigir y auditar asistentes de código para construir productos funcionales.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                03. COMUNIDAD
              </span>
              <h4 className="font-bold text-black text-sm uppercase">Docentes, Makers & Familias</h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Educadores y entusiastas que buscan un proyecto creativo, interactivo y motivador para enseñar o disfrutar.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                04. CREATIVOS
              </span>
              <h4 className="font-bold text-black text-sm uppercase">Diseñadores & Artistas</h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Artistas que desean darle vida, movimiento, sonido y jugabilidad a sus conceptos visuales y personajes.
              </p>
            </div>
          </div>
        </section>

        {/* THEMATIC ROUTES (RUTAS DE AMBIENTACIÓN) */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// DIRECCIÓN DE ARTE & AMBIENTACIÓN"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Elige la temática de tu videojuego
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Durante el taller podrás optar por una de nuestras rutas temáticas preconfiguradas o diseñar tu universo personalizado:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="text-2xl">🌲</div>
              <h3 className="font-mono text-base font-bold uppercase text-black">Bosque Encantado</h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                Árboles centenarios, hongos bioluminiscentes, cascadas cristalinas y un imponente Guardián de Raíces como jefe final.
              </p>
              <div className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-200">
                Paleta: Verdes musgo, tonos tierra y reflejos dorados.
              </div>
            </div>

            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="text-2xl">🚀</div>
              <h3 className="font-mono text-base font-bold uppercase text-black">Estación Espacial</h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                Pasillos metálicos futuristas, luces neón, drones centinela flotantes y un Núcleo de Inteligencia Artificial descontrolado.
              </p>
              <div className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-200">
                Paleta: Azules cibernéticos, morados neón y gris titanio.
              </div>
            </div>

            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="text-2xl">🌋</div>
              <h3 className="font-mono text-base font-bold uppercase text-black">Mazmorra de Cuevas</h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                Piedra volcánica, ríos de lava ardiente, estalactitas de cristal brillante y un feroz Dragón de Piedra protegiendo el tesoro.
              </p>
              <div className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-200">
                Paleta: Magma naranja, sombras carbón y púrpuras minerales.
              </div>
            </div>
          </div>
        </section>

        {/* 4-STEP METHODOLOGY */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// METODOLOGÍA ÁGIL EN 4 PASOS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              De la idea al juego publicado
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              El flujo de desarrollo guiado para construir software interactivo sin frustraciones:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-3">
              <div className="w-8 h-8 bg-brand-yellow border-2 border-black font-bold flex items-center justify-center text-black text-sm">
                01
              </div>
              <h4 className="font-bold text-black text-sm uppercase">Idea → Diseño</h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Definirás tema, mecánicas, personaje principal, enemigos, jefe, paleta cromática y atmósfera musical asistido por IA.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-3">
              <div className="w-8 h-8 bg-brand-pink text-white border-2 border-black font-bold flex items-center justify-center text-sm">
                02
              </div>
              <h4 className="font-bold text-black text-sm uppercase">Diseño → Motor</h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Construirás el canvas HTML5, game loop a 60fps con delta time, gravedad precisa, salto, colisiones por tiles y cámara dinámica.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-3">
              <div className="w-8 h-8 bg-brand-yellow border-2 border-black font-bold flex items-center justify-center text-black text-sm">
                03
              </div>
              <h4 className="font-bold text-black text-sm uppercase">Motor → Juego</h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Integrarás pixel art procedural de 16-bit dibujado por código, enemigos con IA básica, coleccionables, audio chiptune y controles táctiles.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-3">
              <div className="w-8 h-8 bg-black text-white border-2 border-black font-bold flex items-center justify-center text-sm">
                04
              </div>
              <h4 className="font-bold text-black text-sm uppercase">Juego → Internet</h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Ejecutarás pruebas automatizadas para garantizar cero errores, desplegarás en GitHub Pages y obtendrás tu URL pública lista para compartir.
              </p>
            </div>
          </div>
        </section>

        {/* DETAILED SYLLABUS BY MODULES */}
        <section id="temario" className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// TEMARIO OFICIAL DETALLADO"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Contenido módulo por módulo
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
              Estructura curricular de 4 horas intensivas divididas en 6 módulos secuenciales:
            </p>
          </div>

          <div className="border-2 border-black shadow-neo divide-y-2 divide-black bg-white font-mono text-sm">
            {/* Header row */}
            <div className="grid grid-cols-12 bg-black text-brand-yellow font-bold p-4 text-xs tracking-wider">
              <div className="col-span-4 sm:col-span-3">MÓDULO & TIEMPO</div>
              <div className="col-span-8 sm:col-span-9">ACTIVIDADES Y ENTREGABLE CLAVE</div>
            </div>

            {/* Modulo 1 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="col-span-4 sm:col-span-3 space-y-1">
                <span className="text-xs uppercase font-bold text-brand-pink block">MÓDULO 1</span>
                <span className="text-xs font-bold text-zinc-500 block">0:00 – 0:30 (30 min)</span>
              </div>
              <div className="col-span-8 sm:col-span-9 space-y-2">
                <h4 className="font-bold text-black uppercase text-base">Concepto y diseño con IA</h4>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Definición del universo narrativo, ambientación, atributos del personaje principal, paleta de color 16-bit, enemigos, items especiales (power-ups), jefe final y estilo musical.
                </p>
                <div className="bg-zinc-100 border border-zinc-300 p-2 text-xs text-zinc-800 font-semibold">
                  📌 Al terminar tendrás: Documento de diseño (Game Design Document) de una página completamente estructurado.
                </div>
              </div>
            </div>

            {/* Modulo 2 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="col-span-4 sm:col-span-3 space-y-1">
                <span className="text-xs uppercase font-bold text-brand-pink block">MÓDULO 2</span>
                <span className="text-xs font-bold text-zinc-500 block">0:30 – 1:35 (65 min)</span>
              </div>
              <div className="col-span-8 sm:col-span-9 space-y-2">
                <h4 className="font-bold text-black uppercase text-base">Motor base y físicas de juego</h4>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Construcción del motor del videojuego con sistema de gravedad, inercia, salto fluido, colisiones por plataformas y seguimiento suave de cámara.
                </p>
                <div className="bg-zinc-100 border border-zinc-300 p-2 text-xs text-zinc-800 font-semibold">
                  📌 Al terminar tendrás: Personaje dinámico que corre, salta, colisiona con plataformas y explora el mapa.
                </div>
              </div>
            </div>

            {/* Modulo 3 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="col-span-4 sm:col-span-3 space-y-1">
                <span className="text-xs uppercase font-bold text-brand-pink block">MÓDULO 3</span>
                <span className="text-xs font-bold text-zinc-500 block">1:35 – 2:25 (50 min)</span>
              </div>
              <div className="col-span-8 sm:col-span-9 space-y-2">
                <h4 className="font-bold text-black uppercase text-base">Contenido, pixel art y jefe</h4>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Construcción del nivel, patrullas de enemigos, checkpoints interactivos y batalla con el jefe. Todo el arte se dibuja directamente por código en estilo pixel art 16-bit.
                </p>
                <div className="bg-zinc-100 border border-zinc-300 p-2 text-xs text-zinc-800 font-semibold">
                  📌 Al terminar tendrás: Nivel completo y jugable con identidad visual retro 16-bit y batalla contra el jefe.
                </div>
              </div>
            </div>

            {/* Modulo 4 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="col-span-4 sm:col-span-3 space-y-1">
                <span className="text-xs uppercase font-bold text-brand-pink block">MÓDULO 4</span>
                <span className="text-xs font-bold text-zinc-500 block">2:25 – 2:55 (30 min)</span>
              </div>
              <div className="col-span-8 sm:col-span-9 space-y-2">
                <h4 className="font-bold text-black uppercase text-base">Diseño sonoro y controles multi-dispositivo</h4>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Generación de efectos de sonido (salto, moneda, daño, explosión), música retro chiptune por código y controles adaptados para teclado y pantallas táctiles móviles.
                </p>
                <div className="bg-zinc-100 border border-zinc-300 p-2 text-xs text-zinc-800 font-semibold">
                  📌 Al terminar tendrás: Música de fondo retro, cuatro efectos de sonido y controles funcionales.
                </div>
              </div>
            </div>

            {/* Modulo 5 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start hover:bg-zinc-50 transition-colors">
              <div className="col-span-4 sm:col-span-3 space-y-1">
                <span className="text-xs uppercase font-bold text-brand-pink block">MÓDULO 5</span>
                <span className="text-xs font-bold text-zinc-500 block">2:55 – 3:35 (40 min)</span>
              </div>
              <div className="col-span-8 sm:col-span-9 space-y-2">
                <h4 className="font-bold text-black uppercase text-base">Testing automatizado y corrección</h4>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Generación de pruebas automáticas para validar estructura, físicas de plataformas, captura de inputs y estabilidad general.
                </p>
                <div className="bg-zinc-100 border border-zinc-300 p-2 text-xs text-zinc-800 font-semibold">
                  📌 Al terminar tendrás: Batería de pruebas automatizadas con reporte de FAIL = 0 y estabilidad garantizada.
                </div>
              </div>
            </div>

            {/* Modulo 6 */}
            <div className="grid grid-cols-12 p-5 sm:p-6 gap-4 items-start bg-brand-yellow/10 hover:bg-brand-yellow/20 transition-colors">
              <div className="col-span-4 sm:col-span-3 space-y-1">
                <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                  MÓDULO 6 // FINAL
                </span>
                <span className="text-xs font-bold text-zinc-700 block">3:35 – 4:00 (25 min)</span>
              </div>
              <div className="col-span-8 sm:col-span-9 space-y-2">
                <h4 className="font-bold text-black uppercase text-base">Publicación en GitHub Pages y cierre</h4>
                <p className="text-zinc-700 font-sans text-sm leading-relaxed">
                  Despliegue gratuito en GitHub Pages, verificación de compatibilidad en diferentes dispositivos, ajuste de dificultad y entrega de checklist para seguir expandiendo el juego.
                </p>
                <div className="bg-white border-2 border-black p-2.5 text-xs text-black font-bold shadow-[2px_2px_0px_#000]">
                  🚀 Al terminar tendrás: Tu enlace web público (URL en vivo) para compartir con amigos, familiares o en tu portafolio.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES SECTION */}
        <section id="entregables" className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// RESULTADOS TANGIBLES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              ¿Qué te llevas al terminar?
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2">
              Sales del taller con activos tangibles y el conocimiento práctico para repetirlo tantas veces como quieras:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
            <div className="border-2 border-black p-5 bg-white shadow-neo flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#25d366] shrink-0" />
              <span className="font-bold text-black">Un videojuego real, jugable y publicado en línea</span>
            </div>
            <div className="border-2 border-black p-5 bg-white shadow-neo flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#25d366] shrink-0" />
              <span className="font-bold text-black">Personaje y estilo visual pixel art 16-bit por código</span>
            </div>
            <div className="border-2 border-black p-5 bg-white shadow-neo flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#25d366] shrink-0" />
              <span className="font-bold text-black">Efectos de sonido y música retro integrados</span>
            </div>
            <div className="border-2 border-black p-5 bg-white shadow-neo flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#25d366] shrink-0" />
              <span className="font-bold text-black">El flujo metodológico completo para repetir el proceso</span>
            </div>
            <div className="border-2 border-black p-5 bg-brand-yellow text-black shadow-neo sm:col-span-2 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-black shrink-0" />
              <span className="font-bold">Plantillas de prompts, checklist técnico de calidad y recursos para crear nuevos títulos</span>
            </div>
          </div>
        </section>

        {/* PARTICIPATION REQUIREMENTS */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div>
            <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
              {"// CHECKLIST PREVIO"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
              Requisitos para participar
            </h2>
            <p className="text-zinc-600 font-sans text-base mt-2">
              Todo lo necesario para aprovechar la sesión al máximo:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="border-2 border-black p-6 bg-white shadow-neo space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase">
                <Laptop size={16} className="text-brand-pink" /> COMPUTADORA & NAVEGADOR
              </div>
              <div className="text-sm font-bold text-black uppercase">
                Laptop con Chrome actualizado
              </div>
              <p className="text-zinc-600 font-sans text-xs">
                Windows, Mac o Linux. Navegador web moderno (preferentemente Google Chrome).
              </p>
            </div>

            <div className="border-2 border-black p-6 bg-white shadow-neo space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase">
                <Terminal size={16} className="text-brand-pink" /> HERRAMIENTAS GRATUITAS
              </div>
              <div className="text-sm font-bold text-black uppercase">
                VS Code + Node.js 18+
              </div>
              <p className="text-zinc-600 font-sans text-xs">
                Visual Studio Code para edición y Node.js para ejecutar las pruebas automáticas.
              </p>
            </div>

            <div className="border-2 border-black p-6 bg-white shadow-neo space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase">
                <Sparkles size={16} className="text-brand-pink" /> ASISTENTE IA & GITHUB
              </div>
              <div className="text-sm font-bold text-black uppercase">
                Agente IA + Cuenta GitHub
              </div>
              <p className="text-zinc-600 font-sans text-xs">
                Acceso a tu asistente de código preferido y cuenta gratuita de GitHub para publicar.
              </p>
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
                    <span className="text-brand-pink font-bold">▪</span> 4 horas continuas de desarrollo y ritmo guiado.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-pink font-bold">▪</span> Dinámicas de retroalimentación y juego en vivo.
                  </li>
                </ul>

                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Escríbenos por WhatsApp y te avisaremos en cuanto se abra la próxima fecha de grupo.
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
                    <span className="text-brand-pink font-bold">▪</span> 4 horas adaptadas a la idea exacta de tu juego.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-pink font-bold">▪</span> Fechas y horarios flexibles según tu disponibilidad.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-pink font-bold">▪</span> Resolución de dudas específicas y mecánicas avanzadas.
                  </li>
                </ul>

                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Ideal si tienes un concepto particular o buscas acelerar la creación de un prototipo interactivo para tu proyecto.
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
                Regístrate en la lista de interés de WhatsApp para apartar tu lugar prioritario.
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
                4 horas intensivas de diseño, programación asistida y publicación en vivo.
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
                Con auriculares para escuchar y afinar el diseño sonoro de tu juego.
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
                Asegura tu lugar con antelación. Grupos reducidos para garantizar acompañamiento personalizado paso a paso.
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
                  Precio y disponibilidad al solicitar información. Adaptado 100% al concepto y requerimientos de tu proyecto o empresa.
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
                ¿Necesito saber programar?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. Aprenderás a formular prompts efectivos, dirigir la arquitectura lógica y revisar el código generado por IA para iterar con rapidez.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Necesito comprar licencias o software?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. Todas las herramientas y servicios principales utilizados en el taller cuentan con versiones o capas gratuitas suficientes para todo el proyecto.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿El juego utiliza imágenes externas pesadas?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. Todo el arte se dibuja directamente por código, lo que hace al juego ultra liviano, veloz y sin dependencias de assets externos.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Puedo usar mi propio personaje y diseño?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                ¡Totalmente! Podrás describir tu personaje favorito y pedirle a la IA una versión pixel art simplificada con tu propia paleta de colores.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2 md:col-span-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Qué pasa si no alcanzo a terminar todas las mecánicas?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Te llevarás el repositorio completo, la arquitectura modular y las plantillas de prompts para continuar agregando niveles, enemigos y mecánicas a tu propio ritmo.
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
              ¡Crea y publica tu videojuego!
            </h2>
            <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
              Trae tu laptop, una idea de personaje y ganas de experimentar. Nosotros ponemos el mapa, los prompts y el acompañamiento.
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
        <div>© {new Date().getFullYear()} Rubén Oroz · Taller De Cero a Videojuego · Todos los derechos reservados</div>
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
