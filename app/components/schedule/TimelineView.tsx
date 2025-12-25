'use client';

import { useMemo, useRef, useEffect } from 'react';
import { cn } from '@/app/lib/cn';
import { Badge } from '@/app/components/ui/badge';
import {
  type Session,
  parseDateTime,
  formatTime,
  getDurationMinutes,
  getTrackColor,
  type LocaleConfig,
} from '@/app/lib/schedule-data';
import { type TrackConfig } from '@/app/config/types';
import { Heart, Clock, MapPin } from 'lucide-react';
import { useCurrentTime } from '@/app/lib/use-current-time';

interface TimelineViewProps {
  sessions: Session[];
  isBookmarked: (sessionId: string) => boolean;
  onToggleBookmark: (sessionId: string) => void;
  // Optional config for track colors and locale (uses CSS vars as fallback)
  tracks?: Record<string, TrackConfig>;
  localeConfig?: LocaleConfig;
}

// Generate time slots from 5am to 11pm (to cover all sessions)
const TIME_SLOTS = Array.from({ length: 19 }, (_, i) => {
  const hour = i + 5; // Start from 5 AM
  return {
    hour,
    label: `${hour > 12 ? hour - 12 : hour}${hour >= 12 ? 'PM' : 'AM'}`,
    time: `${hour.toString().padStart(2, '0')}:00`,
  };
});

const HOUR_HEIGHT = 120; // pixels per hour
const MIN_CARD_HEIGHT = 60;

