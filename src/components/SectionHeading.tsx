import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-purple-soft/70" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 text-3xl leading-[1.08] font-semibold sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={170}>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export default SectionHeading;
