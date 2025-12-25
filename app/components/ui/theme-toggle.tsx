'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/app/lib/theme-context';
import { cn } from '@/app/lib/cn';
import { Sun, Moon, Monitor, ChevronDown, Check } from 'lucide-react';

const themes = [
  { value: 'light' as const, label: 'Light', icon: Sun },
  { value: 'dark' as const, label: 'Dark', icon: Moon },
  { value: 'system' as const, label: 'System', icon: Monitor },
];

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Always show System icon on server and before hydration to prevent mismatch
  const currentTheme = mounted 
    ? (themes.find((t) => t.value === theme) || themes[2])
    : themes[2]; // System theme as default for SSR
  const CurrentIcon = currentTheme.icon;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
          'bg-[var(--color-surface)] border border-[var(--color-border)]',
          'hover:bg-[var(--color-surface-elevated)] hover:border-[var(--color-border-subtle)]',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
          'text-[var(--color-text-secondary)]'
        )}
        aria-label="Toggle theme"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <CurrentIcon className="w-4 h-4" />
        <span className="hidden sm:inline">{currentTheme.label}</span>
        <ChevronDown
          className={cn('w-3.5 h-3.5 transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            'absolute right-0 top-full mt-1.5 z-50',
            'min-w-[140px] p-1 rounded-lg',
            'bg-[var(--color-surface-elevated)] border border-[var(--color-border)]',
            'shadow-lg shadow-black/20',
            'animate-fade-in'
          )}
          role="listbox"
          aria-label="Theme options"
        >
          {themes.map((t) => {
            const Icon = t.icon;
            const isSelected = theme === t.value;

            return (
              <button
                key={t.value}
                onClick={() => {
                  setTheme(t.value);
                  setIsOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors',
                  'hover:bg-[var(--color-surface)]',
                  isSelected
                    ? 'text-[var(--color-primary)] font-medium'
                    : 'text-[var(--color-text-secondary)]'
                )}
                role="option"
                aria-selected={isSelected}
              >
                <Icon className="w-4 h-4" />
                <span className="flex-1 text-left">{t.label}</span>
                {isSelected && <Check className="w-4 h-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
