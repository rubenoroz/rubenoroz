import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taller: De Cero a IA | Rubén Oroz',
  description: 'Usa la inteligencia artificial generativa de forma práctica para resolver tareas reales de trabajo y de negocio en 4 horas. Sin conocimientos técnicos previos.',
  openGraph: {
    title: 'Taller: De Cero a IA | Rubén Oroz',
    description: 'Aprende a usar ChatGPT, Claude y Gemini de forma práctica para resolver tareas reales de tu trabajo o negocio en 4 horas.',
    url: 'https://rubenoroz.com/cursos/de-cero-a-ia',
    siteName: 'Rubén Oroz',
    images: [
      {
        url: '/images/de_cero_a_ia.png',
        width: 1200,
        height: 630,
        alt: 'Taller De Cero a IA',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taller: De Cero a IA | Rubén Oroz',
    description: 'Usa la IA generativa de forma práctica para resolver tareas reales en 4 horas.',
    images: ['/images/de_cero_a_ia.png'],
  },
}

export default function DeCeroAIALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
