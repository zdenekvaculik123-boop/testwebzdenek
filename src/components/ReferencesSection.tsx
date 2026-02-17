import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martin Novák",
    role: "CTO, TechVision s.r.o.",
    quote: "Díky jejich práci jsme dokázali nasadit vlastní AI modely během 3 měsíců. Infrastruktura funguje bezchybně.",
  },
  {
    name: "Jana Svobodová",
    role: "Head of Data, DataFlow a.s.",
    quote: "Profesionální přístup a hluboká znalost problematiky. Pomohli nám vybudovat kompletní MLOps pipeline.",
  },
  {
    name: "Petr Černý",
    role: "CEO, InnoAI Czech",
    quote: "Spolupráce překonala naše očekávání. Naše AI infrastruktura je teď plně pod naší kontrolou.",
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
          <span className="text-sm font-mono text-primary mb-4 block">// REFERENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Co říkají naši <span className="gradient-text">klienti</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
