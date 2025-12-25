import { notFound } from 'next/navigation';
import type { Metadata, Viewport } from 'next';
import { getConferenceConfig, getAllConferenceSlugs } from '@/app/config/conferences';

interface ConferenceLayoutProps {
  children: React.ReactNode;
  params: Promise<{ conferenceSlug: string }>;
}

// Generate static params for all conferences
export async function generateStaticParams() {
  const slugs = getAllConferenceSlugs();
  return slugs.map((slug) => ({
    conferenceSlug: slug,
  }));
}

// Generate dynamic metadata based on conference config
export async function generateMetadata({
  params,
}: {
  params: Promise<{ conferenceSlug: string }>;
}): Promise<Metadata> {
  const { conferenceSlug } = await params;
  const config = getConferenceConfig(conferenceSlug);

  if (!config) {
    return {
      title: 'Conference Not Found',
    };
  }

  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords,
    authors: [{ name: config.name }],
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      type: 'website',
      siteName: config.name,
      ...(config.seo.ogImage && { images: [config.seo.ogImage] }),
    },
    twitter: {
      card: config.seo.twitterCard || 'summary_large_image',
      title: config.seo.title,
      description: config.seo.description,
      ...(config.seo.ogImage && { images: [config.seo.ogImage] }),
    },
    icons: config.favicon ? { icon: config.favicon } : undefined,
  };
}

// Generate dynamic viewport based on conference config
export async function generateViewport({
  params,
}: {
  params: Promise<{ conferenceSlug: string }>;
}): Promise<Viewport> {
  const { conferenceSlug } = await params;
  const config = getConferenceConfig(conferenceSlug);

  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: config?.theme.backgroundColor || '#0a0a0f',
  };
}

export default async function ConferenceLayout({
  children,
  params,
}: ConferenceLayoutProps) {
  const { conferenceSlug } = await params;
  const config = getConferenceConfig(conferenceSlug);

  if (!config) {
    notFound();
  }

  return (
    <>
      {/* Google Fonts for this conference */}
      {config.fonts.googleFontsUrl && (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={config.fonts.googleFontsUrl} rel="stylesheet" />
        </>
      )}
      <div
        className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] antialiased"
        style={{ fontFamily: config.fonts.body }}
      >
        {children}
      </div>
    </>
  );
}

