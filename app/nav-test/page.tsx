'use client';

import { usePathname } from 'next/navigation';
import { getTranslations, getLocaleFromPathname } from '../i18n';

export default function NavTestPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">导航栏语言切换器测试</h1>
        
        <div className="space-y-6">
          <div className="p-6 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">当前语言: {locale}</h2>
            <p>请查看页面顶部的导航栏，语言切换器现在位于最右侧。</p>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">功能说明</h3>
            <ul className="space-y-2 text-sm">
              <li>• 语言切换器已集成到顶部导航栏</li>
              <li>• 位于导航栏最右侧</li>
              <li>• 在桌面端显示语言名称，移动端只显示图标</li>
              <li>• 下拉菜单具有毛玻璃效果</li>
              <li>• 支持英文、中文、日文三种语言</li>
              <li>• 下拉菜单使用固定定位，不会被页面元素遮挡</li>
              <li>• 动态计算下拉菜单位置，确保准确显示</li>
            </ul>
          </div>
          
          <div className="p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">测试内容</h3>
            <div className="space-y-2">
              <p><strong>标题:</strong> {t.hero.title}</p>
              <p><strong>副标题:</strong> {t.hero.subtitle}</p>
              <p><strong>开始按钮:</strong> {t.hero.startButton}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 