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
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { CLINIC } from "@/lib/clinic";

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
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">
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
      { title: "Yogi Physiotherapy" },
      { property: "og:title", content: "Yogi Physiotherapy" },
      { name: "twitter:title", content: "Yogi Physiotherapy" },
      { name: "description", content: "Yogi Physiotherapy Pain Relief & Obesity Clinic in Tirupati offers expert physiotherapy, pain relief, rehabilitation, and obesity management treatments with per" },
      { property: "og:description", content: "Yogi Physiotherapy Pain Relief & Obesity Clinic in Tirupati offers expert physiotherapy, pain relief, rehabilitation, and obesity management treatments with per" },
      { name: "twitter:description", content: "Yogi Physiotherapy Pain Relief & Obesity Clinic in Tirupati offers expert physiotherapy, pain relief, rehabilitation, and obesity management treatments with per" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d8477c00-193f-4b49-bea2-5ed19801511e/id-preview-e2dfcf4d--71800ba4-6a3d-446e-9ab6-e53753ad10c7.lovable.app-1779866666497.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d8477c00-193f-4b49-bea2-5ed19801511e/id-preview-e2dfcf4d--71800ba4-6a3d-446e-9ab6-e53753ad10c7.lovable.app-1779866666497.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
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
          url: "/",
          image: "/og-image.jpg",
          telephone: CLINIC.phone,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
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
