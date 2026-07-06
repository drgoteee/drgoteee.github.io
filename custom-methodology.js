/* ============================================================================
   custom-methodology.js  —  YOUR OWN CHECKLISTS / METHODOLOGY
   ----------------------------------------------------------------------------
   Everything you put in window.CUSTOM_PHASES merges into the checklist at load.
   Your items get counted in the total, searched, filtered, and rendered exactly
   like the built-in ones. Edit this file, commit it, and it's live for everyone.

   TWO THINGS YOU CAN DO:

   1) ADD A BRAND-NEW PHASE
      Give it a title that does NOT match any built-in phase. It shows up as its
      own section (marked as custom).

   2) EXTEND A BUILT-IN PHASE
      Set `title` to EXACTLY match a built-in phase title (case-insensitive),
      e.g. "WINDOWS PRIVILEGE ESCALATION" or "ACTIVE DIRECTORY". Your groups/items
      get appended into that existing phase instead of creating a new one.

   ITEM FIELDS:
      text : (required) the checklist line — commands, notes, whatever
      p    : priority — "HIGH" | "MED" | "LOW"   (defaults to "MED")
      id   : optional; auto-generated if you omit it

   PHASE FIELDS (only `title` really matters):
      title  : section name (also the key for extending a built-in phase)
      icon   : emoji shown next to the title   (default 📌)
      color  : hex accent for the phase        (default #f6c945)
      groups : array of { label, items:[...] }

   ⚠️  Delete or replace the EXAMPLE below before you go live.
   ============================================================================ */

window.CUSTOM_PHASES = [
  {
    title: "PASSWORD ATTACKS",   // ← exactly matches a phase name → adds INTO it
    groups: [
      {
        label: "Custom",             // ← your heading, name it anything
        items: [
          { p: "MED",  text: "Username as Passwords" }
        ]
      }
    ]
  }
];
