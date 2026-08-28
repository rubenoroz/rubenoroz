import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programa Ejecutivo: IA para Equipos Creativos | Rubén Oroz',
  description: 'De la Idea al Sistema Multimedia: Pasa del uso aislado de chatbots a un flujo creativo estructurado para agencias, estudios y departamentos de marketing.',
  openGraph: {
    title: 'Programa Ejecutivo: IA para Equipos Creativos | Rubén Oroz',
    description: 'Capacitación in-company y ejecutiva de 8 a 12 horas: dirección de arte con IA, consistencia de marca, motion, video, prototipado web y asistentes especializados por perfil.',
    url: 'https://rubenoroz.com/cursos/ia-para-equipos-creativos',
    siteName: 'Rubén Oroz',
    images: [
      {
        url: '/images/ia_para_equipos_creativos.png',
        width: 1200,
        height: 630,
        alt: 'Programa IA para Equipos Creativos',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA para Equipos Creativos | Rubén Oroz',
    description: 'Flujo de trabajo creativo profesional con Inteligencia Artificial para agencias y estudios.',
    images: ['/images/ia_para_equipos_creativos.png'],
  },
}

export default function IAEquiposCreativosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
