import { motion } from "framer-motion";
import LightModeParticles from "@/components/LightModeParticles";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import blogImage from "@/assets/blog-copilot-screenshot.jpg";
import blogImage2 from "@/assets/blog-dokument-sprava.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useTheme } from "@/hooks/useTheme";

const Blog = () => {
  const { lang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  usePageMeta({
    title: lang === "cs" 
      ? "Jak jsme s interní AI ušetřili čas při správě dat | TekInfra Blog"
      : "How We Saved Time Managing Data with Internal AI | TekInfra Blog",
    description: lang === "cs"
      ? "Případová studie: Jak interní AI Copilot od TEKINFRA pomohl firmě efektivněji spravovat firemní data a ušetřit čas zaměstnanců."
      : "Case study: How TEKINFRA's internal AI Copilot helped a company manage corporate data more efficiently and save employee time.",
    canonical: "https://testwebzdenek.lovable.app/blog",
  });

  return (
    <div className="min-h-screen bg-background relative">
      <div className="starfield">
        <div className="stars-sm" />
        <div className="stars-md" />
        <div className="stars-lg" />
        {theme === "light" && <LightModeParticles />}
      </div>

      <Navbar />

      {/* Blog Article */}
      <article className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary mb-6 block">{t("blog.tag")}</span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              {t("blog.title")}
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground dark:prose-invert">
              <p>{t("blog.p1")}</p>

              {/* Screenshot */}
              <div className="glass-card rounded-2xl overflow-hidden my-10">
                <img
                  src={blogImage}
                  alt={t("blog.img1.alt")}
                  className="w-full"
                  loading="lazy"
                />
                <p className="text-sm text-muted-foreground/70 px-6 py-4 italic">
                  {t("blog.img1.caption")}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-4 my-10 glass-card rounded-r-xl">
                <p className="text-foreground font-medium italic text-lg">
                  {t("blog.quote")}
                </p>
                <footer className="mt-3 text-sm text-primary font-semibold">
                  {t("blog.quoteAuthor")}
                </footer>
              </blockquote>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                {t("blog.h2.1")}
              </h2>
              <p>{t("blog.p2")}</p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                {t("blog.h2.2")}
              </h2>
              <p>{t("blog.p3")}</p>

              {/* Screenshot 2 */}
              <div className="glass-card rounded-2xl overflow-hidden my-10">
                <img
                  src={blogImage2}
                  alt={t("blog.img2.alt")}
                  className="w-full"
                  loading="lazy"
                />
                <p className="text-sm text-muted-foreground/70 px-6 py-4 italic">
                  {t("blog.img2.caption")}
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                {t("blog.h2.3")}
              </h2>
              <p>{t("blog.p4")}</p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                {t("blog.h2.4")}
              </h2>
              <p>{t("blog.p5")}</p>

              {/* Tagline */}
              <div className="text-center my-12 py-6 glass-card rounded-2xl">
                <p className="text-lg font-bold text-foreground">
                  {t("blog.tagline")}
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
