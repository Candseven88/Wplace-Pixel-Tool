import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Transform Any Image into Wplace Pixel Art',
  description: 'Step-by-step guide to converting photos and images into beautiful pixel art compatible with Wplace canvas.',
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
        <h1 className="text-4xl font-bold text-center">Transform Any Image into Wplace Pixel Art</h1>
        <p className="text-foreground/70 text-center">Published on May 8, 2024</p>
      </header>

      <section className="prose prose-lg prose-neutral dark:prose-invert max-w-none space-y-8">
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
          <h2 className="text-2xl font-bold text-primary mb-4">The Art of Pixelization</h2>
          <p className="text-lg leading-relaxed">
            Converting regular images into pixel art has become increasingly popular, especially with platforms like Wplace 
            showcasing community-created pixel masterpieces. This guide will walk you through the process of transforming 
            any image into beautiful pixel art that's compatible with the Wplace canvas and color palette.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Why Convert Images to Pixel Art?</h2>
          <p className="text-lg">
            There are several compelling reasons to transform your images into pixel art:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Wplace compatibility</h3>
              <p>Create art that fits perfectly with Wplace's canvas format and color restrictions</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Nostalgic aesthetic</h3>
              <p>Capture the charm and nostalgia of retro gaming and early digital art</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Simplification</h3>
              <p>Reduce complex images to their essential elements and colors</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Community participation</h3>
              <p>Join the vibrant Wplace community by contributing your own pixel creations</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Understanding Pixel Art Conversion</h2>
          <p className="text-lg">
            Before diving into the process, it's important to understand what happens when an image is converted to pixel art:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Resolution Reduction</h3>
                <p className="text-lg">The image is scaled down to a much lower resolution, creating the characteristic blocky appearance.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Color Palette Mapping</h3>
                <p className="text-lg">Colors are reduced and mapped to a limited palette (crucial for Wplace compatibility).</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Dithering (Optional)</h3>
                <p className="text-lg">Patterns of dots can be used to create the illusion of additional colors or shading.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Edge Detection and Enhancement</h3>
                <p className="text-lg">Important edges and details are preserved or emphasized to maintain recognizability.</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
            <p className="text-lg">
              Not all images convert equally well to pixel art. Images with clear shapes, strong contrast, and limited detail often produce the best results.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Tools for Converting Images to Pixel Art</h2>
          <p className="text-lg">
            Several tools can help you transform images into pixel art. Here are some options ranging from beginner-friendly to advanced:
          </p>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border-b p-4 text-left font-bold">Tool</th>
                  <th className="border-b p-4 text-left font-bold">Difficulty</th>
                  <th className="border-b p-4 text-left font-bold">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Wplace Pixel Tool</td>
                  <td className="p-4">Beginner</td>
                  <td className="p-4">Perfect Wplace palette compatibility, optimized for the platform</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">PixelIt</td>
                  <td className="p-4">Beginner</td>
                  <td className="p-4">Browser-based, simple interface, good for quick conversions</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Aseprite</td>
                  <td className="p-4">Intermediate</td>
                  <td className="p-4">Professional pixel art software with advanced editing capabilities</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Photoshop + Pixelate Filter</td>
                  <td className="p-4">Advanced</td>
                  <td className="p-4">Complete control over the process, custom palette mapping</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400 mt-4">
            <p className="text-lg">
              For Wplace-specific projects, we highly recommend using the Wplace Pixel Tool as it's specifically designed to work with the platform's color palette and canvas requirements.
            </p>
          </div>
        </div>

        <div className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Step-by-Step: Converting an Image to Pixel Art</h2>
          <p className="text-lg">
            Follow this comprehensive guide to transform any image into Wplace-compatible pixel art:
          </p>
          <div className="space-y-4 mt-6">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Step 1: Choose and Prepare Your Image</h3>
              <p className="text-lg">Select an image with these characteristics:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Clear subject with good contrast</li>
                <li>Not too detailed or complex</li>
                <li>Strong, distinct shapes</li>
                <li>Good lighting that highlights important features</li>
              </ul>
              <p className="text-lg mt-3">Crop the image to focus on the most important elements and adjust contrast if needed.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Step 2: Determine Your Target Resolution</h3>
              <p className="text-lg">For Wplace projects, consider these common pixel dimensions:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Small icons: 16×16 or 32×32 pixels</li>
                <li>Medium details: 64×64 or 128×128 pixels</li>
                <li>Large artwork: 256×256 pixels or larger</li>
              </ul>
              <p className="text-lg mt-3">Remember that lower resolutions create a more "pixelated" look, while higher resolutions preserve more detail.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Step 3: Convert Using Your Chosen Tool</h3>
              <p className="text-lg">Using the Wplace Pixel Tool:</p>
              <ol className="list-decimal pl-6 mt-2 space-y-2">
                <li>Upload your prepared image</li>
                <li>Select your desired output resolution</li>
                <li>Choose the "Wplace Official" color palette</li>
                <li>Adjust dithering settings (start with none, then experiment)</li>
                <li>Select scaling algorithm (Nearest Neighbor for sharp edges, Bilinear for smoother transitions)</li>
                <li>Click "Generate Pixel Art"</li>
              </ol>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Step 4: Fine-tune the Results</h3>
              <p className="text-lg">Evaluate your pixel art and consider these adjustments:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Try different dithering patterns if colors seem limited</li>
                <li>Adjust brightness/contrast if details are lost</li>
                <li>Experiment with different resolutions</li>
                <li>Try different scaling algorithms to see which works best for your image</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Step 5: Manual Touch-ups (Optional)</h3>
              <p className="text-lg">For the best results, consider these manual adjustments:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Clean up stray pixels that don't contribute to the image</li>
                <li>Enhance important outlines to improve readability</li>
                <li>Adjust colors in specific areas to improve contrast</li>
                <li>Simplify areas with too much noise or dithering</li>
              </ul>
              <p className="text-lg mt-3">This step is optional but can significantly improve your final result.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Step 6: Export for Wplace</h3>
              <p className="text-lg">When you're satisfied with your pixel art:</p>
              <ol className="list-decimal pl-6 mt-2 space-y-2">
                <li>Export the image in PNG format (to preserve pixel crispness)</li>
                <li>Verify that dimensions match your target size</li>
                <li>Confirm that only Wplace-compatible colors are used</li>
                <li>Your pixel art is now ready to be uploaded to Wplace!</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Advanced Techniques for Better Pixel Art</h2>
          <p className="text-lg">
            Once you've mastered the basics, try these advanced techniques to elevate your pixel art:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Selective Detail</h3>
              <p>Focus detail on the most important parts of your image while simplifying less important areas</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Color Clustering</h3>
              <p>Group similar colors together to create more defined shapes and cleaner transitions</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Outline Enhancement</h3>
              <p>Add or strengthen outlines around key elements to improve readability at small sizes</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Strategic Dithering</h3>
              <p>Use dithering only in specific areas to suggest texture or gradients where needed</p>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <p className="text-lg">
              Remember that great pixel art often involves deliberate artistic choices rather than just automated conversion. Don't be afraid to make manual adjustments to achieve your vision.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Common Challenges and Solutions</h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border-b p-4 text-left font-bold">Challenge</th>
                  <th className="border-b p-4 text-left font-bold">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Image becomes unrecognizable</td>
                  <td className="p-4">Try a higher resolution, increase contrast in the original image, or simplify the composition</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Colors don't match Wplace palette</td>
                  <td className="p-4">Use the Wplace Pixel Tool's color mapping feature or manually adjust colors to match the official palette</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Too much dithering noise</td>
                  <td className="p-4">Reduce dithering intensity or switch to a different dithering pattern</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Important details lost</td>
                  <td className="p-4">Crop the image to focus more on the important elements or manually enhance key details</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Image looks too "flat"</td>
                  <td className="p-4">Add contrast, enhance outlines, or use strategic dithering to create depth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6 bg-primary/5 p-6 rounded-lg border border-primary/10">
          <h2 className="text-2xl font-bold text-primary mb-4">From Photos to Pixels: The Creative Journey</h2>
          <p className="text-lg">
            Converting images to pixel art is both a technical process and a creative journey. Each image presents unique 
            challenges and opportunities, and the best results often come from experimentation and iteration. Don't be 
            discouraged if your first attempts aren't perfect – pixel art is a skill that improves with practice.
          </p>
          <p className="text-lg">
            Remember that the Wplace community values originality and creativity. While converting existing images is a 
            great way to start, consider how you might add your own artistic touch to make your pixel creations truly unique.
          </p>
          <p className="text-lg">
            We can't wait to see what you create for the Wplace canvas!
          </p>
        </div>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/blog/grid-maker-for-pixel-perfect-art" 
              className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors"
            >
              <h3 className="font-bold text-lg mb-1 text-primary">Grid Maker for Pixel-Perfect Art</h3>
              <p>Learn how to use grid tools for precise pixel art creation</p>
            </Link>
            <Link 
              href="/blog/best-practices-image-to-pixel-art" 
              className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors"
            >
              <h3 className="font-bold text-lg mb-1 text-primary">Best Practices: From Photo to Pixel Art</h3>
              <p>Tips for preparing images before conversion</p>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
} 