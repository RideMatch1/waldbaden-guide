import { Metadata } from 'next'
import Link from 'next/link'
import { TreePine, Clock, MapPin, Eye, Ear, Wind, Hand, Heart, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Waldbaden lernen - Schritt für Schritt Anleitung | Waldbaden Guide',
  description: 'Lerne Waldbaden (Shinrin-Yoku) mit unserer kostenlosen Anleitung. Praktische Übungen, Techniken und Tipps für Anfänger und Fortgeschrittene.',
}

const steps = [
  {
    number: '01',
    title: 'Den richtigen Ort finden',
    icon: MapPin,
    content: 'Wähle einen Wald mit möglichst wenig Lärm. Ein Mischwald mit verschiedenen Baumarten ist ideal. Du brauchst keine Wanderstrecke – ein kleiner Waldabschnitt reicht völlig aus.',
    tips: ['Vermeide stark frequentierte Wege', 'Nadelbäume setzen besonders viele Phytonzide frei', 'Gewässer im Wald verstärken den Effekt']
  },
  {
    number: '02',
    title: 'Zeit nehmen',
    icon: Clock,
    content: 'Plane mindestens 2 Stunden ein. Waldbaden funktioniert nicht im Vorbeigehen. Lass Uhr und Handy hinter dir – oder schalte es aus. Zeit verliert hier ihre Bedeutung.',
    tips: ['Keine Fitnessziele setzen', 'Keine Strecke planen', 'Morgens oder nachmittags ideal']
  },
  {
    number: '03',
    title: 'Mit den Sinnen ankommen',
    icon: Eye,
    content: 'Bleibe zunächst stehen. Schließe die Augen. Atme tief ein. Was hörst du? Was riechst du? Was spürst du auf der Haut? Dieser Moment des Ankommens ist essenziell.',
    tips: ['3 tiefe Atemzüge zum Start', 'Schultern bewusst entspannen', 'Gedanken ziehen lassen wie Wolken']
  },
  {
    number: '04',
    title: 'Langsam gehen',
    icon: TreePine,
    content: 'Gehe so langsam, dass du jeden Schritt bewusst setzen kannst. Spüre den Boden unter deinen Füßen. Lass deinen Blick schweifen, ohne ein Ziel zu fixieren.',
    tips: ['Maximal 200 Meter pro Stunde', 'Barfuß verstärkt das Erlebnis', 'Pausen sind erwünscht']
  },
]

const exercises = [
  {
    title: 'Die Baumumarmung',
    duration: '5-10 Min',
    description: 'Suche dir einen Baum, der dich anspricht. Lege deine Hände auf die Rinde oder umarme ihn. Spüre die Lebendigkeit unter deinen Händen.',
    icon: Hand
  },
  {
    title: 'Wald-Meditation',
    duration: '15-20 Min',
    description: 'Setze oder lege dich hin. Schließe die Augen und lausche nur den Waldgeräuschen. Lass jeden Gedanken gehen.',
    icon: Heart
  },
  {
    title: 'Achtsames Hören',
    duration: '10 Min',
    description: 'Wie viele verschiedene Geräusche kannst du unterscheiden? Vögel, Wind, Rascheln... Zähle nicht, erlebe nur.',
    icon: Ear
  },
  {
    title: 'Atem-Übung',
    duration: '5 Min',
    description: 'Atme bewusst die Waldluft ein. Stelle dir vor, wie die Phytonzide deine Lungen füllen und heilen.',
    icon: Wind
  },
]

export default function WaldbadenLernenPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-forest-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-forest-300 font-medium text-sm uppercase tracking-wider">Kostenlose Anleitung</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mt-2 mb-6">
              Waldbaden lernen
            </h1>
            <p className="text-xl text-forest-100">
              Folge dieser Schritt-für-Schritt Anleitung und erlebe die heilende Kraft 
              des Waldes. Keine Vorkenntnisse nötig – nur Offenheit.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-forest-700">2+ Stunden</p>
              <p className="text-sm text-gray-600">Ideale Dauer</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-forest-700">Keine</p>
              <p className="text-sm text-gray-600">Ausrüstung nötig</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-forest-700">Jederzeit</p>
              <p className="text-sm text-gray-600">Jahreszeit</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-forest-700">Kostenlos</p>
              <p className="text-sm text-gray-600">Keine Kosten</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-forest-900 text-center mb-12">
            Die 4 Grundschritte
          </h2>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-forest-600">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-forest-600" />
                      <h3 className="text-xl font-semibold text-forest-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.content}</p>
                    <div className="bg-forest-50 rounded-xl p-4">
                      <p className="text-sm font-medium text-forest-700 mb-2">💡 Tipps:</p>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-forest-600 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercises */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-forest-900 mb-4">
              Übungen zum Ausprobieren
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diese Übungen kannst du in dein Waldbaden integrieren. Probiere aus, was dir gut tut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exercises.map((exercise, index) => (
              <div key={index} className="bg-forest-50 rounded-2xl p-6 border border-forest-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <exercise.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-forest-900">{exercise.title}</h3>
                      <span className="text-xs bg-forest-200 text-forest-700 px-2 py-0.5 rounded-full">{exercise.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{exercise.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Vertiefe dein Waldbaden-Erlebnis
          </h2>
          <p className="text-xl text-forest-100 mb-8">
            Unsere Malbücher sind die perfekte Ergänzung – bringe den Wald nach Hause.
          </p>
          <Link
            href="/malbuecher"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest-700 font-semibold rounded-full hover:bg-forest-50 transition-all"
          >
            Malbücher entdecken <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
