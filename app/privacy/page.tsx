import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Wplace Pixel Tool',
  description: 'Detailed privacy policy explaining how Wplace Pixel Tool collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
      
      <p className="text-gray-600">
        <strong>Last Updated:</strong> October 15, 2025
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to Wplace Pixel Tool ("we," "our," or "us"). We are committed to protecting your privacy and being transparent about our data practices. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://wplace.website" className="text-blue-600 hover:underline">wplace.website</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        
        <h3 className="text-xl font-semibold mt-4">2.1 Image Processing</h3>
        <p>
          <strong>Local Processing Only:</strong> All image processing happens entirely in your browser. Your images are NEVER uploaded to our servers, stored, or transmitted over the internet. This is a core principle of our service.
        </p>

        <h3 className="text-xl font-semibold mt-4">2.2 Analytics and Usage Data</h3>
        <p>
          We may collect anonymous usage data to improve our service, including:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Page views and navigation patterns</li>
          <li>Device type and browser information</li>
          <li>General geographic location (country/city level only)</li>
          <li>Feature usage statistics</li>
          <li>Performance metrics (load times, error rates)</li>
        </ul>
        <p className="mt-2">
          This data is collected anonymously and cannot be used to identify individual users.
        </p>

        <h3 className="text-xl font-semibold mt-4">2.3 Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking technologies to enhance your experience:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Essential Cookies:</strong> Required for basic site functionality (language preferences, settings)</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Advertising Cookies:</strong> Used by Google AdSense to display relevant advertisements</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Third-Party Advertising (Google AdSense)</h2>
        <p>
          We participate in the Google AdSense program to display advertisements on our website. Here's how this affects you:
        </p>
        
        <h3 className="text-xl font-semibold mt-4">3.1 Google AdSense</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Google uses cookies to serve ads based on your prior visits to our website and other websites</li>
          <li>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet</li>
          <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a></li>
          <li>You can also opt out of third-party vendor cookies at <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a></li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">3.2 Third-Party Privacy Policies</h3>
        <p>
          Our Privacy Policy does not apply to advertisers or partners. We advise you to review the respective Privacy Policies of these third-party ad servers:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Advertising Policies</a></li>
          <li><a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. How We Use Your Information</h2>
        <p>We use the collected information for:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Providing and maintaining our service</li>
          <li>Improving user experience and website functionality</li>
          <li>Understanding usage patterns and optimizing performance</li>
          <li>Displaying relevant advertisements through Google AdSense</li>
          <li>Detecting and preventing technical issues</li>
          <li>Complying with legal obligations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your information:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>All image processing occurs locally in your browser - no uploads</li>
          <li>HTTPS encryption for all web traffic</li>
          <li>Regular security audits and updates</li>
          <li>Minimal data collection principles</li>
        </ul>
        <p className="mt-2">
          However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Your Rights and Choices</h2>
        <p>You have the following rights regarding your privacy:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Cookie Control:</strong> You can disable cookies through your browser settings</li>
          <li><strong>Ad Personalization:</strong> Opt out of personalized ads via Google Ads Settings</li>
          <li><strong>Data Access:</strong> Request information about any data we hold (though we collect minimal data)</li>
          <li><strong>Do Not Track:</strong> We respect browser Do Not Track signals</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Children's Privacy</h2>
        <p>
          Our service is not directed to children under 13 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. International Data Transfers</h2>
        <p>
          Our service is hosted globally via Cloudflare's content delivery network. By using our service, you consent to your information being processed in countries outside your residence, which may have different data protection laws.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. GDPR Compliance (EU Users)</h2>
        <p>
          If you are located in the European Economic Area (EEA), you have additional rights under GDPR:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Right to access your personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Rights related to automated decision-making</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. CCPA Compliance (California Users)</h2>
        <p>
          California residents have specific rights under the California Consumer Privacy Act (CCPA):
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Right to know what personal information is collected</li>
          <li>Right to know if personal information is sold or disclosed</li>
          <li>Right to say no to the sale of personal information</li>
          <li>Right to access your personal information</li>
          <li>Right to equal service and price</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">11. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Posting the new Privacy Policy on this page</li>
          <li>Updating the "Last Updated" date at the top</li>
          <li>For significant changes, providing prominent notice on our website</li>
        </ul>
        <p className="mt-2">
          You are advised to review this Privacy Policy periodically for any changes. Changes are effective when posted.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">12. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-none space-y-2 ml-4">
          <li><strong>Email:</strong> <a href="mailto:privacy@wplace.website" className="text-blue-600 hover:underline">privacy@wplace.website</a></li>
          <li><strong>Website:</strong> <a href="https://wplace.website/contact" className="text-blue-600 hover:underline">https://wplace.website/contact</a></li>
        </ul>
      </section>

      <section className="space-y-4 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="font-medium">
          In summary: We respect your privacy. Your images are processed locally and never uploaded. We use Google AdSense for advertising, which may use cookies for personalization. You have full control over your data and privacy settings.
        </p>
      </section>
    </div>
  );
} 