# Phase 0 Research: Bon Vivant Bistro Landing Page

**Feature**: `001-bon-vivant-landing`  
**Date**: 2026-10-11  
**Status**: Completed  

---

## 1. Architecture & Framework: Next.js 15 App Router

- **Decision**: Next.js 15 with App Router (`app/` directory), React Server Components (RSC) by default, and selective Client Components (`"use client"`).
- **Rationale**:
  - Maximizes performance (Time to First Byte, First Contentful Paint) by pre-rendering static marketing sections on the server.
  - Keeps client-side JavaScript minimal: static copy, imagery, and structured data do not ship hydration overhead.
  - Native Route Handlers (`app/api/...`) provide built-in server endpoints for handling reservation form submissions securely without needing an external backend.
- **Client/Server Boundary Strategy**:
  - **Server Components (Default)**: Layout, Hero shell, Story/Chef introduction, Static Gallery grid, Reviews showcase, Contact info & Hours, Footer.
  - **Client Components (`"use client"`)**:
    - `Navbar`: scroll listener, mobile drawer state, smooth scroll triggers.
    - `LanguageSwitcher`: client context / state toggle between VI and EN.
    - `MenuSection`: category tab filtering animation.
    - `ReservationForm`: interactive inputs, client-side validation, submit loading state, and modal/toast confirmation.
- **Alternatives Considered**:
  - *Vite + React SPA*: Lacks server-side pre-rendering, leading to slower initial mobile load, poor SEO for restaurant search engines, and requires a separate server for the Resend email API.
  - *Next.js Pages Router*: Older architecture; lacks granular streaming, Server Components, and the modern caching/layout primitives of Next.js 15.

---

## 2. Design System & Typography

- **Decision**: Tailwind CSS paired with `@next/font/google` using **Playfair Display** (headings) and **Lora** (body/accents).
- **Rationale**:
  - **Aesthetics**: Playfair Display is an iconic high-contrast serif typeface that instantly conveys classic Parisian bistro elegance, warmth, and culinary prestige. Lora offers high readability with warm, calligraphic curves suited for descriptions, quotes, and menus.
  - **Zero Layout Shift**: `next/font` automatically optimizes font files (self-hosted, preloaded, font-display swap) to eliminate flash of unstyled text (FOUT) and layout shifts (CLS = 0).
  - **Palette**: Primary Bordeaux red (`#6B1E2E`), Vanilla cream background (`#FDFBF7` with alternating section `#F5EFE4`), Antique gold accent (`#B8975A`), Dark espresso primary text (`#2A1A1D`), and muted secondary text (`#6B5A5D`). All combinations verified for WCAG 2.1 AA contrast compliance (>4.5:1).
  - **Styling Rules**: Generous whitespace, delicate hairline gold dividers, Playfair Display serif headers, crisp/subtle photo radiuses, zero heavy drop shadows.
  - *Inter for body*: Modern and clean, but too tech/corporate; Lora creates a significantly warmer, more authentic bistro feeling.

---

## 3. Motion & Micro-interactions: Framer Motion

- **Decision**: Framer Motion for entrance animations, staggered menu tab transitions, and subtle hover interactions.
- **Rationale**:
  - Declarative, robust animation API with built-in layout animation (`layoutId`) for smooth tab switching between menu categories.
  - Seamless support for `prefers-reduced-motion` to meet accessibility standards (Constitution requirement).
  - Keeps animations restrained and refined (subtle fades and 10–20px slide-ups) to prevent distracting from the dining content.
- **Alternatives Considered**:
  - *Pure CSS transitions*: Feasible for basic hovers, but clunky for orchestrated staggered entrance reveals and animated layout switching of menu tabs.

---

## 4. Form Handling & Validation: React Hook Form + Zod

- **Decision**: React Hook Form combined with `@hookform/resolvers/zod` and shared Zod schemas.
- **Rationale**:
  - **Zero re-render performance**: React Hook Form relies on uncontrolled inputs with refs, minimizing re-renders on mobile devices during typing.
  - **Single Source of Truth**: The Zod schema defines both runtime validation and TypeScript inferred types (`z.infer<typeof ReservationSchema>`).
  - **Dual-Layer Validation**: The exact same Zod schema is reused client-side for immediate user feedback and server-side in the API route to reject malformed requests.
- **Alternatives Considered**:
  - *Native Form Action / HTML5 validation*: Lacks fine-grained localized error messages and rich feedback UI.

---

## 5. Email Notification Pipeline: Resend API

- **Decision**: Next.js Route Handler (`app/api/reservation/route.ts`) invoking the Resend Node SDK.
- **Rationale**:
  - Resend provides reliable, modern transactional email delivery with zero infrastructure management.
  - Clean HTML email templates for restaurant hosts detailing: Guest Name, Contact Number, Email, Date, Time, Party Size, and Special Notes.
  - Graceful fallback: If `RESEND_API_KEY` is not configured (e.g. local preview), the route logs the booking payload and returns a simulated successful acknowledgment so development/testing never blocks.
- **Alternatives Considered**:
  - *Nodemailer with SMTP*: Requires managing SMTP credentials and server connection pools; more fragile in serverless environments.

---

## 6. Content Decoupling & Storage

- **Decision**: Structured TypeScript content files under `src/data/`:
  - `src/data/restaurant.ts`: Brand name, address, hours, contact, chef bio, story.
  - `src/data/menu.ts`: Menu items with bilingual titles/descriptions, pricing in VND, categories.
  - `src/data/reviews.ts`: Customer testimonials, ratings, reviewer details.
  - `src/data/gallery.ts`: Curated photography metadata (dishes & venue ambiance).
- **Rationale**:
  - 100% decoupled from React UI components as mandated by Constitution Principle IV.
  - Fully typed with TypeScript interfaces; enables compile-time type safety without `any`.
  - Non-technical maintainers can update dishes or hours simply by modifying a data file.

---

## 7. Lightweight Localization: `vi.ts` & `en.ts`

- **Decision**: Lightweight TypeScript dictionary objects (`src/locales/vi.ts` and `src/locales/en.ts`) managed through a lightweight React `LanguageContext`.
- **Rationale**:
  - Avoids heavyweight i18n libraries (`next-intl`, `react-i18next`) that introduce bundle bloat and routing complexity for a single-page landing page.
  - Instant in-place language switching without page reloads, preserves scroll position, and persists preference in `localStorage`.
  - Shared TypeScript dictionary type ensures 100% parity: missing translation keys fail at compile-time.
- **Alternatives Considered**:
  - *Subpath routing (`/vi`, `/en`)*: Causes full page reloads, scroll resets, and adds router configuration overhead unnecessary for a single-page landing site.

---

## 8. Asset Optimization & Performance (Lighthouse > 90)

- **Decision**: Next.js `next/image` with AVIF/WebP formats, responsive `sizes` attribute, priority flag for Hero media, and lazy loading for below-the-fold assets.
- **Rationale**:
  - Guaranteed Core Web Vitals compliance (LCP < 2.5s, CLS < 0.1).
  - Explicit aspect ratios on gallery and menu images eliminate layout shifts.
