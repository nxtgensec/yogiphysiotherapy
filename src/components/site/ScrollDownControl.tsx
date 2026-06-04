import * as React from "react";
import { ChevronDown } from "lucide-react";

const SCROLL_TARGET_SELECTOR = "main section, footer";
const CIRCLE_RADIUS = 22;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export function ScrollDownControl() {
  const [visible, setVisible] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const distanceFromBottom = maxScroll - window.scrollY;
      const nextProgress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;

      setVisible(distanceFromBottom > 80);
      setScrollProgress(nextProgress);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
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
      aria-label={`Scroll to next section, ${Math.round(scrollProgress * 100)} percent viewed`}
      className={[
        "fixed right-3 top-1/2 z-30 flex size-14 -translate-y-1/2 items-center justify-center rounded-full",
        "bg-background/90 text-primary shadow-elevated ring-1 ring-primary/15 backdrop-blur-md",
        "transition-all duration-200 hover:bg-background focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring",
        "md:right-5 md:size-16",
        visible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0",
      ].join(" ")}
    >
      <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 52 52" aria-hidden="true">
        <circle
          cx="26"
          cy="26"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="4"
        />
        <circle
          cx="26"
          cy="26"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
          strokeDasharray={CIRCLE_CIRCUMFERENCE}
          strokeDashoffset={CIRCLE_CIRCUMFERENCE * (1 - scrollProgress)}
        />
      </svg>
      <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground md:size-10">
        <ChevronDown className="size-5" aria-hidden="true" />
      </span>
    </button>
  );
}
