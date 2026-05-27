import { Activity } from "lucide-react";
import iftTensImage from "@/assets/equipment/ift-tens-stimulator.jpg";
import laserImage from "@/assets/equipment/laser-therapy.jpg";
import percussionImage from "@/assets/equipment/percussion-therapy.jpg";
import shockwaveImage from "@/assets/equipment/shockwave-therapy.jpg";
import shortwaveImage from "@/assets/equipment/shortwave-diathermy.jpg";
import tractionImage from "@/assets/equipment/traction-therapy.jpg";
import treatmentTableImage from "@/assets/equipment/treatment-table.jpg";
import ultrasoundImage from "@/assets/equipment/ultrasound-therapy.jpg";
import vibrationImage from "@/assets/equipment/vibration-therapy.jpg";
import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";
import { buildWhatsAppLink } from "@/lib/clinic";

const EQUIPMENT_IMAGES = [
  ultrasoundImage,
  iftTensImage,
  shockwaveImage,
  laserImage,
  shortwaveImage,
  tractionImage,
  vibrationImage,
  percussionImage,
  treatmentTableImage,
];

export function Machinery() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="machinery" className="relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 to-background"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.machinery.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.machinery.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.machinery.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {t.machinery.items.map((item, i) => {
            const image = EQUIPMENT_IMAGES[i];
            return (
              <a
                key={item.t}
                href={buildWhatsAppLink(item.t, `I'd like to know more about ${item.t} treatment.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  {image ? (
                    <img
                      src={image}
                      alt={`${item.t} equipment at Yogi Physiotherapy`}
                      loading="lazy"
                      decoding="async"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-primary">
                      <Activity className="size-10" strokeWidth={1.7} />
                    </div>
                  )}
                </div>
                <div className="flex min-h-28 flex-col gap-2 p-3 sm:min-h-32 sm:p-5">
                  <h3 className="font-display text-base font-semibold leading-tight sm:text-lg">
                    {item.t}
                  </h3>
                  <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
                    {item.d}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
