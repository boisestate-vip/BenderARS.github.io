import React from "react";
import { Link } from "react-router-dom";

const Donate = () => {
  const givingUrl = "https://ponyup.boisestate.edu/campaigns/nasa-artemis-challenge";

  // dark-glass presets to keep consistency
  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur p-5 shadow";
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
            <h1 className="text-3xl sm:text-4xl font-bold text-dark-secondary">Support Bender ARS</h1>
            <p className="mt-2 text-dark-muted">
              Your gift powers student-led lunar robotics at Boise State—parts, testing, travel, and outreach.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Quick Options (buttons) ===== */}
      <section className="container py-10">
        <h2 className="text-2xl font-semibold text-dark-secondary">Donate Options</h2>
        <p className="mt-2 text-dark-muted">
          Choose a path below. Monetary gifts go through Boise State. In-kind support routes to our sponsorship team.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {/* Boise State Giving (external) */}
          <a
            // href={givingUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
          >
            Boise State Giving
          </a>

          {/* In-Kind → Sponsors page */}
          <Link
            to="/sponsors"
            className="px-5 py-2 rounded-lg border border-white/10 text-dark-text hover:bg-dark-secondary/10 transition"
          >
            In-Kind Contributions (Sponsorship)
          </Link>
        </div>
      </section>

      {/* ===== Embedded Boise State Giving Page ===== */}
      <section className="container pb-10">
        <h3 className="text-xl font-semibold text-dark-secondary">Give through Boise State</h3>
        <p className="mt-2 text-dark-muted">
          Our donation page is currently under construction. Please fill out the form below to start the donation process.{" "}
          <a
            href={givingUrl}
            target="_blank"
            rel="noreferrer"
            className="text-dark-secondary underline hover:no-underline"
          >
            If the form doesn’t load, click here.
          </a>
        </p>
        <div className="mt-6 flex justify-center">
          <iframe
            title="Boise State Giving Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfE7ft5mCzE3PWDo5tUqIckjIDuyNnvkHPhDmWDaqKxa6jKjQ/viewform?embedded=true"
            className="w-full max-w-[640px] h-[1288px] block mx-auto"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* ===== Ready to Make a Difference (glass over background, centered) ===== */}
      <section className="relative py-16">
        <img
          src="/assets/gallery/2024_2025_team_photo-team.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative flex justify-center">
          <div className={`${glassStrong} max-w-2xl text-center p-6 sm:p-8`}>
            <h2 className="text-2xl font-semibold text-dark-secondary">Ready to Make a Difference?</h2>
            <p className="mt-2 text-dark-muted">
              Every contribution fuels a real student engineering program—parts, testing, and outreach that inspire the next generation.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href={givingUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              >
                Donate
              </a>
              <Link
                to="/sponsors"
                className="px-5 py-2 rounded-lg border border-white/10 text-dark-text hover:bg-dark-secondary/10 transition"
              >
                Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
