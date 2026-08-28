import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taller: De Cero a Video con IA | Rubén Oroz',
  description: 'Produce un video completo de 20 a 45 segundos con Inteligencia Artificial generativa en 4 horas: guion por planos, keyframes consistentes, animación, voz, música y montaje en MP4.',
  openGraph: {
    title: 'Taller: De Cero a Video con IA | Rubén Oroz',
    description: 'Aprende el flujo audiovisual profesional con IA: genera guion por planos, keyframes consistentes, animación imagen-a-video, diseño sonoro y montaje final en 4 horas.',
    url: 'https://rubenoroz.com/cursos/de-cero-a-video',
    siteName: 'Rubén Oroz',
    images: [
      {
        url: '/images/de_cero_a_video.png',
        width: 1200,
        height: 630,
        alt: 'Taller De Cero a Video con IA',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taller: De Cero a Video con IA | Rubén Oroz',
    description: 'Produce un video completo con Inteligencia Artificial generativa en 4 horas.',
    images: ['/images/de_cero_a_video.png'],
  },
}

export default function DeCeroAVideoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
