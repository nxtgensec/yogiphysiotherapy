import * as React from "react";
import { ChevronDown } from "lucide-react";

const SCROLL_TARGET_SELECTOR = "main section, footer";

export function ScrollDownControl() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const updateVisibility = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
      setVisible(distanceFromBottom > 80);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToNextSection = () => {
    const currentTop = window.scrollY;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(SCROLL_TARGET_SELECTOR));
    const nextTarget = targets.find((target) => {
      const style = window.getComputedStyle(target);
      if (style.display === "none" || style.visibility === "hidden") {
        return false;
      }

      return target.getBoundingClientRect().top + currentTop > currentTop + 40;
    });

    if (nextTarget) {
      nextTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToNextSection}
      aria-label="Scroll to next section"
      className={[
        "fixed right-3 top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded-full",
        "border border-white/70 bg-primary text-primary-foreground shadow-elevated ring-2 ring-primary/15",
        "transition-all duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring",
        "md:right-5 md:size-12",
        visible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0",
      ].join(" ")}
    >
      <ChevronDown className="size-6" aria-hidden="true" />
    </button>
  );
}
