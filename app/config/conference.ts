// Conference Configuration
// Edit this file to customize the app for different conferences

export const conferenceConfig = {
  // Basic Info
  name: 'AI Engineer Code Summit',
  shortName: 'AI Engineer Code Summit 2025',
  tagline: 'The premier event for AI engineers',
  
  // Date & Location
  dateRange: 'November 19-22, 2025',
  location: 'New York City',
  year: 2025,
  
  // Conference Days (for schedule navigation)
  days: [
    { date: '2025-11-19', label: 'Wed', fullLabel: 'Wed, Nov 19' },
    { date: '2025-11-20', label: 'Thu', fullLabel: 'Thu, Nov 20' },
    { date: '2025-11-21', label: 'Fri', fullLabel: 'Fri, Nov 21' },
    { date: '2025-11-22', label: 'Sat', fullLabel: 'Sat, Nov 22' },
  ],
  
  // Default day to show (index into days array)
  defaultDayIndex: 1,
  
  // Branding
  primaryColor: '#6366f1', // Indigo
  accentColor: '#22d3ee',  // Cyan
  
  // Footer
  footerText: 'AI Engineer Code Summit 2025',
  
  // Social/Links (optional)
  website: 'https://ai.engineer',
  twitter: '@aiaboratory',
};

export type ConferenceConfig = typeof conferenceConfig;

