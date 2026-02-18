import { motion } from "framer-motion";
import { Building2, Server, Cloud } from "lucide-react";

const options = [
  {
    icon: Server,
    badge: "On-premise",
    title: "Vaše vlastní infrastruktura",
    description: "AI běží přímo na vašich serverech nebo v privátní síti. Data nikdy neopustí váš perimetr.",
    points: [
      "Plná kontrola nad daty i výpočetními zdroji",
      "Vhodné pro firmy s přísnými compliance požadavky",
      "Bez závislosti na externích cloudy poskytovatelích",
      "GDPR a interní security policy compliance",
    ],
    accent: "primary",
  },
  {
    icon: Cloud,
    badge: "Privátní cloud",
    title: "Dedikovaný cloud deployment",
    description: "Využijeme existující cloudové modely (OpenAI, Azure, Mistral, Llama) v privátní konfiguraci s plnou kontrolou přístupu.",
    points: [
      "Rychlejší nasazení bez nutnosti vlastního HW",
      "Flexibilní škálování podle potřeby",
      "Podpora předních LLM modelů",
      "Řízený přístup a auditovatelnost",
    ],
    accent: "accent",
  },
];

const DeploymentSection = () => {
  return (
    <section id="deployment" className="py-24 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">// NASAZENÍ</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flexibilní <span className="gradient-text">možnosti nasazení</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Vy rozhodujete, kde AI běží. Data zůstávají vždy pod vaší kontrolou — ať zvolíte jakoukoli variantu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              className={`glass-card rounded-2xl p-8 hover:border-${opt.accent}/30 transition-colors`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-${opt.accent}/10 flex items-center justify-center`}>
                  <opt.icon className={`w-5 h-5 text-${opt.accent}`} />
                </div>
                <div className={`px-3 py-1 rounded-md bg-${opt.accent}/10 border border-${opt.accent}/20`}>
                  <span className={`text-${opt.accent} font-mono text-xs font-semibold`}>{opt.badge}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{opt.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{opt.description}</p>

              <ul className="space-y-2.5">
                {opt.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Building2 className={`w-4 h-4 text-${opt.accent}/70 flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
