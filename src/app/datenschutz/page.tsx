import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Waldbaden Guide',
  description: 'Datenschutzerklärung gemäß DSGVO für Waldbaden Guide. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.',
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 bg-forest-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-forest-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-forest max-w-none space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold text-forest-900">1. Datenschutz auf einen Blick</h2>
            <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf unserer Website auf.</p>

            <h2 className="text-xl font-semibold text-forest-900">2. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br/>[Ihr Name, Adresse wie im Impressum]<br/>E-Mail: info@waldbaden-guide.de</p>

            <h2 className="text-xl font-semibold text-forest-900">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>Beim Besuch unserer Website werden automatisch Informationen an den Server übermittelt. Diese Informationen werden temporär in einem sog. Logfile gespeichert.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt</li>
              <li>Verwendeter Browser und Betriebssystem</li>
            </ul>

            <h2 className="text-xl font-semibold text-forest-900">4. Cookies</h2>
            <p>Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden.</p>

            <h2 className="text-xl font-semibold text-forest-900">5. Affiliate-Links (Amazon PartnerNet)</h2>
            <p>Diese Website nimmt am Amazon EU-Partnerprogramm teil. Durch Klicks auf Affiliate-Links und anschließende Käufe auf Amazon können wir eine Provision erhalten. Amazon verwendet Cookies, um die Herkunft der Bestellungen nachvollziehen zu können.</p>

            <h2 className="text-xl font-semibold text-forest-900">6. Kontaktformular</h2>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

            <h2 className="text-xl font-semibold text-forest-900">7. Ihre Rechte</h2>
            <p>Sie haben das Recht:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung einzulegen</li>
              <li>Ihre Daten in übertragbarer Form zu erhalten</li>
            </ul>

            <h2 className="text-xl font-semibold text-forest-900">8. SSL-Verschlüsselung</h2>
            <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile Ihres Browsers.</p>

            <p className="text-sm text-gray-500 mt-8">Stand: Februar 2025</p>
          </div>
        </div>
      </section>
    </main>
  )
}
