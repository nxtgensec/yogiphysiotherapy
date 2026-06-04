import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CIRCLE_RADIUS = 18;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export function ScrollDownControl() {
  const [visible, setVisible] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const scrollPercent = Math.round(scrollProgress * 100);

  React.useEffect(() => {
    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;

      setVisible(maxScroll > 80);
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

  const shouldScrollUp = scrollProgress > 0.92;
  const Icon = shouldScrollUp ? ChevronUp : ChevronDown;

  const scrollToPageEdge = () => {
    window.scrollTo({
      top: shouldScrollUp ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToPageEdge}
      aria-label={`${shouldScrollUp ? "Scroll to top" : "Scroll to bottom"}, ${scrollPercent} percent viewed`}
      className={[
        "fixed bottom-24 right-3 z-30 flex size-11 items-center justify-center rounded-full",
        "bg-background/90 text-primary shadow-elevated ring-1 ring-primary/15 backdrop-blur-md",
        "transition-all duration-200 hover:bg-background focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring",
        "md:size-12 lg:bottom-5 lg:right-5",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 44 44" aria-hidden="true">
        <circle
          cx="22"
          cy="22"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="4"
        />
        <circle
          cx="22"
          cy="22"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
          strokeDasharray={CIRCLE_CIRCUMFERENCE}
          strokeDashoffset={CIRCLE_CIRCUMFERENCE * (1 - scrollProgress)}
        />
      </svg>
      <span className="flex size-8 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground md:size-9">
        <span className="text-[9px] font-bold leading-none tabular-nums md:text-[10px]">
          {scrollPercent}%
        </span>
        <Icon className="mt-0.5 size-3" aria-hidden="true" />
      </span>
    </button>
  );
}
