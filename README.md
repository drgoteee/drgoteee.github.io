<h1 align="center">drgoteee.github.io</h1>
<p align="center"><b>Offensive-security methodology hub</b> — live at <a href="https://drgoteee.github.io">drgoteee.github.io</a></p>

<p align="center">
  <img src="https://img.shields.io/badge/version-v1.0-A80030?style=flat-square" alt="version"/>
  <img src="https://img.shields.io/badge/OSCP%2B-Operator%20Checklist-A80030?style=flat-square&labelColor=0d1117" alt="OSCP+"/>
  <img src="https://img.shields.io/badge/items-1%2C229-A80030?style=flat-square" alt="items"/>
  <img src="https://img.shields.io/badge/machine%20writeups-109-1A1A1A?style=flat-square" alt="machines"/>
  <img src="https://img.shields.io/badge/license-MIT-2ea043?style=flat-square" alt="license"/>
</p>

An interactive, in-browser, full-lifecycle **OSCP+ operator checklist** — 1,230 items across every phase, plus 109 machine writeups with attack chains and takeaways. Open it, work top-to-bottom, tick items as you clear them, and your progress persists across refreshes.

## Live

**https://drgoteee.github.io**

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | The checklist app — self-contained React, works offline once CDN assets are cached |
| `custom-methodology.js` | **Your own** checklists/methodology — merges into the built-in phases |

## Add your own checklists

Edit **`custom-methodology.js`**. Two modes:

- **New phase** — a `title` that doesn't match a built-in → shows up as its own section.
- **Extend a built-in** — a `title` that matches one (e.g. `"WINDOWS PRIVILEGE ESCALATION"`) → your items are appended into it.

Items are just `{ p: "HIGH" | "MED" | "LOW", text: "..." }`. The full schema and a worked example are documented at the top of that file. Whatever you add is counted, searched, filtered, and rendered exactly like the native items.

## Run locally / offline

```bash
git clone https://github.com/drgoteee/drgoteee.github.io
cd drgoteee.github.io
xdg-open index.html      # no server needed — exam-safe once CDN assets are cached
```

## Persistence

Progress, targets, loot, and attacker config are saved to your browser (`localStorage`). Clearing site data resets everything.

## Deploy

GitHub **user site**: repo named `drgoteee.github.io`, files at the repo root, served at `https://drgoteee.github.io`. The included `.nojekyll` tells Pages to serve files as-is (no Jekyll processing).

## Legal

For **authorized** penetration testing, security research, and exam preparation only.

---

**Author:** [drgoteee](https://github.com/drgoteee) · OSCP+ · CPTS
