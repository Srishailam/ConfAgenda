// Types for the conference schedule data

import { type ConferenceConfig, type TrackConfig, type SessionTypeConfig } from '@/app/config/types';

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface CompanyData {
  data: {
    attributes: {
      name: string;
    };
  } | null;
}

export interface ProfilePhoto {
  data: {
    attributes: {
      url: string;
    };
  } | null;
}

export interface PresenterAttributes {
  name: string;
  tagline: string;
  company: CompanyData;
  profilePhoto: ProfilePhoto;
  socialLinks?: SocialLinks;
}

export interface Presenter {
  attributes: PresenterAttributes;
}

export interface Session {
  id: string;
  title: string;
  about: string;
  since: string;
  endsAt: string;
  trackName: string;
  room: string;
  roomOther: string;
  presenters: Presenter[];
  slug: string;
  displayOrder: number;
  recordingLink: string | null;
  type: 'SESSION' | 'WORKSHOP' | 'SERVICE' | 'OTHER';
  isPlenumSession: boolean;
}

// Locale configuration for formatting
export interface LocaleConfig {
  locale: string;
  timeFormat: '12h' | '24h';
}

// Default locale config (for backward compatibility)
const defaultLocaleConfig: LocaleConfig = {
  locale: 'en-US',
  timeFormat: '12h',
};

// Helper functions

export function parseDateTime(isoString: string): Date {
  return new Date(isoString);
}

/**
 * Format time according to locale settings
 * @param date - Date to format
 * @param config - Optional locale configuration
 */
export function formatTime(
  date: Date,
  config: LocaleConfig = defaultLocaleConfig
): string {
  return date.toLocaleTimeString(config.locale, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: config.timeFormat === '12h',
  });
}

/**
 * Format time range according to locale settings
 */
export function formatTimeRange(
  start: Date,
  end: Date,
  config: LocaleConfig = defaultLocaleConfig
): string {
  return `${formatTime(start, config)} - ${formatTime(end, config)}`;
}

export function getDurationMinutes(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60));
}

export function getSessionDate(session: Session): string {
  const date = parseDateTime(session.since);
  return date.toISOString().split('T')[0];
}

export function getSessionsByDay(sessions: Session[], dateStr: string): Session[] {
  return sessions
    .filter((session) => getSessionDate(session) === dateStr)
    .sort((a, b) => {
      const timeA = parseDateTime(a.since).getTime();
      const timeB = parseDateTime(b.since).getTime();
      if (timeA !== timeB) return timeA - timeB;
      return a.displayOrder - b.displayOrder;
    });
}

/**
 * Group sessions by start time
 * @param sessions - Sessions to group
 * @param config - Optional locale configuration for time formatting
 */
export function groupSessionsByTime(
  sessions: Session[],
  config: LocaleConfig = defaultLocaleConfig
): Map<string, Session[]> {
  const groups = new Map<string, Session[]>();

  for (const session of sessions) {
    const startTime = formatTime(parseDateTime(session.since), config);
    const existing = groups.get(startTime) || [];
    existing.push(session);
    groups.set(startTime, existing);
  }

  return groups;
}

export function getUniqueTracks(sessions: Session[]): string[] {
  const tracks = new Set<string>();
  sessions.forEach((s) => tracks.add(s.trackName));
  return Array.from(tracks).sort();
}

export function getUniqueRooms(sessions: Session[]): string[] {
  const rooms = new Set<string>();
  sessions.forEach((s) => rooms.add(s.room));
  return Array.from(rooms).sort();
}

export function isSessionNow(session: Session, now: Date = new Date()): boolean {
  const start = parseDateTime(session.since);
  const end = parseDateTime(session.endsAt);
  return now >= start && now <= end;
}

export function isSessionUpcoming(
  session: Session,
  now: Date = new Date(),
  withinMinutes: number = 30
): boolean {
  const start = parseDateTime(session.since);
  const msUntilStart = start.getTime() - now.getTime();
  return msUntilStart > 0 && msUntilStart <= withinMinutes * 60 * 1000;
}

/**
 * Get track color from conference config
 * @param trackName - Name of the track
 * @param tracks - Track configuration from conference config
 * @param fallback - Fallback color if track not found
 */
export function getTrackColor(
  trackName: string,
  tracks?: Record<string, TrackConfig>,
  fallback: string = 'var(--color-text-muted)'
): string {
  if (!tracks) {
    // Fallback to CSS variables for backward compatibility
    return `var(--color-track-${trackName.toLowerCase().replace(/\s+/g, '-')}, ${fallback})`;
  }
  return tracks[trackName]?.color || fallback;
}

/**
 * Get session type label from conference config
 * @param type - Session type
 * @param sessionTypes - Session type configuration from conference config
 */
export function getSessionTypeLabel(
  type: Session['type'],
  sessionTypes?: Record<string, SessionTypeConfig>
): string {
  // Default labels for backward compatibility
  const defaultLabels: Record<Session['type'], string> = {
    SESSION: 'Talk',
    WORKSHOP: 'Workshop',
    SERVICE: 'Break',
    OTHER: 'Event',
  };

  if (!sessionTypes) {
    return defaultLabels[type];
  }

  return sessionTypes[type]?.label || defaultLabels[type];
}

/**
 * Create a locale config from conference config
 */
export function createLocaleConfig(config: ConferenceConfig): LocaleConfig {
  return {
    locale: config.locale,
    timeFormat: config.timeFormat,
  };
}

/**
 * Create time formatter bound to a specific locale config
 */
export function createTimeFormatter(config: LocaleConfig) {
  return (date: Date) => formatTime(date, config);
}

/**
 * Create time range formatter bound to a specific locale config
 */
export function createTimeRangeFormatter(config: LocaleConfig) {
  return (start: Date, end: Date) => formatTimeRange(start, end, config);
}

/**
 * Create track color getter bound to a specific config
 */
export function createTrackColorGetter(tracks: Record<string, TrackConfig>) {
  return (trackName: string) => getTrackColor(trackName, tracks);
}

/**
 * Create session type label getter bound to a specific config
 */
export function createSessionTypeLabelGetter(
  sessionTypes: Record<string, SessionTypeConfig>
) {
  return (type: Session['type']) => getSessionTypeLabel(type, sessionTypes);
}
