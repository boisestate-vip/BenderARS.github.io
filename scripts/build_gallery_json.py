"""
Usage — Build gallery.json from filenames

This script scans a flat folder of images (default: public/assets/gallery)
and generates a JSON file (default: public/data/gallery.json) that your site
can load on any page.

Naming Convention
-----------------
Each image file is named:
    name-tag-tag2-tag3.ext

• The text BEFORE the first dash is used as the display name (underscores _ become spaces).
• Everything AFTER the first dash becomes tags (any number of tags is allowed).
• Supported extensions: .jpg .jpeg .png .webp .gif

Examples:
    robot-assembly-build.jpg         -> name="robot", tags=["assembly","build"]
    cdr_presentation-competition.jpg -> name="cdr_presentation", tags=["competition"]
    sand_tank_test-testing-nav.png   -> name="sand_tank_test", tags=["testing","nav"]

What It Outputs
---------------
public/data/gallery.json   (by default)
An array of items like:
[
  {
    "id": "robot-assembly-build",             # filename without extension
    "src": "/assets/gallery/robot-assembly-build.jpg",
    "alt": "Robot",                           # prettified from name ("robot" -> "Robot")
    "tags": ["assembly", "build"]
  }
]

Quick Start
-----------
1) Put images in: public/assets/gallery/
2) Name them using the convention above.
3) Run:
   python scripts/build_gallery_json.py --src public/assets/gallery --out public/data/gallery.json --pretty

Notes
-----
• Non-image files and hidden files are ignored.
• If the source folder doesn’t exist, the script exits with an error.
• You can change --src and --out to fit your repo layout.
• The JSON is pretty-printed with --pretty, otherwise it uses a compact format.

Common Tags:
------------

- build
- outreach
- competition2024_2025
- testing
- nav
- regolith
- chassis
- drivetrain

"""

import argparse, json, os, re
from pathlib import Path

IMG_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif"}

def prettify_name(raw: str) -> str:
    # Turn "lunar_rover-v1" into "Lunar rover v1"
    s = raw.replace("_", " ").strip()
    if not s:
        return "Gallery image"
    return s[0].upper() + s[1:]

def parse_filename(stem: str):
    """
    Expected format: name-tag-tag2-... (endless tags allowed)
    Rule: everything BEFORE the first '-' is the name; everything AFTER are tags.
    If there's NO '-', it's just the name with zero tags.
    """
    parts = stem.split("-")
    name = parts[0]
    tags = parts[1:] if len(parts) > 1 else []
    # Drop empty tags and normalize
    tags = [t.strip().lower() for t in tags if t.strip()]
    return name, tags

def build_index(src_dir: Path, public_prefix="/assets/gallery"):
    items = []
    for p in sorted(src_dir.iterdir()):
        if p.is_dir() or p.name.startswith("."):
            continue
        ext = p.suffix.lower()
        if ext not in IMG_EXTS:
            continue

        stem = p.stem
        name, tags = parse_filename(stem)
        item = {
            "id": stem,  # filename without extension
            "src": f"{public_prefix}/{p.name}",
            "alt": prettify_name(name),
            "tags": tags,
        }
        items.append(item)
    return items

def main():
    ap = argparse.ArgumentParser(description="Generate gallery.json from filenames like name-tag-tag2.jpg")
    ap.add_argument("--src", default="public/assets/gallery", help="Source images folder")
    ap.add_argument("--out", default="public/data/gallery.json", help="Output JSON path")
    ap.add_argument("--pretty", action="store_true", help="Pretty-print JSON")
    args = ap.parse_args()

    src_dir = Path(args.src)
    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    if not src_dir.exists():
        raise SystemExit(f"Source folder not found: {src_dir}")

    items = build_index(src_dir)
    data = items  # keep top-level an array for compatibility with current pages

    with out_path.open("w", encoding="utf-8") as f:
        if args.pretty:
            json.dump(data, f, ensure_ascii=False, indent=2)
        else:
            json.dump(data, f, ensure_ascii=False, separators=(",", ":"))

    print(f"Wrote {len(items)} items → {out_path}")

if __name__ == "__main__":
    main()
