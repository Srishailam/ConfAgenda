'use client';

import { cn } from '@/app/lib/cn';

interface Day {
  date: string;
  label: string;
  fullLabel: string;
}

interface DayNavigatorProps {
  days: Day[];
  activeDay: string;
  onDayChange: (date: string) => void;
}

export function DayNavigator({ days, activeDay, onDayChange }: DayNavigatorProps) {
  return (
    <nav className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
          {days.map((day) => {
            const isActive = activeDay === day.date;
            return (
              <button
                key={day.date}
                onClick={() => onDayChange(day.date)}
                className={cn(
                  'relative flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2',
                  isActive
                    ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-md)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)]'
                )}
              >
                {/* Mobile: short label */}
                <span className="md:hidden">{day.label}</span>
                {/* Desktop: full label */}
                <span className="hidden md:inline">{day.fullLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
}
