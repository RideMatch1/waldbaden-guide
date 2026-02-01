import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight, TreePine } from 'lucide-react'

const blogPosts: Record<string, { title: string; content: string; date: string; readTime: string; category: string; image: string }> = {
  'waldbaden-im-winter': {
    title: 'Waldbaden im Winter: Tipps für die kalte Jahreszeit',
    date: '2025-01-28',
    readTime: '6 Min',
    category: 'Praxis',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1200&q=80',
    content: `Der Winter bietet einzigartige Waldbaden-Erlebnisse. Die Stille des verschneiten Waldes, die klare, frische Luft und die reduzierte Farbpalette schaffen eine besondere Atmosphäre für tiefe Entspannung.

## Warum Waldbaden im Winter besonders wertvoll ist

Im Winter ist der Wald am ruhigsten. Ohne das Summen der Insekten und das Rascheln der Blätter kannst du dich noch tiefer auf die Stille einlassen. Die kalte Luft ist besonders reich an negativen Ionen, die nachweislich stimmungsaufhellend wirken.

## Praktische Tipps für Winterwaldbaden

**Kleidung:** Ziehe dich nach dem Zwiebelprinzip an. Mehrere dünne Schichten halten besser warm als eine dicke Jacke. Vergiss nicht: Du bewegst dich langsam, also frierst du schneller als beim Wandern.

**Zeitpunkt:** Die beste Zeit ist der späte Vormittag, wenn die Sonne den Wald bereits etwas erwärmt hat. Vermeide die Dämmerung – im Winter wird es schnell kalt und dunkel.

**Dauer:** Starte mit 30-45 Minuten und steigere langsam. Dein Körper muss sich an die Kälte gewöhnen.

## Winterliche Übungen

1. **Schnee-Meditation:** Setze dich auf eine isolierte Unterlage und beobachte, wie der Schnee das Licht reflektiert.

2. **Atem-Übung:** Atme bewusst die kalte Luft ein und spüre, wie sie deine Lungen füllt. Beim Ausatmen siehst du deinen Atem – ein wunderbares Achtsamkeitsobjekt.

3. **Spurensuche:** Folge Tierspuren im Schnee. Diese achtsame Aktivität verbindet dich mit dem Leben im Winterwald.

Der Winter ist keine Zeit, um das Waldbaden zu pausieren – er bietet einzigartige Erfahrungen, die in anderen Jahreszeiten nicht möglich sind.`
  },
  'phytonzide-wirkung': {
    title: 'Phytonzide: Das Geheimnis der Waldluft',
    date: '2025-01-20',
    readTime: '8 Min',
    category: 'Wissenschaft',
    image: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=1200&q=80',
    content: `Was macht die Waldluft so besonders? Die Antwort liegt in winzigen Molekülen, die Bäume ausstoßen: Phytonzide.

## Was sind Phytonzide?

Phytonzide sind flüchtige organische Verbindungen, die von Bäumen und anderen Pflanzen produziert werden. Der Name kommt aus dem Griechischen: "phyton" (Pflanze) und "cide" (töten). Bäume nutzen diese Stoffe zur Abwehr von Insekten, Bakterien und Pilzen.

## Die wichtigsten Phytonzide

- **Alpha-Pinen:** Kommt besonders in Kiefern und Fichten vor. Wirkt entzündungshemmend und bronchienerweiternd.
- **Limonen:** Findet sich in Nadelbäumen. Hat stimmungsaufhellende Eigenschaften.
- **Kampfer:** Typisch für verschiedene Laubbäume. Unterstützt die Atemwege.

## Wissenschaftliche Studien

Dr. Qing Li von der Nippon Medical School in Tokyo hat bahnbrechende Forschung betrieben. Seine Studien zeigen:

**Studie 1 (2007):** Probanden, die drei Tage im Wald verbrachten, hatten 50% mehr natürliche Killerzellen (NK-Zellen) im Blut. Dieser Effekt hielt bis zu 30 Tage an.

**Studie 2 (2010):** Selbst das Einatmen von Phytonziden in einem Hotelzimmer (über einen Diffusor) steigerte die NK-Zell-Aktivität um 20%.

## Wie du Phytonzide optimal aufnimmst

1. **Nadelbäume bevorzugen:** Kiefern, Fichten und Tannen setzen besonders viele Phytonzide frei.
2. **Warme Tage wählen:** Bei Wärme verdunsten mehr Phytonzide.
3. **Tief atmen:** Nimm bewusst tiefe Atemzüge, um die Waldluft optimal aufzunehmen.
4. **Zeit nehmen:** Mindestens 2 Stunden im Wald verbringen für maximalen Effekt.

Die Forschung zu Phytonziden steckt noch in den Anfängen, aber die bisherigen Ergebnisse sind vielversprechend. Der Wald ist tatsächlich eine natürliche Apotheke.`
  },
  'waldbaden-mit-kindern': {
    title: 'Waldbaden mit Kindern: So gelingt es',
    date: '2025-01-15',
    readTime: '5 Min',
    category: 'Familie',
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1200&q=80',
    content: `Kinder sind natürliche Waldbader. Sie erkunden instinktiv, sind neugierig und leben im Moment. Mit ein paar Anpassungen wird Waldbaden zum perfekten Familienerlebnis.

## Warum Waldbaden für Kinder wichtig ist

In unserer digitalen Welt verbringen Kinder immer weniger Zeit in der Natur. Studien zeigen, dass regelmäßiger Naturkontakt:
- Die Konzentrationsfähigkeit verbessert
- Stress und Angst reduziert
- Die Kreativität fördert
- Das Immunsystem stärkt

## Altersgerechte Anpassungen

**Kleinkinder (2-4 Jahre):** Kurze Sessions von 20-30 Minuten. Fokus auf Entdecken: Blätter sammeln, Käfer beobachten, im Laub rascheln.

**Kindergartenkinder (4-6 Jahre):** 30-45 Minuten. Einfache Suchspiele: "Finde etwas Weiches", "Finde drei verschiedene Blätter".

**Grundschulkinder (6-10 Jahre):** 45-60 Minuten. Naturtagebuch führen, Bäume bestimmen, stille Beobachtungszeiten einführen.

## Spielerische Übungen

1. **Der Walddetektiv:** Jedes Kind bekommt eine "Suchliste" mit Dingen, die es finden soll (ohne zu pflücken!).

2. **Baumfreund finden:** Jedes Kind wählt einen Baum aus, umarmt ihn und erzählt, was es an ihm mag.

3. **Stille Minute:** Alle schließen die Augen und zählen, wie viele verschiedene Geräusche sie hören.

4. **Naturkunst:** Aus gefundenen Materialien (Stöcke, Steine, Blätter) ein Bild auf dem Waldboden legen.

## Praktische Tipps

- **Snacks mitnehmen:** Ein kleines Picknick macht den Ausflug zum Highlight.
- **Keine Eile:** Lass die Kinder das Tempo bestimmen.
- **Wetterfest:** Mit der richtigen Kleidung gibt es kein schlechtes Wetter.
- **Regelmäßigkeit:** Macht Waldbaden zum wöchentlichen Ritual.

Kinder brauchen keine Anleitung zum Staunen – sie brauchen nur die Gelegenheit.`
  },
  'beste-waelder-deutschland': {
    title: 'Die 10 schönsten Wälder zum Waldbaden in Deutschland',
    date: '2025-01-10',
    readTime: '10 Min',
    category: 'Reise',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80',
    content: `Deutschland ist eines der waldreichsten Länder Europas. Hier sind die schönsten Orte für dein Shinrin-Yoku Erlebnis.

## 1. Schwarzwald, Baden-Württemberg
Der Klassiker. Dichte Tannenwälder, mystische Atmosphäre und zahlreiche ausgewiesene Waldbaden-Pfade. Besonders empfehlenswert: Der Heilklimawanderweg bei Freudenstadt.

## 2. Bayerischer Wald
Deutschlands ältester Nationalpark bietet unberührte Natur. Die Urwaldgebiete "Mittelsteighütte" und "Höllbachspreng" sind wahre Kraftorte.

## 3. Lüneburger Heide, Niedersachsen
Nicht nur Heide, sondern auch ausgedehnte Mischwälder. Die Kombination aus Wald und Heide schafft einzigartige Landschaften.

## 4. Hainich, Thüringen
UNESCO-Weltnaturerbe mit dem berühmten Baumkronenpfad. Einer der letzten großen Buchenwälder Mitteleuropas.

## 5. Pfälzerwald, Rheinland-Pfalz
Deutschlands größtes zusammenhängendes Waldgebiet. Sandsteinfelsen und Burgruinen schaffen eine märchenhafte Kulisse.

## 6. Spreewald, Brandenburg
Einzigartige Mischung aus Wald und Wasserläufen. Waldbaden vom Kahn aus ist hier möglich!

## 7. Rothaargebirge, NRW
Heimat der ältesten Bäume Deutschlands. Der "Wald der Sinne" bei Bad Berleburg ist speziell für Waldbaden konzipiert.

## 8. Jasmund, Rügen
Buchenwald trifft Kreidefelsen trifft Ostsee. Die Kombination aus Wald und Meerluft ist einzigartig in Deutschland.

## 9. Kellerwald-Edersee, Hessen
UNESCO-Weltnaturerbe. Uralte Buchen und der glitzernde Edersee schaffen eine magische Atmosphäre.

## 10. Darßwald, Mecklenburg-Vorpommern
Windgepeitschte Kiefern am Meer. Der Darßwald verbindet Waldbaden mit Meeresluft.

## Tipp für alle Wälder

Viele dieser Regionen bieten inzwischen geführte Waldbaden-Touren an. Für den Einstieg kann das sehr hilfreich sein. Danach findest du deinen eigenen Rhythmus.`
  },
  'waldbaden-meditation-anleitung': {
    title: 'Geführte Waldmeditation: Eine Anleitung',
    date: '2025-01-05',
    readTime: '7 Min',
    category: 'Meditation',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1200&q=80',
    content: `Eine Waldmeditation verbindet die Kraft der Achtsamkeit mit der heilenden Wirkung des Waldes. Hier ist eine vollständige Anleitung.

## Vorbereitung

Suche dir einen ruhigen Platz im Wald. Ideal ist eine Stelle, an der du bequem sitzen oder liegen kannst. Ein umgefallener Baumstamm, eine Lichtung oder ein Platz an einem Baum sind perfekt.

Nimm dir mindestens 20-30 Minuten Zeit. Schalte dein Handy aus oder lass es zu Hause.

## Die Meditation (20 Minuten)

**Ankommen (3 Minuten)**
Setze oder lege dich hin. Schließe die Augen. Atme dreimal tief ein und aus. Spüre, wie dein Körper von der Erde getragen wird. Du bist sicher. Du bist genau richtig.

**Körper wahrnehmen (3 Minuten)**
Wandere mit deiner Aufmerksamkeit durch deinen Körper. Beginne bei den Füßen und arbeite dich langsam nach oben. Wo spürst du Anspannung? Atme dorthin und lass los.

**Hören (4 Minuten)**
Öffne deine Ohren für die Klänge des Waldes. Was hörst du in der Nähe? Was in der Ferne? Lass die Geräusche kommen und gehen, ohne sie festzuhalten.

**Riechen (3 Minuten)**
Nimm die Düfte des Waldes wahr. Das feuchte Moos, die Erde, die Bäume. Mit jedem Atemzug nimmst du die Phytonzide auf, die dein Immunsystem stärken.

**Fühlen (3 Minuten)**
Spüre die Luft auf deiner Haut. Die Temperatur. Vielleicht einen leichten Wind. Den Boden unter dir. Das Gewicht deines Körpers.

**Verbinden (4 Minuten)**
Stelle dir vor, dass du Wurzeln schlägst wie ein Baum. Deine Wurzeln greifen tief in die Erde. Du bist verbunden mit allen Bäumen des Waldes. Du gehörst hierher.

## Zurückkommen

Bewege langsam Finger und Zehen. Räkle dich. Öffne die Augen und nimm dir Zeit, bevor du aufstehst. Bedanke dich innerlich beim Wald.

## Tipps

- Mach diese Meditation regelmäßig am selben Ort – dein "Kraftplatz" wird immer stärker.
- Bei schlechtem Wetter: Auch unter einem Regenschirm oder an einem geschützten Platz funktioniert es.
- Nimm ein Sitzkissen oder eine Isomatte mit für mehr Komfort.`
  },
  'stress-abbauen-wald': {
    title: 'Stress abbauen im Wald: Was die Forschung sagt',
    date: '2024-12-28',
    readTime: '6 Min',
    category: 'Wissenschaft',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80',
    content: `Dass der Wald entspannt, wissen wir intuitiv. Aber was sagt die Wissenschaft? Die Forschungsergebnisse sind beeindruckend.

## Cortisol: Das Stresshormon sinkt

Die bekannteste Studie stammt von der Chiba Universität in Japan. Forscher verglichen die Stressmarker von Menschen, die im Wald spazierten, mit solchen, die in der Stadt unterwegs waren.

Ergebnis: **Nach nur 15 Minuten im Wald sank der Cortisolspiegel um 16%**. In der Stadt blieb er unverändert oder stieg sogar.

## Herzfrequenz und Blutdruck

Die gleiche Studie zeigte:
- Pulsfrequenz sank im Wald um durchschnittlich 4%
- Blutdruck (systolisch) sank um 1,9%
- Die Herzratenvariabilität verbesserte sich

Diese Werte mögen klein erscheinen, aber sie sind statistisch signifikant und körperlich spürbar.

## Das Nervensystem entspannt

Der Wald aktiviert den Parasympathikus – den "Ruhe-und-Verdauungs"-Teil unseres Nervensystems. Gleichzeitig wird der Sympathikus (Kampf-oder-Flucht) heruntergefahren.

Messbar durch:
- Reduzierte Adrenalin-Ausschüttung
- Verbesserte Verdauung
- Besserer Schlaf

## Psychologische Effekte

Eine Meta-Analyse von 64 Studien (2019) zeigte:
- **Angst:** Signifikante Reduktion
- **Depression:** Moderate Verbesserung
- **Negative Gedanken:** Deutlich weniger grübeln

Besonders interessant: Der Effekt tritt auch bei Menschen ein, die skeptisch waren!

## Wie lange wirkt es?

- Akute Effekte (Cortisol, Puls): 15-30 Minuten
- Immuneffekte (NK-Zellen): Bis zu 30 Tage nach einem mehrtägigen Waldaufenthalt
- Psychologische Effekte: Je regelmäßiger, desto nachhaltiger

## Fazit

Der Wald ist keine Esoterik – er ist messbare Medizin. Regelmäßiges Waldbaden ist eine der einfachsten und kostengünstigsten Methoden, Stress zu reduzieren.

Die Forschung empfiehlt: **Mindestens 2 Stunden pro Woche im Wald** für optimale Gesundheitseffekte.`
  }
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts[params.slug]
  if (!post) {
    return { title: 'Artikel nicht gefunden | Waldbaden Guide' }
  }
  return {
    title: `${post.title} | Waldbaden Guide`,
    description: post.content.substring(0, 160) + '...',
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artikel nicht gefunden</h1>
          <Link href="/blog" className="text-forest-600 hover:underline">Zurück zum Blog</Link>
        </div>
      </main>
    )
  }

  const slugs = Object.keys(blogPosts)
  const currentIndex = slugs.indexOf(params.slug)
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <div className="relative h-64 md:h-96">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-forest-600 hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
          </Link>

          <span className="inline-block px-3 py-1 bg-forest-100 text-forest-700 text-sm font-medium rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-forest-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 pb-8 border-b border-gray-100">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} Lesezeit
            </span>
          </div>

          <div className="prose prose-forest prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-xl font-semibold text-forest-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={i} className="font-semibold text-forest-800">{paragraph.replace(/\*\*/g, '')}</p>
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n')
                return (
                  <ul key={i} className="list-disc pl-6 space-y-1">
                    {items.map((item, j) => <li key={j}>{item.replace('- ', '')}</li>)}
                  </ul>
                )
              }
              if (paragraph.match(/^\d\./)) {
                const items = paragraph.split('\n')
                return (
                  <ol key={i} className="list-decimal pl-6 space-y-2">
                    {items.map((item, j) => <li key={j}>{item.replace(/^\d+\.\s*/, '')}</li>)}
                  </ol>
                )
              }
              return <p key={i} className="text-gray-700 leading-relaxed">{paragraph}</p>
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
            {prevSlug ? (
              <Link href={`/blog/${prevSlug}/`} className="flex items-center gap-2 text-forest-600 hover:underline">
                <ArrowLeft className="w-4 h-4" /> Vorheriger Artikel
              </Link>
            ) : <div />}
            {nextSlug ? (
              <Link href={`/blog/${nextSlug}/`} className="flex items-center gap-2 text-forest-600 hover:underline">
                Nächster Artikel <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 mt-12 bg-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TreePine className="w-10 h-10 text-forest-600 mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold text-forest-900 mb-4">
            Vertiefe dein Waldbaden-Erlebnis
          </h2>
          <p className="text-gray-600 mb-6">
            Unsere Malbücher bringen den Wald zu dir nach Hause.
          </p>
          <Link
            href="/malbuecher/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-600 text-white font-medium rounded-full hover:bg-forest-700 transition-colors"
          >
            Malbücher entdecken
          </Link>
        </div>
      </section>
    </main>
  )
}
