import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export const metadata: Metadata = {
  title: 'Waldbaden Guide - Shinrin-Yoku & Naturheilung',
  description: 'Entdecke die heilende Kraft des Waldes. Waldbaden (Shinrin-Yoku) Anleitungen, Produkte und Tipps für ein achtsames Leben in der Natur.',
  keywords: 'Waldbaden, Shinrin-Yoku, Naturheilung, Waldtherapie, Achtsamkeit, Malbuch, Wald, Natur, Wellness',
  authors: [{ name: 'Waldbaden Guide' }],
  openGraph: {
    title: 'Waldbaden Guide - Shinrin-Yoku & Naturheilung',
    description: 'Entdecke die heilende Kraft des Waldes. Waldbaden Anleitungen, Produkte und Tipps.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Waldbaden Guide',
              description: 'Waldbaden (Shinrin-Yoku) Anleitungen, Produkte und Tipps für ein achtsames Leben in der Natur.',
              url: 'https://waldbaden-guide.vercel.app',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://waldbaden-guide.vercel.app/suche?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Navigation />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
