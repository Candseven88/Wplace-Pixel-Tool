import AboutPage from '../../[locale]/about/page';

export default function GermanAboutPage() {
  return <AboutPage params={Promise.resolve({ locale: 'de' })} />;
} 