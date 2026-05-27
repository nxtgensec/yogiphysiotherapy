import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import * as React from "react";
import logo from "@/assets/logo.png";
import { useLang } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/button";
import { CLINIC, buildWhatsAppLink, buildCallLink } from "@/lib/clinic";

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#conditions", label: t.nav.conditions },
    { href: "/#services", label: t.nav.services },
    { href: "/#doctor", label: t.nav.about },
    { href: "/#testimonials", label: t.nav.testimonials },
    { href: "/#faq", label: t.nav.faq },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2.5 min-w-0" aria-label={CLINIC.shortName}>
          <img src={logo} alt="Yogi Physiotherapy logo" className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-soft sm:h-11 sm:w-11" />
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-sm font-semibold text-foreground sm:text-base truncate">{CLINIC.shortName}</span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">Pain Relief · Obesity Care · {CLINIC.city}</span>
          </div>
        </Link>


        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-border bg-card p-0.5 text-xs sm:flex">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              onClick={() => setLang("te")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "te" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={lang === "te"}
            >
              తె
            </button>
          </div>

          <Button
            asChild
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Call clinic"
          >
            <a href={buildCallLink()}>
              <Phone className="size-4" />
            </a>
          </Button>

          <Button asChild className="hidden bg-[color:var(--whatsapp)] text-white hover:bg-[color:var(--whatsapp)]/90 md:inline-flex">
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener">
              <MessageCircle className="size-4" />
              {t.nav.book}
            </a>
          </Button>

          <button
            className="rounded-md p-2 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--whatsapp)] px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="size-4" />
              {t.nav.book}
            </a>
            <div className="mt-2 flex items-center justify-center gap-2 pt-1 text-xs">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 ${lang === "en" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}
              >
                English
              </button>
              <button
                onClick={() => setLang("te")}
                className={`rounded-full px-3 py-1.5 ${lang === "te" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}
              >
                తెలుగు
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
