import tekinfraLogo from "@/assets/tekinfra-logo.png";
import tekinfraLogoLight from "@/assets/tekinfra-logo-light.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/hooks/useTheme";

const Footer = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border/30 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={theme === "light" ? tekinfraLogoLight : tekinfraLogo} alt="TEKINFRA" className="h-8" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TEKINFRA, s.r.o. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
