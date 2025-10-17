import React, { useEffect, useState } from "react";

/**
 * Outreach page — dark theme pass
 * - Uses dark glass cards and overlays
 * - Larger, readable stats
 * - Gallery pulls "outreach" tagged photos; falls back to defaults
 * - Google Form embedded with dark glass chrome
 */

const Outreach = () => {
  // Stats placeholders; update with actual outreach metrics
  const stats = [
    { number: "250+", label: "Students Reached" },
    { number: "5", label: "Schools Partnered" },
    { number: "4", label: "Community Events" },
  ];

  // Fallback gallery (if no "outreach" tagged images are found)
  const fallbackPhotos = [
    "/assets/lab_robots.png",
    "/assets/pattern_circuit.png",
    "/assets/pattern_circuit2.png",
    "/assets/lunar_rover.png",
  ];

  const [outreachPhotos, setOutreachPhotos] = useState([]);
  const trackRef = React.useRef(null);

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((r) => r.json())
      .then((items) => {
        const filtered = (items || []).filter(
          (it) => Array.isArray(it.tags) && it.tags.includes("outreach")
        );
        setOutreachPhotos(filtered);
      })
      .catch(() => setOutreachPhotos([]));
  }, []);

  // Glass presets
  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur shadow";
  const glassLight = "rounded-lg border border-white/10 bg-dark-surface/60 backdrop-blur shadow";

  // Images to render (tagged or fallback)
  const imgs =
    outreachPhotos.length > 0
      ? outreachPhotos
      : fallbackPhotos.map((src, i) => ({ id: `fallback-${i}`, src, alt: "Outreach gallery" }));

  return (
    <div className="text-dark-text">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/pattern_circuit.png"
          alt="Abstract outreach background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="relative z-10 text-center container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-dark-secondary">Outreach &amp; Impact</h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-dark-muted">
            Sharing robotics and STEM with our community.
          </p>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-secondary mb-4">Community Engagement</h2>
          <p className="text-dark-muted leading-relaxed">
            We regularly host K–12 outreach programs, demonstrations and STEM events to inspire future engineers and
            scientists. From elementary school science nights to high school robotics workshops, our team loves sharing
            our passion for space exploration. We showcase our rover, explain the engineering process and offer hands-on
            activities that ignite curiosity.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-secondary mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className={`${glass} p-8`}>
                <div className="text-4xl font-extrabold text-dark-secondary mb-2">{stat.number}</div>
                <div className="text-sm uppercase font-semibold text-dark-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Carousel — outreach-only, single row with arrows */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-secondary mb-6 text-center">Gallery</h2>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() =>
                trackRef.current?.scrollBy({
                  left: -trackRef.current.clientWidth * 0.9,
                  behavior: "smooth",
                })
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-3 py-2 rounded-lg border border-dark-accent bg-dark-surface/70 backdrop-blur hover:bg-dark-accent hover:text-dark-bg text-dark-accent transition"
              aria-label="Scroll left"
            >
              ‹
            </button>

            {/* Right Arrow */}
            <button
              onClick={() =>
                trackRef.current?.scrollBy({
                  left: trackRef.current.clientWidth * 0.9,
                  behavior: "smooth",
                })
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-3 py-2 rounded-lg border border-dark-accent bg-dark-surface/70 backdrop-blur hover:bg-dark-accent hover:text-dark-bg text-dark-accent transition"
              aria-label="Scroll right"
            >
              ›
            </button>

            {/* Track */}
            <div ref={trackRef} className="overflow-hidden">
              <div className="flex gap-4 snap-x snap-mandatory">
                {imgs.map((g) => (
                  <div key={g.id || g.src} className="snap-start flex-none w-1/2 sm:w-1/4">
                    <div className={`${glassLight} aspect-square overflow-hidden`}>
                      <img
                        src={g.src}
                        alt={g.alt || "Outreach gallery"}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Outreach Request Form (Google Form embed) ===== */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold text-dark-secondary">Request an Outreach Event</h2>
        <p className="mt-2 text-dark-muted">Invite the team for demos, talks, classroom visits, or community events.</p>

        <div className="mt-4 rounded-2xl border border-white/10 bg-dark-surface/70 backdrop-blur overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfmCdOTXT530kdsQhiyzR-05KyyIC5VG9kk6dvQTM3tMAEKcg/viewform?embedded=true"
            title="Outreach Request Form"
            className="w-full h-[982px]"
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

export default Outreach;
