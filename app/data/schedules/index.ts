// Schedule Data Registry
// Dynamically loads schedule data for each conference

import { type Session } from '@/app/lib/schedule-data';

// Import schedule data for each conference
import aiEngineer2025Data from './ai-engineer-2025.json';
import reactConf2025Data from './react-conf-2025.json';

// Schedule registry
const scheduleRegistry: Record<string, Session[]> = {
  'ai-engineer-2025': aiEngineer2025Data as Session[],
  'react-conf-2025': reactConf2025Data as Session[],
};

// Get schedule data by conference slug
export function getScheduleData(slug: string): Session[] {
  return scheduleRegistry[slug] || [];
}

// Check if schedule data exists for a conference
export function scheduleDataExists(slug: string): boolean {
  return slug in scheduleRegistry;
}

// Get all available schedule slugs
export function getAllScheduleSlugs(): string[] {
  return Object.keys(scheduleRegistry);
}

