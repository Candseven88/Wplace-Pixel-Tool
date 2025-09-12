import type { Metadata } from 'next';
import { getTranslations, type Locale } from '../../i18n';

interface PrivacyPageProps {
  params: Promise<{ locale: Locale }>;
}

interface PrivacyTranslations {
  title: string;
  lastUpdated: string;
  commitment: string;
  commitmentContent: string;
  dataCollection: string;
  dataCollectionContent: string;
  analytics: string;
  analyticsContent: string;
  cookies: string;
  cookiesContent: string;
  contact: string;
  contactContent: string;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Wplace Pixel Tool.',
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  // 使用类型安全的方式访问privacy字段
  const privacyT: PrivacyTranslations = (t as Record<string, unknown>).privacy as PrivacyTranslations || {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: January 2025',
    commitment: 'Our Commitment',
    commitmentContent: 'We are committed to protecting your privacy. Wplace Pixel Tool processes all images locally in your browser.',
    dataCollection: 'Data Collection',
    dataCollectionContent: 'We do not collect, store, or transmit any of your personal data or images to our servers. All processing happens entirely within your browser.',
    analytics: 'Analytics',
    analyticsContent: 'This website may use basic analytics to understand usage patterns, but no personal information is collected.',
    cookies: 'Cookies',
    cookiesContent: 'We may use essential cookies for basic site functionality. No tracking cookies are used.',
    contact: 'Contact',
    contactContent: 'If you have any questions about this privacy policy, please contact us through our official channels.'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl p-6 py-12 space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">{privacyT.title}</h1>
          <p className="text-sm text-foreground/60">{privacyT.lastUpdated}</p>
        </header>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{privacyT.commitment}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {privacyT.commitmentContent}
            </p>
          </section>

          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{privacyT.dataCollection}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {privacyT.dataCollectionContent}
            </p>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-800 font-medium">
                  {locale === 'zh' ? '✓ 100% 本地处理，完全保护隐私' :
                   locale === 'es' ? '✓ Procesamiento 100% local, privacidad completamente protegida' :
                   locale === 'pt' ? '✓ Processamento 100% local, privacidade completamente protegida' :
                   '✓ 100% Local Processing, Complete Privacy Protection'}
                </span>
              </div>
            </div>
          </section>

          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{privacyT.analytics}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {privacyT.analyticsContent}
            </p>
          </section>

          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{privacyT.cookies}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {privacyT.cookiesContent}
            </p>
          </section>

          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{privacyT.contact}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {privacyT.contactContent}
            </p>
          </section>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {locale === 'zh' ? '隐私优先设计' :
               locale === 'es' ? 'Diseño que Prioriza la Privacidad' :
               locale === 'pt' ? 'Design que Prioriza a Privacidade' :
               'Privacy-First Design'}
            </h3>
            <p className="text-foreground/80 mb-6">
              {locale === 'zh' ? '我们相信您的创作应该保持私密。这就是为什么我们构建了第一个完全在浏览器中运行的像素艺术工具。' :
               locale === 'es' ? 'Creemos que tu trabajo creativo debe mantenerse privado. Por eso construimos la primera herramienta de arte píxel que funciona completamente en tu navegador.' :
               locale === 'pt' ? 'Acreditamos que seu trabalho criativo deve permanecer privado. É por isso que construímos a primeira ferramenta de arte pixel que funciona completamente no seu navegador.' :
               'We believe your creative work should stay private. That\'s why we built the first pixel art tool that runs completely in your browser.'}
            </p>
            <a 
              href={`/${locale === 'en' ? '' : locale}`}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
            >
              {t.hero.startButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 