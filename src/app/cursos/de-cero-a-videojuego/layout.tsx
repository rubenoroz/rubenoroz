import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taller: De Cero a Videojuego | Rubén Oroz',
  description: 'Diseña, programa, sonoriza y publica tu propio videojuego de plataformas con IA en 4 horas. Sin experiencia previa.',
  openGraph: {
    title: 'Taller: De Cero a Videojuego | Rubén Oroz',
    description: 'Diseña, programa, sonoriza y publica tu propio videojuego de plataformas con IA en 4 horas. Sales con un juego real publicado en internet.',
    url: 'https://rubenoroz.com/cursos/de-cero-a-videojuego',
    siteName: 'Rubén Oroz',
    images: [
      {
        url: '/images/de_cero_a_videojuego.png',
        width: 1200,
        height: 630,
        alt: 'Taller De Cero a Videojuego',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taller: De Cero a Videojuego | Rubén Oroz',
    description: 'Diseña, programa, sonoriza y publica tu propio videojuego de plataformas con IA en 4 horas.',
    images: ['/images/de_cero_a_videojuego.png'],
  },
}

export default function DeCeroAVideojuegoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
