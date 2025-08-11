import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wplace.website"),
  title: {
    default: "Wplace Pixel Tool | #1 Pixel Art Converter for Wplace Canvas",
    template: "%s | Wplace Pixel Tool - Official Wplace Art Generator",
  },
  description:
    "Transform any image into Wplace-ready pixel art with Wplace Pixel Tool. The ultimate converter with official palette support, dithering options, and precise pixel control for your Wplace canvas creations.",
  keywords: [
    "Wplace Pixel Tool",
    "Wplace Pixel",
    "Wplace canvas",
    "Wplace art generator",
    "Wplace image converter",
    "pixel art for Wplace",
    "Wplace pixel converter",
    "Wplace palette",
    "Wplace pixel grid",
    "Wplace art tool",
    "Wplace pixel editor",
    "collaborative pixel art",
    "Wplace pixel creator",
    "Wplace dithering",
    "Wplace art maker",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "Wplace Pixel Tool | #1 Pixel Art Converter for Wplace Canvas",
    description:
      "Transform any image into Wplace-ready pixel art instantly. The ultimate tool with official palette support, dithering options, and precise pixel control for your Wplace canvas creations.",
    siteName: "Wplace Pixel Tool",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wplace Pixel Tool - Transform images into Wplace-ready pixel art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wplace Pixel Tool | Create Perfect Pixel Art for Wplace Canvas",
    description:
      "Transform any image into Wplace-ready pixel art instantly with our official palette converter. The #1 tool for Wplace artists and communities.",
    images: ["/twitter-image.png"],
    creator: "@wplacepixel",
    site: "@wplacepixel",
  },
  alternates: { canonical: "/" },
  icons: { 
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification_token",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KTQ01MKZ6F" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KTQ01MKZ6F');
          `}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ssogpf7fa2");
          `}
        </Script>
        
        {/* Cloudflare Web Analytics */}
        <Script id="cloudflare-analytics" defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "bfa90afd3f144bf9bc1bc348f38d6efc"}' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-secondary/10 to-transparent rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl opacity-10 animate-rotate"></div>
          <div className="pixel-grid absolute inset-0 opacity-[0.03]"></div>
        </div>
        
        <header className="glass border-b border-border sticky top-0 z-40 backdrop-blur-lg">
          <div className="mx-auto max-w-5xl px-6 h-16 flex items-center gap-6">
            <Link href="/" className="font-semibold hover:opacity-90 transition flex items-center gap-2 group">
              <Image 
                src="/logo.jpg" 
                alt="Wplace Pixel Tool Logo" 
                width={32} 
                height={32} 
                className="rounded-sm"
              />
              <span className="text-gradient text-lg">Wplace Pixel Tool</span>
            </Link>
            
            <nav className="ml-auto flex items-center gap-6 text-sm">
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/privacy" className="nav-link">Privacy</Link>
              <Link href="/terms" className="nav-link">Terms</Link>
              

            </nav>
          </div>
        </header>
        
        <main className="animate-fade-in">{children}</main>
        
        <footer className="mt-20 glass border-t border-border relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-primary/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-secondary/20 to-transparent rounded-full blur-xl"></div>
          </div>
          
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-2">
                  <Image 
                    src="/logo.jpg" 
                    alt="Wplace Pixel Tool Logo" 
                    width={40} 
                    height={40} 
                    className="rounded-lg"
                  />
                  <h3 className="text-gradient text-xl font-bold">Wplace Pixel Tool</h3>
                </div>
                <p className="text-sm text-foreground/70 max-w-md">
                  The #1 pixel art converter designed specifically for Wplace canvas. Create, share, and dominate the canvas with pixel-perfect artwork.
                </p>
                <div className="flex gap-4 pt-2">
                  <a href="#" className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground/70 hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground/70 hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>

                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Links</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors">Blog</Link></li>
                  <li><Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</Link></li>
                  <li><Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">Features</Link></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Legal</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/privacy" className="text-foreground/70 hover:text-foreground transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-foreground/70 hover:text-foreground transition-colors">Terms of Service</Link></li>
                  <li><Link href="/cookies" className="text-foreground/70 hover:text-foreground transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-border/50 text-center text-xs text-foreground/50">
              <p>© {new Date().getFullYear()} Wplace Pixel Tool. All rights reserved.</p>
              <p className="mt-1">Made with ❤️ for the Wplace community</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
