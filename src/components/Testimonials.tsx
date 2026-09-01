import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Replace these placeholders with real, verified customer reviews. */
const testimonials = [
  { quote: "Customer review placeholder.", name: "Customer Name", detail: "Project Type" },
  { quote: "Customer review placeholder.", name: "Customer Name", detail: "Project Type" },
  { quote: "Customer review placeholder.", name: "Customer Name", detail: "Project Type" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="In our clients' words."
          description="These are editable placeholders — real reviews can be added here once collected."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card p-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-purple-soft/40">
                <span className="text-purple-soft/40 font-display text-5xl leading-none">“</span>
                <blockquote className="mt-3 text-base leading-relaxed text-white/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs tracking-wide">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
