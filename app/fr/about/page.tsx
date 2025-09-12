import AboutPage from '../../[locale]/about/page';

export default function FrenchAboutPage() {
  return <AboutPage params={Promise.resolve({ locale: 'fr' })} />;
} 