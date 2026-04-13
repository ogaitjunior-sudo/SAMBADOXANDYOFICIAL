import { MessageCircle } from "lucide-react";

const FloatingContactButton = () => {
  const handleClick = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="animate-pulse-glow fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform hover:scale-105"
      aria-label="Ir para contato"
      style={{ boxShadow: "0 0 20px rgba(255, 196, 67, 0.35)" }}
    >
      <MessageCircle className="h-5 w-5" />
      Falar sobre o evento
    </button>
  );
};

export default FloatingContactButton;
