import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Monitor, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import tekinfraLogo from "@/assets/tekinfra-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import flagCz from "@/assets/flag-cz.png";
import flagGb from "@/assets/flag-gb.png";

const Landing = () => {
  const { lang, setLang, t } = useLanguage();
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
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={tekinfraLogo} alt="TEKINFRA" className="h-[60px]" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/#how-it-works"
              className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("landing.goToSite")}
            </Link>
            <Link
              to="/demo"
              className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("landing.ctaDemo")}
            </Link>
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-md text-xs font-mono font-semibold border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center gap-1.5"
            >
              <img src={lang === "cs" ? flagGb : flagCz} alt="" className="w-5 h-5 rounded-full object-cover" />
              {lang === "cs" ? "EN" : "CZ"}
            </button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("landing.desc")}
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden glow-primary">
              <video
                className="w-full aspect-video"
                controls
                poster=""
                preload="metadata"
              >
                <source src="/videos/tekinfra_landing_v1.mp4" type="video/mp4" />
                {t("landing.videoFallback")}
              </video>
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

export default Landing;
