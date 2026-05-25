import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import programaBalancoGeral from "@/assets/gallery-custom/programa-balanco-geral.jpg";
import projetoARaizTaNoSertao from "@/assets/gallery-custom/projeto-a-raiz-ta-no-sertao.jpg";
import recebimentoTrofeuTvBahia from "@/assets/gallery-custom/recebimento-trofeu-tv-bahia.png";
import showDia31RibeiraDoAmparo from "@/assets/gallery-custom/show-dia-31-ribeira-do-amparo.jpg";
import showTiraFinoCiceroDantas from "@/assets/gallery-custom/show-tira-fino-cicero-dantas.jpg";
import show from "@/assets/gallery-custom/show.jpg";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/siteContent";

const galleryItems = [
  {
    src: programaBalancoGeral,
    alt: "Participacao do Samba do Xandy no programa Balanco Geral",
    frameClass: "bg-[#06070d] p-2 md:p-3",
    imageClass: "object-contain object-center",
  },
  {
    src: recebimentoTrofeuTvBahia,
    alt: "Recebimento do troféu e cobertura da TV Bahia, homenagem do Swing do Pelô.",
    frameClass: "bg-[#06070d] p-2 md:p-3",
    imageClass: "object-contain object-center",
  },
  {
    src: projetoARaizTaNoSertao,
    alt: "Projeto A Raiz Ta no Sertao",
    frameClass: "bg-[#06070d] p-2 md:p-3",
    imageClass: "object-contain object-center",
  },
  {
    src: show,
    alt: "Samba do Xandy ao vivo no palco",
    frameClass: "bg-[#06070d] p-2 md:p-3",
    imageClass: "object-contain object-center",
  },
  {
    src: showTiraFinoCiceroDantas,
    alt: "Show Tira Fino em Cicero Dantas",
    frameClass: "bg-[#06070d] p-2 md:p-3",
    imageClass: "object-contain object-center",
  },
  {
    src: showDia31RibeiraDoAmparo,
    alt: "Show do dia 31 em Ribeira do Amparo",
    frameClass: "bg-[#06070d] p-2 md:p-3",
    imageClass: "object-contain object-center",
  },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = galleryItems[activeIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1));
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1));
  };

  return (
    <section id="galeria" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">{siteContent.gallery.eyebrow}</p>
          <h2 className="text-4xl leading-none text-foreground md:text-6xl">{siteContent.gallery.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-foreground/68 md:text-lg">
            {siteContent.gallery.description}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(16,17,24,0.94),rgba(10,11,16,0.98))] shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
            <div className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              {String(activeIndex + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
            </div>

            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[16/9]">
              <div className={`absolute inset-0 ${activeItem.frameClass}`}>
                <img
                  key={activeItem.alt}
                  src={activeItem.src}
                  alt={activeItem.alt}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-700 ${activeItem.imageClass}`}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#06070d] via-[#06070d]/14 to-transparent" />

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={showPrevious}
                aria-label="Foto anterior"
                className="absolute left-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full border-primary/35 bg-black/45 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={showNext}
                aria-label="Proxima foto"
                className="absolute right-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full border-primary/35 bg-black/45 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">Momento</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/82 md:text-base md:leading-7">
                  {activeItem.alt}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {galleryItems.map((item, index) => (
              <button
                key={item.alt}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Abrir foto ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-10 bg-primary" : "w-2.5 bg-white/18 hover:bg-white/32"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
