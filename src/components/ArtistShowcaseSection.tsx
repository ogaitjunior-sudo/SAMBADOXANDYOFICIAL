import { useEffect, useState } from "react";
import {
  Download,
  Disc3,
  Instagram,
  Mic2,
  Music2,
  Radio,
  type LucideIcon,
} from "lucide-react";
import capaEuclidesDaCunha from "@/assets/discography/capa-euclides-da-cunha.png";
import capaFestaDeOutubro from "@/assets/discography/capa-festa-de-outubro.jpg";
import capaRaizTaNoSertao from "@/assets/discography/capa-raiz-ta-no-sertao.jpg";
import jhonBatera from "@/assets/integrantes/jhon-batera.jpeg";
import marcusFelipe from "@/assets/integrantes/marcus-felipe.jpg";
import pauloSantana from "@/assets/integrantes/paulo-santana.jpeg";
import xandyGodoy from "@/assets/integrantes/xandy-godoy.jpg";
import programaBalancoGeral from "@/assets/gallery-custom/programa-balanco-geral.jpg";
import projetoARaizTaNoSertao from "@/assets/gallery-custom/projeto-a-raiz-ta-no-sertao.jpg";
import showTiraFinoCiceroDantas from "@/assets/gallery-custom/show-tira-fino-cicero-dantas.jpg";
import { siteContent } from "@/content/siteContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ArtistTab = "integrantes" | "discografia";

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const memberCards = [
  {
    name: "Xandy Godoy",
    role: "Voz principal e viol\u00E3o",
    bio: "Conduz a identidade do projeto com repertorio forte, presenca de palco e uma leitura popular que aproxima o publico desde a primeira musica.",
    photo: xandyGodoy,
    frameClass: "",
    imageClass: "object-cover object-top",
    socials: [{ label: "Instagram", href: siteContent.links.instagram, icon: Instagram }] as SocialLink[],
  },
  {
    name: "Marcus Felipe",
    role: "Tecladista e diretor musical",
    bio: "M\u00FAsico com 18 anos de experi\u00EAncia, professor de m\u00FAsica e multi-instrumentista (teclado, piano, viol\u00E3o e baixo), transformando paix\u00E3o em som.",
    photo: marcusFelipe,
    frameClass: "bg-[linear-gradient(180deg,#eef2f7,#dfe7f0)]",
    imageClass: "object-cover object-top scale-[1.06]",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/marcus_felipe_m", icon: Instagram },
    ] as SocialLink[],
  },
  {
    name: "Jhon batera",
    role: "Baterista",
    bio: "Um cara humilde que vive a musica com o coracao e transforma cada batida em paixao na bateria.",
    photo: jhonBatera,
    frameClass: "",
    imageClass: "object-cover object-[center_22%]",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/jhonbatera_oficial/", icon: Instagram },
    ] as SocialLink[],
  },
  {
    name: "Paulo Santana",
    role: "Voz e Percus\u00E3o",
    bio: "Musicista, pai do Th\u00E9o e movido pela m\u00FAsica e pela vida. No pagode, levo hist\u00F3rias de amor, supera\u00E7\u00E3o e alegria \u2014 sempre guiado por Deus.",
    photo: pauloSantana,
    frameClass: "bg-[#090b12] p-2",
    imageClass: "object-contain object-center",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/srpauloficial/", icon: Instagram },
    ] as SocialLink[],
  },
];

const releases = [
  {
    title: "CD | A Raiz Ta no Sertao (Ao Vivo)",
    artist: siteContent.brand.name,
    format: "Download em ZIP",
    cover: capaRaizTaNoSertao,
    coverClass: "object-cover object-center",
    ctaLabel: "Baixar CD",
    href: "/downloads/samba-do-xandy-a-raiz-ta-no-sertao-ao-vivo.zip",
  },
  {
    title: "Show | Festa de Outubro 2023",
    artist: "Ribeira do Pombal - BA",
    format: "Show completo em ZIP",
    cover: capaFestaDeOutubro,
    coverClass: "object-cover object-center",
    ctaLabel: "Baixar Show",
    href: "/downloads/samba-do-xandy-ao-vivo-na-festa-de-outubro-2023-ribeira-do-pombal-ba.zip",
  },
  {
    title: "Show | Euclides da Cunha",
    artist: "Euclides da Cunha - BA",
    format: "Show completo em ZIP",
    cover: capaEuclidesDaCunha,
    coverClass: "object-cover object-center",
    ctaLabel: "Baixar Show",
    href: "/downloads/samba-do-xandy-ao-vivo-em-euclides-da-cunha.zip",
  },
];

