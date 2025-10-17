import React, { useEffect, useMemo, useState } from "react";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(() => new Set()); // selected tag names (lowercase)
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((r) => r.json())
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]))
      .finally(() => setReady(true));
  }, []);

  // All unique tags (lowercased), sorted A→Z
  const tags = useMemo(() => {
    const s = new Set();
    items.forEach((it) => (it.tags || []).forEach((t) => s.add(String(t).toLowerCase())));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [items]);

  // Toggle a tag on/off
  const toggleTag = (t) => {
    const next = new Set(selected);
    if (next.has(t)) next.delete(t);
    else next.add(t);
    setSelected(next);
  };

  const clearAll = () => setSelected(new Set());
  const selectAll = () => setSelected(new Set(tags));

  // Filter items by selected tags; if none selected, show all
  const filtered = useMemo(() => {
    if (!selected.size) return items;
    return items.filter((it) => (it.tags || []).some((t) => selected.has(String(t).toLowerCase())));
  }, [items, selected]);

  // Sort by tag (primary = first tag alphabetically on the image), then by alt/id
  const sorted = useMemo(() => {
    const key = (it) => {
      const first = (it.tags || []).map((t) => String(t).toLowerCase()).sort()[0] || "";
      return `${first}:::${(it.alt || it.id || "").toString().toLowerCase()}`;
    };
    return [...filtered].sort((a, b) => key(a).localeCompare(key(b)));
  }, [filtered]);

  const glass = "rounded-xl border border-white/10 bg-dark-surface/70 backdrop-blur shadow";

  return (
    <div className="text-dark-text">
      {/* Hero / Header */}
      <section className="relative h-[30vh] min-h-[240px] flex items-center">
        <img
          src="/assets/pattern_circuit2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-dark-bg/60" />
        <div className="container relative">
          <div className={`${glass} max-w-2xl p-6`}>
            <h1 className="text-3xl sm:text-4xl font-bold text-dark-secondary">Gallery</h1>
            <p className="mt-2 text-dark-muted">
              Build, testing, competition, and outreach—curated moments from the Bender ARS program.
            </p>
          </div>
        </div>
      </section>

      {/* Tag Filters */}
      <section className="container pt-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-dark-secondary font-medium mr-1">Filter by tag:</span>
          {tags.map((t) => {
            const active = selected.has(t);
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`px-3 py-1 rounded-lg border transition ${
                  active
                    ? "border-dark-accent bg-dark-accent text-dark-bg"
                    : "border-white/10 text-dark-muted hover:bg-dark-secondary/10"
                }`}
              >
                {t}
              </button>
            );
          })}
          {!!tags.length && (
            <>
              <button
                onClick={clearAll}
                className="ml-2 px-3 py-1 rounded-lg border border-white/10 text-dark-muted hover:bg-dark-secondary/10 transition"
              >
                Clear
              </button>
              <button
                onClick={selectAll}
                className="px-3 py-1 rounded-lg border border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg transition"
              >
                Select All
              </button>
            </>
          )}
        </div>

        {/* Result summary */}
        <div className="mt-3 text-sm text-dark-muted">
          {ready ? `${sorted.length} photo${sorted.length === 1 ? "" : "s"} shown` : "Loading…"}
        </div>
      </section>

      {/* Grid */}
      <section className="container py-8">
        {sorted.length === 0 && ready ? (
          <div className={`${glass} p-6`}>
            <div className="text-dark-text font-medium">No images match the selected tags.</div>
            <div className="text-dark-muted">Try clearing filters to see all photos.</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {sorted.map((g) => (
              <div
                key={g.id}
                className="aspect-square rounded-lg overflow-hidden bg-dark-surface/60 border border-white/10"
              >
                <img
                  src={g.src}
                  alt={g.alt || "Gallery image"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
``
