import { motion } from "framer-motion";
import { ClipboardList, LayoutGrid, Settings2, Cpu, Server, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Analýza dat a use-case",
    description: "Zmapujeme vaše dokumenty, procesy a konkrétní potřeby. Definujeme, na jaké otázky má AI umět odpovídat.",
  },
  {
    icon: LayoutGrid,
    title: "Příprava a strukturování dokumentů",
    description: "Zpracujeme dokumentaci do podoby vhodné pro RAG — rozdělení, čištění, indexování do vektorové databáze.",
  },
  {
    icon: Settings2,
    title: "Implementace RAG architektury",
    description: "Nasadíme retrieval pipeline: dotaz → vyhledání relevantních částí → odpověď modelu výhradně z vašich dat.",
  },
  {
    icon: Cpu,
    title: "QLoRA adaptace modelu (volitelně)",
    description: "Pro firmy vyžadující specifický styl, terminologii nebo nízkou míru halucinací nabídneme fine-tuning modelu.",
  },
  {
    icon: Server,
    title: "Nasazení",
    description: "Volíte mezi on-premise nasazením na vašich serverech nebo privátním cloudem. Data nikdy neopustí vaše prostředí.",
  },
  {
    icon: LifeBuoy,
    title: "Průběžná podpora a rozšiřování",
    description: "Monitorujeme kvalitu odpovědí, přidáváme nové dokumenty a rozšiřujeme řešení podle vašich potřeb.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">// JAK TO FUNGUJE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Od dokumentů k <span className="gradient-text">funkčnímu AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Strukturovaný proces od prvního setkání po produkční nasazení — transparentní, předvídatelný a bezpečný.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex gap-6 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Step number + line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-mono text-sm font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border/50 mt-3" />
                )}
              </div>

              {/* Content */}
              <div className="glass-card rounded-2xl p-6 flex gap-4 mb-3 hover:border-primary/20 transition-colors flex-1">
                <step.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
