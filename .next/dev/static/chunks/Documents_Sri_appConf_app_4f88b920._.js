(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/schedule/DayNavigator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DayNavigator",
    ()=>DayNavigator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
;
function DayNavigator({ days, activeDay, onDayChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "jsx-4fb23789b5a36db8" + " " + "bg-[var(--color-surface)] border-b border-[var(--color-border)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4fb23789b5a36db8" + " " + "max-w-7xl mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4fb23789b5a36db8" + " " + "flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide",
                    children: days.map((day)=>{
                        const isActive = activeDay === day.date;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onDayChange(day.date),
                            className: "jsx-4fb23789b5a36db8" + " " + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200', 'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2', isActive ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-md)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)]') || ""),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4fb23789b5a36db8" + " " + "md:hidden",
                                    children: day.label
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/DayNavigator.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-4fb23789b5a36db8" + " " + "hidden md:inline",
                                    children: day.fullLabel
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/DayNavigator.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, day.date, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/DayNavigator.tsx",
                            lineNumber: 25,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/DayNavigator.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/DayNavigator.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "4fb23789b5a36db8",
                children: ".scrollbar-hide.jsx-4fb23789b5a36db8{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide.jsx-4fb23789b5a36db8::-webkit-scrollbar{display:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/DayNavigator.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = DayNavigator;
var _c;
__turbopack_context__.k.register(_c, "DayNavigator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/schedule/ViewToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewToggle",
    ()=>ViewToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/layout-list.js [app-client] (ecmascript) <export default as LayoutList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
'use client';
;
;
;
function ViewToggle({ viewMode, onViewModeChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 p-1 bg-[var(--color-surface-elevated)] rounded-xl border border-[var(--color-border)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onViewModeChange('list'),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200', viewMode === 'list' ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'),
                "aria-label": "List view",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ViewToggle.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: "List"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ViewToggle.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ViewToggle.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onViewModeChange('timeline'),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200', viewMode === 'timeline' ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'),
                "aria-label": "Timeline view",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ViewToggle.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: "Timeline"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ViewToggle.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ViewToggle.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ViewToggle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ViewToggle;
var _c;
__turbopack_context__.k.register(_c, "ViewToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const Select = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, options, placeholder, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('appearance-none w-full h-10 pl-3 pr-10 text-sm rounded-lg', 'bg-[var(--color-surface)] border border-[var(--color-border)]', 'text-[var(--color-text-primary)]', 'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent', 'transition-all duration-200', 'cursor-pointer', className),
                ...props,
                children: [
                    placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        disabled: true,
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/ui/select.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: option.value,
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/ui/select.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/ui/select.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/components/ui/select.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/select.tsx",
        lineNumber: 15,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Select;
Select.displayName = 'Select';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Select$forwardRef");
__turbopack_context__.k.register(_c1, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant = 'default', size = 'md', ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Base styles
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]', 'disabled:pointer-events-none disabled:opacity-50', 'active:scale-[0.98]', // Variants
        {
            'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-lg shadow-[var(--color-primary)]/20': variant === 'default',
            'bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] hover:bg-[var(--color-border)] border border-[var(--color-border)]': variant === 'secondary',
            'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)]': variant === 'ghost',
            'border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)]': variant === 'outline'
        }, // Sizes
        {
            'h-8 px-3 text-xs rounded-md': size === 'sm',
            'h-10 px-4 text-sm rounded-lg': size === 'md',
            'h-12 px-6 text-base rounded-lg': size === 'lg',
            'h-10 w-10 rounded-lg': size === 'icon'
        }, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/button.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterBar",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function FilterBar({ tracks, rooms, selectedTrack, selectedRoom, searchQuery, showBookmarksOnly, bookmarkCount, onTrackChange, onRoomChange, onSearchChange, onBookmarksOnlyChange }) {
    _s();
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasActiveFilters = selectedTrack !== 'all' || selectedRoom !== 'all' || showBookmarksOnly;
    const clearFilters = ()=>{
        onTrackChange('all');
        onRoomChange('all');
        onSearchChange('');
        onBookmarksOnlyChange(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--color-surface)] border-b border-[var(--color-border)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search sessions, speakers...",
                                    value: searchQuery,
                                    onChange: (e)=>onSearchChange(e.target.value),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full h-10 pl-10 pr-10 text-sm rounded-lg', 'bg-[var(--color-surface)] border border-[var(--color-border)]', 'text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]', 'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent', 'transition-all duration-200')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSearchChange(''),
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: showBookmarksOnly ? 'default' : 'secondary',
                            size: "icon",
                            onClick: ()=>onBookmarksOnlyChange(!showBookmarksOnly),
                            className: "relative flex-shrink-0",
                            "aria-label": showBookmarksOnly ? 'Show all sessions' : 'Show bookmarked sessions',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-4 h-4', showBookmarksOnly && 'fill-current')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                bookmarkCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-bookmark)] text-white text-[10px] font-bold rounded-full flex items-center justify-center",
                                    children: bookmarkCount > 9 ? '9+' : bookmarkCount
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: hasActiveFilters ? 'default' : 'secondary',
                            size: "icon",
                            onClick: ()=>setShowFilters(!showFilters),
                            className: "md:hidden flex-shrink-0",
                            "aria-label": "Toggle filters",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col md:flex-row items-stretch md:items-center gap-2 mt-3', 'md:flex', showFilters ? 'flex' : 'hidden md:flex'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: selectedTrack,
                                    onChange: (e)=>onTrackChange(e.target.value),
                                    options: [
                                        {
                                            value: 'all',
                                            label: 'All Tracks'
                                        },
                                        ...tracks.map((t)=>({
                                                value: t,
                                                label: t
                                            }))
                                    ],
                                    className: "flex-1 md:w-40"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: selectedRoom,
                                    onChange: (e)=>onRoomChange(e.target.value),
                                    options: [
                                        {
                                            value: 'all',
                                            label: 'All Rooms'
                                        },
                                        ...rooms.map((r)=>({
                                                value: r,
                                                label: r
                                            }))
                                    ],
                                    className: "flex-1 md:w-48"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            onClick: clearFilters,
                            className: "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                "Clear filters"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(FilterBar, "oJ1PYJsWFrwlzYtlEiE9hrxrFU0=");
_c = FilterBar;
var _c;
__turbopack_context__.k.register(_c, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]', 'shadow-[var(--shadow-card)] transition-all duration-200', 'hover:shadow-[var(--shadow-md)] hover:border-[var(--color-primary)]/20', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = 'Card';
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-1.5 p-4 md:p-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/card.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = 'CardHeader';
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-base md:text-lg font-semibold leading-tight text-[var(--color-text-primary)]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = 'CardTitle';
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-[var(--color-text-muted)]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/card.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = 'CardDescription';
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-4 md:p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/card.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = 'CardContent';
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center p-4 md:p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/card.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = 'CardFooter';
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
;
;
function Badge({ className, variant = 'default', trackColor, style, ...props }) {
    // For track variant, create a subtle background version
    const trackStyles = variant === 'track' && trackColor ? {
        backgroundColor: `${trackColor}18`,
        color: trackColor,
        borderColor: `${trackColor}30`
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200', {
            'bg-[var(--color-primary)] text-white shadow-sm': variant === 'default',
            'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]': variant === 'secondary',
            'border border-[var(--color-border)] text-[var(--color-text-secondary)] bg-transparent': variant === 'outline',
            'border': variant === 'track'
        }, className),
        style: {
            ...trackStyles,
            ...style
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/ui/badge.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpeakerAvatar",
    ()=>SpeakerAvatar,
    "SpeakerAvatarGroup",
    ()=>SpeakerAvatarGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
function SpeakerAvatar({ presenter, size = 'md', showInfo = true }) {
    const { name, tagline, company, profilePhoto } = presenter.attributes;
    const companyName = company?.data?.attributes?.name;
    const photoUrl = profilePhoto?.data?.attributes?.url;
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12'
    };
    const initials = name.split(' ').map((n)=>n[0]).join('').slice(0, 2).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden flex-shrink-0', sizeClasses[size]),
                children: [
                    photoUrl ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: photoUrl,
                        alt: name,
                        className: "w-full h-full object-cover",
                        onError: (e)=>{
                            // Hide broken image, show initials
                            e.target.style.display = 'none';
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-[var(--color-text-muted)] font-medium', size === 'sm' && 'text-xs', size === 'md' && 'text-sm', size === 'lg' && 'text-base'),
                        children: initials
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            showInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-[var(--color-text-primary)] truncate",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    (tagline || companyName) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[var(--color-text-muted)] truncate",
                        children: tagline && companyName ? `${tagline}, ${companyName}` : tagline || companyName
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = SpeakerAvatar;
function SpeakerAvatarGroup({ presenters, maxVisible = 3 }) {
    const visible = presenters.slice(0, maxVisible);
    const remaining = presenters.length - maxVisible;
    if (presenters.length === 0) return null;
    if (presenters.length === 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpeakerAvatar, {
            presenter: presenters[0],
            size: "sm"
        }, void 0, false, {
            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
            lineNumber: 93,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex -space-x-2",
                children: [
                    visible.map((presenter, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-8 h-8 rounded-full bg-[var(--color-surface-elevated)] border-2 border-[var(--color-surface)] flex items-center justify-center overflow-hidden",
                            title: presenter.attributes.name,
                            children: presenter.attributes.profilePhoto?.data?.attributes?.url ? // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: presenter.attributes.profilePhoto.data.attributes.url,
                                alt: presenter.attributes.name,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[var(--color-text-muted)] font-medium",
                                children: presenter.attributes.name.split(' ').map((n)=>n[0]).join('').slice(0, 2)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)),
                    remaining > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-8 h-8 rounded-full bg-[var(--color-surface-elevated)] border-2 border-[var(--color-surface)] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[var(--color-text-muted)] font-medium",
                            children: [
                                "+",
                                remaining
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-3 min-w-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[var(--color-text-secondary)] truncate",
                    children: presenters.map((p)=>p.attributes.name).join(', ')
                }, void 0, false, {
                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_c1 = SpeakerAvatarGroup;
var _c, _c1;
__turbopack_context__.k.register(_c, "SpeakerAvatar");
__turbopack_context__.k.register(_c1, "SpeakerAvatarGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/lib/schedule-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Types for the conference schedule data
__turbopack_context__.s([
    "createLocaleConfig",
    ()=>createLocaleConfig,
    "createSessionTypeLabelGetter",
    ()=>createSessionTypeLabelGetter,
    "createTimeFormatter",
    ()=>createTimeFormatter,
    "createTimeRangeFormatter",
    ()=>createTimeRangeFormatter,
    "createTrackColorGetter",
    ()=>createTrackColorGetter,
    "formatTime",
    ()=>formatTime,
    "formatTimeRange",
    ()=>formatTimeRange,
    "getDurationMinutes",
    ()=>getDurationMinutes,
    "getSessionDate",
    ()=>getSessionDate,
    "getSessionTypeLabel",
    ()=>getSessionTypeLabel,
    "getSessionsByDay",
    ()=>getSessionsByDay,
    "getTrackColor",
    ()=>getTrackColor,
    "getUniqueRooms",
    ()=>getUniqueRooms,
    "getUniqueTracks",
    ()=>getUniqueTracks,
    "groupSessionsByTime",
    ()=>groupSessionsByTime,
    "isSessionNow",
    ()=>isSessionNow,
    "isSessionUpcoming",
    ()=>isSessionUpcoming,
    "parseDateTime",
    ()=>parseDateTime
]);
// Default locale config (for backward compatibility)
const defaultLocaleConfig = {
    locale: 'en-US',
    timeFormat: '12h'
};
function parseDateTime(isoString) {
    return new Date(isoString);
}
function formatTime(date, config = defaultLocaleConfig) {
    return date.toLocaleTimeString(config.locale, {
        hour: 'numeric',
        minute: '2-digit',
        hour12: config.timeFormat === '12h'
    });
}
function formatTimeRange(start, end, config = defaultLocaleConfig) {
    return `${formatTime(start, config)} - ${formatTime(end, config)}`;
}
function getDurationMinutes(start, end) {
    return Math.round((end.getTime() - start.getTime()) / (1000 * 60));
}
function getSessionDate(session) {
    const date = parseDateTime(session.since);
    return date.toISOString().split('T')[0];
}
function getSessionsByDay(sessions, dateStr) {
    return sessions.filter((session)=>getSessionDate(session) === dateStr).sort((a, b)=>{
        const timeA = parseDateTime(a.since).getTime();
        const timeB = parseDateTime(b.since).getTime();
        if (timeA !== timeB) return timeA - timeB;
        return a.displayOrder - b.displayOrder;
    });
}
function groupSessionsByTime(sessions, config = defaultLocaleConfig) {
    const groups = new Map();
    for (const session of sessions){
        const startTime = formatTime(parseDateTime(session.since), config);
        const existing = groups.get(startTime) || [];
        existing.push(session);
        groups.set(startTime, existing);
    }
    return groups;
}
function getUniqueTracks(sessions) {
    const tracks = new Set();
    sessions.forEach((s)=>tracks.add(s.trackName));
    return Array.from(tracks).sort();
}
function getUniqueRooms(sessions) {
    const rooms = new Set();
    sessions.forEach((s)=>rooms.add(s.room));
    return Array.from(rooms).sort();
}
function isSessionNow(session, now = new Date()) {
    const start = parseDateTime(session.since);
    const end = parseDateTime(session.endsAt);
    return now >= start && now <= end;
}
function isSessionUpcoming(session, now = new Date(), withinMinutes = 30) {
    const start = parseDateTime(session.since);
    const msUntilStart = start.getTime() - now.getTime();
    return msUntilStart > 0 && msUntilStart <= withinMinutes * 60 * 1000;
}
function getTrackColor(trackName, tracks, fallback = 'var(--color-text-muted)') {
    if (!tracks) {
        // Fallback to CSS variables for backward compatibility
        return `var(--color-track-${trackName.toLowerCase().replace(/\s+/g, '-')}, ${fallback})`;
    }
    return tracks[trackName]?.color || fallback;
}
function getSessionTypeLabel(type, sessionTypes) {
    // Default labels for backward compatibility
    const defaultLabels = {
        SESSION: 'Talk',
        WORKSHOP: 'Workshop',
        SERVICE: 'Break',
        OTHER: 'Event'
    };
    if (!sessionTypes) {
        return defaultLabels[type];
    }
    return sessionTypes[type]?.label || defaultLabels[type];
}
function createLocaleConfig(config) {
    return {
        locale: config.locale,
        timeFormat: config.timeFormat
    };
}
function createTimeFormatter(config) {
    return (date)=>formatTime(date, config);
}
function createTimeRangeFormatter(config) {
    return (start, end)=>formatTimeRange(start, end, config);
}
function createTrackColorGetter(tracks) {
    return (trackName)=>getTrackColor(trackName, tracks);
}
function createSessionTypeLabelGetter(sessionTypes) {
    return (type)=>getSessionTypeLabel(type, sessionTypes);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionCard",
    ()=>SessionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$SpeakerAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/schedule/SpeakerAvatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/schedule-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function SessionCard({ session, isBookmarked, onToggleBookmark, variant = 'default', tracks, localeConfig }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(session.since);
    const endTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(session.endsAt);
    const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDurationMinutes"])(startTime, endTime);
    const trackColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrackColor"])(session.trackName, tracks);
    const isServiceSession = session.type === 'SERVICE';
    if (isServiceSession && variant === 'default') {
        // Simplified card for service sessions (breaks, lunch, etc.)
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: `session-${session.id}`,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 px-4 py-3 rounded-xl', 'bg-[var(--color-surface-elevated)]/50 border border-[var(--color-border-subtle)]', 'transition-all duration-200'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1 h-8 rounded-full bg-[var(--color-text-muted)]/30"
                }, void 0, false, {
                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-[var(--color-text-secondary)]",
                            children: session.title
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[var(--color-text-muted)]",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeRange"])(startTime, endTime, localeConfig),
                                " • ",
                                session.room
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        id: `session-${session.id}`,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group relative overflow-hidden', variant === 'compact' && 'p-3'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-0 bottom-0 w-1 rounded-l-xl",
                style: {
                    backgroundColor: trackColor
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                style: {
                    background: `linear-gradient(135deg, ${trackColor}08 0%, transparent 50%)`
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative pl-4', variant === 'default' ? 'p-4 md:p-5' : 'p-3'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "track",
                                        trackColor: trackColor,
                                        children: session.trackName
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    session.type === 'WORKSHOP' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        children: "Workshop"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    session.isPlenumSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        children: "Plenary"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onToggleBookmark(session.id);
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-2 rounded-xl transition-all duration-200', 'hover:bg-[var(--color-surface-elevated)]', 'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]', isBookmarked ? 'text-[var(--color-bookmark)] bg-[var(--color-bookmark)]/10' : 'text-[var(--color-text-muted)]'),
                                "aria-label": isBookmarked ? 'Remove bookmark' : 'Add bookmark',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-5 h-5 transition-transform', isBookmarked && 'fill-current scale-110')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-semibold text-[var(--color-text-primary)] mb-3 leading-snug', variant === 'default' ? 'text-base md:text-lg' : 'text-sm'),
                        children: session.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-[var(--color-text-secondary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-4 h-4 text-[var(--color-text-muted)]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeRange"])(startTime, endTime, localeConfig)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-text-muted)]",
                                        children: [
                                            "(",
                                            duration,
                                            "min)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-[var(--color-text-secondary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-4 h-4 text-[var(--color-text-muted)]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate max-w-[150px]",
                                        children: session.room
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    session.presenters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$SpeakerAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpeakerAvatarGroup"], {
                            presenters: session.presenters
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    session.about && variant === 'default' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-[var(--color-border-subtle)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-[var(--color-text-secondary)] leading-relaxed', !isExpanded && 'line-clamp-2'),
                                children: session.about
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            session.about.length > 150 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsExpanded(!isExpanded),
                                className: "mt-2 text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] flex items-center gap-1 transition-colors",
                                children: [
                                    isExpanded ? 'Show less' : 'Read more',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-3.5 h-3.5 transition-transform duration-200', isExpanded && 'rotate-90')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(SessionCard, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = SessionCard;
var _c;
__turbopack_context__.k.register(_c, "SessionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListView",
    ()=>ListView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$SessionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/schedule/SessionCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/schedule-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ListView({ sessions, isBookmarked, onToggleBookmark, tracks, localeConfig }) {
    _s();
    const groupedSessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListView.useMemo[groupedSessions]": ()=>{
            const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupSessionsByTime"])(sessions, localeConfig);
            return Array.from(groups.entries()).sort({
                "ListView.useMemo[groupedSessions]": (a, b)=>{
                    const timeA = sessions.find({
                        "ListView.useMemo[groupedSessions].timeA": (s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(s.since), localeConfig) === a[0]
                    }["ListView.useMemo[groupedSessions].timeA"]);
                    const timeB = sessions.find({
                        "ListView.useMemo[groupedSessions].timeB": (s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(s.since), localeConfig) === b[0]
                    }["ListView.useMemo[groupedSessions].timeB"]);
                    if (!timeA || !timeB) return 0;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(timeA.since).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(timeB.since).getTime();
                }
            }["ListView.useMemo[groupedSessions]"]);
        }
    }["ListView.useMemo[groupedSessions]"], [
        sessions,
        localeConfig
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-6 space-y-10 stagger-children",
        children: groupedSessions.map(([timeSlot, slotSessions])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-[200px] md:top-[195px] z-20 mb-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--color-surface)] rounded-full border border-[var(--color-border)] shadow-[var(--shadow-md)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary)]/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3.5 h-3.5 text-[var(--color-primary)]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-[var(--color-text-primary)]",
                                    children: timeSlot
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-surface-elevated)] px-2 py-0.5 rounded-full",
                                    children: [
                                        slotSessions.length,
                                        " session",
                                        slotSessions.length > 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",
                        children: slotSessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$SessionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionCard"], {
                                session: session,
                                isBookmarked: isBookmarked(session.id),
                                onToggleBookmark: onToggleBookmark,
                                tracks: tracks,
                                localeConfig: localeConfig
                            }, session.id, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, timeSlot, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(ListView, "/EU6GK702p8HbEJtMJNbh/UZLWc=");
_c = ListView;
var _c;
__turbopack_context__.k.register(_c, "ListView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/lib/use-current-time.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentTime",
    ()=>useCurrentTime,
    "useIsConferenceTime",
    ()=>useIsConferenceTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
function useCurrentTime(intervalMs = 60000) {
    _s();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentTime.useEffect": ()=>{
            // Update immediately
            setCurrentTime(new Date());
            // Then update on interval
            const interval = setInterval({
                "useCurrentTime.useEffect.interval": ()=>{
                    setCurrentTime(new Date());
                }
            }["useCurrentTime.useEffect.interval"], intervalMs);
            return ({
                "useCurrentTime.useEffect": ()=>clearInterval(interval)
            })["useCurrentTime.useEffect"];
        }
    }["useCurrentTime.useEffect"], [
        intervalMs
    ]);
    return currentTime;
}
_s(useCurrentTime, "f3elDUct5ap4W3FuLtGG73aMsLc=");
function useIsConferenceTime() {
    _s1();
    const currentTime = useCurrentTime();
    // Conference dates: Nov 19-22, 2025
    const conferenceStart = new Date('2025-11-19T00:00:00');
    const conferenceEnd = new Date('2025-11-22T23:59:59');
    const isConferenceTime = currentTime >= conferenceStart && currentTime <= conferenceEnd;
    return {
        currentTime,
        isConferenceTime,
        // For demo, you can use this to simulate conference time
        demoTime: new Date('2025-11-20T10:30:00')
    };
}
_s1(useIsConferenceTime, "tqliJstdx+orXNcFGNieIWg73Dg=", false, function() {
    return [
        useCurrentTime
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineView",
    ()=>TimelineView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/schedule-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$current$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/use-current-time.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Generate time slots from 5am to 11pm (to cover all sessions)
const TIME_SLOTS = Array.from({
    length: 19
}, (_, i)=>{
    const hour = i + 5; // Start from 5 AM
    return {
        hour,
        label: `${hour > 12 ? hour - 12 : hour}${hour >= 12 ? 'PM' : 'AM'}`,
        time: `${hour.toString().padStart(2, '0')}:00`
    };
});
const HOUR_HEIGHT = 120; // pixels per hour
const MIN_CARD_HEIGHT = 60;
function TimelineView({ sessions, isBookmarked, onToggleBookmark, tracks, localeConfig }) {
    _s();
    const currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$current$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentTime"])(60000); // Update every minute
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get unique rooms for columns
    const rooms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TimelineView.useMemo[rooms]": ()=>{
            const roomSet = new Set();
            sessions.forEach({
                "TimelineView.useMemo[rooms]": (s)=>roomSet.add(s.room)
            }["TimelineView.useMemo[rooms]"]);
            return Array.from(roomSet).sort();
        }
    }["TimelineView.useMemo[rooms]"], [
        sessions
    ]);
    // Group sessions by room
    const sessionsByRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TimelineView.useMemo[sessionsByRoom]": ()=>{
            const map = new Map();
            rooms.forEach({
                "TimelineView.useMemo[sessionsByRoom]": (room)=>{
                    map.set(room, sessions.filter({
                        "TimelineView.useMemo[sessionsByRoom]": (s)=>s.room === room
                    }["TimelineView.useMemo[sessionsByRoom]"]));
                }
            }["TimelineView.useMemo[sessionsByRoom]"]);
            return map;
        }
    }["TimelineView.useMemo[sessionsByRoom]"], [
        sessions,
        rooms
    ]);
    // Calculate earliest and latest times for the day
    const { earliestHour, latestHour } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TimelineView.useMemo": ()=>{
            if (sessions.length === 0) return {
                earliestHour: 9,
                latestHour: 18
            };
            let earliest = 24;
            let latest = 0;
            sessions.forEach({
                "TimelineView.useMemo": (s)=>{
                    const startHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(s.since).getHours();
                    const endHour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(s.endsAt).getHours();
                    earliest = Math.min(earliest, startHour);
                    latest = Math.max(latest, endHour + 1);
                }
            }["TimelineView.useMemo"]);
            return {
                earliestHour: Math.max(5, earliest),
                latestHour: Math.min(23, latest)
            };
        }
    }["TimelineView.useMemo"], [
        sessions
    ]);
    const visibleTimeSlots = TIME_SLOTS.filter((slot)=>slot.hour >= earliestHour && slot.hour <= latestHour);
    // Calculate position for a session
    const getSessionPosition = (session)=>{
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(session.since);
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(session.endsAt);
        const startHour = start.getHours() + start.getMinutes() / 60;
        const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDurationMinutes"])(start, end) / 60;
        const top = (startHour - earliestHour) * HOUR_HEIGHT;
        const height = Math.max(duration * HOUR_HEIGHT, MIN_CARD_HEIGHT);
        return {
            top,
            height
        };
    };
    // Current time indicator position
    const getCurrentTimePosition = ()=>{
        const hour = currentTime.getHours() + currentTime.getMinutes() / 60;
        if (hour < earliestHour || hour > latestHour) return null;
        return (hour - earliestHour) * HOUR_HEIGHT;
    };
    const currentTimePos = getCurrentTimePosition();
    // Auto-scroll to current time on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineView.useEffect": ()=>{
            if (currentTimePos !== null && timelineRef.current) {
                const scrollPos = Math.max(0, currentTimePos - 100);
                timelineRef.current.scrollTop = scrollPos;
            }
        }
    }["TimelineView.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--color-text-muted)] text-center mb-4",
                        children: "Timeline view works best on larger screens. Showing list view on mobile."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: sessions.map((session)=>{
                            const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(session.since);
                            const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(session.endsAt);
                            const trackColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrackColor"])(session.trackName, tracks);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: `session-${session.id}`,
                                className: "relative bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-3 pl-4 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 top-0 bottom-0 w-1",
                                        style: {
                                            backgroundColor: trackColor
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--color-text-muted)] mb-1",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(start, localeConfig),
                                                            " - ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(end, localeConfig),
                                                            " • ",
                                                            session.room
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-[var(--color-text-primary)] line-clamp-2",
                                                        children: session.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    session.presenters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--color-text-muted)] mt-1 truncate",
                                                        children: session.presenters.map((p)=>p.attributes.name).join(', ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onToggleBookmark(session.id),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-1 rounded transition-colors', isBookmarked(session.id) && 'text-[var(--color-bookmark)]'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-4 h-4', isBookmarked(session.id) && 'fill-current')
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, session.id, true, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: timelineRef,
                    className: "relative overflow-auto max-h-[calc(100vh-300px)] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-20 flex bg-[var(--color-surface-elevated)] border-b border-[var(--color-border)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 flex-shrink-0 p-2 text-xs font-medium text-[var(--color-text-muted)] border-r border-[var(--color-border)]",
                                    children: "Time"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                rooms.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-[200px] p-2 text-xs font-medium text-[var(--color-text-primary)] text-center border-r border-[var(--color-border)] last:border-r-0 truncate",
                                        title: room,
                                        children: room
                                    }, room, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 flex-shrink-0 border-r border-[var(--color-border)]",
                                    children: visibleTimeSlots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[120px] px-2 py-1 text-xs text-[var(--color-text-muted)] border-b border-[var(--color-border-subtle)]",
                                            children: slot.label
                                        }, slot.hour, false, {
                                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                rooms.map((room, roomIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 min-w-[200px] relative border-r border-[var(--color-border)] last:border-r-0'),
                                        style: {
                                            height: visibleTimeSlots.length * HOUR_HEIGHT
                                        },
                                        children: [
                                            visibleTimeSlots.map((slot, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-0 right-0 border-b border-[var(--color-border-subtle)]",
                                                    style: {
                                                        top: idx * HOUR_HEIGHT,
                                                        height: HOUR_HEIGHT
                                                    }
                                                }, slot.hour, false, {
                                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this)),
                                            sessionsByRoom.get(room)?.map((session)=>{
                                                const { top, height } = getSessionPosition(session);
                                                const trackColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrackColor"])(session.trackName, tracks);
                                                const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(session.since);
                                                const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(session.endsAt);
                                                const isCompact = height < 80;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: `session-${session.id}`,
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute left-1 right-1 rounded-lg overflow-hidden transition-all duration-200', 'bg-[var(--color-surface-elevated)] border border-[var(--color-border)]', 'hover:shadow-lg hover:shadow-black/20 hover:z-10', 'group cursor-pointer'),
                                                    style: {
                                                        top: top + 2,
                                                        height: height - 4,
                                                        borderLeftWidth: 3,
                                                        borderLeftColor: trackColor
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-2 h-full flex flex-col', isCompact && 'p-1.5'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-medium text-[var(--color-text-primary)] leading-tight', isCompact ? 'text-xs line-clamp-1' : 'text-sm line-clamp-2'),
                                                                        children: session.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            onToggleBookmark(session.id);
                                                                        },
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity', isBookmarked(session.id) && 'opacity-100 text-[var(--color-bookmark)]'),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-3.5 h-3.5', isBookmarked(session.id) && 'fill-current')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                                            lineNumber: 269,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 25
                                                            }, this),
                                                            !isCompact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-[var(--color-text-muted)] mt-1",
                                                                        children: [
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(start, localeConfig),
                                                                            " - ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(end, localeConfig)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                                        lineNumber: 275,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    session.presenters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-[var(--color-text-secondary)] mt-auto truncate",
                                                                        children: session.presenters.map((p)=>p.attributes.name).join(', ')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 23
                                                    }, this)
                                                }, session.id, false, {
                                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        ]
                                    }, room, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)),
                                currentTimePos !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-0 right-0 z-30 pointer-events-none",
                                    style: {
                                        top: currentTimePos
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 w-16 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold text-[var(--color-now)] bg-[var(--color-surface)] px-1 rounded",
                                                    children: "NOW"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-16 h-0.5 bg-[var(--color-now)]"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                        lineNumber: 295,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(TimelineView, "0zBdzKBx88yVle8ebyyvoMXS4XY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$current$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentTime"]
    ];
});
_c = TimelineView;
var _c;
__turbopack_context__.k.register(_c, "TimelineView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NowNextBanner",
    ()=>NowNextBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/schedule-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$current$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/use-current-time.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fast$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FastForward$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/fast-forward.js [app-client] (ecmascript) <export default as FastForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function NowNextBanner({ sessions, onSessionClick, localeConfig }) {
    _s();
    const currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$current$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentTime"])(30000); // Update every 30 seconds
    const { currentSession, upcomingSessions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NowNextBanner.useMemo": ()=>{
            // For demo purposes, use a simulated conference time
            // In production, use currentTime directly
            const demoTime = new Date('2025-11-20T10:30:00');
            const timeToUse = ("TURBOPACK compile-time truthy", 1) ? demoTime : "TURBOPACK unreachable";
            const current = sessions.find({
                "NowNextBanner.useMemo.current": (s)=>s.type !== 'SERVICE' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSessionNow"])(s, timeToUse)
            }["NowNextBanner.useMemo.current"]);
            const upcoming = sessions.filter({
                "NowNextBanner.useMemo.upcoming": (s)=>s.type !== 'SERVICE' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSessionUpcoming"])(s, timeToUse, 60)
            }["NowNextBanner.useMemo.upcoming"]).sort({
                "NowNextBanner.useMemo.upcoming": (a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(a.since).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(b.since).getTime()
            }["NowNextBanner.useMemo.upcoming"]).slice(0, 2);
            return {
                currentSession: current,
                upcomingSessions: upcoming
            };
        }
    }["NowNextBanner.useMemo"], [
        sessions,
        currentTime
    ]);
    // Don't show if nothing is happening
    if (!currentSession && upcomingSessions.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-r from-[var(--color-surface)] to-[var(--color-surface-elevated)] border-b border-[var(--color-border)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4",
                children: [
                    currentSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSessionClick?.(currentSession.id, 'now'),
                        className: "flex-1 flex items-start gap-3 p-3 rounded-lg bg-[var(--color-now)]/10 border border-[var(--color-now)]/30 hover:bg-[var(--color-now)]/15 transition-colors text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-now)] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-4 h-4 text-white fill-white"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-[var(--color-now)] uppercase tracking-wide",
                                                children: "Happening Now"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1.5 h-1.5 rounded-full bg-[var(--color-now)] animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-[var(--color-text-primary)] line-clamp-1",
                                        children: currentSession.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--color-text-muted)] mt-0.5",
                                        children: [
                                            currentSession.room,
                                            " • Ends at ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(currentSession.endsAt), localeConfig)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this),
                    upcomingSessions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 flex flex-col gap-2', currentSession ? 'sm:max-w-[40%]' : ''),
                        children: upcomingSessions.map((session, idx)=>{
                            const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDateTime"])(session.since);
                            const minutesUntil = Math.round((startTime.getTime() - currentTime.getTime()) / (1000 * 60));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSessionClick?.(session.id, 'next'),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 p-2 rounded-lg transition-colors text-left', 'hover:bg-[var(--color-surface-elevated)]', idx === 0 ? 'bg-[var(--color-next)]/10 border border-[var(--color-next)]/20' : 'bg-[var(--color-surface)]'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center', idx === 0 ? 'bg-[var(--color-next)]' : 'bg-[var(--color-surface-elevated)]'),
                                        children: idx === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fast$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FastForward$3e$__["FastForward"], {
                                            className: "w-3 h-3 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                            lineNumber: 103,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-3 h-3 text-[var(--color-text-muted)]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                            lineNumber: 105,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                        lineNumber: 96,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-[10px] font-bold uppercase tracking-wide', idx === 0 ? 'text-[var(--color-next)]' : 'text-[var(--color-text-muted)]'),
                                                    children: minutesUntil <= 0 ? 'Starting' : `In ${minutesUntil}min`
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                                lineNumber: 109,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-[var(--color-text-primary)] line-clamp-1",
                                                children: session.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                                lineNumber: 119,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                        lineNumber: 108,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, session.id, true, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                                lineNumber: 85,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(NowNextBanner, "tw7TKmwoBCNcnZR62LRZZjweWnU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$current$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentTime"]
    ];
});
_c = NowNextBanner;
var _c;
__turbopack_context__.k.register(_c, "NowNextBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/lib/use-bookmarks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBookmarks",
    ()=>useBookmarks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const STORAGE_KEY = 'conference-schedule-bookmarks';
function useBookmarks() {
    _s();
    const [bookmarks, setBookmarks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load bookmarks from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBookmarks.useEffect": ()=>{
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) {
                        setBookmarks(parsed);
                    }
                }
            } catch (error) {
                console.error('Failed to load bookmarks:', error);
            }
            setIsLoaded(true);
        }
    }["useBookmarks.useEffect"], []);
    // Save bookmarks to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBookmarks.useEffect": ()=>{
            if (isLoaded) {
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
                } catch (error) {
                    console.error('Failed to save bookmarks:', error);
                }
            }
        }
    }["useBookmarks.useEffect"], [
        bookmarks,
        isLoaded
    ]);
    const toggleBookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBookmarks.useCallback[toggleBookmark]": (sessionId)=>{
            setBookmarks({
                "useBookmarks.useCallback[toggleBookmark]": (prev)=>{
                    if (prev.includes(sessionId)) {
                        return prev.filter({
                            "useBookmarks.useCallback[toggleBookmark]": (id)=>id !== sessionId
                        }["useBookmarks.useCallback[toggleBookmark]"]);
                    }
                    return [
                        ...prev,
                        sessionId
                    ];
                }
            }["useBookmarks.useCallback[toggleBookmark]"]);
        }
    }["useBookmarks.useCallback[toggleBookmark]"], []);
    const isBookmarked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBookmarks.useCallback[isBookmarked]": (sessionId)=>{
            return bookmarks.includes(sessionId);
        }
    }["useBookmarks.useCallback[isBookmarked]"], [
        bookmarks
    ]);
    const clearBookmarks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBookmarks.useCallback[clearBookmarks]": ()=>{
            setBookmarks([]);
        }
    }["useBookmarks.useCallback[clearBookmarks]"], []);
    return {
        bookmarks,
        toggleBookmark,
        isBookmarked,
        clearBookmarks,
        isLoaded
    };
}
_s(useBookmarks, "Dpy1OGudV3UdtF2JZYR+XZTn0yg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/config/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/config/conferences/ai-engineer-2025.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiEngineer2025",
    ()=>aiEngineer2025
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/types.ts [app-client] (ecmascript)");
;
const aiEngineer2025 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConferenceConfig"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/config/conferences/react-conf-2025.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reactConf2025",
    ()=>reactConf2025
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/types.ts [app-client] (ecmascript)");
;
const reactConf2025 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConferenceConfig"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/config/conferences/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$ai$2d$engineer$2d$2025$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/conferences/ai-engineer-2025.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$react$2d$conf$2d$2025$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/conferences/react-conf-2025.ts [app-client] (ecmascript)");
;
;
const conferenceRegistry = {
    'ai-engineer-2025': __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$ai$2d$engineer$2d$2025$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiEngineer2025"],
    'react-conf-2025': __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$react$2d$conf$2d$2025$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactConf2025"]
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/data/schedules/ai-engineer-2025.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"session-1\",\"title\":\"Opening & Welcome\",\"about\":\"Welcome remarks and conference opening by our emcees.\",\"since\":\"2025-11-20T09:00:00\",\"endsAt\":\"2025-11-20T09:04:00\",\"trackName\":\"Keynote\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Alex Lieberman\",\"tagline\":\"Emcee\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Tenex\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/alex-lieberman.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/businessbarista\",\"linkedin\":\"https://www.linkedin.com/in/alex-lieberman\"}}}],\"slug\":\"opening-welcome\",\"displayOrder\":1,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":true},{\"id\":\"session-2\",\"title\":\"Evolving Claude APIs for Agents\",\"about\":\"Developers are building more and more complex, long-running, agentic systems. Learn how the Anthropic team is evolving the Claude Developer Platform to enable developers to get the best outcomes from Claude.\",\"since\":\"2025-11-20T09:05:00\",\"endsAt\":\"2025-11-20T09:24:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Katelyn Lesse\",\"tagline\":\"Head of Engineering, Claude Developer Platform\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Anthropic\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/katelyn-lesse.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/katelyn_lesse\",\"linkedin\":\"https://www.linkedin.com/in/katelynlesse\"}}}],\"slug\":\"evolving-claude-apis-for-agents\",\"displayOrder\":2,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-3\",\"title\":\"Autonomy Is All You Need\",\"about\":\"AI agents exhibit vastly different degrees of autonomy. Yet, the ability to accomplish objectives without supervision is the critical north star for agent progress, especially in software creation. For non-technical users who cannot supervise software creation, full autonomy is essential, not optional.\\n\\nFirst of all, I will discuss two foundational capabilities to achieve true autonomy: automatic testing to verify correctness without human validation, and advanced context management to maintain coherence across complex, long-horizon tasks.\\n\\nWith autonomy established, parallelization becomes the key to delivering a compelling user experience. Sequential execution forces users to wait extensively before seeing progress, breaking the development flow. This talk explores parallelization models (task-level parallelism, out-of-order execution, plan decomposition, etc.) and their tradeoffs in latency, resource consumption, and correctness guarantees.\",\"since\":\"2025-11-20T09:25:00\",\"endsAt\":\"2025-11-20T09:44:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Michele Catasta\",\"tagline\":\"VP of AI\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Replit\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/michele-catasta.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/pirroh\",\"linkedin\":\"https://www.linkedin.com/in/pirroh\",\"github\":\"https://github.com/pirroh\"}}}],\"slug\":\"building-the-future-of-coding-replit\",\"displayOrder\":3,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-4\",\"title\":\"Your Support Team Should Ship Code\",\"about\":\"Zapier maintains 8000+ integrations that break as APIs change. We had thousands of backlog support tickets with dozens more arriving weekly. To keep up with the traffic, we started building AI tools to help ship integration fixes faster.\\nWe began by shadowing engineers fixing tickets and building tools we believed would expedite the fix process. Our first effort, an API playground hosting AI tools like diagnosis and test generation, failed to get engineering traffic because it pulled builders out of their workflows. We pivoted to MCP tools that engineers could use directly in their IDEs. MCP tools gained traction, but our most valuable tool, Diagnosis, took too long to run. Engineers wouldn't wait for it, revealing we needed an asynchronous approach. We built Scout Agent to string our tools together, autonomously reading support tickets, gathering context, generating fixes with tests, and submitting merge requests ready for review. This agent approach has gained traction with our support team handling high ticket volumes. An MR ready for review means they can validate and ship a fix quickly before needing to jump on the next incoming ticket.\\nThroughout this process we've learned that the real challenge is everything surrounding code generation. Before writing code, Scout Agent needs both the right context and to show its work so engineers trust its recommendations. After generation, engineers need to quickly validate and correct the proposed fix, otherwise MRs sit unreviewed and abandoned. Embedding Scout Agent directly in GitLab solved this. Teams can iterate on proposed solutions without context switching.\\nTo track improvement, we measure three distinct failure modes: categorization accuracy (should Scout attempt this ticket?), fixability assessment (does this need a code fix?), and solution quality (does the generated code actually work?). Each reveals different improvement opportunities. Today, Scout drives 40% of support's integration fixes, with expansion to engineering teams and downstream automation (testing, shipping, migration) as our next frontiers.\",\"since\":\"2025-11-20T09:45:00\",\"endsAt\":\"2025-11-20T10:04:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Lisa Orr\",\"tagline\":\"Product Leader\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Zapier\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/lisa-orr.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/orreither\",\"linkedin\":\"https://www.linkedin.com/in/lisaorr\"}}}],\"slug\":\"your-support-team-should-ship-code\",\"displayOrder\":4,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-5\",\"title\":\"2026: The Year the IDE Died\",\"about\":\"As AI has grown more capable, software developers around the world have lagged behind the technology advances, and have consistently eschewed the most powerful tools. In this talk I explore why devs are staying 9-12 months behind the AI curve. I'll share a preview of what 2026's AI coding tools will be like, and paint a vision of where we go from here.\",\"since\":\"2025-11-20T10:05:00\",\"endsAt\":\"2025-11-20T10:24:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Steve Yegge\",\"tagline\":\"Engineering Leader\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Sourcegraph/Amp\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/steve-yegge.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/Steve_Yegge\",\"linkedin\":\"https://www.linkedin.com/in/steveyegge\"}}},{\"attributes\":{\"name\":\"Gene Kim\",\"tagline\":\"Author & Researcher\",\"company\":{\"data\":{\"attributes\":{\"name\":\"IT Revolution\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/gene-kim.png\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/RealGeneKim\",\"linkedin\":\"https://www.linkedin.com/in/realgenekim\",\"website\":\"https://www.realgenekim.me\"}}}],\"slug\":\"vibe-coding-in-enterprise\",\"displayOrder\":5,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-stigg-booth\",\"title\":\"[Stigg] Building Credit Systems for AI Products: Lessons from the Field\",\"about\":\"Credits seem simple: a clean way to hide the complexity of tokens, model costs, and inference workloads behind a user-friendly unit. But the moment you introduce credits into an AI product, you are no longer building a feature; you are building a miniature economy, with the accounting, consistency guarantees, and fairness rules that come with it. This raises a core question: how do you design a credit system that is accurate under concurrency, predictable for users, auditable for finance, and flexible enough to survive shifting AI model costs?\\n\\nIn this talk, we will break down the real engineering challenges behind credit systems: designing wallets, ledgers, and rate cards; ensuring atomic consumption flows; building fairness and guardrails into the runtime path; and reconciling usage with enterprise revenue systems. You will learn the architectural patterns that work, the traps most teams fall into, and how to build a credit foundation that can evolve as fast as the AI market does.\",\"since\":\"2025-11-20T10:40:00\",\"endsAt\":\"2025-11-20T11:00:00\",\"trackName\":\"Expo\",\"room\":\"AIE Expo\",\"roomOther\":\"Booth G11\",\"presenters\":[{\"attributes\":{\"name\":\"Mike Lacsamana\",\"tagline\":\"Head of Solutions Engineering\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Stigg\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/mike-lacsamana.jpg\"}}},\"socialLinks\":{\"linkedin\":\"https://www.linkedin.com/in/mikelacsy/\"}}}],\"slug\":\"stigg-booth-talk-building-credit-systems\",\"displayOrder\":5.5,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-workos-booth\",\"title\":\"[WorkOS] Enterprise-grade MCP\",\"about\":\"MCP is cool, but a massive security risk. Learn how to build effective MCP servers that have enterprise-grade security built in. This isn't a sales pitch, it's a lesson in unblocking MCP deployments and ensuring that AI agents behave themselves.\",\"since\":\"2025-11-21T10:40:00\",\"endsAt\":\"2025-11-21T11:00:00\",\"trackName\":\"Expo\",\"room\":\"AIE Expo\",\"roomOther\":\"Booth\",\"presenters\":[{\"attributes\":{\"name\":\"Tobin South\",\"tagline\":\"Head of AI Agents & MCP\",\"company\":{\"data\":{\"attributes\":{\"name\":\"WorkOS\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/tobin-south.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://x.com/TobinSouth\",\"linkedin\":\"https://www.linkedin.com/in/tobinsouth/\"}}}],\"slug\":\"workos-booth-talk-enterprise-mcp\",\"displayOrder\":5.6,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-amp-booth\",\"title\":\"[Amp] From Chaos to Code — A 3-Step AI Developer Workflow with the AI-Dev-Tasks Repo\",\"about\":\"In today’s world of rapidly evolving AI tools, writing a single “big prompt” rarely leads to a reliable, maintainable feature. In this talk, you’ll discover a proven three-step workflow that brings structure and predictability to AI-driven development. We’ll explore the open-source repository AI‑Dev‑Tasks (GitHub: snarktank/ai-dev-tasks) - a minimal system of markdown files that bridges ideation, planning, and execution so that AI becomes a consistent teammate rather than a chaotic wildcard. \\n\\n    You’ll learn:\\n- How to author a lightweight Product Requirement Document (PRD) that aligns human and AI expectations.\\n- How to break that PRD into an actionable task list that the AI can reliably execute - one task at a time – while you maintain visibility and control.\\n- How to review, approve and iterate on tasks - so that the AI’s output becomes trustworthy code, not surprise output.\\n\\nBy the end of the session, you’ll walk away with a reproducible workflow you can adopt right away, enabling you to go from idea to working feature with fewer surprises, less manual rework, and more confidence in AI-assisted development. This talk is ideal for engineers, product folks and AI-tool adopters who want to move beyond “throwing prompts at the models” and build something dependable.\\n\",\"since\":\"2025-11-21T15:40:00\",\"endsAt\":\"2025-11-21T16:00:00\",\"trackName\":\"Expo\",\"room\":\"AIE Expo\",\"roomOther\":\"Booth\",\"presenters\":[{\"attributes\":{\"name\":\"Ryan Carson\",\"tagline\":\"Builder in Residence\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Amp\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/ryan-carson.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://x.com/ryancarson\",\"linkedin\":\"https://linkedin.com/in/ryancarson\"}}}],\"slug\":\"amp-booth-talk-ai-dev-workflow\",\"displayOrder\":5.7,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-6\",\"title\":\"Future-Proof Coding Agents: Building Reliable Systems That Outlast Model Cycles\",\"about\":\"Coding agents are becoming one of the most active areas in applied AI, yet many teams keep rebuilding fragile infrastructure every time models or providers change. We believe there is a better way. By anchoring on a stable abstraction layer like Codex, we can stop worrying about harness rewrites and focus on the parts of the stack that create lasting value. We treat models as interchangeable sub-agents, plug into shared primitives, and let upstream improvements flow through without breaking products. This lets teams move faster, stay resilient as the ecosystem evolves, and focus their energy on domain-specific workflows and user experience.\",\"since\":\"2025-11-20T11:00:00\",\"endsAt\":\"2025-11-20T11:19:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Bill Chen\",\"tagline\":\"Applied AI\",\"company\":{\"data\":{\"attributes\":{\"name\":\"OpenAI\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/bill-chen.jpg\"}}},\"socialLinks\":{\"linkedin\":\"https://www.linkedin.com/in/billchen99/\"}}},{\"attributes\":{\"name\":\"Brian Fioca\",\"tagline\":\"Applied AI\",\"company\":{\"data\":{\"attributes\":{\"name\":\"OpenAI\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/brian-fioca.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/bfioca\",\"linkedin\":\"https://www.linkedin.com/in/brianfioca\",\"github\":\"https://github.com/bfioca\",\"website\":\"https://fioca.com\"}}}],\"slug\":\"openai-codex\",\"displayOrder\":6,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-7\",\"title\":\"Moving away from Agile: What's Next?\",\"about\":\"Most enterprises are not capturing much value from AI in software dev to date (at least relative to the potential). The reason is that most are adding AI tools to their dev teams without changing the people and operating model aspects (i.e., limited changes to ways of working, team configurations, role definitions, stage gates, etc.). Many core aspects of software development haven’t changed in the past 10+ years, and that’s holding us back from moving to the new paradigm of software development! We will share examples of what makes the difference. \",\"since\":\"2025-11-20T11:20:00\",\"endsAt\":\"2025-11-20T11:39:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Martin Harrysson\",\"tagline\":\"Partner\",\"company\":{\"data\":{\"attributes\":{\"name\":\"McKinsey\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/martin-harrysson.png\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/martinharrysson\",\"linkedin\":\"https://www.linkedin.com/in/martinharrysson\"}}},{\"attributes\":{\"name\":\"Natasha Maniar\",\"tagline\":\"Partner\",\"company\":{\"data\":{\"attributes\":{\"name\":\"McKinsey\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/natasha-maniar.jpg\"}}}}}],\"slug\":\"how-agents-killed-agile\",\"displayOrder\":7,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-8\",\"title\":\"How to Quantify AI ROI in Software Engineering (Stanford Study / 120k Devs)\",\"about\":\"You’re investing millions in AI for software engineering. Can you prove it’s paying off?\\n\\nBenchmarks show models can write code, but in enterprise deployments ROI is hard to measure, easy to bias, and often distorted by activity metrics (PR counts, DORA) that say “more” without proving “better.” \\n\\nDrawing on field data from 120k+ developers across 600+ companies, I’ll show exactly where AI helps the most and how to measure the ROI of your software engineering AI deployment.\\n\\nWe’ll unpack why identical tools deliver ~0% lift in some orgs and 25%+ in others.\\n\\nYou’ll leave with a step-by-step ROI playbook: what to track, the traps to avoid, and the habits top-quartile teams use to make the most from AI.\",\"since\":\"2025-11-20T11:40:00\",\"endsAt\":\"2025-11-20T11:59:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Yegor Denisov-Blanch\",\"tagline\":\"Researcher\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Stanford\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/yegor-denisov-blanch.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/yegordb\",\"linkedin\":\"https://www.linkedin.com/in/ydenisov\"}}}],\"slug\":\"ai-coding-research-stanford\",\"displayOrder\":8,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-9\",\"title\":\"The State of AI Code Quality: Hype vs. Reality\",\"about\":\"AI is making code generation nearly effortless, but the critical question remains: can we trust AI-generated code for software that truly matters? Has it really become easier to build robust, high-quality systems?\\n\\nIn this talk, we’ll separate hype from reality. Drawing on the State of AI Code Quality report, we’ll explore where AI tools excel, where they fall short, and which evaluation frameworks actually matter. We’ll unpack benchmarks, pitfalls, and lessons learned from deploying AI in real-world engineering workflows. Attendees will leave with a clearer understanding of how to measure, trust, and improve both AI-generated code and AI-driven code review—and what’s next for software quality in the age of AI.\",\"since\":\"2025-11-20T12:00:00\",\"endsAt\":\"2025-11-20T12:19:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Itamar Friedman\",\"tagline\":\"CEO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Qodo\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/itamar-friedman.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/itamar_mar\",\"linkedin\":\"https://www.linkedin.com/in/itamarf\"}}}],\"slug\":\"state-of-ai-code-quality-hype-vs-reality\",\"displayOrder\":9,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-10\",\"title\":\"Minimax M2\",\"about\":\"Introducing Minimax's latest AI model and its applications in code generation.\",\"since\":\"2025-11-20T12:20:00\",\"endsAt\":\"2025-11-20T12:39:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Olive Song\",\"tagline\":\"Senior Researcher\",\"company\":{\"data\":{\"attributes\":{\"name\":\"MiniMax\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/olive-song.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://x.com/olive_jy_song\"}}}],\"slug\":\"minimax-m2\",\"displayOrder\":10,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-11\",\"title\":\"Proactive Agents\",\"about\":\"tba\",\"since\":\"2025-11-20T13:45:00\",\"endsAt\":\"2025-11-20T14:04:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Kath Korevec\",\"tagline\":\"Director of Product\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Google Labs\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/kath-korevec.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/simpsoka\",\"linkedin\":\"https://www.linkedin.com/in/kathleensimpson\"}}}],\"slug\":\"ai-powered-development-at-google\",\"displayOrder\":11,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-12\",\"title\":\"Small Bets, Big Impact: Building GenBI at a Fortune 100\",\"about\":\"Enterprises don’t usually make moonshots, especially in GenAI. Governance, budgets, and risk aversion make it almost impossible to justify a huge, uncertain investment.\\n\\nAt Northwestern Mutual, we’re building GenBI, an LLM-powered analytics copilot, by flipping that logic. Instead of one big bet, we created an incremental roadmap of small, fundable projects. Each is tied to real business outcomes, delivers measurable ROI, and builds the trust needed to move forward.\\n\\nThis talk shares how we framed the problem, earned leadership support, and designed a modular architecture grounded in real data. We’ll show how each research step can stand on its own - productized, measurable, and deployable. Attendees will leave with a clear blueprint for making AI transformation fundable, governable, and real inside large, risk-averse organizations.\",\"since\":\"2025-11-20T14:05:00\",\"endsAt\":\"2025-11-20T14:24:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Asaf Bord\",\"tagline\":\"AI Product Lead\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Northwestern Mutual\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/asaf-bord.jpg\"}}},\"socialLinks\":{\"linkedin\":\"https://www.linkedin.com/today/author/asafbord\",\"website\":\"https://asafbord.wixsite.com/home\"}}}],\"slug\":\"small-bets-big-impact-genbi-fortune-100\",\"displayOrder\":12,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-13\",\"title\":\"What We Learned Deploying AI within Bloomberg’s Engineering Organization\",\"about\":\"When it comes to using AI for software engineering, much of the spotlight falls on how large language models (LLMs) can write code—sometimes entirely from scratch. Countless studies highlight productivity gains from turning requirements directly into runnable code. But the reality of applying AI at scale inside a mature engineering organization is far more complex and nuanced. \\nOver the past year, we’ve been on that journey at Bloomberg—integrating AI into the workflows of 9,000+ software engineers—and we’ve learned a few important lessons worth sharing:\\n\\n- Where the real ROI lies once you move beyond toy examples\\n- What it takes to actually enable AI across a large, established engineering org\\n- The best practices, cultural shifts, and guardrails that are required to make it work in practice\\n\\nIf you’re wondering what happens after the first demo magic fades and the real work begins, this talk is for you.\",\"since\":\"2025-11-20T14:25:00\",\"endsAt\":\"2025-11-20T14:44:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Lei Zhang\",\"tagline\":\"Head of Technology Infrastructure Engineering\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Bloomberg\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/lei-zhang.jpg\"}}}}}],\"slug\":\"technology-infrastructure-engineering-bloomberg\",\"displayOrder\":13,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-14\",\"title\":\"From Arc to Dia: Lessons learned in building AI Browser\",\"about\":\"What happens when you take a polished, beloved browser and rebuild it from the ground up around AI?\\nIn 2024, The Browser Company did exactly that: transforming Arc, a human-designed browser, into Dia, a browser with an AI-native browser experience. The journey forced us to unlearn what we knew about product design, system architecture, and even what \\\"good UX\\\" means when the interface itself can reason, plan, and act.\\n\\nIn this talk, I'll share the lessons we learned along the way: how we redesigned for emergent behavior instead of deterministic control, how our engineering and design teams learned to prototype with language models, and how our culture evolved to ship fast in a world where we're still learning what a good system looks like. You'll leave with practical insights for building AI-native products, from technical architecture to team mindset, and a glimpse into how we're thinking about the future of AI browsing.\",\"since\":\"2025-11-20T14:45:00\",\"endsAt\":\"2025-11-20T15:04:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Samir Mody\",\"tagline\":\"Head of AI Engineering\",\"company\":{\"data\":{\"attributes\":{\"name\":\"The Browser Company\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/samir-mody.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/jedimody\",\"linkedin\":\"https://www.linkedin.com/in/samir-mody\"}}}],\"slug\":\"browser-company-from-arc-to-dia\",\"displayOrder\":14,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-15\",\"title\":\"Developer Experience in the Age of AI Coding Agents\",\"about\":\"It feels like every two weeks, the world of software engineering is being turned on its head. Are there any principles we can rely on that will continue to hold true, and that can help us prepare for the future, no matter what happens? Max uses research, data, and his 20+ years working in enterprise Developer Experience teams to talk through what we can do now that will prepare us for an agentic future, no matter what that future holds.\",\"since\":\"2025-11-20T15:05:00\",\"endsAt\":\"2025-11-20T15:24:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Max Kanat-Alexander\",\"tagline\":\"Executive Distinguished Engineer\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Capital One\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/max-kanat-alexander.png\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/mkanat\",\"linkedin\":\"https://www.linkedin.com/in/mkanat\",\"website\":\"https://max.kanat.us\"}}}],\"slug\":\"developer-experience-age-of-ai-coding-agents\",\"displayOrder\":15,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-16\",\"title\":\"AI Consulting in Practice\",\"about\":\"Insights from consulting on AI implementation across various organizations.\",\"since\":\"2025-11-20T16:00:00\",\"endsAt\":\"2025-11-20T16:19:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"NLW\",\"tagline\":\"Host, AI Daily Brief & CEO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Super.ai\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/nlw.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/nlw\",\"website\":\"https://nlw.substack.com\"}}}],\"slug\":\"ai-consulting-in-practice\",\"displayOrder\":16,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-17\",\"title\":\"Paying Engineers like Salespeople: How Tenex Rebuilt the Incentive Stack for Modern Engineering\",\"about\":\"Most software teams still run on an outdated unit of measure: hours, days, years.\\n\\nThat single choice misaligns every incentive—clients want fewer, engineers want more, and everyone loses speed.\\n\\nAt Tenex, we threw the hourly model out and built an outcome-based system where we pay and charge per story point, tying incentives directly to shipped value.\\n\\nIn this talk, I’ll break down exactly how it works—the math, the cultural shifts, the AI tooling that makes it possible, and the results we’ve seen across real client projects. You’ll leave with a blueprint for running a high-trust, high-velocity engineering team that scales output, not overhead.\",\"since\":\"2025-11-20T16:20:00\",\"endsAt\":\"2025-11-20T16:39:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Arman Hezarkhani\",\"tagline\":\"CTO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Tenex\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/arman-hezarkhani.png\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/ArmanHezarkhani\",\"linkedin\":\"https://www.linkedin.com/in/ahez\",\"website\":\"https://armanh.com\"}}}],\"slug\":\"building-ai-products-tenex\",\"displayOrder\":17,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-18\",\"title\":\"Leadership in AI-Assisted Engineering\",\"about\":\"To realize meaningful returns on AI investments, leadership must take accountability and ownership of establishing best practices, enabling engineers, measuring impact, and ensuring proper guardrails are in place. When prompting practice and reflexive AI use is driven from the top down, engineers can align on the highest value use cases and experience peak productivity gains. When coupled with DX's AI Measurement Framework, leaders can gain a clear picture of AI's true impact, identify the real bottlenecks in the SDLC that can be augmented with AI, and drive improvement. In this session, Justin Reock, Deputy CTO at DX, and author of DX's Guide to AI Assisted Engineering, will explain what the most effective leaders of AI enabled engineering organizations are doing to drive satisfactory utilization, augmentation, and psychological safety across their teams. Based on interviews, use cases, and data, leaders will walk away with an understanding of how to best lead their teams through mature AI rollouts.\",\"since\":\"2025-11-20T16:40:00\",\"endsAt\":\"2025-11-20T16:59:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Justin Reock\",\"tagline\":\"Deputy CTO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"DX\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/justin-reock.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/jreock\",\"linkedin\":\"https://www.linkedin.com/in/justinreock\"}}}],\"slug\":\"beyond-the-hype-measuring-real-impact\",\"displayOrder\":18,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-19\",\"title\":\"How to build an AI-native company (even if your company is 50 years old)\",\"about\":\"tba\",\"since\":\"2025-11-20T17:00:00\",\"endsAt\":\"2025-11-20T17:19:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Dan Shipper\",\"tagline\":\"Founder\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Every\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/dan-shipper.png\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/danshipper\",\"linkedin\":\"https://www.linkedin.com/in/danshipper\",\"website\":\"https://every.to/@danshipper\"}}}],\"slug\":\"future-of-ai-powered-writing-coding\",\"displayOrder\":19,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-20\",\"title\":\"Closing Remarks\",\"about\":\"Day 1 closing remarks and preview of Day 2.\",\"since\":\"2025-11-20T17:20:00\",\"endsAt\":\"2025-11-20T17:25:00\",\"trackName\":\"Keynote\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"swyx\",\"tagline\":\"Co-founder\",\"company\":{\"data\":{\"attributes\":{\"name\":\"AI Engineer\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/swyx.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/swyx\",\"linkedin\":\"https://www.linkedin.com/in/shawnswyxwang\",\"website\":\"https://www.swyx.io\"}}},{\"attributes\":{\"name\":\"Ben Dunphy\",\"tagline\":\"Co-founder\",\"company\":{\"data\":{\"attributes\":{\"name\":\"AI Engineer\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/ben-dunphy.jpg\"}}}}}],\"slug\":\"closing-remarks-day-1\",\"displayOrder\":20,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":true},{\"id\":\"session-21\",\"title\":\"Day 2 Opening\",\"about\":\"Welcome to Day 2 of the AI Engineer Code Summit.\",\"since\":\"2025-11-21T09:00:00\",\"endsAt\":\"2025-11-21T09:05:00\",\"trackName\":\"Keynote\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Jed Borovik\",\"tagline\":\"Jules lead\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Google DeepMind\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/jed-borovik.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/jedborovik\"}}}],\"slug\":\"day-2-opening\",\"displayOrder\":21,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":true},{\"id\":\"session-22\",\"title\":\"The War on Slop\",\"about\":\"Why we need to eliminate low-quality code and work in AI engineering\",\"since\":\"2025-11-21T09:05:00\",\"endsAt\":\"2025-11-21T09:10:00\",\"trackName\":\"Keynote\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"swyx\",\"tagline\":\"Organizer\",\"company\":{\"data\":{\"attributes\":{\"name\":\"AI Engineer\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/swyx.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/swyx\",\"linkedin\":\"https://www.linkedin.com/in/shawnswyxwang\",\"website\":\"https://www.swyx.io\"}}}],\"slug\":\"opening-remarks-day-2\",\"displayOrder\":22,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":true},{\"id\":\"session-23\",\"title\":\"Don't Build Agents, Build Skills Instead\",\"about\":\"In the past year, we've seen rapid advancement of model intelligence and convergence on agent scaffolding. But there's still a gap: agents often lack the domain expertise and specialized knowledge needed for real-world work. We think Skills are the solution—a minimal form factor for packaging procedural knowledge that agents can dynamically load. It's a portable, composable approach to giving one agent capabilities across domains. In this talk, we'll share how we built Skills at Anthropic, the network effects we're observing, and where we believe this leads: agents writing their own Skills from experience. Our thesis: equipping agents for real-world work means building reusable expertise.\",\"since\":\"2025-11-21T09:10:00\",\"endsAt\":\"2025-11-21T09:30:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Barry Zhang\",\"tagline\":\"Member of Technical Staff\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Anthropic\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/barry-zhang.jpeg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/barry_zyj\",\"linkedin\":\"https://www.linkedin.com/in/barry-z\"}}},{\"attributes\":{\"name\":\"Mahesh Murag\",\"tagline\":\"Member of Technical Staff\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Anthropic\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/mahesh-murag.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/MaheshMurag\",\"linkedin\":\"https://www.linkedin.com/in/maheshmurag\",\"github\":\"https://github.com/maheshmurag\"}}}],\"slug\":\"building-with-claude-for-code\",\"displayOrder\":23,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-24\",\"title\":\"No Vibes Allowed: Solving Hard Problems in Complex Codebases\",\"about\":\"It seems pretty well-accepted that AI coding tools struggle with real production codebases. At AI Engineer 2025 in June, The Stanford study on AI's impact on developer productivity found:\\n\\n1. A lot of the \\\"\\\"extra code\\\"\\\" shipped by AI tools ends up just reworking the slop that was shipped last week.\\n\\n2. Coding agents are great for new projects or small changes, but in large established codebases, they can often make developers less productive.\\n\\nThe common response is somewhere between the pessimist \\\"\\\"this will never work\\\"\\\" and the more measured \\\"\\\"maybe someday when there are smarter models.\\\"\\\"\\n\\nAfter several months of tinkering, we've found that you can get really far with today's models if you embrace core context engineering principles.\\n\\nThis isn't another \\\"\\\"10x your productivity\\\"\\\" pitch. I tend to be pretty measured when it comes to interfacing with the ai hype machine. But we've stumbled into workflows that leave me with considerable optimism for what's possible. We've gotten claude code to handle 300k LOC Rust codebases, ship a week's worth of work in a day, and maintain code quality that passes expert review. We use a family of techniques I call \\\"\\\"frequent intentional compaction\\\"\\\" - deliberately structuring how you feed context to the AI throughout the development process.\\n\\nIn this talk, I'll share what we've learned since first sharing these techniques back in August, and some educated predictions on what's coming in the next 6-12 months for software engineers.\",\"since\":\"2025-11-21T09:30:00\",\"endsAt\":\"2025-11-21T09:50:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Dex Horthy\",\"tagline\":\"CEO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"HumanLayer\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/dex-horthy.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/dexhorthy\",\"linkedin\":\"https://www.linkedin.com/in/dexterihorthy\"}}}],\"slug\":\"no-vibes-allowed-solving-hard-problems\",\"displayOrder\":24,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-25\",\"title\":\"Building Cursor Composer\",\"about\":\"Learn about the infrastructure, training, and evaluations used to build Cursor Composer, our first coding model.\",\"since\":\"2025-11-21T09:50:00\",\"endsAt\":\"2025-11-21T10:10:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Lee Robinson\",\"tagline\":\"Head of DX\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Cursor\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/lee-robinson.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/leeerob\",\"linkedin\":\"https://www.linkedin.com/in/leeerob\",\"website\":\"https://leerob.com\"}}}],\"slug\":\"future-of-ai-powered-development\",\"displayOrder\":25,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-26\",\"title\":\"From Code Snippets to Codebases: Then, Now, and What’s Next for Coding Evals\",\"about\":\"AI coding capabilities have leapt from generating one-line snippets to competing entire codebases with agentic workflows. I’ll trace that arc focusing on learnings and challenges through each stage. I will start with early testable coding benchmarks distilling lessons about contamination and distributional overfitting. Next, moving beyond isolated programming problems, I will talk about repository grounded coding problems from SWE-bench style bug fixing, and R2E’s automated function completion setting. We’ll then move beyond isolated functions to longer-horizon tasks—runtime optimization (GSO), translation (Syzygy), and refactoring—highlighting challenges like test hacking, code quality, and idiomaticity. Finally, beyond code generation, I will talk about human preference evaluation in chatting (LMArena RepoChat) and developer-preference signals in-IDE via Copilot Arena.\",\"since\":\"2025-11-21T10:10:00\",\"endsAt\":\"2025-11-21T10:30:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Naman Jain\",\"tagline\":\"Engineering\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Cursor\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/naman-jain.jpg\"}}},\"socialLinks\":{\"linkedin\":\"https://www.linkedin.com/in/naman-jain-8743ab79\"}}}],\"slug\":\"terminalbench-evaluating-ai-coding-agents\",\"displayOrder\":26,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-27\",\"title\":\"Code World Model: Building World Models for Computation\",\"about\":\"Today, most neural models for code learn from code itself: sequences of tokens that capture syntax rather than computation. While this allows models to learn the shape of code, true reasoning about programs requires understanding execution and the dynamics of computation. In this talk, I’ll present a world-model approach to learning from code: one that incorporates data from program execution to implicitly predict behavior while generating code. The Code World Model (CWM) embodies this paradigm, opening new capabilities for reasoning and offering a foundation for future research and prototyping in AI-driven software systems.\",\"since\":\"2025-11-21T11:00:01\",\"endsAt\":\"2025-11-21T11:19:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Jacob Kahn\",\"tagline\":\"Research Scientist\",\"company\":{\"data\":{\"attributes\":{\"name\":\"FAIR, Meta\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/jacob-khan.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/jacob_d_kahn\",\"linkedin\":\"https://www.linkedin.com/in/jacobdavidkahn\"}}}],\"slug\":\"code-world-model\",\"displayOrder\":27,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-28\",\"title\":\"Efficient Reinforcement Learning\",\"about\":\"Reinforcement learning (RL) is a powerful mechanism for building agents that are superhuman and specialized in particular tasks. At Applied Compute, RL is one of the fundamental building blocks that enables us to deliver automations and real business value for customers. Effective RL training often involves several iterative derisking runs to better understand learning dynamics with different base models, and then doing “hero” runs with the best configurations. If done naively, this can be very time-consuming and expensive. In this talk, we will discuss some ways our proprietary RL stack allows us to train models efficiently.\",\"since\":\"2025-11-21T11:20:00\",\"endsAt\":\"2025-11-21T11:39:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Rhythm Garg\",\"tagline\":\"Co-founder\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Applied Compute\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/rhythm-garg.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/rhythmrg\",\"linkedin\":\"https://www.linkedin.com/in/rhythm-garg\",\"website\":\"https://rhythmgarg.com\"}}},{\"attributes\":{\"name\":\"Linden Li\",\"tagline\":\"Co-founder\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Applied Compute\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/linden.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/lindensli\",\"linkedin\":\"https://www.linkedin.com/in/linden-li\"}}}],\"slug\":\"reinforcement-learning-environments-for-code\",\"displayOrder\":28,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-29\",\"title\":\"RL Environments at Scale\",\"about\":\"Scaling reinforcement learning environments for training advanced AI coding models.\",\"since\":\"2025-11-21T11:40:00\",\"endsAt\":\"2025-11-21T11:59:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Will Brown\",\"tagline\":\"Research Lead\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Prime Intellect\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/will-brown.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/willccbb\"}}}],\"slug\":\"rl-environments-at-scale\",\"displayOrder\":29,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-30\",\"title\":\"Agent Reinforcement Fine Tuning\",\"about\":\"Deep dive into OpenAI's approach to reinforcement fine-tuning for code models.\",\"since\":\"2025-11-21T12:00:00\",\"endsAt\":\"2025-11-21T12:19:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Will Hang\",\"tagline\":\"Member of Technical Staff\",\"company\":{\"data\":{\"attributes\":{\"name\":\"OpenAI\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/will-hang.jpg\"}}}}},{\"attributes\":{\"name\":\"Cathy Zhou\",\"tagline\":\"Member of Technical Staff\",\"company\":{\"data\":{\"attributes\":{\"name\":\"OpenAI\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/placeholder.jpg\"}}}}}],\"slug\":\"openai-rft-reinforcement-fine-tuning\",\"displayOrder\":30,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-31\",\"title\":\"From Vibe Coding To Vibe Engineering\",\"about\":\"Web development has always moved in cycles of hype, from frameworks to tooling. With the rise of large language models, we're entering a new era of \\\"vibe coding,\\\" where developers shape software through collaboration with Al rather than syntax. This talk explores what that means for the future of coding, especially in frontend development, and how it echoes the past while redefining what comes next.\",\"since\":\"2025-11-21T12:20:00\",\"endsAt\":\"2025-11-21T12:39:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Kitze\",\"tagline\":\"Founder\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Sizzy\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/kitze.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/thekitze\",\"website\":\"https://rhythmgarg.com\"}}}],\"slug\":\"building-production-coding-agents\",\"displayOrder\":31,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-32\",\"title\":\"Building in the Gemini Era with Google DeepMind\",\"about\":\"tba on talk content\",\"since\":\"2025-11-21T13:45:00\",\"endsAt\":\"2025-11-21T14:04:00\",\"trackName\":\"AI Leadership\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Kat Kampf\",\"tagline\":\"Product Manager\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Google\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/kat-kampf.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/kat_kampf\",\"linkedin\":\"https://www.linkedin.com/in/kkampf\"}}},{\"attributes\":{\"name\":\"Ammaar Reshi\",\"tagline\":\"Product & Design Lead\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Google\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/ammaar-reshi.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/ammaar\",\"linkedin\":\"https://www.linkedin.com/in/ammaarsreshi\",\"website\":\"https://ammaar.me\"}}}],\"slug\":\"from-prompt-to-production-google-ai-studio\",\"displayOrder\":32,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-33\",\"title\":\"Making Codebases \\\"Agent-Ready\\\"\",\"about\":\"Agents are eating software engineering. Yet teams deploying these tools face mixed results. Agents work great in demos but fail unreliably in production, frustrating engineering teams who expected better. The gap isn't model quality—it's environment readiness. Agents need fast feedback loops, explicit instructions, and predictable environments to work effectively. They break on missing environment variables, undocumented dependencies, and tribal knowledge that \\\"everyone just knows.\\\"\\n\\nWhat if you could measure and fix what's holding your agents back? Enter Agent Readiness.\\nIn this talk, we'll explore eight categories that determine whether your codebase is agent-ready: from style validation and build systems to dev environments and observability. You'll learn how to score your repos, identify easy wins, and build environments where agents actually ship reliable code. We'll share real signals from Factory's work running autonomous agents in enterprise production repos—and give you a practical framework to make your team's agents more productive starting tomorrow.\",\"since\":\"2025-11-21T14:05:00\",\"endsAt\":\"2025-11-21T14:24:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Eno Reyes\",\"tagline\":\"CTO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Factory AI\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/eno-reyes.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/EnoReyes\",\"linkedin\":\"https://www.linkedin.com/in/enoreyes\",\"website\":\"https://enoreyes.com\"}}}],\"slug\":\"factory-ai-future-of-code-generation\",\"displayOrder\":33,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-34\",\"title\":\"Amp Code: Next-Generation AI Coding\",\"about\":\"Introduction to Amp Code and its approach to AI-powered software development.\",\"since\":\"2025-11-21T14:25:00\",\"endsAt\":\"2025-11-21T14:44:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Beyang Liu\",\"tagline\":\"Co-founder & CTO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Amp Code / Sourcegraph\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/beyang-liu.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/beyang\",\"linkedin\":\"https://www.linkedin.com/in/beyang-liu\",\"github\":\"https://github.com/beyang\"}}}],\"slug\":\"amp-code-next-generation-ai-coding\",\"displayOrder\":34,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-35\",\"title\":\"Using AI-Generated Kernels to Instantly Speed Up PyTorch\",\"about\":\"In this talk, we'll talk about how AI generated kernels can meaningfully speed up custom PyTorch code, without any human effort.\\n\\nLots of great frameworks exist to optimize PyTorch with programmatic optimizations, such as Triton and MLX. But the strongest AI performance gains come from hand-written, low-level kernels that are targeted to the exact device and workload. These are tedious and time-consuming to write, especially when supporting multiple platforms. What if we could automate this process with AI?\\n\\nWe'll cover the best practices for AI generating low-level kernels, from how to test and validate the kernels, and what type of agents and contexts are needed to get the best results. We'll cover the research we did where this approach improved PyTorch inference performance on Apple devices.\",\"since\":\"2025-11-21T14:45:00\",\"endsAt\":\"2025-11-21T15:04:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Natalie Serrino\",\"tagline\":\"Cofounder\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Gimlet Labs\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/natalie-serrino.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/nserrino\",\"linkedin\":\"https://www.linkedin.com/in/natalieserrino\"}}}],\"slug\":\"ai-generated-kernels-pytorch-inference\",\"displayOrder\":35,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-36\",\"title\":\"The Infinite Software Crisis\",\"about\":\"In 1968, the term \\\"\\\"Software Crisis\\\"\\\" emerged when systems grew beyond what developers could manage. Every generation since has \\\"\\\"solved\\\"\\\" it with more powerful tools, only to create even bigger problems. \\n\\n**Today, AI accelerates the pattern into the Infinite Software Crisis.** AI-generated codebases mirror the meandering conversations that created them. Every clarification and pivot gets baked into your architecture. We're vibecoding our way to disaster.\\n\\n**The solution: choose simple over easy.** One long conversation is easy. Separate phases with clean boundaries are simple.\\n\\nThis talk presents a three-phase methodology:\\n- **Research** to understand the existing system\\n- **Planning** to design the approach  \\n- **Implementation** with clean context\\n\\nWhile everyone races to generate code at machine speed, the engineers who thrive will be those who know when a system is getting tangled. In the age of infinite code generation, human judgment applied at the right moments becomes your competitive advantage.\",\"since\":\"2025-11-21T15:05:00\",\"endsAt\":\"2025-11-21T15:24:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Jake Nations\",\"tagline\":\"Engineering\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Netflix\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/jake-nations.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/softwarearthropod\",\"linkedin\":\"https://www.linkedin.com/in/jakenations\",\"github\":\"https://github.com/Nayshins\"}}}],\"slug\":\"software-has-become-too-easy-to-write\",\"displayOrder\":36,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-37\",\"title\":\"AGI: The Path Forward\",\"about\":\"Poolside's vision and roadmap towards achieving AGI-level capabilities for knowledge work.\",\"since\":\"2025-11-21T16:00:00\",\"endsAt\":\"2025-11-21T16:19:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Eiso Kant\",\"tagline\":\"CEO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Poolside\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/eiso-kant.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/eisokant\",\"linkedin\":\"https://www.linkedin.com/in/eisokant\"}}}],\"slug\":\"code-agi-the-path-forward\",\"displayOrder\":37,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-38\",\"title\":\"Continual System-Prompt Learning for Code Agents\",\"about\":\"Your coding agent writes code—but not like your team. RL has boosted base models, but it’s opaque and hard to scale across enterprises. Most agents still rely on brittle, hand-edited system prompts or style guides (e.g., agent.md)—what if your agent learned from your reviews and updated them automatically? In this talk, I’ll show a system-prompt learning loop—RL techniques applied to prompts, not model weights—that continually tunes an agents.md, so the agent learns instructions from your PR's, feedback & evaluations. You’ll leave with a concrete recipe to capture runtime signals, and auto-tune system prompts—applicable to any type of agent you’re building.\",\"since\":\"2025-11-21T16:20:00\",\"endsAt\":\"2025-11-21T16:39:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Aparna Dhinakaran\",\"tagline\":\"Co-founder & CPO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Arize\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/aparna-dhinakaran.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/aparnadhinak\",\"linkedin\":\"https://www.linkedin.com/in/aparnadhinakaran\"}}}],\"slug\":\"continual-system-prompt-learning\",\"displayOrder\":38,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-39\",\"title\":\"Hard-Won Lessons from Building Effective AI Coding Agents\",\"about\":\"Most of what’s written about AI agents sounds great in theory — until you try to make them work in production. The seductive ideas (multi-agent orchestration, RAG, prompt stacking) often collapse under real-world constraints. Why? Because they optimize for the wrong thing. In this talk, Nik Pash shares hard-won lessons from building large-scale coding agents at Cline — what failed, what survived, and why the next leap forward won’t come from clever scaffolds, but from evals and environments that truly measure and improve reasoning. Attendees will walk away with a clearer sense of what actually drives progress — and what’s just noise.\",\"since\":\"2025-11-21T16:40:00\",\"endsAt\":\"2025-11-21T16:59:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Nik Pash\",\"tagline\":\"Creator\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Cline\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/nik-pash.jpg\"}}},\"socialLinks\":{\"linkedin\":\"https://www.linkedin.com/in/nikpash\"}}}],\"slug\":\"building-cline-open-source-ai-coding-assistant\",\"displayOrder\":39,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-40\",\"title\":\"Benchmarks vs economics: the AI capability measurement gap\",\"about\":\"AI models are crushing benchmarks. SWE-bench scores are climbing, and METR's measured time horizons are rising rapidly. Yet when we deployed these same models in a field study with experienced developers, they didn't speed up work. What's going on? Are benchmarks misleading us about AI capabilities? Are we missing something about how AI performs in the real world? In this talk, we'll reconcile lab and field evidence on AI capabilities. Drawing from METR's time horizon measurements and developer productivity RCT, we'll explore why impressive benchmark performance doesn't always translate to real-world impact. We'll examine potential explanations—from reliability requirements to task distribution to capability elicitation—and discuss what this means for automated AI R&D.\",\"since\":\"2025-11-21T17:00:00\",\"endsAt\":\"2025-11-21T17:19:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Joel Becker\",\"tagline\":\"Researcher\",\"company\":{\"data\":{\"attributes\":{\"name\":\"METR\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/joel-becker.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://x.com/joel_bkr\",\"linkedin\":\"https://www.linkedin.com/in/joel-becker/\",\"github\":\"https://github.com/joel-becker\"}}}],\"slug\":\"evaluating-ai-coding-agents-metr-approach\",\"displayOrder\":40,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"session-41\",\"title\":\"Defying Gravity\",\"about\":\"Why we built Google Antigravity, and discussing the future of agentic IDEs with Gemini 3.\",\"since\":\"2025-11-21T17:20:00\",\"endsAt\":\"2025-11-21T17:39:00\",\"trackName\":\"AI Engineering\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Kevin Hou\",\"tagline\":\"Engineering\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Google DeepMind\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/kevin-hou.jpeg\"}}},\"socialLinks\":{\"twitter\":\"https://x.com/kevinhou22\",\"linkedin\":\"https://www.linkedin.com/in/kevinhou22/\"}}}],\"slug\":\"defying-gravity-agentic-ides\",\"displayOrder\":41,\"recordingLink\":null,\"type\":\"SESSION\",\"isPlenumSession\":false},{\"id\":\"workshop-1\",\"title\":\"Claude Code SDK\",\"about\":\"Learn to use Anthropic's Claude Code SDK for AI-powered development workflows.\",\"since\":\"2025-11-22T10:00:00\",\"endsAt\":\"2025-11-22T12:00:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 46th floor Cafe\",\"roomOther\":\"Datadog 46th floor Cafe\",\"presenters\":[{\"attributes\":{\"name\":\"Thariq Shihipar\",\"tagline\":\"Developer Advocate\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Anthropic\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/thariq-shihipar.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/trq__\",\"linkedin\":\"https://www.linkedin.com/in/thariqshihipar\",\"website\":\"https://www.thariq.io\"}}}],\"slug\":\"claude-code-sdk\",\"displayOrder\":42,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-2\",\"title\":\"Prompt to Production with Google AI Studio\",\"about\":\"Explore creative applications using Google DeepMind's Gemini API.\",\"since\":\"2025-11-22T09:30:00\",\"endsAt\":\"2025-11-22T12:00:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 47th floor Puss in Boots/Cafe\",\"roomOther\":\"Datadog 47th floor Puss in Boots/Cafe\",\"presenters\":[{\"attributes\":{\"name\":\"Paige Bailey\",\"tagline\":\"AI Developer Relations Lead\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Google DeepMind\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/paige-bailey.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/DynamicWebPaige\",\"linkedin\":\"https://www.linkedin.com/in/dynamicwebpaige\",\"github\":\"https://github.com/dynamicwebpaige\"}}}],\"slug\":\"unlock-creativity-gemini-api\",\"displayOrder\":43,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-3\",\"title\":\"Composable MCP Architectures: Handling What the Protocol Can’t\",\"about\":\"The Model Context Protocol (MCP) has transformed how AI agents interact with external systems, but many implementations struggle with scope and architecture decisions. This workshop explores the challenges that MCP wasn't designed to solve and presents composable patterns for building robust, production-ready MCP architectures.\\n\\nWe'll cover what's missing from the protocol specification and why trying to solve everything within MCP servers leads to brittle implementations. Instead, learn proper separation of concerns: what belongs in your MCP server versus what should be handled by orchestration layers, caching systems, and external services.\\n\\nDiscover how to extract true utility from MCP by focusing on skills-based abstractions rather than raw API wrappers. Through hands-on examples, you'll build composable MCP architectures that handle authentication, rate limiting, error recovery, and complex workflows while maintaining the protocol's elegant simplicity.\",\"since\":\"2025-11-22T09:00:00\",\"endsAt\":\"2025-11-22T12:00:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 46th floor Flatiron (60)\",\"roomOther\":\"Datadog 46th floor Flatiron (60)\",\"presenters\":[{\"attributes\":{\"name\":\"Christopher Miller\",\"tagline\":\"Developer Advocate\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Workato\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/chris-miller.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://x.com/chrisdmiller\",\"linkedin\":\"https://www.linkedin.com/in/chrisdmiller\",\"github\":\"https://github.com/chrisdmiller\"}}},{\"attributes\":{\"name\":\"Zayne Turner\",\"tagline\":\"Developer Advocate\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Workato\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/zayne-turner.jpg\"}}},\"socialLinks\":{\"linkedin\":\"https://www.linkedin.com/in/zayne-turner\",\"github\":\"https://github.com/zaynelt\",\"website\":\"https://zayneturner.com\"}}}],\"slug\":\"workato-ai-automation-workshop\",\"displayOrder\":44,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-4\",\"title\":\"Building Durable, Production-Ready Agents with OpenAI SDK and Temporal\",\"about\":\"Everyone is building AI Agents, and everyone is looking for ways to build them more easily. Earlier this year, OpenAI released the OpenAI Agents SDK to bring the patterns they have found to work for building agents to the developer community. With the SDK you can define AI agents by supplying them instructions (prompts), specifying which model to use (OpenAI or not), listing tools it uses (including MCP), and much more. The OpenAI Agents SDK encourages a paradigm of orchestrated micro-agents, which themselves may have micro-orchestrations within them with the use of handoffs. It’s an elegant and powerful model.\\n\\nBut a good AI Agents programming model is not enough. These agents are ultimately wildly distributed systems and are plagued with all of the problems such systems bring. \\n- How can they persevere through flakey networks?\\n- How can they function when LLMs are rate limited?\\n- How can they run for long periods of time (hours, days, weeks, months) when infrastructure is rarely stable that long?\\n\\nIn this workshop, we’ll show you how. Temporal is an open source (MIT license) durable execution framework that brings resilience to AI agents, and in this workshop we’ll show you how it’s done with the OpenAI Agents SDK. Spoiler: OpenAI and Temporal have done all of the heaving lifting for you with an [integration announced earlier this year](https://temporal.io/blog/announcing-openai-agents-sdk-integration). \\n\\nOh, and OpenAI themselves use Temporal to help make several of their products production ready ([image gen](https://newsletter.pragmaticengineer.com/p/chatgpt-images) and [Codex](https://www.linkedin.com/posts/embirico_hello-openais-new-codex-agent-they-activity-7330357161992011776-YVUl/), for example).\\n\\nNot using the OpenAI Agents SDK? Do come anyway; the foundational concepts carry over to different agent frameworks (and more integrations are coming all the time).\",\"since\":\"2025-11-22T12:30:00\",\"endsAt\":\"2025-11-22T13:50:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 47th floor Puss in Boots/Cafe\",\"roomOther\":\"Datadog 47th floor Puss in Boots/Cafe\",\"presenters\":[{\"attributes\":{\"name\":\"Cornelia Davis\",\"tagline\":\"Dev Advocate\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Temporal\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/cornelia-davis.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/cdavisafc\",\"linkedin\":\"https://www.linkedin.com/in/corneliadavis\"}}}],\"slug\":\"building-durable-agents-openai-temporal\",\"displayOrder\":45,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-5\",\"title\":\"Build a Real-Time AI Sales Agent\",\"about\":\"Learn how to build a sophisticated real-time voice sales agent that can have natural conversations with potential customers. You'll create both single-agent and multi-agent systems where specialized AI assistants handle sales, technical support, and pricing inquiries.\",\"since\":\"2025-11-22T12:30:00\",\"endsAt\":\"2025-11-22T13:50:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 46th floor Cafe\",\"roomOther\":\"Datadog 46th floor Cafe\",\"presenters\":[{\"attributes\":{\"name\":\"Sarah Chieng\",\"tagline\":\"Head of DX\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Cerebras\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/sarah-chieng.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/SarahChieng\",\"linkedin\":\"https://www.linkedin.com/in/sarah-chieng-888595139\",\"website\":\"https://sarahchieng.com\"}}}],\"slug\":\"building-multi-agent-sales-agents\",\"displayOrder\":46,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-6\",\"title\":\"Building Intelligent Research Agents with Manus\",\"about\":\"AI agents are no longer confined to chat interfaces. From our original Manus app for powerful conversations, to Mail Manus for transforming your inbox into an organized command center, we've progressively expanded where an AI can work. Now, with the Manus API, we're completing the vision by giving you the final building block to deploy an intelligent agent anywhere in your stack.\\n\\nIn this workshop, you'll learn to use the API to build a bespoke research agent that powers deep analysis across your company's internal data. We'll show you how to dispatch a task that connects to your private systems, synthesises complex information, and delivers custom insights on demand, turning your entire knowledge base into an actionable, intelligent asset.\\n\\nIn this hands-on session, you will:\\n\\n- Use the Manus API to dispatch and manage asynchronous agentic tasks.\\n- Connect the agent to private data sources using our connectors\\n- Build a complete workflow that synthesises information into a custom report.\\n\\nBy the end of the workshop you'll have a functional research agent that you can adapt for your own use case.\",\"since\":\"2025-11-22T12:30:00\",\"endsAt\":\"2025-11-22T14:15:00\",\"trackName\":\"Workshop\",\"room\":\"AWS JFK27 B1.296\",\"roomOther\":\"AWS JFK27 B1.296\",\"presenters\":[{\"attributes\":{\"name\":\"Ivan Leo\",\"tagline\":\"AI Engineer\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Manus\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/ivan-leo.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/ivanleomk\",\"linkedin\":\"https://www.linkedin.com/in/ivanleo\"}}}],\"slug\":\"manus-api-workshop\",\"displayOrder\":47,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-7\",\"title\":\"Build a Prompt Learning Loop\",\"about\":\"Learn how to create a feedback loop to continuously improve your AI prompts and responses.\",\"since\":\"2025-11-22T12:30:00\",\"endsAt\":\"2025-11-22T14:15:00\",\"trackName\":\"Workshop\",\"room\":\"AWS JFK27 B1.300\",\"roomOther\":\"AWS JFK27 B1.300\",\"presenters\":[{\"attributes\":{\"name\":\"SallyAnn DeLucia\",\"tagline\":\"Director of Product\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Arize\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/sallyann.jpg\"}}},\"socialLinks\":{\"linkedin\":\"https://www.linkedin.com/in/sallyann-delucia-59a381172/\"}}}],\"slug\":\"arize-ai-observability-workshop\",\"displayOrder\":48,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-20\",\"title\":\"Building durable Agents with Workflow DevKit & AI SDK\",\"about\":\"Learn to build and deploy AI agents using Vercel's new open source Workflows platform.\",\"since\":\"2025-11-22T12:30:00\",\"endsAt\":\"2025-11-22T13:50:00\",\"trackName\":\"Workshop\",\"room\":\"AWS JFK27 B1.100\",\"roomOther\":\"AWS JFK27 B1.100\",\"presenters\":[{\"attributes\":{\"name\":\"Peter Wielander\",\"tagline\":\"AI Engineer\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Vercel\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/peter-wielander.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/vaguelyserious\",\"linkedin\":\"https://www.linkedin.com/in/peter-wielander\",\"website\":\"https://wielander.me\"}}}],\"slug\":\"vercel-workflows-agents\",\"displayOrder\":49,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-10\",\"title\":\"gemini fix --quality: A Story of CLI Bugs and Patches\",\"about\":\"What happens when your new CLI is an instant hit? Massive adoption, diverse use cases... and a flood of unanticipated quality issues. The Gemini CLI's rapid launch in the OSS world gave us a masterclass in building reliability for a fast-moving AI agent. This talk isn't about theory; it's a dispatch from the trenches. Join me to explore our journey and learn what 'coding agent quality' truly means to users. We'll move beyond simple dataset optimization to share the real-world engineering that mattered, from implementing robust retries and history modifications to architecting for complex tools and subagents.\",\"since\":\"2025-11-22T14:30:00\",\"endsAt\":\"2025-11-22T15:50:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 47th floor Cafe\",\"roomOther\":\"Datadog 47th floor Cafe\",\"presenters\":[{\"attributes\":{\"name\":\"Anjali Sridhar\",\"tagline\":\"Senior Staff Software Engineer\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Google\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/anjali-sridhar.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/anjali_sridhar\",\"linkedin\":\"https://www.linkedin.com/in/anjalisridhar\"}}}],\"slug\":\"gemini-fix-quality-cli-bugs-patches\",\"displayOrder\":51,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-9\",\"title\":\"Sharpening your AI toolbox for Spec-Driven Dev\",\"about\":\"In the AI coding era, we have powerful tools, but tools still require honing to work effectively. Spec-Driven Development allows for reproducible and reliable delivery, but spending time up-front to improve the spec process will yield the best approach. Learn how the Kiro team does this, and how you can too!\",\"since\":\"2025-11-22T14:30:00\",\"endsAt\":\"2025-11-22T15:50:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 47th floor Puss in Boots\",\"roomOther\":\"Datadog 47th floor Puss in Boots\",\"presenters\":[{\"attributes\":{\"name\":\"Al Harris\",\"tagline\":\"Tech Lead\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Amazon Kiro\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/alexander-harris.jpg\"}}},\"socialLinks\":{\"linkedin\":\"https://www.linkedin.com/in/al-harris-7a755640/\"}}}],\"slug\":\"spec-driven-dev-kiro\",\"displayOrder\":50,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-11\",\"title\":\"Automating Large-Scale Refactors with Parallel Agents\",\"about\":\"Today's agents are best at small, atomic coding tasks. Much larger tasks--like major refactors and breaking dependency updates--are highly automatable but hard to one-shot.\\n\\nIn this session, we'll discuss patterns for orchestrating large-scale code changes with swarms of agents and a human in the loop.\\n\\nWe'll also work through a concrete example: migrating an entire codebase from one React state management library to another.\",\"since\":\"2025-11-22T14:30:00\",\"endsAt\":\"2025-11-22T15:50:00\",\"trackName\":\"Workshop\",\"room\":\"AWS JFK27 B1.300\",\"roomOther\":\"AWS JFK27 B1.300\",\"presenters\":[{\"attributes\":{\"name\":\"Robert Brennan\",\"tagline\":\"CEO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"AllHands\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/robert-brennan.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/RobertBrennan\",\"linkedin\":\"https://www.linkedin.com/in/robert-a-brennan\"}}}],\"slug\":\"automating-large-scale-refactors\",\"displayOrder\":52,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-12\",\"title\":\"Running Multi-Agent Systems with AgentOS\",\"about\":\"In this session, you'll learn how to run multi-agent systems at scale using the AgentOS.\\n\\nWe'll explore practical techniques for building agents with shared memory and knowledge, and walk through patterns that improve reliability, durability, execution flow, and overall system stability. You'll also see lessons drawn from real production workloads running on the AgentOS.\\n\\nThe talk will cover how to scale across both scope and infrastructure, and will highlight the systems engineering principles required to operate large, distributed agentic architectures with confidence.\",\"since\":\"2025-11-22T14:30:00\",\"endsAt\":\"2025-11-22T15:50:00\",\"trackName\":\"Workshop\",\"room\":\"AWS JFK27 B1.296\",\"roomOther\":\"AWS JFK27 B1.296\",\"presenters\":[{\"attributes\":{\"name\":\"Ashpreet Bedi\",\"tagline\":\"Founder\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Agno AI\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/ashpreet-bedi.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/ashpreetbedi\",\"website\":\"https://www.ashpreetbedi.com\"}}}],\"slug\":\"running-multi-agent-systems-with-agentos\",\"displayOrder\":53,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-13\",\"title\":\"Okta Identity for AI Agents\",\"about\":\"Implementing secure identity and access management for AI agents with Okta!\",\"since\":\"2025-11-22T14:30:00\",\"endsAt\":\"2025-11-22T15:50:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 46th floor Cafe\",\"roomOther\":\"Datadog 46th floor Cafe\",\"presenters\":[{\"attributes\":{\"name\":\"Patrick Riley\",\"tagline\":\"Senior Software Engineer\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Auth0\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/patrick-riley.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/patjriley\",\"linkedin\":\"https://www.linkedin.com/in/priley-ai\"}}},{\"attributes\":{\"name\":\"Carlos Galan\",\"tagline\":\"Senior Software Engineer\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Auth0\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/carlos-galan.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/CarlosFGalan\"}}}],\"slug\":\"okta-identity-for-ai-agents\",\"displayOrder\":54,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-21\",\"title\":\"Memory in LLMs: Weights and Activations\",\"about\":\"Understanding how memory works in large language models through the lens of weights and activations. This workshop will explore the internal mechanisms of how LLMs store and retrieve information during inference.\",\"since\":\"2025-11-22T14:30:00\",\"endsAt\":\"2025-11-22T15:50:00\",\"trackName\":\"Workshop\",\"room\":\"AWS JFK27 B1.100\",\"roomOther\":\"AWS JFK27 B1.100\",\"presenters\":[{\"attributes\":{\"name\":\"Jack Morris\",\"tagline\":\"Researcher\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Cornell\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/jack-morris.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://x.com/jxmnop\"}}}],\"slug\":\"memory-in-llms-weights-and-activations\",\"displayOrder\":56,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-15\",\"title\":\"Context Engineering for Intelligent AI Code Reviews\",\"about\":\"The rise of AI coding agents has led to a significant rise in PRs that are just waiting for your review. Code reviews are critical but obviously not the most exciting part of our day when you have to manually go through them. This is why we built a context-engineering approach at CodeRabbit that mimics the way a senior engineer would go about reviewing code.\\n\\nWe feed context to LLMs from multiple sources including issue tickets, dependency graph, MCP servers (Notion, Confluence, etc.), Linters/SAST, and your AI coding agent guidelines. This in-depth approach helps the LLMs find hidden bugs and edge cases that would otherwise slip through.\\n\\nIn this workshop, we will share how this context engineering approach has helped us cut down PR review time by 50% while catching 50%+ hidden bugs compared with manual reviews.\",\"since\":\"2025-11-22T16:10:00\",\"endsAt\":\"2025-11-22T17:30:00\",\"trackName\":\"Workshop\",\"room\":\"AWS JFK27 B1.300\",\"roomOther\":\"AWS JFK27 B1.300\",\"presenters\":[{\"attributes\":{\"name\":\"Erik Thorelli\",\"tagline\":\"Director of AI\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Coderabbit\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/david-loker.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/esthor\",\"linkedin\":\"https://www.linkedin.com/in/erikthorelli\"}}}],\"slug\":\"context-engineering-intelligent-code-reviews\",\"displayOrder\":55,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-16\",\"title\":\"DSPy is (really) All You Need\",\"about\":\"Applications developed for the enterprise need to be rigorous, testable, and robust. The same is true for applications that use AI, but LLMs can make this challenging. In other words, you need to be able to *program* with LLMs, not just tweak prompts. In this talk we'll cover why DSPy really is all you need in building applications with LLMs. We'll dive into real-world examples where we have successfully automated manual work using an opinionated DSPy-first approach to structuring applications, covering everything from simple modules to using SoTA optimizers to measurably improve performance.\",\"since\":\"2025-11-22T16:10:00\",\"endsAt\":\"2025-11-22T17:30:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 47th floor Puss in Boots/Cafe\",\"roomOther\":\"Datadog 47th floor Puss in Boots/Cafe\",\"presenters\":[{\"attributes\":{\"name\":\"Kevin Madura\",\"tagline\":\"Director\",\"company\":{\"data\":{\"attributes\":{\"name\":\"AlixPartners\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/kevin-madura.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://x.com/kmad/\"}}}],\"slug\":\"dspy-is-all-you-need\",\"displayOrder\":57,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-17\",\"title\":\"Your MCP Server is Bad and You Should Feel Bad\",\"about\":\"Too many MCP servers are simply glorified REST wrappers, regurgitating APIs that were designed for SDKs, not agents. This leads to confused LLMs, wasted tokens, and demonstrably poor performance. If you've ever pointed an MCP generator at an OpenAPI spec and called it a day, this talk is your intervention.\\n\\nLike any product, great MCP servers are the result of careful design. This talk shares the hard-won lessons from creating FastMCP, the most popular framework for building MCP servers (and yes, for generating them, too). The secret is to stop thinking about endpoints and start thinking about products. We will cover the three pillars of agent-native product design—Discovery, Iteration, and Context—providing an actionable framework for curating context into small, highly effective surface areas that lead to better AI outcomes.\",\"since\":\"2025-11-22T16:10:00\",\"endsAt\":\"2025-11-22T17:30:00\",\"trackName\":\"Workshop\",\"room\":\"AWS JFK27 B1.296\",\"roomOther\":\"AWS JFK27 B1.296\",\"presenters\":[{\"attributes\":{\"name\":\"Jeremiah Lowin\",\"tagline\":\"CEO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Prefect\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/jeremiah-lowin.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/jlowin\",\"linkedin\":\"https://www.linkedin.com/in/jlowin\",\"github\":\"https://github.com/jlowin\"}}}],\"slug\":\"your-mcp-server-is-bad\",\"displayOrder\":58,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-18\",\"title\":\"Long Tasks and Experienced Open Source Dev Productivity\",\"about\":\"Review and discuss METR's groundbreaking research on evaluating long-horizon tasks and open source coding with AI agents.\",\"since\":\"2025-11-22T16:10:00\",\"endsAt\":\"2025-11-22T17:30:00\",\"trackName\":\"Workshop\",\"room\":\"AWS JFK27 B1.100\",\"roomOther\":\"AWS JFK27 B1.100\",\"presenters\":[{\"attributes\":{\"name\":\"Joel Becker\",\"tagline\":\"Researcher\",\"company\":{\"data\":{\"attributes\":{\"name\":\"METR\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/joel-becker.jpg\"}}}}}],\"slug\":\"long-tasks-experienced-os-development\",\"displayOrder\":59,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"workshop-19\",\"title\":\"How Claude Code Works\",\"about\":\"(Not officially endorsed by Anthropic) Deep dive into what we have independently figured out about the architecture and implementation of Claude's code generation capabilities.\",\"since\":\"2025-11-22T16:10:00\",\"endsAt\":\"2025-11-22T17:30:00\",\"trackName\":\"Workshop\",\"room\":\"Datadog 46th floor Cafe\",\"roomOther\":\"Datadog 46th floor Cafe\",\"presenters\":[{\"attributes\":{\"name\":\"Jared Zoneraich\",\"tagline\":\"Founder & CEO\",\"company\":{\"data\":{\"attributes\":{\"name\":\"PromptLayer\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/jared-zoneraich.jpg\"}}},\"socialLinks\":{\"twitter\":\"https://twitter.com/imjaredz\",\"linkedin\":\"https://www.linkedin.com/in/imjaredz\",\"website\":\"https://imjaredz.com\"}}}],\"slug\":\"how-claude-code-works\",\"displayOrder\":60,\"recordingLink\":null,\"type\":\"WORKSHOP\",\"isPlenumSession\":false},{\"id\":\"service-0\",\"title\":\"The Stigg VIP Welcome Reception\",\"about\":\"Speakers, Sponsors, Leadership Pass, and Bundle Pass attendees: This is your official start to the conference! Doors open at 5:00pm for this welcome reception in the expo. Meet your fellow VIP attendees, speakers, and the exciting expo partners over food and drinks courtesy of Stigg! Stigg gives AI teams the building blocks for usage-based monetization, like credits, metering, gating, and pricing orchestration, without slowing down dev velocity. They're also a Gold sponsor -- so grab a drink on them and stop by to say hi!\",\"since\":\"2025-11-19T17:00:00\",\"endsAt\":\"2025-11-19T19:30:00\",\"trackName\":\"Service\",\"room\":\"Expo Hall\",\"roomOther\":\"Expo Hall\",\"presenters\":[{\"attributes\":{\"name\":\"Stigg\",\"tagline\":\"Gold Sponsor\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Stigg\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/placeholder.jpg\"}}}}}],\"slug\":\"stigg-vip-welcome-reception\",\"displayOrder\":0,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":true},{\"id\":\"session-20a\",\"title\":\"The Graphite Afterparty\",\"about\":\"The evening social event for all ticket types! \\\"Engineering only\\\" pass attendees -- you're welcome to join us at the venue's lower level starting at 4:00pm (no stage access). Food and drinks courtesy of our sponsor Graphite, the complete AI code review platform built to keep you unblocked. Learn more at http://graphite.dev\",\"since\":\"2025-11-20T17:30:00\",\"endsAt\":\"2025-11-20T19:30:00\",\"trackName\":\"Service\",\"room\":\"Times Center\",\"roomOther\":\"Times Center\",\"presenters\":[{\"attributes\":{\"name\":\"Graphite\",\"tagline\":\"Sponsor\",\"company\":{\"data\":{\"attributes\":{\"name\":\"Graphite\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/placeholder.jpg\"}}}}}],\"slug\":\"graphite-afterparty\",\"displayOrder\":20.5,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":true},{\"id\":\"service-1\",\"title\":\"Morning Expo\",\"about\":\"Coffee, tea, and networking Expo in the expo hall.\",\"since\":\"2025-11-20T10:30:00\",\"endsAt\":\"2025-11-20T11:00:00\",\"trackName\":\"Service\",\"room\":\"Expo Hall\",\"roomOther\":\"Expo Hall\",\"presenters\":[],\"slug\":\"morning-Expo-day-1\",\"displayOrder\":100,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":false},{\"id\":\"service-2\",\"title\":\"Lunch Expo\",\"about\":\"Lunch provided.\",\"since\":\"2025-11-20T12:45:00\",\"endsAt\":\"2025-11-20T13:45:00\",\"trackName\":\"Service\",\"room\":\"Lunch Area\",\"roomOther\":\"Lunch Area\",\"presenters\":[],\"slug\":\"lunch-Expo-day-1\",\"displayOrder\":101,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":false},{\"id\":\"service-11\",\"title\":\"Afternoon Expo (open to all)\",\"about\":\"Afternoon Expo open to all ticket holders including Engineering track attendees.\",\"since\":\"2025-11-20T15:30:00\",\"endsAt\":\"2025-11-20T19:00:00\",\"trackName\":\"Service\",\"room\":\"Expo Hall\",\"roomOther\":\"Expo Hall\",\"presenters\":[],\"slug\":\"Afternoon-expo-day-1\",\"displayOrder\":103,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":true},{\"id\":\"service-4\",\"title\":\"Morning Expo\",\"about\":\"Coffee, tea, and networking Expo in the expo hall.\",\"since\":\"2025-11-21T10:30:00\",\"endsAt\":\"2025-11-21T11:00:00\",\"trackName\":\"Service\",\"room\":\"Expo Hall\",\"roomOther\":\"Expo Hall\",\"presenters\":[],\"slug\":\"morning-Expo-day-2\",\"displayOrder\":200,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":false},{\"id\":\"service-leadership-brunch\",\"title\":\"Leadership Brunch with AI Eng Leaders of Robinhood\",\"about\":\"[For Leadership pass only] Guided unconference/discussion with industry peers, featuring a fireside chat with Robinhood's Agentic Applications leads Tony Tan and Yash Kumaraswamy, hosted by Gene Kim of IT Revolution, author of The Phoenix Project, the new Vibe Coding book, and curator of the Enterprise Technology Leadership Summit. Hosted offsite at Le Rivage, a few minutes walk away from the Times Center.\",\"since\":\"2025-11-21T11:00:00\",\"endsAt\":\"2025-11-21T14:00:00\",\"trackName\":\"Service\",\"room\":\"(Offsite) Le Rivage\",\"roomOther\":\"Le Rivage\",\"presenters\":[{\"attributes\":{\"name\":\"Gene Kim\",\"tagline\":\"IT Revolution\",\"company\":{\"data\":{\"attributes\":{\"name\":\"IT Revolution\"}}},\"profilePhoto\":{\"data\":{\"attributes\":{\"url\":\"/speakers/gene-kim.png\"}}}}}],\"slug\":\"leadership-brunch-day-2\",\"displayOrder\":200.5,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":false},{\"id\":\"service-5\",\"title\":\"Lunch Expo\",\"about\":\"Lunch provided.\",\"since\":\"2025-11-21T12:45:00\",\"endsAt\":\"2025-11-21T13:45:00\",\"trackName\":\"Service\",\"room\":\"Lunch Area\",\"roomOther\":\"Lunch Area\",\"presenters\":[],\"slug\":\"lunch-Expo-day-2\",\"displayOrder\":201,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":false},{\"id\":\"service-6\",\"title\":\"Afternoon Expo\",\"about\":\"Afternoon Expo with refreshments in the expo hall.\",\"since\":\"2025-11-21T15:30:00\",\"endsAt\":\"2025-11-21T16:00:00\",\"trackName\":\"Service\",\"room\":\"Expo Hall\",\"roomOther\":\"Expo Hall\",\"presenters\":[],\"slug\":\"afternoon-Expo-day-2\",\"displayOrder\":202,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":false},{\"id\":\"service-7\",\"title\":\"Lunch Break - CHECK IN TO AWS EARLY (BRING ID)\",\"about\":\"Lunch provided between workshop sessions. Please bring your conference badge for entry. AWS venue is 12 W 39th St, 0.5 mile walk from Datadog HQ, please budget at least 15 mins to walk over.\",\"since\":\"2025-11-22T12:00:00\",\"endsAt\":\"2025-11-22T12:30:00\",\"trackName\":\"Service\",\"room\":\"Datadog HQ and AWS JFK 27\",\"roomOther\":\"Datadog HQ and AWS JFK 27\",\"presenters\":[],\"slug\":\"lunch-Break-day-3\",\"displayOrder\":300,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":false},{\"id\":\"service-8\",\"title\":\"Afternoon Break\",\"about\":\"Short Break between workshop blocks.\",\"since\":\"2025-11-22T14:15:00\",\"endsAt\":\"2025-11-22T14:30:00\",\"trackName\":\"Service\",\"room\":\"Datadog HQ and AWS JFK 27\",\"roomOther\":\"Datadog HQ and AWS JFK 27\",\"presenters\":[],\"slug\":\"afternoon-Break-1-day-3\",\"displayOrder\":301,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":false},{\"id\":\"service-9\",\"title\":\"Afternoon Break\",\"about\":\"Break with refreshments between workshop sessions.\",\"since\":\"2025-11-22T15:50:00\",\"endsAt\":\"2025-11-22T16:10:00\",\"trackName\":\"Service\",\"room\":\"Datadog HQ and AWS JFK 27\",\"roomOther\":\"Datadog HQ and AWS JFK 27\",\"presenters\":[],\"slug\":\"afternoon-break-2-day-3\",\"displayOrder\":302,\"recordingLink\":null,\"type\":\"SERVICE\",\"isPlenumSession\":false},{\"id\":\"service-10\",\"title\":\"[Official offsite afterparty] Cafe Compute NYC\",\"about\":\"Join us at the (secret location emailed to you) for the official AIE Code Summit Afterparty! Featuring Cerebras, BCV, McKinsey, Warp, Exa, Modal, and Metronome. Hosted by Cerebras: the leading and fastest AI processor. Skip the line and pre-register here [https://luma.com/f3vuq3rj](https://luma.com/f3vuq3rj)\",\"since\":\"2025-11-21T19:00:00\",\"endsAt\":\"2025-11-21T22:00:00\",\"trackName\":\"Plenary\",\"room\":\"Offsite\",\"roomOther\":\"See email for location\",\"presenters\":[],\"slug\":\"cerebras-afterparty\",\"displayOrder\":203,\"type\":\"OTHER\",\"isPlenumSession\":false}]"));}),
"[project]/Documents/Sri/appConf/app/data/schedules/react-conf-2025.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"rc-session-1","title":"Opening Keynote","about":"Welcome to React Conf 2025! Join us for the opening keynote where we'll share exciting updates about React's future.","since":"2025-05-15T09:00:00","endsAt":"2025-05-15T10:00:00","trackName":"Keynote","room":"Main Stage","roomOther":"Main Stage","presenters":[{"attributes":{"name":"React Team","tagline":"React Core Team","company":{"data":{"attributes":{"name":"Meta"}}},"profilePhoto":{"data":null},"socialLinks":{"twitter":"https://twitter.com/reactjs"}}}],"slug":"opening-keynote","displayOrder":1,"recordingLink":null,"type":"SESSION","isPlenumSession":true},{"id":"rc-session-2","title":"What's New in React 19","about":"A deep dive into all the new features and improvements in React 19, including Server Components, Actions, and more.","since":"2025-05-15T10:15:00","endsAt":"2025-05-15T10:45:00","trackName":"React Core","room":"Main Stage","roomOther":"Main Stage","presenters":[{"attributes":{"name":"Sophie Alpert","tagline":"Engineering Manager","company":{"data":{"attributes":{"name":"Meta"}}},"profilePhoto":{"data":null},"socialLinks":{"twitter":"https://twitter.com/sophiebits"}}}],"slug":"whats-new-react-19","displayOrder":2,"recordingLink":null,"type":"SESSION","isPlenumSession":false},{"id":"rc-break-1","title":"Coffee Break","about":"Networking and refreshments","since":"2025-05-15T10:45:00","endsAt":"2025-05-15T11:15:00","trackName":"Break","room":"Lobby","roomOther":"Lobby","presenters":[],"slug":"coffee-break","displayOrder":3,"recordingLink":null,"type":"SERVICE","isPlenumSession":true},{"id":"rc-session-3","title":"React Native: The Next Chapter","about":"Discover the latest improvements in React Native and the roadmap for cross-platform development.","since":"2025-05-15T11:15:00","endsAt":"2025-05-15T11:45:00","trackName":"React Native","room":"Room A","roomOther":"Room A","presenters":[{"attributes":{"name":"Riccardo Cipolleschi","tagline":"React Native Core","company":{"data":{"attributes":{"name":"Meta"}}},"profilePhoto":{"data":null},"socialLinks":{}}}],"slug":"react-native-next-chapter","displayOrder":4,"recordingLink":null,"type":"SESSION","isPlenumSession":false},{"id":"rc-session-4","title":"Server Components Deep Dive","about":"An in-depth look at React Server Components, how they work, and best practices for adoption.","since":"2025-05-15T11:15:00","endsAt":"2025-05-15T11:45:00","trackName":"Server Components","room":"Room B","roomOther":"Room B","presenters":[{"attributes":{"name":"Dan Abramov","tagline":"React Team","company":{"data":{"attributes":{"name":"Independent"}}},"profilePhoto":{"data":null},"socialLinks":{"twitter":"https://twitter.com/dan_abramov"}}}],"slug":"server-components-deep-dive","displayOrder":5,"recordingLink":null,"type":"SESSION","isPlenumSession":false}]);}),
"[project]/Documents/Sri/appConf/app/data/schedules/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Schedule Data Registry
// Dynamically loads schedule data for each conference
__turbopack_context__.s([
    "getAllScheduleSlugs",
    ()=>getAllScheduleSlugs,
    "getScheduleData",
    ()=>getScheduleData,
    "scheduleDataExists",
    ()=>scheduleDataExists
]);
// Import schedule data for each conference
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$data$2f$schedules$2f$ai$2d$engineer$2d$2025$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/data/schedules/ai-engineer-2025.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$data$2f$schedules$2f$react$2d$conf$2d$2025$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/data/schedules/react-conf-2025.json (json)");
;
;
// Schedule registry
const scheduleRegistry = {
    'ai-engineer-2025': __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$data$2f$schedules$2f$ai$2d$engineer$2d$2025$2e$json__$28$json$29$__["default"],
    'react-conf-2025': __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$data$2f$schedules$2f$react$2d$conf$2d$2025$2e$json__$28$json$29$__["default"]
};
function getScheduleData(slug) {
    return scheduleRegistry[slug] || [];
}
function scheduleDataExists(slug) {
    return slug in scheduleRegistry;
}
function getAllScheduleSlugs() {
    return Object.keys(scheduleRegistry);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/lib/theme-injector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeInjector",
    ()=>ThemeInjector,
    "generateThemeCSS",
    ()=>generateThemeCSS,
    "useThemeColors",
    ()=>useThemeColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ThemeInjector({ config }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeInjector.useEffect": ()=>{
            const root = document.documentElement;
            const { tracks } = config;
            // Only inject track colors - these are conference-specific
            // and don't conflict with the light/dark theme system
            Object.entries(tracks).forEach({
                "ThemeInjector.useEffect": ([trackName, trackConfig])=>{
                    const cssVarName = `--color-track-${trackName.toLowerCase().replace(/\s+/g, '-')}`;
                    root.style.setProperty(cssVarName, trackConfig.color);
                }
            }["ThemeInjector.useEffect"]);
            // Cleanup function - remove track colors when unmounting
            return ({
                "ThemeInjector.useEffect": ()=>{
                    Object.entries(tracks).forEach({
                        "ThemeInjector.useEffect": ([trackName])=>{
                            const cssVarName = `--color-track-${trackName.toLowerCase().replace(/\s+/g, '-')}`;
                            root.style.removeProperty(cssVarName);
                        }
                    }["ThemeInjector.useEffect"]);
                }
            })["ThemeInjector.useEffect"];
        }
    }["ThemeInjector.useEffect"], [
        config
    ]);
    return null;
}
_s(ThemeInjector, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ThemeInjector;
function generateThemeCSS(theme, tracks) {
    const trackVars = Object.entries(tracks).map(([name, config])=>`--color-track-${name.toLowerCase().replace(/\s+/g, '-')}: ${config.color};`).join('\n  ');
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
function useThemeColors(config) {
    return {
        ...config.theme,
        getTrackColor: (trackName)=>{
            return config.tracks[trackName]?.color || config.theme.textMutedColor;
        }
    };
}
var _c;
__turbopack_context__.k.register(_c, "ThemeInjector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/lib/config-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConferenceProvider",
    ()=>ConferenceProvider,
    "useConference",
    ()=>useConference,
    "useConferenceConfig",
    ()=>useConferenceConfig,
    "useDateFormatter",
    ()=>useDateFormatter,
    "useSessionTypeLabel",
    ()=>useSessionTypeLabel,
    "useSessions",
    ()=>useSessions,
    "useTimeFormatter",
    ()=>useTimeFormatter,
    "useTrackColor",
    ()=>useTrackColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$theme$2d$injector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/theme-injector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
'use client';
;
;
const ConferenceContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ConferenceProvider({ config, sessions, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConferenceContext.Provider, {
        value: {
            config,
            sessions
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$theme$2d$injector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeInjector"], {
                config: config
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/lib/config-provider.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/lib/config-provider.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = ConferenceProvider;
function useConference() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ConferenceContext);
    if (!context) {
        throw new Error('useConference must be used within a ConferenceProvider');
    }
    return context;
}
_s(useConference, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function useConferenceConfig() {
    _s1();
    const { config } = useConference();
    return config;
}
_s1(useConferenceConfig, "wGpNacp8UqfafIITnTpV/66fqOc=", false, function() {
    return [
        useConference
    ];
});
function useSessions() {
    _s2();
    const { sessions } = useConference();
    return sessions;
}
_s2(useSessions, "Cc8d2fwiuhP/IxqTr5oDK0Cz3lM=", false, function() {
    return [
        useConference
    ];
});
function useTrackColor(trackName) {
    _s3();
    const { config } = useConference();
    return config.tracks[trackName]?.color || config.theme.textMutedColor;
}
_s3(useTrackColor, "wGpNacp8UqfafIITnTpV/66fqOc=", false, function() {
    return [
        useConference
    ];
});
function useSessionTypeLabel(type) {
    _s4();
    const { config } = useConference();
    return config.sessionTypes[type]?.label || type;
}
_s4(useSessionTypeLabel, "wGpNacp8UqfafIITnTpV/66fqOc=", false, function() {
    return [
        useConference
    ];
});
function useTimeFormatter() {
    _s5();
    const { config } = useConference();
    return (date)=>{
        return date.toLocaleTimeString(config.locale, {
            hour: 'numeric',
            minute: '2-digit',
            hour12: config.timeFormat === '12h'
        });
    };
}
_s5(useTimeFormatter, "wGpNacp8UqfafIITnTpV/66fqOc=", false, function() {
    return [
        useConference
    ];
});
function useDateFormatter() {
    _s6();
    const { config } = useConference();
    return (date)=>{
        return date.toLocaleDateString(config.locale, {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };
}
_s6(useDateFormatter, "wGpNacp8UqfafIITnTpV/66fqOc=", false, function() {
    return [
        useConference
    ];
});
var _c;
__turbopack_context__.k.register(_c, "ConferenceProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const themes = [
    {
        value: 'light',
        label: 'Light',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
    },
    {
        value: 'dark',
        label: 'Dark',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"]
    },
    {
        value: 'system',
        label: 'System',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"]
    }
];
function ThemeToggle() {
    _s();
    const { theme, setTheme, mounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "ThemeToggle.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["ThemeToggle.useEffect"];
        }
    }["ThemeToggle.useEffect"], []);
    // Close on escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            function handleEscape(event) {
                if (event.key === 'Escape') {
                    setIsOpen(false);
                }
            }
            document.addEventListener('keydown', handleEscape);
            return ({
                "ThemeToggle.useEffect": ()=>document.removeEventListener('keydown', handleEscape)
            })["ThemeToggle.useEffect"];
        }
    }["ThemeToggle.useEffect"], []);
    // Always show System icon on server and before hydration to prevent mismatch
    const currentTheme = mounted ? themes.find((t)=>t.value === theme) || themes[2] : themes[2]; // System theme as default for SSR
    const CurrentIcon = currentTheme.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200', 'bg-[var(--color-surface)] border border-[var(--color-border)]', 'hover:bg-[var(--color-surface-elevated)] hover:border-[var(--color-border-subtle)]', 'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]', 'text-[var(--color-text-secondary)]'),
                "aria-label": "Toggle theme",
                "aria-expanded": isOpen,
                "aria-haspopup": "listbox",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentIcon, {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: currentTheme.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-3.5 h-3.5 transition-transform duration-200', isOpen && 'rotate-180')
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
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute right-0 top-full mt-1.5 z-50', 'min-w-[140px] p-1 rounded-lg', 'bg-[var(--color-surface-elevated)] border border-[var(--color-border)]', 'shadow-lg shadow-black/20', 'animate-fade-in'),
                role: "listbox",
                "aria-label": "Theme options",
                children: themes.map((t)=>{
                    const Icon = t.icon;
                    const isSelected = theme === t.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setTheme(t.value);
                            setIsOpen(false);
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors', 'hover:bg-[var(--color-surface)]', isSelected ? 'text-[var(--color-primary)] font-medium' : 'text-[var(--color-text-secondary)]'),
                        role: "option",
                        "aria-selected": isSelected,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 text-left",
                                children: t.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this),
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
_s(ThemeToggle, "IKtQ0w7BBXfbYF8jQ14PcwBH6iI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/lib/use-analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnalytics",
    ()=>useAnalytics,
    "useAnalyticsSimple",
    ()=>useAnalyticsSimple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/posthog-js/react/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$config$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/config-provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function useAnalytics() {
    _s();
    const posthog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostHog"])();
    const conference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$config$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConference"])();
    // Get conference context for all events
    const getConferenceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[getConferenceContext]": ()=>{
            if (!conference?.config) return {};
            return {
                conference_slug: conference.config.slug,
                conference_name: conference.config.name,
                conference_year: conference.config.year,
                conference_location: conference.config.location
            };
        }
    }["useAnalytics.useCallback[getConferenceContext]"], [
        conference
    ]);
    // Generic track function with conference context
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[track]": (event, properties)=>{
            if (!posthog) return;
            posthog.capture(event, {
                ...properties,
                ...getConferenceContext(),
                timestamp: new Date().toISOString()
            });
        }
    }["useAnalytics.useCallback[track]"], [
        posthog,
        getConferenceContext
    ]);
    // Convenience methods for common events
    const trackSessionViewed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackSessionViewed]": (session)=>{
            track('session_viewed', {
                session_id: session.id,
                session_title: session.title,
                track: session.track,
                room: session.room,
                speakers: session.speakers
            });
        }
    }["useAnalytics.useCallback[trackSessionViewed]"], [
        track
    ]);
    const trackSessionBookmarked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackSessionBookmarked]": (session, action)=>{
            track('session_bookmarked', {
                session_id: session.id,
                session_title: session.title,
                track: session.track,
                action
            });
        }
    }["useAnalytics.useCallback[trackSessionBookmarked]"], [
        track
    ]);
    const trackDayChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackDayChanged]": (fromDay, toDay)=>{
            track('day_changed', {
                from_day: fromDay,
                to_day: toDay
            });
        }
    }["useAnalytics.useCallback[trackDayChanged]"], [
        track
    ]);
    const trackViewModeChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackViewModeChanged]": (fromMode, toMode)=>{
            track('view_mode_changed', {
                from_mode: fromMode,
                to_mode: toMode
            });
        }
    }["useAnalytics.useCallback[trackViewModeChanged]"], [
        track
    ]);
    const trackSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackSearch]": (query, resultsCount)=>{
            // Only track if query is meaningful (avoid tracking every keystroke)
            if (query.length >= 2) {
                track('search_performed', {
                    query,
                    results_count: resultsCount
                });
            }
        }
    }["useAnalytics.useCallback[trackSearch]"], [
        track
    ]);
    const trackFilterApplied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackFilterApplied]": (filterType, filterValue)=>{
            track('filter_applied', {
                filter_type: filterType,
                filter_value: filterValue
            });
        }
    }["useAnalytics.useCallback[trackFilterApplied]"], [
        track
    ]);
    const trackFilterCleared = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackFilterCleared]": (filtersCleared)=>{
            track('filter_cleared', {
                filters_cleared: filtersCleared
            });
        }
    }["useAnalytics.useCallback[trackFilterCleared]"], [
        track
    ]);
    const trackNowNextClicked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackNowNextClicked]": (session, bannerType)=>{
            track('now_next_clicked', {
                session_id: session.id,
                session_title: session.title,
                banner_type: bannerType
            });
        }
    }["useAnalytics.useCallback[trackNowNextClicked]"], [
        track
    ]);
    const trackExternalLinkClicked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackExternalLinkClicked]": (linkType, url)=>{
            track('external_link_clicked', {
                link_type: linkType,
                url
            });
        }
    }["useAnalytics.useCallback[trackExternalLinkClicked]"], [
        track
    ]);
    const trackThemeChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackThemeChanged]": (fromTheme, toTheme)=>{
            track('theme_changed', {
                from_theme: fromTheme,
                to_theme: toTheme
            });
        }
    }["useAnalytics.useCallback[trackThemeChanged]"], [
        track
    ]);
    const trackSessionShared = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[trackSessionShared]": (session, shareMethod)=>{
            track('session_shared', {
                session_id: session.id,
                session_title: session.title,
                share_method: shareMethod
            });
        }
    }["useAnalytics.useCallback[trackSessionShared]"], [
        track
    ]);
    // Identify user (for logged-in users in future)
    const identifyUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[identifyUser]": (userId, traits)=>{
            if (!posthog) return;
            posthog.identify(userId, {
                ...traits,
                ...getConferenceContext()
            });
        }
    }["useAnalytics.useCallback[identifyUser]"], [
        posthog,
        getConferenceContext
    ]);
    // Reset user (for logout)
    const resetUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalytics.useCallback[resetUser]": ()=>{
            if (!posthog) return;
            posthog.reset();
        }
    }["useAnalytics.useCallback[resetUser]"], [
        posthog
    ]);
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
        resetUser
    };
}
_s(useAnalytics, "FhDBChzukD+3gKxIRcjTKA9xoZw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostHog"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$config$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConference"]
    ];
});
function useAnalyticsSimple() {
    _s1();
    const posthog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostHog"])();
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalyticsSimple.useCallback[track]": (event, properties)=>{
            if (!posthog) return;
            posthog.capture(event, {
                ...properties,
                timestamp: new Date().toISOString()
            });
        }
    }["useAnalyticsSimple.useCallback[track]"], [
        posthog
    ]);
    return {
        track
    };
}
_s1(useAnalyticsSimple, "9Adc7GWDZaWjkRxLBNmElc7Xlcs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostHog"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConferencePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$DayNavigator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/schedule/DayNavigator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$ViewToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/schedule/ViewToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/schedule/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$ListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/schedule/ListView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$TimelineView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/schedule/TimelineView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$NowNextBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/schedule/NowNextBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$bookmarks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/use-bookmarks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/schedule-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/config/conferences/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$data$2f$schedules$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/data/schedules/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$config$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/config-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/components/ui/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/app/lib/use-analytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/Sri/appConf/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function ConferencePage({ params }) {
    const { conferenceSlug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$config$2f$conferences$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConferenceConfig"])(conferenceSlug);
    const sessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$data$2f$schedules$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScheduleData"])(conferenceSlug);
    if (!config) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$config$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConferenceProvider"], {
        config: config,
        sessions: sessions,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScheduleContent, {
            config: config,
            sessions: sessions
        }, void 0, false, {
            fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = ConferencePage;
function ScheduleContent({ config, sessions }) {
    _s();
    const [activeDay, setActiveDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(config.days[config.defaultDayIndex]?.date || config.days[0]?.date);
    const localeConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLocaleConfig"])(config);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('list');
    const [selectedTrack, setSelectedTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedRoom, setSelectedRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showBookmarksOnly, setShowBookmarksOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { bookmarks, toggleBookmark, isBookmarked } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$bookmarks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookmarks"])();
    const { trackDayChanged, trackViewModeChanged, trackSearch, trackFilterApplied, trackFilterCleared, trackSessionBookmarked, trackNowNextClicked } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScheduleContent.useMemo[tracks]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueTracks"])(sessions)
    }["ScheduleContent.useMemo[tracks]"], [
        sessions
    ]);
    const rooms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScheduleContent.useMemo[rooms]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueRooms"])(sessions)
    }["ScheduleContent.useMemo[rooms]"], [
        sessions
    ]);
    // Debounced search tracking
    const searchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScheduleContent.useEffect": ()=>{
            if (searchQuery.length >= 2) {
                clearTimeout(searchTimeoutRef.current);
                searchTimeoutRef.current = setTimeout({
                    "ScheduleContent.useEffect": ()=>{
                        trackSearch(searchQuery, filteredSessions.length);
                    }
                }["ScheduleContent.useEffect"], 500);
            }
            return ({
                "ScheduleContent.useEffect": ()=>clearTimeout(searchTimeoutRef.current)
            })["ScheduleContent.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ScheduleContent.useEffect"], [
        searchQuery
    ]);
    // Tracked handlers
    const handleDayChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScheduleContent.useCallback[handleDayChange]": (newDay)=>{
            trackDayChanged(activeDay, newDay);
            setActiveDay(newDay);
        }
    }["ScheduleContent.useCallback[handleDayChange]"], [
        activeDay,
        trackDayChanged
    ]);
    const handleViewModeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScheduleContent.useCallback[handleViewModeChange]": (newMode)=>{
            trackViewModeChanged(viewMode, newMode);
            setViewMode(newMode);
        }
    }["ScheduleContent.useCallback[handleViewModeChange]"], [
        viewMode,
        trackViewModeChanged
    ]);
    const handleTrackChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScheduleContent.useCallback[handleTrackChange]": (track)=>{
            if (track !== 'all') {
                trackFilterApplied('track', track);
            }
            setSelectedTrack(track);
        }
    }["ScheduleContent.useCallback[handleTrackChange]"], [
        trackFilterApplied
    ]);
    const handleRoomChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScheduleContent.useCallback[handleRoomChange]": (room)=>{
            if (room !== 'all') {
                trackFilterApplied('room', room);
            }
            setSelectedRoom(room);
        }
    }["ScheduleContent.useCallback[handleRoomChange]"], [
        trackFilterApplied
    ]);
    const handleBookmarksOnlyChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScheduleContent.useCallback[handleBookmarksOnlyChange]": (show)=>{
            if (show) {
                trackFilterApplied('bookmarks', 'only');
            }
            setShowBookmarksOnly(show);
        }
    }["ScheduleContent.useCallback[handleBookmarksOnlyChange]"], [
        trackFilterApplied
    ]);
    const handleToggleBookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScheduleContent.useCallback[handleToggleBookmark]": (sessionId)=>{
            const session = sessions.find({
                "ScheduleContent.useCallback[handleToggleBookmark].session": (s)=>s.id === sessionId
            }["ScheduleContent.useCallback[handleToggleBookmark].session"]);
            if (session) {
                const action = isBookmarked(sessionId) ? 'remove' : 'add';
                trackSessionBookmarked({
                    id: session.id,
                    title: session.title,
                    track: session.trackName
                }, action);
            }
            toggleBookmark(sessionId);
        }
    }["ScheduleContent.useCallback[handleToggleBookmark]"], [
        sessions,
        isBookmarked,
        trackSessionBookmarked,
        toggleBookmark
    ]);
    const handleNowNextClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScheduleContent.useCallback[handleNowNextClick]": (sessionId, bannerType)=>{
            const session = sessions.find({
                "ScheduleContent.useCallback[handleNowNextClick].session": (s)=>s.id === sessionId
            }["ScheduleContent.useCallback[handleNowNextClick].session"]);
            if (session) {
                trackNowNextClicked({
                    id: session.id,
                    title: session.title
                }, bannerType);
            }
            const element = document.getElementById(`session-${sessionId}`);
            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }["ScheduleContent.useCallback[handleNowNextClick]"], [
        sessions,
        trackNowNextClicked
    ]);
    const filteredSessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScheduleContent.useMemo[filteredSessions]": ()=>{
            let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$schedule$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionsByDay"])(sessions, activeDay);
            if (selectedTrack !== 'all') {
                result = result.filter({
                    "ScheduleContent.useMemo[filteredSessions]": (s)=>s.trackName === selectedTrack
                }["ScheduleContent.useMemo[filteredSessions]"]);
            }
            if (selectedRoom !== 'all') {
                result = result.filter({
                    "ScheduleContent.useMemo[filteredSessions]": (s)=>s.room === selectedRoom
                }["ScheduleContent.useMemo[filteredSessions]"]);
            }
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                result = result.filter({
                    "ScheduleContent.useMemo[filteredSessions]": (s)=>s.title.toLowerCase().includes(query) || s.about.toLowerCase().includes(query) || s.presenters.some({
                            "ScheduleContent.useMemo[filteredSessions]": (p)=>p.attributes.name.toLowerCase().includes(query) || p.attributes.company?.data?.attributes?.name?.toLowerCase().includes(query)
                        }["ScheduleContent.useMemo[filteredSessions]"])
                }["ScheduleContent.useMemo[filteredSessions]"]);
            }
            if (showBookmarksOnly) {
                result = result.filter({
                    "ScheduleContent.useMemo[filteredSessions]": (s)=>isBookmarked(s.id)
                }["ScheduleContent.useMemo[filteredSessions]"]);
            }
            return result;
        }
    }["ScheduleContent.useMemo[filteredSessions]"], [
        sessions,
        activeDay,
        selectedTrack,
        selectedRoom,
        searchQuery,
        showBookmarksOnly,
        isBookmarked
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-[var(--color-background)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-50 shadow-[var(--shadow-md)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "bg-[var(--color-surface)] border-b border-[var(--color-border)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl md:text-2xl font-bold text-[var(--color-text-primary)] tracking-tight",
                                                children: config.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-3 mt-1 text-sm text-[var(--color-text-secondary)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "w-4 h-4 text-[var(--color-text-muted)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 21
                                                            }, this),
                                                            config.dateRange
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-4 h-4 text-[var(--color-text-muted)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this),
                                                            config.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$ViewToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewToggle"], {
                                                viewMode: viewMode,
                                                onViewModeChange: handleViewModeChange
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$DayNavigator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayNavigator"], {
                        days: config.days,
                        activeDay: activeDay,
                        onDayChange: handleDayChange
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterBar"], {
                        tracks: tracks,
                        rooms: rooms,
                        selectedTrack: selectedTrack,
                        selectedRoom: selectedRoom,
                        searchQuery: searchQuery,
                        showBookmarksOnly: showBookmarksOnly,
                        bookmarkCount: bookmarks.length,
                        onTrackChange: handleTrackChange,
                        onRoomChange: handleRoomChange,
                        onSearchChange: setSearchQuery,
                        onBookmarksOnlyChange: handleBookmarksOnlyChange
                    }, void 0, false, {
                        fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$NowNextBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NowNextBanner"], {
                sessions: filteredSessions,
                localeConfig: localeConfig,
                onSessionClick: handleNowNextClick
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-7xl mx-auto w-full px-4 pb-8",
                children: filteredSessions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-20 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-md)] flex items-center justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-10 h-10 text-[var(--color-text-muted)]",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 1.5,
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-[var(--color-text-primary)] mb-2",
                            children: "No sessions found"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--color-text-muted)] max-w-sm leading-relaxed",
                            children: "Try adjusting your filters or search query to find what you're looking for."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                    lineNumber: 219,
                    columnNumber: 11
                }, this) : viewMode === 'list' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$ListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListView"], {
                    sessions: filteredSessions,
                    isBookmarked: isBookmarked,
                    onToggleBookmark: handleToggleBookmark,
                    tracks: config.tracks,
                    localeConfig: localeConfig
                }, void 0, false, {
                    fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                    lineNumber: 241,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$components$2f$schedule$2f$TimelineView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineView"], {
                    sessions: filteredSessions,
                    isBookmarked: isBookmarked,
                    onToggleBookmark: handleToggleBookmark,
                    tracks: config.tracks,
                    localeConfig: localeConfig
                }, void 0, false, {
                    fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-[var(--color-surface)] border-t border-[var(--color-border)] py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-[var(--color-text-secondary)]",
                            children: config.footerText
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        config.copyrightText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-[var(--color-text-muted)]",
                            children: config.copyrightText
                        }, void 0, false, {
                            fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Sri/appConf/app/[conferenceSlug]/page.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s(ScheduleContent, "GW8sa3MtXvrLPhwC7zxaPGcRcqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$bookmarks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookmarks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Sri$2f$appConf$2f$app$2f$lib$2f$use$2d$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c1 = ScheduleContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConferencePage");
__turbopack_context__.k.register(_c1, "ScheduleContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Sri_appConf_app_4f88b920._.js.map