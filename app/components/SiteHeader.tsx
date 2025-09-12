'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, getLocaleFromPathname, withLocale } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);

  const items = [
    { href: withLocale(locale, '/blog'), label: t.nav?.blog ?? 'Blog' },
    { href: withLocale(locale, '/tutorials'), label: 'Tutorials' },
    { href: withLocale(locale, '/about'), label: t.nav?.about ?? 'About' },
    { href: withLocale(locale, '/faq'), label: 'FAQ' },
    { href: withLocale(locale, '/privacy'), label: t.nav?.privacy ?? 'Privacy' },
    { href: withLocale(locale, '/terms'), label: t.nav?.terms ?? 'Terms' },
  ];

  const homeHref = withLocale(locale, '/');

  return (
    <header className="glass glass-allow-overflow border-b border-border sticky top-0 z-50 backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center gap-6">
        <Link href={homeHref} className="font-semibold hover:opacity-90 transition flex items-center gap-2 group">
          <Image src="/logo.jpg" alt="Wplace Pixel Tool Logo" width={32} height={32} className="rounded-sm" />
          <span className="text-gradient text-lg">Wplace Pixel Tool</span>
        </Link>
        <nav className="ml-auto flex items-center gap-6 text-sm">
          {items.map((it) => (
            <Link key={it.href + it.label} href={it.href} className="nav-link">
              {it.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
} 