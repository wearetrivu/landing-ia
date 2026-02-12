import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ResultsSection from "@/components/sections/ResultsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ProcessSection />
      <ResultsSection />
      <CTASection />
    </div>
  );
}
