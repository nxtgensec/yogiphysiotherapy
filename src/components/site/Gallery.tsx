import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero.jpg";
import exercise from "@/assets/service-exercise.jpg";
import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";

const ITEMS = [
  { src: g1, alt: "Modern physiotherapy treatment room", span: "row-span-2" },
  { src: hero, alt: "Physiotherapy session", span: "" },
  { src: g3, alt: "Welcoming clinic reception", span: "" },
  { src: g4, alt: "Resistance band exercise therapy", span: "row-span-2" },
  { src: exercise, alt: "Exercise therapy studio", span: "" },
  { src: g2, alt: "Electrotherapy and ultrasound equipment", span: "" },
];

export function Gallery() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Gallery</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.gallery.title}
          </h2>
        </div>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
          {ITEMS.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
