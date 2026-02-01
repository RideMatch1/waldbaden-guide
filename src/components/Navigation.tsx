'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, TreePine, ShoppingBag, BookOpen, Leaf } from 'lucide-react'

const navItems = [
  { href: '/was-ist-waldbaden', label: 'Was ist Waldbaden?', icon: Leaf },
  { href: '/produkte', label: 'Produkte', icon: ShoppingBag },
  { href: '/malbuecher', label: 'Malbücher', icon: BookOpen },
  { href: '/waldbaden-lernen', label: 'Anleitung', icon: TreePine },
  { href: '/blog', label: 'Blog' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center group-hover:bg-forest-700 transition-colors">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-semibold text-forest-900">Waldbaden</span>
              <span className="font-display text-xl font-light text-forest-600"> Guide</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-forest-700 hover:bg-forest-50 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-2 px-5 py-2.5 bg-forest-600 text-white text-sm font-medium rounded-full hover:bg-forest-700 transition-colors"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-forest-50 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-forest-100">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-forest-50 rounded-lg transition-colors"
              >
                {item.icon && <item.icon className="w-5 h-5 text-forest-600" />}
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 mt-2 bg-forest-600 text-white text-center font-medium rounded-lg"
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
