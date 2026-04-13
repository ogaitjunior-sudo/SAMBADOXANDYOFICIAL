import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { vi } from "vitest";
import Index from "@/pages/Index";

describe("Index page", () => {
  it("renders the restored landing structure with hero video and main navigation", () => {
    const { container } = render(<Index />);
    const heroVideo = container.querySelector("video");
    const featuredVideo = screen.getByTitle(/samba do xandy ao vivo no youtube/i);

    expect(screen.getAllByRole("button", { name: /inicio/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: /integrantes/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: /discografia/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: /videos/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /agenda/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /galeria/i })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /contato/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("heading", { name: /samba do xandy/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: /solicitar orcamento/i }).length).toBeGreaterThan(0);
    expect(screen.getByText(/show ao vivo em destaque/i)).toBeInTheDocument();
    expect(screen.getByText(/identidade artistica/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^xandy godoy$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^marcus felipe$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^jhon batera$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^paulo santana$/i })).toBeInTheDocument();
    expect(screen.getAllByAltText(/a raiz ta no sertao/i).length).toBeGreaterThan(0);
    expect(heroVideo).toBeInTheDocument();
    expect(featuredVideo).toBeInTheDocument();
    expect(featuredVideo).toHaveAttribute("src", expect.stringContaining("youtube.com/embed/Cn9HBWaZMAU?start=135"));
    expect(heroVideo).toHaveAttribute("autoplay");
    expect(heroVideo).toHaveAttribute("loop");
    expect((heroVideo as HTMLVideoElement).muted).toBe(true);
    expect((heroVideo as HTMLVideoElement).playsInline).toBe(true);
  });

  it("switches between integrantes and discografia without reloading the page", async () => {
    render(<Index />);

    fireEvent.click(screen.getByRole("tab", { name: /discografia/i }));

    await waitFor(() => {
      expect(screen.getByText(/a raiz ta no sertao \(ao vivo\)/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/festa de outubro 2023/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /show \| euclides da cunha/i })).toBeInTheDocument();
    expect(screen.getByText(/pagode é sentimento/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /baixar cd/i })).toHaveAttribute(
      "href",
      "/downloads/samba-do-xandy-a-raiz-ta-no-sertao-ao-vivo.zip",
    );
    expect(
      screen
        .getAllByRole("link", { name: /baixar show/i })
        .map((link) => link.getAttribute("href")),
    ).toEqual(
      expect.arrayContaining([
        "/downloads/samba-do-xandy-ao-vivo-na-festa-de-outubro-2023-ribeira-do-pombal-ba.zip",
        "/downloads/samba-do-xandy-ao-vivo-em-euclides-da-cunha.zip",
      ]),
    );
    expect(screen.getAllByRole("link", { name: /baixar show/i })).toHaveLength(2);

    expect(screen.getAllByRole("link", { name: /baixar show/i })[0]).toHaveAttribute(
      "href",
      "/downloads/samba-do-xandy-ao-vivo-na-festa-de-outubro-2023-ribeira-do-pombal-ba.zip",
    );

    fireEvent.click(screen.getByRole("tab", { name: /integrantes/i }));

    expect(screen.getByText(/voz principal/i)).toBeInTheDocument();
    expect(screen.getByText(/voz e percus/i)).toBeInTheDocument();

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

    expect(showcase).not.toBeNull();
    expect(within(showcase as HTMLElement).queryByRole("link", { name: /contato/i })).not.toBeInTheDocument();
  });

  it("opens an email draft from the booking form", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Index />);

    fireEvent.change(screen.getByPlaceholderText(/seu nome/i), {
      target: { value: "Maria" },
    });
    fireEvent.change(screen.getByPlaceholderText(/telefone/i), {
      target: { value: "(71) 99999-9999" },
    });
    fireEvent.change(screen.getByPlaceholderText(/^email$/i), {
      target: { value: "maria@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/conte sobre seu evento/i), {
      target: { value: "Quero mais informacoes sobre as proximas datas." },
    });

    fireEvent.submit(screen.getByRole("button", { name: /enviar proposta por e-mail/i }).closest("form")!);

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining("mailto:contato@sambadoxandy.com.br?subject="),
      "_self",
    );

    openSpy.mockRestore();
  });
});
