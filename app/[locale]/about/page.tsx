import type { Metadata } from 'next';
import { getTranslations, type Locale } from '../../i18n';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

interface AboutTranslations {
  title: string;
  content1: string;
  content2: string;
  mission: string;
  missionContent: string;
  features: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  return {
    title: 'About',
    description: 'About Wplace Pixel Tool: free, privacy-friendly pixel art converter for Wplace.',
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  // 使用类型安全的方式访问about字段
  const aboutT: AboutTranslations = (t as Record<string, unknown>).about as AboutTranslations || {
    title: 'About',
    content1: 'Wplace Pixel Tool helps players convert images into Wplace-compatible pixel grids using the official palette. Everything runs in your browser: no uploads, no accounts, no cost.',
    content2: 'The project focuses on usability, performance, and faithful color mapping for consistent results on Wplace.',
    mission: 'Our Mission',
    missionContent: 'We believe pixel art creation should be accessible to everyone, regardless of technical expertise or language.',
    features: 'Key Features',
    feature1: 'Professional-grade Lanczos and Floyd-Steinberg algorithms',
    feature2: 'Real-time preview with interactive comparison slider',
    feature3: 'Support for 9 languages worldwide',
    feature4: '100% browser-based processing for complete privacy'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl p-6 py-12 space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">{aboutT.title}</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            About Wplace Pixel Tool: free, privacy-friendly pixel art converter for Wplace.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{aboutT.mission}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {aboutT.missionContent}
            </p>
          </div>

          <div className="glass p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{aboutT.features}</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/80">{aboutT.feature1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/80">{aboutT.feature2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/80">{aboutT.feature3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground/80">{aboutT.feature4}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-6">
          <div className="bg-primary/10 rounded-lg p-6">
            <p className="text-foreground/90 leading-relaxed text-lg">
              {aboutT.content1}
            </p>
          </div>
          
          <div className="bg-secondary/10 rounded-lg p-6">
            <p className="text-foreground/90 leading-relaxed text-lg">
              {aboutT.content2}
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">
              {locale === 'zh' ? '立即开始创作' : 
               locale === 'es' ? 'Comienza a Crear Ahora' :
               locale === 'pt' ? 'Comece a Criar Agora' :
               'Start Creating Now'}
            </h2>
            <p className="text-lg mb-6 text-foreground/80">
              {locale === 'zh' ? '体验专业级像素艺术转换的区别' :
               locale === 'es' ? 'Experimenta la diferencia de la conversión de arte píxel de nivel profesional' :
               locale === 'pt' ? 'Experimente a diferença da conversão de arte pixel de nível profissional' :
               'Experience the difference of professional-grade pixel art conversion'}
            </p>
            <a 
              href={`/${locale === 'en' ? '' : locale}`}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
            >
              {((t as Record<string, unknown>).hero as { startButton: string }).startButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 