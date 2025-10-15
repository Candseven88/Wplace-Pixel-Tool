import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Wplace Pixel Tool',
  description: 'Contactez l\'équipe Wplace Pixel Tool pour obtenir de l\'aide, des commentaires et du support.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
      
      <p className="text-lg text-gray-600">
        Nous serions ravis de vous entendre ! Que vous ayez des questions, des commentaires ou besoin d'aide, nous sommes là pour vous aider.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Contactez-nous</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">📧</span>
              Demandes Générales
            </h3>
            <p className="text-gray-700">
              Pour les questions générales, les opportunités de partenariat ou toute autre demande
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
              Support Technique
            </h3>
            <p className="text-gray-700">
              Besoin d'aide avec l'outil ? Des problèmes techniques ? Nous sommes là pour vous assister.
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
              Confidentialité et Données
            </h3>
            <p className="text-gray-700">
              Questions sur la confidentialité, le traitement des données ou la conformité RGPD/CCPA
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
              Juridique et Affaires
            </h3>
            <p className="text-gray-700">
              Demandes juridiques, questions sur les conditions de service ou affaires commerciales
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
        <h2 className="text-2xl font-semibold">Merci !</h2>
        <p className="text-lg text-gray-600">
          Merci d'avoir pris le temps de nous contacter. Vos commentaires et votre soutien nous aident à améliorer Wplace Pixel Tool pour tous.
        </p>
      </section>
    </div>
  );
}

