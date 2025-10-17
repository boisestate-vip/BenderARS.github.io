import React from "react";
import { Link } from "react-router-dom";

const Icon = ({ path, className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-dark-secondary`} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d={path} />
  </svg>
);
const CheckIcon = () => <Icon path="M5 13l4 4L19 7" />;

const About = () => {
  // consistent crops
  const crop = "aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10";
  const img = "w-full h-full object-cover";

  // dark glass presets
  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur p-5";
  const glassStrong = "rounded-2xl border border-white/10 bg-dark-surface/50 backdrop-blur-md shadow-xl";

  return (
    <div className="text-dark-text">
      {/* ===== Mission & Story ===== */}
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Photo + subtext + CTAs */}
          <div>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img src="/assets/gallery/Bender_at_competition-2024_2025_competition.jpg" alt="Bender ARS team" className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 text-dark-muted">
              We’re a Boise State student team building an autonomous lunar excavation robot for NASA Lunabotics—
              focused on real systems engineering, community impact, and mentorship.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/sponsors"
                className="px-4 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              >
                Sponsor
              </Link>
              <Link
                to="/donate"
                className="px-4 py-2 rounded-lg border border-white/10 text-dark-muted hover:bg-dark-secondary/10 transition"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Right: Story */}
          <div>
            <h1 className="text-3xl font-bold text-dark-secondary">Mission &amp; Story</h1>
            <p className="mt-3 text-dark-muted">
              Our mission is to grow world-class engineers through an ambitious, end-to-end robotics program.
              Students lead hardware, software, and operations to design, build, and validate an autonomous rover
              capable of excavating and transporting lunar regolith.
            </p>
            <p className="mt-3 text-dark-muted">
              Starting as a small group with big goals, we’ve evolved into a cross-disciplinary team that pairs
              rigorous engineering with outreach. Along the way we’ve built strong relationships with local
              companies and mentors—helping Idaho take a bigger step into space robotics.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Teaching Philosophy ===== */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold text-dark-secondary">Teaching Philosophy</h2>
        <p className="mt-2 text-dark-muted max-w-3xl">
          We combine hands-on building with structured reviews, documentation, and mentoring. Students own real
          deliverables, make trade-offs with data, and learn to communicate like practicing engineers.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className={glass}>
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-dark-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 21l2-7L2 10h7l3-7z" />
            </svg>
            <h3 className="mt-3 font-semibold">Learn by Doing</h3>
            <ul className="mt-2 space-y-1 text-sm text-dark-muted">
              <li>Own a subsystem with real scope and deadlines</li>
              <li>Prototype → test → iterate with measurable targets</li>
              <li>Demo your work regularly; get feedback fast</li>
            </ul>
          </div>

          <div className={glass}>
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-dark-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <h3 className="mt-3 font-semibold">Systems Engineering</h3>
            <ul className="mt-2 space-y-1 text-sm text-dark-muted">
              <li>Write requirements &amp; define clear interfaces</li>
              <li>Plan verification with pass/fail criteria</li>
              <li>Balance mass, power, reliability, and cost</li>
            </ul>
          </div>

          <div className={glass}>
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-dark-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 21a10 10 0 0120 0H2z" />
            </svg>
            <h3 className="mt-3 font-semibold">Mentored Design Reviews</h3>
            <ul className="mt-2 space-y-1 text-sm text-dark-muted">
              <li>SSR, PDR, CDR with advisors &amp; faculty</li>
              <li>Defend decisions with analysis &amp; tests</li>
              <li>Leave with written action items</li>
            </ul>
          </div>

          <div className={glass}>
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-dark-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
            </svg>
            <h3 className="mt-3 font-semibold">Documentation &amp; Rigor</h3>
            <ul className="mt-2 space-y-1 text-sm text-dark-muted">
              <li>Design logs, schematics/CAD, test reports</li>
              <li>Version control and review templates</li>
              <li>Trace decisions to requirements</li>
            </ul>
          </div>

          <div className={glass}>
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-dark-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
            </svg>
            <h3 className="mt-3 font-semibold">Safety &amp; Ethics</h3>
            <ul className="mt-2 space-y-1 text-sm text-dark-muted">
              <li>Workmanship standards &amp; checklists</li>
              <li>Safe labs, safe tests, safe code</li>
              <li>Respectful, inclusive collaboration</li>
            </ul>
          </div>

          <div className={glass}>
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-dark-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7h18M5 12h14M7 17h10" />
            </svg>
            <h3 className="mt-3 font-semibold">Inclusion &amp; Leadership</h3>
            <ul className="mt-2 space-y-1 text-sm text-dark-muted">
              <li>No experience required—learn in public</li>
              <li>Peer mentorship &amp; rotating leads</li>
              <li>Share wins and lessons with the community</li>
            </ul>
          </div>
        </div>

        {/* cadence band */}
        <div className={`mt-8 ${glass}`}>
          <h3 className="font-semibold">How We Practice It</h3>
          <div className="mt-3 grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-dark-secondary font-medium">Weekly Labs</div>
              <p className="text-dark-muted">Stand-ups, build nights, code reviews, test sessions.</p>
            </div>
            <div>
              <div className="text-dark-secondary font-medium">Review Milestones</div>
              <p className="text-dark-muted">SSR → PDR → CDR → P&amp;D practice → Showcase.</p>
            </div>
            <div>
              <div className="text-dark-secondary font-medium">Public Demos</div>
              <p className="text-dark-muted">Open reviews for feedback &amp; networking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team Structure ===== */}
      <section className="container py-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-semibold text-dark-secondary">Team Structure</h2>
          <Link
            to="/advisors"
            className="px-4 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
          >
            Advise the Team
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-5 rounded-lg p-4 bg-dark-surface/70 backdrop-blur border border-white/10 text-center">
            <div className="font-medium">Stakeholders</div>
            <div className="text-sm text-dark-muted">Faculty, Advisors, Sponsors</div>
          </div>

          <div className="md:col-span-1 rounded-lg p-4 bg-dark-surface/70 backdrop-blur border border-white/10 text-center">
            <div className="font-medium">Marketing</div>
            <div className="text-sm text-dark-muted">Brand, outreach, events</div>
          </div>
          <div className="md:col-span-4 rounded-lg p-4 bg-dark-surface/70 backdrop-blur border border-white/10 text-center">
            <div className="font-medium">Project Management</div>
            <div className="text-sm text-dark-muted">Schedules, reviews, resources, risk</div>
          </div>

          <div className="hidden md:block" />
          {["Dig", "Nav", "Chassis", "Drivetrain"].map((name) => (
            <div key={name} className="rounded-lg p-4 bg-dark-surface/70 backdrop-blur border border-white/10 text-center">
              <div className="font-medium">{name}</div>
              <div className="text-sm text-dark-muted">Subsystem</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Subsystems header (dark overlay) ===== */}
      <section className="relative py-16">
        <img src="/assets/pattern_circuit.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative flex justify-center">
          <div className={`max-w-2xl text-center ${glassStrong} p-6 sm:p-8`}>
            <h2 className="text-2xl font-semibold text-dark-secondary">Subsystems</h2>
            <p className="mt-2 text-dark-muted">
              Our engineering work is organized into focused subsystems. Each team owns requirements,
              interfaces, and verification—and presents progress in public design reviews.
            </p>
            <div className="mt-4">
              <Link
                to="/competition"
                className="inline-block px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              >
                Learn More About the Competition
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Subteams ===== */}
      <section className="py-12">
        <div className="container space-y-12">
          {/* Dig */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className={crop}>
              <img src="/assets/subteams/dig.jpg" alt="Dig subsystem" className={img} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-secondary">Dig</h3>
              <p className="mt-2 text-dark-muted">Excavation mechanism design, regolith interface, and throughput testing.</p>
              <ul className="mt-3 space-y-2 text-dark-muted">
                <li className="flex items-start gap-2"><CheckIcon /> Bucket/wheel geometry & material handling</li>
                <li className="flex items-start gap-2"><CheckIcon /> Motor sizing, torque & duty cycle</li>
                <li className="flex items-start gap-2"><CheckIcon /> Test design & performance metrics</li>
              </ul>
            </div>
          </div>

          {/* Drivetrain */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl font-semibold text-dark-secondary">Drivetrain</h3>
              <p className="mt-2 text-dark-muted">Mobility across soft/uneven terrain with robust power transmission.</p>
              <ul className="mt-3 space-y-2 text-dark-muted">
                <li className="flex items-start gap-2"><CheckIcon /> Traction studies, wheel/track selection</li>
                <li className="flex items-start gap-2"><CheckIcon /> Gearbox design & thermal limits</li>
                <li className="flex items-start gap-2"><CheckIcon /> FEA & reliability considerations</li>
              </ul>
            </div>
            <div className={`order-1 lg:order-2 ${crop}`}>
              <img src="/assets/subteams/drivetrain.jpg" alt="Drivetrain subsystem" className={img} />
            </div>
          </div>

          {/* Chassis */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className={crop}>
              <img src="/assets/subteams/chassis.jpg" alt="Chassis subsystem" className={img} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-secondary">Chassis</h3>
              <p className="mt-2 text-dark-muted">Lightweight structural design with serviceability and easy integration.</p>
              <ul className="mt-3 space-y-2 text-dark-muted">
                <li className="flex items-start gap-2"><CheckIcon /> Frame architecture & mounting</li>
                <li className="flex items-start gap-2"><CheckIcon /> Cable routing & maintainability</li>
                <li className="flex items-start gap-2"><CheckIcon /> Manufacturability & tolerance stackups</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl font-semibold text-dark-secondary">Navigation</h3>
              <p className="mt-2 text-dark-muted">Autonomy stack enabling reliable excavation and haul cycles.</p>
              <ul className="mt-3 space-y-2 text-dark-muted">
                <li className="flex items-start gap-2"><CheckIcon /> Perception & state estimation</li>
                <li className="flex items-start gap-2"><CheckIcon /> Planning, control & simulation</li>
                <li className="flex items-start gap-2"><CheckIcon /> Software reviews & CI basics</li>
              </ul>
            </div>
            <div className={`order-1 lg:order-2 ${crop}`}>
              <img src="/assets/subteams/navigation.jpg" alt="Navigation subsystem" className={img} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold text-dark-secondary">Testimonials</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { img: "/assets/students/BradyWard.jpg", name: "Brady Ward", degree: "Computer Science", quote: "Everyone here has been very nice and supportive. Having someone’s guidance on how to start learning about the robots nav was immensely helpful." },
            { img: "/assets/students/HunterGregory.jpg", name: "Hunter Gregory", degree: "Mechanical Engineering", quote: "This team provided an opportunity like no other to work in a semi-professional setting on autonomous robotics at BSU. It encompassed all major aspects, including electrical, mechanical, and software related portions, as well as a large focus on proper team dynamics and systems engineering…" },
            { img: "/assets/students/EthanVarao.jpg", name: "Ethan Varao", degree: "Engineering PLUS", quote: "It was fun learning experience! I enjoyed expanding my skillset and learning to work with other aspiring professionals!" }
          ].map((t) => (
            <div key={t.name} className={glass}>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover border border-white/10" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-dark-muted">{t.degree}</div>
                </div>
              </div>
              <p className="mt-3 text-dark-muted">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Bottom Join CTA ===== */}
      <section className="relative py-16">
        <img src="/assets/gallery/2024_2025_team_photo-team.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative flex justify-center">
          <div className={`${glassStrong} max-w-xl p-6 sm:p-8 text-center`}>
            <h2 className="text-2xl font-semibold text-dark-secondary">Join the Team</h2>
            <p className="mt-2 text-dark-muted">
              No experience required—bring your curiosity. Learn by building the future of lunar robotics with us.
            </p>
            <div className="mt-4">
              <Link
                to="/join"
                className="inline-block px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              >
                Apply / Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
