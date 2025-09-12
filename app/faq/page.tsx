import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about Wplace Pixel Tool, including how to use our pixel art converter, supported features, and troubleshooting tips.',
  keywords: [
    'wplace pixel tool faq',
    'pixel art converter questions',
    'wplace tool help',
    'how to use wplace pixel tool',
    'pixel art tutorial',
    'wplace canvas help'
  ]
};

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Getting Started",
    question: "What is Wplace Pixel Tool?",
    answer: "Wplace Pixel Tool is a professional pixel art converter designed specifically for Wplace canvas. It transforms any image into Wplace-ready pixel art using advanced algorithms like Lanczos resampling and Floyd-Steinberg dithering, ensuring high-quality results that match the official Wplace color palette."
  },
  {
    category: "Getting Started", 
    question: "How do I use Wplace Pixel Tool?",
    answer: "Simply upload an image by clicking 'Select Image' or drag and drop it onto the canvas. Adjust the pixel block size, choose your scaling method (Nearest Neighbor, Bilinear, or Lanczos), and optionally enable Floyd-Steinberg dithering. The tool will instantly convert your image and show a real-time preview with a comparison slider."
  },
  {
    category: "Features",
    question: "What makes Wplace Pixel Tool different from other pixel art tools?",
    answer: "Our tool offers several unique advantages: (1) Specifically designed for Wplace with official palette support, (2) Professional-grade algorithms including Lanczos scaling, (3) Complete privacy protection with 100% local processing, (4) Support for 9 languages worldwide, (5) Real-time preview with interactive comparison slider, and (6) Mobile-optimized responsive design."
  },
  {
    category: "Features",
    question: "What algorithms does the tool use?",
    answer: "We use three scaling methods: Nearest Neighbor (best for sharp, crisp pixel art), Bilinear (smooth scaling with anti-aliasing), and Lanczos (professional-grade algorithm for highest quality). We also offer Floyd-Steinberg dithering for smooth color transitions when converting to the limited Wplace palette."
  },
  {
    category: "Privacy & Security",
    question: "Is my data safe? Do you store my images?",
    answer: "Absolutely! We prioritize your privacy. All image processing happens entirely in your browser using JavaScript and Canvas API. Your images never leave your device - they are not uploaded to our servers, stored, or transmitted anywhere. This ensures 100% privacy protection for your creative work."
  },
  {
    category: "Privacy & Security",
    question: "Can I use Wplace Pixel Tool offline?",
    answer: "Yes! Our tool supports offline usage through Progressive Web App (PWA) technology. Once loaded, you can continue using the basic features even without an internet connection. Essential resources are cached locally for offline access."
  },
  {
    category: "Technical",
    question: "What image formats are supported?",
    answer: "We support all common image formats including JPG, JPEG, PNG, GIF, WebP, and BMP. The tool automatically handles format conversion and optimization for Wplace canvas compatibility."
  },
  {
    category: "Technical",
    question: "What is the maximum image size I can process?",
    answer: "The tool can handle images up to 2048x2048 pixels for optimal performance. Larger images are automatically resized to fit within this limit while maintaining aspect ratio. This ensures smooth processing on all devices while maintaining quality."
  },
  {
    category: "Mobile & Devices",
    question: "Does Wplace Pixel Tool work on mobile devices?",
    answer: "Yes! Our tool is fully responsive and optimized for mobile devices, tablets, and desktop computers. The interface adapts to your screen size, and all features work perfectly on touch devices. You can also install it as a PWA for an app-like experience."
  },
  {
    category: "Wplace Integration",
    question: "How do I use the generated pixel art in Wplace?",
    answer: "After converting your image, download the result in PNG format. The output uses the official Wplace color palette and is optimized for pixel-perfect placement on the Wplace canvas. You can then use external tools or scripts to help place the pixels on the actual Wplace canvas."
  },
  {
    category: "Wplace Integration", 
    question: "Why should I use the official Wplace palette?",
    answer: "Using the official Wplace palette ensures your pixel art will look exactly the same when placed on the actual Wplace canvas. Our tool automatically maps colors to the closest matching Wplace colors, preventing color mismatches and maintaining visual consistency."
  },
  {
    category: "Troubleshooting",
    question: "The tool seems slow or unresponsive. What should I do?",
    answer: "Try these solutions: (1) Use smaller images (under 1000x1000), (2) Close other browser tabs to free up memory, (3) Try a different scaling method (Nearest Neighbor is fastest), (4) Disable dithering for faster processing, (5) Refresh the page and try again, (6) Use a modern browser like Chrome, Firefox, or Safari."
  },
  {
    category: "Troubleshooting",
    question: "My converted image looks different from the original. Why?",
    answer: "This is normal for pixel art conversion! The tool reduces detail and color complexity to create pixel art suitable for Wplace. Try adjusting the pixel block size (smaller blocks = more detail), experiment with different scaling algorithms, or enable/disable dithering to achieve your desired look."
  }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl p-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Everything you need to know about using Wplace Pixel Tool to create amazing pixel art for Wplace canvas.
          </p>
        </header>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary border-b border-border pb-2">
                {category}
              </h2>
              <div className="space-y-3">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq, index) => (
                    <details
                      key={index}
                      className="glass rounded-xl border border-border group overflow-hidden"
                    >
                      <summary className="p-6 cursor-pointer text-lg font-medium hover:text-primary transition-colors list-none">
                        <div className="flex items-center justify-between">
                          <span className="flex-1 text-left">{faq.question}</span>
                          <span className="text-primary transition-transform group-open:rotate-180 ml-4 flex-shrink-0">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 9L12 15L18 9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-0 border-t border-border/30">
                        <p className="text-foreground/80 leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-foreground/80 mb-6">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@wplace.website"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Email Support
              </a>
              <a
                href="https://discord.gg/wplace"
                className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl border border-border text-center">
            <h4 className="font-semibold mb-2">🎨 Tutorials</h4>
            <p className="text-sm text-foreground/70 mb-4">
              Learn pixel art techniques and advanced features
            </p>
            <Link href="/tutorials" className="text-primary hover:underline">
              View Tutorials →
            </Link>
          </div>
          <div className="glass p-6 rounded-xl border border-border text-center">
            <h4 className="font-semibold mb-2">🛠️ Start Creating</h4>
            <p className="text-sm text-foreground/70 mb-4">
              Ready to make your own Wplace pixel art?
            </p>
            <Link href="/" className="text-primary hover:underline">
              Open Tool →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 