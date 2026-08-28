import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programa Profesional: De la Fuente al Corte (IA para Cine Documental) | Rubén Oroz',
  description: 'Programa profesional de 16 horas: integra Inteligencia Artificial en el flujo documental completo (investigación, transcripción, archivo, montaje y ética) sin sustituir la evidencia.',
  openGraph: {
    title: 'De la Fuente al Corte: IA para Cine Documental | Rubén Oroz',
    description: 'Programa profesional de 16 horas para realizadores, docentes y productores. De la investigación al teaser documental con rigor ético y metodológico.',
    url: 'https://rubenoroz.com/cursos/ia-para-cine-documental',
    siteName: 'Rubén Oroz',
    images: [
      {
        url: '/images/ia_cine_documental.png',
        width: 1200,
        height: 630,
        alt: 'Programa De la Fuente al Corte - IA para Cine Documental',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'De la Fuente al Corte: IA para Cine Documental | Rubén Oroz',
    description: 'Flujo documental profesional con Inteligencia Artificial y ética editorial.',
    images: ['/images/ia_cine_documental.png'],
  },
}

export default function IACineDocumentalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
