import type { ReactNode } from 'react';
import { locales, type Locale } from '../i18n';

export const dynamicParams = false;

export function generateStaticParams(): Array<{ locale: Locale }> {
  return locales.map((l) => ({ locale: l }));
}

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return children;
} 