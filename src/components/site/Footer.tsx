import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang } from "@/i18n/LanguageProvider";
import { CLINIC } from "@/lib/clinic";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="size-12 rounded-xl object-cover shadow-soft" />
              <div>
                <p className="font-display text-lg font-semibold">{CLINIC.shortName}</p>
                <p className="text-xs text-muted-foreground">Pain Relief · Obesity Care · {CLINIC.city}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">{t.footer.tagline}</p>
            <p className="mt-4 text-xs text-muted-foreground">
              {CLINIC.doctor.name} · {CLINIC.doctor.credentials} · Reg No: {CLINIC.doctor.regNo}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a href={CLINIC.social.facebook} aria-label="Facebook" className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"><Facebook className="size-4" /></a>
              <a href={CLINIC.social.instagram} aria-label="Instagram" className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"><Instagram className="size-4" /></a>
              <a href={CLINIC.social.youtube} aria-label="YouTube" className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"><Youtube className="size-4" /></a>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider">{t.footer.quickLinks}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-primary" href="/#conditions">{t.nav.conditions}</a></li>
              <li><a className="hover:text-primary" href="/#services">{t.nav.services}</a></li>
              <li><a className="hover:text-primary" href="/#doctor">{t.nav.about}</a></li>
              <li><a className="hover:text-primary" href="/#faq">{t.nav.faq}</a></li>
              <li><a className="hover:text-primary" href="/#contact">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider">{t.footer.contact}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-primary" href={`tel:${CLINIC.phone}`}>{CLINIC.phoneDisplay}</a></li>
              <li><a className="hover:text-primary" href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener">WhatsApp · {CLINIC.whatsappDisplay}</a></li>
              <li>{CLINIC.address.line}</li>
              <li>{CLINIC.hours.weekdays}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} {CLINIC.name}. {t.footer.rights}</p>
          <p>Best Physiotherapy Clinic in {CLINIC.city} · Back Pain · Obesity · Sports Rehab</p>
        </div>
      </div>
    </footer>
  );
}
