import { ClientsSection } from "@/components/ClientsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { IndexDesignProcess } from "@/components/IndexDesignProcess";
import { IndexShowcase } from "@/components/IndexShowcase";
import { InformationRequest } from "@/components/InformationRequest";
import { LatestNews } from "@/components/LatestNews";
import { ServicesSection } from "@/components/ServicesSection";
import { SuccessStories } from "@/components/SuccessStories";
import { FeaturedCasesSection } from "@/components/FeaturedCasesSection";
import { LogoCarousel } from "@/components/LogoCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroSlider />
      <IndexShowcase />
      <ClientsSection />
      <ExpertiseSection />
      <IndexDesignProcess />
      <ServicesSection />
      <FeaturedCasesSection />
      <SuccessStories />
      <LatestNews />
      <InformationRequest />
      <LogoCarousel />
      <Footer />
    </div>
  );
}