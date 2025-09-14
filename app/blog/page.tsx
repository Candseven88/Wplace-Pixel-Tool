import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips and updates for Wplace Pixel Tool.',
};

const posts = [
  {
    slug: 'isumi-japan-pixel-art-travel-guide',
    title: 'Isumi Japan: Pixel Art Your Perfect Countryside Journey',
    excerpt:
      'Discover Isumi\'s hidden coastal gems and create stunning pixel art travel memories. Complete guide to countryside railways, seasonal beauty, and digital art creation.',
    date: 'September 14, 2025',
    category: 'Travel & Pixel Art',
  },
  {
    slug: 'haru-urara-pixel-art-wplace-guide',
    title: 'Haru Urara Pixel Art Guide for Wplace',
    excerpt:
      'Create stunning Haru Urara pixel art for Wplace with our comprehensive guide. Transform the beloved Umamusume character into perfect pixel art.',
    date: 'September 12, 2025',
    category: 'Character Guides',
  },
  {
    slug: 'lanczos-algorithm-pixel-art',
    title: 'Lanczos Algorithm for Superior Pixel Art',
    excerpt:
      'Discover how the Lanczos resampling algorithm creates sharper, more detailed pixel art conversions compared to traditional methods.',
    date: 'September 10, 2025',
    category: 'Technology',
  },
  {
    slug: 'wplace-vs-competitors',
    title: 'Wplace vs Competitors: Why We\'re the Best',
    excerpt:
      'Comprehensive comparison of Wplace with other pixel art tools, showcasing our superior features and capabilities.',
    date: 'September 8, 2025',
    category: 'Comparison',
  },
  {
    slug: 'grid-maker-for-pixel-perfect-art',
    title: 'Grid Maker for Pixel-Perfect Art',
    excerpt:
      'Learn how to use grid tools to create precise pixel art layouts for Wplace projects with better proportions and accuracy.',
    date: 'May 15, 2024',
    category: 'Tools',
  },
  {
    slug: 'transform-images-into-wplace-pixel-art',
    title: 'Transform Any Image into Wplace Pixel Art',
    excerpt:
      'Step-by-step guide to converting photos and images into beautiful pixel art compatible with Wplace canvas.',
    date: 'May 8, 2024',
    category: 'Tutorials',
  },
  {
    slug: 'get-started-wplace-pixel-tool',
    title: 'Getting Started with Wplace Pixel Tool',
    excerpt:
      'Learn how to convert any image into a Wplace-compatible pixel grid using official palettes and optional dithering.',
    date: 'July 15, 2023',
    category: 'Tutorials',
  },
  {
    slug: 'palette-guide-official-wplace-colors',
    title: 'Palette Guide: Official Wplace Colors',
    excerpt:
      'Understand how palette mapping works and why it makes your art consistent with Wplace\'s color rules.',
    date: 'July 22, 2023',
    category: 'Resources',
  },
  {
    slug: 'best-practices-image-to-pixel-art',
    title: 'Best Practices: From Photo to Pixel Art',
    excerpt:
      'Tips for preparing images before conversion: crop, contrast, and resizing to get crisp pixel results.',
    date: 'August 5, 2023',
    category: 'Guides',
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 space-y-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Wplace Pixel Tool Blog</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Tips, tutorials, and updates to help you create amazing pixel art with the official Wplace palette
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-1">
        {posts.map((post) => (
          <article 
            key={post.slug} 
            className="border rounded-lg p-6 hover:bg-foreground/5 transition-colors duration-200 shadow-sm"
          >
            <div className="flex flex-col h-full">
              <div className="mb-2 flex items-center">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {post.category}
                </span>
                <span className="ml-2 text-sm text-foreground/60">
                  {post.date}
                </span>
              </div>
              
              <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-foreground/70 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="mt-auto">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Read article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 