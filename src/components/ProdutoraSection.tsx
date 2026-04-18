import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, ShieldCheck, Sparkles, Star } from "lucide-react";
import cristianProdutora from "@/assets/produtora/cristian-produtora.jpg";
import logoBrilhoEstrelar from "@/assets/produtora/logo-brilho-estrelar.jpg";
import { siteContent } from "@/content/siteContent";

const highlightIcons = [Sparkles, ShieldCheck, Star];
const commitmentIcons = [ShieldCheck, Sparkles, Star];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slowFade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.06,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

const ProdutoraSection = () => {
  const content = siteContent.productionPartner;

  return (
    <section id="produtora" aria-labelledby="produtora-title" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,189,97,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,128,54,0.08),transparent_24%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,18,24,0.96),rgba(8,9,13,0.98))] shadow-[0_26px_80px_rgba(0,0,0,0.34)]">
            <div className="grid gap-10 border-b border-white/10 p-6 md:p-10 xl:grid-cols-[1.12fr_0.88fr]">
              <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,188,92,0.06),rgba(255,188,92,0.01)_18%,rgba(255,255,255,0)_42%)] px-5 pb-12 pt-6 md:px-8 md:pb-12 md:pt-8">
                <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center md:bottom-5 md:justify-end md:pr-5">
                  <img
                    src={logoBrilhoEstrelar}
                    alt=""
                    aria-hidden="true"
                    className="w-24 object-contain opacity-[0.04] blur-[0.6px] saturate-0 sepia-[0.38] brightness-[1.18] md:w-[190px] md:opacity-[0.055]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(255,196,99,0.1),transparent_34%),linear-gradient(180deg,rgba(10,11,16,0.08),rgba(10,11,16,0.24)_36%,rgba(10,11,16,0.62)_72%,rgba(10,11,16,0.88))]" />

                <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative z-10">
                  <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    <Sparkles className="h-4 w-4" />
                    {content.eyebrow}
                  </p>

                  <h2
                    id="produtora-title"
                    className="mt-6 max-w-3xl text-4xl leading-none text-gradient-gold md:text-6xl"
                  >
                    {content.title}
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/70 md:text-lg">
                    {content.intro}
                  </p>

                  <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-foreground/64 md:text-base md:leading-8">
                    {content.introDetails.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {content.highlights.map((item, index) => {
                  const Icon = highlightIcons[index];

                  return (
                    <motion.article
                      key={item.title}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.07]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-2xl leading-tight text-foreground">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-foreground/66 md:text-base">{item.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-8 p-6 md:p-10 xl:grid-cols-[1.05fr_0.95fr]">
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Parceria institucional</p>
                <div className="mt-6 space-y-5 text-base leading-8 text-foreground/72 md:text-lg">
                  {content.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              <div className="space-y-5">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="rounded-[28px] border border-primary/25 bg-[linear-gradient(180deg,rgba(255,188,92,0.12),rgba(16,16,22,0.96))] p-6 md:p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Visão compartilhada</p>
                  <p className="mt-5 text-2xl leading-tight text-foreground md:text-3xl">{content.quote}</p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                  {content.commitments.map((item, index) => {
                    const Icon = commitmentIcons[index];

                    return (
                      <motion.article
                        key={item.title}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="rounded-[22px] border border-white/10 bg-black/20 p-5"
                      >
                        <div className="flex items-center gap-3 text-primary">
                          <Icon className="h-4 w-4" />
                          <p className="text-xs font-semibold uppercase tracking-[0.28em]">{item.title}</p>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-foreground/64 md:text-base">{item.description}</p>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,19,25,0.96),rgba(8,9,13,0.98))] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
              <div className="flex h-full flex-col rounded-[26px] border border-white/6 bg-[#08090d] p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">{content.logo.kicker}</p>
                    <h3 className="mt-3 text-3xl leading-tight text-foreground">{content.logo.title}</h3>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    {content.logo.badge}
                  </span>
                </div>

                <div className="relative mt-8 flex-1 overflow-hidden rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,200,109,0.18),transparent_32%),linear-gradient(180deg,#0c0d12,#07080b)] p-6">
                  <img
                    src={logoBrilhoEstrelar}
                    alt={content.logo.alt}
                    loading="lazy"
                    className="h-full w-full transform-gpu object-contain transition-transform duration-700 md:group-hover:scale-[1.04]"
                  />
                </div>

                <p className="mt-6 text-sm leading-7 text-foreground/64">{content.logo.description}</p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,19,25,0.96),rgba(8,9,13,0.98))] shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={cristianProdutora}
                  alt={content.representative.alt}
                  loading="lazy"
                  className="h-full w-full transform-gpu object-cover object-center transition-transform duration-700 md:group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,8,0.06),rgba(5,5,8,0.18)_55%,rgba(5,5,8,0.86))]" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">{content.representative.kicker}</p>
                  <h3 className="mt-3 max-w-lg text-3xl leading-tight text-foreground md:text-4xl">
                    {content.representative.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/72 md:text-base">
                    {content.representative.description}
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div
            id="produtora-contato"
            className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,18,24,0.96),rgba(10,11,16,0.98))] shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
          >
            <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">{content.contact.eyebrow}</p>
                <h3 className="mt-4 text-3xl leading-tight text-foreground md:text-5xl">{content.contact.title}</h3>
                <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/68 md:text-lg">
                  {content.contact.description}
                </p>
              </div>

              <div className="rounded-[28px] border border-primary/20 bg-primary/10 p-5 md:min-w-[320px]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Instagram oficial</p>
                <p className="mt-4 text-2xl text-foreground">{content.contact.handle}</p>

                <a
                  href={siteContent.links.producerInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-primary-foreground transition-all hover:brightness-110"
                >
                  <Instagram className="h-4 w-4" />
                  {content.contact.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.img
        src={logoBrilhoEstrelar}
        alt=""
        aria-hidden="true"
        variants={slowFade}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute bottom-10 left-1/2 z-0 w-40 max-w-none -translate-x-1/2 blur-[1px] saturate-0 sepia-[0.38] brightness-[1.18] md:w-[220px]"
      />
    </section>
  );
};

export default ProdutoraSection;
