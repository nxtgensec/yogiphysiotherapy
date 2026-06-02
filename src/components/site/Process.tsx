import { useLang } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";

export function Process() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.process.title}
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {t.process.steps.map((s, i) => (
            <li
              key={s.t}
              className="relative rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="absolute -top-5 left-6 grid size-12 place-items-center rounded-2xl bg-gradient-primary font-display text-lg font-bold text-primary-foreground shadow-elevated">
                {i + 1}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
