import { Mic2, Music2, Users } from "lucide-react";
import { siteContent } from "@/content/siteContent";

const icons = [Mic2, Music2, Users];

const SocialProofSection = () => {
  return (
    <section className="relative z-10 border-y border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-16">
          {siteContent.socialProof.map((item, index) => {
            const Icon = icons[index];

            return (
              <div key={item} className="flex items-center gap-3">
                <div className="rounded-full border border-primary/20 bg-primary/10 p-2 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground/80 md:text-base">{item}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-sm italic text-muted-foreground">
          "Um show que entra no evento para somar, criar conexao e fazer a pista responder."
        </p>
      </div>
    </section>
  );
};

export default SocialProofSection;
