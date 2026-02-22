import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-sm font-mono text-primary block mb-4">{t("about.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t("about.title1")}{" "}
            <span className="gradient-text">{t("about.title2")}</span>
          </h2>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.p2prefix")}
              {t("about.p2bold")}
              {t("about.p2suffix")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("about.p3prefix1")}
              <span className="text-foreground font-semibold">{t("about.p3bold1")}</span>
              {t("about.p3mid")}
              <span className="text-foreground font-semibold">{t("about.p3bold2")}</span>
              {t("about.p3suffix")}
            </p>

            {/* TekInfra + Deployment box */}
            <div className="p-5 rounded-xl bg-secondary/50 border border-border/50">
              <p className="text-sm font-mono text-primary mb-3">{t("about.tekinfra.title")}</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-primary/15 text-primary text-sm font-semibold">{t("about.tekinfra.tek")}</span>
                  <span className="text-sm text-muted-foreground">{t("about.tekinfra.tekDesc")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-primary/15 text-primary text-sm font-semibold">{t("about.tekinfra.infra")}</span>
                  <span className="text-sm text-muted-foreground">{t("about.tekinfra.infraDesc")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
