'use client';

import { useMemo } from 'react';
import { cn } from '@/app/lib/cn';
import {
  type Session,
  parseDateTime,
  formatTime,
  isSessionNow,
  isSessionUpcoming,
  type LocaleConfig,
} from '@/app/lib/schedule-data';
import { useCurrentTime } from '@/app/lib/use-current-time';
import { Play, FastForward, Clock } from 'lucide-react';

interface NowNextBannerProps {
  sessions: Session[];
  onSessionClick?: (sessionId: string, bannerType: 'now' | 'next') => void;
  // Optional locale config for time formatting
  localeConfig?: LocaleConfig;
}

export function NowNextBanner({ sessions, onSessionClick, localeConfig }: NowNextBannerProps) {
  const currentTime = useCurrentTime(30000); // Update every 30 seconds

  const { currentSession, upcomingSessions } = useMemo(() => {
    // For demo purposes, use a simulated conference time
    // In production, use currentTime directly
    const demoTime = new Date('2025-11-20T10:30:00');
    const timeToUse = process.env.NODE_ENV === 'development' ? demoTime : currentTime;

    const current = sessions.find((s) => s.type !== 'SERVICE' && isSessionNow(s, timeToUse));

    const upcoming = sessions
      .filter((s) => s.type !== 'SERVICE' && isSessionUpcoming(s, timeToUse, 60))
      .sort((a, b) => parseDateTime(a.since).getTime() - parseDateTime(b.since).getTime())
      .slice(0, 2);

    return { currentSession: current, upcomingSessions: upcoming };
  }, [sessions, currentTime]);

  // Don't show if nothing is happening
  if (!currentSession && upcomingSessions.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-[var(--color-surface)] to-[var(--color-surface-elevated)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Now Playing */}
          {currentSession && (
            <button
              onClick={() => onSessionClick?.(currentSession.id, 'now')}
              className="flex-1 flex items-start gap-3 p-3 rounded-lg bg-[var(--color-now)]/10 border border-[var(--color-now)]/30 hover:bg-[var(--color-now)]/15 transition-colors text-left"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-now)] flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[var(--color-now)] uppercase tracking-wide">
                    Happening Now
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-now)] animate-pulse" />
                </div>
                <p className="text-sm font-medium text-[var(--color-text-primary)] line-clamp-1">
                  {currentSession.title}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  {currentSession.room} • Ends at {formatTime(parseDateTime(currentSession.endsAt), localeConfig)}
                </p>
              </div>
            </button>
          )}

          {/* Up Next */}
          {upcomingSessions.length > 0 && (
            <div className={cn('flex-1 flex flex-col gap-2', currentSession ? 'sm:max-w-[40%]' : '')}>
              {upcomingSessions.map((session, idx) => {
                const startTime = parseDateTime(session.since);
                const minutesUntil = Math.round((startTime.getTime() - currentTime.getTime()) / (1000 * 60));

                return (
                  <button
                    key={session.id}
                    onClick={() => onSessionClick?.(session.id, 'next')}
                    className={cn(
                      'flex items-center gap-3 p-2 rounded-lg transition-colors text-left',
                      'hover:bg-[var(--color-surface-elevated)]',
                      idx === 0
                        ? 'bg-[var(--color-next)]/10 border border-[var(--color-next)]/20'
                        : 'bg-[var(--color-surface)]'
                    )}
                  >
                    <div
                      className={cn(
                        'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center',
                        idx === 0 ? 'bg-[var(--color-next)]' : 'bg-[var(--color-surface-elevated)]'
                      )}
                    >
                      {idx === 0 ? (
                        <FastForward className="w-3 h-3 text-white" />
                      ) : (
                        <Clock className="w-3 h-3 text-[var(--color-text-muted)]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            'text-[10px] font-bold uppercase tracking-wide',
                            idx === 0 ? 'text-[var(--color-next)]' : 'text-[var(--color-text-muted)]'
                          )}
                        >
                          {minutesUntil <= 0 ? 'Starting' : `In ${minutesUntil}min`}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-[var(--color-text-primary)] line-clamp-1">
                        {session.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
