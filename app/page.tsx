'use client';

import Link from 'next/link';
import { getAllConferences } from '@/app/config/conferences';
import { ThemeToggle } from '@/app/components/ui/theme-toggle';

export default function HomePage() {
  const conferences = getAllConferences();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-background)] via-[var(--color-surface)] to-[var(--color-background)]">
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
            ConfAgenda
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)]">
            Your multi-conference schedule platform
          </p>
        </div>

        {/* Conference Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {conferences.map((conference) => (
            <Link
              key={conference.slug}
              href={`/${conference.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-[var(--color-surface)]/80 backdrop-blur-lg border border-[var(--color-border)] p-6 transition-all duration-300 hover:bg-[var(--color-surface-elevated)] hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--color-primary)]/10"
            >
              {/* Accent gradient */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${conference.theme.primaryColor} 0%, ${conference.theme.accentColor} 100%)`,
                }}
              />

              <div className="relative z-10">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                  {conference.name}
                </h2>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  {conference.tagline}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)]">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{conference.dateRange}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{conference.location}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-[var(--color-primary)] font-medium group-hover:translate-x-2 transition-transform">
                  <span>View Schedule</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-[var(--color-text-muted)] text-sm">
          <p>Powered by ConfAgenda • Multi-tenant conference platform</p>
        </div>
      </div>
    </div>
  );
}
