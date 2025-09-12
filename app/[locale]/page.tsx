import Home from '../page';
import { type Locale } from '../i18n';

export default async function LocalePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <Home locale={locale} />;
} 