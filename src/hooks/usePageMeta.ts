import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  canonical?: string;
}

const BASE_URL = "https://testwebzdenek.lovable.app";

export function usePageMeta({ title, description, ogTitle, ogDescription, ogUrl, canonical }: PageMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setCanonical = (href: string) => {
      let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta("description", description);
    setMeta("og:title", ogTitle || title, "property");
    setMeta("og:description", ogDescription || description, "property");
    setMeta("og:url", ogUrl || canonical || BASE_URL, "property");
    setMeta("twitter:title", ogTitle || title, "name");
    setMeta("twitter:description", ogDescription || description, "name");

    if (canonical) {
      setCanonical(canonical);
    }

    return () => {
      // Reset to defaults on unmount
      document.title = "TekInfra — interní AI pro vaše data";
      setMeta("description", "Interní AI jako konkurenční výhoda. Bezpečnost a ochrana vašich dat. AI infrastruktura a poradenství od TEKINFRA.");
      setMeta("og:title", "TekInfra — interní AI pro vaše data", "property");
      setMeta("og:description", "Interní AI jako konkurenční výhoda. Bezpečnost a ochrana vašich dat. AI infrastruktura a poradenství od TEKINFRA.", "property");
      setMeta("og:url", BASE_URL, "property");
      setMeta("twitter:title", "TekInfra — interní AI pro vaše data", "name");
      setMeta("twitter:description", "Interní AI jako konkurenční výhoda. Bezpečnost a ochrana vašich dat. AI infrastruktura a poradenství od TEKINFRA.", "name");
      setCanonical(BASE_URL + "/");
    };
  }, [title, description, ogTitle, ogDescription, ogUrl, canonical]);
}
