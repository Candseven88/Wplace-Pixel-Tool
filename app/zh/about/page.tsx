import AboutPage from '../../[locale]/about/page';

export default function ChineseAboutPage() {
  return <AboutPage params={Promise.resolve({ locale: 'zh' })} />;
} 