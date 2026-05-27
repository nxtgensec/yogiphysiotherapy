import { Home, HelpCircle, MessageCircle, Phone, Stethoscope } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { buildCallLink, buildWhatsAppLink } from "@/lib/clinic";

export function MobileBottomNav() {
  const { t } = useLang();

  const items = [
    { href: "/#top", icon: Home, label: t.mobileNav.home, external: false },
    { href: "/#services", icon: Stethoscope, label: t.mobileNav.services, external: false },
    { href: buildWhatsAppLink(), icon: MessageCircle, label: t.mobileNav.book, external: true, primary: true },
    { href: buildCallLink(), icon: Phone, label: t.mobileNav.call, external: false },
    { href: "/#faq", icon: HelpCircle, label: t.mobileNav.more, external: false },
  ];

  return (
    <nav
      aria-label="Mobile primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md shadow-elevated lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5 items-end">
        {items.map((it) => {
          const Icon = it.icon;
          if (it.primary) {
            return (
              <li key={it.label} className="relative -mt-6 flex justify-center">
                <a
                  href={it.href}
                  target={it.external ? "_blank" : undefined}
                  rel={it.external ? "noopener" : undefined}
                  className="flex size-14 flex-col items-center justify-center gap-0.5 rounded-full bg-[color:var(--whatsapp)] text-white shadow-elevated ring-4 ring-background"
                  aria-label={it.label}
                >
                  <Icon className="size-6" />
                </a>
              </li>
            );
          }
          return (
            <li key={it.label} className="flex">
              <a
                href={it.href}
                target={it.external ? "_blank" : undefined}
                rel={it.external ? "noopener" : undefined}
                className="flex flex-1 flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="size-5" />
                <span className="leading-none">{it.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
