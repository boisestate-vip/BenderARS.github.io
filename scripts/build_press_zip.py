#!/usr/bin/env python3
"""
build_press_zip.py — Package the press kit into a single ZIP.

This script zips everything under a source folder (default: public/press)
into a single archive (default: public/press/press-kit.zip).

It preserves the folder structure inside the ZIP and automatically excludes:
- the output ZIP itself (to avoid zipping a zip),
- hidden files/folders (those starting with a dot).

Usage:
    python3 scripts/build_press_zip.py
    python3 scripts/build_press_zip.py --src public/press --out public/press/press-kit.zip
"""

import argparse
import os
import sys
import zipfile
from pathlib import Path


def should_skip(path: Path, out_zip: Path) -> bool:
    # Skip the output archive itself and hidden files/folders.
    if path.resolve() == out_zip.resolve():
        return True
    parts = path.relative_to(path.anchor if path.is_absolute() else Path(".")).parts
    return any(p.startswith(".") for p in parts)


def build_zip(src: Path, out_zip: Path) -> int:
    if not src.exists() or not src.is_dir():
        print(f"[ERROR] Source folder not found or not a directory: {src}", file=sys.stderr)
        return 0

    out_zip.parent.mkdir(parents=True, exist_ok=True)

    # 'w' to recreate each time; use ZIP_DEFLATED for compression
    count = 0
    with zipfile.ZipFile(out_zip, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(src):
            root_path = Path(root)

            # Filter hidden directories in-place to avoid descending into them
            dirs[:] = [d for d in dirs if not should_skip(root_path / d, out_zip)]

            for fname in files:
                fpath = root_path / fname
                if should_skip(fpath, out_zip):
                    continue
                # Store relative to src directory
                arcname = fpath.relative_to(src)
                zf.write(fpath, arcname)
                count += 1

    return count


def main():
    parser = argparse.ArgumentParser(description="Zip the press kit folder into a single archive.")
    parser.add_argument("--src", default="public/press", help="Source folder containing press assets")
    parser.add_argument("--out", default="public/press/press-kit.zip", help="Output ZIP path")
    args = parser.parse_args()

    src = Path(args.src)
    out_zip = Path(args.out)

    print(f"[INFO] Zipping contents of: {src}")
    print(f"[INFO] -> Output archive: {out_zip}")

    added = build_zip(src, out_zip)
    if added == 0:
        print("[WARN] No files were added. Check your source path and visibility.", file=sys.stderr)
    else:
        print(f"[OK] Wrote {added} files to {out_zip}")


if __name__ == "__main__":
    main()
