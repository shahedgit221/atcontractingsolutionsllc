const services = [
  "Flooring / Tile Upgrades",
  "Bathroom Remodeling",
  "Kitchen Remodeling",
  "Painting",
  "Drywall",
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-3">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-3">
            <span className="bg-gradient-purple grid h-9 w-9 shrink-0 place-items-center rounded-md text-sm font-bold">
              AT
            </span>
            <span className="truncate text-base font-semibold">AT Contracting Solutions, LLC</span>
          </div>
          <p className="text-muted-foreground mt-5 max-w-sm text-sm leading-relaxed">
            Residential remodeling and finish work — flooring, tile, bathrooms, kitchens, painting
            and drywall.
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.24em] text-white/50 uppercase">Services</h3>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-muted-foreground text-sm transition-colors duration-300 hover:text-foreground"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.24em] text-white/50 uppercase">Contact</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <a
                href="tel:+15125897789"
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                +1 512-589-7789
              </a>
            </li>
            <li>
              <a
                href="mailto:at.cs512@gmail.com"
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                at.cs512@gmail.com
              </a>
            </li>
          </ul>
          <a href="#contact" className="btn-base btn-primary mt-6 !px-5 !py-2.5 text-xs">
            Get a Free Estimate
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <p className="text-muted-foreground border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} AT Contracting Solutions, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
