import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  { n: "01", title: "Consultation", copy: "We walk the space, talk through goals and scope, and answer questions." },
  { n: "02", title: "Planning", copy: "Materials, sequencing and schedule are set so the work runs predictably." },
  { n: "03", title: "Remodeling", copy: "Execution with protected surfaces, tidy work areas and steady updates." },
  { n: "04", title: "Final Walkthrough", copy: "We review the finished work together and address anything that needs it." },
];

export function Process() {
  return (
    <section id="process" className="bg-gradient-night relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="Four steps, start to finish."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-card/70 p-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-purple-soft/40">
                <span className="text-gradient block text-4xl font-semibold sm:text-5xl">{s.n}</span>
                <h3 className="mt-5 text-lg font-semibold sm:text-xl">{s.title}</h3>
                <p className="text-muted-foreground mt-2.5 text-sm leading-relaxed">{s.copy}</p>
                <span className="bg-gradient-purple absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
