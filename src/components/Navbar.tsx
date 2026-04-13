import { useEffect, useState } from "react";
import logo from "@/assets/logo-samba-do-xandy.png";
import { siteContent } from "@/content/siteContent";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const tabTargets = new Set(["#integrantes", "#discografia"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);

    if (tabTargets.has(href)) {
      window.dispatchEvent(
        new CustomEvent("artist-tabs:navigate", {
          detail: { tab: href.replace("#", "") },
        }),
      );
      document.querySelector("#artist-showcase")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-background/84 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <button type="button" onClick={() => scrollTo("#hero")} aria-label="Voltar ao início">
          <img src={logo} alt={siteContent.brand.name} className="h-10 w-auto md:h-12" />
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/34 px-5 py-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.26)] backdrop-blur-md md:flex">
          {siteContent.navigation.map((item) => (
            <button
              type="button"
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="rounded-full px-3 py-2 text-sm font-bold tracking-[0.16em] text-white [text-shadow:0_0_12px_rgba(255,255,255,0.28)] transition-all duration-300 hover:bg-white/8 hover:text-primary hover:[text-shadow:0_0_20px_rgba(255,191,92,0.78)]"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo(siteContent.hero.primaryAction.href)}
            className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-foreground transition-all hover:brightness-110"
          >
            {siteContent.hero.primaryAction.label}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-background/96 px-4 pb-5 pt-3 backdrop-blur-xl md:hidden">
          <div className="space-y-2">
            {siteContent.navigation.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-bold tracking-[0.16em] text-white [text-shadow:0_0_10px_rgba(255,255,255,0.22)] transition-all hover:bg-white/5 hover:text-primary hover:[text-shadow:0_0_18px_rgba(255,191,92,0.72)]"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo(siteContent.hero.primaryAction.href)}
              className="block w-full rounded-2xl bg-accent px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground"
            >
              {siteContent.hero.primaryAction.label}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
