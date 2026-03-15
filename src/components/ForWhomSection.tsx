import { motion } from "framer-motion";
import { Code2, Users, Package, Building } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import UseCasesSlideshow from "./UseCasesSlideshow";

const ForWhomSection = () => {
  const { t } = useLanguage();

  const segments = [
    { icon: Code2, titleKey: "fw.s1.title", descKey: "fw.s1.desc", tagKeys: ["fw.s1.t1", "fw.s1.t2", "fw.s1.t3"] },
    { icon: Package, titleKey: "fw.s2.title", descKey: "fw.s2.desc", tagKeys: ["fw.s2.t1", "fw.s2.t2", "fw.s2.t3"] },
    { icon: Users, titleKey: "fw.s3.title", descKey: "fw.s3.desc", tagKeys: ["fw.s3.t1", "fw.s3.t2", "fw.s3.t3"] },
    { icon: Building, titleKey: "fw.s4.title", descKey: "fw.s4.desc", tagKeys: ["fw.s4.t1", "fw.s4.t2", "fw.s4.t3"] },
  ];

  return (
    <section id="for-whom" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">{t("fw.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("fw.title1")} <span className="gradient-text">{t("fw.title2")}</span> {t("fw.title3")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("fw.desc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 hover:border-primary/20 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <seg.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t(seg.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{t(seg.descKey)}</p>
              <div className="flex flex-wrap gap-2">
                {seg.tagKeys.map((key) => (
                  <span key={key} className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-muted-foreground border border-border/50">
                    {t(key)}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
