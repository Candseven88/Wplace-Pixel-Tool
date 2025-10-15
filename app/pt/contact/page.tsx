import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - Wplace Pixel Tool',
  description: 'Entre em contato com a equipe Wplace Pixel Tool para obter ajuda, feedback e suporte.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Contato</h1>
      
      <p className="text-lg text-gray-600">
        Adoraríamos ouvir de você! Seja para perguntas, feedback ou suporte, estamos aqui para ajudar.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Entre em Contato</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">📧</span>
              Consultas Gerais
            </h3>
            <p className="text-gray-700">
              Para perguntas gerais, oportunidades de parceria ou outras consultas
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
              Suporte Técnico
            </h3>
            <p className="text-gray-700">
              Precisa de ajuda com a ferramenta? Problemas técnicos? Estamos aqui para ajudar.
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
              Privacidade e Dados
            </h3>
            <p className="text-gray-700">
              Perguntas sobre privacidade, tratamento de dados ou conformidade com GDPR/CCPA
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
              Jurídico e Negócios
            </h3>
            <p className="text-gray-700">
              Consultas jurídicas, questões sobre termos de serviço ou assuntos comerciais
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
        <h2 className="text-2xl font-semibold">Obrigado!</h2>
        <p className="text-lg text-gray-600">
          Obrigado por dedicar seu tempo para entrar em contato. Seu feedback e apoio nos ajudam a melhorar o Wplace Pixel Tool para todos.
        </p>
      </section>
    </div>
  );
}

