import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logoBrilhoEstrelar from "@/assets/produtora/logo-brilho-estrelar.jpg";
import { siteContent } from "@/content/siteContent";

const INTRO_EVENT = "produtora:intro-request";
const SESSION_KEY = "samba-do-xandy:produtora-intro-seen:v2";
const MAX_INTRO_DURATION_MS = 3800;
const canForceVideoLoad = () => typeof navigator !== "undefined" && !navigator.userAgent.includes("jsdom");

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.36,
      ease: "easeInOut",
    },
  },
};

const panelVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 14,
    scale: 0.99,
    transition: {
      duration: 0.28,
      ease: "easeInOut",
    },
  },
};

const scrollToProdutora = () => {
  const target = document.querySelector("#produtora") as HTMLElement | null;
  target?.scrollIntoView?.({ behavior: "smooth" });
};

const ProdutoraIntroOverlay = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const warmupVideoRef = useRef<HTMLVideoElement | null>(null);
  const finishTimerRef = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const clearFinishTimer = () => {
    if (finishTimerRef.current !== null) {
      window.clearTimeout(finishTimerRef.current);
      finishTimerRef.current = null;
    }
  };

  const finishIntro = () => {
    clearFinishTimer();

    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Ignora problemas de storage e segue com a navegacao.
    }

    setIsOpen(false);
    window.setTimeout(() => {
      scrollToProdutora();
    }, 40);
  };

  useEffect(() => {
    const warmupVideo = document.createElement("video");
    warmupVideo.preload = "auto";
    warmupVideo.muted = true;
    warmupVideo.playsInline = true;
    warmupVideo.src = siteContent.media.producerIntroVideoSrc;
    if (canForceVideoLoad()) {
      warmupVideo.load();
    }
    warmupVideoRef.current = warmupVideo;

    return () => {
      warmupVideo.pause();
      warmupVideo.removeAttribute("src");
      if (canForceVideoLoad()) {
        warmupVideo.load();
      }
      warmupVideoRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleRequest = () => {
      let introSeen = false;

      try {
        introSeen = sessionStorage.getItem(SESSION_KEY) === "true";
      } catch {
        introSeen = false;
      }

      if (introSeen) {
        scrollToProdutora();
        return;
      }

      setIsOpen(true);
    };

    window.addEventListener(INTRO_EVENT, handleRequest as EventListener);

    return () => {
      window.removeEventListener(INTRO_EVENT, handleRequest as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      clearFinishTimer();
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.setProperty("overflow", "hidden");

    const video = videoRef.current;

    clearFinishTimer();
    finishTimerRef.current = window.setTimeout(() => {
      finishIntro();
    }, MAX_INTRO_DURATION_MS);

    if (video) {
      try {
        video.preload = "auto";
        if (canForceVideoLoad()) {
          video.load();
        }
        video.currentTime = 0;
        const playAttempt = video.play();

        if (playAttempt && typeof playAttempt.catch === "function") {
          playAttempt.catch(() => {
            // O botao de pular continua disponivel se o navegador bloquear autoplay.
          });
        }
      } catch {
        // O botao de pular continua disponivel se o ambiente nao suportar reproducao automatica.
      }
    }

    return () => {
      clearFinishTimer();
      document.body.style.removeProperty("overflow");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        finishIntro();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="produtora-intro-overlay"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(4,5,8,0.92)] px-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Intro da Produtora"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,92,0.14),transparent_26%),linear-gradient(180deg,rgba(6,7,10,0.88),rgba(6,7,10,0.96))]" />

          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 inline-block max-w-full"
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <img
                src={logoBrilhoEstrelar}
                alt=""
                aria-hidden="true"
                className="w-40 object-contain opacity-[0.12] blur-[1.4px] saturate-0 sepia-[0.42] brightness-[1.2] md:w-56"
              />
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,19,26,0.94),rgba(8,9,13,0.98))] shadow-[0_30px_90px_rgba(0,0,0,0.48)]">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                preload="auto"
                data-testid="produtora-intro-video"
                className="block h-auto max-h-[78vh] w-auto max-w-full bg-black object-contain object-center"
                onEnded={finishIntro}
              >
                <source src={siteContent.media.producerIntroVideoSrc} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,0.12),rgba(6,7,10,0.18)_35%,rgba(6,7,10,0.72))]" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-6">
                <div className="rounded-full border border-primary/20 bg-black/28 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
                  Produtora
                </div>

                <button
                  type="button"
                  onClick={finishIntro}
                  className="rounded-full border border-white/12 bg-black/26 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/82 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Pular intro
                </button>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/26 px-4 py-3 backdrop-blur-sm">
                  <img src={logoBrilhoEstrelar} alt="" aria-hidden="true" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">Brilho Estrelar</p>
                    <p className="text-sm text-white/82">Direção criativa e presença visual premium</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ProdutoraIntroOverlay;
