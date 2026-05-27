import { Quote, Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";

export function Testimonials() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const items = [...t.testimonials.items, ...t.testimonials.items];

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 to-background"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Patient stories
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.testimonials.subtitle}</p>
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="flex w-max gap-4 animate-marquee-ltr hover:[animation-play-state:paused]">
            {items.map((it, i) => (
              <figure
                key={`${it.n}-${i}`}
                className="flex w-[82vw] max-w-sm shrink-0 flex-col gap-4 rounded-lg border border-border bg-card p-5 shadow-soft sm:w-96"
              >
                <Quote className="size-7 text-[color:var(--healing)]" />
                <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">
                  "{it.q}"
                </blockquote>
                <div className="flex items-center gap-1 text-[color:var(--healing)]">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-current" />
                  ))}
                </div>
                <figcaption className="border-t border-border pt-4">
                  <p className="text-sm font-semibold">{it.n}</p>
                  <p className="text-xs text-muted-foreground">{it.c}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
