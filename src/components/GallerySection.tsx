import programaBalancoGeral from "@/assets/gallery-custom/programa-balanco-geral.jpg";
import projetoARaizTaNoSertao from "@/assets/gallery-custom/projeto-a-raiz-ta-no-sertao.jpg";
import showDia31RibeiraDoAmparo from "@/assets/gallery-custom/show-dia-31-ribeira-do-amparo.jpg";
import showTiraFinoCiceroDantas from "@/assets/gallery-custom/show-tira-fino-cicero-dantas.jpg";
import show from "@/assets/gallery-custom/show.jpg";
import { siteContent } from "@/content/siteContent";

const galleryItems = [
  {
    src: programaBalancoGeral,
    alt: "Participacao do Samba do Xandy no programa Balanco Geral",
    span: "sm:col-span-2",
    aspectClass: "aspect-[4/3] lg:aspect-[16/10]",
    frameClass: "bg-[#06070d] p-3",
    imageClass: "object-contain object-center",
  },
  {
    src: projetoARaizTaNoSertao,
    alt: "Projeto A Raiz Ta no Sertao",
    span: "",
    aspectClass: "aspect-[4/5]",
    frameClass: "",
    imageClass: "object-cover object-top",
  },
  {
    src: show,
    alt: "Samba do Xandy ao vivo no palco",
    span: "",
    aspectClass: "aspect-[4/3]",
    frameClass: "",
    imageClass: "object-cover object-center",
  },
  {
    src: showTiraFinoCiceroDantas,
    alt: "Show Tira Fino em Cicero Dantas",
    span: "sm:col-span-2",
    aspectClass: "aspect-[4/3] lg:aspect-[16/10]",
    frameClass: "bg-[#06070d] p-3",
    imageClass: "object-contain object-center",
  },
  {
    src: showDia31RibeiraDoAmparo,
    alt: "Show do dia 31 em Ribeira do Amparo",
    span: "",
    aspectClass: "aspect-[4/3]",
    frameClass: "",
    imageClass: "object-cover object-center",
  },
];

const GallerySection = () => {
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.alt}
              className={`group relative overflow-hidden rounded-[24px] border border-border bg-card/70 ${item.span} ${item.aspectClass}`}
            >
              <div className={`absolute inset-0 ${item.frameClass}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${item.imageClass}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">Momento</p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/82">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
