import { Metadata } from 'next'
import { Star, ExternalLink, TreePine, Filter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Waldbaden Produkte - Malbücher, Bücher & Zubehör | Waldbaden Guide',
  description: 'Entdecke die besten Waldbaden-Produkte: Malbücher, Ratgeber, Tagebücher und Zubehör für dein Shinrin-Yoku Erlebnis. Mit Amazon Affiliate Links.',
}

const products = [
  {
    category: 'Malbücher',
    items: [
      {
        title: 'Waldbaden Malbuch für Erwachsene',
        subtitle: 'Heilende Waldszenen zum Ausmalen',
        price: '12,99 €',
        rating: 4.8,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=500&fit=crop',
        amazonLink: 'https://amazon.de/dp/example1',
        badge: 'Bestseller',
        description: '50 wunderschöne Waldmotive zum Entspannen und Loslassen.'
      },
      {
        title: 'Waldgeister & Baumseelen',
        subtitle: 'Mystische Waldwelten',
        price: '14,99 €',
        rating: 4.9,
        reviews: 187,
        image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&h=500&fit=crop',
        amazonLink: 'https://amazon.de/dp/example2',
        badge: 'Neu',
        description: 'Tauche ein in magische Waldwelten voller Naturgeister.'
      },
      {
        title: 'Der Deutsche Wald',
        subtitle: 'Achtsame Naturmomente',
        price: '13,99 €',
        rating: 4.7,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=500&fit=crop',
        amazonLink: 'https://amazon.de/dp/example3',
        description: 'Heimische Waldszenen zum meditativen Ausmalen.'
      },
    ]
  },
  {
    category: 'Bücher & Ratgeber',
    items: [
      {
        title: 'Shinrin-Yoku: Die Kunst des Waldbadens',
        subtitle: 'Dr. Qing Li',
        price: '16,99 €',
        rating: 4.8,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop',
        amazonLink: 'https://amazon.de/dp/example4',
        badge: 'Empfehlung',
        description: 'Der Klassiker vom führenden Waldbaden-Forscher.'
      },
      {
        title: 'Waldbaden Praxisbuch',
        subtitle: 'Mit 50 Übungen',
        price: '18,99 €',
        rating: 4.6,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop',
        amazonLink: 'https://amazon.de/dp/example5',
        description: 'Praktische Anleitungen für jede Jahreszeit.'
      },
    ]
  },
  {
    category: 'Tagebücher & Journals',
    items: [
      {
        title: 'Shinrin-Yoku Tagebuch',
        subtitle: 'Für achtsame Waldmomente',
        price: '14,99 €',
        rating: 4.7,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=500&fit=crop',
        amazonLink: 'https://amazon.de/dp/example6',
        description: 'Halte deine Walderlebnisse und Gedanken fest.'
      },
      {
        title: 'Naturtagebuch 365',
        subtitle: 'Ein Jahr im Wald',
        price: '19,99 €',
        rating: 4.9,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=500&fit=crop',
        amazonLink: 'https://amazon.de/dp/example7',
        badge: 'Premium',
        description: 'Begleite die Jahreszeiten mit täglichen Impulsen.'
      },
    ]
  },
  {
    category: 'Zubehör',
    items: [
      {
        title: 'Waldbaden Sitzkissen',
        subtitle: 'Wasserdicht & tragbar',
        price: '24,99 €',
        rating: 4.5,
        reviews: 178,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
        amazonLink: 'https://amazon.de/dp/example8',
        description: 'Bequem sitzen überall im Wald.'
      },
      {
        title: 'Aromatherapie Waldduft Set',
        subtitle: '100% natürliche ätherische Öle',
        price: '29,99 €',
        rating: 4.8,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=500&fit=crop',
        amazonLink: 'https://amazon.de/dp/example9',
        badge: 'Bestseller',
        description: 'Bringe den Waldduft nach Hause: Zirbe, Tanne, Fichte.'
      },
    ]
  }
]

export default function ProduktePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-forest-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Waldbaden-Produkte
            </h1>
            <p className="text-xl text-forest-100 max-w-2xl mx-auto">
              Entdecke unsere handverlesene Auswahl an Büchern, Malbüchern und Zubehör 
              für dein perfektes Waldbaden-Erlebnis.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliate Hinweis */}
      <div className="bg-forest-50 border-b border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-forest-700 text-center">
            🌲 Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Die Preise können variieren.
          </p>
        </div>
      </div>

      {/* Products by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-display font-bold text-forest-900 mb-8 flex items-center gap-3">
                <TreePine className="w-6 h-6 text-forest-600" />
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product, prodIndex) => (
                  <div 
                    key={prodIndex}
                    className="product-card bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      {product.badge && (
                        <span className={`absolute top-4 left-4 px-3 py-1 text-white text-xs font-semibold rounded-full ${
                          product.badge === 'Bestseller' ? 'bg-orange-500' :
                          product.badge === 'Neu' ? 'bg-forest-600' :
                          product.badge === 'Empfehlung' ? 'bg-blue-600' :
                          'bg-purple-600'
                        }`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-1">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-forest-900 mb-1">{product.title}</h3>
                      <p className="text-sm text-forest-600 mb-2">{product.subtitle}</p>
                      <p className="text-sm text-gray-600 mb-4 flex-1">{product.description}</p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span className="text-xl font-bold text-forest-700">{product.price}</span>
                        <a
                          href={product.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="amazon-btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                        >
                          Bei Amazon* <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-forest-900 mb-4">
            Nicht das Richtige gefunden?
          </h2>
          <p className="text-gray-600 mb-6">
            Stöbere in unserem Blog für kostenlose Tipps und Anleitungen zum Waldbaden.
          </p>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-600 text-white font-medium rounded-full hover:bg-forest-700 transition-colors"
          >
            Zum Blog
          </a>
        </div>
      </section>
    </main>
  )
}
