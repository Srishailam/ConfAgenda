import { createConferenceConfig, type ConferenceConfig } from '../types';

// Example: A second conference to demonstrate multi-tenant capability
export const reactConf2025: ConferenceConfig = createConferenceConfig({
  // Identity
  slug: 'react-conf-2025',
  name: 'React Conference',
  shortName: 'React Conf 2025',
  tagline: 'The official React conference',

  // Dates & Location
  dateRange: 'May 15-16, 2025',
  location: 'Henderson, Nevada',
  year: 2025,
  timezone: 'America/Los_Angeles',
  days: [
    { date: '2025-05-15', label: 'Thu', fullLabel: 'Thu, May 15' },
    { date: '2025-05-16', label: 'Fri', fullLabel: 'Fri, May 16' },
  ],
  defaultDayIndex: 0,

  // Branding - React Blue theme
  theme: {
    primaryColor: '#61dafb',
    primaryHoverColor: '#4fc3e0',
    primaryLightColor: '#88e5fc',
    accentColor: '#f472b6',
    backgroundColor: '#0d1117',
    surfaceColor: '#161b22',
    surfaceElevatedColor: '#21262d',
    borderColor: '#30363d',
    borderSubtleColor: '#21262d',
    textPrimaryColor: '#f0f6fc',
    textSecondaryColor: '#8b949e',
    textMutedColor: '#6e7681',
    nowColor: '#3fb950',
    nextColor: '#58a6ff',
    bookmarkColor: '#f78166',
  },

  fonts: {
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'Fira Code', monospace",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap',
  },

  // Track Configuration
  tracks: {
    Keynote: { color: '#61dafb' },
    'React Core': { color: '#f472b6' },
    'React Native': { color: '#a855f7' },
    'Server Components': { color: '#22c55e' },
    Community: { color: '#f59e0b' },
    Workshop: { color: '#06b6d4' },
    Break: { color: '#6e7681' },
  },

  // Session Types
  sessionTypes: {
    SESSION: { label: 'Talk' },
    WORKSHOP: { label: 'Workshop' },
    SERVICE: { label: 'Break' },
    OTHER: { label: 'Activity' },
  },

  // Locale
  locale: 'en-US',
  timeFormat: '12h',

  // SEO
  seo: {
    title: 'React Conf 2025 | Schedule',
    description:
      'Official schedule for React Conf 2025 - May 15-16, Henderson, Nevada',
    keywords: [
      'React',
      'conference',
      'JavaScript',
      'frontend',
      'web development',
      '2025',
    ],
  },

  // Social Links
  socialLinks: {
    website: 'https://conf.react.dev',
    twitter: 'https://twitter.com/reactjs',
    github: 'https://github.com/facebook/react',
  },

  // PWA Configuration
  pwa: {
    name: 'React Conf 2025',
    shortName: 'React Conf',
    description: 'Official schedule for React Conf 2025',
    themeColor: '#61dafb',
    backgroundColor: '#0d1117',
    display: 'standalone',
    orientation: 'portrait-primary',
    categories: ['events', 'productivity', 'developer tools'],
  },

  // Footer
  footerText: 'React Conf 2025',
  copyrightText: '© 2025 Meta Platforms, Inc.',
});

