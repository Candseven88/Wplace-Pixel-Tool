'use client';

import { usePathname } from 'next/navigation';
import { getTranslations, getLocaleFromPathname } from '../i18n';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function TestI18nPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">多语言测试页面</h1>
          <LanguageSwitcher />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">当前语言: {locale}</h2>
            <div className="space-y-2">
              <p><strong>标题:</strong> {t.hero.title}</p>
              <p><strong>副标题:</strong> {t.hero.subtitle}</p>
              <p><strong>描述:</strong> {t.hero.description}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">功能测试</h2>
            <div className="space-y-2">
              <p><strong>像素设置:</strong> {t.settings.pixelSettings}</p>
              <p><strong>调色板:</strong> {t.palette.title}</p>
              <p><strong>操作:</strong> {t.actions.title}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">SEO 内容测试</h3>
          <p>{t.seo.intro}</p>
        </div>
      </div>
    </div>
  );
} 