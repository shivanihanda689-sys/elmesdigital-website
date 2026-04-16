import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected work"
        description="A refined showcase of websites and digital products built to strengthen clarity, trust, and conversion."
      />
      <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((site, index) => (
          <PortfolioCard key={site.name} site={site} index={index} />
        ))}
      </div>
    </section>
  );
}
