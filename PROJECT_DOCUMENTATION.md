# Yogi Physiotherapy Project Documentation

## Project Summary

This project is the official website for **Yogi Physiotherapy Pain Relief & Obesity Clinic**, Tirupati. It is built as a professional, responsive, SEO-focused clinic website with service pages, WhatsApp lead generation, bilingual English/Telugu support, clinic equipment galleries, reviews, FAQ, contact details, Google Maps embed, and deployment on Vercel.

Primary live domain:

```txt
https://yogiphysiotherapy.online
```

GitHub repository:

```txt
https://github.com/nxtgensec/yogiphysiotherapy
```

## Technology Stack

- **Framework:** TanStack Start with React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 with custom CSS variables
- **UI Foundation:** Radix UI components and shadcn-style component patterns
- **Icons:** Lucide React
- **Package Manager:** Bun
- **Deployment:** Vercel
- **SEO:** Dynamic metadata, canonical links, schema JSON-LD, sitemap, robots.txt
- **Languages:** English and Telugu

## Important Commands

Run local development server:

```bash
bun run dev --host 127.0.0.1
```

Build production version:

```bash
bun run build
```

Run lint checks:

```bash
bun run lint
```

Deploy to Vercel production:

```bash
bunx vercel deploy --prod --yes --scope nxtgensec
```

## Current Website Structure

The homepage is a single-page clinic experience with section navigation:

- Home
- About
- Services
- Equipment
- Reviews
- FAQ
- Contact

Main homepage file:

```txt
src/routes/index.tsx
```

Main layout/root file:

```txt
src/routes/__root.tsx
```

Major site components:

```txt
src/components/site/Hero.tsx
src/components/site/Navbar.tsx
src/components/site/MobileBottomNav.tsx
src/components/site/AboutClinic.tsx
src/components/site/AboutDoctor.tsx
src/components/site/Services.tsx
src/components/site/Machinery.tsx
src/components/site/Testimonials.tsx
src/components/site/Gallery.tsx
src/components/site/FAQ.tsx
src/components/site/Contact.tsx
src/components/site/Footer.tsx
```

## What We Built and Modified

### Branding and Clinic Positioning

The site is positioned around:

- Best physiotherapy clinic in Tirupati
- Pain relief
- Obesity management
- Sports rehabilitation
- Neuro physiotherapy
- Orthopedic physiotherapy
- Home visit physiotherapy
- Clean, dignified, patient-first care

Clinic identity data is centralized in:

```txt
src/lib/clinic.ts
```

This file controls:

- Clinic name
- Doctor name
- Registration number
- Phone number
- WhatsApp number
- Email
- Address
- Hours
- Canonical domain
- WhatsApp link builder

### Domain and Deployment

The project is configured for:

```txt
https://yogiphysiotherapy.online
```

The old/default Vercel domain still exists because Vercel automatically provides it, but the project is configured to use the `.online` domain as the canonical public identity.

Alternate host redirect behavior exists in:

```txt
src/routes/__root.tsx
```

It redirects:

```txt
www.yogiphysiotherapy.online
yogiphysiotherapy.vercel.app
```

to:

```txt
yogiphysiotherapy.online
```

### Navigation

The desktop navbar and footer quick links follow this order:

```txt
Home
About
Services
Equipment
Reviews
FAQ
Contact
```

The mobile bottom navigation is optimized for phone users:

```txt
Home
About
Chat
Services
Equipment
```

The center Chat button uses a raised notch style and opens WhatsApp.

### Hero Section

The hero section was refined to:

- Center the main message
- Improve call-to-action layout
- Highlight trust indicators
- Include doctor credentials
- Use optimized clinic/doctor visual assets

Trust indicators include:

```txt
20+ Years Experience
5,000+ Patients Recovered
Home Visits Available
Dr. G Yugandhar · D.P.T., B.P.T.-MIAP · Reg No: LA-39306
```

### Services Section

The services section now supports both lead generation and detailed education.

Each service card:

- Displays a relevant image
- Opens WhatsApp when the image is tapped
- Sends a service-specific WhatsApp message
- Includes a **Know more** link
- Opens a dedicated service page

Service card component:

```txt
src/components/site/Services.tsx
```

Shared service data:

```txt
src/lib/service-data.ts
```

Dynamic service page route:

```txt
src/routes/services/$serviceSlug.tsx
```

Current service pages:

```txt
/services/physiotherapy
/services/pain-relief-therapy
/services/obesity-management
/services/sports-rehabilitation
/services/neuro-physiotherapy
/services/orthopedic-physiotherapy
/services/home-visit-physiotherapy
/services/joint-mobilization
/services/exercise-therapy
/services/posture-correction
/services/rehabilitation-programs
```

Each service page includes:

- Service-specific SEO title and description
- Hero section
- Service image
- WhatsApp CTA
- Call clinic CTA
- Why the problem happens
- How treatment is handled simply
- Expected outcomes
- Care pathway
- Related services
- MedicalProcedure schema

