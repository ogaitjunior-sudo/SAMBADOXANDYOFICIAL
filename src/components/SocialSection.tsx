import { siteContent } from "@/content/siteContent";

const SocialSection = () => {
  return (
    <section id="redes" className="py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Acompanhe</p>
        <h2 className="mb-10 font-heading text-4xl text-gradient-gold md:text-5xl">REDES SOCIAIS</h2>

        <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href={siteContent.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center gap-4 rounded-xl border border-border bg-card px-8 py-5 transition-all hover:border-primary/50 sm:w-auto"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-foreground/60 transition-colors group-hover:text-primary">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <div className="text-left">
              <div className="font-bold text-foreground">Instagram</div>
              <div className="text-sm text-muted-foreground">{siteContent.contact.instagramHandle}</div>
            </div>
          </a>

          <a
            href={siteContent.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center gap-4 rounded-xl border border-border bg-card px-8 py-5 transition-all hover:border-primary/50 sm:w-auto"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-foreground/60 transition-colors group-hover:text-primary">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <div className="text-left">
              <div className="font-bold text-foreground">YouTube</div>
              <div className="text-sm text-muted-foreground">{siteContent.brand.name}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
