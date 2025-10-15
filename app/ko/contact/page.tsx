import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기 - Wplace Pixel Tool',
  description: 'Wplace Pixel Tool 팀에 문의하여 도움말, 피드백 및 지원을 받으세요.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">문의하기</h1>
      
      <p className="text-lg text-gray-600">
        여러분의 의견을 듣고 싶습니다! 질문, 피드백 또는 지원이 필요하신 경우 언제든지 연락해 주세요.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">연락 방법</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">📧</span>
              일반 문의
            </h3>
            <p className="text-gray-700">
              일반적인 질문, 파트너십 기회 또는 기타 문의사항
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
              기술 지원
            </h3>
            <p className="text-gray-700">
              도구 사용에 도움이 필요하신가요? 기술적인 문제가 있으신가요? 도와드리겠습니다.
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
              개인정보 및 데이터
            </h3>
            <p className="text-gray-700">
              개인정보 보호, 데이터 처리 또는 GDPR/CCPA 준수에 관한 질문
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
              법률 및 비즈니스
            </h3>
            <p className="text-gray-700">
              법적 문의, 서비스 약관 질문 또는 비즈니스 관련 사항
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
        <h2 className="text-2xl font-semibold">감사합니다!</h2>
        <p className="text-lg text-gray-600">
          문의해 주셔서 감사합니다. 여러분의 피드백과 지원이 모두를 위한 Wplace Pixel Tool 개선에 도움이 됩니다.
        </p>
      </section>
    </div>
  );
}

