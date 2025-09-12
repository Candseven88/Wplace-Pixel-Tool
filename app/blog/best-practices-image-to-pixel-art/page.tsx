import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Practices: Image to Pixel Art Conversion',
  description: 'Learn the best practices for converting images to pixel art using our Wplace Pixel Tool. Discover techniques for optimal results.',
};

export default function BestPracticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <h1>Best Practices: Image to Pixel Art Conversion</h1>
        
        <p>
          Converting images to pixel art requires careful consideration of several factors to achieve the best results. 
          This guide will walk you through the essential techniques and best practices.
        </p>

        <h2>Choosing the Right Source Image</h2>
        <p>
          The quality of your source image significantly impacts the final pixel art result. 
          Look for images with:
        </p>
        <ul>
          <li>Clear, distinct shapes and forms</li>
          <li>Good contrast between elements</li>
          <li>Simple backgrounds when possible</li>
          <li>High resolution (at least 512x512 pixels)</li>
        </ul>

        <h2>Pixel Block Size Selection</h2>
        <p>
          The pixel block size determines the level of detail in your pixel art:
        </p>
        <ul>
          <li><strong>2-4px:</strong> High detail, suitable for small icons or detailed artwork</li>
          <li><strong>8-12px:</strong> Medium detail, good for most general purposes</li>
          <li><strong>16-24px:</strong> Low detail, creates a more abstract, retro look</li>
          <li><strong>32px+:</strong> Very low detail, creates a minimalist, blocky appearance</li>
        </ul>

        <h2>Scaling Algorithm Choices</h2>
        <p>
          Different scaling algorithms produce different results:
        </p>
        <ul>
          <li><strong>Nearest Neighbor:</strong> Sharp, pixelated edges, best for pixel art</li>
          <li><strong>Bilinear:</strong> Smooth transitions, good for photographs</li>
          <li><strong>Lanczos:</strong> High-quality scaling, best for detailed images</li>
          </ul>

        <h2>Dithering Techniques</h2>
        <p>
          Dithering helps create the illusion of more colors using a limited palette:
        </p>
        <ul>
          <li>Use Floyd-Steinberg dithering for smooth gradients</li>
          <li>Disable dithering for sharp, clean pixel art</li>
          <li>Experiment with different settings for your specific image</li>
        </ul>

        <h2>Color Palette Optimization</h2>
        <p>
          The Wplace 64-color palette is carefully designed for pixel art:
        </p>
        <ul>
          <li>Includes essential colors for most artwork</li>
          <li>Optimized for retro gaming aesthetics</li>
          <li>Supports both bright and muted tones</li>
          <li>Works well with dithering techniques</li>
        </ul>

        <h2>Post-Processing Tips</h2>
        <p>
          After conversion, consider these enhancements:
        </p>
        <ul>
          <li>Manually adjust any areas that need refinement</li>
          <li>Add outlines to improve definition</li>
          <li>Use the preview slider to compare before and after</li>
          <li>Save multiple versions with different settings</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Using too small pixel blocks for large images</li>
          <li>Ignoring the importance of good source material</li>
          <li>Not experimenting with different algorithms</li>
          <li>Forgetting to preview at different zoom levels</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Creating great pixel art is both an art and a science. 
          The key is experimentation - try different combinations of settings 
          until you find what works best for your specific image and desired outcome.
        </p>
      </article>
        </div>
  );
} 