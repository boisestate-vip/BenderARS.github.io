import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const linksPrimary = [
  { to: "/about", label: "About" },
  { to: "/competition", label: "Competition" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
];

const linksMore = [
  { to: "/sponsors", label: "Sponsors" },
  { to: "/advisors", label: "Advisors" },
  { to: "/outreach", label: "Outreach" },
  // { to: "/presskit", label: "Press Kit" },
  { to: "/gallery", label: "Gallery" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-dark-accent/60";
  const activeStyle =
    "underline underline-offset-4 decoration-2 text-brand-text-medium";

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur border-b border-dark-surface">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/press/logos/bender-reversed.svg"
            alt="Bender ARS Logo"
            className="h-16 w-auto"
          />
          <span className="text-lg font-bold text-brand tracking-wide">
            Bender ARS
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          {linksPrimary.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${linkBase} text-dark-muted hover:text-dark-text ${
                  isActive ? activeStyle : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* More dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              className={`${linkBase} text-dark-muted hover:text-dark-text flex items-center gap-1`}
            >
              More
              <svg
                className={`h-4 w-4 transition-transform ${
                  moreOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {moreOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg border border-dark-surface bg-dark-surface/95 backdrop-blur p-1">
                {linksMore.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setMoreOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm hover:bg-white/5 ${
                        isActive
                          ? "text-brand-orange font-semibold"
                          : "text-dark-text"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dark-muted hover:text-dark-text border border-dark-surface rounded-lg h-10 w-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-dark-accent/60"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-surface/95 backdrop-blur border-t border-dark-surface">
          <div className="container py-2">
            {[...linksPrimary, ...linksMore].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-3 text-base border-b border-white/5 last:border-b-0 ${
                    isActive
                      ? "text-brand-text-medium font-semibold"
                      : "text-dark-text"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
