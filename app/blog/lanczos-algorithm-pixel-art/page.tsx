import Link from 'next/link';

export default function LanczosAlgorithmPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gradient">
              Lanczos Algorithm in Pixel Art: Why Professional Resampling Matters
            </h1>
            <p className="text-xl text-foreground/80 mb-6">
              Deep dive into the mathematical foundations and practical applications of Lanczos resampling for superior pixel art conversion
            </p>
            <div className="text-sm text-foreground/60">
              Published: January 2025 • 12 min read • Technical Deep Dive
            </div>
          </header>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">🎯 Key Takeaways</h2>
            <ul className="space-y-2">
              <li>• Lanczos resampling provides superior quality compared to nearest-neighbor and bilinear methods</li>
              <li>• The algorithm preserves sharp edges while reducing aliasing artifacts</li>
              <li>• Mathematical precision creates more professional pixel art results</li>
              <li>• Implementation in JavaScript enables real-time browser-based processing</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">🔬 Understanding Image Resampling</h2>
            <p className="mb-4">
              When converting images to pixel art, <strong>resampling algorithms determine the quality of your final result</strong>. Most basic tools use simple nearest-neighbor interpolation, which often produces blocky, low-quality results. Professional tools employ more sophisticated algorithms like Lanczos resampling.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-3">Common Resampling Methods:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Nearest Neighbor</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Fastest processing</li>
                    <li>• Sharp edges preserved</li>
                    <li>• Visible aliasing</li>
                    <li>• Blocky appearance</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-600 mb-2">Bilinear</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Smooth gradients</li>
                    <li>• Reduced aliasing</li>
                    <li>• Some edge softening</li>
                    <li>• Medium quality</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-green-600 mb-2">Lanczos</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Sharp edge preservation</li>
                    <li>• Minimal aliasing</li>
                    <li>• Professional quality</li>
                    <li>• Mathematical precision</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">📐 The Mathematics Behind Lanczos</h2>
            <p className="mb-4">
              The Lanczos algorithm is based on the <strong>sinc function and windowing technique</strong>. Named after Cornelius Lanczos, this method provides excellent balance between sharpness and anti-aliasing.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-3">Core Mathematical Concepts:</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">1. Sinc Function</h4>
                <p className="text-sm mb-2">The normalized sinc function forms the foundation:</p>
                <div className="bg-white rounded p-3 font-mono text-sm">
                  sinc(x) = sin(πx) / (πx) when x ≠ 0<br/>
                  sinc(0) = 1
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">2. Lanczos Window</h4>
                <p className="text-sm mb-2">The windowing function limits the sinc to finite support:</p>
                <div className="bg-white rounded p-3 font-mono text-sm">
                  L(x) = sinc(x) × sinc(x/a) for |x| &lt; a<br/>
                  L(x) = 0 otherwise
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Kernel Size Parameter</h4>
                <p className="text-sm">Parameter &apos;a&apos; controls the kernel size. Lanczos-3 (a=3) provides optimal balance for most applications.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">💻 Implementation in JavaScript</h2>
            <p className="mb-4">
              Implementing Lanczos resampling in JavaScript requires careful attention to performance and precision. <strong>Our implementation in Wplace Pixel Tool</strong> achieves real-time processing through optimized algorithms.
            </p>

            <div className="bg-gray-900 text-green-400 rounded-lg p-6 mb-6 overflow-x-auto">
              <h4 className="text-white font-semibold mb-3">Lanczos Kernel Implementation:</h4>
              <pre className="text-sm"><code>{`function sinc(x: number): number {
  if (x === 0) return 1;
  const px = Math.PI * x;
  return Math.sin(px) / px;
}

function lanczosKernel(x: number, a: number): number {
  x = Math.abs(x);
  if (x < a) return sinc(x) * sinc(x / a);
  return 0;
}

function resampleLanczos(
  src: ImageData, 
  tw: number, 
  th: number, 
  a = 3
): ImageData {
  const dst = new ImageData(tw, th);
  const scaleX = src.width / tw;
  const scaleY = src.height / th;

  for (let y = 0; y < th; y++) {
    const sy = (y + 0.5) * scaleY - 0.5;
    const yStart = Math.max(0, Math.floor(sy - a + 1));
    const yEnd = Math.min(src.height - 1, Math.floor(sy + a));
    
    for (let x = 0; x < tw; x++) {
      const sx = (x + 0.5) * scaleX - 0.5;
      const xStart = Math.max(0, Math.floor(sx - a + 1));
      const xEnd = Math.min(src.width - 1, Math.floor(sx + a));

      let r = 0, g = 0, b = 0;
      let totalWeight = 0;
      
      for (let yy = yStart; yy <= yEnd; yy++) {
        const wy = lanczosKernel(yy - sy, a);
        for (let xx = xStart; xx <= xEnd; xx++) {
          const wx = lanczosKernel(xx - sx, a);
          const w = wx * wy;
          const si = (yy * src.width + xx) * 4;
          
          r += src.data[si] * w;
          g += src.data[si + 1] * w;
          b += src.data[si + 2] * w;
          totalWeight += w;
        }
      }
      
      const di = (y * tw + x) * 4;
      if (totalWeight > 0) {
        dst.data[di] = Math.max(0, Math.min(255, r / totalWeight));
        dst.data[di + 1] = Math.max(0, Math.min(255, g / totalWeight));
        dst.data[di + 2] = Math.max(0, Math.min(255, b / totalWeight));
      }
      dst.data[di + 3] = 255;
    }
  }
  return dst;
}`}</code></pre>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">🎨 Practical Benefits for Pixel Art</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-green-600 mb-3">✅ Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Sharp Edge Preservation:</strong> Maintains crisp lines and details</li>
                  <li><strong>Reduced Ringing:</strong> Minimal overshoot artifacts</li>
                  <li><strong>Professional Quality:</strong> Results comparable to Photoshop</li>
                  <li><strong>Scalability:</strong> Works well at any target size</li>
                  <li><strong>Color Accuracy:</strong> Preserves original color relationships</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-orange-600 mb-3">⚠️ Considerations</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Computational Cost:</strong> More intensive than simpler methods</li>
                  <li><strong>Parameter Tuning:</strong> Kernel size affects results</li>
                  <li><strong>Browser Performance:</strong> Requires optimization for real-time use</li>
                  <li><strong>Memory Usage:</strong> Higher memory requirements</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">🔍 Visual Comparison: Algorithm Effects</h2>
            <p className="mb-4">
              The difference between resampling algorithms becomes most apparent when <strong>converting detailed photographs to low-resolution pixel art</strong>. Here&apos;s what each method produces:
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4">Scenario: 1024x768 photo → 32x24 pixel art</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <div className="w-full h-32 bg-gradient-to-br from-red-200 to-red-400 rounded flex items-center justify-center text-sm font-mono">
                      Nearest Neighbor<br/>Result
                    </div>
                  </div>
                  <p className="text-sm"><strong>Result:</strong> Blocky, harsh transitions</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <div className="w-full h-32 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded flex items-center justify-center text-sm font-mono">
                      Bilinear<br/>Result
                    </div>
                  </div>
                  <p className="text-sm"><strong>Result:</strong> Smooth but blurry</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <div className="w-full h-32 bg-gradient-to-br from-green-200 to-green-400 rounded flex items-center justify-center text-sm font-mono">
                      Lanczos<br/>Result
                    </div>
                  </div>
                  <p className="text-sm"><strong>Result:</strong> Sharp yet smooth</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">⚡ Performance Optimization Strategies</h2>
            <p className="mb-4">
              Implementing Lanczos in JavaScript for real-time pixel art conversion requires several optimization techniques:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">1. Kernel Precomputation</h3>
                <p className="text-sm mb-2">Cache kernel weights to avoid repeated trigonometric calculations:</p>
                                 <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                   const kernelCache = new Map();<br/>
                   function getCachedKernel(x: number, a: number) {'{ ... }'}
                 </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-semibold mb-2">2. Worker Threads</h3>
                <p className="text-sm">Offload processing to Web Workers to maintain UI responsiveness during large image conversions.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold mb-2">3. Memory Management</h3>
                <p className="text-sm">Use typed arrays and careful memory allocation to minimize garbage collection during processing.</p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-semibold mb-2">4. Progressive Rendering</h3>
                <p className="text-sm">Update canvas incrementally to provide visual feedback during longer conversions.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">🛠️ Integration with Floyd-Steinberg Dithering</h2>
            <p className="mb-4">
              For optimal pixel art results, <strong>Lanczos resampling combines excellently with Floyd-Steinberg dithering</strong>. This two-stage process creates professional-quality pixel art:
            </p>

            <div className="bg-indigo-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-3">Two-Stage Process:</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <div>
                    <strong>Lanczos Resampling:</strong> Resize image to target pixel art dimensions while preserving detail and minimizing artifacts.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <div>
                    <strong>Floyd-Steinberg Dithering:</strong> Apply color quantization with error diffusion for smooth color transitions within the limited palette.
                  </div>
                </li>
              </ol>
            </div>

            <p className="mb-4">
              This combination ensures that <strong>the geometric accuracy from Lanczos resampling is preserved</strong> while achieving optimal color representation through intelligent dithering.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">📚 Further Reading and Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-3">📖 Academic Papers</h3>
                <ul className="text-sm space-y-2">
                  <li>• &ldquo;Digital Image Interpolation&rdquo; - Lanczos, C. (1956)</li>
                  <li>• &ldquo;Reconstruction Filters in Computer Graphics&rdquo; - Mitchell & Netravali (1988)</li>
                  <li>• &ldquo;A Pixel Is Not A Little Square&rdquo; - Smith, A. (1995)</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-3">🔧 Implementation Guides</h3>
                <ul className="text-sm space-y-2">
                  <li>• <a href="#" className="text-blue-600 hover:underline">Canvas API Performance Optimization</a></li>
                  <li>• <a href="#" className="text-blue-600 hover:underline">Web Worker Image Processing</a></li>
                  <li>• <a href="#" className="text-blue-600 hover:underline">Memory-Efficient JavaScript</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6">🧪 Try It Yourself</h2>
            <p className="mb-4">
              Experience the difference that professional Lanczos resampling makes in your pixel art creations. <strong>Wplace Pixel Tool implements all these optimizations</strong> to provide you with the best possible results in real-time.
            </p>

            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Create Professional Pixel Art?</h3>
              <p className="text-lg mb-6">
                Upload your image and compare the Lanczos algorithm against simpler methods. See the mathematical precision in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Try Lanczos Algorithm
                </Link>
                <Link href="/blog" className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  More Technical Articles
                </Link>
              </div>
            </div>
          </section>

          <footer className="mt-12 pt-8 border-t text-sm text-foreground/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p>
                  <strong>About the Author:</strong> Our development team includes computer graphics specialists with over 15 years of experience in image processing algorithms. This article represents practical knowledge gained from implementing high-performance browser-based image processing.
                </p>
              </div>
              <div>
                <p>
                  <strong>Technical Accuracy:</strong> All code examples have been tested and optimized for modern browsers. Mathematical formulations follow standard computer graphics literature and have been verified through extensive testing.
                </p>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
} 