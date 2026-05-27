import { Dumbbell, Home, MessageCircle, Stethoscope, UserRound } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { buildWhatsAppLink } from "@/lib/clinic";

export function MobileBottomNav() {
  const { t } = useLang();

  const items = [
    { href: "/#top", icon: Home, label: t.mobileNav.home, external: false },
    { href: "/#about-clinic", icon: UserRound, label: t.mobileNav.about, external: false },
    {
      href: buildWhatsAppLink(),
      icon: MessageCircle,
      label: t.mobileNav.chat,
      external: true,
      primary: true,
    },
    { href: "/#services", icon: Stethoscope, label: t.mobileNav.services, external: false },
    { href: "/#machinery", icon: Dumbbell, label: t.mobileNav.equipment, external: false },
  ];

  return (
    <nav
      aria-label="Mobile primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md shadow-elevated lg:hidden"
    >
      <ul className="mx-auto grid h-[68px] max-w-md grid-cols-5 items-end px-1">
        {items.map((it) => {
          const Icon = it.icon;
          if (it.primary) {
            return (
              <li key={it.label} className="relative flex h-full justify-center">
                <span
                  className="absolute -top-5 size-20 rounded-full bg-card/95"
                  aria-hidden="true"
                />
                <a
                  href={it.href}
                  target={it.external ? "_blank" : undefined}
                  rel={it.external ? "noopener noreferrer" : undefined}
                  className="relative -top-5 flex size-16 flex-col items-center justify-center gap-0.5 rounded-full bg-[color:var(--whatsapp)] text-white shadow-elevated ring-4 ring-background transition-transform active:scale-95"
                  aria-label={it.label}
                >
                  <Icon className="size-6" />
                  <span className="text-[10px] font-semibold leading-none">{it.label}</span>
                </a>
              </li>
            );
          }
          return (
            <li key={it.label} className="flex">
              <a
                href={it.href}
                target={it.external ? "_blank" : undefined}
                rel={it.external ? "noopener noreferrer" : undefined}
                className="flex h-[64px] flex-1 flex-col items-center justify-center gap-1 px-1 text-[10px] font-semibold text-muted-foreground transition-colors hover:text-primary min-[380px]:text-[11px]"
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
