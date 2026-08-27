'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ReloadRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navEntries = window.performance.getEntriesByType('navigation');
      if (navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === 'reload') {
        if (window.location.pathname !== '/') {
          router.replace('/');
        }
      }
    }
  }, [router]);

  return null;
}
