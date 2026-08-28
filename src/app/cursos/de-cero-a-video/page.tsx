'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, CheckCircle2, Clock, Laptop, Calendar, 
  Sparkles, ExternalLink, MessageCircle, ShieldCheck, 
  Layers, Code2, Rocket, ArrowRight, UserCheck, Users,
  Video, Film, Clapperboard, Play, Sparkle, Camera,
  Volume2, Music, Mic, Scissors, Sliders, Copy, Check, CheckCheck,
  Workflow, HelpCircle, Terminal, Eye, Share2, Award
} from 'lucide-react'

interface ShotItem {
  id: string
  title: string
  tipo: string
  duracion: string
  accion: string
  camara: string
  audio: string
  promptKeyframe: string
  promptMotion: string
}

export default function DeCeroAVideoPage() {
  const waUrlGroup = 'https://wa.me/523335769348?text=Hola%2C%20me%20interesa%20el%20taller%20%22De%20Cero%20a%20Video%20con%20IA%22.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%3F'
  const waUrlPersonal = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso%20personal%20o%20asesor%C3%ADa%201%20a%201%20de%20%22De%20Cero%20a%20Video%20con%20IA%22.'
  const waUrlBook = 'https://wa.me/523335769348?text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20taller%20%22De%20Cero%20a%20Video%20con%20IA%22.'

  // Interactive Storyboard & Director Timeline State
  const [selectedShotIndex, setSelectedShotIndex] = useState<number>(0)
  const [copiedShotPrompt, setCopiedShotPrompt] = useState(false)
  const [isPlayingTimeline, setIsPlayingTimeline] = useState(false)

  const shots: ShotItem[] = [
    {
      id: 'P01',
      title: 'Plano 1: Establecimiento del Mundo / Gancho',
      tipo: 'Gran Plano General (EWS)',
      duracion: '4.0s',
      accion: 'Caminante solitario avanza por un callejón iluminado por neones en la noche lluviosa.',
      camara: 'Dolly lento hacia adelante, baja altura (low angle).',
      audio: 'Lluvia constante de fondo + inicio de sintetizador retro.',
      promptKeyframe: 'A cinematic wide establishing shot of a hooded protagonist walking in a rainy neon cyberpunk alley, volumetric lighting, reflections on wet asphalt, 35mm film grain, moody atmosphere, photorealistic, 16:9.',
      promptMotion: 'Animate this image maintaining identity and atmosphere. Action: Person walks slowly away from camera. Environment: gentle rain falling with neon reflections on puddles. Camera: Slow smooth forward dolly in. Timing: natural pacing. Avoid face warping and identity shift.'
    },
    {
      id: 'P02',
      title: 'Plano 2: Detalle de Acción / Dispositivo',
      tipo: 'Plano Detalle (Close-Up)',
      duracion: '3.5s',
      accion: 'El protagonista activa un dispositivo holográfico portátil que proyecta un mapa flotante.',
      camara: 'Cámara fija con ligero enfoque dinámico (rack focus).',
      audio: 'Beep electrónico de interfaz holográfica + voz en off: "El destino ya no es un lugar...".',
      promptKeyframe: 'Close up shot of gloved hands holding a glowing futuristic amber holographic scanner device, glowing interface symbols, cinematic lighting, sharp focus, 16:9.',
      promptMotion: 'Animate this image maintaining hands and device. Action: Hologram flickers and unfolds upward with glowing particles. Camera: Fixed camera with subtle micro handheld shake. Timing: snappy opening. Keep fingers natural.'
    },
    {
      id: 'P03',
      title: 'Plano 3: Giro Dramático / Revelación',
      tipo: 'Plano Medio Corto (Medium Close-Up)',
      duracion: '4.5s',
      accion: 'El protagonista gira la mirada hacia el cielo mientras la luz de una nave ilumina su rostro.',
      camara: 'Panorámica diagonal ascendente (Tilt Up) con iluminación dinámica.',
      audio: 'Crescendo musical + sonido de propulsión gravitacional + voz en off: "...es una decisión."',
      promptKeyframe: 'Medium close up shot of the same hooded protagonist looking up towards a bright warm light source above, expressive eyes, rain dripping, consistent character face, 16:9.',
      promptMotion: 'Animate this image maintaining facial identity. Action: Character slowly turns head looking upward with wonder. Environment: Warm light beam sweeps across the frame. Camera: Subtle tilt up. Avoid morphing.'
    },
    {
      id: 'P04',
      title: 'Plano 4: Clímax & Cierre con Logotipo',
      tipo: 'Plano General & Título Final',
      duracion: '5.0s',
      accion: 'El horizonte de la ciudad amanece con el sol dorado mientras se funde al título principal.',
      camara: 'Travelling hacia atrás (pull back reveal) alejándose hacia el amanecer.',
      audio: 'Remate musical épico + logo sonoro + texto en pantalla.',
      promptKeyframe: 'Wide scenic cinematic vista of the city at golden hour sunrise, warm orange and violet horizon, cinematic wide lens flare, 16:9.',
      promptMotion: 'Animate this image. Action: Sun rays slowly crest over the skyline buildings. Environment: Morning fog drifts across rooftops. Camera: Smooth slow pull-back. Timing: cinematic and serene.'
    }
  ]

  const currentShot = shots[selectedShotIndex]

  const handleCopyShot = () => {
    const fullText = `SHOT SPECIFICATION (${currentShot.id}):
TIPO DE PLANO: ${currentShot.tipo}
DURACIÓN: ${currentShot.duracion}
ACCIÓN: ${currentShot.accion}
CÁMARA: ${currentShot.camara}
CAPA SONORA: ${currentShot.audio}

PROMPT KEYFRAME (Imagen fija):
${currentShot.promptKeyframe}

PROMPT MOVIMIENTO (Imagen a Video):
${currentShot.promptMotion}`

    navigator.clipboard.writeText(fullText)
    setCopiedShotPrompt(true)
    setTimeout(() => setCopiedShotPrompt(false), 2000)
  }

  // Showcase Videos State
  const showcaseVideos = [
    {
      id: 'WqdS1X3Bnx4',
      title: 'Video Showcase 01',
      tag: 'PRODUCCIÓN COMPLETA',
      desc: 'Flujo cinematográfico: consistencia de personajes, iluminación y dirección de cámara.',
      url: 'https://www.youtube.com/watch?v=WqdS1X3Bnx4&list=RDWqdS1X3Bnx4&start_radio=1',
    },
    {
      id: 'ToUMn7eiri8',
      title: 'Video Showcase 02',
      tag: 'ATMÓSFERA & KEYFRAMES',
      desc: 'Planos cinemáticos, ritmo visual y sincronización de música y diseño sonoro.',
      url: 'https://www.youtube.com/watch?v=ToUMn7eiri8&list=RDToUMn7eiri8&start_radio=1',
    },
    {
      id: 'r5zd0FDaIG8',
      title: 'Video Showcase 03',
      tag: 'DIRECCIÓN DE ARTE',
      desc: 'Generación imagen-a-video con control estricto de estilo, color y movimientos fluidos.',
      url: 'https://www.youtube.com/watch?v=r5zd0FDaIG8&list=RDr5zd0FDaIG8&start_radio=1',
    },
    {
      id: 'ohtq_j_RAAs',
      title: 'Video Showcase 04',
      tag: 'NARRATIVA & EDICIÓN',
      desc: 'Integración de planos generativos con locución en off, foley y montaje final.',
      url: 'https://www.youtube.com/watch?v=ohtq_j_RAAs&list=RDohtq_j_RAAs&start_radio=1',
    },
  ]

  const [selectedVideoId, setSelectedVideoId] = useState<string>('WqdS1X3Bnx4')
  const currentVideo = showcaseVideos.find(v => v.id === selectedVideoId) || showcaseVideos[0]

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
              4 HORAS · AUDIOVISUAL CON IA
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
            <Clapperboard size={14} /> PRODUCCIÓN AUDIOVISUAL & INTELIGENCIA ARTIFICIAL
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-sans leading-none">
            De Cero a Video con IA
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold font-sans text-zinc-800 max-w-3xl leading-snug">
            Produce un video completo de 20 a 45 segundos con Inteligencia Artificial generativa en 4 horas: guion, keyframes, animación, voz, música y montaje final.
          </p>

          <p className="text-base sm:text-lg text-zinc-600 font-sans max-w-3xl leading-relaxed">
            La IA genera materia prima; la dirección y la edición la convierten en discurso audiovisual. Aprende el flujo profesional para mantener consistencia de personajes, dirigir cámaras virtuales, diseñar la banda sonora y exportar tu master final en MP4.
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Clock size={14} className="text-brand-pink" /> Duración
              </div>
              <div className="text-base font-extrabold text-black">4 Horas</div>
              <div className="text-[11px] text-zinc-600">Sesión 100% práctica</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Laptop size={14} className="text-brand-pink" /> Modalidad
              </div>
              <div className="text-base font-extrabold text-black">Presencial / Online</div>
              <div className="text-[11px] text-zinc-600">En vivo con tu laptop</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Film size={14} className="text-brand-pink" /> Entregable
              </div>
              <div className="text-base font-extrabold text-black">Video MP4 (H.264)</div>
              <div className="text-[11px] text-zinc-600">De 20 a 45 segundos</div>
            </div>

            <div className="border-2 border-black bg-white p-3 shadow-neo">
              <div className="text-zinc-500 font-bold uppercase flex items-center gap-1.5 mb-1">
                <Users size={14} className="text-brand-pink" /> Cupo
              </div>
              <div className="text-base font-extrabold text-black">8 - 15 Cupos</div>
              <div className="text-[11px] text-zinc-600">Atención personalizada</div>
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
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Consistencia Visual</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Aprende a crear una Biblia Visual y hojas de referencia para que tu personaje, producto y paleta de iluminación no cambien entre plano y plano.
              </p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                02
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Imagen a Video</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Fórmula de movimiento precisa: Acción + Ambiente + Cámara + Timing + Restricciones. Anima keyframes aprobados sin deformaciones.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 bg-brand-yellow text-black flex items-center justify-center font-bold text-sm border border-white">
                03
              </div>
              <h3 className="font-bold text-lg text-brand-yellow uppercase">Montaje & Capa Sonora</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Integra las 3 capas: Voz en off sintetizada, música con función emocional y efectos sonoros que dan credibilidad al corte directo.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE VIDEO SHOWCASE & SELECTOR */}
        <section id="video-showcase" className="space-y-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// SHOWCASE AUDIOVISUAL · PRODUCCIONES CON IA"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Galería & Selector de Videos
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-1 max-w-2xl">
                Selecciona cualquiera de las 4 piezas para reproducirla y observar la calidad de textura, movimiento de cámara y ritmo cinematográfico.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 bg-black text-brand-yellow font-bold border border-black flex items-center gap-1.5">
                <Play size={13} fill="currentColor" /> 4 VIDEOS DISPONIBLES
              </span>
            </div>
          </div>

          {/* Video Player Frame */}
          <div className="border-4 border-black bg-zinc-950 p-4 sm:p-6 shadow-neo text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Main Player (16:9 Aspect Ratio) */}
              <div className="lg:col-span-8 space-y-3">
                <div className="relative w-full aspect-video border-2 border-zinc-800 bg-black overflow-hidden shadow-inner">
                  <iframe
                    key={selectedVideoId}
                    src={`https://www.youtube-nocookie.com/embed/${selectedVideoId}?rel=0&modestbranding=1&playsinline=1`}
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-zinc-800 pt-3 gap-2 font-mono text-xs">
                  <div>
                    <span className="text-brand-yellow font-bold uppercase">{currentVideo.tag}</span>
                    <h3 className="text-base font-bold text-white mt-0.5">{currentVideo.title}</h3>
                    <p className="text-zinc-400 text-[11px] font-sans mt-0.5">{currentVideo.desc}</p>
                  </div>
                  <a
                    href={currentVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3 py-1.5 bg-zinc-900 border border-zinc-700 hover:bg-brand-pink hover:text-white transition-all flex items-center gap-1.5 text-[11px] font-bold text-zinc-300"
                  >
                    <ExternalLink size={13} /> Ver en YouTube
                  </a>
                </div>
              </div>

              {/* Video Selector List */}
              <div className="lg:col-span-4 space-y-2.5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="font-mono text-xs font-bold text-zinc-400 border-b border-zinc-800 pb-2 flex items-center gap-1.5">
                    <Film size={14} className="text-brand-yellow" /> SELECCIONA UN VIDEO
                  </div>

                  <div className="space-y-2">
                    {showcaseVideos.map((vid, idx) => {
                      const isSelected = vid.id === selectedVideoId
                      return (
                        <button
                          key={vid.id}
                          onClick={() => setSelectedVideoId(vid.id)}
                          className={`w-full p-2.5 border-2 text-left transition-all cursor-pointer flex items-center gap-3 ${
                            isSelected
                              ? 'bg-brand-yellow text-black border-white shadow-[2px_2px_0px_#fff]'
                              : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-600 hover:text-white'
                          }`}
                        >
                          <div className="w-16 h-11 relative bg-black shrink-0 border border-black/40 overflow-hidden">
                            <img
                              src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                              alt={vid.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              <Play size={14} className={isSelected ? 'text-black fill-black' : 'text-white fill-white'} />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0 font-mono">
                            <div className="flex justify-between items-center text-[10px]">
                              <span className={`font-bold ${isSelected ? 'text-black' : 'text-brand-pink'}`}>
                                0{idx + 1}
                              </span>
                              <span className="text-[9px] uppercase opacity-75">{vid.tag.split(' ')[0]}</span>
                            </div>
                            <div className="font-bold text-xs truncate mt-0.5">{vid.title}</div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-800 font-mono text-[11px] text-zinc-400">
                  <span className="text-emerald-400 font-bold">★ Pipeline del Taller:</span> Aprende a producir piezas como estas en 4 horas con prompts de movimiento y keyframes consistentes.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE STORYBOARD & DIRECTOR TIMELINE SIMULATOR */}
        <section id="director-lab" className="space-y-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// SIMULADOR INTERACTIVO · FLUJO AUDIOVISUAL"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                Línea de Tiempo: Storyboard & Prompts por Plano
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-1 max-w-2xl">
                Explora cómo se estructura un video profesional plano por plano (P01 a P04) con prompts de keyframe, animación y diseño de audio.
              </p>
            </div>

            {/* Timeline Controls */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 bg-zinc-900 text-brand-yellow border border-zinc-700 font-bold flex items-center gap-1.5">
                <Video size={13} /> 4 PLANOS · 17.0s TOTAL
              </span>
            </div>
          </div>

          {/* Director Suite Frame */}
          <div className="border-4 border-black bg-zinc-950 p-4 sm:p-6 shadow-neo text-white">
            
            {/* Top Shot Selector / Timeline Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 font-mono text-xs">
              {shots.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedShotIndex(idx)}
                  className={`p-3 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedShotIndex === idx
                      ? 'bg-brand-yellow text-black border-white shadow-[2px_2px_0px_#fff]'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-center font-bold text-[11px]">
                    <span>{s.id}</span>
                    <span>{s.duracion}</span>
                  </div>
                  <div className="font-bold text-xs mt-1 truncate">
                    {s.title.split(':')[1] || s.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Main Detail Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Shot Specifications & Director Notes */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 font-mono text-xs">
                  <span className="font-bold text-brand-yellow flex items-center gap-1.5">
                    <Clapperboard size={15} /> FICHA DEL PLANO ({currentShot.id})
                  </span>
                  <span className="text-zinc-400 text-[11px]">{currentShot.tipo}</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-zinc-900 border-l-4 border-purple-400 p-3">
                    <div className="text-purple-400 font-bold uppercase text-[10px] mb-1 flex items-center gap-1">
                      <Eye size={12} /> ACCIÓN VISUAL DEL PLANO
                    </div>
                    <div className="text-zinc-200 font-sans text-xs">{currentShot.accion}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-blue-400 p-3">
                    <div className="text-blue-400 font-bold uppercase text-[10px] mb-1 flex items-center gap-1">
                      <Camera size={12} /> MOVIMIENTO DE CÁMARA
                    </div>
                    <div className="text-zinc-200 font-sans text-xs">{currentShot.camara}</div>
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-emerald-400 p-3">
                    <div className="text-emerald-400 font-bold uppercase text-[10px] mb-1 flex items-center gap-1">
                      <Volume2 size={12} /> CAPA DE AUDIO & VOZ EN OFF
                    </div>
                    <div className="text-zinc-200 font-sans text-xs">{currentShot.audio}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyShot}
                  className="w-full py-2.5 bg-white text-black font-mono font-bold text-xs border-2 border-white hover:bg-brand-yellow transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#fff] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  {copiedShotPrompt ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  {copiedShotPrompt ? '¡PROMPTS DEL PLANO COPIADOS!' : `COPIAR PROMPTS DE ${currentShot.id}`}
                </button>
              </div>

              {/* Right Column: AI Prompts (Keyframe vs Motion) */}
              <div className="lg:col-span-6 bg-black border-2 border-zinc-800 p-4 flex flex-col justify-between space-y-4">
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <div className="flex justify-between items-center text-[11px] text-zinc-400 font-bold mb-1.5">
                      <span className="text-brand-yellow">1. PROMPT KEYFRAME (Imagen Fija):</span>
                      <span className="text-zinc-500">ChatGPT / Firefly / Imagen</span>
                    </div>
                    <div className="bg-zinc-950 p-3 border border-zinc-800 text-zinc-300 text-[11px] leading-relaxed">
                      {currentShot.promptKeyframe}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-[11px] text-zinc-400 font-bold mb-1.5">
                      <span className="text-emerald-400">2. PROMPT MOVIMIENTO (Imagen a Video):</span>
                      <span className="text-zinc-500">Runway / Firefly / Veo</span>
                    </div>
                    <div className="bg-zinc-950 p-3 border border-zinc-800 text-zinc-300 text-[11px] leading-relaxed">
                      {currentShot.promptMotion}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCheck size={14} /> Consistencia de personajes garantizada
                  </span>
                  <span>Formato 16:9 / 9:16</span>
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
              Diseñado para creadores, profesionistas y marcas que quieren crear contenido en video con calidad cinematográfica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Creadores de Contenido
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Reels & Microhistorias</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Creadores que quieren producir videos narrativos y reels de alto impacto visual sin presupuestos millonarios de producción.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Marcas & Emprendedores
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Spots & Comerciales</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Dueños de negocio que necesitan spots publicitarios para sus productos o servicios con acabado comercial y voces profesionales.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Agencias & Diseñadores
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Pitch & Concept Art</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Creativos que necesitan generar storyboards animados, mood films y prototipos audiovisuales en tiempo récord para clientes.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 shadow-neo space-y-2">
              <span className="text-xs uppercase font-bold text-black bg-brand-yellow px-1.5 py-0.5 border border-black inline-block">
                Docentes & Divulgadores
              </span>
              <h3 className="font-bold text-black text-sm uppercase">Video Educativo</h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Educadores que quieren transformar lecciones complejas en cápsulas audiovisuales atractivas, dinámicas y fáciles de entender.
              </p>
            </div>
          </div>
        </section>

        {/* 6-BLOCK PRACTICAL PIPELINE */}
        <section className="space-y-8 pt-8 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-pink uppercase tracking-widest font-bold">
                {"// PIPELINE DE PRODUCCIÓN (4 HORAS)"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans mt-1">
                De la Idea al Archivo MP4 Final
              </h2>
              <p className="text-zinc-600 font-sans text-base mt-2 max-w-2xl">
                El flujo audiovisual completo paso a paso con acompañamiento técnico en cada corte.
              </p>
            </div>
            
            <div className="font-mono text-xs text-zinc-500 bg-zinc-100 p-2 border border-black inline-block">
              Total: 4 Horas · 1 Video Terminado
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            {/* Block 1 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 1</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 25 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Fundamentos & Anatomía de un Clip
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Cómo la IA genera video (difusión espaciotemporal). Ventajas y limitaciones actuales (manos, texto, duración). Los 3 tipos de proyectos viables: microhistoria, spot comercial y reel temático.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Estructura de 4 a 6 planos</div>
                <div>✓ Definición de formato (16:9 vs 9:16)</div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 2</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 45 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Brief, Guion & Desglose por Planos
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                De la idea abstracta a una escaleta cinematográfica de 20 a 45 segundos. Asignación de acción, encuadre (EWS, MCU, CU), movimiento de cámara y capa sonora para cada plano (P01 a P06).
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Storyboard textual estructurado</div>
                <div>✓ Prompt maestro para generación de guion</div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 3</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 40 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Biblia Visual & Keyframes Consistentes
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Creación de la hoja de referencia del personaje o producto. Generación de imágenes clave (P01_KEYFRAME, P02_KEYFRAME) manteniendo rasgos, vestuario, paleta de color e iluminación.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Control de consistencia visual</div>
                <div>✓ Eliminación de artefactos antes de animar</div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 4</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 65 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Generación de Video Plano por Plano
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Animación con modelos de última generación (Runway, Firefly, Veo). Aplicación de la fórmula de movimiento: Acción + Ambiente + Cámara + Timing. Selección del mejor tramo de cada toma.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Imagen a video de alta fidelidad</div>
                <div>✓ Dirección de movimientos de cámara fluidos</div>
              </div>
            </div>

            {/* Block 5 */}
            <div className="border-2 border-black bg-white p-6 shadow-neo space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 5</span>
                <span className="text-zinc-500 font-bold flex items-center gap-1"><Clock size={12} /> 30 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Diseño Sonoro, Voz en Off & Música
              </h3>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Construcción de la banda sonora: Síntesis de locución profesional, selección de pista musical con función dramática y efectos sonoros (foley/FX) que dan peso y realismo a la imagen.
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-700 text-[11px] space-y-1">
                <div>✓ Sincronía labial y ritmo de voz</div>
                <div>✓ Curaduría de audio con derechos comerciales</div>
              </div>
            </div>

            {/* Block 6 / Cierre */}
            <div className="border-2 border-black bg-brand-yellow/30 p-6 shadow-neo space-y-3 border-brand-yellow">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-black text-white font-bold text-xs">BLOQUE 6</span>
                <span className="text-zinc-700 font-bold flex items-center gap-1"><Clock size={12} /> 35 MIN</span>
              </div>
              <h3 className="text-lg font-extrabold uppercase text-black font-sans">
                Montaje, Exportación & Master Final
              </h3>
              <p className="text-zinc-800 font-sans text-xs leading-relaxed">
                Armado de la secuencia en el editor de video, recortes finos, sincronización de audio con cortes directos, títulos finales y exportación del archivo master en MP4 / H.264.
              </p>
              <div className="pt-2 border-t border-black/20 text-zinc-900 text-[11px] space-y-1 font-bold">
                <div>★ Archivo MP4 final exportado y listo</div>
                <div>★ Proyecto organizado con todos sus assets</div>
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
                <span><strong className="text-black">1 Video terminado en formato MP4 (H.264)</strong> de 20 a 45 segundos con audio sincronizado.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Guion y Storyboard técnico desglosado</strong> por planos con sus prompts correspondientes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Hoja de referencia y keyframes</strong> originales en alta resolución.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#25d366] shrink-0 mt-0.5" />
                <span><strong className="text-black">Metodología de dirección audiovisual</strong> para seguir creando videos por tu cuenta.</span>
              </li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-zinc-50 border-2 border-black p-6 sm:p-8 shadow-neo space-y-4">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
              {"// PRERREQUISITOS TÉCNICOS"}
            </span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight font-sans">
              ¿Qué necesitas para el taller?
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                <span><strong className="text-black">Laptop</strong> con navegador web, espacio en disco y conexión a internet.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                <span><strong className="text-black">Cuentas creadas</strong> en herramientas de IA (ChatGPT/Claude, Runway/Firefly).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                <span><strong className="text-black">Un editor de video instalado</strong> (CapCut, Premiere, DaVinci o similar).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">4</span>
                <span><strong className="text-black">Audífonos</strong> para monitorear audio durante la sesión.</span>
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
              Disponible en taller grupal para equipos creativos o en sesión individual 1 a 1 para producir una pieza audiovisual personalizada.
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
                  Taller Grupal en Vivo
                </h3>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  Ideal para agencias de publicidad, creadores de contenido, equipos de marketing y entusiastas del cine con IA.
                </p>
                <div className="border-t border-zinc-200 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Sesión intensiva de 4 horas
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Práctica guiada plano por plano
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Salida con tu propio video MP4 renderizado
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
                  <MessageCircle size={16} /> CONSULTAR PRÓXIMAS FECHAS
                </a>
              </div>
            </div>

            {/* 1-on-1 Option */}
            <div className="border-4 border-black bg-zinc-950 text-white p-6 sm:p-8 shadow-neo relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-brand-pink text-white px-2.5 py-1 border border-white font-bold uppercase text-xs">
                    ASESORÍA PRIVADA
                  </span>
                  <span className="text-zinc-400 font-bold">1 a 1</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-sans text-white">
                  Sesión 1 a 1 con Rubén
                </h3>
                <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                  Para marcas, directores o creadores que buscan producir una campaña o pieza audiovisual específica con asesoría directa.
                </p>
                <div className="border-t border-zinc-800 pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Sesión privada a la medida de tu proyecto
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Dirección técnica de consistencia y fotografía
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 size={14} className="text-[#25d366]" /> Revisión de montaje y masterización de audio
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
                ¿Necesito experiencia previa en cine o edición?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                No. El taller enseña los conceptos clave de lenguaje audiovisual (planos, cámaras, cortes) desde cero y cómo aplicarlos en herramientas de IA.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Qué tipo de videos se pueden producir?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Microhistorias cinemáticas, spots comerciales de productos, videos institucionales, reels para redes y teasers conceptuales.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿Cómo se resuelve el problema de personajes que cambian de cara?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Utilizamos el flujo de "Hojas de referencia" y "Keyframes consistentes" antes de pasar al generador de video, lo que asegura que el rostro y vestuario se mantengan constantes.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 shadow-neo space-y-2">
              <h4 className="font-bold text-black text-sm uppercase flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-pink shrink-0" />
                ¿El video exportado se puede usar con fines comerciales?
              </h4>
              <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                Sí. Se enseñan las mejores prácticas de derechos de autor, licencias de música comercial y uso de voces con consentimiento.
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
              ¡Produce tu video cinematográfico con IA!
            </h2>
            <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
              Trae tu idea, tu laptop y aprende el pipeline completo para dirigir y editar videos generativos de nivel profesional.
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
        <div>© {new Date().getFullYear()} Rubén Oroz · Taller De Cero a Video con IA · Todos los derechos reservados</div>
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
