import type { Metadata } from 'next';
import { getTranslations, type Locale } from '../../i18n';

interface TermsPageProps {
  params: Promise<{ locale: Locale }>;
}

interface TermsTranslations {
  title: string;
  lastUpdated: string;
  acceptance: string;
  acceptanceContent: string;
  usage: string;
  usageContent: string;
  modifications: string;
  modificationsContent: string;
  limitation: string;
  limitationContent: string;
  privacy: string;
  privacyContent: string;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms of Service',
    description: 'Terms of Service for Wplace Pixel Tool.',
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  // 使用类型安全的方式访问terms字段
  const termsT: TermsTranslations = (t as Record<string, unknown>).terms as TermsTranslations || {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: January 2025',
    acceptance: 'Acceptance of Terms',
    acceptanceContent: 'By using Wplace Pixel Tool, you agree to use the service at your own risk. The tool is provided "as is" without warranties.',
    usage: 'Permitted Usage',
    usageContent: 'You are responsible for ensuring that any generated content complies with Wplace guidelines and applicable laws.',
    modifications: 'Modifications to Terms',
    modificationsContent: 'We may update these terms from time to time. Continued use constitutes acceptance of the updated terms.',
    limitation: 'Limitation of Liability',
    limitationContent: 'Wplace Pixel Tool and its developers shall not be liable for any damages arising from the use of this service.',
    privacy: 'Privacy',
    privacyContent: 'All image processing occurs locally in your browser. We do not collect, store, or transmit your images or personal data.'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl p-6 py-12 space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">{termsT.title}</h1>
          <p className="text-sm text-foreground/60">{termsT.lastUpdated}</p>
        </header>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{termsT.acceptance}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {termsT.acceptanceContent}
            </p>
          </section>

          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{termsT.usage}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {termsT.usageContent}
            </p>
          </section>

          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{termsT.modifications}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {termsT.modificationsContent}
            </p>
          </section>

          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{termsT.limitation}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {termsT.limitationContent}
            </p>
          </section>

          <section className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{termsT.privacy}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {termsT.privacyContent}
            </p>
          </section>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
            <p className="text-foreground/70">
              {locale === 'zh' ? '如果您对这些条款有任何疑问，请通过我们的官方渠道联系我们。' :
               locale === 'es' ? 'Si tienes alguna pregunta sobre estos términos, contáctanos a través de nuestros canales oficiales.' :
               locale === 'pt' ? 'Se você tiver alguma dúvida sobre estes termos, entre em contato conosco através de nossos canais oficiais.' :
               'If you have any questions about these terms, please contact us through our official channels.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 