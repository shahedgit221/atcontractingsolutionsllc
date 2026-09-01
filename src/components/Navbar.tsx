import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Transformations", href: "#before-after" },
  { label: "Projects", href: "#projects" },
  { label: "Video", href: "#video" },
  { label: "Process", href: "#process" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "border-b border-white/10 bg-background/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="bg-gradient-purple grid h-9 w-9 shrink-0 place-items-center rounded-md text-sm font-bold tracking-tight">
            AT
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-tight sm:text-base">
              AT Contracting Solutions
            </span>
            <span className="text-muted-foreground hidden text-[0.65rem] tracking-[0.28em] uppercase sm:block">
              Remodeling &amp; Finishes
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground relative text-sm transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-purple-soft after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+15125897789" className="btn-base btn-ghost hidden !px-5 !py-2.5 text-xs md:inline-flex">
            +1 512-589-7789
          </a>
          <a href="#contact" className="btn-base btn-primary hidden !px-5 !py-2.5 text-xs sm:inline-flex">
            Free Estimate
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pt-4 pb-5 sm:px-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground rounded-md px-2 py-2.5 text-sm transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-base btn-primary mt-3">
            Get a Free Estimate
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
