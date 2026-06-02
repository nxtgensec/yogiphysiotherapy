import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";
import { buildWhatsAppLink } from "@/lib/clinic";
import { SERVICES } from "@/lib/service-data";

export function Services() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.services.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const s = t.services.items[service.key];
            const whatsappHref = buildWhatsAppLink(s.name, service.whatsappMessage);
            return (
              <article
                key={service.key}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[4/3] overflow-hidden"
                  aria-label={`Chat on WhatsApp about ${s.name}`}
                >
                  <img
                    src={service.image}
                    alt={`${s.name} in Tirupati at Yogi Physiotherapy`}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={768}
                  />
                </a>
                <div className="flex flex-1 flex-col gap-2 p-3 sm:p-5">
                  <h3 className="font-display text-base font-semibold leading-tight tracking-tight sm:text-xl">
                    {s.name}
                  </h3>
                  <p className="flex-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                    {s.desc}
                  </p>
                  <div className="mt-2 grid grid-cols-[2.75rem_1fr] gap-2">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center justify-center rounded-md bg-[color:var(--whatsapp)] text-white transition-colors hover:bg-[color:var(--whatsapp)]/90"
                      aria-label={`Chat on WhatsApp about ${s.name}`}
                    >
                      <MessageCircle className="size-4" />
                    </a>
                    <Link
                      to="/services/$serviceSlug"
                      params={{ serviceSlug: service.slug }}
                      className="inline-flex min-h-10 items-center justify-center rounded-md border border-[color:var(--healing)]/60 bg-[color:var(--healing)]/25 px-3 text-xs font-semibold text-foreground transition-colors hover:bg-[color:var(--healing)]/40 sm:text-sm"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
