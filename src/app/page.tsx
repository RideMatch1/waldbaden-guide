import Link from 'next/link'
import { TreePine, Leaf, Heart, Star, BookOpen, ShoppingBag, ArrowRight, Check, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Stressabbau',
    description: 'Waldbaden senkt nachweislich Cortisol und reduziert Stress und Angstzustände.',
  },
  {
    icon: Heart,
    title: 'Immunstärkung',
    description: 'Phytonzide der Bäume stärken das Immunsystem und aktivieren Killerzellen.',
  },
  {
    icon: Sparkles,
    title: 'Achtsamkeit',
    description: 'Fördert Präsenz im Moment und verbessert das allgemeine Wohlbefinden.',
  },
]

const products = [
  {
    title: 'Waldbaden Malbuch für Erwachsene',
    description: 'Heilende Waldszenen zum Ausmalen – perfekt für Entspannung',
    price: '12,99 €',
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=500&fit=crop',
    link: '#',
    badge: 'Bestseller',
  },
  {
    title: 'Waldgeister & Baumseelen',
    description: 'Mystische Waldwelten zum kreativen Ausmalen',
    price: '14,99 €',
    rating: 4.9,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&h=500&fit=crop',
    link: '#',
    badge: 'Neu',
  },
  {
    title: 'Shinrin-Yoku Tagebuch',
    description: 'Begleiter für achtsame Waldmomente und Naturerlebnisse',
    price: '16,99 €',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=500&fit=crop',
    link: '#',
  },
]

const testimonials = [
  {
    quote: 'Das Malbuch hat mir geholfen, den Stress des Alltags loszulassen. Jede Seite ist wie ein kleiner Waldspaziergang.',
    author: 'Maria K.',
    role: 'Yogalehrerin',
    rating: 5,
  },
  {
    quote: 'Endlich ein Buch, das die Magie des deutschen Waldes einfängt. Die Illustrationen sind wunderschön!',
    author: 'Thomas H.',
    role: 'Naturliebhaber',
    rating: 5,
  },
  {
    quote: 'Perfekte Ergänzung zu meinen Waldbaden-Sitzungen. Ich verschenke es auch regelmäßig.',
    author: 'Anna S.',
    role: 'Wellness-Coach',
    rating: 5,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/70 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-600/20 backdrop-blur rounded-full text-forest-200 text-sm mb-6">
              <TreePine className="w-4 h-4" />
              <span>Shinrin-Yoku · Die japanische Kunst des Waldbadens</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Entdecke die<br />
              <span className="text-forest-400">heilende Kraft</span><br />
              des Waldes
            </h1>
            
            <p className="text-xl text-forest-100 leading-relaxed mb-8">
              Waldbaden (Shinrin-Yoku) ist mehr als ein Spaziergang – es ist eine 
              Therapie für Körper und Seele. Finde innere Ruhe und stärke dein 
              Immunsystem durch achtsame Waldmomente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/was-ist-waldbaden"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest-600 text-white font-semibold rounded-full hover:bg-forest-500 transition-all hover:scale-105"
              >
                <Leaf className="w-5 h-5" />
                Was ist Waldbaden?
              </Link>
              <Link
                href="/produkte"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
              >
                <ShoppingBag className="w-5 h-5" />
                Produkte entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-forest-600 font-medium text-sm uppercase tracking-wider">Wissenschaftlich belegt</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest-900 mt-2">
              Die Vorteile des Waldbadens
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Studien aus Japan und weltweit belegen: Zeit im Wald verbessert messbar unsere Gesundheit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-forest-600" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-forest-600 font-medium text-sm uppercase tracking-wider">Unsere Empfehlungen</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest-900 mt-2">
                Waldbaden-Produkte
              </h2>
            </div>
            <Link
              href="/produkte"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-forest-600 font-medium hover:text-forest-700 transition-colors"
            >
              Alle Produkte <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="product-card bg-white rounded-2xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-forest-600 text-white text-xs font-semibold rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <h3 className="font-semibold text-forest-900 mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-forest-700">{product.price}</span>
                    <a
                      href={product.link}
                      className="amazon-btn px-4 py-2 rounded-lg text-sm"
                    >
                      Bei Amazon kaufen*
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-forest-400 font-medium text-sm uppercase tracking-wider">Kundenstimmen</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
              Was unsere Leser sagen
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-forest-900/50 backdrop-blur rounded-2xl p-8 border border-forest-800"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-forest-100 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-forest-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest-900 mb-4">
            Bereit für dein erstes Waldbad?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lerne die Grundlagen des Shinrin-Yoku und starte noch heute 
            deine Reise zu mehr Achtsamkeit und Naturverbundenheit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waldbaden-lernen"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest-600 text-white font-semibold rounded-full hover:bg-forest-700 transition-all"
            >
              <TreePine className="w-5 h-5" />
              Kostenlose Anleitung
            </Link>
            <Link
              href="/malbuecher"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-forest-700 font-semibold rounded-full hover:bg-forest-50 transition-all border-2 border-forest-200"
            >
              <Sparkles className="w-5 h-5" />
              Malbücher entdecken
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
