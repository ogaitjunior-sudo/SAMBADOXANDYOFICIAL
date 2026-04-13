import logo from "@/assets/logo-samba-do-xandy.png";
import { siteContent } from "@/content/siteContent";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/35 py-10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <img src={logo} alt={siteContent.brand.name} className="h-10 w-auto" />

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.28em] text-foreground/55">
            <a
              href={siteContent.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              Instagram
            </a>
            <a
              href={siteContent.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              YouTube
            </a>
            <a href={siteContent.links.email} className="transition-colors hover:text-primary">
              Contato
            </a>
          </div>

          <p className="text-sm text-foreground/55">{siteContent.contact.emailAddress}</p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs tracking-[0.18em] text-foreground/42">
          Copyright {new Date().getFullYear()} {siteContent.brand.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
