import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const points = [
  {
    title: "Professional craftsmanship",
    copy: "Work is executed with proper prep, correct materials and methods that hold up over time.",
  },
  {
    title: "Attention to detail",
    copy: "Straight lines, tight seams and clean transitions — the small things that make a space read as finished.",
  },
  {
    title: "Quality-focused work",
    copy: "We would rather take the extra step than leave something that needs to be revisited later.",
  },
  {
    title: "Reliable service",
    copy: "Clear scheduling, straightforward communication and follow-through from start to walkthrough.",
  },
  {
    title: "Clean professional results",
    copy: "Protected surfaces, tidy work areas and a space left ready to use, not ready to clean.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-gradient-night relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A steady, detail-first approach to every remodel."
          description="AT Contracting Solutions, LLC is built around doing the work properly — and making the process easy to live with while it happens."
        />

        <div className="min-w-0">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-t border-white/10 py-6 transition-colors duration-500 hover:border-purple-soft/40">
                <span className="text-purple-soft/80 mt-1 shrink-0 font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                    {p.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
