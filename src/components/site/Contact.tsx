import * as React from "react";
import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLang } from "@/i18n/LanguageProvider";
import { buildCallLink, CLINIC } from "@/lib/clinic";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = React.useState({ name: "", phone: "", message: "" });
  const mapQuery = encodeURIComponent(`${CLINIC.name}, ${CLINIC.address.line}`);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Dr. Yugandhar,\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`;
    const popup = window.open(
      `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    if (popup) popup.opener = null;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/40"
        aria-hidden
      />
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <a
              href={buildCallLink()}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.contact.callTitle}
                </p>
                <p className="text-base font-semibold text-foreground">{CLINIC.phoneDisplay}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-[color:var(--whatsapp)]/15 text-[color:var(--whatsapp)]">
                <MessageCircle className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.contact.waTitle}
                </p>
                <p className="text-base font-semibold text-foreground">{CLINIC.whatsappDisplay}</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="grid size-12 place-items-center rounded-xl bg-[color:var(--healing)]/40 text-primary">
                <Clock className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.contact.hoursTitle}
                </p>
                <p className="text-sm font-medium text-foreground">{CLINIC.hours.weekdays}</p>
                <p className="text-sm text-muted-foreground">{CLINIC.hours.sunday}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.contact.addressTitle}
                </p>
                <address className="not-italic text-sm font-medium text-foreground">
                  {CLINIC.address.line}
                </address>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-elevated lg:col-span-3 lg:p-8"
          >
            <h3 className="font-display text-2xl font-semibold">{t.contact.formTitle}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.contact.name}
                className="h-12 rounded-xl"
              />
              <Input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={t.contact.phone}
                className="h-12 rounded-xl"
              />
            </div>
            <Textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.contact.message}
              className="rounded-xl"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 w-full rounded-xl bg-[color:var(--whatsapp)] text-white hover:bg-[color:var(--whatsapp)]/90 sm:w-auto"
            >
              <Send className="size-4" />
              {t.contact.send}
            </Button>
          </form>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
          <div className="grid lg:grid-cols-[0.9fr_1.4fr]">
            <div className="p-6 lg:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {t.contact.mapTitle}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">{t.contact.addressTitle}</h3>
              <address className="mt-3 not-italic text-base font-medium text-foreground">
                {CLINIC.address.line}
              </address>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {t.contact.mapSubtitle}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MapPin className="size-4" />
                {t.contact.openMap}
              </a>
            </div>
            <iframe
              title="Yogi Physiotherapy Clinic Location in Tirupati"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-80 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
