import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Wplace Pixel Tool.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-bold">Terms of Service</h1>
      <p>
        By using Wplace Pixel Tool, you agree to use the service at your own risk. The tool is provided “as is” without warranties.
      </p>
      <p>
        You are responsible for ensuring that any generated content complies with Wplace guidelines and applicable laws.
      </p>
      <p>
        We may update these terms from time to time. Continued use constitutes acceptance of the updated terms.
      </p>
    </div>
  );
} 