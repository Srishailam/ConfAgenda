'use client';

import { cn } from '@/app/lib/cn';
import { LayoutList, CalendarDays } from 'lucide-react';

interface ViewToggleProps {
  viewMode: 'list' | 'timeline';
  onViewModeChange: (mode: 'list' | 'timeline') => void;
}

export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-[var(--color-surface-elevated)] rounded-xl border border-[var(--color-border)]">
      <button
        onClick={() => onViewModeChange('list')}
        className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
          viewMode === 'list'
            ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]'
            : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
        )}
        aria-label="List view"
      >
        <LayoutList className="w-4 h-4" />
        <span className="hidden sm:inline">List</span>
      </button>
      <button
        onClick={() => onViewModeChange('timeline')}
        className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
          viewMode === 'timeline'
            ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]'
            : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
        )}
        aria-label="Timeline view"
      >
        <CalendarDays className="w-4 h-4" />
        <span className="hidden sm:inline">Timeline</span>
      </button>
    </div>
  );
}
