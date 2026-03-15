import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import slide1 from "@/assets/slides/page_1.jpg";
import slide2 from "@/assets/slides/page_2.jpg";
import slide3 from "@/assets/slides/page_3.jpg";
import slide4 from "@/assets/slides/page_4.jpg";
import slide5 from "@/assets/slides/page_5.jpg";
import slide6 from "@/assets/slides/page_6.jpg";
import slide7 from "@/assets/slides/page_7.jpg";
import slide8 from "@/assets/slides/page_8.jpg";
import slide9 from "@/assets/slides/page_9.jpg";
import slide10 from "@/assets/slides/page_10.jpg";
import slide11 from "@/assets/slides/page_11.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11];

const slideTitles: Record<string, string[]> = {
  cs: [
    "Praktické use-casy interní AI",
    "Co by AI dělalo v praxi",
    "Kde vzniká zbytečná práce",
    "Advokát / právní kancelář",
    "Projekt / claim management",
    "Finance / účetnictví",
    "HR / onboarding",
    "Obchod / nabídky / presales",
    "Technická podpora / servis",
    "Jak business case spočítat",
    "Pilot — rychle ověřitelný",
  ],
  en: [
    "Practical AI use cases",
    "What AI does in practice",
    "Where unnecessary work arises",
    "Lawyer / law firm",
    "Project / claim management",
    "Finance / accounting",
    "HR / onboarding",
    "Sales / presales",
    "Technical support / service",
    "How to calculate business case",
    "Pilot — quickly verifiable",
  ],
};

const UseCasesSlideshow = () => {
  const { lang, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const titles = slideTitles[language] || slideTitles.en;

  const SlideViewer = ({ isFullscreen = false }: { isFullscreen?: boolean }) => (
    <div className={`relative ${isFullscreen ? "w-full h-full flex flex-col" : ""}`}>
      {/* Title bar */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-mono text-muted-foreground">
          {current + 1} / {slides.length}
        </span>
        <span className="text-sm font-medium text-foreground truncate mx-4">
          {titles[current]}
        </span>
        {!isFullscreen && (
          <button
            onClick={() => setFullscreen(true)}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
        {isFullscreen && (
          <button
            onClick={() => setFullscreen(false)}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Slide */}
      <div className={`relative overflow-hidden rounded-xl bg-black/20 ${isFullscreen ? "flex-1" : "aspect-[16/9]"}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current]}
            alt={titles[current]}
            className="w-full h-full object-contain"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        className="glass-card rounded-2xl p-6 md:p-8 max-w-5xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold mb-4 text-center">
          📊 {t("fw.slides.title")}
        </h3>
        <SlideViewer />
      </motion.div>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setFullscreen(false)}
          >
            <SlideViewer isFullscreen />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UseCasesSlideshow;
