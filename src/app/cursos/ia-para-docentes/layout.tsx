import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taller: Desarrollo de Apps Web para Docentes con IA | Rubén Oroz',
  description: 'Diseña y genera aplicaciones web educativas a la medida con IA y No-Code sin saber programar en 4 horas. Metodología de las 5 preguntas y Prompt Maestro.',
  openGraph: {
    title: 'Taller: Desarrollo de Apps Web para Docentes con IA | Rubén Oroz',
    description: 'Aprende a transformar problemas del aula (rúbricas, asistencias, entregas, proyectos) en aplicaciones web funcionales con IA y No-Code.',
    url: 'https://rubenoroz.com/cursos/ia-para-docentes',
    siteName: 'Rubén Oroz',
    images: [
      {
        url: '/images/ia_para_docentes.png',
        width: 1200,
        height: 630,
        alt: 'Taller Desarrollo de Apps Web para Docentes con IA',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taller: Desarrollo de Apps Web para Docentes | Rubén Oroz',
    description: 'Crea aplicaciones educativas funcionales con IA sin programar.',
    images: ['/images/ia_para_docentes.png'],
  },
}

export default function IAParaDocentesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
