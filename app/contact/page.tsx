import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Wplace Pixel Tool',
  description: 'Get in touch with the Wplace Pixel Tool team. We\'re here to help with questions, feedback, and support.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
      
      <p className="text-lg text-gray-600">
        We'd love to hear from you! Whether you have questions, feedback, or need support, we're here to help.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">📧</span>
              General Inquiries
            </h3>
            <p className="text-gray-700">
              For general questions, partnership opportunities, or any other inquiries.
            </p>
            <a 
              href="mailto:hello@wplace.website" 
              className="text-blue-600 hover:underline font-medium block"
            >
              hello@wplace.website
            </a>
          </div>

          <div className="bg-green-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">🛠️</span>
              Technical Support
            </h3>
            <p className="text-gray-700">
              Need help with the tool? Having technical issues? We're here to assist.
            </p>
            <a 
              href="mailto:support@wplace.website" 
              className="text-green-600 hover:underline font-medium block"
            >
              support@wplace.website
            </a>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">🔒</span>
              Privacy & Data
            </h3>
            <p className="text-gray-700">
              Questions about privacy, data handling, or GDPR/CCPA compliance.
            </p>
            <a 
              href="mailto:privacy@wplace.website" 
              className="text-purple-600 hover:underline font-medium block"
            >
              privacy@wplace.website
            </a>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold flex items-center">
              <span className="text-2xl mr-3">⚖️</span>
              Legal & Business
            </h3>
            <p className="text-gray-700">
              Legal inquiries, terms of service questions, or business matters.
            </p>
            <a 
              href="mailto:legal@wplace.website" 
              className="text-yellow-600 hover:underline font-medium block"
            >
              legal@wplace.website
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What to Expect</h2>
        <div className="bg-gray-50 p-6 rounded-lg space-y-3">
          <p>
            <strong>Response Time:</strong> We typically respond within 24-48 hours during business days.
          </p>
          <p>
            <strong>Support Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (UTC)
          </p>
          <p>
            <strong>Languages:</strong> We provide support in English. For other languages, we'll do our best to assist using translation tools.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <p>
          Before reaching out, you might find your answer in our{' '}
          <a href="/faq" className="text-blue-600 hover:underline">FAQ section</a>.
          Common topics include:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>How to use the pixel art converter</li>
          <li>Supported image formats and sizes</li>
          <li>Privacy and data security questions</li>
          <li>Browser compatibility issues</li>
          <li>Export and download options</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Report Issues</h2>
        <p>
          Found a bug or experiencing technical problems? Please include:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Your browser name and version</li>
          <li>Your operating system</li>
          <li>Steps to reproduce the issue</li>
          <li>Screenshots if applicable</li>
          <li>Any error messages you received</li>
        </ul>
        <p className="mt-3">
          Send bug reports to:{' '}
          <a href="mailto:support@wplace.website" className="text-blue-600 hover:underline font-medium">
            support@wplace.website
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Feature Requests</h2>
        <p>
          Have an idea for a new feature? We love hearing suggestions from our community!
          Your feedback helps us prioritize what to build next.
        </p>
        <p>
          Email your feature requests to:{' '}
          <a href="mailto:hello@wplace.website" className="text-blue-600 hover:underline font-medium">
            hello@wplace.website
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Community & Social</h2>
        <p>
          Connect with us and the Wplace Pixel Tool community:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">🐦 Twitter</h3>
            <a 
              href="https://twitter.com/wplace_tool" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @wplace_tool
            </a>
          </div>
          
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">💬 Discord</h3>
            <a 
              href="https://discord.gg/wplace" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community
            </a>
          </div>
          
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">🐙 GitHub</h3>
            <a 
              href="https://github.com/wplace-tool" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Partnership & Collaboration</h2>
        <p>
          Interested in partnering with us or collaborating on a project?
          We're always open to interesting opportunities that align with our values.
        </p>
        <p>
          Contact us at:{' '}
          <a href="mailto:hello@wplace.website" className="text-blue-600 hover:underline font-medium">
            hello@wplace.website
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Press & Media</h2>
        <p>
          Media inquiries, press kits, or interview requests:
        </p>
        <p>
          Email:{' '}
          <a href="mailto:press@wplace.website" className="text-blue-600 hover:underline font-medium">
            press@wplace.website
          </a>
        </p>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold">We Value Your Privacy</h2>
        <p>
          When you contact us, we only use your email address to respond to your inquiry.
          We never share, sell, or use your contact information for marketing purposes.
          Your privacy is important to us.
        </p>
        <p className="text-sm text-gray-600">
          Read our full{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          {' '}for more information.
        </p>
      </section>

      <section className="text-center space-y-4 pt-8">
        <h2 className="text-2xl font-semibold">Thank You!</h2>
        <p className="text-lg text-gray-600">
          We appreciate you taking the time to reach out. Your feedback and support help us make Wplace Pixel Tool better for everyone.
        </p>
      </section>
    </div>
  );
}

