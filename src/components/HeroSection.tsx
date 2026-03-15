import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Monitor, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{ background: 'hsl(165 82% 51% / 0.05)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px]"
        style={{ background: 'hsl(270 60% 60% / 0.05)' }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto relative z-10 px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tag */}
          <motion.span
            className="text-sm font-mono text-primary mb-6 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("hero.badge")}
          </motion.span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t("hero.title1")}{" "}
            <span className="gradient-text">{t("hero.title2")}</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("landing.desc")}
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="glass-card rounded-2xl overflow-hidden glow-primary relative group cursor-pointer" onClick={!isPlaying ? handlePlay : undefined}>
            <video
              ref={videoRef}
              className="w-full aspect-video"
              controls={isPlaying}
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/videos/tekinfra_landing_v1.mp4" type="video/mp4" />
              {t("landing.videoFallback")}
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

        {/* About text */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {t("about.p1")}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t("about.p2")}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t("about.p4")}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" asChild>
            <a href="#contact">
              <MessageCircle className="mr-2 w-5 h-5" />
              {t("hero.cta1")}
            </a>
          </Button>
          <Button size="lg" className="text-base px-8 py-6 bg-info hover:bg-info/90 text-info-foreground shadow-lg shadow-info/20" asChild>
            <Link to="/demo">
              <Monitor className="mr-2 w-5 h-5" />
              {t("nav.demo")}
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 group" asChild>
            <a href="#how-it-works">
              {t("hero.cta2")}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
