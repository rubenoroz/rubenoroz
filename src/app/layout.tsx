import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rubenoroz.com"),
  title: "Rubén Oroz | Tecnología Aplicada, IA y Producción Audiovisual",
  description: "Sitio web personal y portafolio de Rubén Oroz, experto en tecnología aplicada, integración de IA, profesor universitario de producción audiovisual, productor de televisión y música.",
  keywords: ["Rubén Oroz", "Tecnología Aplicada", "Inteligencia Artificial", "Producción Audiovisual", "ABP", "Jalisco Rockea", "ANGULAR", "UNIVA", "VFX Project Manager", "closerlens.com", "fluxiorsv.com"],
  authors: [{ name: "Rubén Oroz" }],
  openGraph: {
    title: "Rubén Oroz | Tecnología Aplicada, IA y Producción Audiovisual",
    description: "Sitio web personal y portafolio de Rubén Oroz. Académico, productor audiovisual e integrador de Inteligencia Artificial.",
    url: "https://rubenoroz.com",
    siteName: "Rubén Oroz",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rubén Oroz | Portafolio",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubén Oroz | Tecnología Aplicada, IA y Producción Audiovisual",
    description: "Sitio web personal y portafolio de Rubén Oroz.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon-bco.png",
      },
      {
        url: "/favicon-blk.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-bco.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/favicon-blk.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans selection:bg-brand-yellow selection:text-black">
        {children}
      </body>
    </html>
  );
}
