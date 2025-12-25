import { cn } from '@/app/lib/cn';
import { type HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'track';
  trackColor?: string;
}

function Badge({ className, variant = 'default', trackColor, style, ...props }: BadgeProps) {
  // For track variant, create a subtle background version
  const trackStyles =
    variant === 'track' && trackColor
      ? {
          backgroundColor: `${trackColor}18`, // 10% opacity
          color: trackColor,
          borderColor: `${trackColor}30`, // 20% opacity border
        }
      : {};

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200',
        {
          'bg-[var(--color-primary)] text-white shadow-sm': variant === 'default',
          'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]':
            variant === 'secondary',
          'border border-[var(--color-border)] text-[var(--color-text-secondary)] bg-transparent':
            variant === 'outline',
          'border': variant === 'track',
        },
        className
      )}
      style={{
        ...trackStyles,
        ...style,
      }}
      {...props}
    />
  );
}

export { Badge };
