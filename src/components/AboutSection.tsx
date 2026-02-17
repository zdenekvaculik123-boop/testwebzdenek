import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Přesnost na míru",
    description: "Každé řešení navrhujeme specificky pro vaše potřeby a infrastrukturu.",
  },
  {
    icon: Users,
    title: "Expertní tým",
    description: "Náš tým tvoří specialisté s bohatými zkušenostmi v oblasti AI a ML.",
  },
  {
    icon: Lightbulb,
    title: "Inovativní přístup",
    description: "Používáme nejnovější technologie a postupy pro maximální efektivitu.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">// O NÁS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stavíme <span className="gradient-text">budoucnost</span> vašeho podnikání
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jsme tým AI inženýrů a konzultantů, kteří pomáhají firmám vybudovat vlastní
            AI infrastrukturu. Věříme, že in-house řešení přináší větší kontrolu, bezpečnost
            a dlouhodobou úsporu nákladů.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-primary transition-shadow">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
