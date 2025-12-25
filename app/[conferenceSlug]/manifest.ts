import type { MetadataRoute } from 'next';
import { getConferenceConfig, getAllConferenceSlugs } from '@/app/config/conferences';

// Generate static params for all conferences
export async function generateStaticParams() {
  const slugs = getAllConferenceSlugs();
  return slugs.map((slug) => ({
    conferenceSlug: slug,
  }));
}

export default async function manifest({
  params,
}: {
  params: Promise<{ conferenceSlug: string }>;
}): Promise<MetadataRoute.Manifest> {
  const { conferenceSlug } = await params;
  const config = getConferenceConfig(conferenceSlug);

  // Fallback manifest if config not found
  if (!config) {
    return {
      name: 'ConfAgenda',
      short_name: 'ConfAgenda',
      description: 'Conference Schedule App',
      start_url: '/',
      display: 'standalone',
      background_color: '#0a0a0f',
      theme_color: '#6366f1',
    };
  }

  const { pwa, seo, theme } = config;

  return {
    name: pwa.name,
    short_name: pwa.shortName,
    description: pwa.description || seo.description,
    start_url: `/${conferenceSlug}`,
    display: pwa.display,
    background_color: pwa.backgroundColor || theme.backgroundColor,
    theme_color: pwa.themeColor || theme.primaryColor,
    orientation: pwa.orientation,
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: pwa.categories,
    screenshots: [
      {
        src: '/screenshots/schedule.png',
        sizes: '1280x720',
        type: 'image/png',
      },
    ],
  };
}

