import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB | Waldbaden Guide',
  description: 'Allgemeine Geschäftsbedingungen für die Nutzung von Waldbaden Guide.',
}

export default function AGBPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 bg-forest-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-forest-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-forest max-w-none space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold text-forest-900">§ 1 Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Website waldbaden-guide.de.</p>

            <h2 className="text-xl font-semibold text-forest-900">§ 2 Informationsangebot</h2>
            <p>Waldbaden Guide bietet ein redaktionelles Informationsangebot rund um das Thema Waldbaden und Shinrin-Yoku. Die bereitgestellten Informationen ersetzen keine medizinische oder therapeutische Beratung.</p>

            <h2 className="text-xl font-semibold text-forest-900">§ 3 Affiliate-Links</h2>
            <p>Auf unserer Website befinden sich Links zu Amazon (Affiliate-Links). Wenn Sie auf diese Links klicken und Produkte kaufen, erhalten wir eine Provision. Der Preis für Sie als Kunde bleibt unverändert. Wir empfehlen nur Produkte, von denen wir überzeugt sind.</p>

            <h2 className="text-xl font-semibold text-forest-900">§ 4 Urheberrecht</h2>
            <p>Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken) unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung oder Verbreitung bedarf der schriftlichen Zustimmung.</p>

            <h2 className="text-xl font-semibold text-forest-900">§ 5 Haftungsausschluss</h2>
            <p>Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte verantwortlich, nicht jedoch für übermittelte oder gespeicherte fremde Informationen.</p>

            <h2 className="text-xl font-semibold text-forest-900">§ 6 Änderungen der AGB</h2>
            <p>Wir behalten uns vor, diese AGB jederzeit zu ändern. Die jeweils aktuelle Version gilt ab dem Zeitpunkt der Veröffentlichung auf dieser Website.</p>

            <h2 className="text-xl font-semibold text-forest-900">§ 7 Schlussbestimmungen</h2>
            <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt deutsches Recht.</p>

            <p className="text-sm text-gray-500 mt-8">Stand: Februar 2025</p>
          </div>
        </div>
      </section>
    </main>
  )
}
