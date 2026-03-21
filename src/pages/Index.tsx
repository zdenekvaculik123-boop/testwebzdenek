import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import HowItWorksSection from "@/components/HowItWorksSection";
import RagVsQloraSection from "@/components/RagVsQloraSection";
import DeploymentSection from "@/components/DeploymentSection";
import ForWhomSection from "@/components/ForWhomSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      setSearchParams({}, { replace: true });
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams, setSearchParams]);
  return (
    <div className="min-h-screen bg-background relative">
      <div className="starfield">
        <div className="stars-sm" />
        <div className="stars-md" />
        <div className="stars-lg" />
      </div>
      <Navbar />
      <HeroSection />
      
      <HowItWorksSection />
      <RagVsQloraSection />
      <DeploymentSection />
      <ForWhomSection />
      <TeamSection />
      <ServicesSection />
      <ReferencesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
