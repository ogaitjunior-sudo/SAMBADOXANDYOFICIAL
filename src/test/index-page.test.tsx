import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import Index from "@/pages/Index";

describe("Index page", () => {
  it("renders the restored landing structure with hero video and main navigation", () => {
    const { container } = render(<Index />);
    const heroVideo = container.querySelector("video");
    const featuredVideo = screen.getByTitle(/samba do xandy ao vivo no youtube/i);

    expect(screen.getAllByRole("button", { name: /in.cio/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: /integrantes/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: /discografia/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: /v.deos/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /agenda/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /galeria/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /produtora/i })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /contato/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("heading", { name: /samba do xandy/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: /solicitar or.amento/i }).length).toBeGreaterThan(0);
    expect(screen.getByText(/show ao vivo em destaque/i)).toBeInTheDocument();
    expect(screen.getByText(/identidade art.stica/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^xandy godoy$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^marcus felipe$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^jhon batera$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^paulo santana$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^tiago reis$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^ricardo godoy$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /parceria com a brilho estrelar/i })).toBeInTheDocument();
    expect(screen.getAllByAltText(/a raiz t.*no sert.o/i).length).toBeGreaterThan(0);
    expect(heroVideo).toBeInTheDocument();
    expect(featuredVideo).toBeInTheDocument();
    expect(featuredVideo).toHaveAttribute("src", expect.stringContaining("youtube.com/embed/Cn9HBWaZMAU?start=135"));
    expect(heroVideo).toHaveAttribute("autoplay");
    expect(heroVideo).toHaveAttribute("loop");
    expect((heroVideo as HTMLVideoElement).muted).toBe(true);
    expect((heroVideo as HTMLVideoElement).playsInline).toBe(true);
    expect(screen.getByRole("link", { name: /acessar instagram/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/brilhoestrelar/",
    );
  });

  it("switches between integrantes and discografia without reloading the page", async () => {
    render(<Index />);

    fireEvent.click(screen.getByRole("tab", { name: /discografia/i }));

    await waitFor(() => {
      expect(screen.getByText(/a raiz t.*no sert.o \(ao vivo\)/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/festa de outubro 2023/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ao vivo em euclides da cunha/i })).toBeInTheDocument();
    expect(screen.getByText(/pagode.*sentimento/i)).toBeInTheDocument();
    expect(screen.getByText(/lbum ao vivo/i)).toBeInTheDocument();
    expect(screen.getAllByText(/show ao vivo/i).length).toBeGreaterThanOrEqual(2);
    expect(
      screen
        .getAllByRole("link", { name: /baixar cd/i })
        .map((link) => link.getAttribute("href")),
    ).toEqual([
      "https://suamusica.com.br/SambadoXandy/samba-do-xandy-a-raiz-ta-no-sertao-ao-vivo",
      "https://suamusica.com.br/SambadoXandy/samba-do-xandy-ao-vivo-na-festa-de-outubro-2023-ribeira-do-pombal-ba",
      "https://suamusica.com.br/SambadoXandy/samba-do-xandy-ao-vivo-em-euclides-da-cunha",
    ]);

    fireEvent.click(screen.getByRole("tab", { name: /integrantes/i }));

    expect(screen.getByRole("heading", { name: /xandy godoy/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /\+ seguir perfil/i })).toBeInTheDocument();
    expect(screen.getAllByText(/voz e percus/i).length).toBeGreaterThanOrEqual(2);

    const marcusCard = screen.getByRole("heading", { name: /marcus felipe/i }).closest("article");

    expect(marcusCard).not.toBeNull();
    expect(within(marcusCard as HTMLElement).getByText(/tecladista e diretor musical/i)).toBeInTheDocument();
    expect(
      within(marcusCard as HTMLElement).getByRole("link", { name: /instagram/i }),
    ).toHaveAttribute("href", "https://www.instagram.com/marcus_felipe_m");

    const jhonCard = screen.getByRole("heading", { name: /jhon batera/i }).closest("article");

    expect(jhonCard).not.toBeNull();
    expect(within(jhonCard as HTMLElement).getByText(/^baterista$/i)).toBeInTheDocument();
    expect(
      within(jhonCard as HTMLElement).getByRole("link", { name: /instagram/i }),
    ).toHaveAttribute("href", "https://www.instagram.com/jhonbatera_oficial/");

    const pauloCard = screen.getByRole("heading", { name: /paulo santana/i }).closest("article");

    expect(pauloCard).not.toBeNull();
    expect(within(pauloCard as HTMLElement).getByText(/voz e percus/i)).toBeInTheDocument();
    expect(
      within(pauloCard as HTMLElement).getByRole("link", { name: /instagram/i }),
    ).toHaveAttribute("href", "https://www.instagram.com/srpauloficial/");

    const showcase = document.getElementById("artist-showcase");
    const tiagoCard = screen.getByRole("heading", { name: /tiago reis/i }).closest("article");

    expect(tiagoCard).not.toBeNull();
    expect(within(tiagoCard as HTMLElement).getByText(/^cavaquinho$/i)).toBeInTheDocument();
    expect(
      within(tiagoCard as HTMLElement).getByRole("link", { name: /instagram/i }),
    ).toHaveAttribute("href", "https://www.instagram.com/ogaitjunior/");

    const ricardoCard = screen.getByRole("heading", { name: /ricardo godoy/i }).closest("article");

    expect(ricardoCard).not.toBeNull();
    expect(within(ricardoCard as HTMLElement).getByText(/voz e percuss/i)).toBeInTheDocument();
    expect(
      within(ricardoCard as HTMLElement).getByRole("link", { name: /instagram/i }),
    ).toHaveAttribute("href", "https://www.instagram.com/ricardolemos1977/");

    const leoCard = screen.getByRole("heading", { name: /l.o lapa/i }).closest("article");

    expect(leoCard).not.toBeNull();
    expect(within(leoCard as HTMLElement).getByText(/produ.*o e percuss.*o/i)).toBeInTheDocument();
    expect(
      within(leoCard as HTMLElement).getByRole("link", { name: /instagram/i }),
    ).toHaveAttribute("href", "https://www.instagram.com/lapa5482?igsh=YjU5czhqMnF0d2ps");

    expect(showcase).not.toBeNull();
    expect(within(showcase as HTMLElement).queryByRole("link", { name: /contato/i })).not.toBeInTheDocument();
  });

  it("links the booking CTA directly to WhatsApp", () => {
    render(<Index />);

    expect(screen.getByRole("link", { name: /chamar no whatsapp/i })).toHaveAttribute(
      "href",
      "https://wa.me/557583459255",
    );
    expect(screen.queryByPlaceholderText(/e-mail/i)).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/conte sobre seu evento/i)).not.toBeInTheDocument();
  });
});
