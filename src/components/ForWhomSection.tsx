import { motion } from "framer-motion";
import { Code2, Users, Package, Building } from "lucide-react";

const segments = [
  {
    icon: Code2,
    title: "CTO a IT manažeři",
    description: "Hledáte způsob, jak zpřístupnit technickou dokumentaci a specifikace celému týmu bez zahlcení podpory. Chcete řešení, které je bezpečné, auditovatelné a integrovatelné do stávající infrastruktury.",
    tags: ["On-premise", "API integrace", "Security compliance"],
  },
  {
    icon: Package,
    title: "Produktoví manažeři",
    description: "Potřebujete rychle dohledat informace z product specs, roadmapy nebo meeting notes. AI asistent funguje jako interní vyhledávač — odpovídá přesně a cituje zdroje.",
    tags: ["Produktová dokumentace", "Rychlé vyhledávání", "Zdrojování odpovědí"],
  },
  {
    icon: Users,
    title: "HR a onboarding týmy",
    description: "Noví zaměstnanci mají stovky otázek. AI asistent odpovídá z firemních manuálů, pravidel a procesů — 24/7, konzistentně a bez zatěžování kolegů.",
    tags: ["Onboarding", "Firemní polícy", "FAQ"],
  },
  {
    icon: Building,
    title: "Firmy bez technického zázemí",
    description: "Nemusíte rozumět AI. My řešíme technickou implementaci od začátku do konce. Vy dostanete fungující AI asistenta přizpůsobeného vašemu obsahu a potřebám.",
    tags: ["Turnkey řešení", "Žádný interní AI tým", "Plná podpora"],
  },
];

const ForWhomSection = () => {
  return (
    <section id="for-whom" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">// PRO KOHO</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pro <span className="gradient-text">technické i netechnické</span> firmy
          </h2>
          <p className="text-lg text-muted-foreground">
            Naše řešení je navrženo pro firmy, které chtějí využít AI nad svými interními daty —
            bez ohledu na velikost nebo technické zázemí.
          </p>
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
              <h3 className="text-xl font-semibold mb-3">{seg.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{seg.description}</p>
              <div className="flex flex-wrap gap-2">
                {seg.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-muted-foreground border border-border/50">
                    {tag}
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
