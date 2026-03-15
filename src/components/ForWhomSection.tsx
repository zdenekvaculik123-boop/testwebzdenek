import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import UseCasesSlideshow from "./UseCasesSlideshow";

const ForWhomSection = () => {
  const { t } = useLanguage();

  return (
    <section id="for-whom" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">{t("fw.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("fw.title")}
          </h2>
        </motion.div>

        <UseCasesSlideshow />
      </div>
    </section>
  );
};

export default ForWhomSection;
