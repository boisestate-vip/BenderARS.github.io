import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Helpers
const fmt = (d) =>
  d ? new Date(d).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "TBD";

const status = (date) => {
  if (!date) return "Planning";
  const now = new Date();
  const when = new Date(date);
  return when < now ? "Past" : "Upcoming";
};

// Fallback descriptions
const EVENT_DESCRIPTIONS = {
  "SSR — Systems & Strategy Review":
    "Kickoff checkpoint. Team aligns on mission, system concept, key risks, and the season plan.",
  "PDR — Preliminary Design Review":
    "Concept maturity. Subsystems present requirements, trade studies, and early models/prototypes.",
  "CDR — Critical Design Review":
    "Design freeze. Subsystems defend detailed designs, interfaces, and verification plans.",
  "NASA P&D Practice Presentation":
    "Dress rehearsal for NASA. Dry run of presentation, Q&A, and demo narrative.",
  "Public Showcase & Open House":
    "Community event. Show the robot, meet the team, and network with partners and mentors."
};

const Competition = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((r) => r.json())
      .then(setEvents)
      .catch(() => setEvents([]));
  }, []);

  // dark glass presets to keep things consistent
  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur p-5 shadow";
  const glassStrong = "rounded-2xl border border-white/10 bg-dark-surface/60 backdrop-blur-md shadow-xl";

  return (
    <div className="text-dark-text">
      {/* ===== Hero ===== */}
      <section className="relative h-[45vh] min-h-[360px] flex items-center">
        <img
          src="/assets/pattern_circuit2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative">
          <div className={`${glassStrong} max-w-2xl p-6`}>
            <h1 className="text-3xl sm:text-4xl font-bold text-dark-secondary">NASA Lunabotics</h1>
            <p className="mt-2 text-dark-muted">
              A collegiate challenge to design, build, and operate an autonomous robot that excavates and
              transports lunar regolith simulant under realistic constraints.
            </p>
            <a
              href="https://www.nasa.gov/stem/robotics/lunabotics.html"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
            >
              Visit NASA Lunabotics
            </a>
          </div>
        </div>
      </section>

      {/* ===== About the Competition ===== */}
      <section className="container py-10">
        <h2 className="text-2xl font-semibold text-dark-secondary">About the Competition</h2>
        <p className="mt-2 text-dark-muted max-w-4xl">
          Teams develop an autonomous rover to locate, excavate, and transport lunar regolith simulant while
          respecting mass, power, and terrain constraints. Success demands systems thinking—mechanical design,
          autonomy, sensing, compute, power, integration, and rigorous testing—plus clear communication through
          formal design reviews.
        </p>
      </section>

      {/* ===== 2024–2025 Results ===== */}
      <section className="relative py-14">
        <img src="/assets/gallery/Bender_at_competition-2024_2025_competition.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative">
          {/* Header */}
          <div className={`${glassStrong} max-w-xl p-5`}>
            <h2 className="text-2xl font-semibold text-dark-secondary">2024–2025 Results</h2>
            <p className="text-dark-muted">Breakthrough year showcasing engineering depth and team execution.</p>
          </div>

          {/* Grid */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Overall Rank", value: "16", sub: "Nationwide" },
              { title: "Award", value: "NOVA", sub: "Innovation" },
              { title: "Performance", value: "Autonomy Demos", sub: "Excavate & Haul" },
              { title: "Milestone", value: "First Idaho Team", sub: "Program History" },
            ].map((c) => (
              <div key={c.title} className={`${glass} text-center`}>
                <div className="text-sm text-dark-muted">{c.title}</div>
                <div className="mt-1 text-3xl font-extrabold">{c.value}</div>
                <div className="mt-1 text-sm text-dark-muted">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Season Timeline ===== */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold text-dark-secondary">Season Timeline</h2>
        <p className="mt-2 text-dark-muted">
          Key reviews and public events across the season. All events are open to the community—join us to learn and network.
        </p>

        <div className="mt-6 space-y-5">
          {events.map((e) => {
            const st = status(e.dt);
            const upcoming = st === "Upcoming";
            const hasTickets = e.tickets && e.tickets !== "#";
            const desc = e.desc || EVENT_DESCRIPTIONS[e.title] || "Public milestone and progress checkpoint.";

            // badge styles
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
                <p className="mt-3 text-sm text-dark-muted">{desc}</p>

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

      {/* ===== Bender Robot ===== */}
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
            <img src="/assets/gallery/Bender_at_competition-2024_2025_competition.jpg" alt="Bender robot" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-dark-secondary">Meet the Bender Robot</h2>
            <p className="mt-2 text-dark-muted">
              Bender is an autonomous lunar excavation rover designed for reliability in dust-heavy environments with
              maintainable subsystems and field-serviceable architecture.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                to="/about"
                className="px-4 py-2 rounded-lg border border-white/10 text-dark-text hover:bg-dark-secondary/10 transition"
              >
                Program Story
              </Link>
              <Link
                to="/gallery"
                className="px-4 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              >
                See Photos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold text-dark-secondary">Key Features</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: (
                <path d="M7 17a4 4 0 118 0 4 4 0 01-8 0zM3 17h4M17 17h4M6 9h12" />
              ),
              title: "Tracked Drive (PLA Treads)",
              text: "Modular PLA track links on serviceable bogies for soft-terrain traction and quick field replacement.",
            },
            {
              icon: (
                <>
                  <path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
                  <path d="M4 10h16" />
                </>
              ),
              title: "Fully Enclosed Chassis",
              text: "Dust-resistant panels, sealed cable paths, and guarded intakes to protect electronics and mechanisms.",
            },
            {
              icon: <path d="M5 12a7 7 0 0114 0M8 12a4 4 0 018 0M11 12a1 1 0 102 0" />,
              title: "Wireless Control",
              text: "On-site wireless teleop for setup and safety; autonomy runs with monitored health telemetry.",
            },
            {
              icon: (
                <>
                  <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
                </>
              ),
              title: "Serviceable Modules",
              text: "Common fasteners, quick-disconnect harnessing, and clear access for rapid repairs between runs.",
            },
            {
              icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
              title: "Power & Safety",
              text: "40 V architecture with guarded E-stop, fused rails, and thermal/overcurrent protections.",
            },
            {
              icon: <path d="M6 12a3 3 0 106 0 3 3 0 00-6 0zM3 5l5 5M16 7l-4 5M18 18l-6-3" />,
              title: "Autonomy-Ready",
              text: "Sensor + compute stack provisioned for perception, localization, and guarded planning.",
            },
          ].map((f, i) => (
            <div key={i} className={glass}>
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-dark-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
                {f.icon}
              </svg>
              <div className="mt-3 font-semibold">{f.title}</div>
              <p className="mt-1 text-sm text-dark-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Robot Specifications ===== */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold text-dark-secondary">Robot Specifications</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { k: "Mass (est.)", v: "64.5 kg" },
            { k: "Footprint", v: "71 mm × 115.5 mm × 63.5 mm" },
            { k: "Power", v: "40 V system; 30 W/hr" },
            { k: "Compute", v: "NVIDIA Jetson Nano" },
            { k: "Sensing", v: "Stereo cam, Lidar, Vive Tracker" },
            { k: "Comms", v: "Wi-Fi" }
          ].map((s) => (
            <div key={s.k} className="rounded-lg border border-white/10 bg-dark-surface/70 backdrop-blur p-4">
              <div className="text-sm text-dark-muted">{s.k}</div>
              <div className="font-medium">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Budget ===== */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold text-dark-secondary">Budget Breakdown</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className={`${glass} p-6`}>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li><span className="text-dark-text font-medium">Chassis</span> — $2,000</li>
              <li><span className="text-dark-text font-medium">Navigation</span> — $1,300</li>
              <li><span className="text-dark-text font-medium">Regolith Handling</span> — $2,100</li>
              <li><span className="text-dark-text font-medium">Drivetrain</span> — $2,500</li>
              <li><span className="text-dark-text font-medium">Travel &amp; Competition</span> — $21,000</li>
            </ul>
          </div>
          <div className={`${glass} p-6`}>
            <p className="text-dark-muted">
              We welcome in-kind donations and services. See our sponsorship tiers and recognition options.
            </p>
            <div className="mt-3">
              <Link
                to="/sponsors"
                className="px-4 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              >
                View Sponsor Tiers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Get Involved CTA ===== */}
      <section className="relative py-16">
        <img src="/assets/gallery/2024_2025_team_photo-team.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative flex justify-center">
          <div className={`${glassStrong} max-w-2xl text-center p-6 sm:p-8`}>
            <h2 className="text-2xl font-semibold text-dark-secondary">Get Involved</h2>
            <p className="mt-2 text-dark-muted">
              Whether you’re a student, mentor, or sponsor—we’d love to build the next season with you.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link
                to="/join"
                className="px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              >
                Join
              </Link>
              <Link
                to="/sponsors"
                className="px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              >
                Sponsor
              </Link>
              <Link
                to="/donate"
                className="px-5 py-2 rounded-lg border border-white/10 text-dark-text hover:bg-dark-secondary/10 transition"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competition;