### Equipment / Machinery Section

The equipment section was updated to highlight clinic machinery professionally.

Current first equipment item:

```txt
TENS / IFT Stimulator
```

The former “Ultrasound Therapy” label was renamed to:

```txt
Muscle Stimulator
```

Equipment section file:

```txt
src/components/site/Machinery.tsx
```

The gallery equipment strip was also updated to match the equipment order and naming.

Gallery file:

```txt
src/components/site/Gallery.tsx
```

### Reviews Section

The reviews section was built using Google-style patient reviews supplied for the clinic.

It includes feedback such as:

- Quality treatment
- Best doctor in Tirupati
- Professional and experienced doctor
- Friendly treatment
- Good hospitality
- Patient problem improvement

Reviews are displayed in a continuous scrolling style.

Reviews component:

```txt
src/components/site/Testimonials.tsx
```

### Contact Section

The contact section includes:

- Phone CTA
- WhatsApp CTA
- Address details
- Clinic timings
- Google Maps link
- Embedded map

Contact component:

```txt
src/components/site/Contact.tsx
```

Social media icons were removed as requested.

### FAQ Section

The FAQ section covers important patient questions such as:

- Is physiotherapy painful?
- How many sessions are needed?
- Do you offer home visits?
- What conditions can be treated?
- Is a doctor referral required?

The pain-related FAQ was refined to say treatment is designed to relieve pain, not cause it, with mild post-exercise soreness explained clearly.

FAQ component:

```txt
src/components/site/FAQ.tsx
```

### Telugu Language Support

The website supports English and Telugu.

Language dictionary:

```txt
src/i18n/dictionaries.ts
```

Language provider:

```txt
src/i18n/LanguageProvider.tsx
```

The Telugu typography was improved because the earlier font did not look polished enough.

Current Telugu font setup:

- Telugu body text: **Anek Telugu**
- Telugu headings: **Noto Serif Telugu**
- Telugu fallback: **Noto Sans Telugu**

Typography rules are in:

```txt
src/styles.css
```

Font loading is configured in:

```txt
src/routes/__root.tsx
```

### SEO and GEO Optimization

The project includes several SEO improvements:

- Canonical domain set to `https://yogiphysiotherapy.online`
- Root metadata for homepage
- Service-specific metadata
- Open Graph tags
- Twitter card tags
- Geo metadata for Tirupati, Andhra Pradesh
- Clinic schema JSON-LD
- FAQ schema on homepage
- MedicalProcedure schema on service pages
- Professional sitemap
- Robots file
- SEO keywords for local physiotherapy searches

Important SEO files:

```txt
src/routes/__root.tsx
src/routes/index.tsx
src/routes/services/$serviceSlug.tsx
src/routes/sitemap[.]xml.ts
public/robots.txt
```

### Sitemap

The sitemap is generated dynamically by:

```txt
src/routes/sitemap[.]xml.ts
```

It includes:

- Homepage
- All service pages
- Last modified date
- Change frequency
- Priority
- Image sitemap entries

Live sitemap:

```txt
https://yogiphysiotherapy.online/sitemap.xml
```

### Robots.txt

Robots file:

```txt
public/robots.txt
```

It allows public crawling and blocks internal/private paths:

```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_server/
Disallow: /__*

Host: yogiphysiotherapy.online
Sitemap: https://yogiphysiotherapy.online/sitemap.xml
```

Live robots file:

```txt
https://yogiphysiotherapy.online/robots.txt
```

### Performance and Image Optimization

The site uses:

- Local imported assets
- Lazy loading for non-critical images
- Explicit image width/height attributes
- Responsive layouts
- Vite production bundling
- Vercel deployment caching

Images are used for:

- Hero
- Doctor
- Services
- Equipment
- Gallery

### Vercel Configuration

Vercel configuration file:

```txt
vercel.json
```

It defines:

- Build command
- Install command
- Host redirects

The Vite config switches build behavior for Vercel:

```txt
vite.config.ts
```

It uses Nitro’s Vercel preset when building on Vercel.

## How the Website Functions

### User Flow

1. Visitor lands on homepage.
2. Hero section introduces clinic and main CTAs.
3. Visitor can call or WhatsApp from the hero.
4. Visitor reviews services.
5. Tapping a service image opens WhatsApp with a service-specific message.
6. Tapping **Know more** opens the service’s dedicated page.
7. Service page explains symptoms, causes, treatment method and care path.
8. Visitor can book via WhatsApp or call clinic.
9. Contact section provides map and appointment options.

### WhatsApp Flow

WhatsApp links are generated by:

```txt
src/lib/clinic.ts
```

The function:

```ts
buildWhatsAppLink(condition?: string, painNote?: string)
```

creates a URL like:

```txt
https://wa.me/917386044600?text=...
```

This lets every condition, machinery item and service generate a contextual WhatsApp message.

