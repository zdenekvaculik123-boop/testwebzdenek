import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { a: "hero.benefit1a", b: "hero.benefit1b" },
    { a: "hero.benefit2a", b: "hero.benefit2b" },
    { a: "hero.benefit3a", b: "hero.benefit3b" },
  ];

  const desc = t("hero.desc");
  const boldPart = t("hero.descBold");
  const descParts = desc.split(boldPart);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle dot pattern like other sections */}
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
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tag – same style as other sections */}
          <motion.span
            className="text-sm font-mono text-primary mb-6 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("hero.badge")}
          </motion.span>

          {/* Title – consistent with other section headings */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t("hero.title1")}{" "}
            <span className="gradient-text">{t("hero.title2")}</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {descParts[0]}
            <span className="text-foreground font-semibold">{boldPart}</span>
            {descParts[1]}
          </p>

          {/* Benefits row */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {benefits.map((b, i) => (
              <span key={i} className="flex items-center gap-1 text-sm md:text-base">
                {i > 0 && <span className="text-muted-foreground mx-3">•</span>}
                <span className="font-semibold text-foreground">{t(b.a)}</span>
                <span className="text-muted-foreground">{t(b.b)}</span>
              </span>
            ))}
          </motion.div>

          {/* Glowing gradient line */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto h-[2px] mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(90deg, transparent, hsl(165 82% 51%), hsl(270 60% 60%), transparent)'
            }} />
            <div className="absolute inset-0 rounded-full blur-md" style={{
              background: 'linear-gradient(90deg, transparent, hsl(165 82% 51% / 0.6), hsl(270 60% 60% / 0.6), transparent)'
            }} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="text-base px-8 py-6 glow-primary" asChild>
              <a href="#contact">{t("hero.cta1")}</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 group" asChild>
              <a href="#how-it-works">
                {t("hero.cta2")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
