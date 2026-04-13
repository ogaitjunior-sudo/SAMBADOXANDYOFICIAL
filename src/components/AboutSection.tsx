import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import gallery4 from "@/assets/gallery-4.jpg";
import { siteContent } from "@/content/siteContent";
import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="sobre" className="relative py-20 md:py-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,173,75,0.16),transparent_60%)]" />
      <div
        ref={ref}
        className={`container relative mx-auto px-4 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">{siteContent.about.eyebrow}</p>
            <h2 className="max-w-2xl text-4xl leading-none text-foreground md:text-6xl">
              {siteContent.about.title}
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-foreground/72 md:text-lg">
              {siteContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {siteContent.about.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 px-4 py-4 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm font-medium leading-6 text-foreground/82">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary/80"
            >
              Falar com a produção
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -left-5 top-6 hidden h-32 w-32 rounded-full bg-primary/12 blur-3xl md:block" />
            <div className="overflow-hidden rounded-[28px] border border-border bg-card/80 shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
              <img src={gallery4} alt="Clima visual do projeto ao vivo" className="h-[420px] w-full object-cover" />
              <div className="grid gap-4 border-t border-border bg-black/30 p-6 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">Direção visual</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/72">
                    Escuro elegante, luz quente e composições pensadas para reforcar exclusividade.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">Experiência</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/72">
                    Estrutura que conduz o usuario do impacto inicial ate a decisão de contato.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
