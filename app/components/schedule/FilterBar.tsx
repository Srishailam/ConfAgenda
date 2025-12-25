'use client';

import { cn } from '@/app/lib/cn';
import { Search, X, Heart, Filter } from 'lucide-react';
import { Select } from '@/app/components/ui/select';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

interface FilterBarProps {
  tracks: string[];
  rooms: string[];
  selectedTrack: string;
  selectedRoom: string;
  searchQuery: string;
  showBookmarksOnly: boolean;
  bookmarkCount: number;
  onTrackChange: (track: string) => void;
  onRoomChange: (room: string) => void;
  onSearchChange: (query: string) => void;
  onBookmarksOnlyChange: (show: boolean) => void;
}

export function FilterBar({
  tracks,
  rooms,
  selectedTrack,
  selectedRoom,
  searchQuery,
  showBookmarksOnly,
  bookmarkCount,
  onTrackChange,
  onRoomChange,
  onSearchChange,
  onBookmarksOnlyChange,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  
  const hasActiveFilters = selectedTrack !== 'all' || selectedRoom !== 'all' || showBookmarksOnly;

  const clearFilters = () => {
    onTrackChange('all');
    onRoomChange('all');
    onSearchChange('');
    onBookmarksOnlyChange(false);
  };

  return (
    <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Search and Filter Toggle Row */}
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search sessions, speakers..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className={cn(
                'w-full h-10 pl-10 pr-10 text-sm rounded-lg',
                'bg-[var(--color-surface)] border border-[var(--color-border)]',
                'text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent',
                'transition-all duration-200'
              )}
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Bookmarks Toggle */}
          <Button
            variant={showBookmarksOnly ? 'default' : 'secondary'}
            size="icon"
            onClick={() => onBookmarksOnlyChange(!showBookmarksOnly)}
            className="relative flex-shrink-0"
            aria-label={showBookmarksOnly ? 'Show all sessions' : 'Show bookmarked sessions'}
          >
            <Heart className={cn('w-4 h-4', showBookmarksOnly && 'fill-current')} />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-bookmark)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {bookmarkCount > 9 ? '9+' : bookmarkCount}
              </span>
            )}
          </Button>

          {/* Filter Toggle (Mobile) */}
          <Button
            variant={hasActiveFilters ? 'default' : 'secondary'}
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex-shrink-0"
            aria-label="Toggle filters"
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Filter Dropdowns - Always visible on desktop, toggleable on mobile */}
        <div className={cn(
          'flex flex-col md:flex-row items-stretch md:items-center gap-2 mt-3',
          'md:flex',
          showFilters ? 'flex' : 'hidden md:flex'
        )}>
          <div className="flex items-center gap-2 flex-1">
            <Select
              value={selectedTrack}
              onChange={(e) => onTrackChange(e.target.value)}
              options={[
                { value: 'all', label: 'All Tracks' },
                ...tracks.map(t => ({ value: t, label: t }))
              ]}
              className="flex-1 md:w-40"
            />
            <Select
              value={selectedRoom}
              onChange={(e) => onRoomChange(e.target.value)}
              options={[
                { value: 'all', label: 'All Rooms' },
                ...rooms.map(r => ({ value: r, label: r }))
              ]}
              className="flex-1 md:w-48"
            />
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            >
              <X className="w-4 h-4 mr-1" />
              Clear filters
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

