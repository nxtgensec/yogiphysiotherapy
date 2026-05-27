import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logo from "@/assets/logo.png";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { CLINIC } from "@/lib/clinic";

const SITE_URL = "https://yogiphysiotherapy.com";
const DEFAULT_DESCRIPTION =
  "Yogi Physiotherapy Pain Relief & Obesity Clinic in Tirupati provides expert physiotherapy, back pain treatment, knee pain care, sports injury rehab, paralysis rehabilitation, home visit physiotherapy and obesity management.";
const SEO_KEYWORDS =
  "best physiotherapy clinic in Tirupati, physiotherapy Tirupati, best physiotherapist in Tirupati, back pain treatment Tirupati, knee pain treatment Tirupati, neck pain physiotherapy Tirupati, sports injury physiotherapy Tirupati, paralysis rehabilitation Tirupati, home visit physiotherapy Tirupati, obesity clinic Tirupati";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1e40af" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: CLINIC.name },
      { name: "twitter:card", content: "summary_large_image" },
      { title: `Best Physiotherapy Clinic in ${CLINIC.city} | ${CLINIC.shortName}` },
      {
        property: "og:title",
        content: `Best Physiotherapy Clinic in ${CLINIC.city} | ${CLINIC.shortName}`,
      },
      { name: "twitter:title", content: `Best Physiotherapy Clinic in ${CLINIC.city}` },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "keywords", content: SEO_KEYWORDS },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: CLINIC.city },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}${logo}` },
      { name: "twitter:image", content: `${SITE_URL}${logo}` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalBusiness", "Physiotherapy"],
          name: CLINIC.name,
          url: SITE_URL,
          image: `${SITE_URL}${logo}`,
          telephone: CLINIC.phone,
          email: CLINIC.email,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: CLINIC.address.line,
            addressLocality: CLINIC.city,
            addressRegion: CLINIC.state,
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "21:00",
            },
          ],
          medicalSpecialty: [
            "Physiotherapy",
            "Pain Management",
            "Sports Medicine",
            "Rehabilitation",
            "Obesity Management",
          ],
          hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${CLINIC.name} ${CLINIC.city}`,
          )}`,
          areaServed: { "@type": "City", name: CLINIC.city },
          employee: {
            "@type": "Physician",
            name: CLINIC.doctor.name,
            jobTitle: "Doctor of Physiotherapy",
            medicalSpecialty: "Physiotherapy",
            identifier: CLINIC.doctor.regNo,
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
