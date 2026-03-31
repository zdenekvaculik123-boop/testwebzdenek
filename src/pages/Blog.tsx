import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, MessageCircle, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import tekinfraLogo from "@/assets/tekinfra-logo.png";
import blogImage from "@/assets/blog-copilot-screenshot.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import flagCz from "@/assets/flag-cz.png";
import flagGb from "@/assets/flag-gb.png";

const Blog = () => {
  usePageMeta({
    title: "Jak jsme s interní AI ušetřili čas při správě dat | TekInfra Blog",
    description: "Případová studie: Jak interní AI Copilot od TEKINFRA pomohl firmě efektivněji spravovat firemní data a ušetřit čas zaměstnanců.",
    canonical: "https://testwebzdenek.lovable.app/blog",
  });
  const { lang, setLang, t } = useLanguage();
  const toggleLang = () => setLang(lang === "cs" ? "en" : "cs");

  return (
    <div className="min-h-screen bg-background relative">
      <div className="starfield">
        <div className="stars-sm" />
        <div className="stars-md" />
        <div className="stars-lg" />
      </div>

      {/* Navbar */}
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

      {/* Blog Article */}
      <article className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary mb-6 block">// BLOG</span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Jak jsme s interní AI ušetřili čas při správě firemních dat?
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground dark:prose-invert">
              <p>
                Firmy dnes často neztrácí čas na složitých úkolech, ale na opakovaném dohledávání informací,
                přepisování podkladů a odpovídání na stále stejné interní dotazy. Právě tady dnes dává smysl
                interní AI — ne jako módní doplněk, ale jako praktický nástroj pro vyšší efektivitu a bezpečnost
                firemních dat.
              </p>

              {/* Screenshot */}
              <div className="glass-card rounded-2xl overflow-hidden my-10">
                <img
                  src={blogImage}
                  alt="Ukázka interního Copilotu nad firemními dokumenty"
                  className="w-full"
                  loading="lazy"
                />
                <p className="text-sm text-muted-foreground/70 px-6 py-4 italic">
                  Ukázka interního Copilotu nad firemními dokumenty: odpověď s dohledatelnými zdroji a konkrétními podklady.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-4 my-10 glass-card rounded-r-xl">
                <p className="text-foreground font-medium italic text-lg">
                  „Dneska už dokážeme firmám až 1/3 času ušetřit a mohou tak výrazně snížit své náklady.
                  Největší přínos ale není jen v rychlosti — zásadní je i to, že data zůstávají bezpečně pod kontrolou."
                </p>
                <footer className="mt-3 text-sm text-primary font-semibold">
                  — Zdeněk Vaculík, majitel firmy
                </footer>
              </blockquote>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Kde dnes firmy nejčastěji ztrácí čas
              </h2>
              <p>
                Největší prodlevy vznikají tam, kde lidé musí ručně hledat v e-mailech, dokumentech, směrnicích
                a přílohách. Místo aby řešili odbornou práci, tráví minuty až hodiny hledáním správné odpovědi,
                ověřováním verzí a přípravou podkladů. Interní AI dokáže tento proces zkrátit tím, že pracuje
                nad firemními daty a vrací relevantní odpověď se zdroji.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Jak to funguje v praxi
              </h2>
              <p>
                Uživatel položí přirozený dotaz a interní Copilot projde dostupné dokumenty, vyhodnotí souvislosti
                a vrátí konkrétní výstup. Důležité je, že nejde jen o „chat" odpověď — systém zároveň ukáže,
                z jakých souborů vycházel. Firma tak získává nejen rychlost, ale i ověřitelnost.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Proč je bezpečnost klíčová
              </h2>
              <p>
                U práce s firemními daty nestačí jen ušetřit čas. Stejně důležité je, aby byly informace chráněné,
                interní a pod správou firmy. Právě proto je interní AI zajímavá: firmy nemusí posílat citlivé podklady
                mimo své prostředí a mohou přesně řídit, kdo k čemu přistupuje. To je zásadní rozdíl oproti
                neřízenému používání veřejných nástrojů.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Co si z toho odnést
              </h2>
              <p>
                Správně nasazená interní AI dnes firmám nepřináší jen technologickou novinku. Přináší úsporu času,
                vyšší efektivitu a bezpečnější práci s interními znalostmi. A právě to je kombinace, která z ní
                dělá reálný byznysový přínos, ne jen módní trend.
              </p>

              {/* Tagline */}
              <div className="text-center my-12 py-6 glass-card rounded-2xl">
                <p className="text-lg font-bold text-foreground">
                  Interní AI jako konkurenční výhoda • Bezpečnost a ochrana vašich dat
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA buttons – same as landing pages */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
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
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TEKINFRA s.r.o.
        </div>
      </footer>
    </div>
  );
};

export default Blog;
