# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project: Kaleidoscope Recovery website — Next.js 15 (App Router) + Tailwind CSS + TypeScript, deployed on Vercel.

Quick commands (zsh)
- Install deps: `npm install`
- Copy env file: `cp .env.local.example .env.local` (then edit values as needed)
- Dev server: `npm run dev` (http://localhost:3000)
- Production build: `npm run build`
- Start prod server: `npm run start`
- Type-check (no emit): `npx tsc --noEmit`
- Install Playwright browsers (first time): `npx playwright install`
- Run all Playwright tests: `npx playwright test`
- Run a single Playwright test file: `npx playwright test path/to/file.spec.ts`
- Run tests matching a title: `npx playwright test -g "partial test name"`
- Headed mode for debugging: `npx playwright test --headed`
- Screenshot utility (requires dev server running):
  - `node screenshot.js` (waits for canvas, saves updated-website.png)
  - `node test-screenshot.js` (basic capture, saves basic-screenshot.png)

Notes on linting and typecheck scripts
- The README mentions `npm run lint` and `npm run typecheck`, but package.json currently does not define these scripts and ESLint is not installed.
- You can still type-check with `npx tsc --noEmit`.
- If you want `npm run lint` and `npm run typecheck`:
  - Linting (Next’s recommended): `npm i -D eslint eslint-config-next` then add a script: `"lint": "next lint"`.
  - Typecheck: add a script: `"typecheck": "tsc --noEmit"`.

High-level architecture
- Framework and routing (App Router)
  - Global layout and metadata: `app/layout.tsx`
    - Loads Epilogue via `next/font/google`
    - Defines viewport and comprehensive SEO/OG/Twitter metadata
  - Routes:
    - `/` → `app/page.tsx` (landing with link to the Kaleidoscope experience)
    - `/kaleidoscope` → `app/kaleidoscope/page.tsx` (primary composed page)
  - The kaleidoscope page composes sections: Hero → About → Problem → Approach → Method → Testimonial → CTA → Book → Footer (all under `components/`)

- UI composition
  - Hero animation: `components/Hero/KaleidoscopeHero.tsx`
    - Client component that renders an HTML canvas and animates a kaleidoscopic effect using `requestAnimationFrame`
    - Symmetry is created by drawing one segment and mirroring it across `segments` around the center; background is a large radial gradient with subtle noise
    - Mouse movement slightly offsets the center to add parallax
    - Styles via `components/Hero/KaleidoscopeHero.module.css`
  - Navigation & CTA: `components/Navigation/Header.tsx` (scroll-aware header, smooth-scroll to section anchors), `components/shared/Footer.tsx`
  - Sections: `components/sections/*.tsx` (presentational, Framer Motion for entrance animations; see `MethodSection.tsx` for structure and animation patterns)

- Styling system
  - Tailwind CSS configured in `tailwind.config.js` with a small design token layer (colors, font families)
  - Global styles and accessibility helpers in `app/globals.css` (mobile overflow safety, reduced motion support, selection/focus styles)
  - Utility for class merging: `lib/utils/cn.ts` (clsx + tailwind-merge)
  - Color/theme constants: `lib/constants/colors.ts` (centralized brand colors and three high-level theme definitions)

- Configuration and platform
  - Next.js config: `next.config.mjs`
    - Compression on, `poweredByHeader` off
    - Image optimization allows SVG with a strict CSP on images
    - In production client builds, additional splitChunks for vendor grouping
    - Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
    - `experimental.optimizePackageImports` for `lucide-react` and `framer-motion`
  - TypeScript: `tsconfig.json` uses `moduleResolution: "bundler"`, path alias `@/*` to project root
  - Deployment: `vercel.json` + `.vercel/` linkage (Vercel’s CLI manages the project). Deploy with `vercel` or `vercel --prod` once linked

- Environment
  - Sample file: `.env.local.example` (public flags, analytics IDs, form endpoints, SMTP settings, optional DB URL, reCAPTCHA keys)
  - Next.js reads `.env.local` automatically in dev and build. Do not commit real secrets

Development workflows
- Local development
  1) `npm install`
  2) `cp .env.local.example .env.local` and set any required values
  3) `npm run dev` → visit http://localhost:3000
  4) For the kaleidoscope experience, go to `/kaleidoscope`

- E2E/testing and screenshots
  - First-time setup: `npx playwright install`
  - Start dev server (`npm run dev`), then run E2E via `npx playwright test`
  - To capture demo screenshots without authoring tests, run `node screenshot.js` or `node test-screenshot.js` in another terminal (they expect the dev server at http://localhost:3000)

Observations for future maintenance
- The README claims linting and typecheck scripts that are not present. Consider adding `next lint` and `tsc --noEmit` scripts to match documentation
- The canvas-heavy hero runs continuously; it already cancels animation on unmount. If adding more canvas effects, continue to guard event listeners and RAF cleanup in `useEffect` teardowns
- The header component is scroll-aware and assumes client-side smooth scrolling to section IDs; when moving sections or IDs, keep anchors in sync with `Header.tsx`
