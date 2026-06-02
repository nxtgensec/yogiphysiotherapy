import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/button";
import { buildCallLink, buildWhatsAppLink, CLINIC } from "@/lib/clinic";
import { getServiceDetail, SERVICES } from "@/lib/service-data";

export const Route = createFileRoute("/services/$serviceSlug")({
  head: ({ params }) => {
    const service = getServiceDetail(params.serviceSlug);
    const title = service
      ? `${service.seoTitle} | ${CLINIC.shortName}`
      : `Service not found | ${CLINIC.shortName}`;
    const description =
      service?.seoDescription ??
      `Explore physiotherapy, pain relief and rehabilitation services at ${CLINIC.shortName}.`;
    const canonical = service
      ? `${CLINIC.siteUrl}/services/${service.slug}`
      : `${CLINIC.siteUrl}/#services`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: service
            ? `${service.name} Tirupati, ${service.name.toLowerCase()} near me, physiotherapy clinic Tirupati, ${CLINIC.shortName}`
            : `physiotherapy Tirupati, ${CLINIC.shortName}`,
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        ...(service
          ? [{ property: "og:image", content: `${CLINIC.siteUrl}${service.image}` }]
          : []),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: service
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalProcedure",
                name: service.name,
                description,
                image: `${CLINIC.siteUrl}${service.image}`,
                provider: {
                  "@type": ["MedicalBusiness", "Physiotherapy"],
                  name: CLINIC.name,
                  url: CLINIC.siteUrl,
                  telephone: CLINIC.phone,
                },
                areaServed: {
                  "@type": "City",
                  name: CLINIC.city,
                },
              }),
            },
          ]
        : [],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { serviceSlug } = Route.useParams();
  const service = getServiceDetail(serviceSlug);

  if (!service) {
    return (
      <div className="min-h-dvh bg-background pb-20 text-foreground lg:pb-0">
        <Navbar />
        <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 pt-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Service not found
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
            This service page is not available
          </h1>
          <p className="mt-3 text-muted-foreground">
            Please return to the services section and choose one of our available treatments.
          </p>
          <Button asChild className="mt-6">
            <Link to="/" hash="services">
              View services
            </Link>
          </Button>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    );
  }

  const whatsappHref = buildWhatsAppLink(service.name, service.whatsappMessage);
  const relatedServices = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-dvh bg-background pb-20 text-foreground lg:pb-0">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 md:pt-32">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/70 via-background to-background"
            aria-hidden
          />
          <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:pb-20">
            <div className="flex flex-col justify-center">
              <Link
                to="/"
                hash="services"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
              >
                <ArrowLeft className="size-4" />
                Back to services
              </Link>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {service.name} in {CLINIC.city}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                {service.name}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {service.overview}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-[color:var(--whatsapp)] text-white hover:bg-[color:var(--whatsapp)]/90"
                >
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    Book on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={buildCallLink()}>
                    <Phone className="size-4" />
                    Call clinic
                  </a>
                </Button>
              </div>
            </div>
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-elevated">
              <img
                src={service.image}
                alt={`${service.name} at ${CLINIC.shortName}`}
                className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
                width={1200}
                height={960}
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
            <InfoPanel title="Why this problem happens" items={service.problemCauses} />
            <InfoPanel title="How we treat it simply" items={service.approach} />
            <InfoPanel title="What we work toward" items={service.outcomes} />
          </div>
        </section>

        <section className="border-y border-border bg-card py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Care pathway
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                A clear recovery plan from first visit
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                We explain the reason behind your symptoms, start with comfortable treatment and
                progress only when your body is ready. The goal is steady improvement, safe movement
                and better daily function.
              </p>
            </div>
            <div className="grid gap-3">
              {service.visitFlow.map((step, index) => (
                <article key={step} className="rounded-lg border border-border bg-background p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="rounded-lg border border-border bg-primary p-6 text-primary-foreground shadow-elevated md:p-8">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 className="font-display text-2xl font-semibold md:text-3xl">
                    Need help with {service.name.toLowerCase()}?
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-primary-foreground/85">
                    Share your symptoms on WhatsApp. We will guide you with the right next step,
                    appointment timing and whether clinic care or home visit is better.
                  </p>
                </div>
                <Button asChild variant="secondary" className="text-foreground">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    Start WhatsApp chat
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Related services
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {relatedServices.map((item) => (
                  <Link
                    key={item.slug}
                    to="/services/$serviceSlug"
                    params={{ serviceSlug: item.slug }}
                    className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                  >
                    <img
                      src={item.image}
                      alt={`${item.name} at ${CLINIC.shortName}`}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                    />
                    <div className="p-4">
                      <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg border border-border bg-card p-5 shadow-soft">
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
