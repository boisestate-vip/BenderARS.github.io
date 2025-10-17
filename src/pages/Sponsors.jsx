import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch("/data/sponsors.json")
      .then((r) => r.json())
      .then(setSponsors)
      .catch(() => setSponsors([]));
  }, []);

  const tiers = [
    { tier: "Orbiter", amount: "$250–$999", perks: "Website logo, sponsor board listing, social media shoutout" },
    { tier: "Lander", amount: "$1,000–$2,499", perks: "+ logo on shirts/robot, tagged in event recaps" },
    { tier: "Rover", amount: "$2,500–$4,999", perks: "+ large logo placement, guest speaking option" },
    { tier: "Mission Partner", amount: "$5,000+", perks: "+ featured sponsor placement, dinner with team, homepage logo" }
  ];

  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur p-6 shadow";
  const glassStrong = "rounded-2xl border border-white/10 bg-dark-surface/60 backdrop-blur-md shadow-xl";

  return (
    <div className="text-dark-text">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center">
        <img
          src="/assets/pattern_circuit2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-dark-secondary">Sponsors</h1>
          <p className="mt-2 max-w-2xl text-dark-muted">
            Your support fuels student innovation, outreach, and nationally recognized lunar robotics.
          </p>
        </div>
      </section>

      {/* Why Sponsor + Tiers */}
      <section className="container py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Why Sponsor Bender (with deck download) */}
          <div className={glass}>
            <h2 className="text-xl font-semibold text-dark-secondary">Why Sponsor Bender</h2>
            <p className="mt-2 text-dark-muted">
              Bender ARS gives companies direct access to emerging engineering talent, meaningful brand
              visibility across campus and the community, and authentic collaboration with a team solving
              real lunar robotics problems. Your sponsorship amplifies STEM education, accelerates our
              R&amp;D, and brings your people into a mentoring pipeline that matters.
            </p>
            <ul className="mt-3 list-disc pl-5 text-dark-muted">
              <li>Logo placements: robot, shirts, pit displays, site, and event materials</li>
              <li>Speaking &amp; mentoring: design reviews, tech talks, open house</li>
              <li>Recruiting: resume books, networking nights, lab visits</li>
            </ul>

            {/* Download Sponsor Deck */}
            <a
              href="/assets/sponsor-deck.pdf"
              className="inline-block mt-5 px-4 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              target="_blank"
              rel="noreferrer"
            >
              Download Sponsor Deck
            </a>
          </div>

          {/* Tiers */}
          <div className={glass}>
            <h3 className="text-dark-secondary font-semibold mb-4">Sponsorship Tiers</h3>
            <ul className="space-y-3">
              {tiers.map((t) => (
                <li key={t.tier} className="p-4 border border-white/10 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{t.tier}</div>
                    <div className="text-dark-secondary">{t.amount}</div>
                  </div>
                  <div className="text-sm text-dark-muted mt-1">{t.perks}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Current Sponsors — JSON-driven */}
      <section className="relative py-12">
        <img
          src="/assets/pattern_circuit.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative">
          <h2 className="text-2xl font-semibold text-dark-secondary mb-6">Current Sponsors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {sponsors.map((s) => {
              const Card = (
                <div className="rounded-2xl border border-white/10 bg-dark-surface/60 backdrop-blur p-4 flex flex-col items-center shadow">
                  <div className="h-16 w-full flex items-center justify-center overflow-hidden">
                    <img src={s.logo} alt={`${s.name} logo`} className="max-h-14 w-auto object-contain" />
                  </div>
                  <div className="mt-3 text-sm text-dark-text text-center">{s.name}</div>
                </div>
              );
              return s.url && s.url !== "#"
                ? (
                  <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                    {Card}
                  </a>
                )
                : (
                  <div key={s.name}>{Card}</div>
                );
            })}
          </div>
        </div>
      </section>

      {/* Sponsor Inquiry Form (Google Form embed) */}
      <section className="container py-12">
        <div className={`${glassStrong} p-6 sm:p-8`}>
          <h2 className="text-2xl font-semibold text-dark-secondary">Interested in Sponsoring?</h2>
          <p className="mt-2 text-dark-muted">
            Tell us a bit about your organization and goals. We’ll get in touch with next steps and tier options.
          </p>

          <div className="mt-6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfG3ctU0FIP9CaqV2kE7S0K2N1EFCJT5RCrPo38LXHHT-a6QA/viewform?embedded=true"
              title="Sponsor Inquiry Form"
              className="w-full h-[1107px] md:h-[1107px] rounded-xl border border-white/10"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
