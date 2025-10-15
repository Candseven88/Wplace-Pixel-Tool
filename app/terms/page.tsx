import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Wplace Pixel Tool',
  description: 'Terms and conditions for using Wplace Pixel Tool, including user responsibilities and service limitations.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
      
      <p className="text-gray-600">
        <strong>Last Updated:</strong> October 15, 2025
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
        <p>
          By accessing or using Wplace Pixel Tool ("Service," "Tool," "we," "us," or "our") at <a href="https://wplace.website" className="text-blue-600 hover:underline">wplace.website</a>, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Description of Service</h2>
        <p>
          Wplace Pixel Tool is a free, browser-based image processing tool that converts images into pixel art format compatible with the Wplace platform. The Service includes:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Image to pixel art conversion</li>
          <li>Multiple scaling algorithms (Nearest, Bilinear, Lanczos)</li>
          <li>Floyd-Steinberg dithering</li>
          <li>Custom palette support</li>
          <li>Real-time preview functionality</li>
          <li>Export capabilities</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Use License</h2>
        <h3 className="text-xl font-semibold mt-4">3.1 Permission Granted</h3>
        <p>
          We grant you a personal, non-exclusive, non-transferable, limited license to use the Service for lawful purposes only. This includes:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Personal use</li>
          <li>Commercial projects</li>
          <li>Educational purposes</li>
          <li>Content creation</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">3.2 Restrictions</h3>
        <p>You agree NOT to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Reverse engineer, decompile, or disassemble the Service</li>
          <li>Use the Service for any illegal or unauthorized purpose</li>
          <li>Violate any laws in your jurisdiction</li>
          <li>Attempt to bypass any security measures</li>
          <li>Overload or interfere with the Service's infrastructure</li>
          <li>Scrape or harvest data from the Service</li>
          <li>Remove any copyright or proprietary notices</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. User Responsibilities</h2>
        
        <h3 className="text-xl font-semibold mt-4">4.1 Content Ownership</h3>
        <p>
          You retain all rights to images you process through our Service. You are solely responsible for:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Ensuring you have the right to use and process the images</li>
          <li>Complying with copyright and intellectual property laws</li>
          <li>Obtaining necessary permissions for third-party content</li>
          <li>Ensuring generated content complies with Wplace guidelines</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">4.2 Appropriate Use</h3>
        <p>
          You agree not to process images that:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Violate any laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Contain illegal, harmful, or offensive content</li>
          <li>Promote violence, discrimination, or hate speech</li>
          <li>Violate others' privacy or publicity rights</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Privacy and Data Processing</h2>
        <p>
          All image processing occurs locally in your browser. We do not upload, store, or transmit your images to our servers. For complete information about data collection and usage, please review our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Intellectual Property Rights</h2>
        
        <h3 className="text-xl font-semibold mt-4">6.1 Our Content</h3>
        <p>
          The Service and its original content (excluding user-generated content), features, and functionality are owned by Wplace Pixel Tool and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>

        <h3 className="text-xl font-semibold mt-4">6.2 Open Source</h3>
        <p>
          Portions of the Service may be open source software licensed under the MIT License. You may use, copy, and distribute such code in accordance with the respective license terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Disclaimer of Warranties</h2>
        <p className="font-medium">
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
        </p>
        <p>
          We do not warrant that:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>The Service will meet your specific requirements</li>
          <li>The Service will be uninterrupted, timely, secure, or error-free</li>
          <li>Results obtained from using the Service will be accurate or reliable</li>
          <li>Any errors in the Service will be corrected</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
        <p className="font-medium">
          IN NO EVENT SHALL WPLACE PIXEL TOOL, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
        </p>
        <p>
          This includes, without limitation:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
          <li>Unauthorized access to or alteration of your transmissions or data</li>
          <li>Statements or conduct of any third party on the Service</li>
          <li>Any other matter relating to the Service</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. Third-Party Services</h2>
        
        <h3 className="text-xl font-semibold mt-4">9.1 Wplace Platform</h3>
        <p>
          This Service is not affiliated with, endorsed by, or sponsored by the official Wplace platform. Use of generated content on Wplace is subject to Wplace's own terms and community guidelines.
        </p>

        <h3 className="text-xl font-semibold mt-4">9.2 Advertising</h3>
        <p>
          We use Google AdSense to display advertisements. Your interaction with advertisements is governed by the advertiser's terms and privacy policies. We are not responsible for third-party content or services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Wplace Pixel Tool and its licensors, employees, contractors, agents, officers, and directors from any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Your use and access of the Service</li>
          <li>Your violation of any term of these Terms</li>
          <li>Your violation of any third-party right, including intellectual property or privacy rights</li>
          <li>Any claim that your content caused damage to a third party</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">11. Termination</h2>
        <p>
          We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will immediately cease.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">12. Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide at least 30 days' notice prior to new terms taking effect</li>
          <li>Post a notice on the Service homepage</li>
          <li>Update the "Last Updated" date at the top of these Terms</li>
        </ul>
        <p className="mt-2">
          Your continued use of the Service after changes become effective constitutes your acceptance of the revised Terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">13. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with international laws, without regard to conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">14. Dispute Resolution</h2>
        <p>
          Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration, except that each party retains the right to seek injunctive or other equitable relief in a court of competent jurisdiction.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">15. Severability</h2>
        <p>
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect. These Terms constitute the entire agreement between us regarding our Service.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">16. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us:
        </p>
        <ul className="list-none space-y-2 ml-4">
          <li><strong>Email:</strong> <a href="mailto:legal@wplace.website" className="text-blue-600 hover:underline">legal@wplace.website</a></li>
          <li><strong>Website:</strong> <a href="https://wplace.website/contact" className="text-blue-600 hover:underline">https://wplace.website/contact</a></li>
        </ul>
      </section>

      <section className="space-y-4 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="font-medium">
          By using Wplace Pixel Tool, you agree to use it responsibly and legally. We provide the service "as is" and are not liable for any damages. You retain ownership of your content and are responsible for ensuring you have the rights to use it. Questions? Contact us at legal@wplace.website.
        </p>
      </section>
    </div>
  );
} 