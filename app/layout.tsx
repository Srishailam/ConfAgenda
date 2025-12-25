import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { ThemeProvider } from './lib/theme-context';
import { PostHogProvider } from './lib/posthog-provider';

export const metadata: Metadata = {
  title: 'ConfAgenda | Conference Schedule',
  description: 'Beautiful, configurable conference schedule application',
  keywords: ['conference', 'schedule', 'agenda', 'events'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0f',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('confagenda-theme');
                  var resolved = theme;
                  if (!theme || theme === 'system') {
                    resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.add(resolved);
                  document.documentElement.style.colorScheme = resolved;
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased bg-[var(--color-background)] text-[var(--color-text-primary)]">
        <Suspense fallback={null}>
          <PostHogProvider>
            <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
          </PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
