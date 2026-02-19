import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck, TrendingUp, Handshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Proč vznikl TEKINFRA",
    description: "Věříme, že AI má firmám reálně pomáhat — ne být jen buzzword v prezentaci. Založili jsme TEKINFRA, abychom přinášeli praktická řešení s měřitelným dopadem.",
  },
  {
    icon: Lightbulb,
    title: "Náš přístup",
    description: "Kombinujeme technickou expertízu s porozuměním byznys potřebám. Každé řešení navrhujeme na míru — žádné šablonové implementace.",
  },
  {
    icon: ShieldCheck,
    title: "Bezpečnost na prvním místě",
    description: "Data klientů bereme smrtelně vážně. Proto preferujeme on-premise nasazení a privátní infrastrukturu, kde data nikdy neopustí firemní perimetr.",
  },
  {
    icon: TrendingUp,
    title: "Transparentní spolupráce",
    description: "Žádné skryté náklady, žádné vendor lock-in. Stavíme na open-source technologiích a klient vždy vlastní kompletní řešení.",
  },
  {
    icon: Handshake,
    title: "Hledáme první partnery",
    description: "Jsme na začátku cesty a hledáme firmy, které chtějí být mezi prvními, kdo AI nad interními daty skutečně nasadí. Nabízíme zvýhodněné podmínky pro early adopters.",
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
            Naše <span className="gradient-text">hodnoty a přístup</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Jsme nový tým s jasnou vizí — přinášet firmám AI řešení, která fungují a dávají smysl.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className={`glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors ${i === values.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <v.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
