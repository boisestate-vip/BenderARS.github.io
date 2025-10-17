import React from "react";

/**
 * Join page — dark theme pass
 * - Adds "Download Student Deck" button under pathways
 * - Replaces placeholder form with Google Form embed
 */
const Join = () => {
  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur p-8 shadow";
  const studentDeckUrl = "/assets/student-deck.pdf"; // update path if different
  const formSrc =
    "https://docs.google.com/forms/d/e/1FAIpQLSeoIU8IYi-HcUahGi9B6p-R1C2VyQEW6vcCsGjJe3rlcwjtHA/viewform?embedded=true";

  return (
    <div className="text-dark-text">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/gallery/2024_2025_team_photo-team.jpeg"
          alt="Working on robots"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="relative z-10 text-center container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-dark-secondary">Join the Team</h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-dark-muted">
            No experience required — learn, build and compete alongside us.
          </p>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-dark-secondary mb-4">Recruitment</h2>
          <p className="text-dark-muted max-w-3xl mx-auto mb-8">
            We welcome students of all backgrounds and skill levels. Whether you’re an aspiring engineer, a budding
            programmer, a creative designer or a project management pro, there’s a place for you on the Bender ARS
            team. Join us to gain hands-on experience and shape the future of lunar exploration.
          </p>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-secondary mb-8 text-center">Two Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={glass}>
              <h3 className="text-xl font-semibold text-dark-secondary mb-2">VIP Course</h3>
              <p className="text-dark-muted mb-4">
                Earn credit through VIP 200/400/500 by joining our Vertically Integrated Projects course. Participate
                in design reviews, lab work and competitions as part of your curriculum. Each section is offereed for 1
                or 2 credits each semester.
              </p>
              <ul className="list-disc list-inside text-dark-muted">
                <li>Structured weekly meetings</li>
                <li>Faculty mentorship</li>
                <li>Course credit</li>
              </ul>
            </div>
            <div className={glass}>
              <h3 className="text-xl font-semibold text-dark-secondary mb-2">Club / Volunteer</h3>
              <p className="text-dark-muted mb-4">
                Not enrolled in the VIP course? You can still contribute as a club member or volunteer. Collaborate on
                subteam projects, attend events and gain valuable experience.
              </p>
              <ul className="list-disc list-inside text-dark-muted">
                <li>Flexible participation</li>
                <li>Hands-on workshops</li>
                <li>Community events</li>
              </ul>
            </div>
          </div>

          {/* Download Student Deck */}
          <div className="mt-8 text-center">
            <a
              href={studentDeckUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
            >
              Download Student Deck
            </a>
          </div>
        </div>
      </section>

      {/* Application Form (Google Form embed) */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-secondary mb-6 text-center">Apply Now</h2>
          <div className="rounded-2xl border border-white/10 bg-dark-surface/70 backdrop-blur overflow-hidden">
            <iframe
              src={formSrc}
              title="Join Bender ARS"
              className="w-full h-[1220px]"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
          <p className="text-xs text-dark-muted text-center mt-3">
            If the form doesn’t load,{" "}
            <a href={formSrc} target="_blank" rel="noreferrer" className="text-dark-accent underline">
              open it in a new tab
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Join;
