import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Lock, MessageCircle, Play, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import tekinfraLogo from "@/assets/tekinfra-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import flagCz from "@/assets/flag-cz.png";
import flagGb from "@/assets/flag-gb.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const DEMO_URL = "http://52.28.230.0/";

const Demo = () => {
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();
  const toggleLang = () => setLang(lang === "cs" ? "en" : "cs");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [checking, setChecking] = useState(false);
  const [showUnavailable, setShowUnavailable] = useState(false);

  const goToContact = useCallback(() => {
    setShowUnavailable(false);
    navigate("/?scrollTo=contact");
  }, [navigate]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleLaunchDemo = async (e: React.MouseEvent) => {
    e.preventDefault();
    setChecking(true);
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      await fetch(DEMO_URL, { mode: "no-cors", signal: controller.signal });
      clearTimeout(timeout);
      // If fetch didn't throw, the server is reachable
      window.open(DEMO_URL, "_blank", "noopener,noreferrer");
    } catch {
      setShowUnavailable(true);
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="starfield">
        <div className="stars-sm" />
        <div className="stars-md" />
        <div className="stars-lg" />
      </div>

      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={tekinfraLogo} alt="TEKINFRA" className="h-[60px]" />
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-md text-xs font-mono font-semibold border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center gap-1.5"
            >
              <img src={lang === "cs" ? flagGb : flagCz} alt="" className="w-5 h-5 rounded-full object-cover" />
              {lang === "cs" ? "EN" : "CZ"}
            </button>
            <Button size="sm" variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="mr-1 w-4 h-4" />
                {t("demo.back")}
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Demo content */}
      <section className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("demo.title1")} <span className="gradient-text">{t("demo.title2")}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("demo.desc")}
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            className="max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div
              className="glass-card rounded-2xl overflow-hidden glow-primary relative group cursor-pointer"
              onClick={!isPlaying ? handlePlay : undefined}
            >
              <video
                key={lang}
                ref={videoRef}
                className="w-full aspect-video"
                controls={isPlaying}
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => { setIsPlaying(false); }}
              >
                <source src={lang === "cs" ? "/videos/demo_preview.mp4" : "/videos/demo_preview_en.mp4"} type="video/mp4" />
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/30 transition-opacity group-hover:bg-background/10">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform">
                    <Play className="w-9 h-9 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* CTA + access info */}
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-info hover:bg-info/90 text-info-foreground shadow-lg shadow-info/20 mb-8"
              onClick={handleLaunchDemo}
              disabled={checking}
            >
              {checking ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  {t("demo.checking")}
                </>
              ) : (
                <>
                  <ExternalLink className="mr-2 w-5 h-5" />
                  {t("demo.cta")}
                </>
              )}
            </Button>

            <div className="glass-card rounded-2xl p-8 text-center">
              <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground mb-6">
                {t("demo.access")}
              </p>
              <Button size="sm" className="glow-primary" onClick={goToContact}>
                  <MessageCircle className="mr-2 w-4 h-4" />
                  {t("demo.contact")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unavailable dialog */}
      <Dialog open={showUnavailable} onOpenChange={setShowUnavailable}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("demo.unavailable.title")}</DialogTitle>
            <DialogDescription>{t("demo.unavailable.desc")}</DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 pt-2">
            <Button size="sm" className="glow-primary" asChild>
              <a href="/#contact">
                <MessageCircle className="mr-2 w-4 h-4" />
                {t("demo.contact")}
              </a>
            </Button>
            <Button size="sm" variant="outline" onClick={() => setShowUnavailable(false)}>
              {t("demo.unavailable.ok")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Demo;
