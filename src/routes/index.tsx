import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import Projects from "@/components/Projects";
import VideoShowcase from "@/components/VideoShowcase";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const title = "AT Contracting Solutions, LLC — Remodeling in Austin, TX";
const description =
  "Flooring, tile, bathroom and kitchen remodeling, painting and drywall in Austin, Texas. Precision craftsmanship, clean job sites, free estimates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "AT Contracting Solutions, LLC",
          telephone: "+1-512-589-7789",
          email: "at.cs512@gmail.com",
          areaServed: "Austin, Texas",
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <Projects />
        <VideoShowcase />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
