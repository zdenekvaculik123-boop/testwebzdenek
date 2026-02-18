import { motion } from "framer-motion";
import { Database, Cpu, ShieldCheck, Gauge, LifeBuoy, Layers } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "RAG implementace",
    description: "Kompletní nasazení Retrieval-Augmented Generation nad vašimi firemními dokumenty. AI odpovídá výhradně z vašich dat, zdroje jsou transparentní a auditovatelné.",
    tags: ["Vektorová databáze", "LLM", "Dokumenty"],
  },
  {
    icon: Cpu,
    title: "QLoRA fine-tuning",
    description: "Prémiové doučení modelu na vaší terminologii a stylu. Snižuje halucinace a zlepšuje konzistenci odpovědí v doménově specifickém kontextu.",
    tags: ["Fine-tuning", "PEFT", "Doménová adaptace"],
  },
  {
    icon: Layers,
    title: "Příprava dat a indexování",
    description: "Strukturování, čištění a indexování vašich dokumentů do vektorové databáze. Základ spolehlivého RAG řešení.",
    tags: ["ETL", "Embedding", "Chunking"],
  },
  {
    icon: ShieldCheck,
    title: "Bezpečné nasazení",
    description: "On-premise nebo privátní cloud deployment s důrazem na bezpečnost dat, GDPR compliance a auditovatelnost přístupů.",
    tags: ["On-premise", "GDPR", "Audit log"],
  },
  {
    icon: Gauge,
    title: "Monitoring a kvalita",
    description: "Nastavení systémů pro průběžné sledování kvality odpovědí, detekci halucinací a automatické upozornění na degradaci.",
    tags: ["MLflow", "Evaluation", "Monitoring"],
  },
  {
    icon: LifeBuoy,
    title: "Konzultace a strategie",
    description: "Pomůžeme vám definovat vhodný use-case, vybrat správnou architekturu a naplánovat implementaci od A do Z.",
    tags: ["Roadmap", "Use-case analýza", "ROI"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
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
          <span className="text-sm font-mono text-primary mb-4 block">// SLUŽBY</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Komplexní <span className="gradient-text">AI řešení</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Od analýzy use-case po produkční nasazení — pokryjeme celý životní cyklus vašeho AI projektu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'hsl(168 80% 50% / 0.06)' }} />

              <service.icon className="w-7 h-7 text-primary mb-5" />
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-muted-foreground">
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

export default ServicesSection;
