import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { siteContent } from "@/content/siteContent";

const AgendaSection = () => {
  return (
    <section id="agenda" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Agenda</p>
          <h2 className="text-4xl leading-none text-foreground md:text-6xl">
            Proximas datas para quem quer levar a energia do palco para uma noite memoravel.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-4">
          {siteContent.events.map((event, index) => (
            <div
              key={`${event.date}-${event.title}-${event.city}`}
              className={`grid gap-5 rounded-[26px] border p-6 md:grid-cols-[140px_1fr] md:items-center ${
                index === 0
                  ? "border-primary/30 bg-[linear-gradient(135deg,rgba(255,178,61,0.12),rgba(255,178,61,0.02))]"
                  : "border-border bg-card/70"
              }`}
            >
              <div className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Data</p>
                <p className="mt-3 text-4xl leading-none text-foreground">{event.date.split(" ")[0]}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-foreground/58">{event.date.split(" ")[1]}</p>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <MapPin className="h-4 w-4" />
                    {event.city}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-foreground/55">
                    <CalendarDays className="h-4 w-4" />
                    {event.weekday}
                  </span>
                  {event.time ? (
                    <span className="inline-flex items-center gap-2 text-sm text-foreground/55">
                      <Clock3 className="h-4 w-4" />
                      {event.time}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-3xl text-foreground">{event.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/68">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
