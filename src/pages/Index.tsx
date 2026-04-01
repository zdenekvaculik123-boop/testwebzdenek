import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTheme } from "@/hooks/useTheme";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LightModeParticles from "@/components/LightModeParticles";

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
  const { theme } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  usePageMeta({
    title: "TekInfra — interní AI pro vaše data",
    description: "Interní AI jako konkurenční výhoda. Bezpečnost a ochrana vašich dat. AI infrastruktura a poradenství od TEKINFRA.",
    canonical: "https://testwebzdenek.lovable.app/",
  });

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      setSearchParams({}, { replace: true });
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const scrollToHash = () => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      // Try multiple times to ensure DOM is ready
      const t1 = setTimeout(scrollToHash, 100);
      const t2 = setTimeout(scrollToHash, 500);
      const t3 = setTimeout(scrollToHash, 1000);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, []);
  return (
    <div className="min-h-screen bg-background relative">
      <div className="starfield">
        <div className="stars-sm" />
        <div className="stars-md" />
        <div className="stars-lg" />
        {theme === "light" && <LightModeParticles />}
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
