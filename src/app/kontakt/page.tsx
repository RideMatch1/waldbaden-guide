import { Metadata } from 'next'
import { Mail, MessageSquare, TreePine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt | Waldbaden Guide',
  description: 'Kontaktiere uns bei Fragen zu Waldbaden, Produkten oder Kooperationen. Wir freuen uns auf deine Nachricht!',
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-forest-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <TreePine className="w-12 h-12 text-forest-300 mx-auto mb-4" />
            <h1 className="text-4xl font-display font-bold text-white mb-4">Kontakt</h1>
            <p className="text-xl text-forest-100">
              Hast du Fragen zum Waldbaden oder zu unseren Produkten? Wir freuen uns auf deine Nachricht!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-forest-900 mb-6">Schreib uns</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent" placeholder="Dein Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent" placeholder="deine@email.de" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
                  <select id="subject" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent">
                    <option>Allgemeine Frage</option>
                    <option>Produktfrage</option>
                    <option>Kooperationsanfrage</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent" placeholder="Deine Nachricht..." />
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-forest-600 text-white font-medium rounded-xl hover:bg-forest-700 transition-colors">
                  Nachricht senden
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-forest-900 mb-6">Weitere Kontaktmöglichkeiten</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-forest-50 rounded-xl">
                  <Mail className="w-6 h-6 text-forest-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-forest-900">E-Mail</h3>
                    <p className="text-gray-600">info@waldbaden-guide.de</p>
                    <p className="text-sm text-gray-500 mt-1">Antwort innerhalb von 24-48 Stunden</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-forest-50 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-forest-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-forest-900">FAQ</h3>
                    <p className="text-gray-600">Vielleicht findest du deine Antwort in unseren häufig gestellten Fragen.</p>
                    <a href="/faq" className="text-forest-600 hover:underline text-sm font-medium">Zu den FAQ →</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-forest-900 text-white rounded-2xl">
                <h3 className="font-semibold mb-2">🌲 Kooperationen</h3>
                <p className="text-forest-200 text-sm">
                  Du bist Waldbaden-Therapeut, Autor oder Hersteller von Naturprodukten? 
                  Wir freuen uns über Kooperationsanfragen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
