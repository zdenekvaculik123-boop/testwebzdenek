import { motion } from "framer-motion";
import { Zap, Lock, PiggyBank, TrendingUp, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Okamžité odpovědi z firemních dat",
    description: "Zaměstnanci dostanou přesné informace z dokumentace, směrnic a specifikací během sekund — bez prohledávání složek nebo obtěžování kolegů.",
  },
  {
    icon: Lock,
    title: "Data zůstanou pod kontrolou",
    description: "Řešení běží on-premise nebo v privátním cloudu. Firemní dokumenty nikdy neopustí bezpečný perimetr a přístupy jsou plně auditovatelné.",
  },
  {
    icon: PiggyBank,
    title: "Žádné skryté náklady ani vendor lock-in",
    description: "Řešení postavené na open-source technologiích. Klient vlastní kompletní infrastrukturu a může ji kdykoliv provozovat nezávisle.",
  },
  {
    icon: TrendingUp,
    title: "Implementace na míru, ne šablona",
    description: "Každý projekt začíná analýzou konkrétních potřeb. Výsledkem je AI asistent přizpůsobený přesně danému obsahu, terminologii a workflow.",
  },
  {
    icon: Rocket,
    title: "Zvýhodněné podmínky pro early adopters",
    description: "TEKINFRA hledá první partnery, kteří chtějí být mezi prvními s AI nad interními daty. Nabídka zahrnuje zvýhodněné ceny a prioritní podporu.",
  },
];

const ReferencesSection = () => {
  return (
    <section id="references" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">// PROČ MY</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Co <span className="gradient-text">získáte spoluprací</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Konkrétní přínosy, které AI nad firemními daty přinese do každodenního provozu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className={`glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors ${i === benefits.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <b.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
