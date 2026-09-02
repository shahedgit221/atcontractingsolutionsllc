import { useEffect, useState } from "react";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const factor = window.innerWidth < 768 ? 0.08 : 0.2;
        setOffset(Math.min(window.scrollY, 900) * factor);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const step = () =>
    `opacity-0 translate-y-6 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      mounted ? "!opacity-100 !translate-y-0" : ""
    }`;


  return (
    <section id="top" className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Modern kitchen remodel with dramatic lighting"
          width={1920}
          height={1280}
          className="h-full w-full scale-[1.08] object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(${1.08 + offset / 9000})` }}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.25)_45%,rgba(0,0,0,0.95)_100%)]" />
      <div
        className="absolute -z-10 h-[38rem] w-[38rem] rounded-full opacity-40 blur-[120px]"
        style={{
          background: "var(--gradient-purple)",
          left: "-8rem",
          bottom: "-14rem",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pt-40 pb-20 sm:px-8 sm:pb-28">
        <div className="max-w-3xl">
          <span className={`eyebrow ${step(0)}`} style={{ transitionDelay: "120ms" }}>
            <span className="h-px w-8 bg-purple-soft/70" aria-hidden="true" />
            Austin, Texas · Residential Remodeling
          </span>

          <h1
            className={`mt-6 text-[2.6rem] leading-[1.02] font-semibold sm:text-6xl lg:text-7xl ${step(1)}`}
            style={{ transitionDelay: "240ms" }}
          >
            Transform Your Space.
            <span className="text-gradient block">Built With Precision.</span>
          </h1>

          <p
            className={`mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg ${step(2)}`}
            style={{ transitionDelay: "380ms" }}
          >
            Flooring, tile, bathrooms, kitchens, painting and drywall — delivered with careful
            craftsmanship, clean job sites and finishes that hold up to a close look.
          </p>

          <div
            className={`mt-9 flex flex-wrap items-center gap-3 ${step(3)}`}
            style={{ transitionDelay: "520ms" }}
          >
            <a href="#contact" className="btn-base btn-primary">
              Get a Free Estimate
            </a>
            <a href="tel:+15125897789" className="btn-base btn-ghost">
              Call +1 512-589-7789
            </a>
          </div>

          <div
            className={`mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-3 ${step(4)}`}
            style={{ transitionDelay: "660ms" }}
          >
            {["Detail-driven finishes", "Clean, respectful job sites", "Clear communication"].map(
              (t) => (
                <p key={t} className="text-xs tracking-wide text-white/60 sm:text-sm">
                  {t}
                </p>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
