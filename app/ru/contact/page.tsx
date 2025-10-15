import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты - Wplace Pixel Tool',
  description: 'Свяжитесь с командой Wplace Pixel Tool для получения помощи, отзывов и поддержки.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Контакты</h1>
      
      <p className="text-lg text-gray-600">
        Мы будем рады услышать от вас! Если у вас есть вопросы, отзывы или вам нужна поддержка, мы здесь, чтобы помочь.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Свяжитесь с нами</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">📧</span>
              Общие вопросы
            </h3>
            <p className="text-gray-700">
              Для общих вопросов, возможностей партнерства или других запросов
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
              Техническая поддержка
            </h3>
            <p className="text-gray-700">
              Нужна помощь с инструментом? Технические проблемы? Мы готовы помочь.
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
              Конфиденциальность и данные
            </h3>
            <p className="text-gray-700">
              Вопросы о конфиденциальности, обработке данных или соответствии GDPR/CCPA
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
              Юридические вопросы
            </h3>
            <p className="text-gray-700">
              Юридические запросы, вопросы об условиях обслуживания или деловые вопросы
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
        <h2 className="text-2xl font-semibold">Спасибо!</h2>
        <p className="text-lg text-gray-600">
          Спасибо, что нашли время связаться с нами. Ваши отзывы и поддержка помогают нам улучшать Wplace Pixel Tool для всех.
        </p>
      </section>
    </div>
  );
}

