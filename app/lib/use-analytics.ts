'use client';

import { useCallback } from 'react';
import { usePostHog } from 'posthog-js/react';
import { useConference } from './config-provider';

// Analytics event types for type safety
type AnalyticsEvents = {
  // Session events
  session_viewed: {
    session_id: string;
    session_title: string;
    track: string;
    room: string;
    speakers: string[];
  };
  session_bookmarked: {
    session_id: string;
    session_title: string;
    track: string;
    action: 'add' | 'remove';
  };
  session_shared: {
    session_id: string;
    session_title: string;
    share_method: 'copy_link' | 'twitter' | 'linkedin';
  };

  // Navigation events
  day_changed: {
    from_day: string;
    to_day: string;
  };
  view_mode_changed: {
    from_mode: 'list' | 'timeline';
    to_mode: 'list' | 'timeline';
  };

  // Filter events
  search_performed: {
    query: string;
    results_count: number;
  };
  filter_applied: {
    filter_type: 'track' | 'room' | 'bookmarks';
    filter_value: string;
  };
  filter_cleared: {
    filters_cleared: string[];
  };

  // Engagement events
  now_next_clicked: {
    session_id: string;
    session_title: string;
    banner_type: 'now' | 'next';
  };
  external_link_clicked: {
    link_type: 'speaker_twitter' | 'speaker_linkedin' | 'recording' | 'website';
    url: string;
  };

  // Theme events
  theme_changed: {
    from_theme: string;
    to_theme: string;
  };
};

export function useAnalytics() {
  const posthog = usePostHog();
  const conference = useConference();

  // Get conference context for all events
  const getConferenceContext = useCallback(() => {
    if (!conference?.config) return {};
    return {
      conference_slug: conference.config.slug,
      conference_name: conference.config.name,
      conference_year: conference.config.year,
      conference_location: conference.config.location,
    };
  }, [conference]);

  // Generic track function with conference context
  const track = useCallback(
    <T extends keyof AnalyticsEvents>(
      event: T,
      properties: AnalyticsEvents[T]
    ) => {
      if (!posthog) return;

      posthog.capture(event, {
        ...properties,
        ...getConferenceContext(),
        timestamp: new Date().toISOString(),
      });
    },
    [posthog, getConferenceContext]
  );

  // Convenience methods for common events
  const trackSessionViewed = useCallback(
    (session: {
      id: string;
      title: string;
      track: string;
      room: string;
      speakers: string[];
    }) => {
      track('session_viewed', {
        session_id: session.id,
        session_title: session.title,
        track: session.track,
        room: session.room,
        speakers: session.speakers,
      });
    },
    [track]
  );

  const trackSessionBookmarked = useCallback(
    (
      session: { id: string; title: string; track: string },
      action: 'add' | 'remove'
    ) => {
      track('session_bookmarked', {
        session_id: session.id,
        session_title: session.title,
        track: session.track,
        action,
      });
    },
    [track]
  );

  const trackDayChanged = useCallback(
    (fromDay: string, toDay: string) => {
      track('day_changed', {
        from_day: fromDay,
        to_day: toDay,
      });
    },
    [track]
  );

  const trackViewModeChanged = useCallback(
    (fromMode: 'list' | 'timeline', toMode: 'list' | 'timeline') => {
      track('view_mode_changed', {
        from_mode: fromMode,
        to_mode: toMode,
      });
    },
    [track]
  );

  const trackSearch = useCallback(
    (query: string, resultsCount: number) => {
      // Only track if query is meaningful (avoid tracking every keystroke)
      if (query.length >= 2) {
        track('search_performed', {
          query,
          results_count: resultsCount,
        });
      }
    },
    [track]
  );

  const trackFilterApplied = useCallback(
    (filterType: 'track' | 'room' | 'bookmarks', filterValue: string) => {
      track('filter_applied', {
        filter_type: filterType,
        filter_value: filterValue,
      });
    },
    [track]
  );

  const trackFilterCleared = useCallback(
    (filtersCleared: string[]) => {
      track('filter_cleared', {
        filters_cleared: filtersCleared,
      });
    },
    [track]
  );

  const trackNowNextClicked = useCallback(
    (
      session: { id: string; title: string },
      bannerType: 'now' | 'next'
    ) => {
      track('now_next_clicked', {
        session_id: session.id,
        session_title: session.title,
        banner_type: bannerType,
      });
    },
    [track]
  );

  const trackExternalLinkClicked = useCallback(
    (
      linkType: 'speaker_twitter' | 'speaker_linkedin' | 'recording' | 'website',
      url: string
    ) => {
      track('external_link_clicked', {
        link_type: linkType,
        url,
      });
    },
    [track]
  );

  const trackThemeChanged = useCallback(
    (fromTheme: string, toTheme: string) => {
      track('theme_changed', {
        from_theme: fromTheme,
        to_theme: toTheme,
      });
    },
    [track]
  );

  const trackSessionShared = useCallback(
    (
      session: { id: string; title: string },
      shareMethod: 'copy_link' | 'twitter' | 'linkedin'
    ) => {
      track('session_shared', {
        session_id: session.id,
        session_title: session.title,
        share_method: shareMethod,
      });
    },
    [track]
  );

  // Identify user (for logged-in users in future)
  const identifyUser = useCallback(
    (userId: string, traits?: Record<string, unknown>) => {
      if (!posthog) return;
      posthog.identify(userId, {
        ...traits,
        ...getConferenceContext(),
      });
    },
    [posthog, getConferenceContext]
  );

  // Reset user (for logout)
  const resetUser = useCallback(() => {
    if (!posthog) return;
    posthog.reset();
  }, [posthog]);

  return {
    track,
    trackSessionViewed,
    trackSessionBookmarked,
    trackDayChanged,
    trackViewModeChanged,
    trackSearch,
    trackFilterApplied,
    trackFilterCleared,
    trackNowNextClicked,
    trackExternalLinkClicked,
    trackThemeChanged,
    trackSessionShared,
    identifyUser,
    resetUser,
  };
}

// Hook for use outside of ConferenceProvider (e.g., home page)
export function useAnalyticsSimple() {
  const posthog = usePostHog();

  const track = useCallback(
    (event: string, properties?: Record<string, unknown>) => {
      if (!posthog) return;
      posthog.capture(event, {
        ...properties,
        timestamp: new Date().toISOString(),
      });
    },
    [posthog]
  );

  return { track };
}

