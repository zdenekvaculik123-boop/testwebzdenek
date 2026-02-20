import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">// KONTAKT</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pojďme to <span className="gradient-text">rozjet</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Máte projekt na mysli? Ozvěte se nám a probereme, jak vám můžeme pomoci.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Jméno" className="bg-secondary/50 border-border/50 h-12" />
                <Input placeholder="E-mail" type="email" className="bg-secondary/50 border-border/50 h-12" />
              </div>
              <Input placeholder="Firma" className="bg-secondary/50 border-border/50 h-12" />
              <Textarea placeholder="Popište váš projekt nebo dotaz..." className="bg-secondary/50 border-border/50 min-h-[140px]" />
              <Button size="lg" className="w-full py-6 glow-primary">
                Odeslat zprávu
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, label: "E-mail", value: "info@tekinfra.eu" },
              { icon: Phone, label: "Telefon", value: "+420 608 557 960" },
              { icon: MapPin, label: "Adresa", value: "TEKINFRA, s.r.o. | IČ: 04356187\nZakšínská 611/3, Praha 9\nČeská republika" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-medium whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
