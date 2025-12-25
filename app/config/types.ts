// Comprehensive TypeScript types for conference configuration

export interface DayConfig {
  date: string; // ISO date string: '2025-11-19'
  label: string; // Short label: 'Wed'
  fullLabel: string; // Full label: 'Wed, Nov 19'
}

export interface ThemeConfig {
  // Primary brand colors
  primaryColor: string;
  primaryHoverColor: string;
  primaryLightColor: string;
  accentColor: string;

  // Background & Surface colors
  backgroundColor: string;
  surfaceColor: string;
  surfaceElevatedColor: string;

  // Border colors
  borderColor: string;
  borderSubtleColor: string;

  // Text colors
  textPrimaryColor: string;
  textSecondaryColor: string;
  textMutedColor: string;

  // Status colors
  nowColor: string;
  nextColor: string;
  bookmarkColor: string;
}

export interface FontConfig {
  heading: string; // Font family for headings
  body: string; // Font family for body text
  mono?: string; // Optional monospace font
  googleFontsUrl?: string; // Google Fonts import URL
}

export interface TrackConfig {
  color: string; // CSS color value
  label?: string; // Optional display label (defaults to track name)
}

export interface SessionTypeConfig {
  label: string; // Display label for the session type
  icon?: string; // Optional icon name
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  instagram?: string;
  youtube?: string;
  discord?: string;
  slack?: string;
}

export interface PWAConfig {
  name: string;
  shortName: string;
  description: string;
  themeColor: string;
  backgroundColor: string;
  display: 'standalone' | 'fullscreen' | 'minimal-ui' | 'browser';
  orientation: 'portrait' | 'landscape' | 'portrait-primary' | 'landscape-primary';
  categories: string[];
}

export interface ConferenceConfig {
  // Identity
  slug: string; // URL-friendly identifier: 'ai-engineer-2025'
  name: string; // Full name: 'AI Engineer Code Summit'
  shortName: string; // Short name: 'AI Engineer 2025'
  tagline: string; // Tagline: 'The premier event for AI engineers'

  // Dates & Location
  dateRange: string; // Display string: 'November 19-22, 2025'
  location: string; // Location: 'New York City'
  year: number;
  timezone: string; // IANA timezone: 'America/New_York'
  days: DayConfig[];
  defaultDayIndex: number; // Index of the default day to show

  // Branding
  theme: ThemeConfig;
  fonts: FontConfig;
  logo?: string; // Path to logo image
  favicon?: string; // Path to favicon

  // Track Configuration (dynamic, not hardcoded)
  tracks: Record<string, TrackConfig>;

  // Session Types (configurable labels)
  sessionTypes: Record<string, SessionTypeConfig>;

  // Locale & Formatting
  locale: string; // BCP 47 locale: 'en-US'
  timeFormat: '12h' | '24h';

  // SEO & Social
  seo: SEOConfig;
  socialLinks?: SocialLinks;

  // PWA Configuration
  pwa: PWAConfig;

  // Footer
  footerText: string;
  copyrightText?: string;
}

// Default theme for fallback
export const defaultTheme: ThemeConfig = {
  primaryColor: '#6366f1',
  primaryHoverColor: '#4f46e5',
  primaryLightColor: '#818cf8',
  accentColor: '#22d3ee',
  backgroundColor: '#0a0a0f',
  surfaceColor: '#131318',
  surfaceElevatedColor: '#1a1a22',
  borderColor: '#27272a',
  borderSubtleColor: '#1f1f23',
  textPrimaryColor: '#fafafa',
  textSecondaryColor: '#a1a1aa',
  textMutedColor: '#71717a',
  nowColor: '#22c55e',
  nextColor: '#3b82f6',
  bookmarkColor: '#ec4899',
};

// Default fonts for fallback
export const defaultFonts: FontConfig = {
  heading: "'Plus Jakarta Sans', system-ui, sans-serif",
  body: "'Plus Jakarta Sans', system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
  googleFontsUrl:
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
};

// Default session types
export const defaultSessionTypes: Record<string, SessionTypeConfig> = {
  SESSION: { label: 'Talk' },
  WORKSHOP: { label: 'Workshop' },
  SERVICE: { label: 'Break' },
  OTHER: { label: 'Event' },
};

// Helper type for partial config (for extending defaults)
export type PartialConferenceConfig = Partial<ConferenceConfig> & {
  slug: string;
  name: string;
};

// Utility function to merge config with defaults
export function createConferenceConfig(
  partial: PartialConferenceConfig
): ConferenceConfig {
  return {
    slug: partial.slug,
    name: partial.name,
    shortName: partial.shortName || partial.name,
    tagline: partial.tagline || '',
    dateRange: partial.dateRange || '',
    location: partial.location || '',
    year: partial.year || new Date().getFullYear(),
    timezone: partial.timezone || 'America/New_York',
    days: partial.days || [],
    defaultDayIndex: partial.defaultDayIndex || 0,
    theme: { ...defaultTheme, ...partial.theme },
    fonts: { ...defaultFonts, ...partial.fonts },
    logo: partial.logo,
    favicon: partial.favicon,
    tracks: partial.tracks || {},
    sessionTypes: { ...defaultSessionTypes, ...partial.sessionTypes },
    locale: partial.locale || 'en-US',
    timeFormat: partial.timeFormat || '12h',
    seo: partial.seo || {
      title: partial.name,
      description: partial.tagline || '',
      keywords: [],
    },
    socialLinks: partial.socialLinks,
    pwa: partial.pwa || {
      name: partial.name,
      shortName: partial.shortName || partial.name,
      description: partial.tagline || '',
      themeColor: partial.theme?.primaryColor || defaultTheme.primaryColor,
      backgroundColor:
        partial.theme?.backgroundColor || defaultTheme.backgroundColor,
      display: 'standalone',
      orientation: 'portrait-primary',
      categories: ['events', 'productivity'],
    },
    footerText: partial.footerText || partial.name,
    copyrightText: partial.copyrightText,
  };
}

