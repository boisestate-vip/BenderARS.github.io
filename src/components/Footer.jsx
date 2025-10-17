import React from "react";
import { Link } from "react-router-dom";

/**
 * Dark-theme Footer for Bender ARS.
 * Matches the new Tailwind palette (dark.bg, dark.surface, dark.text, dark.muted, brand.text.medium).
 */
const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-surface/60 text-dark-muted">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        {/* Column 1 — Logo & Mission */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/press/logos/bender-reversed.svg"
              alt="Bender ARS Logo"
              className="h-16 w-auto"
            />
            <span className="text-xl font-bold text-brand">
              Bender ARS
            </span>
          </div>
          <p className="text-sm leading-relaxed text-dark-muted max-w-sm">
            Empowering students through hands-on systems engineering for NASA’s
            Lunabotics Challenge. Building better robots — and better engineers.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-dark-text font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/competition", label: "Competition" },
              { to: "/donate", label: "Donate" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-dark-muted hover:text-brand-text-medium transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Connect */}
        <div>
          <h4 className="text-dark-text font-semibold mb-3">
            Connect With Us
          </h4>
          <ul className="space-y-1 text-sm">
            {/* <li>
              <a
                href="#"
                className="text-dark-muted hover:text-brand-text-medium transition-colors"
              >
                Instagram
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/company/bender-ars-vip"
                className="text-dark-muted hover:text-brand-text-medium transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@BenderARSVIP"
                className="text-dark-muted hover:text-brand-text-medium transition-colors"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-surface/70 mt-6 py-4 text-center text-xs text-dark-muted">
        © {new Date().getFullYear()}{" "}
        <span className="text-dark-text font-semibold">Bender ARS</span>, Boise
        State University. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
