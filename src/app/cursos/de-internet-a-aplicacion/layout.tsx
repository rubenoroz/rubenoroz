import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taller: De Internet a Aplicación | Rubén Oroz',
  description: 'Convierte tu página web estática en una aplicación real con base de datos en la nube (Supabase), CRUD completo, notificaciones por correo (Resend) y despliegue en Vercel en 4 horas.',
  openGraph: {
    title: 'Taller: De Internet a Aplicación | Rubén Oroz',
    description: 'Aprende a conectar tu web a una base de datos en la nube (Supabase), crear formularios que guardan información, editar y borrar registros, y enviar correos automáticos en 4 horas.',
    url: 'https://rubenoroz.com/cursos/de-internet-a-aplicacion',
    siteName: 'Rubén Oroz',
    images: [
      {
        url: '/images/de_internet_a_aplicacion.png',
        width: 1200,
        height: 630,
        alt: 'Taller De Internet a Aplicación',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taller: De Internet a Aplicación | Rubén Oroz',
    description: 'Convierte tu web estática en una aplicación con base de datos en la nube y notificaciones en 4 horas.',
    images: ['/images/de_internet_a_aplicacion.png'],
  },
}

export default function DeInternetAAplicacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
