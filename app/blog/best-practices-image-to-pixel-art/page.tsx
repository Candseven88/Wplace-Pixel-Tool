import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Best Practices: From Photo to Pixel Art',
  description: 'Tips for preparing images before conversion: crop, contrast, and resizing to get crisp pixel results.',
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
        <h1 className="text-4xl font-bold text-center">Best Practices: From Photo to Pixel Art</h1>
        <p className="text-foreground/70 text-center">Published on August 5, 2023</p>
      </header>

      <section className="prose prose-lg prose-neutral dark:prose-invert max-w-none space-y-8">
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
          <h2 className="text-2xl font-bold text-primary mb-4">Preparing Your Images for Pixelization</h2>
          <p className="text-lg leading-relaxed">
            The quality of your final pixel art depends heavily on how well you prepare your source image. 
            While our Wplace Pixel Tool can work with almost any image, following these best practices will 
            help you achieve much better results.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">1. Choose the Right Source Image</h2>
          <p className="text-lg">
            Not all images are equally suitable for pixel art conversion. Here&apos;s what to look for:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Clear subject matter</h3>
              <p>Look for images with distinct edges and shapes that will translate well to pixels</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Good contrast</h3>
              <p>Strong contrast between foreground and background helps maintain clarity</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Simple composition</h3>
              <p>Images without too many small details convert better to pixel format</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Limited color palette</h3>
              <p>Areas of solid color work better than complex gradients or textures</p>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
            <p className="text-lg">
              Images with complex textures, fine details, or subtle gradients often don&apos;t translate well to pixel art.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">2. Crop and Compose</h2>
          <p className="text-lg">
            Before pixelizing, crop your image to focus on the most important elements:
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Remove unnecessary background elements that might create noise</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Center your subject or follow the rule of thirds for better composition</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Consider the aspect ratio - square or 1:1 ratio often works best for icons</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Leave some breathing room around your subject, but not too much</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">3. Adjust Contrast and Colors</h2>
          <p className="text-lg">
            Enhancing contrast and simplifying colors can dramatically improve your pixel art results:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Increase contrast</h3>
              <p>Make shapes more defined by boosting the contrast between light and dark areas</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Boost saturation</h3>
              <p>Slightly increase color saturation to make your pixel art more vibrant</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Reduce noise</h3>
              <p>Apply a subtle blur if the image has too much texture or grain</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Consider posterizing</h3>
              <p>Reduce the number of colors in your image before conversion for cleaner results</p>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400 mt-4">
            <p className="text-lg">
              You can use basic photo editing software like Photoshop, GIMP, or even online editors 
              like Pixlr to make these adjustments.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">4. Resize Strategically</h2>
          <p className="text-lg">
            The size of your source image relative to your target pixel size matters:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">S</div>
              <div>
                <h3 className="font-bold text-xl mb-2">For small pixel art (16×16 to 64×64)</h3>
                <p className="text-lg">Start with a source image that&apos;s 2-4 times larger than your target size</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">M</div>
              <div>
                <h3 className="font-bold text-xl mb-2">For medium pixel art (64×64 to 128×128)</h3>
                <p className="text-lg">A source image 3-6 times larger works well</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">L</div>
              <div>
                <h3 className="font-bold text-xl mb-2">For larger pixel art</h3>
                <p className="text-lg">Your source can be 4-8 times larger</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <p className="text-lg">
              If your source image is too large relative to your target size, you&apos;ll lose too much detail. 
              If it&apos;s too small, the pixelization won&apos;t have enough information to work with.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">5. Choose the Right Pixelization Settings</h2>
          <p className="text-lg">
            Once your image is prepared, use these guidelines for the Wplace Pixel Tool settings:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">For illustrations, logos, or sharp edges</h3>
              <p>Use Nearest Neighbor scaling for crisp, clean edges</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">For photographs or smooth gradients</h3>
              <p>Try Bilinear or Lanczos scaling for more natural transitions</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">For images with few colors</h3>
              <p>Disable dithering for cleaner, more defined results</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">For images with many colors or gradients</h3>
              <p>Enable dithering to create the illusion of more colors</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">6. Iterative Approach</h2>
          <p className="text-lg">
            Don&apos;t expect perfect results on your first try. Pixel art conversion is often an iterative process:
          </p>
          <ol className="space-y-4 mt-4">
            <li className="flex gap-4 items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <p className="text-lg">Convert your image with initial settings</p>
            </li>
            <li className="flex gap-4 items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
              <p className="text-lg">Evaluate the results and identify issues</p>
            </li>
            <li className="flex gap-4 items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
              <p className="text-lg">Go back to your source image and make adjustments</p>
            </li>
            <li className="flex gap-4 items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
              <p className="text-lg">Try different conversion settings</p>
            </li>
            <li className="flex gap-4 items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</div>
              <p className="text-lg">Repeat until you&apos;re satisfied with the results</p>
            </li>
          </ol>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Common Issues and Solutions</h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border-b p-4 text-left font-bold">Problem</th>
                  <th className="border-b p-4 text-left font-bold">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Too much detail lost</td>
                  <td className="p-4">Use a smaller pixel block size or increase contrast in source image</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Colors look washed out</td>
                  <td className="p-4">Increase saturation in your source image before conversion</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Important edges are blurry</td>
                  <td className="p-4">Try Nearest Neighbor scaling instead of Bilinear or Lanczos</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Too much noise/dithering</td>
                  <td className="p-4">Disable dithering or reduce noise in source image</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="p-4">Important details missing</td>
                  <td className="p-4">Enhance those details in source image or use a smaller pixel size</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6 bg-primary/5 p-6 rounded-lg border border-primary/10">
          <h2 className="text-2xl font-bold text-primary mb-4">Final Thoughts</h2>
          <p className="text-lg">
            Remember that pixel art has its own aesthetic and limitations. Not every image will convert perfectly, 
            and that&apos;s okay! Sometimes the quirks and constraints of pixel art are what give it its charm. 
            Don&apos;t be afraid to embrace the pixelated look rather than fighting against it.
          </p>
          <p className="text-lg">
            With practice and these best practices, you&apos;ll be able to create stunning pixel art from your photos 
            that works beautifully with the Wplace canvas.
          </p>
        </div>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/blog/get-started-wplace-pixel-tool" 
              className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors"
            >
              <h3 className="font-bold text-lg mb-1 text-primary">Getting Started with Wplace Pixel Tool</h3>
              <p>Learn the basics of using the Wplace Pixel Tool</p>
            </Link>
            <Link 
              href="/blog/palette-guide-official-wplace-colors" 
              className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors"
            >
              <h3 className="font-bold text-lg mb-1 text-primary">Palette Guide: Official Wplace Colors</h3>
              <p>Learn about the color palette and how mapping works</p>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
} 