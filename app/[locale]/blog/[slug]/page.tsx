import type { ReactElement } from 'react';
import fs from 'fs';
import path from 'path';
import { locales, type Locale } from '../../../i18n';

export const dynamicParams = false;

export function generateStaticParams(): Array<{ locale: Locale; slug: string }> {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  const params: Array<{ locale: Locale; slug: string }> = [];
  for (const l of locales) {
    for (const s of slugs) params.push({ locale: l, slug: s });
  }
  return params;
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function LocalizedBlogPost({ params }: Props): Promise<ReactElement> {
  const { slug } = await params;
  const mod = await import(`../../../../app/blog/${slug}/page`);
  const Component = mod.default as () => ReactElement;
  return <Component />;
} 