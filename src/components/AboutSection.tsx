import { motion } from "framer-motion";
import { FileText, Search, MessageSquare } from "lucide-react";

const useCases = [
  {
    icon: FileText,
    title: "Interní dokumentace",
    description: "Zaměstnanci se ptají přirozeným jazykem — AI odpovídá výhradně z vašich interních manuálů, směrnic a procesů.",
  },
  {
    icon: Search,
    title: "Technické specifikace",
    description: "Vývojáři a produktoví manažeři okamžitě dohledají relevantní části dokumentace, API specifikací nebo architektury.",
  },
  {
    icon: MessageSquare,
    title: "Onboarding & FAQ",
    description: "Noví zaměstnanci nebo klienti dostanou přesné odpovědi z firemní knowledge base — bez zatěžování týmu.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono text-primary mb-4 block">// CO DĚLÁME</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI, která rozumí{" "}
              <span className="gradient-text">vašemu byznysu</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Implementujeme AI asistenty, kteří odpovídají výhradně na základě vašich firemních dat —
              dokumentace, specifikací, politik a znalostní báze.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nepotřebujete trénovat nový model od nuly, kupovat drahé licence ani sdílet data s externími
              poskytovateli. Náš přístup využívá <span className="text-foreground font-medium">RAG (Retrieval-Augmented Generation)</span> —
              ověřenou architekturu, která kombinuje přesnost vyhledávání s přirozeností jazykového modelu.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Pro firmy, které vyžadují sjednocený styl odpovědí nebo práci s doménově specifickou
              terminologií, nabízíme volitelně prémiové{" "}
              <span className="text-foreground font-medium">QLoRA fine-tuning</span>, které RAG doplňuje
              a snižuje halucinace v konkrétním kontextu.
            </p>
          </motion.div>

          {/* Right: use cases */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-mono text-muted-foreground mb-2">Typické use-cases:</p>
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
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
