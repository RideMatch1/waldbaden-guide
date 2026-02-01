import { Metadata } from 'next'
import Link from 'next/link'
import { Star, ExternalLink, Palette, Sparkles, Heart, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Waldbaden Malbücher - Heilende Waldszenen zum Ausmalen | Waldbaden Guide',
  description: 'Entdecke unsere Waldbaden Malbücher für Erwachsene: Waldmotive, Baumszenen und mystische Naturmotive. Kreative Entspannung trifft Shinrin-Yoku.',
}

const benefits = [
  { icon: Brain, title: 'Stressabbau', text: 'Ausmalen aktiviert den meditativen Zustand und beruhigt das Nervensystem.' },
  { icon: Heart, title: 'Achtsamkeit', text: 'Volle Konzentration auf den Moment – wie beim echten Waldbaden.' },
  { icon: Sparkles, title: 'Kreativität', text: 'Wecke deine kreative Seite und erschaffe deine eigenen Waldwelten.' },
  { icon: Palette, title: 'Therapie', text: 'Kunsttherapie trifft Naturtherapie für maximale Entspannung.' },
]

const malbuecher = [
  {
    title: 'Waldbaden Malbuch für Erwachsene',
    subtitle: 'Heilende Waldszenen zum Ausmalen',
    price: '12,99 €',
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=800&fit=crop',
    amazonLink: 'https://www.amazon.de/s?k=waldbaden+malbuch+erwachsene&tag=waldbadenguide-21',
    badge: 'Bestseller',
    pages: 50,
    features: ['50 detailreiche Waldmotive', 'Einseitig bedruckt', 'Hochwertiges 120g Papier', 'Ideal für Buntstifte & Fineliner'],
  },
  {
    title: 'Wald & Natur Malbuch',
    subtitle: 'Mystische Waldwelten zum Ausmalen',
    price: '14,99 €',
    rating: 4.9,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&h=800&fit=crop',
    amazonLink: 'https://www.amazon.de/s?k=wald+natur+malbuch+erwachsene&tag=waldbadenguide-21',
    badge: 'Neu',
    pages: 60,
    features: ['60 mystische Motive', 'Mit Hintergrundgeschichten', 'Premium Papierqualität', 'Auch für Aquarellstifte'],
  },
  {
    title: 'Der Deutsche Wald',
    subtitle: 'Achtsame Naturmomente zum Ausmalen',
    price: '13,99 €',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&h=800&fit=crop',
    amazonLink: 'https://www.amazon.de/s?k=deutscher+wald+malbuch+natur&tag=waldbadenguide-21',
    pages: 45,
    features: ['45 heimische Waldszenen', 'Mit Baumkunde-Fakten', 'Entspannende Komplexität', 'Perfekt zum Verschenken'],
  },
  {
    title: 'Jahreszeiten im Wald',
    subtitle: 'Der Wald im Wandel der Zeit',
    price: '15,99 €',
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    amazonLink: 'https://www.amazon.de/s?k=jahreszeiten+wald+malbuch&tag=waldbadenguide-21',
    badge: 'Premium',
    pages: 80,
    features: ['80 Motive in 4 Kapiteln', 'Frühling, Sommer, Herbst, Winter', 'Extra dickes Papier', 'Mit Achtsamkeitsübungen'],
  },
]

export default function MalbuecherPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-950/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-forest-300 font-medium text-sm uppercase tracking-wider mb-4">
              <Palette className="w-4 h-4" />
              Kreative Entspannung
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Waldbaden<br />Malbücher
            </h1>
            <p className="text-xl text-forest-100 leading-relaxed">
              Bringe die heilende Kraft des Waldes nach Hause. Unsere Malbücher 
              verbinden meditative Ausmalkunst mit der Philosophie des Shinrin-Yoku.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-bold text-forest-900">
              Warum Malbücher?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-forest-600" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Hinweis */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-gray-600 text-center">
            🎨 Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Die Preise können variieren.
          </p>
        </div>
      </div>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {malbuecher.map((book, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className="w-full lg:w-2/5">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    {book.badge && (
                      <span className={`absolute top-4 left-4 px-4 py-1.5 text-white text-sm font-semibold rounded-full ${
                        book.badge === 'Bestseller' ? 'bg-orange-500' :
                        book.badge === 'Neu' ? 'bg-forest-600' :
                        'bg-purple-600'
                      }`}>
                        {book.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-3/5">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-gray-600 ml-2">
                      {book.rating} ({book.reviews} Bewertungen)
                    </span>
                  </div>

                  <h2 className="text-2xl font-display font-bold text-forest-900 mb-2">
                    {book.title}
                  </h2>
                  <p className="text-lg text-forest-600 mb-4">{book.subtitle}</p>
                  <p className="text-gray-600 mb-6">{book.pages} Seiten voller Magie</p>

                  <ul className="space-y-2 mb-6">
                    {book.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-forest-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-forest-700">ab {book.price}</span>
                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="amazon-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base"
                    >
                      Auf Amazon suchen* <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-forest-900 text-center mb-8">
            Tipps für dein Malbuch-Erlebnis
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center font-semibold text-forest-700">1</span>
                <p><strong>Schaffe eine ruhige Atmosphäre:</strong> Waldgeräusche im Hintergrund, vielleicht ätherische Öle mit Waldduft.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center font-semibold text-forest-700">2</span>
                <p><strong>Keine Eile:</strong> Es geht nicht ums Fertigwerden. Genieße jeden Strich.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center font-semibold text-forest-700">3</span>
                <p><strong>Folge deiner Intuition:</strong> Es gibt keine falschen Farben. Der Wald ist vielfältig.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center font-semibold text-forest-700">4</span>
                <p><strong>Kombiniere es:</strong> Mal nach einem echten Waldspaziergang – die Inspiration ist frisch!</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            Mehr über Waldbaden erfahren?
          </h2>
          <p className="text-forest-200 mb-6">
            Lerne die Grundlagen des Waldbadens mit unserer kostenlosen Anleitung.
          </p>
          <Link
            href="/waldbaden-lernen/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-forest-700 font-medium rounded-full hover:bg-forest-50 transition-colors"
          >
            Zur Anleitung
          </Link>
        </div>
      </section>
    </main>
  )
}
