import AboutPage from '../../[locale]/about/page';

export default function SpanishAboutPage() {
  return <AboutPage params={Promise.resolve({ locale: 'es' })} />;
} 