import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const RagVsQloraSection = () => {
  return (
    <section id="technology" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">// TECHNOLOGIE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            RAG a <span className="gradient-text">QLoRA</span> — jednoduše vysvětleno
          </h2>
          <p className="text-lg text-muted-foreground">
            Žádné buzzwords bez kontextu. Zde je přesné vysvětlení, co která technologie dělá a proč ji používáme.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* RAG */}
          <motion.div
            className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20">
                <span className="text-primary font-mono text-sm font-semibold">RAG</span>
              </div>
              <h3 className="text-xl font-bold">Retrieval-Augmented Generation</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              AI model se dokumenty <strong className="text-foreground">nenaučí nazpaměť</strong>. Místo toho v okamžiku dotazu
              prohledá vektorovou databázi vašich dokumentů, vybere relevantní části a na jejich základě
              vygeneruje odpověď. Data zůstávají aktuální a pod vaší kontrolou.
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Data se nikdy nestávají součástí modelu",
                "Obsah lze kdykoli aktualizovat nebo odebrat",
                "Odpovědi jsou podloženy konkrétními zdroji",
                "Nízké náklady na provoz",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-secondary/50 border border-border/50 p-4">
              <p className="text-xs font-mono text-muted-foreground">
                <span className="text-primary">Ideální pro:</span> interní dokumentaci, FAQ, onboarding, policy, technické specifikace
              </p>
            </div>
          </motion.div>

          {/* QLoRA */}
          <motion.div
            className="glass-card rounded-2xl p-8 hover:border-accent/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20">
                <span className="text-accent font-mono text-sm font-semibold">QLoRA</span>
              </div>
              <h3 className="text-xl font-bold">Fine-tuning modelu</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              QLoRA je efektivní metoda <strong className="text-foreground">doučení modelu</strong> na vašich datech.
              Model se naučí váš firemní styl, terminologii a kontext. Nenahrazuje RAG —
              ale výrazně zlepšuje kvalitu odpovědí tam, kde záleží na preciznosti.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { text: "Sjednocení stylu a tónu odpovědí", ok: true },
                { text: "Porozumění doménově specifické terminologii", ok: true },
                { text: "Snížení halucinací v odborném kontextu", ok: true },
                { text: "Náhrada za RAG", ok: false },
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  {point.ok
                    ? <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    : <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  }
                  <span className={`text-sm ${point.ok ? "text-muted-foreground" : "text-muted-foreground/50 line-through"}`}>
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-secondary/50 border border-border/50 p-4">
              <p className="text-xs font-mono text-muted-foreground">
                <span className="text-accent">Prémiová volba pro:</span> firmy s vysokými nároky na přesnost a specifický firemní jazyk
              </p>
            </div>
          </motion.div>
        </div>

        {/* Combined approach */}
        <motion.div
          className="max-w-5xl mx-auto glass-card rounded-2xl p-8 border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 font-mono text-sm font-semibold text-primary">RAG</div>
              <span className="text-muted-foreground font-mono text-sm">+</span>
              <div className="px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20 font-mono text-sm font-semibold text-accent">QLoRA</div>
              <span className="text-muted-foreground font-mono text-sm">=</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Nejlepší z obou světů.</strong> RAG zajišťuje aktuálnost a bezpečnost dat,
              QLoRA přidává doménové porozumění a konzistentní styl. Kombinace je vhodná pro firmy s komplexními
              znalostními požadavky.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RagVsQloraSection;
