import painImg from "@/assets/service-pain-relief.jpg";
import obesityImg from "@/assets/service-obesity.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import neuroImg from "@/assets/service-neuro.jpg";
import orthoImg from "@/assets/service-ortho.jpg";
import homeImg from "@/assets/service-home.jpg";
import exerciseImg from "@/assets/service-exercise.jpg";
import postureImg from "@/assets/service-posture.jpg";
import heroImg from "@/assets/hero.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";

const IMAGES: Record<string, string> = {
  physio: heroImg,
  pain: painImg,
  obesity: obesityImg,
  sports: sportsImg,
  neuro: neuroImg,
  ortho: orthoImg,
  home: homeImg,
  joint: gallery4,
  exercise: exerciseImg,
  posture: postureImg,
  rehab: gallery2,
};

export function Services() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const keys = Object.keys(t.services.items) as (keyof typeof t.services.items)[];

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
          {keys.map((k) => {
            const s = t.services.items[k];
            return (
              <article
                key={k}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES[k]}
                    alt={`${s.name} in Tirupati at Yogi Physiotherapy`}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={768}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-3 sm:p-5">
                  <h3 className="font-display text-base font-semibold leading-tight tracking-tight sm:text-xl">
                    {s.name}
                  </h3>
                  <p className="flex-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                    {s.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
