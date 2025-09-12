import en from './locales/en.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';
import ko from './locales/ko.json';

export const locales = ['en', 'zh', 'ja', 'es', 'fr', 'de', 'pt', 'ru', 'ko'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ru: 'Русский',
  ko: '한국어',
};

const translations = {
  en,
  zh,
  ja,
  es,
  fr,
  de,
  pt,
  ru,
  ko,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return defaultLocale;
}

export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (locales.includes(firstSegment as Locale)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const pathWithoutLocale = getPathnameWithoutLocale(pathname);
  
  if (locale === defaultLocale) {
    return pathWithoutLocale;
  }
  
  return `/${locale}${pathWithoutLocale}`;
}

export function withLocale(locale: Locale, pathname: string): string {
  if (locale === defaultLocale) {
    return pathname;
  }
  
  return `/${locale}${pathname}`;
} 