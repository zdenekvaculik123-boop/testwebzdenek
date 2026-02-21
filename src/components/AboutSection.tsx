import { motion } from "framer-motion";
import { FileText, Search, MessageSquare, Briefcase, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const useCases = [
    { icon: FileText, titleKey: "about.uc1.title", descKey: "about.uc1.desc" },
    { icon: Search, titleKey: "about.uc2.title", descKey: "about.uc2.desc" },
    { icon: MessageSquare, titleKey: "about.uc3.title", descKey: "about.uc3.desc" },
    { icon: Briefcase, titleKey: "about.uc4.title", descKey: "about.uc4.desc" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary">{t("about.tag")}</span>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("about.title1")}{" "}
              <span className="gradient-text">{t("about.title2")}</span>
            </h2>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border/50 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t("about.badge1")}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary font-medium">
                <Zap className="w-3.5 h-3.5" />
                {t("about.badge2")}
              </span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.p2prefix")}
              <span className="text-foreground font-semibold">{t("about.p2bold")}</span>
              {t("about.p2suffix")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("about.p3prefix")}
              <span className="text-foreground font-semibold">{t("about.p3bold")}</span>
              {t("about.p3suffix")}
            </p>

            {/* TekInfra + Deployment box */}
            <div className="p-5 rounded-xl bg-secondary/50 border border-border/50">
              <p className="text-sm font-mono text-primary mb-3">{t("about.tekinfra.title")}</p>
              <div className="flex flex-col gap-2 mb-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-primary/15 text-primary text-sm font-semibold">{t("about.tekinfra.tek")}</span>
                  <span className="text-sm text-muted-foreground">{t("about.tekinfra.tekDesc")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-primary/15 text-primary text-sm font-semibold">{t("about.tekinfra.infra")}</span>
                  <span className="text-sm text-muted-foreground">{t("about.tekinfra.infraDesc")}</span>
                </div>
              </div>

              <div className="border-t border-border/30 pt-4">
                <p className="text-sm text-muted-foreground mb-3">{t("about.deploy.title")}</p>
                <div className="flex flex-col gap-2">
                  {[
                    { num: "1", key: "about.deploy.s1", descKey: "about.deploy.s1d" },
                    { num: "2", key: "about.deploy.s2", descKey: "about.deploy.s2d" },
                    { num: "3", key: "about.deploy.s3", descKey: "about.deploy.s3d" },
                  ].map((step) => (
                    <div key={step.num} className="flex items-center gap-2 text-sm">
                      <Sparkles className="w-4 h-4 text-primary/70 flex-shrink-0" />
                      <span className="font-semibold text-foreground">{step.num} {t(step.key)}</span>
                      <span className="text-muted-foreground">{t(step.descKey)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: use cases */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-mono text-muted-foreground mb-2">{t("about.usecases")}</p>
            {useCases.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-6 flex gap-4 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
