import Reveal from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(140deg,#000000_0%,#0b0510_45%,#1b0b33_100%)]" />
      <div
        className="animate-pulse-slow absolute top-1/2 left-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-[140px]"
        style={{ background: "var(--gradient-purple)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-purple-soft/70" aria-hidden="true" />
            Let's Talk
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 text-3xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            Ready to Transform <span className="text-gradient">Your Space?</span>
          </h2>
        </Reveal>
        <Reveal delay={190}>
          <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base sm:text-lg">
            Tell us about your project and we'll put together a free estimate.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+15125897789" className="btn-base btn-primary">
              Get a Free Estimate
            </a>
            <a href="mailto:at.cs512@gmail.com" className="btn-base btn-ghost">
              Email Us
            </a>
          </div>
        </Reveal>
        <Reveal delay={370}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
            <a href="tel:+15125897789" className="transition-colors hover:text-foreground">
              +1 512-589-7789
            </a>
            <a href="mailto:at.cs512@gmail.com" className="transition-colors hover:text-foreground">
              at.cs512@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCTA;
