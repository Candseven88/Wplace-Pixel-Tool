import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Wplace Pixel Tool',
  description: 'Póngase en contacto con el equipo de Wplace Pixel Tool para obtener ayuda, comentarios y soporte.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Contacto</h1>
      
      <p className="text-lg text-gray-600">
        ¡Nos encantaría saber de ti! Ya sea que tengas preguntas, comentarios o necesites ayuda, estamos aquí para ayudarte.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Ponte en Contacto</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">📧</span>
              Consultas Generales
            </h3>
            <p className="text-gray-700">
              Para preguntas generales, oportunidades de asociación o cualquier otra consulta
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
              Soporte Técnico
            </h3>
            <p className="text-gray-700">
              ¿Necesitas ayuda con la herramienta? ¿Problemas técnicos? Estamos aquí para asistirte.
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
              Privacidad y Datos
            </h3>
            <p className="text-gray-700">
              Preguntas sobre privacidad, manejo de datos o cumplimiento de GDPR/CCPA
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
              Legal y Negocios
            </h3>
            <p className="text-gray-700">
              Consultas legales, preguntas sobre términos de servicio o asuntos comerciales
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
        <h2 className="text-2xl font-semibold">¡Gracias!</h2>
        <p className="text-lg text-gray-600">
          Gracias por tomarte el tiempo de contactarnos. Tus comentarios y apoyo nos ayudan a mejorar Wplace Pixel Tool para todos.
        </p>
      </section>
    </div>
  );
}

