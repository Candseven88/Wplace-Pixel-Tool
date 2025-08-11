'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLocale } from './i18n';

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to default locale
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-foreground/70">Redirecting...</p>
      </div>
    </div>
  );
} 