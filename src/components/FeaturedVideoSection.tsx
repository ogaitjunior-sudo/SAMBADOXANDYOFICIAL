import { siteContent } from "@/content/siteContent";

const FeaturedVideoSection = () => {
  return (
    <section id="videos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-4xl text-foreground md:text-6xl">
            SINTA A ENERGIA DO
            <br />
            <span className="text-gradient-gold">{siteContent.brand.name.toUpperCase()}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Assista ao video em destaque, cortes de show e bastidores no canal oficial.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card/60 shadow-[0_0_45px_rgba(255,182,39,0.18)]">
          <div className="relative aspect-video">
            <iframe
              src={siteContent.featuredVideo.embedUrl}
              title={siteContent.featuredVideo.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-border bg-card/80 px-6 py-5 text-left md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Video em destaque</p>
              <h3 className="text-xl font-semibold text-foreground">{siteContent.featuredVideo.description}</h3>
            </div>

            <a
              href={siteContent.featuredVideo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition hover:border-primary hover:bg-primary/10"
            >
              {siteContent.featuredVideo.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;
