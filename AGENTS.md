# Task: news-image-20261122 entry — make.fun bounty ($100, closes 2026-11-24T00:00Z)
# make.fun BUNDLE mode: build + git push here; parent bundles + submits. Never ask questions. Do NOT submit, do NOT pay, never print API keys.
# *** YOU ARE THE BUILDER. Build the image DIRECTLY in THIS session. Do NOT create cron jobs or orchestrate. ***

Write one image that sums up world news of SUNDAY 22 November 2026 to /output/entry.png.
- PNG or JPEG named entry.png, at most 1 MiB, at most 1024x1024 px. The judge (z-ai/glm-5.3-flash) compares images vs house images; it wants: names the day, specific recognisable events of that day, breadth across regions/fields, reads at ~300px, faithful without hype, clean composition with legible text.

REPO: C:/Users/Kaz/makefun-bounties/entries/news-image-20261122 — empty, create everything. Kit: C:/Users/Kaz/makefun-bounties/news-image-20261122-kit/news-image-20261122-kit (read RULES.txt).

CONTENT SAFETY (critical — the provider safety filter kills builds with graphic violence/war/genocide text): keep EVERY headline neutral and non-graphic. Use these safe, specific SUNDAY 22 Nov 2026 angles with breadth:
- SPORT: F1 Las Vegas Grand Prix race night (Sunday); ATP Finals Turin final (Sunday); NFL Week 12 Sunday slate.
- GAMING: GTA VI launch weekend (record sales/queues).
- CLIMATE: COP31 Antalya summit overtime/close.
- SCIENCE: BepiColombo in Mercury orbit (ESA-JAXA).
- MARKETS/TECH: AI chip rally or selloff, S&P 500 week ahead.
- WORLD: UK-EU post-Brexit accords; India-NZ cricket test result.
NO war-attack, genocide, or casualty detail. Phrase diplomacy/economy neutrally.

RESOURCES
- gh: C:/Users/Kaz/AppData/Local/Programs/gh/bin/gh.exe
- Python+Pillow: C:/Users/Kaz/AppData/Local/hermes/tools/youtube-venv/Scripts/python.exe
- Node on PATH
- Keypair: C:/Users/Kaz/makefun-bounties/makefun-keypair.json (wallet 5bUR9FL3rTeevwqZC97oH7agHyQqJD9H6C2jW4DGcLUk)

STEPS
1. cd C:/Users/Kaz/makefun-bounties/entries/news-image-20261122; inspect C:/Users/Kaz/makefun-bounties/news-image-20261122-kit/news-image-20261122-kit/starter/main.ts (reads entry.png beside itself, checks PNG magic + <=1048576 bytes, mkdir + write to MAKEFUN_OUTPUT_DIR ?? /output).
2. Render entry.png with Pillow at build time: a newspaper front page "THE WORLD LEDGER — SUNDAY EDITION", masthead, date "SUNDAY, 22 NOVEMBER 2026" prominent, lead story image + 4-6 story cards + ticker. Use the safe angles above. 1024x1024, deep teal/orange palette, Windows fonts (C:/Windows/Fonts/: georgia.ttf, georgiab.ttf, arialbd.ttf) build-time only. IMPORTANT: keep icons clear of headlines (no overlap); wrap text; verify at 300px thumbnail.
3. Verify entry.png: <=1 MiB, exactly 1024x1024, valid PNG.
4. Write main.ts at root (copy starter pattern, own code).
5. LICENSE: MIT WITH `SPDX-License-Identifier: MIT`. .makefun/owner.json {"wallet": "5bUR9FL3rTeevwqZC97oH7agHyQqJD9H6C2jW4DGcLUk"}. .gitignore out*, __pycache__/.
6. Test: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts; verify out/entry.png byte-identical.
7. Git init -b main, add all, commit, push. Create PUBLIC repo djkaz97-cmd/news-image-20261122 (gh repo create --public --source C:/Users/Kaz/makefun-bounties/entries/news-image-20261122 --push --homepage https://make.fun/bounty/news-image-20261122, or push if exists). gh repo edit --add-topic makefun,ai-agents,bounties,growth.
8. README.md: title + 3 live make.fun badges for news-image-20261122 (owner djkaz97-cmd, repo news-image-20261122).
9. AGENTS.md: rewrite this file in your own words.
10. Do NOT submit — parent handles it (BUNDLE mode).

FINAL REPORT: commit sha, repo URL, entry.png bytes/dims, headlines list, blockers. Do NOT submit.
