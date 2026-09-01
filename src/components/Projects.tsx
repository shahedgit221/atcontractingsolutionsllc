import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/service-kitchen.jpg";
import p5 from "@/assets/service-flooring.jpg";
import p6 from "@/assets/service-bathroom.jpg";

/**
 * Edit this array to publish real projects.
 * Each project supports: name, image, category and description.
 */
export type Project = {
  name: string;
  image: string;
  category: string;
  description: string;
};

const projects: Project[] = [
  { name: "Project Name", image: p1, category: "Category", description: "Short project description." },
  { name: "Project Name", image: p2, category: "Category", description: "Short project description." },
  { name: "Project Name", image: p3, category: "Category", description: "Short project description." },
  { name: "Project Name", image: p4, category: "Category", description: "Short project description." },
  { name: "Project Name", image: p5, category: "Category", description: "Short project description." },
  { name: "Project Name", image: p6, category: "Category", description: "Short project description." },
];

export function Projects() {
  return (
    <section id="projects" className="bg-surface relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recent Projects"
          title="A closer look at completed work."
          description="Project details are placeholders and can be replaced with real photos, names and descriptions at any time."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={i} delay={(i % 3) * 110}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} — remodeling project placeholder`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover opacity-85 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="bg-gradient-purple absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-55" />
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <p className="text-purple-soft text-[0.65rem] tracking-[0.22em] uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 truncate text-lg font-semibold">{project.name}</h3>
                    <p className="text-muted-foreground mt-1 truncate text-sm">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-purple-soft/70 mt-1 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
