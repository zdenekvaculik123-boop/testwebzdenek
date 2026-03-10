import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = company
      ? `Kontakt od ${name} (${company})`
      : `Kontakt od ${name}`;
    const body = `Jméno: ${name}\nE-mail: ${email}\nFirma: ${company}\n\nZpráva:\n${message}`;
    
    window.location.href = `mailto:info@tekinfra.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: t("ct.toastTitle") || "Otevírám e-mailového klienta",
      description: t("ct.toastDesc") || "Zpráva bude odeslána přes váš e-mailový program.",
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">{t("ct.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("ct.title1")} <span className="gradient-text">{t("ct.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("ct.desc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder={t("ct.name")}
                  className="bg-secondary/50 border-border/50 h-12"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  placeholder={t("ct.email")}
                  type="email"
                  className="bg-secondary/50 border-border/50 h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Input
                placeholder={t("ct.company")}
                className="bg-secondary/50 border-border/50 h-12"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <Textarea
                placeholder={t("ct.message")}
                className="bg-secondary/50 border-border/50 min-h-[140px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button size="lg" className="w-full py-6 glow-primary" type="submit">
                {t("ct.submit")}
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
              { icon: Mail, labelKey: "ct.emailLabel", value: "info@tekinfra.eu" },
              { icon: Phone, labelKey: "ct.phoneLabel", value: "+420 608 557 960" },
              { icon: MapPin, labelKey: "ct.addressLabel", valueKey: "ct.address" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t(item.labelKey)}</div>
                  <div className="font-medium whitespace-pre-line">
                    {item.valueKey ? t(item.valueKey) : item.value}
                  </div>
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
