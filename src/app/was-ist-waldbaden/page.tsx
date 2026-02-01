import { Metadata } from 'next'
import Link from 'next/link'
import { TreePine, Heart, Brain, Leaf, Wind, Sun, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Was ist Waldbaden? Shinrin-Yoku erklärt | Waldbaden Guide',
  description: 'Erfahre alles über Waldbaden (Shinrin-Yoku): Geschichte, wissenschaftliche Vorteile, Wirkung auf Körper und Geist. Die japanische Naturtherapie verständlich erklärt.',
}

const benefits = [
  { icon: Heart, title: 'Herzgesundheit', text: 'Senkt Blutdruck und Herzfrequenz nachweislich' },
  { icon: Brain, title: 'Mentale Gesundheit', text: 'Reduziert Stress, Angst und depressive Symptome' },
  { icon: Leaf, title: 'Immunsystem', text: 'Phytonzide aktivieren natürliche Killerzellen' },
  { icon: Wind, title: 'Atmung', text: 'Verbessert Lungenfunktion durch saubere Waldluft' },
  { icon: Sun, title: 'Energie', text: 'Steigert Vitalität und Lebensfreude' },
]

export default function WasIstWaldbaden() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-forest-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-forest-300 font-medium text-sm uppercase tracking-wider">Die Grundlagen</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mt-2 mb-6">
              Was ist Waldbaden?
            </h1>
            <p className="text-xl text-forest-100 leading-relaxed">
              Waldbaden – auf Japanisch &ldquo;Shinrin-Yoku&rdquo; (森林浴) – bedeutet wörtlich 
              &ldquo;Baden in der Waldatmosphäre&rdquo;. Es ist eine achtsame Praxis, die uns 
              hilft, die heilende Kraft der Natur zu nutzen.
            </p>
          </div>
        </div>
      </section>

      {/* Geschichte */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-forest-900 mb-6">
                Die Geschichte des Shinrin-Yoku
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  1982 prägte das japanische Forstministerium den Begriff &ldquo;Shinrin-Yoku&rdquo; 
                  als Teil einer nationalen Gesundheitskampagne. Japan erkannte früh: Der moderne 
                  Lebensstil trennt uns von der Natur – mit Folgen für unsere Gesundheit.
                </p>
                <p>
                  Seitdem haben japanische Wissenschaftler die Wirkung des Waldbadens intensiv 
                  erforscht. Die Ergebnisse waren so beeindruckend, dass Waldbaden heute in Japan 
                  als anerkannte Therapieform gilt und von Ärzten verschrieben wird.
                </p>
                <p>
                  In Deutschland verbinden wir diese Erkenntnisse mit unserer eigenen Waldkultur. 
                  Der &ldquo;Deutsche Wald&rdquo; hat eine tiefe kulturelle Bedeutung – Waldbaden 
                  bringt uns diese Verbindung zurück.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80"
                alt="Sonnenstrahlen im Wald"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wissenschaft */}
      <section className="py-20 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-forest-900 mb-4">
              Wissenschaftlich bewiesene Vorteile
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zahlreiche Studien belegen die positiven Effekte von Waldbaden auf Körper und Geist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-forest-600" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-forest-200">
            <h3 className="text-xl font-semibold text-forest-900 mb-4">Die Schlüsselstudien</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  <strong>Dr. Qing Li (2010):</strong> 2 Stunden Waldbaden erhöhen NK-Zellen (Killerzellen) um 50% für bis zu 30 Tage.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  <strong>Universität Chiba (2011):</strong> Signifikante Senkung von Cortisol, Blutdruck und Puls nach 15 Minuten im Wald.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  <strong>Stanford (2015):</strong> Naturaufenthalte reduzieren grüblerisches Denken und Aktivität in der präfrontalen Kortex.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Der Unterschied */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-forest-900 mb-6">
              Waldbaden vs. Waldspaziergang
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Der wichtigste Unterschied: Beim Waldbaden geht es nicht um Fitness oder ein Ziel. 
              Es geht um achtsames Erleben mit allen Sinnen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">❌ Normaler Spaziergang</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Zielorientiert (Strecke, Zeit, Schritte)</li>
                <li>• Gedanken schweifen ab</li>
                <li>• Oft mit Musik oder Podcast</li>
                <li>• Schnelles Tempo</li>
                <li>• Sport & Fitness im Fokus</li>
              </ul>
            </div>
            <div className="bg-forest-50 rounded-2xl p-8 border-2 border-forest-200">
              <h3 className="text-xl font-semibold text-forest-700 mb-4">✓ Waldbaden</h3>
              <ul className="space-y-3 text-forest-800">
                <li>• Prozessorientiert (das Erleben zählt)</li>
                <li>• Volle Präsenz im Moment</li>
                <li>• Alle Sinne aktiv einsetzen</li>
                <li>• Langsames, achtsames Tempo</li>
                <li>• Heilung & Entspannung im Fokus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TreePine className="w-12 h-12 text-forest-300 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Bereit, es selbst zu erleben?
          </h2>
          <p className="text-xl text-forest-100 mb-8">
            Lerne Schritt für Schritt, wie du Waldbaden in dein Leben integrierst.
          </p>
          <Link
            href="/waldbaden-lernen"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest-700 font-semibold rounded-full hover:bg-forest-50 transition-all"
          >
            Zur Anleitung <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
