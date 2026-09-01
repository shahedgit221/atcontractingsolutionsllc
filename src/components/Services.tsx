import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import flooring from "@/assets/service-flooring.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import kitchen from "@/assets/service-kitchen.jpg";
import painting from "@/assets/service-painting.jpg";
import drywall from "@/assets/service-drywall.jpg";

const services = [
  {
    title: "Flooring & Tile Upgrades",
    copy: "Tile, luxury vinyl and hardwood installed with level substrates and tight, consistent lines.",
    image: flooring,
    span: "lg:col-span-3",
  },
  {
    title: "Bathroom Remodeling",
    copy: "Full bathroom transformations — waterproofing, tile work, vanities and fixtures.",
    image: bathroom,
    span: "lg:col-span-3",
  },
  {
    title: "Kitchen Remodeling",
    copy: "Cabinetry, counters, backsplash and finish carpentry brought together into one clean result.",
    image: kitchen,
    span: "lg:col-span-2",
  },
  {
    title: "Painting",
    copy: "Interior and trim painting with proper prep, crisp cut lines and even coverage.",
    image: painting,
    span: "lg:col-span-2",
  },
  {
    title: "Drywall",
    copy: "Hanging, patching, taping and smooth-finish texture ready for a flawless paint job.",
    image: drywall,
    span: "lg:col-span-2",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Remodeling services, finished to a standard you can see."
          description="Five focused trades, handled end to end — so the details line up from subfloor to final coat."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 90}
              className={`group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-card ${s.span}`}
            >
              <article className="relative h-[24rem] sm:h-[26rem]">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.85))]" />
                <div className="bg-gradient-purple absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-60" />
                <div className="relative flex h-full flex-col justify-end p-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5">
                  <span className="text-purple-soft text-xs font-semibold tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/65">{s.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
