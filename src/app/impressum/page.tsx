import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | Waldbaden Guide',
  description: 'Impressum und Anbieterkennzeichnung gemäß § 5 TMG für Waldbaden Guide.',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 bg-forest-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-forest-900 mb-8">Impressum</h1>
          
          <div className="prose prose-forest max-w-none space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold text-forest-900">Angaben gemäß § 5 TMG</h2>
            <p>
              [Ihr vollständiger Name]<br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]<br />
              Deutschland
            </p>

            <h2 className="text-xl font-semibold text-forest-900">Kontakt</h2>
            <p>
              E-Mail: info@waldbaden-guide.de
            </p>

            <h2 className="text-xl font-semibold text-forest-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Ihr vollständiger Name]<br />
              [Adresse wie oben]
            </p>

            <h2 className="text-xl font-semibold text-forest-900">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" className="text-forest-600 hover:underline" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>
            </p>

            <h2 className="text-xl font-semibold text-forest-900">Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-xl font-semibold text-forest-900">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen.
            </p>

            <h2 className="text-xl font-semibold text-forest-900">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter 
              verantwortlich.
            </p>

            <h2 className="text-xl font-semibold text-forest-900">Affiliate-Hinweis</h2>
            <p>
              Diese Website enthält Affiliate-Links zu Amazon. Als Amazon-Partner verdienen wir an 
              qualifizierten Verkäufen. Die Preise für den Käufer ändern sich dadurch nicht.
            </p>

            <h2 className="text-xl font-semibold text-forest-900">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
