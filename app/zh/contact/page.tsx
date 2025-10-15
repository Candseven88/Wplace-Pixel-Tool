import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们 - Wplace Pixel Tool',
  description: '联系Wplace Pixel Tool团队，获取帮助、反馈和支持。',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">联系我们</h1>
      
      <p className="text-lg text-gray-600">
        我们很乐意听到您的声音！无论您有任何问题、反馈或需要支持，我们都随时为您服务。
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">联系方式</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">📧</span>
              一般咨询
            </h3>
            <p className="text-gray-700">
              一般问题、合作机会或其他咨询
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
              技术支持
            </h3>
            <p className="text-gray-700">
              需要工具帮助？遇到技术问题？我们随时为您提供协助。
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
              隐私与数据
            </h3>
            <p className="text-gray-700">
              有关隐私、数据处理或GDPR/CCPA合规性的问题
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
              法律与商务
            </h3>
            <p className="text-gray-700">
              法律咨询、服务条款问题或商务事宜
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
        <h2 className="text-2xl font-semibold">感谢您！</h2>
        <p className="text-lg text-gray-600">
          感谢您抽出时间与我们联系。您的反馈和支持帮助我们为所有人改进Wplace Pixel Tool。
        </p>
      </section>
    </div>
  );
}

