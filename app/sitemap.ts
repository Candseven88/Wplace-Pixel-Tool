import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://wplace.website';
  return [
    { url: `${base}/`, priority: 1, changeFrequency: 'weekly' },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${base}/blog/best-practices-image-to-pixel-art`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/blog/get-started-wplace-pixel-tool`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/blog/grid-maker-for-pixel-perfect-art`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/blog/palette-guide-official-wplace-colors`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/blog/transform-images-into-wplace-pixel-art`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/about`, priority: 0.5, changeFrequency: 'yearly' },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: 'yearly' },
  ];
} 