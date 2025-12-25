'use client';

import { cn } from '@/app/lib/cn';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { SpeakerAvatarGroup } from './SpeakerAvatar';
import {
  type Session,
  parseDateTime,
  formatTimeRange,
  getDurationMinutes,
  getTrackColor,
  type LocaleConfig,
} from '@/app/lib/schedule-data';
import { type TrackConfig } from '@/app/config/types';
import { Heart, Clock, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface SessionCardProps {
  session: Session;
  isBookmarked: boolean;
  onToggleBookmark: (sessionId: string) => void;
  variant?: 'default' | 'compact';
  tracks?: Record<string, TrackConfig>;
  localeConfig?: LocaleConfig;
}

export function SessionCard({
  session,
  isBookmarked,
  onToggleBookmark,
  variant = 'default',
  tracks,
  localeConfig,
}: SessionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const startTime = parseDateTime(session.since);
  const endTime = parseDateTime(session.endsAt);
  const duration = getDurationMinutes(startTime, endTime);
  const trackColor = getTrackColor(session.trackName, tracks);

  const isServiceSession = session.type === 'SERVICE';

  if (isServiceSession && variant === 'default') {
    // Simplified card for service sessions (breaks, lunch, etc.)
    return (
      <div
        id={`session-${session.id}`}
        className={cn(
          'flex items-center gap-3 px-4 py-3 rounded-xl',
          'bg-[var(--color-surface-elevated)]/50 border border-[var(--color-border-subtle)]',
          'transition-all duration-200'
        )}
      >
        <div className="w-1 h-8 rounded-full bg-[var(--color-text-muted)]/30" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-[var(--color-text-secondary)]">{session.title}</p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {formatTimeRange(startTime, endTime, localeConfig)} • {session.room}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Card
      id={`session-${session.id}`}
      className={cn(
        'group relative overflow-hidden',
        variant === 'compact' && 'p-3'
      )}
    >
      {/* Track Color Indicator - gradient accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
        style={{ backgroundColor: trackColor }}
      />
      
      {/* Subtle gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${trackColor}08 0%, transparent 50%)`,
        }}
      />

      <div className={cn('relative pl-4', variant === 'default' ? 'p-4 md:p-5' : 'p-3')}>
        {/* Header with badges and bookmark */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="track" trackColor={trackColor}>
              {session.trackName}
            </Badge>
            {session.type === 'WORKSHOP' && (
              <Badge variant="secondary">Workshop</Badge>
            )}
            {session.isPlenumSession && (
              <Badge variant="outline">Plenary</Badge>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(session.id);
            }}
            className={cn(
              'p-2 rounded-xl transition-all duration-200',
              'hover:bg-[var(--color-surface-elevated)]',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
              isBookmarked 
                ? 'text-[var(--color-bookmark)] bg-[var(--color-bookmark)]/10' 
                : 'text-[var(--color-text-muted)]'
            )}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            <Heart className={cn('w-5 h-5 transition-transform', isBookmarked && 'fill-current scale-110')} />
          </button>
        </div>

        {/* Title */}
        <h3
          className={cn(
            'font-semibold text-[var(--color-text-primary)] mb-3 leading-snug',
            variant === 'default' ? 'text-base md:text-lg' : 'text-sm'
          )}
        >
          {session.title}
        </h3>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-4">
          <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
            <Clock className="w-4 h-4 text-[var(--color-text-muted)]" />
            <span className="font-medium">{formatTimeRange(startTime, endTime, localeConfig)}</span>
            <span className="text-[var(--color-text-muted)]">({duration}min)</span>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
            <MapPin className="w-4 h-4 text-[var(--color-text-muted)]" />
            <span className="truncate max-w-[150px]">{session.room}</span>
          </div>
        </div>

        {/* Speakers */}
        {session.presenters.length > 0 && (
          <div className="mb-4">
            <SpeakerAvatarGroup presenters={session.presenters} />
          </div>
        )}

        {/* Description (expandable) */}
        {session.about && variant === 'default' && (
          <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)]">
            <p
              className={cn(
                'text-sm text-[var(--color-text-secondary)] leading-relaxed',
                !isExpanded && 'line-clamp-2'
              )}
            >
              {session.about}
            </p>
            {session.about.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] flex items-center gap-1 transition-colors"
              >
                {isExpanded ? 'Show less' : 'Read more'}
                <ChevronRight
                  className={cn('w-3.5 h-3.5 transition-transform duration-200', isExpanded && 'rotate-90')}
                />
              </button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
