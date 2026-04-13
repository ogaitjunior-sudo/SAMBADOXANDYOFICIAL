import { useState } from "react";
import gallery3 from "@/assets/gallery-3.jpg";
import { siteContent } from "@/content/siteContent";

const BookingSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Solicitacao de show - ${siteContent.brand.name}`);
    const body = encodeURIComponent(
      `Ola! Meu nome e ${form.nome}.\nGostaria de contratar o ${siteContent.brand.name}.\n\nTelefone: ${form.telefone}\nEmail: ${form.email}\n\nDetalhes do evento:\n${form.mensagem || "Ainda estou organizando as informacoes."}`,
    );

    window.open(`${siteContent.links.email}?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 z-0">
        <img src={gallery3} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-4xl text-foreground sm:text-5xl md:text-7xl">
            LEVE O <span className="text-gradient-gold">{siteContent.brand.name.toUpperCase()}</span>
            <br />
            PARA SEU EVENTO
          </h2>
          <p className="mb-12 text-lg text-foreground/60">
            Preencha os dados principais e abriremos um rascunho de e-mail com a solicitacao pronta para envio.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mb-8 max-w-md space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-foreground backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Telefone"
                required
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-foreground backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-foreground backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Conte sobre seu evento..."
              rows={4}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="w-full resize-none rounded-xl border border-border bg-card/80 px-4 py-3 text-foreground backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="flex-1 rounded-xl bg-primary py-4 text-lg font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
              >
                Enviar proposta por e-mail
              </button>
              <a
                href={siteContent.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl border-2 border-foreground/20 py-4 text-center text-lg font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary"
              >
                Abrir Instagram
              </a>
            </div>
          </form>

          <div className="mx-auto grid max-w-3xl gap-4 text-left md:grid-cols-3">
            <a
              href={siteContent.links.email}
              className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:border-primary/50"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">E-mail</p>
              <p className="font-medium text-foreground">{siteContent.contact.emailAddress}</p>
            </a>
            <a
              href={siteContent.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:border-primary/50"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Instagram</p>
              <p className="font-medium text-foreground">{siteContent.contact.instagramHandle}</p>
            </a>
            <a
              href={siteContent.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:border-primary/50"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Canal</p>
              <p className="font-medium text-foreground">YouTube oficial</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
