import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandBackdrop } from "@/components/BrandBackdrop";
import { LogoMark } from "@/components/LogoMark";
import { MobileNav } from "@/components/MobileNav";
import { ConsultationModal } from "@/components/ConsultationModal";
import { OurStorySection } from "@/components/sections/OurStorySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { WineriesSection } from "@/components/sections/WineriesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { WorkWithUsSection } from "@/components/sections/WorkWithUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { navItems } from "@/data/navigation";

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="min-h-screen bg-[#f7f3ff] font-sans text-slate-900 antialiased selection:bg-violet-200 selection:text-slate-950">
      <BrandBackdrop />

      <header className="sticky top-0 z-30 border-b border-violet-200/70 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="group flex items-center gap-3">
            <LogoMark compact />
            <div className="text-lg font-semibold tracking-tight text-slate-950">Elmes Digital</div>
          </div>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-600 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Book consultation
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-slate-600 hover:bg-white md:hidden"
            aria-label="Open menu"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main>
        <OurStorySection />
        <HeroSection onBookConsultation={openConsultation} />
        <StorySection />
        <AudienceSection />
        <WineriesSection />
        <PortfolioSection />
        <ServicesSection />
        <ResultsSection />
        <WorkWithUsSection />
        <ContactSection onBookConsultation={openConsultation} />
      </main>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onBookConsultation={openConsultation}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
