<!--
SYNC IMPACT REPORT
==================
Version Change: Unratified Scaffold -> 1.0.0
Modified Principles:
  - [PRINCIPLE_1_NAME] -> I. Strict TypeScript Discipline (Zero `any`)
  - [PRINCIPLE_2_NAME] -> II. Next.js App Router & Tailwind CSS Foundation
  - [PRINCIPLE_3_NAME] -> III. Mobile-First & Responsive Excellence
  - [PRINCIPLE_4_NAME] -> IV. Modular Component Architecture & Content Decoupling
  - [PRINCIPLE_5_NAME] -> V. Performance Budget & Asset Optimization (Lighthouse > 90)
Added Principles & Sections:
  - Principle VI. Native Bilingual Localization (Vietnamese & English)
  - Principle VII. Bespoke French Haute Cuisine Aesthetics
  - Section: Technical & Performance Standards
  - Section: Content & Development Workflow
Removed Sections:
  - None (all template placeholders replaced with project governance)
Follow-up TODOs:
  - None
-->

# French Restaurant Landing Page Constitution

## Core Principles

### I. Strict TypeScript Discipline (Zero `any`)
All application and configuration code MUST be written in TypeScript with `strict` mode enforced. The use of `any` is strictly prohibited under all circumstances. Unspecified or polymorphic data MUST be handled using TypeScript generics, discriminated unions, or `unknown` paired with runtime type narrowing. All component props, content models, and localization schemas MUST expose explicit, well-documented type interfaces.
- *Rationale*: Eliminates runtime typing errors, guarantees contract integrity across decoupled content models, and enables reliable, long-term refactoring.

### II. Next.js App Router & Tailwind CSS Foundation
The landing page MUST be built on Next.js App Router and styled using Tailwind CSS. Components MUST be React Server Components (RSC) by default; Client Components (`"use client"`) MUST be reserved strictly for stateful interactions (e.g., interactive menu filters, mobile navigation drawers, language toggle, reservation modal). Styling MUST adhere strictly to curated Tailwind utility classes, design tokens, and a cohesive design system without ad-hoc inline styling hacks.
- *Rationale*: Leverages server-side rendering for optimal TTFB, minimizes client bundle size, and maintains uniform styling rules.

### III. Mobile-First & Responsive Excellence
All layouts, typography scales, and component compositions MUST be designed and implemented mobile-first, ensuring flawless presentation across mobile (375px+), tablet (768px+), and desktop (1280px+) screens. Interactive touch targets MUST meet minimum accessibility dimensions (at least 44x44px). Horizontal scroll on the viewport is strictly prohibited. Breakpoint transitions MUST be smooth, visually balanced, and preserve typographic hierarchy.
- *Rationale*: Dining patrons overwhelmingly browse menus, check opening hours, and book tables via smartphones; a compromised mobile experience directly costs reservations.

### IV. Modular Component Architecture & Content Decoupling
UI components MUST remain small, single-responsibility, and composable. All restaurant content—including menu items, categorization, pricing, chef's notes, opening schedules, location details, story text, and awards—MUST be completely decoupled from UI presentation and stored in dedicated, strongly-typed data files or localized dictionaries. Hardcoded business data and copy inside component JSX/TSX are strictly forbidden.
- *Rationale*: Enables non-technical updates, menu season rotations, and schedule changes without altering presentation logic or risking visual regressions.

### V. Performance Budget & Asset Optimization (Lighthouse > 90)
The landing page MUST achieve and maintain a Google Lighthouse score of 90 or higher across Performance, Accessibility, Best Practices, and SEO on both mobile and desktop. All culinary and venue photography MUST be served via `next/image` with modern formats (AVIF/WebP), responsive `sizes`, explicit aspect ratios to eliminate layout shifts (CLS < 0.1), and lazy loading for below-the-fold content. External third-party scripts MUST be loaded with non-blocking Next.js script strategies.
- *Rationale*: High visual fidelity must not sacrifice loading speed; rapid load times prevent customer drop-off and maximize search engine discoverability.

### VI. Native Bilingual Localization (Vietnamese & English)
The application MUST support seamless bilingual localization in Vietnamese (`vi`) and English (`en`). All customer-facing text, accessibility aria-labels, and page metadata MUST reside in locale dictionaries. Locale switching MUST be instantaneous, preserving the user's scroll position and current view without layout distortion or text overflow.
- *Rationale*: Serves both local Vietnamese clientele and international tourists or expatriates who appreciate authentic French gastronomy.

### VII. Bespoke French Haute Cuisine Aesthetics
The visual identity MUST authentically reflect the elegance, sophistication, and heritage of French gastronomy. Design choices MUST employ editorial typography (e.g., refined serifs paired with clean sans-serif accents), a curated color palette (e.g., warm cream, deep burgundy/navy, subtle brass/gold highlights), generous negative space, and delicate micro-interactions. Off-the-shelf starter templates or generic corporate aesthetics are strictly prohibited.
- *Rationale*: French fine dining is fundamentally an artistic and sensory experience; the digital landing page must project prestige, intimacy, and culinary craftsmanship from the first second.

## Technical & Performance Standards

- **Core Web Vitals**: Largest Contentful Paint (LCP) MUST be under 2.5s; Cumulative Layout Shift (CLS) MUST be under 0.1; Interaction to Next Paint (INP) MUST be under 200ms.
- **Accessibility & SEO**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) MUST structure all page views. Meta tags, OpenGraph data, and structured schema markup (Schema.org `Restaurant`) MUST be embedded. Color contrast MUST comply with WCAG 2.1 AA standards.
- **Asset Standards**: Photographic assets MUST be compressed and served in appropriate responsive breakpoints. Heavy video or background canvas elements MUST respect `prefers-reduced-motion`.

## Content & Development Workflow

- **Data Schema Definition**: All restaurant content models MUST be typed and defined in a dedicated directory (e.g., `src/data/` or `src/content/`), with clear separation between menu, restaurant info, and localization strings.
- **Verification Gates**: Every pull request and change MUST pass type checking (`tsc --noEmit`), linting (`next lint`), and production build verification (`next build`) without errors or warnings.
- **Visual & Device Verification**: Component additions and layout changes MUST be previewed and verified on mobile, tablet, and wide desktop viewports prior to merging.

## Governance

- **Supremacy**: This Constitution represents the highest-priority architectural standard for the French Restaurant Landing Page project. All implementation tasks, component patterns, and contributions MUST comply with its principles.
- **Amendment Process**: Any amendment or deviation from these principles requires explicit documentation of rationale, assessment of impact on existing components and content schemas, and an appropriate version increment.
- **Compliance & Auditing**: All code reviews and implementation phases MUST audit against strict TypeScript rules, Lighthouse thresholds, content decoupling, and bilingual support.

**Version**: 1.0.0 | **Ratified**: 2026-10-11 | **Last Amended**: 2026-10-11
