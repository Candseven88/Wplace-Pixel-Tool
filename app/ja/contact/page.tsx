import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ - Wplace Pixel Tool',
  description: 'Wplace Pixel Toolチームにご連絡ください。ヘルプ、フィードバック、サポートを提供します。',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">お問い合わせ</h1>
      
      <p className="text-lg text-gray-600">
        お気軽にお問い合わせください！ご質問、フィードバック、サポートが必要な場合は、私たちがお手伝いします。
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">連絡方法</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">📧</span>
              一般的なお問い合わせ
            </h3>
            <p className="text-gray-700">
              一般的な質問、パートナーシップの機会、その他のお問い合わせ
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
              技術サポート
            </h3>
            <p className="text-gray-700">
              ツールのヘルプが必要ですか？技術的な問題がありますか？サポートいたします。
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
              プライバシーとデータ
            </h3>
            <p className="text-gray-700">
              プライバシー、データ処理、GDPR/CCPA準拠に関する質問
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
              法務・ビジネス
            </h3>
            <p className="text-gray-700">
              法的な問い合わせ、利用規約に関する質問、ビジネス関連事項
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
        <h2 className="text-2xl font-semibold">ありがとうございます！</h2>
        <p className="text-lg text-gray-600">
          お問い合わせいただきありがとうございます。皆様のフィードバックとサポートが、Wplace Pixel Toolをより良いものにするために役立ちます。
        </p>
      </section>
    </div>
  );
}

