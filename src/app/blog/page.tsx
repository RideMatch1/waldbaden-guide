import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Waldbaden Blog - Tipps, Wissen & Inspiration | Waldbaden Guide',
  description: 'Entdecke Artikel über Waldbaden, Shinrin-Yoku, Waldtherapie und Achtsamkeit in der Natur. Praktische Tipps und wissenschaftliche Erkenntnisse.',
}

const blogPosts = [
  {
    slug: 'waldbaden-im-winter',
    title: 'Waldbaden im Winter: Tipps für die kalte Jahreszeit',
    excerpt: 'Der Winter bietet einzigartige Waldbaden-Erlebnisse. Erfahre, wie du auch bei Kälte die heilende Kraft des Waldes nutzt.',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80',
    date: '2025-01-28',
    readTime: '6 Min',
    category: 'Praxis',
  },
  {
    slug: 'phytonzide-wirkung',
    title: 'Phytonzide: Das Geheimnis der Waldluft',
    excerpt: 'Was macht die Waldluft so besonders? Wir erklären die Wissenschaft hinter den Phytonziden und ihrer Wirkung auf unser Immunsystem.',
    image: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&q=80',
    date: '2025-01-20',
    readTime: '8 Min',
    category: 'Wissenschaft',
  },
  {
    slug: 'waldbaden-mit-kindern',
    title: 'Waldbaden mit Kindern: So gelingt es',
    excerpt: 'Kinder lieben den Wald! Mit diesen Tipps machst du Waldbaden zum Familienerlebnis.',
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80',
    date: '2025-01-15',
    readTime: '5 Min',
    category: 'Familie',
  },
  {
    slug: 'beste-waelder-deutschland',
    title: 'Die 10 schönsten Wälder zum Waldbaden in Deutschland',
    excerpt: 'Von der Lüneburger Heide bis zum Schwarzwald: Entdecke die besten Orte für dein Shinrin-Yoku Erlebnis.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    date: '2025-01-10',
    readTime: '10 Min',
    category: 'Reise',
  },
  {
    slug: 'waldbaden-meditation-anleitung',
    title: 'Geführte Waldmeditation: Eine Anleitung',
    excerpt: 'Schritt für Schritt zur perfekten Waldmeditation. Mit Atemübungen und Visualisierungstechniken.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80',
    date: '2025-01-05',
    readTime: '7 Min',
    category: 'Meditation',
  },
  {
    slug: 'stress-abbauen-wald',
    title: 'Stress abbauen im Wald: Was die Forschung sagt',
    excerpt: 'Studien belegen: Schon 15 Minuten im Wald senken Stresshormone messbar. Wir erklären warum.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80',
    date: '2024-12-28',
    readTime: '6 Min',
    category: 'Wissenschaft',
  },
]

const categories = ['Alle', 'Praxis', 'Wissenschaft', 'Familie', 'Meditation', 'Reise']

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-forest-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Waldbaden Blog
            </h1>
            <p className="text-xl text-forest-100">
              Wissen, Tipps und Inspiration rund um Shinrin-Yoku und das achtsame Leben in der Natur.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === 'Alle'
                    ? 'bg-forest-600 text-white'
                    : 'bg-forest-50 text-forest-700 hover:bg-forest-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-forest-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('de-DE', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-forest-900 mb-2 group-hover:text-forest-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-forest-600 text-sm font-medium">
                      Weiterlesen <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-forest-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            Waldbaden-Tipps direkt ins Postfach
          </h2>
          <p className="text-forest-200 mb-6">
            Melde dich für unseren Newsletter an und erhalte regelmäßig neue Artikel und Inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-forest-700 text-white placeholder-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-forest-600 text-white font-medium rounded-full hover:bg-forest-500 transition-colors"
            >
              Anmelden
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
