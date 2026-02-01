import { Metadata } from 'next'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ - Häufige Fragen zum Waldbaden | Waldbaden Guide',
  description: 'Antworten auf die häufigsten Fragen zu Waldbaden, Shinrin-Yoku, unseren Produkten und Affiliate-Links.',
}

const faqs = [
  { q: 'Was ist der Unterschied zwischen Waldbaden und einem Spaziergang?', a: 'Beim Waldbaden geht es nicht um Bewegung oder Strecke, sondern um achtsames Erleben mit allen Sinnen. Du gehst sehr langsam, nimmst dir Zeit und bist voll präsent im Moment.' },
  { q: 'Wie lange sollte ein Waldbad dauern?', a: 'Ideal sind 2-4 Stunden. Studien zeigen, dass ab etwa 2 Stunden die positiven Effekte auf Stresshormone und Immunsystem besonders messbar werden.' },
  { q: 'Kann ich Waldbaden alleine lernen?', a: 'Ja! Unsere kostenlose Anleitung zeigt dir alle Grundlagen. Für tiefere Erfahrungen gibt es auch geführte Waldbaden-Kurse mit zertifizierten Therapeuten.' },
  { q: 'Funktioniert Waldbaden auch im Winter?', a: 'Absolut! Jede Jahreszeit hat ihren eigenen Reiz. Im Winter ist der Wald besonders ruhig und die Luft besonders klar. Zieh dich warm an und genieße die Stille.' },
  { q: 'Warum Malbücher für Waldbaden?', a: 'Malbücher sind eine perfekte Ergänzung für Zeiten, in denen du nicht in den Wald kannst. Das meditative Ausmalen aktiviert ähnliche Entspannungsreaktionen wie das Waldbaden selbst.' },
  { q: 'Was bedeuten die * bei den Produktlinks?', a: 'Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Wenn du über unsere Links kaufst, erhalten wir eine kleine Provision – für dich bleibt der Preis gleich.' },
  { q: 'Sind die Preise auf der Website aktuell?', a: 'Wir bemühen uns, die Preise aktuell zu halten, aber sie können sich bei Amazon ändern. Der finale Preis wird dir immer vor dem Kauf auf Amazon angezeigt.' },
  { q: 'Kann Waldbaden Therapien ersetzen?', a: 'Waldbaden ist eine wunderbare Ergänzung, ersetzt aber keine medizinische oder psychologische Behandlung. Bei ernsthaften Beschwerden konsultiere bitte einen Arzt.' },
  { q: 'Gibt es Waldbaden-Kurse in meiner Nähe?', a: 'Die Bundesweite Initiative Waldbaden (BIW) und verschiedene VHS-Angebote bieten Kurse an. Suche online nach "Waldbaden" + deiner Stadt.' },
  { q: 'Welche Bäume sind am besten fürs Waldbaden?', a: 'Nadelbäume (Fichten, Kiefern, Tannen) setzen besonders viele Phytonzide frei. Aber jeder Wald ist wertvoll – auch Laubwälder haben positive Effekte.' },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 bg-forest-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Häufige Fragen</h1>
          <p className="text-xl text-forest-100 max-w-2xl mx-auto">Antworten auf die wichtigsten Fragen rund ums Waldbaden und unsere Produkte.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-forest-50 rounded-xl">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-forest-900 list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-forest-600 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
