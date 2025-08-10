import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Getting Started with Wplace Pixel Tool',
  description: 'Learn how to convert any image into a Wplace-compatible pixel grid using official palettes and optional dithering.',
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-4xl p-6 space-y-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
      <Link href="/blog" className="inline-flex items-center text-sm text-foreground/70 hover:text-primary transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to all posts
      </Link>
      
      <header className="space-y-4 border-b pb-8">
        <h1 className="text-4xl font-bold text-center">Getting Started with Wplace Pixel Tool</h1>
        <p className="text-foreground/70 text-center">Published on July 15, 2023</p>
      </header>

      <section className="prose prose-lg prose-neutral dark:prose-invert max-w-none space-y-8">
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
          <h2 className="text-2xl font-bold text-primary mb-4">What is Wplace Pixel Tool?</h2>
          <p className="text-lg leading-relaxed">
            Wplace Pixel Tool is a web-based utility that helps you convert any image into a 
            pixel art format compatible with Wplace's color palette and grid system. Whether you're 
            planning to contribute to a community canvas or just want to create pixel art with 
            the official Wplace color scheme, this tool streamlines the process.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Official Palette Support</h3>
              <p>Uses the exact 64-color palette from Wplace</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Multiple Scaling Methods</h3>
              <p>Choose between Nearest Neighbor, Bilinear, or Lanczos resampling</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Dithering Options</h3>
              <p>Apply Floyd-Steinberg dithering for smoother color transitions</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Customizable Grid Size</h3>
              <p>Set your pixel block size for different levels of detail</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Preview Mode</h3>
              <p>See how your image will look before finalizing</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Basic Usage</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Upload an Image</h3>
                <p className="text-lg">Click the upload button and select any JPG, PNG, or GIF file from your device.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Configure Settings</h3>
                <p className="text-lg">Adjust the pixel block size (smaller = more detail but larger grid), choose a scaling method, 
                and decide whether to use dithering.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Preview and Adjust</h3>
                <p className="text-lg">The tool will show you a live preview. Experiment with different settings until you're happy with the result.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Export Your Pixel Art</h3>
                <p className="text-lg">Download your creation as a PNG file, ready to use with Wplace or other pixel art projects.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Recommended Settings</h2>
          <p className="text-lg">
            For most images, we recommend starting with these settings:
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Pixel Block Size:</strong> 8px (balances detail and manageable grid size)</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Scaling Method:</strong> Lanczos (best quality for most images)</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Dithering:</strong> Enabled (helps with smooth gradients and details)</span>
            </li>
          </ul>
          <p className="text-lg mt-4">
            If your image has sharp edges or text, try the Nearest Neighbor scaling method instead.
            For images with lots of gradients or smooth transitions, Bilinear might work better.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Understanding the Code Behind It</h2>
          <p className="text-lg">
            The Wplace Pixel Tool uses advanced image processing techniques to convert your images:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Resampling</h3>
            <p>First, your image is resized using your chosen algorithm (Nearest Neighbor, Bilinear, or Lanczos)</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Color Quantization</h3>
            <p>Then, each pixel is mapped to the closest color in the Wplace palette</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Optional Dithering</h3>
            <p>If enabled, the Floyd-Steinberg algorithm distributes the color error to neighboring pixels</p>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <p className="text-lg mb-4">
            Now that you know the basics, check out our other guides:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/blog/palette-guide-official-wplace-colors" 
              className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors"
            >
              <h3 className="font-bold text-lg mb-1 text-primary">Palette Guide: Official Wplace Colors</h3>
              <p>Learn about the color palette and how mapping works</p>
            </Link>
            <Link 
              href="/blog/best-practices-image-to-pixel-art" 
              className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors"
            >
              <h3 className="font-bold text-lg mb-1 text-primary">Best Practices: From Photo to Pixel Art</h3>
              <p>Tips for preparing your images for the best results</p>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
} 