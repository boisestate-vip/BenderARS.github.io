import React, { useEffect, useState } from "react";

/* Helpers */
const fmt = (d) =>
  d ? new Date(d).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "TBD";

const status = (date) => {
  if (!date) return "Planning";
  const now = new Date();
  const when = new Date(date);
  return when < now ? "Past" : "Upcoming";
};

const Advisors = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((r) => r.json())
      .then(setEvents)
      .catch(() => setEvents([]));
  }, []);

  const deckUrl = "/assets/advisor-deck.pdf"; // ← place your PDF here

  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur p-6 shadow";
  const glassStrong = "rounded-2xl border border-white/10 bg-dark-surface/60 backdrop-blur-md shadow-xl";

  return (
    <div className="text-dark-text">
      {/* ===== Hero ===== */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center">
        <img
          src="/assets/pattern_circuit2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative">
          <div className={`${glassStrong} max-w-2xl p-6`}>
            <h1 className="text-3xl sm:text-4xl font-bold text-dark-secondary">Advisors &amp; Mentors</h1>
            <p className="mt-2 text-dark-muted">
              Help students design, build, and validate an autonomous lunar excavation robot—share your expertise in reviews,
              labs, and career guidance.
            </p>
            <a
              href={deckUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
            >
              Download Advisor Pitch Deck
            </a>
          </div>
        </div>
      </section>

      {/* ===== Events (JSON-driven; all tickets free) ===== */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold text-dark-secondary">Upcoming &amp; Recent Events</h2>
        <p className="mt-2 text-dark-muted">
          Join our public reviews and showcases. Meet the team, offer feedback, and network with Boise’s robotics community.
        </p>

        <div className="mt-6 space-y-5">
          {events.map((e) => {
            const st = status(e.dt);
            const upcoming = st === "Upcoming";
            const hasTickets = e.tickets && e.tickets !== "#";

            const badge =
              st === "Past"
                ? "bg-dark-surface/70 text-dark-muted"
                : st === "Upcoming"
                ? "bg-dark-secondary/20 text-dark-secondary"
                : "bg-dark-surface/70 text-dark-muted";

            return (
              <div key={e.title} className={glass}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{e.title}</div>
                    <div className="text-sm text-dark-muted">{fmt(e.dt)}</div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded ${badge}`}>{st}</div>
                </div>

                {/* CTA logic: only for upcoming events */}
                <div className="mt-3">
                  {upcoming && hasTickets ? (
                    <a
                      href={e.tickets}
                      className="inline-block px-4 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
                    >
                      Get Your Free Ticket
                    </a>
                  ) : upcoming && !hasTickets ? (
                    <span className="inline-block px-3 py-2 rounded-lg border border-white/10 text-dark-muted">
                      Coming Soon
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Why Advise ===== */}
      <section className="container pb-12">
        <div className={glass}>
          <h3 className="text-xl font-semibold text-dark-secondary">Why Advise Bender ARS</h3>
          <ul className="mt-2 text-dark-muted list-disc pl-5">
            <li>Shape an applied, systems-engineering program that mirrors real R&amp;D.</li>
            <li>Mentor future hires; access a pipeline of prepared, hands-on engineers.</li>
            <li>Engage in meaningful outreach across Boise’s tech community.</li>
          </ul>
          <a
            href={deckUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 px-4 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
          >
            Open the Advisor Pitch Deck
          </a>
        </div>
      </section>

      {/* ===== Get Involved (Google Form embed) ===== */}
      <section className="container pb-16">
        <h2 className="text-2xl font-semibold text-dark-secondary">Get Involved</h2>
        <p className="mt-2 text-dark-muted">
          Tell us about your background and interests. We’ll follow up with next steps.
        </p>

        <div className="mt-4 rounded-2xl border border-white/10 bg-dark-surface/70 backdrop-blur overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe2fEBbV0urigeQk_nPdZsDA_5XVTTNkXee675MKQoRKfHLFw/viewform?embedded=true"
            title="Advisor Interest Form"
            className="w-full h-[708px]"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default Advisors;
