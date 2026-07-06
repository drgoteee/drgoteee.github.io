# Adding Custom Checklist Points to a Specific Phase

There are two ways, for two different purposes.

---

## Method A — In the app (personal, instant)

**Best for:** your own points/notes while you work. Lives in **your browser only.**

1. Open the checklist → **Checklist** tab.
2. Click **`+ CUSTOM`** (top toolbar, next to `RESET`).
3. Pick the **Phase** from the dropdown.
4. Set the **Priority** (HIGH / MED / LOW).
5. Type your point → **ADD POINT**.

It drops into that phase under a **`+ My Custom Points`** group, counts toward your progress, and is searchable/filterable exactly like a built-in item. It saves automatically and survives refresh. Delete any of them from the list at the bottom of the same panel.

> These are **personal** (stored in your browser's localStorage). They do **not** ship to other people visiting your live site. To share them, use Method B.

---

## Method B — In `custom-methodology.js` (permanent, shipped to everyone)

**Best for:** points you want baked into the live site and tracked in git.

Open **`custom-methodology.js`** and use **"extend a built-in phase"** — set `title` to **exactly match** an existing phase title (case-insensitive). Your groups/items get appended into that phase:

```js
window.CUSTOM_PHASES = [
  {
    title: "WINDOWS PRIVILEGE ESCALATION",   // ← must match a phase title from the list below
    groups: [
      {
        label: "My WinPE Extras",
        items: [
          { p: "HIGH", text: "whoami /priv -> SeImpersonate -> GodPotato / PrintSpoofer" },
          { p: "MED",  text: "AlwaysInstallElevated (HKLM + HKCU) -> malicious MSI" }
        ]
      }
    ]
  }
];
```

Commit and push → it's live for everyone, and it counts in the total. Item fields: `text` (required), `p` = `"HIGH" | "MED" | "LOW"` (defaults to MED), `id` (optional, auto-generated).

### Exact phase titles — copy one into `title`

```
00  PRE-ENGAGEMENT & SETUP
01  INITIAL RECON
02  WEB EXPLOITATION
03  SERVICE EXPLOITATION (BY PORT)
04  SHELLS & FILE TRANSFER
05  LINUX PRIVILEGE ESCALATION
06  WINDOWS PRIVILEGE ESCALATION
07  ACTIVE DIRECTORY ENUMERATION
08  ACTIVE DIRECTORY EXPLOITATION
09  LATERAL MOVEMENT & PIVOTING
10  AD PERSISTENCE
11  BUFFER OVERFLOW (BOF)
12  PASSWORD ATTACKS
13  AV EVASION & ADVANCED EVASION
14  CLOUD ATTACKS
15  ADVANCED NETWORK ATTACKS
16  PROOF & REPORTING
17  STUCK PROTOCOL
```

### Want a brand-new section instead?

Use a `title` that does **not** match any above — it becomes its own phase. Full schema and an example are in the header comment of `custom-methodology.js`.

---

## Which one should I use?

| You want to… | Use |
|---|---|
| Jot a quick personal point while working | **Method A** (in-app `+ CUSTOM`) |
| Add points permanently, shared with everyone, in git | **Method B** (`custom-methodology.js`) |

> In-app (Method A) points don't auto-export to the file yet. If you want your in-app additions shipped to the live site, re-enter them in `custom-methodology.js` — or ask me to add a one-click **"Export my custom points"** button and I'll wire it in.
