import projectBanner from "@/assets/raiz-ta-no-sertao-banner.svg";
import { siteContent } from "@/content/siteContent";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {siteContent.featuredProject.eyebrow}
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[28px] border border-border bg-card/80 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <img
              src={projectBanner}
              alt={siteContent.featuredProject.title}
              loading="lazy"
              className="w-full border-b border-border object-cover"
            />
            <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">Banner do projeto</p>
                <p className="max-w-2xl text-base leading-7 text-foreground/72 md:text-lg">
                {siteContent.featuredProject.description}
                </p>
              </div>
              <a
                href={siteContent.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110 md:min-w-[220px]"
              >
                Assistir agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
