'use client'

import React, { useState, useRef, useEffect } from 'react'
import { 
  Tv, Music, Cpu, Mail, ExternalLink, FileText, 
  Menu, X, BookOpen, GraduationCap,
  Sparkles, Send
} from 'lucide-react'
import { PageData, Project } from '@/data/db'

const getPlaceholderSvg = (width: number, height: number, text: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#fafafa"/>
    <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="#e4e4e7" stroke-width="2" stroke-dasharray="8 8" />
    <line x1="${width}" y1="0" x2="0" y2="${height}" stroke="#e4e4e7" stroke-width="2" stroke-dasharray="8 8" />
    <circle cx="${width/2}" cy="${height/2}" r="50" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-dasharray="4 4" />
    <rect x="${width / 2 - 170}" y="${height / 2 - 30}" width="340" height="60" fill="#fdd947" stroke="#000" stroke-width="3" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#000000">
      ${text} // ${width}x${height} PX
    </text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
};

interface ImageWithPlaceholderProps {
  src?: string
  alt: string
  dimensions: string
  className?: string
  aspectRatioClass?: string
  objectFit?: 'cover' | 'contain'
}

function ImageWithPlaceholder({ src, alt, dimensions, className = '', aspectRatioClass = 'aspect-video', objectFit = 'cover' }: ImageWithPlaceholderProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
  }, [src])

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoading(false)
    }
  }, [src])

  const showPlaceholder = !src || hasError

  if (showPlaceholder) {
    const isProfile = alt.toLowerCase().includes('perfil') || alt.toLowerCase().includes('profile')
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center p-6 bg-zinc-50 border-2 border-dashed border-zinc-400 font-mono text-xs text-zinc-500 text-center select-none ${aspectRatioClass} ${className}`}>
        <div className="flex flex-col items-center gap-3 w-full">
          {isProfile ? (
            <div className="w-16 h-16 border-2 border-black bg-brand-yellow flex items-center justify-center text-black shadow-[2px_2px_0px_#000] mb-1 animate-pulse">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          ) : (
            <div className="w-12 h-12 border-2 border-black bg-zinc-200 flex items-center justify-center text-black shadow-[2px_2px_0px_#000] mb-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span className="uppercase tracking-wider font-bold text-zinc-800 text-xs">[{alt}]</span>
            <span className="text-[10px] text-zinc-400 italic">Espacio para Imagen</span>
          </div>
          <span className="font-bold text-[11px] text-black bg-brand-yellow px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000] font-mono">
            {dimensions}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full bg-zinc-100 overflow-hidden ${aspectRatioClass} ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 font-mono text-[10px] text-zinc-400">
          CARGANDO...
        </div>
      )}
    </div>
  )
}

interface PortfolioProps {
  data: PageData
}

export default function Portfolio({ data }: PortfolioProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Rotate hero background slides automatically
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(timer)
  }, [])
  
  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(null)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      })

      const resData = await response.json()
      if (response.ok) {
        setSubmitSuccess(true)
        setSubmitMessage('¡Mensaje enviado con éxito!')
        setFormState({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitSuccess(false)
        setSubmitMessage(resData.error || 'Ocurrió un error al enviar.')
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitSuccess(false)
      setSubmitMessage('Error de red. Intenta más tarde.')
    } finally {
      setIsSubmitting(false)
    }
  }


  const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#skills', label: 'Competencias' },
    { href: '#timeline', label: 'Trayectoria' },
    { href: '#portfolio', label: 'Portafolio' },
    { href: '#research', label: 'Investigación' },
    { href: '#contact', label: 'Contacto' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row tech-grid">
      
      {/* MOBILE HEADER */}
      <header className="md:hidden w-full bg-white border-b-2 border-black py-2.5 px-6 sticky top-0 z-50 flex items-center justify-between">
        <a href="#home" className="block text-black hover:opacity-85 transition-opacity">
          <img src="/logo.svg" alt="Rubén Oroz Logo" className="h-[56px] w-auto object-contain" />
        </a>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="p-2 border-2 border-black text-black hover:bg-zinc-50 cursor-pointer active:translate-x-[1px] active:translate-y-[1px]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[61px] bg-white z-40 border-b-2 border-black p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-lg py-2 border-b border-zinc-200 text-zinc-800 hover:text-brand-pink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 mt-6">
            <a 
              href={data.profile.linkedin_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 border-2 border-black bg-white text-black hover:bg-brand-pink hover:text-white hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all" 
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-3 border-2 border-black bg-brand-yellow text-black hover:bg-black hover:text-white hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 font-mono"
            >
              <Mail size={20} /> Contactar
            </a>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR NAVIGATION */}
      <aside className="hidden md:flex flex-col w-64 fixed top-0 bottom-0 left-0 bg-white border-r-2 border-black px-5 py-8 z-30 justify-between">
        <div className="flex flex-col gap-10">
          <div>
            <a href="#home" className="block text-black hover:opacity-85 transition-opacity">
              <img src="/logo.svg" alt="Rubén Oroz Logo" className="w-full h-auto max-w-[210px] object-contain" />
            </a>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="font-mono text-zinc-700 hover:text-brand-pink text-sm tracking-wide py-1 border-l-2 border-transparent hover:border-brand-pink pl-3 hover:translate-x-1 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <a 
              href={data.profile.linkedin_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border-2 border-black text-black hover:bg-brand-pink hover:text-white hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href={`mailto:${data.profile.email}`} 
              className="p-2 border-2 border-black text-black hover:bg-brand-yellow hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-64 flex flex-col min-w-0">
        
        {/* SECTION 1: HERO */}
        <section 
          id="home" 
          className="min-h-[90vh] flex flex-col justify-center border-b-2 border-black relative px-6 py-20 md:p-20 overflow-hidden"
        >
          {/* Slider Backgrounds */}
          <div className="absolute inset-0 z-0">
            {[
              '/images/hero_1.jpg',
              '/images/hero_2.jpg',
              '/images/hero_3.jpg'
            ].map((url, idx) => (
              <div 
                key={idx}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                style={{ 
                  backgroundImage: `url('${url}'), url("${getPlaceholderSvg(1671, 1080, `IMAGEN HERO ${idx + 1}`)}")`,
                  opacity: currentSlide === idx ? 1 : 0
                }}
              />
            ))}
            {/* Soft Overlay for text legibility */}
            <div className="absolute inset-0 bg-white/25 z-0"></div>
          </div>


          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-[#c32026] font-mono text-xs uppercase mb-6 shadow-neo">
              <Sparkles size={12} className="animate-pulse text-[#c32026]" /> Experto en Innovación & Medios
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-none font-sans mb-6">
              HOLA, SOY <br />
              <span className="text-[#c32026] font-extrabold">
                {data.profile.full_name}
              </span>
            </h1>

            {/* Subtle overlay box for subtitle and description text legibility */}
            <div className="bg-white/70 backdrop-blur-md p-6 border-l-4 border-brand-yellow mb-8 max-w-2xl border border-black/5 shadow-sm">
              <div className="font-mono text-lg sm:text-2xl text-zinc-800 leading-relaxed mb-4">
                {data.profile.title}
              </div>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                Integro tecnología aplicada, inteligencia artificial y producción televisiva profesional mediante metodologías de aprendizaje activo.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#portfolio" 
                className="px-6 py-3 bg-brand-yellow text-black font-mono font-bold border-2 border-black hover:bg-black hover:text-white hover:shadow-neo active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
              >
                PROYECTOS
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-black font-mono border-2 border-black hover:bg-brand-pink hover:text-white hover:shadow-neo active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
              >
                CONTACTAR
              </a>
            </div>
          </div>

          {/* Slider Pagination Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-300 border border-black cursor-pointer shadow-[1px_1px_0px_#000] ${
                  currentSlide === idx ? 'w-8 bg-brand-pink' : 'w-3 bg-white hover:bg-zinc-100'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* SECTION 2: ABOUT */}
        <section 
          id="about" 
          className="py-20 px-6 md:p-20 border-b-2 border-black relative bg-cover bg-center" 
          style={{ backgroundImage: `url('/images/about_bg.jpg'), url("${getPlaceholderSvg(1671, 800, 'FONDO SOBRE MI')}")` }}
        >
          <div className="absolute inset-0 bg-white/92 z-0"></div>
          <div className="max-w-6xl relative z-10">
            <div className="font-mono text-xs text-brand-pink uppercase tracking-widest mb-2 font-bold">{"// PERFIL"}</div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-10 font-sans">
              Sobre Mí
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Bio Text Column */}
              <div className="lg:col-span-4 flex flex-col gap-6 text-zinc-600 text-base leading-relaxed text-justify">
                <p className="text-black font-semibold">
                  {data.profile.bio}
                </p>
                <p>
                  A lo largo de mi carrera profesional he tenido el privilegio de coordinar el modelo académico de **Aprendizaje Basado en Proyectos (ABP)** y fundar el proyecto formativo **Laboratorio Escuela** dentro de UNIVA, uniendo la producción real en señal abierta con las competencias del alumnado.
                </p>
                <p>
                  También desarrollo software (SaaS) y diseño experiencias sonoras y composiciones musicales. Busco constantemente cómo las herramientas de IA pueden potenciar los flujos creativos y educativos actuales.
                </p>
              </div>

              {/* Profile Photo Column */}
              <div className="lg:col-span-4 border-2 border-black shadow-neo relative overflow-hidden bg-white">
                <ImageWithPlaceholder 
                  src="/images/profile.jpg" 
                  alt="FOTO DE PERFIL" 
                  dimensions="600 x 800 PX" 
                  aspectRatioClass="aspect-[3/4]"
                />
              </div>

              {/* Contact Box Column */}
              <div className="lg:col-span-4 bg-zinc-50 border-2 border-black p-6 font-mono flex flex-col justify-between shadow-neo">
                <div className="flex flex-col gap-5">
                  <div>
                    <div className="text-brand-pink text-xs uppercase tracking-wider font-bold border-b-2 border-black pb-2 mb-4">
                      DATOS DE CONTACTO
                    </div>
                    <ul className="flex flex-col gap-3 text-sm">
                      <li><span className="text-zinc-500">EMAIL:</span> <a href={`mailto:${data.profile.email}`} className="text-black font-bold hover:text-brand-pink underline decoration-brand-pink/50">{data.profile.email}</a></li>
                      <li><span className="text-zinc-500">UBICACIÓN:</span> <span className="text-black font-bold">{data.profile.location}</span></li>
                      <li><span className="text-zinc-500">IDIOMAS:</span> <span className="text-black font-bold">Español (Nativo), Inglés (B2)</span></li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-brand-pink text-xs uppercase tracking-wider font-bold border-b-2 border-black pb-2 mb-4">
                      RESUMEN DE TRAYECTORIA
                    </div>
                    <ul className="flex flex-col gap-3 text-xs text-zinc-700 list-none pl-0">
                      <li className="flex gap-2">
                        <span className="text-brand-pink font-bold">▪</span>
                        <span><strong>+15 Años de Experiencia:</strong> Producción mediática e innovación educativa en educación superior.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-pink font-bold">▪</span>
                        <span><strong>Maestría en Animación 3D:</strong> Postproducción de video y flujos de postproducción avanzados.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-pink font-bold">▪</span>
                        <span><strong>Modelo ANGULAR:</strong> Laboratorio-escuela con +50 episodios de televisión producidos en señal abierta y +1,600 alumnos formados.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-pink font-bold">▪</span>
                        <span><strong>VFX & Project Management:</strong> Coordinación remota de equipos en The One Ring Studios (EE. UU.).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-pink font-bold">▪</span>
                        <span><strong>Investigación & COIL:</strong> Coautor de proyectos internacionales y publicaciones de producción circular.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-pink font-bold">▪</span>
                        <span><strong>Reconocimientos:</strong> Mención Honorífica en el Premio Jalisco de Periodismo.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS COUNTER */}
        <section className="bg-brand-yellow text-black py-12 px-6 md:px-20 grid grid-cols-2 lg:grid-cols-4 gap-8 font-mono border-b-2 border-black">
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight border-b-2 border-black pb-1 mb-1">+15</div>
            <div className="text-xs uppercase font-bold tracking-wider text-zinc-800">Años de Trayectoria</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight border-b-2 border-black pb-1 mb-1">+1,600</div>
            <div className="text-xs uppercase font-bold tracking-wider text-zinc-800">Alumnos Formados</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight border-b-2 border-black pb-1 mb-1">+200</div>
            <div className="text-xs uppercase font-bold tracking-wider text-zinc-800">Episodios de TV</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight border-b-2 border-black pb-1 mb-1">ABP/COIL</div>
            <div className="text-xs uppercase font-bold tracking-wider text-zinc-800">Investigación Activa</div>
          </div>
        </section>

        {/* PARALLAX BREAK SECTION */}
        <section 
          className="h-64 md:h-80 parallax-bg flex items-center justify-center relative border-b-2 border-black" 
          style={{ backgroundImage: `url('/images/parallax_bg.jpg'), url("${getPlaceholderSvg(1920, 984, 'FONDO PARALAJE')}")` }}
        >
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
          <div className="relative z-10 text-center px-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter uppercase font-mono bg-white text-black border-2 border-black py-4 px-8 shadow-neo">
              TECNOLOGÍA <span className="text-brand-pink">//</span> CREATIVIDAD <span className="text-brand-pink">//</span> EDUCACIÓN
            </h2>
          </div>
        </section>

        {/* SECTION 3: SKILLS */}
        <section id="skills" className="py-20 px-6 md:p-20 border-b-2 border-black bg-zinc-50">
          <div className="max-w-6xl">
            <div className="font-mono text-xs text-brand-pink uppercase tracking-widest mb-2 font-bold">{"// METODOLOGÍAS Y COMPETENCIAS"}</div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-10 font-sans">
              Áreas de Especialidad
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white border-2 border-black p-6 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-300">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center text-black mb-6 bg-brand-yellow shadow-[2px_2px_0px_#000]">
                  <Cpu size={24} />
                </div>
                <h3 className="font-mono text-lg font-bold uppercase mb-3 text-black">Tecnología & IA</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Desarrollo de herramientas digitales e integración de flujos de trabajo de inteligencia artificial aplicada en sectores creativos y académicos.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-300">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center text-black mb-6 bg-brand-pink shadow-[2px_2px_0px_#000] text-white">
                  <Tv size={24} />
                </div>
                <h3 className="font-mono text-lg font-bold uppercase mb-3 text-black">Producción Abierta</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Dirección y realización de programas televisivos y documentales con control de hitos, presupuestos y entregables técnicos profesionales.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-300">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center text-black mb-6 bg-white shadow-[2px_2px_0px_#000]">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-mono text-lg font-bold uppercase mb-3 text-black">ABP & Innovación</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Líder curricular de Aprendizaje Basado en Proyectos, conectando las aulas con ecosistemas profesionales y colaboraciones internacionales (COIL).
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-300">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center text-black mb-6 bg-brand-yellow shadow-[2px_2px_0px_#000]">
                  <Music size={24} />
                </div>
                <h3 className="font-mono text-lg font-bold uppercase mb-3 text-black">Producción de Audio</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Estudios formales en armonía, teoría musical y composición. Creación de arreglos musicales y diseño sonoro profesional.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: TIMELINE (ESCALETA STYLE) */}
        <section 
          id="timeline" 
          className="py-20 px-6 md:p-20 border-b-2 border-black relative bg-cover bg-center" 
          style={{ backgroundImage: `url('/images/timeline_bg.jpg'), url("${getPlaceholderSvg(1671, 786, 'FONDO TRAYECTORIA')}")` }}
        >
          <div className="absolute inset-0 bg-white/93 z-0"></div>
          <div className="max-w-6xl relative z-10">
            <div className="font-mono text-xs text-brand-pink uppercase tracking-widest mb-2 font-bold">{"// TIMELINE DE TRAYECTORIA"}</div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-4 font-sans">
              Trayectoria Profesional
            </h2>
            <p className="font-mono text-sm text-zinc-500 uppercase mb-10 max-w-xl">
              Diseño estructural basado en formato de escaleta técnica televisiva: [TÉCNICA = PERIODO / INSTITUCIÓN] | [NARRATIVA = LOGROS Y CRITERIO PEDAGÓGICO]
            </p>

            {/* Escaleta Script Grid Layout */}
            <div className="border-2 border-black font-mono text-sm shadow-neo">
              {/* Header row */}
              <div className="grid grid-cols-1 md:grid-cols-12 bg-black text-brand-yellow font-bold divide-y md:divide-y-0 md:divide-x-2 divide-zinc-800">
                <div className="md:col-span-4 p-4 text-xs tracking-wider">TÉCNICA (PERIODO & ENTIDAD)</div>
                <div className="md:col-span-8 p-4 text-xs tracking-wider">NARRATIVA (LOGROS, OPERACIÓN & ABP)</div>
              </div>

              {/* Experiences */}
              <div className="divide-y-2 divide-black">
                {data.experiences.map((exp, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x-2 divide-black hover:bg-zinc-50 transition-colors bg-white">
                    <div className="md:col-span-4 p-6 flex flex-col justify-start">
                      <span className="text-brand-pink font-bold text-base block mb-1">
                        {exp.start_date} — {exp.end_date}
                      </span>
                      <span className="text-black font-extrabold block uppercase">
                        {exp.company}
                      </span>
                    </div>
                    <div className="md:col-span-8 p-6 flex flex-col justify-start gap-2">
                      <span className="text-black font-bold text-base uppercase font-sans tracking-tight">
                        {exp.position}
                      </span>
                      <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Sub-timeline */}
            <div className="mt-16">
              <h3 className="font-mono text-xs uppercase text-zinc-500 tracking-wider mb-6 font-bold">
                FORMACIÓN ACADÉMICA
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
                {data.education.map((edu, index) => (
                  <div key={index} className="border-2 border-black p-6 bg-white flex flex-col justify-between shadow-neo hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_#000] transition-all">
                    <div>
                      <div className="text-brand-pink font-bold text-xs mb-2">{edu.start_date} — {edu.end_date}</div>
                      <h4 className="font-bold text-black uppercase text-sm mb-1">{edu.degree}</h4>
                      <span className="text-zinc-500 text-xs block mb-4 uppercase">{edu.institution}</span>
                    </div>
                    <p className="text-zinc-600 font-sans text-xs leading-relaxed border-t border-zinc-200 pt-3">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: PORTFOLIO */}
        <section id="portfolio" className="py-20 px-6 md:p-20 border-b-2 border-black bg-zinc-50">
          <div className="max-w-6xl">
            <div className="font-mono text-xs text-brand-pink uppercase tracking-widest mb-2 font-bold">{"// TRABAJO SELECCIONADO"}</div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-8 font-sans">
              Portafolio
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-black flex flex-col justify-between hover:shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="border-b-2 border-black bg-zinc-100 aspect-video relative flex items-center justify-center overflow-hidden select-none">
                    <ImageWithPlaceholder 
                      src={project.image_url} 
                      alt="IMAGEN DEL PROYECTO" 
                      dimensions="800 x 600 PX" 
                      aspectRatioClass="aspect-video"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-zinc-500 text-[10px] uppercase border border-zinc-300 px-2 py-0.5">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="font-mono text-brand-pink text-[10px] uppercase font-bold">
                          ● {project.status}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold font-mono uppercase text-black mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-600 font-sans text-sm leading-relaxed mb-6">
                      {project.description.substring(0, 140)}
                      {project.description.length > 140 ? '...' : ''}
                    </p>
                  </div>

                  <div className="border-t-2 border-black divide-x-2 divide-black flex font-mono text-xs text-center bg-zinc-50">
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="flex-1 py-3 text-black font-bold hover:bg-brand-pink hover:text-white transition-all cursor-pointer"
                    >
                      DETALLES
                    </button>
                    {project.link_url && (
                      <a 
                        href={project.link_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-3 text-brand-pink font-bold hover:bg-brand-yellow hover:text-black transition-all flex items-center justify-center gap-1"
                      >
                        VISITAR <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: RESEARCH & PAPERS */}
        <section id="research" className="py-20 px-6 md:p-20 border-b-2 border-black bg-white">
          <div className="max-w-6xl">
            <div className="font-mono text-xs text-brand-pink uppercase tracking-widest mb-2 font-bold">{"// INVESTIGACIÓN CURRICULAR"}</div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-10 font-sans">
              Investigación y Publicaciones
            </h2>

            <div className="flex flex-col gap-6">
              {data.publications.map((pub, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-black p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300"
                >
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] text-zinc-600 px-2 py-0.5 bg-zinc-100 border border-zinc-200">
                        {pub.publication_year}
                      </span>
                      {pub.is_coil && (
                        <span className="font-mono text-[10px] text-brand-pink font-bold border-2 border-brand-pink/20 bg-brand-pink/5 px-2 py-0.5">
                          COIL COLLABORATIVE
                        </span>
                      )}
                    </div>
                    <h3 className="font-mono font-bold text-black text-lg uppercase tracking-tight mb-2">
                      &ldquo;{pub.title}&rdquo;
                    </h3>
                    <div className="text-zinc-500 font-mono text-xs uppercase mb-3">
                      AUTORES: {pub.authors} | EVENTO: {pub.journal_event}
                    </div>
                    {pub.description && (
                      <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                        {pub.description}
                      </p>
                    )}
                  </div>
                  
                  {pub.link_url && (
                    <a 
                      href={pub.link_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full md:w-auto font-mono text-xs py-3 px-5 border-2 border-black bg-white text-black hover:bg-brand-pink hover:text-white hover:shadow-neo text-center flex items-center justify-center gap-2 whitespace-nowrap active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all shadow-neo"
                    >
                      <BookOpen size={14} /> LEER PUBLICACIÓN
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: CONTACT FORM */}
        <section 
          id="contact" 
          className="py-20 px-6 md:p-20 relative bg-cover bg-center border-t-2 border-black" 
          style={{ backgroundImage: `url('/images/contact_bg.jpg'), url("${getPlaceholderSvg(1671, 870, 'FONDO CONTACTO')}")` }}
        >
          <div className="absolute inset-0 bg-zinc-50/93 z-0"></div>
          <div className="max-w-4xl relative z-10">
            <div className="font-mono text-xs text-brand-pink uppercase tracking-widest mb-2 font-bold">{"// FORMULARIO DE CONTACTO"}</div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-4 font-sans">
              Escríbeme
            </h2>
            <p className="text-zinc-600 mb-12 max-w-xl text-base leading-relaxed">
              ¿Tienes una propuesta académica, proyecto de producción audiovisual o de programación? Hablemos de cómo integrar valor a tu equipo.
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-6 font-mono text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-zinc-700 uppercase text-xs font-bold">Nombre *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-black p-3 text-black focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-zinc-700 uppercase text-xs font-bold">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-black p-3 text-black focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-zinc-700 uppercase text-xs font-bold">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white border-2 border-black p-3 text-black focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-zinc-700 uppercase text-xs font-bold">Mensaje *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full bg-white border-2 border-black p-3 text-black focus:outline-none resize-none transition-colors"
                />
              </div>

              {submitMessage && (
                <div className={`p-4 border-2 ${submitSuccess ? 'border-brand-cyan text-brand-cyan bg-white' : 'border-brand-pink text-brand-pink bg-white'}`}>
                  {submitMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-6 py-3 bg-brand-yellow hover:bg-black hover:text-white border-2 border-black text-black font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-55"
              >
                {isSubmitting ? 'ENVIANDO...' : <><Send size={16} /> ENVIAR MENSAJE</>}
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* PROJECT DETAILS MODAL */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white border-2 border-black max-w-2xl w-full flex flex-col font-mono text-sm max-h-[90vh] overflow-y-auto shadow-neo">
            {/* Modal Title bar */}
            <div className="border-b-2 border-black p-4 flex justify-between items-center bg-zinc-50">
              <span className="text-brand-pink uppercase font-bold text-xs tracking-wider">{"PROJECT // SPECIFICATION"}</span>
              <button 
                onClick={() => setActiveProject(null)} 
                className="p-1 hover:bg-zinc-200 border-2 border-transparent hover:border-black text-zinc-600 hover:text-black cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-mono uppercase text-black tracking-tight mb-2">
                  {activeProject.title}
                </h3>
                <span className="text-zinc-500 uppercase text-xs">CATEGORÍA: {activeProject.category} {activeProject.status && `| ESTADO: ${activeProject.status}`}</span>
              </div>

              {/* Modal Project Showcase Image / Placeholder */}
              <div className="border-2 border-black bg-zinc-100 aspect-[3/2] relative flex items-center justify-center overflow-hidden shadow-neo">
                <ImageWithPlaceholder 
                  src={activeProject.image_url} 
                  alt="IMAGEN DEL PROYECTO" 
                  dimensions="1200 x 800 PX" 
                  aspectRatioClass="aspect-[3/2]"
                />
              </div>

              <div className="border-l-4 border-brand-yellow pl-4 font-sans text-zinc-700 leading-relaxed text-base">
                {activeProject.description}
              </div>

              {activeProject.link_url && (
                <div className="border-t border-zinc-200 pt-4 flex">
                  <a 
                    href={activeProject.link_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="py-3 px-6 bg-brand-yellow text-black font-bold flex items-center gap-2 border-2 border-black hover:bg-black hover:text-white transition-all shadow-neo"
                  >
                    VISITAR SITIO WEB <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
