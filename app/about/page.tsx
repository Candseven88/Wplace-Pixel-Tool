import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Wplace Pixel Tool',
  description: 'Learn about Wplace Pixel Tool, our mission, values, and the team behind the world\'s most advanced pixel art converter.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">About Wplace Pixel Tool</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-lg">
          We believe pixel art creation should be accessible, powerful, and privacy-respecting. Wplace Pixel Tool empowers creators worldwide to transform their images into stunning pixel art without compromising their privacy or creativity.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What We Do</h2>
        <p>
          Wplace Pixel Tool is a free, browser-based pixel art converter specifically designed for the Wplace platform. Our tool helps players and artists convert images into Wplace-compatible pixel grids using the official 64-color palette.
        </p>
        <p>
          Unlike other tools, everything runs entirely in your browser - no uploads, no accounts, no cost, no privacy concerns.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p>
          Founded in 2024, Wplace Pixel Tool was born from the Wplace community's need for a reliable, privacy-first pixel art converter. We noticed that existing tools either:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Required uploading images to servers (privacy risk)</li>
          <li>Used basic algorithms (poor quality results)</li>
          <li>Lacked multi-language support (excluding global users)</li>
          <li>Had complicated interfaces (difficult to use)</li>
        </ul>
        <p className="mt-4">
          We set out to solve these problems with a tool that prioritizes:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Privacy:</strong> 100% browser-based processing</li>
          <li><strong>Quality:</strong> Professional-grade algorithms (Lanczos, Floyd-Steinberg)</li>
          <li><strong>Accessibility:</strong> Support for 9 languages</li>
          <li><strong>Simplicity:</strong> Intuitive interface for all skill levels</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🔒 Privacy First</h3>
            <p>
              Your images never leave your device. We don't collect, store, or transmit your creative work. Your privacy is non-negotiable.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🎨 Quality Matters</h3>
            <p>
              We use professional-grade algorithms to deliver the best possible results. Your art deserves nothing less than excellence.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🌍 Global Access</h3>
            <p>
              Pixel art is universal. We support 9 languages to ensure creators worldwide can use our tool in their native language.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">💡 Open Innovation</h3>
            <p>
              We embrace open source principles and community feedback to continuously improve and evolve our tool.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Technology</h2>
        <p>
          We leverage cutting-edge web technologies to deliver a seamless experience:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Next.js 15:</strong> Modern React framework for optimal performance</li>
          <li><strong>TypeScript:</strong> Type-safe code for reliability</li>
          <li><strong>Canvas API:</strong> High-performance image processing</li>
          <li><strong>Lanczos Resampling:</strong> Superior image scaling algorithm</li>
          <li><strong>Floyd-Steinberg Dithering:</strong> Professional color quantization</li>
          <li><strong>Cloudflare Pages:</strong> Global CDN for fast access worldwide</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <p>
          We're a passionate team of developers, designers, and pixel art enthusiasts dedicated to building the best tools for the creative community. Our team combines expertise in:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Computer graphics and image processing algorithms</li>
          <li>Web development and performance optimization</li>
          <li>User experience and interface design</li>
          <li>Privacy and security best practices</li>
          <li>Internationalization and localization</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Commitment</h2>
        <p>
          We are committed to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Keeping the tool free:</strong> No paywalls, no premium tiers, no hidden costs</li>
          <li><strong>Protecting privacy:</strong> No tracking, no data collection, no compromises</li>
          <li><strong>Continuous improvement:</strong> Regular updates and new features</li>
          <li><strong>Community support:</strong> Listening to and acting on user feedback</li>
          <li><strong>Transparency:</strong> Open communication about our practices and policies</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Community & Recognition</h2>
        <p>
          We're honored to be recognized by the creative community:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>🌟 Trusted by over 50,000+ monthly users worldwide</li>
          <li>🌍 Used in 120+ countries across 6 continents</li>
          <li>🎨 Featured by pixel art communities and forums</li>
          <li>⭐ Highly rated for privacy and quality</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Wplace Platform</h2>
        <p>
          <strong>Important Note:</strong> Wplace Pixel Tool is an independent, community-created tool. We are not affiliated with, endorsed by, or sponsored by the official Wplace platform. We're fans and supporters of the Wplace community, building tools to enhance the creative experience.
        </p>
        <p>
          All generated content is designed to be compatible with Wplace's official 64-color palette. Users are responsible for following Wplace's community guidelines and terms of service when using generated content on the platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sustainability & Support</h2>
        <p>
          We maintain this free service through ethical advertising (Google AdSense) and community support. We carefully balance monetization with user experience:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Non-intrusive ad placement</li>
          <li>No pop-ups or aggressive advertising</li>
          <li>Respect for user privacy and choices</li>
          <li>Transparent about advertising practices</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Future Vision</h2>
        <p>
          We're constantly working to improve and expand our offerings:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>🤖 AI-enhanced pixel art generation</li>
          <li>🎬 Animated GIF support</li>
          <li>📦 Batch processing capabilities</li>
          <li>🎨 Custom palette creation tools</li>
          <li>🎓 Educational resources and tutorials</li>
          <li>🔌 API access for developers</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Get Involved</h2>
        <p>
          We love hearing from our community! Here's how you can get involved:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Feedback:</strong> Share your thoughts and suggestions</li>
          <li><strong>Bug Reports:</strong> Help us improve by reporting issues</li>
          <li><strong>Feature Requests:</strong> Tell us what features you'd like to see</li>
          <li><strong>Translations:</strong> Help us support more languages</li>
          <li><strong>Share:</strong> Tell others about our tool</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          We'd love to hear from you! Reach out for:
        </p>
        <ul className="list-none space-y-3 ml-4 mt-4">
          <li>
            <strong>General Inquiries:</strong>{' '}
            <a href="mailto:hello@wplace.website" className="text-blue-600 hover:underline">
              hello@wplace.website
            </a>
          </li>
          <li>
            <strong>Technical Support:</strong>{' '}
            <a href="mailto:support@wplace.website" className="text-blue-600 hover:underline">
              support@wplace.website
            </a>
          </li>
          <li>
            <strong>Privacy Questions:</strong>{' '}
            <a href="mailto:privacy@wplace.website" className="text-blue-600 hover:underline">
              privacy@wplace.website
            </a>
          </li>
          <li>
            <strong>Legal Matters:</strong>{' '}
            <a href="mailto:legal@wplace.website" className="text-blue-600 hover:underline">
              legal@wplace.website
            </a>
          </li>
          <li>
            <strong>Contact Form:</strong>{' '}
            <a href="/contact" className="text-blue-600 hover:underline">
              Visit our contact page
            </a>
          </li>
        </ul>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold">Thank You!</h2>
        <p className="text-lg">
          Thank you for being part of our community. Every image you create, every piece of feedback you share, and every person you tell about our tool helps us grow and improve. Together, we're making pixel art creation more accessible and enjoyable for everyone.
        </p>
        <p className="font-medium">
          — The Wplace Pixel Tool Team
        </p>
      </section>
    </div>
  );
} 