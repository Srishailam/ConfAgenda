// Conference Registry
// Add new conferences by importing them here and adding to the registry

import { type ConferenceConfig } from '../types';
import { aiEngineer2025 } from './ai-engineer-2025';
import { reactConf2025 } from './react-conf-2025';

// Registry of all available conferences
export const conferenceRegistry: Record<string, ConferenceConfig> = {
  'ai-engineer-2025': aiEngineer2025,
  'react-conf-2025': reactConf2025,
};

// Get a conference config by slug
export function getConferenceConfig(slug: string): ConferenceConfig | null {
  return conferenceRegistry[slug] || null;
}

// Get all conference slugs
export function getAllConferenceSlugs(): string[] {
  return Object.keys(conferenceRegistry);
}

// Get all conferences
export function getAllConferences(): ConferenceConfig[] {
  return Object.values(conferenceRegistry);
}

// Check if a conference exists
export function conferenceExists(slug: string): boolean {
  return slug in conferenceRegistry;
}

// Default conference (first in registry or specified)
export const defaultConferenceSlug = 'ai-engineer-2025';
export const defaultConference = conferenceRegistry[defaultConferenceSlug];

// Re-export types
export type { ConferenceConfig } from '../types';

