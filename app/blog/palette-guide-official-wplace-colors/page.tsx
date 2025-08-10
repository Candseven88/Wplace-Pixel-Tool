import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Palette Guide: Official Wplace Colors',
  description: 'Understand how palette mapping works and why it makes your art consistent with Wplace\'s color rules.',
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
        <h1 className="text-4xl font-bold text-center">Palette Guide: Official Wplace Colors</h1>
        <p className="text-foreground/70 text-center">Published on July 22, 2023</p>
      </header>

      <section className="prose prose-lg prose-neutral dark:prose-invert max-w-none space-y-8">
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
          <h2 className="text-2xl font-bold text-primary mb-4">The Importance of Color Palettes</h2>
          <p className="text-lg leading-relaxed">
            When creating art for Wplace, using the official color palette isn't just a recommendation—it's a requirement. 
            The Wplace canvas only allows pixels in specific colors, and any attempt to use colors outside this palette 
            will be rejected or automatically mapped to the closest available color.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">The Official Wplace 64-Color Palette</h2>
          <p className="text-lg">
            Wplace uses a carefully selected 64-color palette that provides a good balance between creative freedom 
            and visual consistency. The palette includes:
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>A range of reds, oranges, and yellows</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Various greens from light to dark</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Blues and purples across the spectrum</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Neutral tones including black, white, and grays</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Pastel and vibrant variations of primary colors</span>
            </li>
          </ul>
        </div>

        <div className="not-prose my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="font-bold text-xl mb-4">Color Swatches</h3>
          <div className="grid grid-cols-8 gap-3">
            {/* Red tones */}
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#6d001a' }} title="#6d001a"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#be0039' }} title="#be0039"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#ff4500' }} title="#ff4500"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#ffa800' }} title="#ffa800"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#ffd635' }} title="#ffd635"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#fff8b8' }} title="#fff8b8"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#00a368' }} title="#00a368"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#00cc78' }} title="#00cc78"></div>
            
            {/* Green tones */}
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#7eed56' }} title="#7eed56"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#00756f' }} title="#00756f"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#009eaa' }} title="#009eaa"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#00ccc0' }} title="#00ccc0"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#2450a4' }} title="#2450a4"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#3690ea' }} title="#3690ea"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#51e9f4' }} title="#51e9f4"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#493ac1' }} title="#493ac1"></div>
            
            {/* More colors... */}
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#6a5cff' }} title="#6a5cff"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#94b3ff' }} title="#94b3ff"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#811e9f' }} title="#811e9f"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#b44ac0' }} title="#b44ac0"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#e4abff' }} title="#e4abff"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#de107f' }} title="#de107f"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#ff3881' }} title="#ff3881"></div>
            <div className="w-full aspect-square rounded-md shadow-sm" style={{ backgroundColor: '#ff99aa' }} title="#ff99aa"></div>
          </div>
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">This is a subset of the full 64-color palette. Hover over each color to see its hex code.</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">How Color Mapping Works</h2>
          <p className="text-lg">
            When you use the Wplace Pixel Tool, your image undergoes a process called color quantization. Here's how it works:
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Color Distance Calculation</h3>
                <p className="text-lg">For each pixel in your image, the tool calculates the "distance" 
                to each color in the Wplace palette using a mathematical formula that considers the red, green, and blue components.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Nearest Color Selection</h3>
                <p className="text-lg">The color from the palette with the smallest distance is chosen as 
                the replacement for your original pixel color.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 border rounded-lg">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Optional Dithering</h3>
                <p className="text-lg">If dithering is enabled, the tool uses the Floyd-Steinberg algorithm to 
                distribute the color error to neighboring pixels, creating the illusion of more colors and smoother transitions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Color Mapping Code Example</h2>
          <p className="text-lg mb-4">
            Here's a simplified version of how our tool maps colors to the Wplace palette:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-auto text-sm">
            <code>
{`function nearestPaletteIndex(r, g, b, palette) {
  let bestIdx = 0;
  let bestDist = Number.POSITIVE_INFINITY;
  
  for (let i = 0; i < palette.length; i++) {
    const [pr, pg, pb] = palette[i];
    const dr = r - pr;
    const dg = g - pg;
    const db = b - pb;
    const d = dr * dr + dg * dg + db * db; // Euclidean distance in RGB space
    
    if (d < bestDist) {
      bestDist = d;
      bestIdx = i;
    }
  }
  
  return bestIdx;
}`}
            </code>
          </pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 py-2">Tips for Working with the Palette</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Pre-adjust your images</h3>
              <p>Before uploading to the Pixel Tool, consider adjusting your image's 
              colors to be closer to the Wplace palette to minimize unexpected color shifts.</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Use dithering for gradients</h3>
              <p>If your image contains smooth color transitions or gradients, 
              enabling dithering can help preserve the appearance.</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Consider contrast</h3>
              <p>The Wplace palette has limited shades of each color. Increasing contrast 
              in your original image can help maintain visual distinction after color mapping.</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">Test different settings</h3>
              <p>Try both with and without dithering, and experiment with different 
              scaling methods to see which produces the best results for your specific image.</p>
            </div>
          </div>
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