export function TimelineView({
  sessions,
  isBookmarked,
  onToggleBookmark,
  tracks,
  localeConfig,
}: TimelineViewProps) {
  const currentTime = useCurrentTime(60000); // Update every minute
  const timelineRef = useRef<HTMLDivElement>(null);

  // Get unique rooms for columns
  const rooms = useMemo(() => {
    const roomSet = new Set<string>();
    sessions.forEach((s) => roomSet.add(s.room));
    return Array.from(roomSet).sort();
  }, [sessions]);

  // Group sessions by room
  const sessionsByRoom = useMemo(() => {
    const map = new Map<string, Session[]>();
    rooms.forEach((room) => {
      map.set(
        room,
        sessions.filter((s) => s.room === room)
      );
    });
    return map;
  }, [sessions, rooms]);

  // Calculate earliest and latest times for the day
  const { earliestHour, latestHour } = useMemo(() => {
    if (sessions.length === 0) return { earliestHour: 9, latestHour: 18 };

    let earliest = 24;
    let latest = 0;

    sessions.forEach((s) => {
      const startHour = parseDateTime(s.since).getHours();
      const endHour = parseDateTime(s.endsAt).getHours();
      earliest = Math.min(earliest, startHour);
      latest = Math.max(latest, endHour + 1);
    });

    return { earliestHour: Math.max(5, earliest), latestHour: Math.min(23, latest) };
  }, [sessions]);

  const visibleTimeSlots = TIME_SLOTS.filter((slot) => slot.hour >= earliestHour && slot.hour <= latestHour);

  // Calculate position for a session
  const getSessionPosition = (session: Session) => {
    const start = parseDateTime(session.since);
    const end = parseDateTime(session.endsAt);

    const startHour = start.getHours() + start.getMinutes() / 60;
    const duration = getDurationMinutes(start, end) / 60;

    const top = (startHour - earliestHour) * HOUR_HEIGHT;
    const height = Math.max(duration * HOUR_HEIGHT, MIN_CARD_HEIGHT);

    return { top, height };
  };

  // Current time indicator position
  const getCurrentTimePosition = () => {
    const hour = currentTime.getHours() + currentTime.getMinutes() / 60;
    if (hour < earliestHour || hour > latestHour) return null;
    return (hour - earliestHour) * HOUR_HEIGHT;
  };

  const currentTimePos = getCurrentTimePosition();

  // Auto-scroll to current time on mount
  useEffect(() => {
    if (currentTimePos !== null && timelineRef.current) {
      const scrollPos = Math.max(0, currentTimePos - 100);
      timelineRef.current.scrollTop = scrollPos;
    }
  }, []);

  return (
    <div className="py-6">
      {/* Mobile: Stack view */}
      <div className="md:hidden">
        <p className="text-sm text-[var(--color-text-muted)] text-center mb-4">
          Timeline view works best on larger screens. Showing list view on mobile.
        </p>
        {/* Fall back to a simpler vertical list on mobile */}
        <div className="space-y-3">
          {sessions.map((session) => {
            const start = parseDateTime(session.since);
            const end = parseDateTime(session.endsAt);
            const trackColor = getTrackColor(session.trackName, tracks);

            return (
              <div
                key={session.id}
                id={`session-${session.id}`}
                className="relative bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-3 pl-4 overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: trackColor }} />
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">
                      {formatTime(start, localeConfig)} - {formatTime(end, localeConfig)} • {session.room}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-text-primary)] line-clamp-2">
                      {session.title}
                    </p>
                    {session.presenters.length > 0 && (
                      <p className="text-xs text-[var(--color-text-muted)] mt-1 truncate">
                        {session.presenters.map((p) => p.attributes.name).join(', ')}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => onToggleBookmark(session.id)}
                    className={cn(
                      'p-1 rounded transition-colors',
                      isBookmarked(session.id) && 'text-[var(--color-bookmark)]'
                    )}
                  >
                    <Heart className={cn('w-4 h-4', isBookmarked(session.id) && 'fill-current')} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop: Full timeline */}
      <div className="hidden md:block">
        <div
          ref={timelineRef}
          className="relative overflow-auto max-h-[calc(100vh-300px)] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          {/* Header with room names */}
          <div className="sticky top-0 z-20 flex bg-[var(--color-surface-elevated)] border-b border-[var(--color-border)]">
            {/* Time column header */}
            <div className="w-16 flex-shrink-0 p-2 text-xs font-medium text-[var(--color-text-muted)] border-r border-[var(--color-border)]">
              Time
            </div>
            {/* Room headers */}
            {rooms.map((room) => (
              <div
                key={room}
                className="flex-1 min-w-[200px] p-2 text-xs font-medium text-[var(--color-text-primary)] text-center border-r border-[var(--color-border)] last:border-r-0 truncate"
                title={room}
              >
                {room}
              </div>
            ))}
          </div>

          {/* Timeline grid */}
          <div className="relative flex">
            {/* Time labels column */}
            <div className="w-16 flex-shrink-0 border-r border-[var(--color-border)]">
              {visibleTimeSlots.map((slot) => (
                <div
                  key={slot.hour}
                  className="h-[120px] px-2 py-1 text-xs text-[var(--color-text-muted)] border-b border-[var(--color-border-subtle)]"
                >
                  {slot.label}
                </div>
              ))}
            </div>

            {/* Room columns with sessions */}
            {rooms.map((room, roomIdx) => (
              <div
                key={room}
                className={cn('flex-1 min-w-[200px] relative border-r border-[var(--color-border)] last:border-r-0')}
                style={{ height: visibleTimeSlots.length * HOUR_HEIGHT }}
              >
                {/* Hour grid lines */}
                {visibleTimeSlots.map((slot, idx) => (
                  <div
                    key={slot.hour}
                    className="absolute left-0 right-0 border-b border-[var(--color-border-subtle)]"
                    style={{ top: idx * HOUR_HEIGHT, height: HOUR_HEIGHT }}
                  />
                ))}

                {/* Sessions */}
                {sessionsByRoom.get(room)?.map((session) => {
                  const { top, height } = getSessionPosition(session);
                  const trackColor = getTrackColor(session.trackName, tracks);
                  const start = parseDateTime(session.since);
                  const end = parseDateTime(session.endsAt);
                  const isCompact = height < 80;

                  return (
                    <div
                      key={session.id}
                      id={`session-${session.id}`}
                      className={cn(
                        'absolute left-1 right-1 rounded-lg overflow-hidden transition-all duration-200',
                        'bg-[var(--color-surface-elevated)] border border-[var(--color-border)]',
                        'hover:shadow-lg hover:shadow-black/20 hover:z-10',
                        'group cursor-pointer'
                      )}
                      style={{
                        top: top + 2,
                        height: height - 4,
                        borderLeftWidth: 3,
                        borderLeftColor: trackColor,
                      }}
                    >
                      <div className={cn('p-2 h-full flex flex-col', isCompact && 'p-1.5')}>
                        <div className="flex items-start justify-between gap-1">
                          <h4
                            className={cn(
                              'font-medium text-[var(--color-text-primary)] leading-tight',
                              isCompact ? 'text-xs line-clamp-1' : 'text-sm line-clamp-2'
                            )}
                          >
                            {session.title}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleBookmark(session.id);
                            }}
                            className={cn(
                              'p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity',
                              isBookmarked(session.id) && 'opacity-100 text-[var(--color-bookmark)]'
                            )}
                          >
                            <Heart className={cn('w-3.5 h-3.5', isBookmarked(session.id) && 'fill-current')} />
                          </button>
                        </div>

                        {!isCompact && (
                          <>
                            <p className="text-xs text-[var(--color-text-muted)] mt-1">
                              {formatTime(start, localeConfig)} - {formatTime(end, localeConfig)}
                            </p>
                            {session.presenters.length > 0 && (
                              <p className="text-xs text-[var(--color-text-secondary)] mt-auto truncate">
                                {session.presenters.map((p) => p.attributes.name).join(', ')}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Current time indicator */}
            {currentTimePos !== null && (
              <div className="absolute left-0 right-0 z-30 pointer-events-none" style={{ top: currentTimePos }}>
                <div className="relative">
                  <div className="absolute left-0 w-16 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[var(--color-now)] bg-[var(--color-surface)] px-1 rounded">
                      NOW
                    </span>
                  </div>
                  <div className="ml-16 h-0.5 bg-[var(--color-now)]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
