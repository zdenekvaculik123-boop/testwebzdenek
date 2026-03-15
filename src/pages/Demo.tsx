import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import tekinfraLogo from "@/assets/tekinfra-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import flagCz from "@/assets/flag-cz.png";
import flagGb from "@/assets/flag-gb.png";

const Demo = () => {
  const { lang, setLang, t } = useLanguage();
  const toggleLang = () => setLang(lang === "cs" ? "en" : "cs");

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
              <Link to="/landing">
                <ArrowLeft className="mr-1 w-4 h-4" />
                {t("demo.back")}
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Demo content placeholder */}
      <section className="relative z-10 pt-32 pb-20 flex items-center justify-center min-h-[80vh]">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-2xl glass-card glow-primary flex items-center justify-center mx-auto mb-8">
              <Bot className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("demo.title")}
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t("demo.desc")}
            </p>
            <div className="glass-card rounded-2xl p-12 text-muted-foreground">
              <p className="font-mono text-sm">{t("demo.placeholder")}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
