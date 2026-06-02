import { Activity, ClipboardCheck, HeartPulse } from "lucide-react";
import iftTensImage from "@/assets/equipment/ift-tens-stimulator.jpg";
import laserImage from "@/assets/equipment/laser-therapy.jpg";
import percussionImage from "@/assets/equipment/percussion-therapy.jpg";
import shockwaveImage from "@/assets/equipment/shockwave-therapy.jpg";
import shortwaveImage from "@/assets/equipment/shortwave-diathermy.jpg";
import tractionImage from "@/assets/equipment/traction-therapy.jpg";
import treatmentTableImage from "@/assets/equipment/treatment-table.jpg";
import ultrasoundImage from "@/assets/equipment/ultrasound-therapy.jpg";
import vibrationImage from "@/assets/equipment/vibration-therapy.jpg";
import clinicConsultationRoom from "@/assets/clinic-consultation-room.jpg";
import clinicEntrance from "@/assets/clinic-entrance.jpg";
import clinicTreatmentSuite from "@/assets/clinic-treatment-suite.jpg";
import clinicWaitingArea from "@/assets/clinic-waiting-area.jpg";
import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";

const ITEMS = [
  {
    src: clinicTreatmentSuite,
    alt: "Clean Yogi Physiotherapy treatment room with therapy table",
    label: "Treatment room",
  },
  {
    src: clinicEntrance,
    alt: "Yogi Physiotherapy clinic entrance in Tirupati",
    label: "Clinic entrance",
  },
  {
    src: clinicWaitingArea,
    alt: "Comfortable waiting and therapy area inside Yogi Physiotherapy",
    label: "Patient waiting area",
  },
  {
    src: clinicConsultationRoom,
    alt: "Yogi Physiotherapy consultation room with doctor desk",
    label: "Consultation room",
  },
];

const FEATURE_ICONS = [Activity, ClipboardCheck, HeartPulse];

const EQUIPMENT_STRIP = [
  { src: iftTensImage, label: "TENS and IFT therapy" },
  { src: ultrasoundImage, label: "Muscle stimulator" },
  { src: shockwaveImage, label: "Shockwave therapy" },
  { src: laserImage, label: "Laser therapy" },
  { src: shortwaveImage, label: "Shortwave diathermy" },
  { src: tractionImage, label: "Traction therapy" },
  { src: vibrationImage, label: "Vibration therapy" },
  { src: percussionImage, label: "Percussion therapy" },
  { src: treatmentTableImage, label: "Treatment table" },
];

export function Gallery() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.gallery.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {ITEMS.map((it) => (
            <figure
              key={it.alt}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-card shadow-soft"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={800}
                height={1067}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-3 pb-3 pt-10 text-xs font-semibold text-background sm:text-sm">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card py-4 shadow-soft">
          <div className="flex w-max gap-4 animate-marquee-ltr hover:[animation-play-state:paused]">
            {[...EQUIPMENT_STRIP, ...EQUIPMENT_STRIP].map((item, i) => (
              <figure
                key={`${item.label}-${i}`}
                className="w-48 shrink-0 overflow-hidden rounded-lg sm:w-64"
              >
                <img
                  src={item.src}
                  alt={`${item.label} at Yogi Physiotherapy`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                  width={1024}
                  height={768}
                />
                <figcaption className="bg-background px-3 py-2 text-xs font-medium text-foreground">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {t.gallery.features.map((feature, i) => {
            const Icon = FEATURE_ICONS[i] ?? Activity;
            return (
              <article
                key={feature.t}
                className="rounded-lg border border-border bg-card p-5 shadow-soft"
              >
                <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{feature.t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.d}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
