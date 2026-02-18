import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RagVsQloraSection from "@/components/RagVsQloraSection";
import DeploymentSection from "@/components/DeploymentSection";
import ForWhomSection from "@/components/ForWhomSection";
import ServicesSection from "@/components/ServicesSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <RagVsQloraSection />
      <DeploymentSection />
      <ForWhomSection />
      <ServicesSection />
      <ReferencesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
