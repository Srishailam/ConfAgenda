'use client';

import { cn } from '@/app/lib/cn';
import type { Presenter } from '@/app/lib/schedule-data';

interface SpeakerAvatarProps {
  presenter: Presenter;
  size?: 'sm' | 'md' | 'lg';
  showInfo?: boolean;
}

export function SpeakerAvatar({ presenter, size = 'md', showInfo = true }: SpeakerAvatarProps) {
  const { name, tagline, company, profilePhoto } = presenter.attributes;
  const companyName = company?.data?.attributes?.name;
  const photoUrl = profilePhoto?.data?.attributes?.url;
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          'relative rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden flex-shrink-0',
          sizeClasses[size]
        )}
      >
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Hide broken image, show initials
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : null}
        <span 
          className={cn(
            'text-[var(--color-text-muted)] font-medium',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-base'
          )}
        >
          {initials}
        </span>
      </div>
      
      {showInfo && (
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">
            {name}
          </p>
          {(tagline || companyName) && (
            <p className="text-xs text-[var(--color-text-muted)] truncate">
              {tagline && companyName 
                ? `${tagline}, ${companyName}`
                : tagline || companyName
              }
            </p>
          )}
        </div>
      )}
    </div>
  );
}

interface SpeakerAvatarGroupProps {
  presenters: Presenter[];
  maxVisible?: number;
}

export function SpeakerAvatarGroup({ presenters, maxVisible = 3 }: SpeakerAvatarGroupProps) {
  const visible = presenters.slice(0, maxVisible);
  const remaining = presenters.length - maxVisible;

  if (presenters.length === 0) return null;

  if (presenters.length === 1) {
    return <SpeakerAvatar presenter={presenters[0]} size="sm" />;
  }

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {visible.map((presenter, idx) => (
          <div
            key={idx}
            className="relative w-8 h-8 rounded-full bg-[var(--color-surface-elevated)] border-2 border-[var(--color-surface)] flex items-center justify-center overflow-hidden"
            title={presenter.attributes.name}
          >
            {presenter.attributes.profilePhoto?.data?.attributes?.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={presenter.attributes.profilePhoto.data.attributes.url}
                alt={presenter.attributes.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs text-[var(--color-text-muted)] font-medium">
                {presenter.attributes.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            )}
          </div>
        ))}
        {remaining > 0 && (
          <div className="relative w-8 h-8 rounded-full bg-[var(--color-surface-elevated)] border-2 border-[var(--color-surface)] flex items-center justify-center">
            <span className="text-xs text-[var(--color-text-muted)] font-medium">
              +{remaining}
            </span>
          </div>
        )}
      </div>
      <div className="ml-3 min-w-0">
        <p className="text-sm text-[var(--color-text-secondary)] truncate">
          {presenters.map(p => p.attributes.name).join(', ')}
        </p>
      </div>
    </div>
  );
}

