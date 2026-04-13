import { AudioWaveform, Camera, Sparkles, Ticket } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { useInView } from "@/hooks/useInView";

const iconMap = {
  imersao: Sparkles,
  presenca: AudioWaveform,
  conversao: Ticket,
  mobile: Camera,
} as const;

const ExperienceCard = ({
  title,
  description,
  iconKey,
  delayClass,
}: {
  title: string;
  description: string;
  iconKey: keyof typeof iconMap;
  delayClass: string;
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const Icon = iconMap[iconKey];

  return (
    <div
      ref={ref}
      className={`rounded-[24px] border border-border bg-card/75 p-6 backdrop-blur-sm transition-all duration-700 ${delayClass} ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-5 inline-flex rounded-2xl border border-primary/25 bg-primary/10 p-3 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-2xl text-foreground">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-foreground/70">{description}</p>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Experiência</p>
          <h2 className="text-4xl leading-none text-foreground md:text-6xl">
            Cada bloco da página trabalha para transmitir exclusividade, energia e desejo de participação.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.experience.map((item, index) => (
            <ExperienceCard
              key={item.id}
              title={item.title}
              description={item.description}
              iconKey={item.id as keyof typeof iconMap}
              delayClass={index % 2 === 0 ? "md:delay-75" : "md:delay-150"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
