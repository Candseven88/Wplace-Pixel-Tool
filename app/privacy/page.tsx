import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Wplace Pixel Tool.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p>
        Wplace Pixel Tool runs entirely in your browser. Images are processed locally and are not uploaded to our servers.
      </p>
      <p>
        We do not collect personal information. Basic, privacy-friendly analytics may be added later to understand product usage without tracking individuals.
      </p>
      <p>
        If you have questions, contact us at support@example.com.
      </p>
    </div>
  );
} 