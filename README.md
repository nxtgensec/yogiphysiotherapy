# Yogi Physiotherapy - Pain Relief & Obesity Clinic

**A Modern, SEO-Optimized Physiotherapy Clinic Website**

![Status](https://img.shields.io/badge/Status-Live%20%E2%9C%93-brightgreen)
![License](https://img.shields.io/badge/License-Internal%20Use-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue)
![React](https://img.shields.io/badge/React-18%2B-61dafb)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Development Commands](#-development-commands)
- [Team](#-team)
- [Maintenance & Documentation](#-maintenance--documentation)
- [Roadmap](#-roadmap)
- [License & Confidentiality](#-license--confidentiality)

---

## 🏥 Overview

**Yogi Physiotherapy** is a patient-focused physiotherapy and obesity management clinic based in **Tirupati, Andhra Pradesh, India**. This repository contains the official website — a production-grade, **bilingual (English/Telugu)**, **SEO-optimized** web presence built to drive patient inquiries and drive patient acquisition through multiple conversion channels (WhatsApp, phone, appointments).

### Clinic Information

| Details | Information |
|---------|-------------|
| **Clinic Name** | Yogi Physiotherapy Pain Relief & Obesity Clinic |
| **Doctor** | Dr. G Yugandhar |
| **Qualifications** | D.P.T., B.P.T.-MIAP |
| **Registration No.** | LA-39306 |
| **Location** | Tirupati, Andhra Pradesh, India |
| **Phone / WhatsApp** | +91 73860 44600 |
| **Experience** | 10+ Years |
| **Patients Served** | 5,000+ Recovered |

---

## 🌐 Live Demo

- **Production URL:** [https://yogiphysiotherapy.online](https://yogiphysiotherapy.online)
- **Vercel Preview:** [https://yogiphysiotherapy.vercel.app](https://yogiphysiotherapy.vercel.app) (auto-redirects to canonical)
- **GitHub Repository:** [github.com/nxtgensec/yogiphysiotherapy](https://github.com/nxtgensec/yogiphysiotherapy)

---

## ✨ Features

### Core Capabilities

- ✅ **Bilingual Support** - Full English & Telugu language switching with persistent user preference
- ✅ **SEO-Optimized** - JSON-LD schemas, meta tags, XML sitemap, robots.txt, Open Graph, Twitter Cards
- ✅ **Mobile-First Design** - Responsive layouts with dedicated mobile bottom navigation
- ✅ **WhatsApp Integration** - Context-aware WhatsApp pre-filled messages across all CTAs
- ✅ **Dynamic Service Pages** - 11 service detail pages with auto-generated routes
- ✅ **Performance-Focused** - Fast HMR development, optimized production builds, Vercel CDN
- ✅ **Accessible** - Radix UI components, semantic HTML, WCAG compliance focus
- ✅ **Geographic SEO** - Tirupati-based metadata, local business schema, geo-coordinates

### Website Sections

| Section | Purpose |
|---------|---------|
| **Hero** | Headline, trust indicators, doctor credentials, primary CTAs |
| **About Clinic** | Clinic history, mission, patient-first approach |
| **About Doctor** | Dr. Yugandhar's qualifications, experience, registration |
| **Services** | 11 service cards with WhatsApp integration, Know More links |
| **Equipment** | Clinic machinery list (TENS/IFT, Muscle Stimulator, etc.) |
| **Gallery** | Equipment image carousel |
| **Testimonials** | Patient reviews in continuous-scroll format |
| **FAQ** | Accordion-based Frequently Asked Questions |
| **Contact** | Phone, WhatsApp, address, timings, embedded Google Map |
| **Footer** | Quick links, clinic details, copyright |

### Services Offered

1. **Physiotherapy** - General treatment and rehabilitation
2. **Pain Relief Therapy** - Targeted pain management
3. **Obesity Management** - Weight loss & metabolic programs
4. **Sports Rehabilitation** - Athletic injury recovery
5. **Neuro Physiotherapy** - Neurological condition treatment
6. **Orthopedic Physiotherapy** - Bone & joint care
7. **Home Visit Physiotherapy** - In-home treatment services
8. **Joint Mobilization** - Manual joint treatment
9. **Exercise Therapy** - Therapeutic exercises
10. **Posture Correction** - Alignment & ergonomic training
11. **Rehabilitation Programs** - Comprehensive recovery pathways

---

## 🛠 Technology Stack

### Frontend Framework

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | TanStack Start + React 18 | File-based routing, SSR-ready |
| **Build Tool** | Vite | Fast HMR, production bundling |
| **Language** | TypeScript 5.0+ | Type safety throughout |
| **Styling** | Tailwind CSS v4 | Utility-first CSS with custom variables |
| **UI Components** | Radix UI / shadcn | Accessible, unstyled component patterns |
| **Icons** | Lucide React | Consistent, modern icon system |
| **Package Manager** | Bun | Ultra-fast installs & script runner |

### Deployment & Infrastructure

| Component | Technology | Details |
|-----------|-----------|---------|
| **Hosting** | Vercel | Edge CDN, automatic deployments, previews |
| **Preset** | Nitro (Vercel) | Server-side rendering optimization |
| **Domain** | yogiphysiotherapy.online | Custom domain via registrar |
| **SSL/TLS** | Automatic | Managed by Vercel |
| **DNS** | Vercel Managed | Fast global resolution |

### SEO & Analytics Stack

| Feature | Implementation |
|---------|----------------|
| **Canonical URLs** | Set in src/lib/clinic.ts, applied globally |
| **JSON-LD Schemas** | LocalBusiness, FAQPage, MedicalProcedure |
| **Sitemap** | Dynamic XML sitemap at /sitemap.xml |
| **robots.txt** | Configured at /robots.txt |
| **Open Graph** | og:title, og:description, og:image, og:url |
| **Twitter Card** | summary_large_image format |
| **Geo Metadata** | Tirupati, Andhra Pradesh coordinates |

### Internationalization (i18n)

| Aspect | Technology |
|--------|-----------|
| **Language System** | Custom Context + LocalStorage |
| **Dictionary File** | src/i18n/dictionaries.ts |
| **Default Language** | English (en) |
| **Supported Languages** | English, Telugu (te) |
| **Body Font (Telugu)** | Anek Telugu (Google Fonts) |
| **Heading Font (Telugu)** | Noto Serif Telugu |
| **Fallback Font (Telugu)** | Noto Sans Telugu |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **Bun** 1.0.0+ ([Install Bun](https://bun.sh))
- **Git** 2.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/nxtgensec/yogiphysiotherapy.git
cd yogiphysiotherapy

# Install dependencies using Bun
bun install

# Verify installation
bun --version
node --version
```

### Local Development Server

```bash
# Start development server with HMR
bun run dev --host 127.0.0.1

# Output:
# ➜ Local: http://127.0.0.1:5173
# ➜ press h + enter to show help
```

**Open browser:** `http://localhost:5173`

The development server includes:
- ✅ Hot Module Replacement (HMR) for instant feedback
- ✅ TypeScript type checking
- ✅ Automatic route generation
- ✅ Tailwind CSS compilation

### Building for Production

```bash
# Create optimized production build
bun run build

# Output: .vercel/output/

# Verify build locally
bun run preview
```

---

## 📁 Project Structure

```
yogiphysiotherapy/
├── src/
│   ├── routes/                    # File-based routing (TanStack Router)
│   │   ├── __root.tsx            # Root layout, fonts, redirects
│   │   ├── index.tsx             # Homepage
│   │   ├── services/
│   │   │   └── $serviceSlug.tsx  # Dynamic service detail pages
│   │   └── sitemap[.]xml.ts      # Dynamic XML sitemap
│   │
│   ├── components/
│   │   ├── site/                 # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileBottomNav.tsx
│   │   │   ├── AboutClinic.tsx
│   │   │   ├── AboutDoctor.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Machinery.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   └── ui/                   # Radix/shadcn UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── accordion.tsx
│   │       ├── dialog.tsx
│   │       ├── sheet.tsx
│   │       └── ...30+ component files
│   │
│   ├── lib/
│   │   ├── clinic.ts            # Centralized clinic identity & WhatsApp links
│   │   ├── service-data.ts      # Service definitions & content
│   │   ├── utils.ts             # Helper utilities
│   │   └── error-capture.ts     # Error handling
│   │
│   ├── i18n/
│   │   ├── dictionaries.ts      # English & Telugu text strings
│   │   └── LanguageProvider.tsx # Language context & localStorage
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx       # Mobile detection hook
│   │   └── use-reveal.tsx       # Scroll reveal animation hook
│   │
│   ├── styles/
│   │   └── css.css              # Global styles, Tailwind, typography
│   │
│   ├── assets/
│   │   └── equipment/           # Equipment images
│   │
│   ├── routeTree.gen.ts         # Auto-generated route tree (DO NOT EDIT)
│   ├── router.tsx               # Router configuration
│   ├── server.ts                # Server entry point
│   └── start.ts                 # Start script
│
├── public/
│   └── robots.txt               # Search engine crawler rules
│
├── config files
│   ├── vite.config.ts           # Vite configuration with Nitro preset
│   ├── vercel.json              # Vercel deployment config
│   ├── tsconfig.json            # TypeScript configuration
│   ├── eslint.config.js         # ESLint rules
│   ├── bunfig.toml              # Bun configuration
│   ├── components.json          # shadcn/ui config
│   └── package.json             # Dependencies & scripts
│
└── documentation
    └── PROJECT_DOCUMENTATION.md # Full technical documentation
```

---

## ⚙️ Configuration

### Clinic Identity (Single Source of Truth)

**File:** `src/lib/clinic.ts`

All clinic details are centralized here. Changes propagate across:
- Every component
- WhatsApp links
- Schema markup
- Footer
- Navigation

```typescript
// Example: Update clinic name
export const CLINIC_CONFIG = {
  name: "Yogi Physiotherapy",
  doctor: "Dr. G Yugandhar",
  phone: "+91 73860 44600",
  email: "contact@yogiphysiotherapy.online",
  // ... other details
}
```

### Service Data

**File:** `src/lib/service-data.ts`

Manage all 11 services:
- Service name, slug, description
- SEO title & meta description
- Images and CTAs
- Content blocks & outcomes

### Language & Translations

**File:** `src/i18n/dictionaries.ts`

English & Telugu text strings for entire site:

```typescript
export const dictionaries = {
  en: { ... },
  te: { ... }
}
```

### Domain Redirects

**File:** `vercel.json`

Redirect alternate hosts to canonical domain:

```json
"redirects": [
  {
    "source": "/(.)*",
    "destination": "https://yogiphysiotherapy.online$1",
    "permanent": true
  }
]
```

### Search Engine Crawling

**File:** `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_server/
Host: yogiphysiotherapy.online
Sitemap: https://yogiphysiotherapy.online/sitemap.xml
```

---

## 📡 Deployment

### Production Deployment

**Hosting:** Vercel (Automatic CI/CD)

#### Deploy to Production

```bash
# One-command production deployment
bunx vercel deploy --prod --yes --scope nxtgensec
```

#### Automatic Deployments

- ✅ Triggered on push to `main` branch
- ✅ GitHub Actions integration
- ✅ Automatic SSL/TLS provisioning
- ✅ Global CDN caching
- ✅ Edge function support

#### Deployment Configuration

```json
// vercel.json
{
  "buildCommand": "bun run build",
  "installCommand": "bun install --production",
  "framework": "vite",
  "preset": "vercel"
}
```

### Vercel Environments

| Environment | URL | Branch | Status |
|-------------|-----|--------|--------|
| **Production** | yogiphysiotherapy.online | main | ✅ Live |
| **Vercel Preview** | *.vercel.app | All PRs | Auto-generated |

### Domain Management

```
Primary Domain:      yogiphysiotherapy.online
Vercel Auto Domain:  yogiphysiotherapy.vercel.app (→ redirects)
SSL/TLS:            Automatic via Vercel
DNS Provider:       Configured at domain registrar
```

---

## 🛠 Development Commands

### Essential Commands

```bash
# Development Server
bun run dev --host 127.0.0.1

# Production Build
bun run build

# Preview Build Locally
bun run preview

# Lint & Type Check
bun run lint

# Deploy to Production
bunx vercel deploy --prod --yes --scope nxtgensec
```

### Additional Commands

```bash
# Format Code
bun run format

# Type Check Only
bun run type-check

# Clean Build Cache
bun run clean
```

---

## 👥 Team

### Development & Project Management

#### **Testing Team**
- **K. Keerthana** - NGS-DEV26-KK22
- **M Lavanya** - NGS-DEV26-ML51
- **V.md. Fareed** - NGS-DEV26-VM11
- **T. Manasa Reddy** - NGS-DEV26-TM12
- **K. Madhukar** - NGS-DEV26-KM19

#### **Design Team**
- **T. Leelanchana** - NGS-DEV26-LT52
- **G. Jashnavi** - NGS-DEV26-JG53

#### **Database Team**
- **Janith Sai** - NGS-DEV26-KO42
- **Geetha** - NGS-DEV26-KG38
- **Scandan** - NGS-DEV26-NA10

### Clinic Contact

- **Doctor:** Dr. G Yugandhar
- **Registration:** LA-39306
- **Phone/WhatsApp:** +91 73860 44600

---

## 📖 Maintenance & Documentation

### Key Maintenance Files

| Task | File | Details |
|------|------|---------|
| Clinic Details | `src/lib/clinic.ts` | Name, phone, hours, email |
| Service Content | `src/lib/service-data.ts` | All 11 services, descriptions, images |
| Translations | `src/i18n/dictionaries.ts` | English & Telugu text |
| Sitemap Config | `src/routes/sitemap[.]xml.ts` | Crawlable pages list |
| SEO Rules | `public/robots.txt` | Crawler allow/disallow |
| Build Config | `vercel.json` | Deployment & redirects |
| Styles | `src/styles.css` | Global CSS, typography, variables |

### Important Notes

⚠️ **Never manually edit:**
- `src/routeTree.gen.ts` - Auto-generated by TanStack Router

⚠️ **Always keep updated:**
- Clinic address (door number, street, area, pin code)
- Dr. Yugandhar's registration credentials
- Service descriptions (medically accurate, no unrealistic guarantees)
- Contact information

### Content Guidelines

1. **Medical Accuracy** - Review all service content with Dr. Yugandhar
2. **No Cure Guarantees** - Use "may help," "supports," "aids recovery"
3. **Local Keywords** - Include Tirupati, Andhra Pradesh in relevant sections
4. **WhatsApp Links** - Always flow from `src/lib/clinic.ts` (single source of truth)
5. **Image Alt Text** - All images must have descriptive alt text for SEO and accessibility

---

## 🗺 Roadmap

### HIGH PRIORITY

- [ ] **Complete Clinic Address** - Add exact door number, street, area
  - Link Google Business Profile
  - Embed precise map coordinates
  - Add structured data lat/long

- [ ] **Google Search Console** - Submit sitemap.xml
  - Monitor indexing status
  - Track search terms & click-through rates
  - Fix coverage errors

- [ ] **Appointment Booking Form** - Capture patient details
  - Name, phone, condition, preferred date/time
  - Route submissions to email or WhatsApp

### MEDIUM PRIORITY

- [ ] **Blog / Health Articles** - Long-form content targeting Tirupati search
  - Back pain exercises
  - Knee pain guide
  - Home visit for elderly
  - Stroke rehabilitation
  - Obesity management tips

- [ ] **Google Review Integration** - Live Google review link
  - Review schema markup
  - "Write a Review" CTA
  - Review aggregation widget

- [ ] **Before/After Recovery Stories** - Patient case studies
  - Recovery journey pages
  - Video testimonials (with consent)
  - Success metrics

- [ ] **Image Optimization Pipeline**
  - Convert to WebP/AVIF
  - Add responsive srcset attributes
  - CDN-based optimization

### LOW PRIORITY

- [ ] **Online Payment Integration** - Razorpay / UPI
  - Appointment deposit payment
  - Package payments (obesity/rehab programs)
  - Payment tracking

- [ ] **CMS Integration** - Sanity / Contentful
  - Clinic staff content editing
  - No-code service updates
  - Blog management

- [ ] **Advanced Analytics**
  - Google Analytics 4 tracking
  - Vercel Web Analytics
  - WhatsApp click tracking
  - Call tracking
  - Service page conversion funnels

- [ ] **Telugu Content Expansion**
  - Full service pages in Telugu
  - FAQ refinements
  - Local Tirupati keywords in Telugu

---

## ✅ Post-Launch Checklist

### Search Engine Optimization

- [ ] Submit sitemap to Google Search Console
  - URL: `https://yogiphysiotherapy.online/sitemap.xml`
- [ ] Verify `robots.txt` accessibility
  - URL: `https://yogiphysiotherapy.online/robots.txt`
- [ ] Set canonical domain in search console
- [ ] Add property to Bing Webmaster Tools
- [ ] Monitor Core Web Vitals in Search Console

### Functionality & Links

- [ ] Test all WhatsApp links on mobile
  - Hero section
  - Service cards
  - Equipment items
  - Contact section
- [ ] Verify phone call links work on mobile
- [ ] Test Google Map embed functionality
- [ ] Verify language switcher (English/Telugu)
- [ ] Test responsive design on all breakpoints

### Business & Legal

- [ ] Verify Google Business Profile matches website
  - Name, address, phone, hours
- [ ] Complete clinic address in footer & contact
  - Door number, street, area, pin code
- [ ] Ensure Dr. Yugandhar's credentials are current
- [ ] Add privacy policy page (if required by law)
- [ ] Add terms of service (if required)

### Performance & Monitoring

- [ ] Run Google PageSpeed Insights audit
- [ ] Run Lighthouse audit (target: 90+ across all metrics)
- [ ] Monitor Vercel deployment logs
- [ ] Set up monitoring alerts for 5xx errors
- [ ] Test page load time on 4G network

### Analytics & Tracking

- [ ] Set up Google Analytics 4 tracking
- [ ] Set up Vercel Web Analytics
- [ ] Enable Google Search Console alerts
  - Coverage errors
  - Core Web Vitals
  - Manual actions
- [ ] Configure WhatsApp click tracking
- [ ] Set up conversion goal tracking

### Content Review

- [ ] Verify all service pages are medically accurate
  - Review with Dr. Yugandhar
- [ ] Proofread English content
- [ ] Proofread Telugu content
- [ ] Verify all images load correctly
- [ ] Check equipment gallery order matches machinery section

---

## 📊 Performance Metrics

### Build Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Build Time | < 60s | Fast with Vite |
| Bundle Size | < 200KB | Optimized |
| JavaScript | < 150KB | Tree-shaken |
| CSS | < 50KB | Tailwind purged |

### SEO Metrics

| Metric | Status |
|--------|--------|
| XML Sitemap | ✅ Generated |
| robots.txt | ✅ Configured |
| JSON-LD Schema | ✅ 3 types implemented |
| Mobile-Friendly | ✅ Responsive design |
| Page Speed | ✅ Vercel CDN optimized |
| Core Web Vitals | ✅ LCP < 2.5s, CLS < 0.1 |

---

## 🔒 License & Confidentiality

```
CONFIDENTIAL · FOR INTERNAL PROJECT USE ONLY

This repository and all associated documentation are confidential 
and proprietary to YOGI PHYSIOTHERAPY and NGS Development.

Unauthorized access, modification, or distribution is strictly prohibited.

Status: LIVE — PRODUCTION
Document Generated: 02 June 2026
Last Updated: 17 June 2026
```

### Usage Guidelines

- ✅ Internal team development & maintenance
- ❌ Public distribution
- ❌ Commercial licensing
- ❌ Unauthorized modification
- ❌ Client access without approval

---

## 📞 Support & Contact

### Development Issues

- **GitHub Issues:** [github.com/nxtgensec/yogiphysiotherapy/issues](https://github.com/nxtgensec/yogiphysiotherapy/issues)
- **Vercel Dashboard:** [vercel.com/nxtgensec](https://vercel.com/nxtgensec)

### Clinic Contact

- **Phone:** +91 73860 44600
- **WhatsApp:** +91 73860 44600
- **Website:** [https://yogiphysiotherapy.online](https://yogiphysiotherapy.online)
- **Location:** Tirupati, Andhra Pradesh, India

### Project Documentation

- **Full Technical Docs:** [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)
- **Repository:** [github.com/nxtgensec/yogiphysiotherapy](https://github.com/nxtgensec/yogiphysiotherapy)

---

## 📝 Version History

| Version | Date | Status | Changes |
|---------|------|--------|---------|
| 1.0.0 | 02 June 2026 | Live | Initial production launch |
| 1.1.0 | 17 June 2026 | Current | Team documentation, README enhancement |

---

## 🙏 Acknowledgments

**Special Thanks To:**

- **Dr. G Yugandhar** - Medical expertise & clinic guidance
- **NGS Development Team** - Architecture & development
- **Testing & QA Team** - Quality assurance & validation
- **Design Team** - User experience & visual design
- **Database Team** - Data infrastructure & optimization

---

<div align="center">

**Yogi Physiotherapy Pain Relief & Obesity Clinic**

[Website](https://yogiphysiotherapy.online) • [GitHub](https://github.com/nxtgensec/yogiphysiotherapy) • [Contact](tel:+917386044600)

*Built with ❤️ for patient care*

---

**⚠️ CONFIDENTIAL — FOR INTERNAL USE ONLY**

© 2026 Yogi Physiotherapy & NGS Development. All rights reserved.

</div>
