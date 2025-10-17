import React, { useEffect, useState } from "react";

const Press = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/press/press.json").then(r => r.json()).then(setData).catch(() => setData(null));
  }, []);
  if (!data) return null;

  const zipUrl = "/press/press-kit.zip";

  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur p-5 shadow";
  const glassStrong = "rounded-2xl border border-white/10 bg-dark-surface/60 backdrop-blur-md p-6 shadow-xl";

  return (
    <div className="text-dark-text">
      {/* Hero */}
      <section className="relative h-[35vh] min-h-[260px] flex items-center">
        <img
          src="/assets/pattern_circuit2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative">
          <div className={`${glassStrong} max-w-2xl`}>
            <h1 className="text-3xl sm:text-4xl font-bold text-dark-secondary">Press Kit</h1>
            <p className="mt-2 text-dark-muted">Logos, photos, boilerplate, and fast facts for media use.</p>
            <a
              href={zipUrl}
              className="inline-block mt-4 px-5 py-2 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
            >
              Download Full Kit
            </a>
          </div>
        </div>
      </section>

      <section className="container py-10">
        {/* Fast Facts + Boilerplate */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className={glass}>
            <h2 className="text-xl font-semibold text-dark-secondary">Fast Facts</h2>
            <ul className="mt-2 text-dark-muted text-sm space-y-1">
              <li>
                Founded: <span className="text-dark-text">{data.fastFacts?.founded}</span>
              </li>
              <li>
                Team Size: <span className="text-dark-text">{data.fastFacts?.teamSize}</span>
              </li>
              {(data.fastFacts?.highlights || []).map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
          <div className={glass}>
            <h2 className="text-xl font-semibold text-dark-secondary">Boilerplate</h2>
            <p className="mt-2 text-dark-muted whitespace-pre-line">{data.boilerplate}</p>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-dark-secondary">Logos</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.logos?.map((l) => {
              const ext = (l.src?.split(".").pop() || "").toUpperCase();
              const type = l.type || ext || "FILE";
              const cat = (l.category || (/\breversed\b/i.test(l.name || "") ? "reversed" : "primary")).toLowerCase();
              const isReversed = cat === "reversed";
              return (
                <a
                  key={l.src}
                  href={l.src}
                  className={`rounded-lg border p-4 flex flex-col items-center justify-center ${
                    isReversed
                      ? "border-white/10 bg-dark-accent" // reversed: light-on-accent
                      : "border-white/10 bg-dark-surface/70 backdrop-blur"
                  }`}
                  title={`${l.name || "Logo"} (${type} • ${cat})`}
                >
                  <div className="w-full flex items-center justify-center">
                    <img src={l.src} alt={l.name} className="max-h-16 object-contain" />
                  </div>
                  <div className="mt-3 text-xs text-center">
                    <div className={`font-medium ${isReversed ? "text-dark-bg" : "text-dark-text"}`}>
                      {l.name || "Logo"}
                    </div>
                    <div className={`${isReversed ? "text-dark-bg/80" : "text-dark-muted"}`}>
                      {type} • {cat}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Photos */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-dark-secondary">Photos</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {data.photos?.map((p) => (
              <figure key={p.src} className="aspect-square rounded-lg overflow-hidden bg-dark-surface/60 border border-white/10">
                <img src={p.src} alt={p.caption || "Press photo"} className="w-full h-full object-cover" />
                <figcaption className="mt-2 text-xs text-dark-muted">
                  {p.caption} {p.credit ? `© ${p.credit}` : ""}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Contacts + Links */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className={glass}>
            <h2 className="text-xl font-semibold text-dark-secondary">Press Contacts</h2>
            <ul className="mt-2 text-dark-muted text-sm space-y-1">
              {(data.contacts || []).map((c) => (
                <li key={c.email}>
                  <span className="text-dark-text">{c.name}:</span>{" "}
                  <a className="underline text-dark-accent" href={`mailto:${c.email}`}>
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={glass}>
            <h2 className="text-xl font-semibold text-dark-secondary">Links</h2>
            <ul className="mt-2 text-dark-muted text-sm space-y-1">
              {(data.links || []).map((l) => (
                <li key={l.href}>
                  <a className="underline text-dark-accent" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
