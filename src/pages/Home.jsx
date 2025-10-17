import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

// --- Fancy UI components (ensure these exist) ---
import TextType from "../components/TextType.jsx";
import DecryptedText from "../components/DecryptedText.jsx";
import RollingGallery from "../components/RollingGallery.jsx";
import Squares from "../components/Squares.jsx";

// --- Assets (swap paths if needed) ---
import heroImg from "/assets/gallery/Bender_at_competition-2024_2025_competition.jpg";

// ---- Helpers (unchanged functionality) ----
const fmt = (d) =>
  d ? new Date(d).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "TBA";

function eventStatus(date, planned = false) {
  if (planned && !date) return { tag: "Planning", cls: "bg-brand-orange-light/30 text-brand-text-black" };
  if (!date) return { tag: "TBA", cls: "bg-brand-orange-light/20 text-brand-text-black" };
  const now = new Date();
  const when = new Date(date);
  if (when < now) return { tag: "Past", cls: "bg-brand-text-light/20 text-brand-text-black" };
  return { tag: "Upcoming", cls: "bg-brand-orange-light text-dark-bg" };
}

function Home() {
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [sponsors, setSponsors] = useState([]);

  // Same random-6 gallery selection as before
  const random6 = useMemo(() => {
    if (!gallery?.length) return [];
    const arr = [...gallery];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, Math.min(6, arr.length));
  }, [gallery]);

  useEffect(() => {
    fetch("/data/events.json").then(r => r.json()).then(setEvents).catch(() => setEvents([]));
    fetch("/data/gallery.json").then(r => r.json()).then(setGallery).catch(() => setGallery([]));
    fetch("/data/sponsors.json").then(r => r.json()).then(setSponsors).catch(() => setSponsors([]));
  }, []);

  // Example stats/milestones for the new layout (purely presentational)
  const stats = [
    { label: "Active Students", value: "30+" },
    { label: "Retention Rate", value: "85%" },
    { label: "Outreach Reach", value: "1.5K+" },
  ];
  const milestones = [
    { code: "SSR", desc: "Systems & Requirements Review (Sept)" },
    { code: "PDR", desc: "Preliminary Design Review (Oct)" },
    { code: "CDR", desc: "Critical Design Review (Nov)" },
    { code: "NASA Prep", desc: "Practice Presentation (Feb)" },
    { code: "Showcase", desc: "Public Open House (Apr)" },
  ];

  return (
    <div className="space-y-24">
      {/* === Hero (dark, animated) === */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <img
          src={heroImg}
          alt="Bender Robot"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/90 via-dark-bg/80 to-dark-bg/95" />
        <Squares className="absolute inset-0" count={30} />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-dark-secondary">
            <DecryptedText text="Bender Autonomous Robotic Systems" duration={1000} />
          </h1>
          <h2 className="text-lg md:text-2xl text-dark-muted mb-8">
            <TextType
              strings={[
                "Building better robots.",
                "Building better engineers.",
                "Boise State's Lunabotics team.",
              ]}
              typingSpeed={90}
              pause={2000}
            />
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/join"
              className="px-6 py-3 rounded-full bg-dark-accent text-dark-bg hover:bg-dark-secondary transition-colors"
            >
              Join
            </Link>
            <Link
              to="/sponsors"
              className="px-6 py-3 rounded-full bg-transparent border-2 border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition-colors"
            >
              Sponsor
            </Link>
            <Link
              to="/advisors"
              className="px-6 py-3 rounded-full bg-transparent border-2 border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition-colors"
            >
              Advise
            </Link>
          </div>
        </div>
      </section>

      {/* === What We Do === */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h3 className="text-3xl font-bold text-dark-secondary">What We Do</h3>
        <p className="text-dark-muted max-w-3xl mx-auto">
          Our team of interdisciplinary students designs, builds and tests an autonomous rover capable of
          excavating and transporting lunar regolith. Through hands-on systems engineering we develop leaders
          across software, hardware and project management while contributing to NASA’s Lunabotics Challenge mission.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/about"
            className="px-5 py-2 rounded-full bg-dark-surface border border-dark-secondary text-dark-secondary hover:bg-dark-secondary hover:text-dark-bg transition-colors"
          >
            Learn About Us
          </Link>
          <Link
            to="/competition"
            className="px-5 py-2 rounded-full bg-dark-surface border border-dark-secondary text-dark-secondary hover:bg-dark-secondary hover:text-dark-bg transition-colors"
          >
            Competition
          </Link>
          <Link
            to="/join"
            className="px-5 py-2 rounded-full bg-dark-surface border border-dark-secondary text-dark-secondary hover:bg-dark-secondary hover:text-dark-bg transition-colors"
          >
            Join the Team
          </Link>
        </div>
      </section>

      {/* === 2024–2025 Results (boxed, laser removed) === */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-dark-surface border border-dark-bg/50 p-8 shadow-md text-center space-y-4">
            <h3 className="text-3xl font-bold text-dark-secondary">2024–2025 Results</h3>
            <p className="text-xl text-dark-muted">16th Overall • NOVA Award Winner • First Idaho Team</p>
            <p className="text-dark-muted max-w-3xl mx-auto">
              A breakthrough season that showcased robust engineering, teamwork, and community impact.
            </p>
          </div>
        </div>
      </section>

      {/* === Upcoming Events (moved up to replace the former Season Timeline) === */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <div>
              <h3 className="text-3xl font-bold text-dark-secondary">Upcoming Events</h3>
              <p className="text-dark-muted">
                All team presentations are public—great opportunities to network with students, mentors, and anyone excited about robotics.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => {
              const st = eventStatus(e.dt, e.planned);
              const isPast = st.tag === "Past";
              const hasTickets = e.tickets && e.tickets !== "#";
              return (
                <div key={e.title} className="rounded-xl bg-dark-surface border border-dark-bg/50 p-5 shadow">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-dark-secondary font-semibold">{e.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs ${st.cls}`}>{st.tag}</span>
                  </div>
                  <div className="mt-2 text-sm text-dark-muted">{fmt(e.dt)}</div>
                  <div className="mt-4">
                    {isPast ? null : hasTickets ? (
                      <a
                        href={e.tickets}
                        className="inline-block px-4 py-2 rounded-full border-2 border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition-colors"
                      >
                        Get Tickets
                      </a>
                    ) : (
                      <span className="inline-block px-3 py-2 rounded-full border border-dark-muted text-dark-muted">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Sponsors (JSON-driven) + Rolling Gallery === */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto text-center mb-4">
          <h3 className="text-3xl font-bold text-dark-secondary">Sponsors</h3>
          <p className="text-dark-muted">Our work is made possible by the generous support of our partners.</p>
        </div>

        {/* Grid card complement */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {sponsors.map((s) => {
            const Card = (
              <div className="rounded-2xl bg-dark-surface border border-dark-bg/50 p-4 flex flex-col items-center shadow">
                <div className="h-16 w-full flex items-center justify-center overflow-hidden">
                  <img src={s.logo} alt={`${s.name} logo`} className="max-h-14 w-auto object-contain" />
                </div>
                <div className="mt-3 text-sm text-dark-secondary text-center">{s.name}</div>
              </div>
            );
            return s.url && s.url !== "#"
              ? <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{Card}</a>
              : <div key={s.name}>{Card}</div>;
          })}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/sponsors"
            className="inline-block px-6 py-3 rounded-full bg-dark-accent text-dark-bg hover:bg-dark-secondary transition-colors"
          >
            View Sponsorship Tiers
          </Link>
        </div>
      </section>

      {/* === Gallery Preview (uses same random6) === */}
      <section className="px-6 pb-10"> {/* Added bottom padding here */}
        <div className="max-w-6xl mx-auto text-center mb-4">
          <h3 className="text-3xl font-bold text-dark-secondary">Gallery Preview</h3>
          <p className="text-dark-muted">See what we&apos;ve been building and testing this season.</p>
        </div>

        <RollingGallery className="py-4">
          {random6.map((g, i) => (
            <img
              key={g.id || i}
              src={g.src}
              alt={g.alt || `Gallery ${i + 1}`}
              className="h-80 w-60 object-cover rounded-lg"
              loading="lazy"
            />
          ))}
        </RollingGallery>

        <div className="text-center mt-6">
          <Link
            to="/gallery"
            className="inline-block px-6 py-3 rounded-full bg-dark-accent text-dark-bg hover:bg-dark-secondary transition-colors"
          >
            Explore Full Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
