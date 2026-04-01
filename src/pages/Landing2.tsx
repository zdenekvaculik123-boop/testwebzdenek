import { useRef, useState } from "react";
import LightModeParticles from "@/components/LightModeParticles";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Monitor, MessageCircle, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import tekinfraLogo from "@/assets/tekinfra-logo.png";
import tekinfraLogoLight from "@/assets/tekinfra-logo-light.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTheme } from "@/hooks/useTheme";
import flagCz from "@/assets/flag-cz.png";
import flagGb from "@/assets/flag-gb.png";

const Landing2 = () => {
  usePageMeta({
    title: "TekInfra — AI pro firemní data | Zábavná ukázka",
    description: "Zábavná video ukázka interní AI od TEKINFRA. Zjistěte, jak AI chrání a zpracovává vaše firemní data.",
    canonical: "https://testwebzdenek.lovable.app/landing2",
  });
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const toggleLang = () => setLang(lang === "cs" ? "en" : "cs");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="starfield">
        <div className="stars-sm" />
        <div className="stars-md" />
        <div className="stars-lg" />
      </div>

      {/* Minimal top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={theme === "light" ? tekinfraLogoLight : tekinfraLogo} alt="TEKINFRA" className="h-[60px] shrink-0" />
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/#how-it-works"
              className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("landing.goToSite")}
            </Link>
            <Link
              to="/demo"
              className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("landing.ctaDemo")}
            </Link>
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-md border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleLang}
              className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs font-mono font-semibold border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center gap-1"
            >
              <img src={lang === "cs" ? flagGb : flagCz} alt="" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover" />
              <span className="hidden sm:inline">{lang === "cs" ? "EN" : "CZ"}</span>
            </button>
            <Button size="sm" className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/#contact">
                <MessageCircle className="mr-1 w-4 h-4" />
                {t("landing.ctaContact")}
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero with video */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary mb-6 block">
              {t("landing.tag")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("landing.title1")}{" "}
              <span className="gradient-text">{t("landing.title2")}</span>
            </h1>
          </motion.div>

          {/* Video - placeholder, will be replaced with new video */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden glow-primary relative group cursor-pointer" onClick={!isPlaying ? handlePlay : undefined}>
              <video
                key={lang}
                ref={videoRef}
                className="w-full aspect-video"
                controls={isPlaying}
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={lang === "cs" ? "/videos/tekinfra_funny_CZ.mp4" : "/videos/tekinfra_funny_EN.mp4"} type="video/mp4" />
                {t("landing.videoFallback")}
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center transition-opacity">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform">
                    <Play className="w-9 h-9 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" asChild>
              <Link to="/#contact">
                <MessageCircle className="mr-2 w-5 h-5" />
                {t("landing.ctaContact")}
              </Link>
            </Button>
            <Button size="lg" className="text-base px-8 py-6 bg-info hover:bg-info/90 text-info-foreground shadow-lg shadow-info/20" asChild>
              <Link to="/demo">
                <Monitor className="mr-2 w-5 h-5" />
                {t("landing.ctaDemo")}
              </Link>
            </Button>
            <Button size="lg" className="text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20" asChild>
              <Link to="/">
                {t("landing.ctaSite")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TEKINFRA s.r.o.
        </div>
      </footer>
    </div>
  );
};

export default Landing2;
