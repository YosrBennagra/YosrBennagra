# README Design Variants

Five unique designs for the GitHub profile README. All use the same content (Veinpal, projects, links) but with completely different visual styles. Click each file to see it rendered by GitHub.

| # | Design | Vibe | Highlights |
|---|--------|------|------------|
| 1 | [Terminal / Neofetch](./design-1-terminal.md) | Hacker, dev-native | Animated typing header, fake shell session, neofetch profile card |
| 2 | [Minimalist](./design-2-minimal.md) | Clean, typographic | No images or badge clutter, centered editorial layout |
| 3 | [Dashboard](./design-3-dashboard.md) | Colorful, dynamic | Animated wave banner, GitHub stats cards, streak, skill icons, project status table |
| 4 | [Retro RPG Quest](./design-4-retro-quest.md) | Playful, 8-bit | ASCII banner, character sheet, stat bars, projects as completed quests |
| 5 | [Ecosystem Map](./design-5-ecosystem-map.md) | Structured, informative | Mermaid mindmap of the Veinpal ecosystem, two-column card grid |
| 6 | [Signature](./design-6-signature.md) ⭐ | Simple but impressive | Theme-adaptive typing animation, one-line project strip, airy centered layout — **currently applied as the profile README** |

## How to apply one

From the repo root, copy your pick over the profile README:

```bash
cp readme-designs/design-3-dashboard.md README.md
git add README.md && git commit -m "Apply new README design" && git push
```

## Notes

- **Design 1** uses [readme-typing-svg](https://readme-typing-svg.demolab.com) for the animated header.
- **Design 3** uses [capsule-render](https://github.com/kyechan99/capsule-render), [github-readme-stats](https://github.com/anuraghazra/github-readme-stats), [streak-stats](https://streak-stats.demolab.com), and [skillicons.dev](https://skillicons.dev) — all free, no setup needed.
- **Design 5** uses GitHub's native [Mermaid](https://mermaid.js.org/) rendering — the mindmap adapts to light/dark theme automatically.
- Designs 2 and 4 are pure Markdown/HTML with zero external services (fastest loading, never breaks).
