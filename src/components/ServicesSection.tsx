import { motion } from "framer-motion";
import { Server, Brain, Shield, Workflow, Database, Gauge } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "GPU infrastruktura",
    description: "Návrh a nasazení on-premise i cloudové GPU infrastruktury optimalizované pro trénování a inference AI modelů.",
    tags: ["NVIDIA", "CUDA", "Kubernetes"],
  },
  {
    icon: Brain,
    title: "Trénování modelů",
    description: "Fine-tuning a trénování jazykových, vizuálních i specializovaných modelů na vašich vlastních datech.",
    tags: ["LLM", "Computer Vision", "NLP"],
  },
  {
    icon: Shield,
    title: "Bezpečnost & compliance",
    description: "Zajištění bezpečnosti dat a souladu s regulatorními požadavky při práci s AI modely.",
    tags: ["GDPR", "On-premise", "Audit"],
  },
  {
    icon: Workflow,
    title: "MLOps & automatizace",
    description: "Nastavení CI/CD pipeline pro ML modely, monitoring a automatizované retrénování.",
    tags: ["MLflow", "Kubeflow", "Monitoring"],
  },
  {
    icon: Database,
    title: "Datové inženýrství",
    description: "Příprava, čištění a správa datových pipeline pro efektivní trénování modelů.",
    tags: ["ETL", "Data Lake", "Spark"],
  },
  {
    icon: Gauge,
    title: "Konzultace & strategie",
    description: "Poradenství v oblasti AI strategie, výběr technologií a plánování implementace.",
    tags: ["Roadmap", "ROI", "Strategie"],
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
            Od návrhu infrastruktury po trénování modelů — pokryjeme celý životní cyklus vašeho AI projektu.
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
              
              <service.icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
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
