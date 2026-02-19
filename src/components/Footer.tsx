import tekinfraLogo from "@/assets/tekinfra-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={tekinfraLogo} alt="TEKINFRA" className="h-6" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TEKINFRA, s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