### Language Flow

The language provider:

1. Starts with English.
2. Checks local storage for saved language.
3. Updates document language attribute.
4. Loads text from the selected dictionary.
5. Applies Telugu-specific CSS when `html lang="te"`.

### Routing Flow

TanStack Router controls routes:

- `/` for homepage
- `/services/$serviceSlug` for dynamic service pages
- `/sitemap.xml` for dynamic sitemap

Generated route tree:

```txt
src/routeTree.gen.ts
```

This file is automatically generated and should not be manually edited.

## Recent Git Milestones

Recent major commits:

```txt
80465b3 Improve Telugu typography
4045fa4 Add service detail pages and SEO sitemap
e49f44e Update equipment ordering and labels
f0073c7 Redirect alternate hosts to canonical domain
4fbf555 Use yogiphysiotherapy.online as canonical domain
3b01f5c Update mobile bottom navigation
70599e6 Ignore Vercel project metadata
faddfd8 Initial commit
```

## Current Verification Status

The following checks were run successfully during development:

```bash
bunx eslint ...
bun run build
```

Browser and live checks confirmed:

- Service cards have WhatsApp image links
- Service cards have Know more links
- Service pages render correctly
- Sitemap returns XML
- Robots file returns text
- Telugu body and heading fonts load correctly
- Production deployment completed on Vercel

## Future Enhancements

### 1. Add Real Clinic Address Details

Current address is broad:

```txt
19-8-36, Dasarimstam, near Karumari Amma temple, Dasarimatam, Tirupati, Andhra Pradesh 517501
```

Future improvement:

- Add complete door number / street / area
- Add Google Business Profile link
- Add embedded map using exact coordinates
- Add structured data latitude and longitude

### 2. Add Appointment Booking Form

Current booking is WhatsApp-first.

Future improvement:

- Add appointment request form
- Include patient name, phone, problem, preferred date/time
- Send lead to email, Google Sheets, CRM or WhatsApp

### 3. Add Blog / Health Articles

SEO can improve further with article pages such as:

- Back pain exercises in Tirupati
- Knee pain physiotherapy guide
- Home visit physiotherapy for elderly patients
- Stroke rehabilitation at home
- Obesity management with physiotherapy

### 4. Add Google Review Integration

Currently reviews are manually added.

Future improvement:

- Add Google review link
- Add review schema if valid review data is available
- Add “Write a review” CTA

### 5. Add Before / After Recovery Stories

With patient permission, add:

- Case studies
- Recovery journey pages
- Video testimonials
- Condition-specific progress examples

### 6. Add Online Payment or Booking Deposit

Future options:

- Razorpay payment link
- UPI QR
- Appointment deposit
- Package payment for obesity or rehab programs

### 7. Add Admin-Friendly Content Management

Currently content is edited in code.

Future improvement:

- Sanity / Contentful CMS
- Google Sheet-driven content
- Simple admin panel
- Markdown-based blog content

### 8. Add Advanced Analytics

Recommended:

- Google Search Console
- Google Analytics
- Vercel Web Analytics
- WhatsApp click tracking
- Call click tracking
- Service page conversion tracking

### 9. Improve Image Delivery

Current assets are already local and optimized reasonably.

Future improvement:

- Convert larger images to WebP/AVIF
- Add responsive `srcset`
- Use a CDN image optimization pipeline
- Compress large equipment images further

### 10. Add More Telugu Content

Current site supports Telugu translation.

Future improvement:

- Expand Telugu service detail pages fully
- Add Telugu FAQ refinements
- Add local Tirupati search keywords in Telugu
- Improve Telugu tone for patient comfort

## Maintenance Notes

When changing clinic details:

```txt
src/lib/clinic.ts
```

When changing service pages:

```txt
src/lib/service-data.ts
```

When changing homepage service card text:

```txt
src/i18n/dictionaries.ts
```

When changing sitemap behavior:

```txt
src/routes/sitemap[.]xml.ts
```

When changing robots:

```txt
public/robots.txt
```

When changing Vercel behavior:

```txt
vercel.json
vite.config.ts
```

## Recommended Post-Launch Checklist

- Submit `https://yogiphysiotherapy.online/sitemap.xml` to Google Search Console.
- Verify `https://yogiphysiotherapy.online/robots.txt`.
- Verify all WhatsApp links open correctly on mobile.
- Check Google Business Profile details match website details.
- Add complete clinic address when available.
- Test page speed after image changes.
- Monitor Vercel deployment logs after updates.
- Keep service pages medically accurate and avoid unrealistic cure guarantees.

## Final Notes

This project is now a complete clinic website foundation with strong local SEO, bilingual support, patient-friendly service education, WhatsApp conversion paths and a production deployment pipeline.

The most important future improvement is to add the exact clinic address and connect Google Search Console. After that, blog/service content expansion will help the site rank better for Tirupati physiotherapy searches.
