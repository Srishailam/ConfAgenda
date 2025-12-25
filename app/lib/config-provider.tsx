'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { type ConferenceConfig } from '@/app/config/types';
import { type Session } from '@/app/lib/schedule-data';
import { ThemeInjector } from './theme-injector';

// Re-export ConferenceConfig from the types module
export type { ConferenceConfig } from '@/app/config/types';

interface ConferenceContextValue {
  config: ConferenceConfig;
  sessions: Session[];
}

const ConferenceContext = createContext<ConferenceContextValue | null>(null);

interface ConferenceProviderProps {
  config: ConferenceConfig;
  sessions: Session[];
  children: ReactNode;
}

/**
 * Provider component that wraps the app and provides conference configuration
 * and schedule data to all child components.
 */
export function ConferenceProvider({
  config,
  sessions,
  children,
}: ConferenceProviderProps) {
  return (
    <ConferenceContext.Provider value={{ config, sessions }}>
      <ThemeInjector config={config} />
      {children}
    </ConferenceContext.Provider>
  );
}

/**
 * Hook to access the current conference configuration.
 * Must be used within a ConferenceProvider.
 */
export function useConference(): ConferenceContextValue {
  const context = useContext(ConferenceContext);
  if (!context) {
    throw new Error('useConference must be used within a ConferenceProvider');
  }
  return context;
}

/**
 * Hook to access just the conference config.
 */
export function useConferenceConfig(): ConferenceConfig {
  const { config } = useConference();
  return config;
}

/**
 * Hook to access just the sessions data.
 */
export function useSessions(): Session[] {
  const { sessions } = useConference();
  return sessions;
}

/**
 * Hook to get a track's color from config.
 */
export function useTrackColor(trackName: string): string {
  const { config } = useConference();
  return config.tracks[trackName]?.color || config.theme.textMutedColor;
}

/**
 * Hook to get session type label from config.
 */
export function useSessionTypeLabel(type: string): string {
  const { config } = useConference();
  return config.sessionTypes[type]?.label || type;
}

/**
 * Hook to format time according to conference locale settings.
 */
export function useTimeFormatter() {
  const { config } = useConference();
  
  return (date: Date): string => {
    return date.toLocaleTimeString(config.locale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: config.timeFormat === '12h',
    });
  };
}

/**
 * Hook to format date according to conference locale settings.
 */
export function useDateFormatter() {
  const { config } = useConference();
  
  return (date: Date): string => {
    return date.toLocaleDateString(config.locale, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };
}

