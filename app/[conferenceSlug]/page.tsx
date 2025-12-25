'use client';

import { useState, useMemo, use, useCallback, useRef, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { DayNavigator } from '@/app/components/schedule/DayNavigator';
import { ViewToggle } from '@/app/components/schedule/ViewToggle';
import { FilterBar } from '@/app/components/schedule/FilterBar';
import { ListView } from '@/app/components/schedule/ListView';
import { TimelineView } from '@/app/components/schedule/TimelineView';
import { NowNextBanner } from '@/app/components/schedule/NowNextBanner';
import { useBookmarks } from '@/app/lib/use-bookmarks';
import { getSessionsByDay, getUniqueTracks, getUniqueRooms, type Session, createLocaleConfig } from '@/app/lib/schedule-data';
import { getConferenceConfig } from '@/app/config/conferences';
import { getScheduleData } from '@/app/data/schedules';
import { ConferenceProvider } from '@/app/lib/config-provider';
import { type ConferenceConfig } from '@/app/config/types';
import { ThemeToggle } from '@/app/components/ui/theme-toggle';
import { useAnalytics } from '@/app/lib/use-analytics';
import { Calendar, MapPin } from 'lucide-react';

interface ConferencePageProps {
  params: Promise<{ conferenceSlug: string }>;
}

export default function ConferencePage({ params }: ConferencePageProps) {
  const { conferenceSlug } = use(params);
  const config = getConferenceConfig(conferenceSlug);
  const sessions = getScheduleData(conferenceSlug);

  if (!config) {
    notFound();
  }

  return (
    <ConferenceProvider config={config} sessions={sessions}>
      <ScheduleContent config={config} sessions={sessions} />
    </ConferenceProvider>
  );
}

interface ScheduleContentProps {
  config: ConferenceConfig;
  sessions: Session[];
}

function ScheduleContent({ config, sessions }: ScheduleContentProps) {
  const [activeDay, setActiveDay] = useState(config.days[config.defaultDayIndex]?.date || config.days[0]?.date);
  const localeConfig = createLocaleConfig(config);
  const [viewMode, setViewMode] = useState<'list' | 'timeline'>('list');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [selectedRoom, setSelectedRoom] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks();
  const { trackDayChanged, trackViewModeChanged, trackSearch, trackFilterApplied, trackFilterCleared, trackSessionBookmarked, trackNowNextClicked } = useAnalytics();

  const tracks = useMemo(() => getUniqueTracks(sessions), [sessions]);
  const rooms = useMemo(() => getUniqueRooms(sessions), [sessions]);

  // Debounced search tracking
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (searchQuery.length >= 2) {
      clearTimeout(searchTimeoutRef.current);
      searchTimeoutRef.current = setTimeout(() => {
        trackSearch(searchQuery, filteredSessions.length);
      }, 500);
    }
    return () => clearTimeout(searchTimeoutRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // Tracked handlers
  const handleDayChange = useCallback((newDay: string) => {
    trackDayChanged(activeDay, newDay);
    setActiveDay(newDay);
  }, [activeDay, trackDayChanged]);

  const handleViewModeChange = useCallback((newMode: 'list' | 'timeline') => {
    trackViewModeChanged(viewMode, newMode);
    setViewMode(newMode);
  }, [viewMode, trackViewModeChanged]);

  const handleTrackChange = useCallback((track: string) => {
    if (track !== 'all') {
      trackFilterApplied('track', track);
    }
    setSelectedTrack(track);
  }, [trackFilterApplied]);

  const handleRoomChange = useCallback((room: string) => {
    if (room !== 'all') {
      trackFilterApplied('room', room);
    }
    setSelectedRoom(room);
  }, [trackFilterApplied]);

  const handleBookmarksOnlyChange = useCallback((show: boolean) => {
    if (show) {
      trackFilterApplied('bookmarks', 'only');
    }
    setShowBookmarksOnly(show);
  }, [trackFilterApplied]);

  const handleToggleBookmark = useCallback((sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
      const action = isBookmarked(sessionId) ? 'remove' : 'add';
      trackSessionBookmarked(
        { id: session.id, title: session.title, track: session.trackName },
        action
      );
    }
    toggleBookmark(sessionId);
  }, [sessions, isBookmarked, trackSessionBookmarked, toggleBookmark]);

  const handleNowNextClick = useCallback((sessionId: string, bannerType: 'now' | 'next') => {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
      trackNowNextClicked({ id: session.id, title: session.title }, bannerType);
    }
    const element = document.getElementById(`session-${sessionId}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [sessions, trackNowNextClicked]);

  const filteredSessions = useMemo(() => {
    let result = getSessionsByDay(sessions, activeDay);

    if (selectedTrack !== 'all') {
      result = result.filter((s) => s.trackName === selectedTrack);
    }

    if (selectedRoom !== 'all') {
      result = result.filter((s) => s.room === selectedRoom);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.about.toLowerCase().includes(query) ||
          s.presenters.some(
            (p) =>
              p.attributes.name.toLowerCase().includes(query) ||
              p.attributes.company?.data?.attributes?.name?.toLowerCase().includes(query)
          )
      );
    }

    if (showBookmarksOnly) {
      result = result.filter((s) => isBookmarked(s.id));
    }

    return result;
  }, [sessions, activeDay, selectedTrack, selectedRoom, searchQuery, showBookmarksOnly, isBookmarked]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      {/* Sticky Header + Day Navigation + Filters */}
      <div className="sticky top-0 z-50 shadow-[var(--shadow-md)]">
        {/* Header */}
        <header className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h1 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
                  {config.name}
                </h1>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-[var(--color-text-secondary)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[var(--color-text-muted)]" />
                    {config.dateRange}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[var(--color-text-muted)]" />
                    {config.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ViewToggle viewMode={viewMode} onViewModeChange={handleViewModeChange} />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Day Navigation */}
        <DayNavigator days={config.days} activeDay={activeDay} onDayChange={handleDayChange} />

        {/* Filters - included in sticky */}
        <FilterBar
          tracks={tracks}
          rooms={rooms}
          selectedTrack={selectedTrack}
          selectedRoom={selectedRoom}
          searchQuery={searchQuery}
          showBookmarksOnly={showBookmarksOnly}
          bookmarkCount={bookmarks.length}
          onTrackChange={handleTrackChange}
          onRoomChange={handleRoomChange}
          onSearchChange={setSearchQuery}
          onBookmarksOnlyChange={handleBookmarksOnlyChange}
        />
      </div>

      {/* Now/Next Banner */}
      <NowNextBanner
        sessions={filteredSessions}
        localeConfig={localeConfig}
        onSessionClick={handleNowNextClick}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 pb-8">
        {filteredSessions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-md)] flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-[var(--color-text-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">No sessions found</h3>
            <p className="text-sm text-[var(--color-text-muted)] max-w-sm leading-relaxed">
              Try adjusting your filters or search query to find what you&apos;re looking for.
            </p>
          </div>
        ) : viewMode === 'list' ? (
          <ListView
            sessions={filteredSessions}
            isBookmarked={isBookmarked}
            onToggleBookmark={handleToggleBookmark}
            tracks={config.tracks}
            localeConfig={localeConfig}
          />
        ) : (
          <TimelineView
            sessions={filteredSessions}
            isBookmarked={isBookmarked}
            onToggleBookmark={handleToggleBookmark}
            tracks={config.tracks}
            localeConfig={localeConfig}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-[var(--color-text-secondary)]">{config.footerText}</p>
          {config.copyrightText && (
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">{config.copyrightText}</p>
          )}
        </div>
      </footer>
    </div>
  );
}
