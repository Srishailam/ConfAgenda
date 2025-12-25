'use client';

import { useMemo } from 'react';
import { SessionCard } from './SessionCard';
import {
  type Session,
  groupSessionsByTime,
  parseDateTime,
  formatTime,
  type LocaleConfig,
} from '@/app/lib/schedule-data';
import { type TrackConfig } from '@/app/config/types';
import { Clock } from 'lucide-react';

interface ListViewProps {
  sessions: Session[];
  isBookmarked: (sessionId: string) => boolean;
  onToggleBookmark: (sessionId: string) => void;
  tracks?: Record<string, TrackConfig>;
  localeConfig?: LocaleConfig;
}

export function ListView({
  sessions,
  isBookmarked,
  onToggleBookmark,
  tracks,
  localeConfig,
}: ListViewProps) {
  const groupedSessions = useMemo(() => {
    const groups = groupSessionsByTime(sessions, localeConfig);
    return Array.from(groups.entries()).sort((a, b) => {
      const timeA = sessions.find((s) => formatTime(parseDateTime(s.since), localeConfig) === a[0]);
      const timeB = sessions.find((s) => formatTime(parseDateTime(s.since), localeConfig) === b[0]);
      if (!timeA || !timeB) return 0;
      return parseDateTime(timeA.since).getTime() - parseDateTime(timeB.since).getTime();
    });
  }, [sessions, localeConfig]);

  return (
    <div className="py-6 space-y-10 stagger-children">
      {groupedSessions.map(([timeSlot, slotSessions]) => (
        <section key={timeSlot}>
          {/* Time Header */}
          <div className="sticky top-[200px] md:top-[195px] z-20 mb-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--color-surface)] rounded-full border border-[var(--color-border)] shadow-[var(--shadow-md)]">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary)]/10">
                <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              </div>
              <span className="text-sm font-bold text-[var(--color-text-primary)]">{timeSlot}</span>
              <span className="text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-surface-elevated)] px-2 py-0.5 rounded-full">
                {slotSessions.length} session{slotSessions.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Sessions Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {slotSessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                isBookmarked={isBookmarked(session.id)}
                onToggleBookmark={onToggleBookmark}
                tracks={tracks}
                localeConfig={localeConfig}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