const roleIcons = [Mic2, Music2, Disc3, Radio];

const ArtistShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState<ArtistTab>("integrantes");
  const activeIntro = siteContent.artistShowcase[activeTab];

  useEffect(() => {
    // Permite que o menu principal abra a aba correta antes de rolar para a secao.
    const handleTabNavigation = (event: Event) => {
      const customEvent = event as CustomEvent<{ tab?: ArtistTab }>;

      if (customEvent.detail?.tab) {
        setActiveTab(customEvent.detail.tab);
      }
    };

    window.addEventListener("artist-tabs:navigate", handleTabNavigation as EventListener);

    return () => {
      window.removeEventListener("artist-tabs:navigate", handleTabNavigation as EventListener);
    };
  }, []);

  return (
    <section id="artist-showcase" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,185,78,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,116,50,0.08),transparent_26%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.32em] text-primary">
            {siteContent.artistShowcase.eyebrow}
          </p>
          <h2 className="text-4xl leading-none text-foreground md:text-6xl">
            {activeIntro.title}
          </h2>
          {activeIntro.description ? (
            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/68 md:text-lg">
              {activeIntro.description}
            </p>
          ) : null}
        </div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ArtistTab)} className="mt-12">
          <TabsList className="h-auto rounded-full border border-white/10 bg-white/5 p-1.5">
            <TabsTrigger
              value="integrantes"
              onClick={() => setActiveTab("integrantes")}
              className="rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-foreground/72 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_18px_38px_rgba(255,178,61,0.22)]"
            >
              Integrantes
            </TabsTrigger>
            <TabsTrigger
              value="discografia"
              onClick={() => setActiveTab("discografia")}
              className="rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-foreground/72 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_18px_38px_rgba(255,178,61,0.22)]"
            >
              Discografia
            </TabsTrigger>
          </TabsList>

          <div className="mt-8 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,17,24,0.92),rgba(10,11,16,0.98))] p-3 md:p-4">
            <TabsContent value="integrantes" className="fade-in mt-0">
              <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
                {memberCards.map((member, index) => {
                  const RoleIcon = roleIcons[index];

                  return (
                    <article
                      key={member.name}
                      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-black/28 transition-all duration-500 hover:-translate-y-1 hover:border-primary/45 hover:bg-black/34"
                    >
                      <div className={`aspect-[4/3] overflow-hidden ${member.frameClass}`}>
                        <img
                          src={member.photo}
                          alt={member.name}
                          loading="lazy"
                          className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${member.imageClass}`}
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-primary">
                          <RoleIcon className="h-3.5 w-3.5" />
                          {member.role}
                        </span>

                        <h3 className="mt-4 text-2xl text-foreground">{member.name}</h3>
                        <p className="mt-3 flex-1 text-sm leading-7 text-foreground/66">{member.bio}</p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {member.socials.map((link) => {
                            const Icon = link.icon;

                            return (
                              <a
                                key={`${member.name}-${link.label}`}
                                href={link.href}
                                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-foreground/74 transition-all hover:border-primary hover:text-primary"
                              >
                                <Icon className="h-3.5 w-3.5" />
                                {link.label}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="discografia" className="fade-in mt-0">
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {releases.map((release) => (
                  <article
                    key={release.title}
                    className="group mx-auto flex h-full max-w-[320px] flex-col text-center transition-transform duration-500 hover:-translate-y-1"
                  >
                    <div className="overflow-hidden rounded-[18px] bg-[#0b0d12] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                      <img
                        src={release.cover}
                        alt={release.title}
                        loading="lazy"
                        className={`aspect-square h-full w-full transition-transform duration-700 group-hover:scale-[1.03] ${release.coverClass}`}
                      />
                    </div>

                    <div className="flex flex-1 flex-col items-center px-3 pb-2 pt-5">
                      <h3 className="text-balance text-[1.65rem] leading-tight text-foreground">{release.title}</h3>
                      <p className="mt-2 text-lg text-foreground/72">{release.artist}</p>
                      <p className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-primary/90">
                        {release.format}
                      </p>

                      <a
                        href={release.href}
                        download
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/12 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Download className="h-4 w-4" />
                        {release.ctaLabel}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ArtistShowcaseSection;
