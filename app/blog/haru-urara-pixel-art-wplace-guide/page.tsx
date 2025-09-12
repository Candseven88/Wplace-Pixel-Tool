import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haru Urara Pixel Art Guide for Wplace - Create Umamusume Pixel Art',
  description: 'Learn how to create amazing Haru Urara pixel art for Wplace using our advanced converter. Transform Umamusume characters into perfect pixel art with professional tools.',
  keywords: 'Haru Urara, pixel art, Wplace, Umamusume, anime pixel art, character conversion, r/place, pixel art converter',
  openGraph: {
    title: 'Haru Urara Pixel Art Guide for Wplace',
    description: 'Create stunning Haru Urara pixel art for Wplace with our comprehensive guide and tools.',
    type: 'article',
    url: 'https://wplace.website/blog/haru-urara-pixel-art-wplace-guide/',
  }
};

export default function HaruUraraPixelArtGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6">
            Haru Urara Pixel Art Guide for Wplace
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Create stunning Haru Urara pixel art for Wplace with our comprehensive guide. Transform the beloved Umamusume character into perfect pixel art ready for r/place and digital canvas projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">Haru Urara</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Umamusume</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Pixel Art</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Wplace</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Who is Haru Urara?</h2>
          <div className="prose prose-lg max-w-none text-foreground/90">
            <p>
              Haru Urara (ハルウララ) is one of the most beloved characters from the <strong>Umamusume: Pretty Derby</strong> franchise. 
              Known for her incredible persistence and never-give-up attitude, she has become a viral sensation across social media platforms, 
              including Reddit's famous r/place canvas where she appeared alongside surprising allies.
            </p>
            <p>
              With her distinctive pink hair, cheerful demeanor, and iconic racing outfit, Haru Urara represents the spirit of perseverance 
              that resonates with millions of fans worldwide. Her character design, featuring rose-pink hair tied in a ponytail, 
              magenta ear caps, and a traditional Japanese gym uniform, makes her perfect for pixel art conversion.
            </p>
          </div>
          
          {/* Image comparison showcase */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-pink-300">Original Haru Urara Art</h3>
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <img 
                  src="/pic/Haru Urara 1.png" 
                  alt="Original Haru Urara artwork showing her cheerful expression and distinctive pink hair"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="text-sm text-foreground/70">High-resolution original artwork</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-purple-300">Wplace Pixel Art Result</h3>
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <img 
                  src="/pic/Haru Urara-pixel 1.png" 
                  alt="Haru Urara converted to pixel art using Wplace tool, showing perfect color mapping and detail preservation"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg pixelated"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <p className="text-sm text-foreground/70">Perfect pixel art conversion</p>
            </div>
          </div>
        </section>

        {/* Why Haru Urara is Perfect for Pixel Art */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">Why Haru Urara is Perfect for Pixel Art</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-pink-300/20">
              <h3 className="text-xl font-semibold mb-4 text-pink-300">🎨 Distinctive Color Palette</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Rose-pink hair that stands out in pixel form</li>
                <li>• Magenta accents that translate well to limited colors</li>
                <li>• Clean white and pink striped design elements</li>
                <li>• High contrast colors perfect for small-scale art</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-300/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">🔥 Viral Popularity</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Trending across all social media platforms</li>
                <li>• High search volume and engagement</li>
                <li>• Strong community support and recognition</li>
                <li>• Perfect for gaining visibility on Wplace</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Step-by-Step Pixel Art Creation</h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Step 1: Choose Your Source Image</h3>
              <p className="text-foreground/80 mb-4">
                Select a high-quality Haru Urara image with clear details. Look for images that show:
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/70 ml-4">
                <li>Clear facial features and expression</li>
                <li>Distinctive pink hair and outfit details</li>
                <li>Good contrast and lighting</li>
                <li>Minimal background distractions</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Step 2: Upload to Wplace Pixel Tool</h3>
              <div className="bg-blue-500/10 border border-blue-300/20 rounded-lg p-4 mb-4">
                <p className="text-blue-300 font-medium">💡 Pro Tip: Use our advanced Wplace Pixel Tool for the best results!</p>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-foreground/80 ml-4">
                <li>Navigate to the Wplace Pixel Tool homepage</li>
                <li>Drag and drop your Haru Urara image or click to select</li>
                <li>The tool will automatically process your image</li>
              </ol>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Step 3: Optimize Settings for Haru Urara</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-pink-300 mb-3">Recommended Settings:</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li><strong>Pixel Block Size:</strong> 8px-16px</li>
                    <li><strong>Scaling Method:</strong> Lanczos</li>
                    <li><strong>Dithering:</strong> Floyd-Steinberg ON</li>
                    <li><strong>Palette:</strong> Wplace 64 colors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-3">Why These Settings?</h4>
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    <li>• Preserves pink hair details</li>
                    <li>• Maintains facial expression</li>
                    <li>• Optimizes for Wplace canvas</li>
                    <li>• Balances quality and readability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Step 4: Fine-tune and Download</h3>
              <p className="text-foreground/80 mb-4">
                Use our real-time preview slider to compare the original and pixelated versions. 
                Adjust settings if needed to capture Haru Urara's essence perfectly.
              </p>
              
              {/* Before/After comparison */}
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="text-center">
                  <h4 className="text-sm font-semibold mb-3 text-pink-300">Before: Original Image</h4>
                  <div className="bg-white/5 rounded-lg p-3">
                    <img 
                      src="/pic/Haru Urara 2.png" 
                      alt="Original Haru Urara artwork - second pose"
                      className="w-full max-w-40 mx-auto rounded"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-semibold mb-3 text-purple-300">After: Wplace Pixel Art</h4>
                  <div className="bg-white/5 rounded-lg p-3">
                    <img 
                      src="/pic/Haru Urara-pixel 2.png" 
                      alt="Haru Urara pixel art conversion - second pose showing excellent detail preservation"
                      className="w-full max-w-40 mx-auto rounded pixelated"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/10 border border-green-300/20 rounded-lg p-4">
                <p className="text-green-300 font-medium">✅ Perfect Result: You should clearly see her pink hair, cheerful expression, and iconic outfit!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-orange-400">Advanced Tips for Haru Urara Pixel Art</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-300/20">
              <h3 className="text-lg font-semibold mb-3 text-orange-300">🎯 Focus on Key Features</h3>
              <p className="text-foreground/80 text-sm">
                Prioritize her distinctive pink hair and cheerful expression. These are what make Haru Urara instantly recognizable.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-300/20">
              <h3 className="text-lg font-semibold mb-3 text-purple-300">🌈 Color Accuracy</h3>
              <p className="text-foreground/80 text-sm">
                Use the Wplace 64-color palette to ensure your pixel art will display correctly on the actual canvas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-300/20">
              <h3 className="text-lg font-semibold mb-3 text-blue-300">📐 Size Considerations</h3>
              <p className="text-foreground/80 text-sm">
                For Wplace, aim for 32x32 to 64x64 pixels for the best balance of detail and canvas space efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="mb-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-300/20">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">Haru Urara's Impact on Digital Art Communities</h2>
          <div className="prose prose-lg max-w-none text-foreground/90">
            <p>
              Haru Urara's appearance on r/place in April 2022 marked a significant moment for international Umamusume fans. 
              Her pixel art survived until the end of the event, demonstrating the power of community coordination and the 
              universal appeal of her character design.
            </p>
            <p>
              The success of Haru Urara pixel art on collaborative canvases has inspired countless artists to create their 
              own versions, contributing to a growing library of pixel art representations that continue to spread across 
              social media platforms.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-8 border border-pink-300/30">
          <h2 className="text-3xl font-bold mb-4 text-pink-400">Ready to Create Your Haru Urara Pixel Art?</h2>
          <p className="text-lg text-foreground/80 mb-6">
            Join thousands of artists who have already created amazing Haru Urara pixel art using our professional tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🎨 Start Creating Now
            </a>
            <a 
              href="/tutorials" 
              className="inline-flex items-center justify-center px-8 py-3 border border-purple-300 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              📚 More Tutorials
            </a>
          </div>
        </section>

        {/* SEO Footer */}
        <footer className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-foreground/60 text-sm">
            <p>
              Create professional Haru Urara pixel art with the #1 Wplace pixel converter. 
              Perfect for r/place, digital art projects, and Umamusume fan creations.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="text-pink-400">#HaruUrara</span>
              <span className="text-purple-400">#Umamusume</span>
              <span className="text-blue-400">#PixelArt</span>
              <span className="text-green-400">#Wplace</span>
              <span className="text-orange-400">#rplace</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
} 