import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taller In-Company: IA Aplicada al Trabajo | Rubén Oroz',
  description:
    'Capacitación práctica in-company para empresas: identifica oportunidades reales de mejora con IA, diseña usos responsables y convierte tareas repetitivas en procesos medibles y verificables.',
  openGraph: {
    title: 'Taller In-Company: IA Aplicada al Trabajo | Rubén Oroz',
    description:
      'Capacitación práctica para empresas de 20 a 250 colaboradores. Metodología: Problema → Proceso → IA → Implementación → Verificación → Mejora.',
    url: 'https://rubenoroz.com/cursos/ia-aplicada-al-trabajo',
    siteName: 'Rubén Oroz',
    images: [
      {
        url: '/images/ia_aplicada_al_trabajo.png',
        width: 1200,
        height: 630,
        alt: 'Taller In-Company IA Aplicada al Trabajo',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA Aplicada al Trabajo | Rubén Oroz',
    description:
      'Programa de capacitación ejecutiva in-company para optimizar procesos y gobernanza de IA en equipos de trabajo.',
    images: ['/images/ia_aplicada_al_trabajo.png'],
  },
}

export default function IAAplicadaAlTrabajoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
