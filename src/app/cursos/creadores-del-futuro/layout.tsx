import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creadores del Futuro · Curso de Verano Modular de 8 Semanas | Rubén Oroz',
  description: 'Programa de verano de tecnología, creatividad, IA y producción para niños y jóvenes (9 a 17 años). Videojuegos, cine, páginas web, música, inventores y estudio de TV.',
  openGraph: {
    title: 'Creadores del Futuro · Curso de Verano Modular (8 Semanas) | Rubén Oroz',
    description: '¡Cada día un proyecto terminado! 8 semanas independientes: Videojuegos, Cine con IA, Páginas Web, Música, Inventores, Estudio de TV y Superhéroes.',
    url: 'https://rubenoroz.com/cursos/creadores-del-futuro',
    siteName: 'Rubén Oroz',
    images: [
      {
        url: '/images/creadores_del_futuro.png',
        width: 1200,
        height: 630,
        alt: 'Creadores del Futuro - Curso de Verano Modular',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creadores del Futuro · Curso de Verano Modular | Rubén Oroz',
    description: 'Tecnología, Creatividad e Inteligencia Artificial para niños y jóvenes.',
    images: ['/images/creadores_del_futuro.png'],
  },
}

export default function CreadoresDelFuturoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
