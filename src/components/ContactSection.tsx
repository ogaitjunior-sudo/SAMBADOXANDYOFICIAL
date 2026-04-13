import { useState } from "react";
import { ArrowUpRight, Instagram, Mail, Youtube } from "lucide-react";
import { siteContent } from "@/content/siteContent";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contato premium - ${siteContent.brand.name}`);
    const body = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}.\n\nEmail: ${form.email}\n\nMensagem:\n${form.mensagem}`,
    );

    window.open(`${siteContent.links.email}?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <section id="contato" className="relative py-20 md:py-32">
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(circle_at_bottom,rgba(255,173,75,0.14),transparent_62%)]" />
      <div className="container relative mx-auto px-4">
        <div className="overflow-hidden rounded-[32px] border border-primary/20 bg-[linear-gradient(145deg,rgba(20,15,15,0.96),rgba(12,12,16,0.94))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.42)] md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_0.92fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">{siteContent.finalCta.eyebrow}</p>
              <h2 className="max-w-2xl text-4xl leading-none text-foreground md:text-6xl">
                {siteContent.finalCta.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-foreground/72 md:text-lg">
                {siteContent.finalCta.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <a
                  href={siteContent.links.email}
                  className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:border-primary/40"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-primary">E-mail</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/80">{siteContent.contact.emailAddress}</p>
                </a>
                <a
                  href={siteContent.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:border-primary/40"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-primary">Instagram</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/80">{siteContent.contact.instagramHandle}</p>
                </a>
                <a
                  href={siteContent.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:border-primary/40"
                >
                  <Youtube className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-primary">Canal</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/80">Conteúdo oficial e momentos ao vivo</p>
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-card/65 p-6 backdrop-blur-sm md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Contato rápido</p>
              <h3 className="mt-4 text-3xl text-foreground">Abra o canal com a produção</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">
                Deixe uma mensagem e abra um e-mail pronto para continuar a conversa.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-background/80 px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-background/80 px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <textarea
                  placeholder="Conte o que voce deseja criar ou reservar..."
                  rows={5}
                  required
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full resize-none rounded-2xl border border-border bg-background/80 px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-sm font-bold uppercase tracking-[0.25em] text-accent-foreground transition-all hover:brightness-110"
                >
                  Garanta seu acesso
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
