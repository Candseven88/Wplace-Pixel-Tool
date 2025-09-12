import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Getting Started with Wplace Pixel Tool - Tutorial',
  description: 'Complete beginner guide to creating your first pixel art with Wplace Pixel Tool. Learn step-by-step how to convert images for Wplace canvas.',
  keywords: [
    'wplace pixel tool tutorial',
    'pixel art beginner guide',
    'how to use wplace pixel tool',
    'pixel art for wplace',
    'image to pixel art conversion'
  ]
};

export default function GettingStartedTutorial() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl p-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-foreground/60">
          <Link href="/tutorials" className="hover:text-primary">Tutorials</Link>
          <span className="mx-2">›</span>
          <span>Getting Started</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium text-green-500 bg-green-500/10">
              Beginner
            </span>
            <span className="text-foreground/60">10 minutes</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 text-gradient">
            Getting Started with Wplace Pixel Tool
          </h1>
          
          <p className="text-xl text-foreground/80 leading-relaxed">
            Welcome to your first pixel art adventure! This tutorial will guide you through 
            creating your first pixel art masterpiece for Wplace canvas. No experience required!
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">What You&apos;ll Learn</h2>
            <div className="glass p-6 rounded-xl border border-border">
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  How to upload and prepare your image
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Understanding pixel block size settings
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Choosing the right scaling method
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Using the real-time preview slider
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  Downloading your final result
                </li>
              </ul>
            </div>
          </section>

          {/* Step 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Step 1: Choose Your Image</h2>
            
            <p className="text-foreground/80 mb-6">
              The first step is selecting a good image for pixel art conversion. Here are some tips 
              for choosing the perfect image:
            </p>

            <div className="glass p-6 rounded-xl border border-border mb-6">
              <h3 className="font-semibold mb-4 text-green-500">✨ Best Images for Pixel Art</h3>
              <ul className="space-y-2 text-foreground/80">
                <li><strong>High contrast:</strong> Images with clear light and dark areas</li>
                <li><strong>Simple compositions:</strong> Avoid overly complex or busy images</li>
                <li><strong>Clear subjects:</strong> Portraits, animals, or simple landscapes work great</li>
                <li><strong>Good lighting:</strong> Well-lit images preserve more details</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-2 text-yellow-500">💡 Pro Tip</h3>
              <p className="text-foreground/80">
                Start with a square image (1:1 aspect ratio) for your first pixel art. 
                This works best with Wplace&apos;s grid system and is easier to manage.
              </p>
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Step 2: Upload Your Image</h2>
            
            <p className="text-foreground/80 mb-6">
              Now let's get your image into the tool. You have two easy options:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="glass p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-3">Method 1: Click to Upload</h3>
                <ol className="space-y-2 text-foreground/80 text-sm">
                  <li>1. Click the &quot;Select Image&quot; button</li>
                  <li>2. Browse your computer files</li>
                  <li>3. Choose your image and click &quot;Open&quot;</li>
                </ol>
              </div>
              
              <div className="glass p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-3">Method 2: Drag & Drop</h3>
                <ol className="space-y-2 text-foreground/80 text-sm">
                  <li>1. Open your file manager</li>
                  <li>2. Drag your image file</li>
                  <li>3. Drop it onto the canvas area</li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-blue-500">🔒 Privacy Note</h3>
              <p className="text-foreground/80">
                Your image is processed entirely in your browser. It never leaves your device 
                or gets uploaded to our servers. Your privacy is 100% protected!
              </p>
            </div>
          </section>

          {/* Step 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Step 3: Adjust Pixel Block Size</h2>
            
            <p className="text-foreground/80 mb-6">
              The pixel block size determines how &ldquo;pixelated&rdquo; your final image will look. 
              This is one of the most important settings to understand:
            </p>

            <div className="space-y-6">
              <div className="glass p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-4">Understanding Block Sizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg mx-auto mb-3"></div>
                    <h4 className="font-medium text-green-500">Small (4-8px)</h4>
                    <p className="text-sm text-foreground/70">More detail, subtle pixelation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/60 rounded-lg mx-auto mb-3"></div>
                    <h4 className="font-medium text-yellow-500">Medium (8-16px)</h4>
                    <p className="text-sm text-foreground/70">Balanced detail and style</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/40 to-primary/80 rounded-lg mx-auto mb-3"></div>
                    <h4 className="font-medium text-red-500">Large (16-32px)</h4>
                    <p className="text-sm text-foreground/70">Artistic, highly pixelated</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="font-semibold mb-2 text-green-500">🎯 Recommended Starting Point</h3>
                <p className="text-foreground/80">
                  For your first pixel art, try a block size of 8-12 pixels. This gives you a nice 
                  balance between detail preservation and that classic pixel art aesthetic.
                </p>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Step 4: Choose Scaling Method</h2>
            
            <p className="text-foreground/80 mb-6">
              Our tool offers three different scaling methods. For beginners, here's what you need to know:
            </p>

            <div className="space-y-4">
              <div className="glass p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-3 text-green-500">Nearest Neighbor (Recommended for Beginners)</h3>
                <p className="text-foreground/80 mb-3">
                  Creates sharp, crisp pixel art with clear edges. Perfect for that classic retro look.
                </p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Sharp, pixelated appearance</li>
                  <li>• Fast processing</li>
                  <li>• Best for simple images</li>
                </ul>
              </div>

              <div className="glass p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-3 text-yellow-500">Bilinear</h3>
                <p className="text-foreground/80 mb-3">
                  Smoother scaling with some anti-aliasing. Good for photographs.
                </p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Smoother edges</li>
                  <li>• Good for photos</li>
                  <li>• Moderate processing time</li>
                </ul>
              </div>

              <div className="glass p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-3 text-blue-500">Lanczos</h3>
                <p className="text-foreground/80 mb-3">
                  Professional-grade algorithm for highest quality results.
                </p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Highest quality</li>
                  <li>• Best detail preservation</li>
                  <li>• Slower processing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Step 5: Use the Preview Slider</h2>
            
            <p className="text-foreground/80 mb-6">
              One of our favorite features is the real-time comparison slider! This lets you see 
              your original image and the pixel art version side by side.
            </p>

            <div className="glass p-6 rounded-xl border border-border mb-6">
              <h3 className="font-semibold mb-4">How to Use the Slider</h3>
              <ol className="space-y-3 text-foreground/80">
                <li><strong>1. Locate the slider:</strong> Look for the vertical line in the middle of your image</li>
                <li><strong>2. Click and drag:</strong> Move the slider left and right to compare</li>
                <li><strong>3. Fine-tune settings:</strong> Adjust block size or method based on what you see</li>
                <li><strong>4. Perfect your result:</strong> Keep experimenting until you're happy!</li>
              </ol>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-purple-500">✨ Cool Feature</h3>
              <p className="text-foreground/80">
                The preview updates in real-time as you change settings. No need to wait for 
                processing - see your changes instantly!
              </p>
            </div>
          </section>

          {/* Step 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Step 6: Download Your Masterpiece</h2>
            
            <p className="text-foreground/80 mb-6">
              Happy with your pixel art? Time to save it! Here's how to download your creation:
            </p>

            <div className="glass p-6 rounded-xl border border-border mb-6">
              <ol className="space-y-3 text-foreground/80">
                <li><strong>1. Click the Download button:</strong> You'll find it below the image preview</li>
                <li><strong>2. Choose your location:</strong> Your browser will ask where to save the file</li>
                <li><strong>3. Name your file:</strong> Give it a memorable name like "my-first-pixel-art.png"</li>
                <li><strong>4. Save:</strong> Click save and you're done!</li>
              </ol>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-green-500">🎉 Congratulations!</h3>
              <p className="text-foreground/80">
                You've just created your first pixel art! The file is saved as PNG format, 
                which preserves all the pixel-perfect details and works great for Wplace canvas.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">What's Next?</h2>
            
            <p className="text-foreground/80 mb-6">
              Now that you've mastered the basics, here are some ideas for your pixel art journey:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-3">🎨 Experiment More</h3>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li>• Try different block sizes</li>
                  <li>• Test all scaling methods</li>
                  <li>• Convert various image types</li>
                  <li>• Play with the dithering option</li>
                </ul>
              </div>
              
              <div className="glass p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-3">📚 Learn More</h3>
                                 <ul className="space-y-2 text-foreground/80 text-sm">
                   <li>• Understanding Algorithms tutorial</li>
                   <li>• Color Theory for Pixel Art</li>
                   <li>• Advanced Techniques guide</li>
                   <li>• Check our FAQ for common questions</li>
                 </ul>
              </div>
            </div>
          </section>
        </article>

        {/* Navigation */}
        <div className="mt-16 flex justify-between items-center pt-8 border-t border-border">
          <Link 
            href="/tutorials"
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Tutorials
          </Link>
          
          <Link 
            href="/tutorials/algorithm-comparison"
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Next: Algorithm Comparison
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 