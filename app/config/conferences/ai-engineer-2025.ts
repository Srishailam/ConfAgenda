import { createConferenceConfig, type ConferenceConfig } from '../types';

export const aiEngineer2025: ConferenceConfig = createConferenceConfig({
  // Identity
  slug: 'ai-engineer-2025',
  name: 'AI Engineer Code Summit',
  shortName: 'AI Engineer 2025',
  tagline: 'The premier event for AI engineers',

  // Dates & Location
  dateRange: 'November 19-22, 2025',
  location: 'New York City',
  year: 2025,
  timezone: 'America/New_York',
  days: [
    { date: '2025-11-19', label: 'Wed', fullLabel: 'Wed, Nov 19' },
    { date: '2025-11-20', label: 'Thu', fullLabel: 'Thu, Nov 20' },
    { date: '2025-11-21', label: 'Fri', fullLabel: 'Fri, Nov 21' },
    { date: '2025-11-22', label: 'Sat', fullLabel: 'Sat, Nov 22' },
  ],
  defaultDayIndex: 1,

  // Branding - Indigo/Cyan theme
  theme: {
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
  },

  fonts: {
    heading: "'Plus Jakarta Sans', system-ui, sans-serif",
    body: "'Plus Jakarta Sans', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
  },

  // Track Configuration
  tracks: {
    Keynote: { color: '#f59e0b' },
    'AI Leadership': { color: '#8b5cf6' },
    'AI Engineering': { color: '#06b6d4' },
    Workshop: { color: '#10b981' },
    Expo: { color: '#f97316' },
    Service: { color: '#64748b' },
    Plenary: { color: '#f59e0b' },
  },

  // Session Types
  sessionTypes: {
    SESSION: { label: 'Talk' },
    WORKSHOP: { label: 'Workshop' },
    SERVICE: { label: 'Break' },
    OTHER: { label: 'Event' },
  },

  // Locale
  locale: 'en-US',
  timeFormat: '12h',

  // SEO
  seo: {
    title: 'AI Engineer Code Summit 2025 | Schedule',
    description:
      'Conference schedule for AI Engineer Code Summit 2025 - November 19-22, New York City',
    keywords: [
      'AI',
      'conference',
      'schedule',
      'engineering',
      'code summit',
      '2025',
      'machine learning',
      'artificial intelligence',
    ],
  },

  // Social Links
  socialLinks: {
    website: 'https://ai.engineer',
    twitter: 'https://twitter.com/aiaboratory',
  },

  // PWA Configuration
  pwa: {
    name: 'AI Engineer Code Summit 2025',
    shortName: 'AI Engineer',
    description: 'Conference schedule for AI Engineer Code Summit 2025',
    themeColor: '#6366f1',
    backgroundColor: '#0a0a0f',
    display: 'standalone',
    orientation: 'portrait-primary',
    categories: ['events', 'productivity'],
  },

  // Footer
  footerText: 'AI Engineer Code Summit 2025',
  copyrightText: '© 2025 AI Engineer. All rights reserved.',
});

