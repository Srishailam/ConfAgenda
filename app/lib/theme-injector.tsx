'use client';

import { useEffect } from 'react';
import { type ThemeConfig, type ConferenceConfig } from '@/app/config/types';

interface ThemeInjectorProps {
  config: ConferenceConfig;
}

/**
 * Injects conference-specific CSS custom properties (like track colors).
 * 
 * NOTE: This component does NOT inject base theme colors (background, surface, text, etc.)
 * because those are controlled by the light/dark theme system in globals.css.
 * Only conference-specific colors like track colors are injected here.
 */
export function ThemeInjector({ config }: ThemeInjectorProps) {
  useEffect(() => {
    const root = document.documentElement;
    const { tracks } = config;

    // Only inject track colors - these are conference-specific
    // and don't conflict with the light/dark theme system
    Object.entries(tracks).forEach(([trackName, trackConfig]) => {
      const cssVarName = `--color-track-${trackName.toLowerCase().replace(/\s+/g, '-')}`;
      root.style.setProperty(cssVarName, trackConfig.color);
    });

    // Cleanup function - remove track colors when unmounting
    return () => {
      Object.entries(tracks).forEach(([trackName]) => {
        const cssVarName = `--color-track-${trackName.toLowerCase().replace(/\s+/g, '-')}`;
        root.style.removeProperty(cssVarName);
      });
    };
  }, [config]);

  return null;
}

/**
 * Generates CSS string with all theme variables.
 * Useful for SSR or static generation.
 */
export function generateThemeCSS(theme: ThemeConfig, tracks: Record<string, { color: string }>): string {
  const trackVars = Object.entries(tracks)
    .map(([name, config]) => `--color-track-${name.toLowerCase().replace(/\s+/g, '-')}: ${config.color};`)
    .join('\n  ');

  return `:root {
  /* Primary Colors */
  --color-primary: ${theme.primaryColor};
  --color-primary-hover: ${theme.primaryHoverColor};
  --color-primary-light: ${theme.primaryLightColor};
  --color-accent: ${theme.accentColor};

  /* Background & Surface */
  --color-background: ${theme.backgroundColor};
  --color-surface: ${theme.surfaceColor};
  --color-surface-elevated: ${theme.surfaceElevatedColor};

  /* Borders */
  --color-border: ${theme.borderColor};
  --color-border-subtle: ${theme.borderSubtleColor};

  /* Text Colors */
  --color-text-primary: ${theme.textPrimaryColor};
  --color-text-secondary: ${theme.textSecondaryColor};
  --color-text-muted: ${theme.textMutedColor};

  /* Status Colors */
  --color-now: ${theme.nowColor};
  --color-next: ${theme.nextColor};
  --color-bookmark: ${theme.bookmarkColor};

  /* Track Colors */
  ${trackVars}
}`;
}

/**
 * Hook to get the current theme from config context.
 * Use this in components that need access to theme values in JavaScript.
 */
export function useThemeColors(config: ConferenceConfig) {
  return {
    ...config.theme,
    getTrackColor: (trackName: string) => {
      return config.tracks[trackName]?.color || config.theme.textMutedColor;
    },
  };
}
