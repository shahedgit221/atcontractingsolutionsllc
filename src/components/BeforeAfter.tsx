import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [setFromClientX]);

  return (
    <section id="before-after" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Before & After"
          title="Drag to see the transformation."
          description="Move the handle across the image to compare the space before work began with the finished result."
          align="center"
        />

        <Reveal delay={120} className="mt-14">
          <div
            ref={containerRef}
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            className="relative aspect-[16/11] w-full touch-none overflow-hidden rounded-3xl border border-white/10 select-none shadow-elevated sm:aspect-[16/9]"
          >
            <img
              src={afterImg}
              alt="Bathroom after remodeling"
              loading="lazy"
              width={1600}
              height={1067}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src={beforeImg}
                alt="Bathroom before remodeling"
                loading="lazy"
                width={1600}
                height={1067}
                className="h-full w-full object-cover grayscale-[0.25]"
                draggable={false}
              />
            </div>

            <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[0.65rem] tracking-[0.22em] text-white/85 uppercase backdrop-blur">
              Before
            </span>
            <span className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[0.65rem] tracking-[0.22em] text-white/85 uppercase backdrop-blur">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-white/85"
              style={{ left: `${position}%` }}
            >
              <div className="bg-gradient-purple absolute inset-y-0 -left-px w-[3px] opacity-70 blur-[2px]" />
            </div>

            <button
              type="button"
              role="slider"
              aria-label="Comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
                if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                dragging.current = true;
              }}
              className="absolute top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border border-white/40 bg-black/50 backdrop-blur transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 glow-purple"
              style={{ left: `${position}%` }}
            >
              <span className="flex items-center gap-1.5 text-xs text-white">
                <span aria-hidden="true">◀</span>
                <span aria-hidden="true">▶</span>
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default BeforeAfter;
