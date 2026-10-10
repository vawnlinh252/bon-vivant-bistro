# Implementation Plan: Bon Vivant Bistro Landing Page

**Branch**: `001-bon-vivant-landing` | **Date**: 2026-10-11 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-bon-vivant-landing/spec.md` and user tech stack parameters (Next.js 15 App Router, TypeScript strict, Tailwind CSS, Framer Motion, React Hook Form + Zod, Resend, Vercel deployment).

---

## Summary

Build an elegant, high-performance landing page for **Bon Vivant Bistro** (Ho Chi Minh City) showcasing classic Parisian bistro dining. The technical approach leverages **Next.js 15 App Router** with React Server Components for marketing content, client-side React Hook Form + Zod for table bookings, Next.js Route Handler + Resend for email dispatch, Framer Motion for subtle transitions, and in-memory bilingual dictionary files (`vi.ts` / `en.ts`) for zero-latency language switching.

---

## Technical Context

**Language/Version**: TypeScript 5.x (`strict: true`, no `any`)  
**Primary Dependencies**: Next.js 15 (App Router), React 19 / 18, Tailwind CSS, Framer Motion, React Hook Form, `@hookform/resolvers`, Zod, Resend SDK, Lucide React (icons)  
**Storage**: Static and structured content in TypeScript files under `src/data/`; no external database required for v1 landing page  
**Testing**: TypeScript strict check (`tsc --noEmit`), ESLint (`next lint`), end-to-end user journey validation via [quickstart.md](./quickstart.md)  
**Target Platform**: Web (Mobile-first responsive across smartphones, tablets, and desktop), deployed on Vercel  
**Project Type**: Web Application (Next.js single-page landing site with serverless API route)  
**Performance Goals**: Google Lighthouse > 90 (Performance, Accessibility, Best Practices, SEO); LCP < 2.5s; CLS < 0.1; First-load JS < 80kB  
**Constraints**: Zero `any` in TypeScript; seamless bilingual toggle (VI/EN) without page reloads; accessible touch targets (>= 44x44px); non-blocking reservation API  
**Scale/Scope**: Single-page marketing website with 8 sections, 1 modal/confirmation dialog, 1 API route, bilingual dictionaries  

---

## Constitution Check

*GATE: Evaluated against `.specify/memory/constitution.md`*

| Constitution Principle | Status | Implementation Evidence |
|---|---|---|
| **I. Strict TypeScript (Zero `any`)** | **PASS** | `tsconfig.json` has `strict: true`, `noImplicitAny: true`. All data entities, Zod forms, and props typed explicitly with exported interfaces. |
| **II. Next.js App Router & Tailwind CSS** | **PASS** | Built on Next.js 15 `app/` directory with Server Components by default; Client Components limited to interactive widgets; styled exclusively with Tailwind CSS design tokens. |
| **III. Mobile-First & Responsive** | **PASS** | Tailwind mobile-first utility classes (`base`, `md:`, `lg:`). Minimum 44x44px touch targets; no horizontal overflow. |
| **IV. Component Architecture & Content Decoupling** | **PASS** | All restaurant copy, menu items, schedules, reviews, and gallery links isolated in `src/data/` and `src/locales/`. Zero hardcoded business copy in TSX. |
| **V. Performance Budget (Lighthouse > 90)** | **PASS** | `next/image` with WebP/AVIF, responsive `sizes`, explicit aspect ratios; `next/font` for zero CLS; lazy loading below-the-fold media. |
| **VI. Native Bilingual Localization (VI / EN)** | **PASS** | Lightweight dictionary switcher (`vi.ts`, `en.ts`) with type-safe key parity and React Context for instant client updates without page reload. |
| **VII. Bespoke French Bistro Aesthetics** | **PASS** | Typography pairing of Playfair Display and Lora; Parisian bistro palette (Primary Bordeaux `#6B1E2E`, Vanilla cream `#FDFBF7` / `#F5EFE4`, Antique gold `#B8975A`, Text `#2A1A1D` / `#6B5A5D`), generous whitespace, delicate gold dividers, WCAG AA compliant. |

---

## Project Structure

### Documentation (this feature)

```text
specs/001-bon-vivant-landing/
├── spec.md              # Feature specification
├── plan.md              # This implementation plan
├── research.md          # Phase 0 architectural decisions & tech evaluation
├── data-model.md        # Phase 1 data entities, types, and Zod schemas
├── quickstart.md        # Phase 1 runnable validation scenarios
├── contracts/
│   └── reservation-api.md  # POST /api/reservation contract
└── checklists/
    └── requirements.md  # Specification quality checklist
```

### Source Code Layout

```text
src/
├── app/
│   ├── layout.tsx             # Root layout with fonts, metadata, LanguageProvider
│   ├── page.tsx               # Main landing page assembling sections
│   ├── globals.css            # Tailwind directives, CSS variables, smooth scroll
│   └── api/
│       └── reservation/
│           └── route.ts       # POST handler using Zod + Resend
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky navigation with mobile drawer & language switcher
│   │   └── Footer.tsx         # Brand footer with opening hours and contact summary
│   ├── sections/
│   │   ├── Hero.tsx           # Fullscreen hero with CTA
│   │   ├── About.tsx          # Bistro history, chef introduction & philosophy
│   │   ├── MenuSection.tsx    # Categorized menu with tab filtering (Framer Motion)
│   │   ├── Gallery.tsx        # High-res photo grid (Cuisine & Ambiance)
│   │   ├── Reviews.tsx        # Customer testimonials & rating cards
│   │   ├── Reservation.tsx    # Table booking form (React Hook Form + Zod)
│   │   └── Contact.tsx        # Location, address, map embed, operating hours
│   └── ui/
│       ├── Button.tsx         # Reusable styled button component
│       ├── Input.tsx          # Accessible form input with error state
│       └── Modal.tsx          # Confirmation dialog for booking
├── context/
│   └── LanguageContext.tsx    # Lightweight VI/EN context provider
├── data/
│   ├── restaurant.ts          # Restaurant profile, chef, address, schedules
│   ├── menu.ts                # Structured menu items & categories
│   ├── reviews.ts             # Testimonials data
│   └── gallery.ts             # Gallery items and aspect ratios
├── locales/
│   ├── vi.ts                  # Vietnamese UI translations
│   └── en.ts                  # English UI translations
├── lib/
│   ├── email.ts               # Resend client helper & HTML template
│   └── utils.ts               # Tailwind class merger (clsx + twMerge)
└── types/
    ├── index.ts               # Shared TypeScript interfaces (MenuItem, etc.)
    └── reservation.ts         # Zod schemas and inferred types
```

**Structure Decision**: Standard Next.js 15 App Router single-project architecture (`src/`). Clean separation of presentation (`components/`), business content (`data/`), localization (`locales/`), and route handlers (`app/api/`).

---

## Complexity Tracking

> **Constitution Compliance**: Zero violations detected. No unjustified complexity introduced.

- **No external state management library**: React `LanguageContext` is sufficient for a single-page language toggle.
- **No heavy i18n framework**: Simple TypeScript dictionary modules avoid bundle bloat and routing overhead.
- **No external database in v1**: Restaurant data is statically compiled from typed data files for maximum speed and zero hosting maintenance cost.
