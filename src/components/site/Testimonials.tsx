import { Quote, Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useReveal } from "@/hooks/use-reveal";

export function Testimonials() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="testimonials" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 to-background" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Patient stories</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.testimonials.subtitle}</p>
        </div>

        <div className="mt-12">
          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-4">
              {t.testimonials.items.map((it) => (
                <CarouselItem key={it.n} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
                    <Quote className="size-7 text-[color:var(--healing)]" />
                    <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">
                      "{it.q}"
                    </blockquote>
                    <div className="flex items-center gap-1 text-[color:var(--healing)]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                    <figcaption className="border-t border-border pt-4">
                      <p className="text-sm font-semibold">{it.n}</p>
                      <p className="text-xs text-muted-foreground">{it.c}</p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
