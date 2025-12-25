module.exports = [
"[project]/Documents/Sri/appConf/app/config/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Comprehensive TypeScript types for conference configuration
__turbopack_context__.s([
    "createConferenceConfig",
    ()=>createConferenceConfig,
    "defaultFonts",
    ()=>defaultFonts,
    "defaultSessionTypes",
    ()=>defaultSessionTypes,
    "defaultTheme",
    ()=>defaultTheme
]);
const defaultTheme = {
    primaryColor: '#6366f1',
    primaryHoverColor: '#4f46e5',
    primaryLightColor: '#818cf8',
    accentColor: '#22d3ee',
    backgroundColor: '#0a0a0f',
    surfaceColor: '#131318',
    surfaceElevatedColor: '#1a1a22',
    borderColor: '#27272a',
    borderSubtleColor: '#1f1f23',
    textPrimaryColor: '#fafafa',
    textSecondaryColor: '#a1a1aa',
    textMutedColor: '#71717a',
    nowColor: '#22c55e',
    nextColor: '#3b82f6',
    bookmarkColor: '#ec4899'
};
const defaultFonts = {
    heading: "'Plus Jakarta Sans', system-ui, sans-serif",
    body: "'Plus Jakarta Sans', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
};
const defaultSessionTypes = {
    SESSION: {
        label: 'Talk'
    },
    WORKSHOP: {
        label: 'Workshop'
    },
    SERVICE: {
        label: 'Break'
    },
    OTHER: {
        label: 'Event'
    }
};
function createConferenceConfig(partial) {
    return {
        slug: partial.slug,
        name: partial.name,
        shortName: partial.shortName || partial.name,
        tagline: partial.tagline || '',
        dateRange: partial.dateRange || '',
        location: partial.location || '',
        year: partial.year || new Date().getFullYear(),
        timezone: partial.timezone || 'America/New_York',
        days: partial.days || [],
        defaultDayIndex: partial.defaultDayIndex || 0,
        theme: {
            ...defaultTheme,
            ...partial.theme
        },
        fonts: {
            ...defaultFonts,
            ...partial.fonts
        },
        logo: partial.logo,
        favicon: partial.favicon,
        tracks: partial.tracks || {},
        sessionTypes: {
            ...defaultSessionTypes,
            ...partial.sessionTypes
        },
        locale: partial.locale || 'en-US',
        timeFormat: partial.timeFormat || '12h',
        seo: partial.seo || {
            title: partial.name,
            description: partial.tagline || '',
            keywords: []
        },
        socialLinks: partial.socialLinks,
        pwa: partial.pwa || {
            name: partial.name,
            shortName: partial.shortName || partial.name,
            description: partial.tagline || '',
            themeColor: partial.theme?.primaryColor || defaultTheme.primaryColor,
            backgroundColor: partial.theme?.backgroundColor || defaultTheme.backgroundColor,
            display: 'standalone',
            orientation: 'portrait-primary',
            categories: [
                'events',
                'productivity'
            ]
        },
        footerText: partial.footerText || partial.name,
        copyrightText: partial.copyrightText
    };
}
}),
"[project]/Documents/Sri/appConf/app/config/conferences/ai-engineer-2025.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiEngineer2025",
    ()=>aiEngineer2025
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/types.ts [app-ssr] (ecmascript)");
;
const aiEngineer2025 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConferenceConfig"])({
    // Identity
    slug: 'ai-engineer-2025',
    name: 'AI Engineer Code Summit',
    shortName: 'AI Engineer 2025',
    tagline: 'The premier event for AI engineers',
    // Dates & Location
    dateRange: 'November 19-22, 2025',
    location: 'New York City',
    year: 2025,
    timezone: 'America/New_York',
    days: [
        {
            date: '2025-11-19',
            label: 'Wed',
            fullLabel: 'Wed, Nov 19'
        },
        {
            date: '2025-11-20',
            label: 'Thu',
            fullLabel: 'Thu, Nov 20'
        },
        {
            date: '2025-11-21',
            label: 'Fri',
            fullLabel: 'Fri, Nov 21'
        },
        {
            date: '2025-11-22',
            label: 'Sat',
            fullLabel: 'Sat, Nov 22'
        }
    ],
    defaultDayIndex: 1,
    // Branding - Indigo/Cyan theme
    theme: {
        primaryColor: '#6366f1',
        primaryHoverColor: '#4f46e5',
        primaryLightColor: '#818cf8',
        accentColor: '#22d3ee',
        backgroundColor: '#0a0a0f',
        surfaceColor: '#131318',
        surfaceElevatedColor: '#1a1a22',
        borderColor: '#27272a',
        borderSubtleColor: '#1f1f23',
        textPrimaryColor: '#fafafa',
        textSecondaryColor: '#a1a1aa',
        textMutedColor: '#71717a',
        nowColor: '#22c55e',
        nextColor: '#3b82f6',
        bookmarkColor: '#ec4899'
    },
    fonts: {
        heading: "'Plus Jakarta Sans', system-ui, sans-serif",
        body: "'Plus Jakarta Sans', system-ui, sans-serif",
        mono: "'JetBrains Mono', monospace",
        googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
    },
    // Track Configuration
    tracks: {
        Keynote: {
            color: '#f59e0b'
        },
        'AI Leadership': {
            color: '#8b5cf6'
        },
        'AI Engineering': {
            color: '#06b6d4'
        },
        Workshop: {
            color: '#10b981'
        },
        Expo: {
            color: '#f97316'
        },
        Service: {
            color: '#64748b'
        },
        Plenary: {
            color: '#f59e0b'
        }
    },
    // Session Types
    sessionTypes: {
        SESSION: {
            label: 'Talk'
        },
        WORKSHOP: {
            label: 'Workshop'
        },
        SERVICE: {
            label: 'Break'
        },
        OTHER: {
            label: 'Event'
        }
    },
    // Locale
    locale: 'en-US',
    timeFormat: '12h',
    // SEO
    seo: {
        title: 'AI Engineer Code Summit 2025 | Schedule',
        description: 'Conference schedule for AI Engineer Code Summit 2025 - November 19-22, New York City',
        keywords: [
            'AI',
            'conference',
            'schedule',
            'engineering',
            'code summit',
            '2025',
            'machine learning',
            'artificial intelligence'
        ]
    },
    // Social Links
    socialLinks: {
        website: 'https://ai.engineer',
        twitter: 'https://twitter.com/aiaboratory'
    },
    // PWA Configuration
    pwa: {
        name: 'AI Engineer Code Summit 2025',
        shortName: 'AI Engineer',
        description: 'Conference schedule for AI Engineer Code Summit 2025',
        themeColor: '#6366f1',
        backgroundColor: '#0a0a0f',
        display: 'standalone',
        orientation: 'portrait-primary',
        categories: [
            'events',
            'productivity'
        ]
    },
    // Footer
    footerText: 'AI Engineer Code Summit 2025',
    copyrightText: '© 2025 AI Engineer. All rights reserved.'
});
}),
"[project]/Documents/Sri/appConf/app/config/conferences/react-conf-2025.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reactConf2025",
    ()=>reactConf2025
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/types.ts [app-ssr] (ecmascript)");
;
const reactConf2025 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConferenceConfig"])({
    // Identity
    slug: 'react-conf-2025',
    name: 'React Conference',
    shortName: 'React Conf 2025',
    tagline: 'The official React conference',
    // Dates & Location
    dateRange: 'May 15-16, 2025',
    location: 'Henderson, Nevada',
    year: 2025,
    timezone: 'America/Los_Angeles',
    days: [
        {
            date: '2025-05-15',
            label: 'Thu',
            fullLabel: 'Thu, May 15'
        },
        {
            date: '2025-05-16',
            label: 'Fri',
            fullLabel: 'Fri, May 16'
        }
    ],
    defaultDayIndex: 0,
    // Branding - React Blue theme
    theme: {
        primaryColor: '#61dafb',
        primaryHoverColor: '#4fc3e0',
        primaryLightColor: '#88e5fc',
        accentColor: '#f472b6',
        backgroundColor: '#0d1117',
        surfaceColor: '#161b22',
        surfaceElevatedColor: '#21262d',
        borderColor: '#30363d',
        borderSubtleColor: '#21262d',
        textPrimaryColor: '#f0f6fc',
        textSecondaryColor: '#8b949e',
        textMutedColor: '#6e7681',
        nowColor: '#3fb950',
        nextColor: '#58a6ff',
        bookmarkColor: '#f78166'
    },
    fonts: {
        heading: "'Inter', system-ui, sans-serif",
        body: "'Inter', system-ui, sans-serif",
        mono: "'Fira Code', monospace",
        googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap'
    },
    // Track Configuration
    tracks: {
        Keynote: {
            color: '#61dafb'
        },
        'React Core': {
            color: '#f472b6'
        },
        'React Native': {
            color: '#a855f7'
        },
        'Server Components': {
            color: '#22c55e'
        },
        Community: {
            color: '#f59e0b'
        },
        Workshop: {
            color: '#06b6d4'
        },
        Break: {
            color: '#6e7681'
        }
    },
    // Session Types
    sessionTypes: {
        SESSION: {
            label: 'Talk'
        },
        WORKSHOP: {
            label: 'Workshop'
        },
        SERVICE: {
            label: 'Break'
        },
        OTHER: {
            label: 'Activity'
        }
    },
    // Locale
    locale: 'en-US',
    timeFormat: '12h',
    // SEO
    seo: {
        title: 'React Conf 2025 | Schedule',
        description: 'Official schedule for React Conf 2025 - May 15-16, Henderson, Nevada',
        keywords: [
            'React',
            'conference',
            'JavaScript',
            'frontend',
            'web development',
            '2025'
        ]
    },
    // Social Links
    socialLinks: {
        website: 'https://conf.react.dev',
        twitter: 'https://twitter.com/reactjs',
        github: 'https://github.com/facebook/react'
    },
    // PWA Configuration
    pwa: {
        name: 'React Conf 2025',
        shortName: 'React Conf',
        description: 'Official schedule for React Conf 2025',
        themeColor: '#61dafb',
        backgroundColor: '#0d1117',
        display: 'standalone',
        orientation: 'portrait-primary',
        categories: [
            'events',
            'productivity',
            'developer tools'
        ]
    },
    // Footer
    footerText: 'React Conf 2025',
    copyrightText: '© 2025 Meta Platforms, Inc.'
});
}),
"[project]/Documents/Sri/appConf/app/config/conferences/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Conference Registry
// Add new conferences by importing them here and adding to the registry
__turbopack_context__.s([
    "conferenceExists",
    ()=>conferenceExists,
    "conferenceRegistry",
    ()=>conferenceRegistry,
    "defaultConference",
    ()=>defaultConference,
    "defaultConferenceSlug",
    ()=>defaultConferenceSlug,
    "getAllConferenceSlugs",
    ()=>getAllConferenceSlugs,
    "getAllConferences",
    ()=>getAllConferences,
    "getConferenceConfig",
    ()=>getConferenceConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$ai$2d$engineer$2d$2025$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/conferences/ai-engineer-2025.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$react$2d$conf$2d$2025$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/conferences/react-conf-2025.ts [app-ssr] (ecmascript)");
;
;
const conferenceRegistry = {
    'ai-engineer-2025': __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$ai$2d$engineer$2d$2025$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aiEngineer2025"],
    'react-conf-2025': __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$react$2d$conf$2d$2025$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactConf2025"]
};
function getConferenceConfig(slug) {
    return conferenceRegistry[slug] || null;
}
function getAllConferenceSlugs() {
    return Object.keys(conferenceRegistry);
}
function getAllConferences() {
    return Object.values(conferenceRegistry);
}
function conferenceExists(slug) {
    return slug in conferenceRegistry;
}
const defaultConferenceSlug = 'ai-engineer-2025';
const defaultConference = conferenceRegistry[defaultConferenceSlug];
}),
"[project]/Documents/Sri/appConf/app/lib/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/theme-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/monitor.js [app-ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
'use client';
;
;
;
;
;
const themes = [
    {
        value: 'light',
        label: 'Light',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
    },
    {
        value: 'dark',
        label: 'Dark',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"]
    },
    {
        value: 'system',
        label: 'System',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"]
    }
];
function ThemeToggle() {
    const { theme, setTheme, mounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Close on escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleEscape(event) {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        }
        document.addEventListener('keydown', handleEscape);
        return ()=>document.removeEventListener('keydown', handleEscape);
    }, []);
    // Always show System icon on server and before hydration to prevent mismatch
    const currentTheme = mounted ? themes.find((t)=>t.value === theme) || themes[2] : themes[2]; // System theme as default for SSR
    const CurrentIcon = currentTheme.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200', 'bg-[var(--color-surface)] border border-[var(--color-border)]', 'hover:bg-[var(--color-surface-elevated)] hover:border-[var(--color-border-subtle)]', 'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]', 'text-[var(--color-text-secondary)]'),
                "aria-label": "Toggle theme",
                "aria-expanded": isOpen,
                "aria-haspopup": "listbox",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentIcon, {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: currentTheme.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-3.5 h-3.5 transition-transform duration-200', isOpen && 'rotate-180')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute right-0 top-full mt-1.5 z-50', 'min-w-[140px] p-1 rounded-lg', 'bg-[var(--color-surface-elevated)] border border-[var(--color-border)]', 'shadow-lg shadow-black/20', 'animate-fade-in'),
                role: "listbox",
                "aria-label": "Theme options",
                children: themes.map((t)=>{
                    const Icon = t.icon;
                    const isSelected = theme === t.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setTheme(t.value);
                            setIsOpen(false);
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors', 'hover:bg-[var(--color-surface)]', isSelected ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-text-secondary)]'),
                        role: "option",
                        "aria-selected": isSelected,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 text-left",
                                children: t.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this),
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                                lineNumber: 107,
                                columnNumber: 32
                            }, this)
                        ]
                    }, t.value, true, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                        lineNumber: 89,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Sri/appConf/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/conferences/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function HomePage() {
    const conferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllConferences"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-[var(--color-background)] via-[var(--color-surface)] to-[var(--color-background)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                    fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4",
                                children: "ConfAgenda"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-[var(--color-text-secondary)]",
                                children: "Your multi-conference schedule platform"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: conferences.map((conference)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${conference.slug}`,
                                className: "group relative overflow-hidden rounded-2xl bg-[var(--color-surface)]/80 backdrop-blur-lg border border-[var(--color-border)] p-6 transition-all duration-300 hover:bg-[var(--color-surface-elevated)] hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--color-primary)]/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity",
                                        style: {
                                            background: `linear-gradient(135deg, ${conference.theme.primaryColor} 0%, ${conference.theme.accentColor} 100%)`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-[var(--color-text-primary)] mb-2",
                                                children: conference.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[var(--color-text-secondary)] text-sm mb-4",
                                                children: conference.tagline
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                                    lineNumber: 60,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: conference.dateRange
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                                        lineNumber: 82,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                                lineNumber: 70,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: conference.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex items-center text-[var(--color-primary)] font-medium group-hover:translate-x-2 transition-transform",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "View Schedule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 ml-2",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, conference.slug, true, {
                                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 text-center text-[var(--color-text-muted)] text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Powered by ConfAgenda • Multi-tenant conference platform"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Sri_appConf_app_5eccdcb4._.js.map