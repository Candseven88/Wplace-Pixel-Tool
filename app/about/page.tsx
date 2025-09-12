import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Wplace Pixel Tool: free, privacy-friendly pixel art converter for Wplace.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-bold">About</h1>
      <p>
        Wplace Pixel Tool helps players convert images into Wplace-compatible pixel grids using the official palette.
        Everything runs in your browser: no uploads, no accounts, no cost.
      </p>
      <p>
        The project focuses on usability, performance, and faithful color mapping for consistent results on Wplace.
      </p>
    </div>
  );
} 