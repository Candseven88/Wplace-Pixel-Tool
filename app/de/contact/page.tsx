import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Wplace Pixel Tool',
  description: 'Kontaktieren Sie das Wplace Pixel Tool Team für Hilfe, Feedback und Support.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Kontakt</h1>
      
      <p className="text-lg text-gray-600">
        Wir freuen uns von Ihnen zu hören! Ob Sie Fragen, Feedback haben oder Unterstützung benötigen, wir sind für Sie da.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Kontaktmöglichkeiten</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">📧</span>
              Allgemeine Anfragen
            </h3>
            <p className="text-gray-700">
              Für allgemeine Fragen, Partnerschaftsmöglichkeiten oder andere Anfragen
            </p>
            <a 
              href="mailto:hello@wplace.website" 
              className="text-blue-600 hover:underline font-medium block"
            >
              hello@wplace.website
            </a>
          </div>

          <div className="bg-green-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">🛠️</span>
              Technischer Support
            </h3>
            <p className="text-gray-700">
              Benötigen Sie Hilfe mit dem Tool? Technische Probleme? Wir helfen gerne.
            </p>
            <a 
              href="mailto:support@wplace.website" 
              className="text-green-600 hover:underline font-medium block"
            >
              support@wplace.website
            </a>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">🔒</span>
              Datenschutz
            </h3>
            <p className="text-gray-700">
              Fragen zu Datenschutz, Datenverarbeitung oder DSGVO-Konformität
            </p>
            <a 
              href="mailto:privacy@wplace.website" 
              className="text-purple-600 hover:underline font-medium block"
            >
              privacy@wplace.website
            </a>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">⚖️</span>
              Rechtliches
            </h3>
            <p className="text-gray-700">
              Rechtliche Anfragen, Fragen zu Nutzungsbedingungen oder geschäftliche Angelegenheiten
            </p>
            <a 
              href="mailto:legal@wplace.website" 
              className="text-yellow-600 hover:underline font-medium block"
            >
              legal@wplace.website
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold">Vielen Dank!</h2>
        <p className="text-lg text-gray-600">
          Vielen Dank, dass Sie sich die Zeit genommen haben, uns zu kontaktieren. Ihr Feedback und Ihre Unterstützung helfen uns, Wplace Pixel Tool für alle zu verbessern.
        </p>
      </section>
    </div>
  );
}

