
# Yogi Physiotherapy — Premium Website Plan

A single-page, multi-section experience (plus dedicated routes for SEO) built on TanStack Start, themed from your logo (deep medical blue, healing yellow, soft white, recovery red).

## Design System

- **Palette (from logo)**: Primary deep blue `oklch(0.42 0.18 255)`, Healing yellow `oklch(0.88 0.18 95)`, Recovery red accent `oklch(0.58 0.22 25)`, Soft wellness off-white background, calm muted blue-grays.
- **Typography**: Headings `Fraunces` (warm, premium, medical-trust). Body `Inter`. Telugu fallback `Noto Sans Telugu` + `Hind Guntur` — loaded via Google Fonts, applied via `:lang(te)` selector.
- **Aesthetic**: Generous whitespace, rounded-2xl cards, soft layered shadows, subtle glass panels on hero, gentle floating SVG blobs, scroll-reveal fades, hover lift micro-interactions. No harsh gradients.
- All tokens defined in `src/styles.css` (oklch) and wired through `@theme inline`.

## Information Architecture

Single landing route `/` with anchored sections + dedicated routes for SEO depth:
- `/` — Home (all sections below)
- `/services/$slug` — per-service page (12 conditions + 11 services share template) for long-tail SEO
- `/about` — Doctor & clinic story
- `/contact` — Map, form, hours
- `/faq` — Full FAQ (also embedded on home)

Each route has unique `head()` meta (title, description, og:*, canonical) and JSON-LD.

## Sections (Home)

1. **Sticky Nav** — Logo, links, language toggle (EN / తెలుగు), "Book on WhatsApp" CTA.
2. **Hero** — Headline "Move Better. Live Pain-Free." + Telugu variant, sub-headline, 3 CTAs (Book Appointment, WhatsApp, Call), trust strip (years experience, patients treated, Reg No: LA-39306), soft animated lotus/wave background echoing the logo.
3. **Quick Condition Selector** — 12 elegant icon cards (Back, Neck, Knee, Obesity, Sports Injury, Joint, Cervical, Paralysis Rehab, Post-Surgery, Sciatica, Frozen Shoulder, Posture). Click → opens WhatsApp with pre-filled condition message OR routes to `/services/$slug`.
4. **About Dr. G Yugandhar** — Portrait, credentials (D.P.T., B.P.T.-MIAP, Reg No: LA-39306), recovery philosophy, certifications, trust badges.
5. **Services** — 11 service cards with premium AI-generated images, hover lift.
6. **Why Choose Us** — 8-feature comparison/benefit grid with icons.
7. **Patient Testimonials** — Auto-playing carousel (embla), star ratings, soft cards.
8. **Treatment Process** — 4-step recovery journey visual.
9. **Gallery** — Masonry of clinic, equipment, sessions (AI-generated authentic visuals).
10. **FAQ** — Accordion, schema-marked, covers physio benefits, obesity mgmt, session duration, pain treatment, recovery, home visits.
11. **Contact** — Click-to-call, WhatsApp, Maps embed placeholder, form, clinic timings.
12. **Footer** — Quick links, services, contact, language selector, social placeholders, SEO link cluster.

**Floating WhatsApp button** — bottom-right on all viewports, pulse animation, opens `wa.me/917386044600?text=...` with smart pre-filled message based on last-viewed section/condition.

## WhatsApp Booking Logic

Helper `buildWhatsAppLink(condition?)` returns `https://wa.me/917386044600?text=` + URL-encoded:
> "Hello Dr. Yugandhar, I would like to book an appointment for [condition]. My name is ___."

Used by every CTA, condition card, service card, and floating button.

## Multilingual (EN / తెలుగు)

- Lightweight context-based i18n (no heavy lib): `LanguageProvider` with `useT()` hook reading from `src/i18n/{en,te}.ts` dictionaries.
- Toggle in nav persists choice to `localStorage`.
- `<html lang>` updated; Telugu font stack applied via `:lang(te)`.
- All section copy keyed; doctor name/credentials/phone stay literal.

## SEO / GEO / LLM Optimization

- Per-route `head()` with unique title (<60ch), meta description (<160ch), og:*, twitter:*, canonical (leaves only).
- **JSON-LD** on root: `MedicalBusiness` + `Physician` (Dr. G Yugandhar, Reg LA-39306, Tirupati, phone, geo). On FAQ: `FAQPage`. On service pages: `MedicalProcedure`.
- Semantic HTML: single `<main>`, proper heading hierarchy, `<address>`, `<time>` for hours.
- Local SEO: city = Tirupati embedded in H1, H2s, alt text, schema.
- `public/robots.txt` (allow all) + `public/sitemap.xml` with all routes.
- Accessibility: aria-labels on icon buttons, focus-visible rings, contrast AA, `h-dvh` not `h-screen`, 44px tap targets.

## Performance

- AI-generated WebP/JPG images sized per slot, lazy-loaded with `loading="lazy"` + `decoding="async"`.
- Logo copied to `src/assets/logo.png` and imported as ES6 module.
- Fonts via `<link rel="preconnect">` to fonts.googleapis.
- Scroll-reveal via IntersectionObserver (no heavy animation lib).
- Carousel uses already-installed `embla-carousel-react`.

## Technical Build Notes

- Stack: TanStack Start (existing), Tailwind v4, shadcn/ui (Button, Card, Accordion, Carousel, Sheet for mobile nav, Dialog, Sonner).
- New files:
  - `src/styles.css` — extend tokens (palette, fonts, shadows, gradients)
  - `src/assets/logo.png` (copied from upload) + ~15 generated images in `src/assets/`
  - `src/i18n/{index.ts,en.ts,te.ts}` + `LanguageProvider`
  - `src/lib/whatsapp.ts` — link builder
  - `src/components/site/` — Navbar, Hero, Conditions, AboutDoctor, Services, WhyUs, Testimonials, Process, Gallery, FAQ, Contact, Footer, FloatingWhatsApp, LanguageToggle
  - `src/routes/index.tsx` — replace placeholder, compose sections
  - `src/routes/about.tsx`, `src/routes/contact.tsx`, `src/routes/faq.tsx`, `src/routes/services.$slug.tsx`
  - `public/robots.txt`, `public/sitemap.xml`
- Doctor contact constants in `src/lib/clinic.ts` (phone, WhatsApp, name, reg no).

## Out of Scope (this build)

- Backend booking / database (WhatsApp handles bookings).
- Real patient testimonial content — placeholder copy; you can replace.
- Real clinic address/map coordinates — placeholders until you provide.
- Real doctor photo — AI-generated placeholder portrait until you upload one.

After you approve, I'll generate the imagery, wire the i18n, build all sections, and ship.
