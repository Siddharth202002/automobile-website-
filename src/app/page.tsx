import { Hero } from "@/components/home/Hero";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { FinanceSection } from "@/components/home/FinanceSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AboutSection } from "@/components/home/AboutSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedVehicles />
      <FinanceSection />
      <WhyChooseUs />
      <HowItWorks />
      <AboutSection />
      <CTASection />
    </>
  );
}
