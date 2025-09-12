import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started with Wplace Pixel Tool',
  description: 'Learn how to use the Wplace Pixel Tool to convert your images into beautiful pixel art. Step-by-step guide for beginners.',
};

export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <h1>Getting Started with Wplace Pixel Tool</h1>
        
        <p>
          Welcome to the Wplace Pixel Tool! This guide will walk you through the basics of converting 
          your images into stunning pixel art that&apos;s perfect for the Wplace canvas.
        </p>

        <h2>What is the Wplace Pixel Tool?</h2>
        <p>
          The Wplace Pixel Tool is a powerful online converter that transforms your photos and images 
          into pixel art using advanced algorithms and the official Wplace 64-color palette. 
          It&apos;s designed to help you create artwork that fits perfectly with the Wplace collaborative canvas.
        </p>

        <h2>Step 1: Upload Your Image</h2>
        <p>
          Getting started is simple:
        </p>
        <ul>
          <li>Click the &quot;Select Image&quot; button or drag and drop your image onto the upload area</li>
          <li>Supported formats: JPG, PNG, GIF, WebP</li>
          <li>Maximum file size: 10MB</li>
          <li>Recommended resolution: 512x512 pixels or higher</li>
        </ul>

        <h2>Step 2: Adjust Pixel Settings</h2>
        <p>
          Once your image is uploaded, you&apos;ll see several controls to customize your pixel art:
        </p>
        
        <h3>Pixel Block Size (2px - 32px)</h3>
        <ul>
          <li><strong>Small blocks (2-8px):</strong> High detail, good for small artwork</li>
          <li><strong>Medium blocks (8-16px):</strong> Balanced detail, most versatile</li>
          <li><strong>Large blocks (16-32px):</strong> Low detail, retro aesthetic</li>
        </ul>

        <h3>Scaling Algorithm</h3>
        <ul>
          <li><strong>Nearest Neighbor:</strong> Sharp edges, best for pixel art</li>
          <li><strong>Bilinear:</strong> Smooth transitions, good for photos</li>
          <li><strong>Lanczos:</strong> High quality, best for detailed images</li>
        </ul>

        <h3>Dithering</h3>
        <p>
          Enable Floyd-Steinberg dithering to create smooth gradients and reduce color banding. 
          This is especially useful for photographs and images with many colors.
        </p>

        <h2>Step 3: Choose Your Palette</h2>
        <p>
          The tool comes with the official Wplace 64-color palette pre-loaded. This palette is:
        </p>
        <ul>
          <li>Carefully curated for pixel art aesthetics</li>
          <li>Optimized for the Wplace canvas</li>
          <li>Includes a wide range of colors for various artwork</li>
        </ul>
        <p>
          You can also upload your own custom palette in JSON format if needed.
        </p>

        <h2>Step 4: Preview and Download</h2>
        <p>
          The tool provides real-time preview of your pixel art as you adjust settings:
        </p>
        <ul>
          <li>Use the comparison slider to see before/after</li>
          <li>Experiment with different settings</li>
          <li>Download your final result as a PNG file</li>
          <li>Share directly to social media platforms</li>
        </ul>

        <h2>Tips for Best Results</h2>
        <ul>
          <li>Start with high-quality source images</li>
          <li>Choose images with clear, distinct shapes</li>
          <li>Experiment with different pixel block sizes</li>
          <li>Use the preview to fine-tune your settings</li>
          <li>Consider the final size you&apos;ll need for Wplace</li>
        </ul>

        <h2>Common Use Cases</h2>
        <ul>
          <li><strong>Profile pictures:</strong> Create unique pixel art avatars</li>
          <li><strong>Icons and logos:</strong> Convert brand assets to pixel format</li>
          <li><strong>Artwork:</strong> Transform photos into pixel art masterpieces</li>
          <li><strong>Gaming assets:</strong> Create sprites and game graphics</li>
        </ul>

        <h2>Next Steps</h2>
        <p>
          Now that you know the basics, try converting your first image! 
          Don&apos;t be afraid to experiment with different settings to find what works best for your specific image.
        </p>
        
        <p>
          For more advanced techniques, check out our other guides on best practices and color theory.
        </p>
      </article>
    </div>
  );
} 