'use client'

import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setShow(true), 1500)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-forest-950 text-white rounded-2xl shadow-2xl p-6 border border-forest-800">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-forest-800 rounded-full flex items-center justify-center">
            <Cookie className="w-6 h-6 text-forest-300" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">🌲 Cookies im Wald</h3>
            <p className="text-forest-300 text-sm leading-relaxed">
              Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und Affiliate-Links zu tracken. 
              Durch die Nutzung unserer Website stimmen Sie unserer{' '}
              <a href="/datenschutz" className="underline hover:text-white">Datenschutzerklärung</a> zu.
            </p>
          </div>
          <button
            onClick={() => setShow(false)}
            className="flex-shrink-0 p-1 hover:bg-forest-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-forest-400" />
          </button>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            onClick={decline}
            className="px-5 py-2.5 text-sm font-medium text-forest-300 hover:text-white hover:bg-forest-800 rounded-lg transition-colors"
          >
            Nur notwendige
          </button>
          <button
            onClick={accept}
            className="px-6 py-2.5 text-sm font-medium bg-forest-600 text-white rounded-lg hover:bg-forest-500 transition-colors"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
