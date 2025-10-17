import React from 'react';

/**
 * Join page invites students to participate in Bender ARS either
 * through the VIP course or as club/volunteer members.  It outlines
 * expectations, highlights learning opportunities and provides an
 * application form.  All form fields are placeholders and do not
 * submit data; integrate with a real backend or form service to
 * collect responses.
 */
const Join = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src="/assets/lab_robots.png" alt="Working on robots" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-brand-neutral-offWhite container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Join the Team</h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl">No experience required — learn, build and compete alongside us.</p>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-16 bg-brand-neutral-offWhite">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-brand-blue-DEFAULT mb-4">Recruitment</h2>
          <p className="text-brand-text-medium max-w-3xl mx-auto mb-8">
            We welcome students of all backgrounds and skill levels. Whether you’re an aspiring engineer, a budding programmer, a creative designer or a project management pro, there’s a place for you on the Bender ARS team. Join us to gain hands‑on experience and shape the future of lunar exploration.
          </p>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-16 bg-brand-neutral-cardGrey">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-blue-DEFAULT mb-8 text-center">Two Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-xl font-semibold text-brand-blue-DEFAULT mb-2">VIP Course</h3>
              <p className="text-brand-text-medium mb-4">Earn credit through ENGR 200/400/500 by joining our Vertically Integrated Projects course. Participate in design reviews, lab work and competitions as part of your curriculum.</p>
              <ul className="list-disc list-inside text-brand-text-medium">
                <li>Structured weekly meetings</li>
                <li>Faculty mentorship</li>
                <li>Course credit</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-xl font-semibold text-brand-blue-DEFAULT mb-2">Club / Volunteer</h3>
              <p className="text-brand-text-medium mb-4">Not enrolled in the VIP course? You can still contribute as a club member or volunteer. Collaborate on subteam projects, attend events and gain valuable experience.</p>
              <ul className="list-disc list-inside text-brand-text-medium">
                <li>Flexible participation</li>
                <li>Hands‑on workshops</li>
                <li>Community events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations & Learning */}
      <section className="py-16 bg-brand-neutral-offWhite">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-blue-DEFAULT mb-4">Expectations</h2>
            <ul className="list-disc list-inside text-brand-text-medium space-y-2">
              <li>Attend weekly team and subteam meetings</li>
              <li>Contribute to design reviews and documentation</li>
              <li>Collaborate respectfully with peers and mentors</li>
              <li>Commit to deadlines and deliverables</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-blue-DEFAULT mb-4">What You’ll Learn</h2>
            <ul className="list-disc list-inside text-brand-text-medium space-y-2">
              <li>Systems engineering and integration</li>
              <li>Computer‑aided design (CAD) and manufacturing</li>
              <li>Embedded firmware and control algorithms</li>
              <li>Project planning and leadership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-brand-neutral-cardGrey">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-blue-DEFAULT mb-6 text-center">Apply Now</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-blue-DEFAULT mb-1">Name</label>
              <input id="name" type="text" className="w-full rounded-md border border-brand-neutral-cardGrey px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange-DEFAULT" placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="major" className="block text-sm font-medium text-brand-blue-DEFAULT mb-1">Major/Program</label>
              <input id="major" type="text" className="w-full rounded-md border border-brand-neutral-cardGrey px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange-DEFAULT" placeholder="Your field of study" />
            </div>
            <div>
              <label htmlFor="subteam" className="block text-sm font-medium text-brand-blue-DEFAULT mb-1">Subteam Interest</label>
              <select id="subteam" className="w-full rounded-md border border-brand-neutral-cardGrey px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange-DEFAULT">
                <option>Navigation</option>
                <option>Dig</option>
                <option>Drivetrain</option>
                <option>Chassis</option>
                <option>Marketing</option>
                <option>Unsure</option>
              </select>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-brand-blue-DEFAULT mb-1">Experience</label>
              <textarea id="experience" rows="4" className="w-full rounded-md border border-brand-neutral-cardGrey px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange-DEFAULT" placeholder="Tell us about any relevant experience (optional)"></textarea>
            </div>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-brand-blue-DEFAULT mb-1">Availability</label>
              <input id="availability" type="text" className="w-full rounded-md border border-brand-neutral-cardGrey px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange-DEFAULT" placeholder="e.g. Wednesdays after 4pm" />
            </div>
            <button type="submit" className="w-full bg-brand-orange-DEFAULT hover:bg-brand-orange-light text-white font-semibold px-4 py-3 rounded-md transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Join;