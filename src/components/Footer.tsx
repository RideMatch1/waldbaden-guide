import Link from 'next/link'
import { TreePine, Mail, Heart } from 'lucide-react'

const footerLinks = {
  navigation: [
    { href: '/was-ist-waldbaden', label: 'Was ist Waldbaden?' },
    { href: '/produkte', label: 'Produkte' },
    { href: '/malbuecher', label: 'Malbücher' },
    { href: '/waldbaden-lernen', label: 'Anleitung' },
    { href: '/blog', label: 'Blog' },
  ],
  rechtliches: [
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
    { href: '/agb', label: 'AGB' },
  ],
  kontakt: [
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/faq', label: 'FAQ' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-semibold">Waldbaden Guide</span>
            </Link>
            <p className="text-forest-300 text-sm leading-relaxed">
              Entdecke die heilende Kraft des Waldes. Dein Portal für Shinrin-Yoku, 
              achtsame Naturerlebnisse und alles rund ums Waldbaden.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-forest-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold text-white mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-forest-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt & Hilfe</h4>
            <ul className="space-y-2">
              {footerLinks.kontakt.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-forest-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-forest-300 text-sm">
              <Mail className="w-4 h-4" />
              <span>info@waldbaden-guide.de</span>
            </div>
          </div>
        </div>

        {/* Affiliate Hinweis */}
        <div className="mt-12 pt-8 border-t border-forest-800">
          <p className="text-forest-400 text-xs text-center mb-4">
            * Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. 
            Die Preise können sich seit der letzten Aktualisierung geändert haben.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-forest-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-forest-400 text-sm">
            © {new Date().getFullYear()} Waldbaden Guide. Alle Rechte vorbehalten.
          </p>
          <p className="text-forest-400 text-sm flex items-center gap-1">
            Mit <Heart className="w-4 h-4 text-red-400" /> für die Natur gemacht
          </p>
        </div>
      </div>
    </footer>
  )
}
