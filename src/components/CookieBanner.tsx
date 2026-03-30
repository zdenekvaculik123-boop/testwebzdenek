import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useLanguage } from "@/i18n/LanguageContext";

const CookieBanner = () => {
  const { status, accept, deny } = useCookieConsent();
  const { lang } = useLanguage();

  const text =
    lang === "cs"
      ? "Používáme cookies ke zlepšení vašeho zážitku z prohlížení a k analýze návštěvnosti."
      : "We use cookies to improve your browsing experience and analyse site traffic.";

  const acceptLabel = lang === "cs" ? "Souhlasím" : "Accept";
  const denyLabel = lang === "cs" ? "Odmítnout" : "Deny";

  return (
    <AnimatePresence>
      {status === "pending" && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-xl p-4 md:p-6 shadow-2xl backdrop-blur-lg flex flex-col sm:flex-row items-center gap-4">
            <Cookie className="w-6 h-6 text-primary shrink-0" />
            <p className="text-sm text-muted-foreground flex-1 text-center sm:text-left">
              {text}
            </p>
            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={deny}
                className="border-border/50 text-muted-foreground hover:text-foreground"
              >
                {denyLabel}
              </Button>
              <Button size="sm" className="glow-primary" onClick={accept}>
                {acceptLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
