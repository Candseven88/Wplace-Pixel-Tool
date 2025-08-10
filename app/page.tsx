'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { hexToRgb, pixelizeToCanvas, type PixelizeOptions } from './lib/pixel';

type PaletteFile = { name: string; colors: string[] };

type ScaleMethod = PixelizeOptions['scaleMethod'];

export default function Home() {
  const [imageObjectUrl, setImageObjectUrl] = useState<string | null>(null);
  const [pixelBlockSize, setPixelBlockSize] = useState<number>(8);
  const [scaleMethod, setScaleMethod] = useState<ScaleMethod>('nearest');
  const [useDither, setUseDither] = useState<boolean>(false);
  const [palette, setPalette] = useState<Array<[number, number, number]>>([]);
  const [paletteName, setPaletteName] = useState<string>('Wplace 64');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Load default palette
  useEffect(() => {
    (async () => {
      const res = await fetch('/wplace_palette.json');
      const data: PaletteFile = await res.json();
      const pal = data.colors.map(hexToRgb);
      setPalette(pal);
      setPaletteName(data.name || 'Wplace 64');
    })();
  }, []);

  // Sync settings from URL on first load
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const q = new URLSearchParams(window.location.search);
    const b = parseInt(q.get('block') || '');
    const m = q.get('scale') as ScaleMethod | null;
    const d = q.get('dither');
    if (!Number.isNaN(b) && b >= 2 && b <= 64) setPixelBlockSize(b);
    if (m === 'nearest' || m === 'bilinear' || m === 'lanczos') setScaleMethod(m);
    if (d === '1' || d === 'true') setUseDither(true);
  }, []);

  // Persist settings to URL (without reloading)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const q = new URLSearchParams(window.location.search);
    q.set('block', String(pixelBlockSize));
    q.set('scale', scaleMethod);
    q.set('dither', useDither ? '1' : '0');
    const url = `${window.location.pathname}?${q.toString()}`;
    window.history.replaceState({}, '', url);
  }, [pixelBlockSize, scaleMethod, useDither]);

  const handleFiles = useCallback((files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageObjectUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  }, []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }, [handleFiles]);

  const onPaletteFile = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text) as PaletteFile;
      if (!Array.isArray(data.colors)) throw new Error('Invalid palette');
      const pal = data.colors.map(hexToRgb);
      setPalette(pal);
      setPaletteName(data.name || file.name || 'Custom Palette');
    } catch (err) {
      console.error(err);
      alert('Failed to load palette JSON. Expected { name?: string, colors: string[] }');
    }
  }, []);

  const render = useCallback(async () => {
    if (!imageRef.current || !canvasRef.current || palette.length === 0) return;
    if (!imageRef.current.complete) return;
    try {
      await pixelizeToCanvas(imageRef.current, canvasRef.current, {
        pixelBlockSize,
        scaleMethod,
        useFloydSteinbergDithering: useDither,
        palette,
        maxSourceDimension: 2048,
      });
    } catch (e) {
      console.error(e);
    }
  }, [pixelBlockSize, scaleMethod, useDither, palette]);

  useEffect(() => { void render(); }, [render, imageObjectUrl, palette]);

  const onDownload = useCallback(() => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wplace-pixel.png';
    a.click();
  }, []);

  const onShare = useCallback(async () => {
    if (!canvasRef.current) return;
    try {
      const blob: Blob | null = await new Promise((resolve) => canvasRef.current!.toBlob(resolve, 'image/png'));
      if (!blob) return onDownload();

      const files: File[] = [new File([blob], 'wplace-pixel.png', { type: 'image/png' })];

      type ShareFilesData = ShareData & { files?: File[] };
      type ShareCapableNavigator = Navigator & {
        share?: (data: ShareData | ShareFilesData) => Promise<void>;
        canShare?: (data?: ShareData | ShareFilesData) => boolean;
      };

      const n = navigator as ShareCapableNavigator;
      if (typeof n.share === 'function' && typeof n.canShare === 'function' && n.canShare({ files })) {
        await n.share({ files, title: 'Wplace Pixel' });
        return;
      }

      if ('clipboard' in navigator && typeof navigator.clipboard?.write === 'function' && 'ClipboardItem' in window) {
        const ClipboardItemCtor = (window as Window & { ClipboardItem: new (items: Record<string, Blob>) => ClipboardItem }).ClipboardItem;
        const item = new ClipboardItemCtor({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        alert('Image copied to clipboard');
        return;
      }

      onDownload();
    } catch (e) {
      console.error(e);
      onDownload();
    }
  }, [onDownload]);

  return (
    <div className="min-h-screen text-foreground">
      {/* Floating Action Button - Only visible on small screens */}
      <button 
        onClick={() => document.getElementById('file-input')?.click()}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 md:hidden ${imageObjectUrl ? 'opacity-0 pointer-events-none' : 'animate-bounce-slow'}`}
        aria-label="Upload Image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
          <line x1="16" y1="5" x2="22" y2="5"></line>
          <line x1="19" y1="2" x2="19" y2="8"></line>
          <circle cx="9" cy="9" r="2"></circle>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
        </svg>
      </button>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 z-50 p-3 rounded-full bg-foreground/10 backdrop-blur-lg text-foreground hover:bg-foreground/20 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </button>

      <div className="mx-auto max-w-6xl p-4 sm:p-6 space-y-8 sm:space-y-10">
        {/* Hero Section with enhanced visual elements */}
        <section className="relative py-8 sm:py-12 text-center space-y-4 sm:space-y-6 animate-fade-in">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30 animate-rotate"></div>
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-3xl opacity-20 animate-float"></div>
            <div className="pixel-grid absolute inset-0 opacity-10"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Wplace Pixel Tool</span>
            <span className="block mt-2 text-2xl sm:text-3xl">Ultimate Pixel Art Creator for Wplace</span>
          </h1>
          
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Transform any image into perfect Wplace-ready pixel art with our advanced converter. 
            Featuring official color palette matching, multiple scaling algorithms, and dithering options.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button onClick={() => document.getElementById('file-input')?.click()} className="btn btn-primary animated-border">
              <span className="z-10 relative px-2">Start Creating Now</span>
            </button>
            <a href="#features" className="btn btn-outline glow">Learn More</a>
          </div>
        </section>

        {/* Main tool area - Two column layout on desktop, single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left side - Controls on desktop, stacked on mobile */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:flex lg:flex-col lg:justify-between">
            {/* Pixel Settings */}
            <div className="glass rounded-xl border border-border p-4 sm:p-5 space-y-3 sm:space-y-4 hover-card">
              <div className="text-gradient text-lg font-medium">Pixel Settings</div>
              <div>
                <label className="block text-sm font-medium mb-2">Pixel block size: <span className="text-primary">{pixelBlockSize}px</span></label>
                <input
                  type="range"
                  min={2}
                  max={32}
                  step={2}
                  value={pixelBlockSize}
                  onChange={(e) => setPixelBlockSize(parseInt(e.target.value))}
                  className="w-full accent-[var(--primary)]"
                />
                <div className="flex justify-between text-xs text-foreground/50 mt-1">
                  <span>Small (2px)</span>
                  <span>Large (32px)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Scaling method</label>
                <select
                  value={scaleMethod}
                  onChange={(e) => setScaleMethod(e.target.value as ScaleMethod)}
                  className="select w-full"
                >
                  <option value="nearest">Nearest Neighbor</option>
                  <option value="bilinear">Bilinear</option>
                  <option value="lanczos">Lanczos</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Floyd–Steinberg dithering</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={useDither}
                  onClick={() => setUseDither((v) => !v)}
                  className={`toggle ${useDither ? 'bg-[var(--primary)]' : 'bg-border'}`}
                >
                  <span className={`toggle-dot ${useDither ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>

            {/* Palette */}
            <div className="glass rounded-xl border border-border p-4 sm:p-5 space-y-3 sm:space-y-4 hover-card">
              <div className="flex items-center gap-2">
                <div className="text-gradient text-lg font-medium">Palette</div>
                <span className="text-sm text-foreground/70 truncate" title={paletteName}>{paletteName}</span>
                <input id="palette-file" type="file" accept="application/json" onChange={onPaletteFile} className="hidden" />
                <label htmlFor="palette-file" className="ml-auto btn btn-outline cursor-pointer text-sm">Upload</label>
              </div>
              <div className="grid grid-cols-8 gap-1 p-2 rounded-lg bg-background/30">
                {palette.slice(0, 32).map(([r, g, b], i) => (
                  <div key={i} className="h-5 rounded-sm animate-shimmer" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} />
                ))}
              </div>
            </div>

            {/* Action Buttons - Only visible on mobile */}
            <div className="glass rounded-xl border border-border p-4 sm:p-5 space-y-3 sm:space-y-4 hover-card lg:hidden">
              <div className="text-gradient text-lg font-medium">Actions</div>
              <div className="flex gap-3">
                <button onClick={onDownload} className="btn btn-primary flex-1 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </button>
                <button onClick={onShare} className="btn btn-outline flex-1 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  Share
                </button>
              </div>
            </div>

            {/* Quick Tips - Only show when image is uploaded on mobile */}
            {imageObjectUrl && (
              <div className="glass rounded-xl border border-border p-4 sm:p-5 space-y-3 sm:space-y-4 hover-card lg:hidden">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <h3 className="text-sm font-medium">Quick Tips</h3>
                </div>
                <ul className="text-xs text-foreground/80 space-y-1 pl-5 list-disc">
                  <li>Try different block sizes for detail</li>
                  <li>Enable dithering for smoother transitions</li>
                  <li>Nearest Neighbor scaling works best for crisp pixel art</li>
                </ul>
              </div>
            )}
          </div>

          {/* Right side - Preview area with upload functionality */}
          <div className="lg:col-span-8 order-first lg:order-none lg:h-full lg:flex lg:flex-col">
            <div className="glass rounded-xl border border-border p-4 sm:p-5 h-full flex flex-col">
              {/* Upload and Preview combined */}
              <div 
                className="aspect-video w-full rounded bg-gradient-to-br from-background to-background/80 flex items-center justify-center overflow-hidden relative flex-grow"
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }}
              >
                {/* Grid pattern background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')]"></div>
                </div>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"></div>
                
                {/* Border highlight when dragging */}
                <div className={`absolute inset-0 border-2 rounded pointer-events-none transition-opacity ${isDragging ? 'border-[var(--ring)] opacity-100' : 'border-transparent opacity-0'}`}></div>
                
                {/* Content */}
                {imageObjectUrl ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      ref={imageRef}
                      src={imageObjectUrl}
                      alt="uploaded"
                      onLoad={() => render()}
                      className="hidden"
                    />
                    <canvas ref={canvasRef} className="max-w-full max-h-full shadow-2xl" />
                  </div>
                ) : (
                  <div className="text-center p-4 relative z-10 w-full flex flex-col items-center justify-center">
                    <input id="file-input" type="file" accept="image/*" onChange={onFileChange} className="hidden" />
                    <div className="opacity-70 mx-auto animate-float mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </div>
                    <div className="text-lg text-foreground/70 mb-4">Upload an image to start creating</div>
                    <label htmlFor="file-input" className="btn btn-primary animate-pulse cursor-pointer">
                      Select Image
                    </label>
                    <p className="mt-3 text-sm text-foreground/60">or drag & drop image here</p>
                  </div>
                )}
              </div>

              {/* Quick Tips and additional controls for desktop - Only show when image is uploaded */}
              {imageObjectUrl && (
                <div className="hidden lg:block mt-4 space-y-4">
                  <div className="flex justify-center gap-4">
                    <button onClick={onDownload} className="btn btn-primary py-2 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Download
                    </button>
                    <button onClick={onShare} className="btn btn-outline py-2 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                      Share
                    </button>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-3 flex items-center justify-center gap-3 text-sm text-foreground/90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <span>Tip: Try different block sizes and dithering for various effects</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-8 sm:py-10 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-gradient">Wplace Pixel Features</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass p-4 sm:p-5 rounded-xl border border-border hover-card">
              <div className="text-primary text-xl mb-2 text-center">Perfect Color Matching</div>
              <p className="text-foreground/80">
                Our algorithm automatically maps your images to the official Wplace color palette for perfect compatibility.
              </p>
            </div>
            
            <div className="glass p-4 sm:p-5 rounded-xl border border-border hover-card">
              <div className="text-primary text-xl mb-2 text-center">Advanced Algorithms</div>
              <p className="text-foreground/80">
                Choose between Nearest Neighbor, Bilinear, or Lanczos scaling for different pixel art styles.
              </p>
            </div>
            
            <div className="glass p-4 sm:p-5 rounded-xl border border-border hover-card">
              <div className="text-primary text-xl mb-2 text-center">Privacy First</div>
              <p className="text-foreground/80">
                All processing happens in your browser. No uploads, no data collection, 100% private.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced SEO Content */}
        <section className="prose prose-sm max-w-3xl mx-auto py-6 sm:py-8 glass rounded-xl border border-border p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex justify-center">
            <span className="text-gradient">Why Choose Wplace Pixel Tool?</span>
          </h2>
          
          <p>
            <strong>Wplace Pixel Tool</strong> is the premier solution for creating pixel art specifically optimized for Wplace. 
            Whether you're a seasoned artist or a beginner, our tool makes it easy to convert any image into 
            Wplace-compatible pixel art with just a few clicks.
          </p>
          
          <h3 className="text-lg sm:text-xl font-semibold mt-5 sm:mt-6 mb-2 sm:mb-3">Perfect for Wplace Artists</h3>
          <p>
            Our specialized converter ensures your creations match the exact color palette used in Wplace, 
            eliminating the frustration of color mismatches when transferring your designs. The customizable 
            pixel block size lets you create anything from detailed miniatures to large-scale pixel art masterpieces.
          </p>
          
          <h3 className="text-lg sm:text-xl font-semibold mt-5 sm:mt-6 mb-2 sm:mb-3">Professional-Grade Features</h3>
          <p>
            Wplace Pixel Tool offers advanced features typically found only in premium software:
          </p>
          <ul>
            <li>Multiple scaling algorithms (Nearest Neighbor, Bilinear, Lanczos)</li>
            <li>Floyd-Steinberg dithering for smoother color transitions</li>
            <li>Custom palette support for creative experimentation</li>
            <li>One-click sharing and downloading</li>
          </ul>
          
          <h3 className="text-lg sm:text-xl font-semibold mt-5 sm:mt-6 mb-2 sm:mb-3">Free and Browser-Based</h3>
          <p>
            Unlike other pixel art tools, Wplace Pixel Tool is completely free to use and runs entirely in your browser. 
            No downloads, no installations, and no sign-ups required. Start creating beautiful Wplace pixel art instantly 
            on any device.
          </p>
          
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-base sm:text-lg font-medium">
              Ready to create amazing pixel art for Wplace? Upload your image and start pixelizing now!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
