import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const formSrc =
    "https://docs.google.com/forms/d/e/1FAIpQLSf25eQFcBXcnR7bYNxj5lbimidQ008pDWodR2wdjXomPNfAPg/viewform?embedded=true";

  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur p-5 shadow";
  const glassStrong = "rounded-2xl border border-white/10 bg-dark-surface/60 backdrop-blur-md shadow-xl";

  return (
    <div className="text-dark-text">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/pattern_circuit.png"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="relative z-10 text-center container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-dark-secondary">Contact Us</h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-dark-muted">We’d love to hear from you.</p>
        </div>
      </section>

      {/* VIP Coach Information */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-secondary mb-6">VIP Coach Information</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Dr. Steve Swanson */}
            <article className={glass}>
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <img
                    src="/assets/coaches/SteveSwanson.jpg"
                    alt="Dr. Steve Swanson"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Dr. Steve Swanson</h3>
                  <p className="text-sm text-dark-muted">
                    Computer Scientist, former NASA astronaut, and Boise State Distinguished Educator in Residence.
                    He coaches three VIP teams: Autonomous Robotic Systems, NASA SUITS, and NASA Micro-g NExT Challenge.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link
                      to="https://www.boisestate.edu/professorofpractice/steve-swanson/"
                      className="px-3 py-1.5 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition text-sm"
                    >
                      Read more about Dr. Swanson
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Oliver MacDonald */}
            <article className={glass}>
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <img
                    src="/assets/coaches/OliverMacDonald.jpg"
                    alt="Oliver MacDonald"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Oliver MacDonald</h3>
                  <p className="text-sm text-dark-muted">
                    Robotics &amp; systems engineer, co-founder of QTex AI, and Computing PhD student at Boise State.
                    Mentor for the Autonomous Robotics Systems VIP, bringing founder and R&amp;D consulting experience
                    to build a studio-style environment that mirrors professional engineering teams.
                  </p>
                  {/* <div className="mt-3 flex flex-wrap gap-3">
                    <Link
                      to="/about#coaches"
                      className="px-3 py-1.5 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition text-sm"
                    >
                      Read more about Oliver
                    </Link>
                  </div> */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Flashy Socials Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <img
          src="/assets/team_photo.jpg"
          alt="Socials background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-bg/70" />

        <div className="container relative text-center">
          <h2 className="text-3xl font-bold text-dark-secondary mb-8">Connect with Us</h2>

          <div className="flex justify-center flex-wrap gap-8">
            {/* Instagram */}
            {/* <a
              href="#"
              aria-label="Instagram"
              className="group w-28 h-28 flex items-center justify-center rounded-2xl border border-dark-accent bg-dark-surface/60 backdrop-blur-md shadow-lg hover:shadow-dark-accent/50 transition-all duration-300"
            >
              <svg
                className="h-14 w-14 text-dark-accent group-hover:text-dark-secondary transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                <circle cx="18" cy="6" r="1.5" />
              </svg>
            </a> */}

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/bender-ars-vip"
              aria-label="LinkedIn"
              className="group w-28 h-28 flex items-center justify-center rounded-2xl border border-dark-accent bg-dark-surface/60 backdrop-blur-md shadow-lg hover:shadow-dark-accent/50 transition-all duration-300"
            >
              <svg
                className="h-14 w-14 text-dark-accent group-hover:text-dark-secondary transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@BenderARSVIP"
              aria-label="YouTube"
              className="group w-28 h-28 flex items-center justify-center rounded-2xl border border-dark-accent bg-dark-surface/60 backdrop-blur-md shadow-lg hover:shadow-dark-accent/50 transition-all duration-300"
            >
              <img
                src="/assets/youtube.png"
                alt="YouTube"
                className="h-14 w-14 filter invert group-hover:invert-0 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      {/* General Inquiry (Google Form embed) */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-secondary mb-6 text-center">General Enquiry</h2>
          <p className="text-dark-muted text-center mb-6">
            For sponsorships, press enquiries or student interest, complete the form below.{" "}
            <a href={formSrc} target="_blank" rel="noreferrer" className="text-dark-accent underline">
              Open in a new tab
            </a>
            .
          </p>
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-dark-surface/70 backdrop-blur">
            <iframe
              src={formSrc}
              title="Contact Form"
              className="w-full h-[1090px]"
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

export default Contact;
