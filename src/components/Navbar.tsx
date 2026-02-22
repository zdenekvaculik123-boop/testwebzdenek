import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import tekinfraLogo from "@/assets/tekinfra-logo.png";
import flagCz from "@/assets/flag-cz.png";
import flagGb from "@/assets/flag-gb.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.technology"), href: "#technology" },
    { label: t("nav.deployment"), href: "#deployment" },
    { label: t("nav.forWhom"), href: "#for-whom" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const toggleLang = () => setLang(lang === "cs" ? "en" : "cs");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center gap-2">
            <img src={tekinfraLogo} alt="TEKINFRA" className="h-[60px]" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-md text-xs font-mono font-semibold border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center gap-1.5"
            >
              <img src={lang === "cs" ? flagGb : flagCz} alt="" className="w-5 h-5 rounded-full object-cover" />
              {lang === "cs" ? "EN" : "CZ"}
            </button>
            <Button size="sm" className="glow-primary" asChild>
              <a href="#contact">{t("nav.cta")}</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden glass-card border-t border-border/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleLang}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 text-left font-mono flex items-center gap-2"
              >
                <img src={lang === "cs" ? flagGb : flagCz} alt="" className="w-5 h-5 rounded-full object-cover" />
                {lang === "cs" ? "English" : "Čeština"}
              </button>
              <Button size="sm" className="glow-primary w-full" asChild>
                <a href="#contact">{t("nav.cta")}</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
