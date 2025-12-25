'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Check if PostHog is configured
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || '';
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

function isPostHogConfigured(): boolean {
  return typeof window !== 'undefined' && POSTHOG_KEY.length > 0 && POSTHOG_KEY.startsWith('phc_');
}

// Initialize PostHog only if key is available
if (isPostHogConfigured()) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: false, // We'll handle this manually for better control
    capture_pageleave: true,
    autocapture: {
      dom_event_allowlist: ['click', 'submit'],
      element_allowlist: ['button', 'a', 'input', 'select'],
    },
  });
}

// Component to track page views
function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && isPostHogConfigured()) {
      // Extract conference slug from pathname
      const conferenceSlug = pathname.split('/')[1] || 'home';
      
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + '?' + searchParams.toString();
      }

      posthog.capture('$pageview', {
        $current_url: url,
        conference: conferenceSlug,
        path: pathname,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check on client side if PostHog is configured
    setIsEnabled(isPostHogConfigured());
  }, []);

  // If PostHog is not configured, just render children
  if (!isEnabled) {
    return <>{children}</>;
  }

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}

// Export posthog instance for direct usage
export { posthog };

