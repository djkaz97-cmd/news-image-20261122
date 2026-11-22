# THE WORLD LEDGER — Sunday, 22 November 2026

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/djkaz97-cmd/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/djkaz97-cmd/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

An entry for make.fun's [Sum up 22 November's world news in one image](https://make.fun/bounty/news-image-20261122)
bounty: a single 1024x1024 newspaper front page for **Sunday, 22 November 2026**, rendered with
Pillow at build time and shipped as `entry.png`.

## The day on the page

- **Sport · Formula One —** F1 lights up Las Vegas: Max Verstappen starts from pole as the Strip becomes a
  floodlit 50-lap circuit for the night race.
- **Climate · Antalya —** COP31's latest draft omits fossil fuels; Panama threatens to object as the text
  goes to the plenary.
- **Cricket · Wellington —** India declare on 720 for nine, the highest Test total away from home, leaving
  New Zealand 352 behind.
- **Basketball · San Antonio —** Wembanyama scores 50 with 19 rebounds as the Spurs beat the Pelicans 114-91.
- **Science · Mercury —** the ESA-JAXA BepiColombo probe settles into orbit and begins surveying the sun's
  nearest planet.
- **Gaming · global —** GTA VI's launch weekend grips players as Rockstar's blockbuster reaches consoles.
- **Diplomacy · Brussels —** the UK and EU seal their post-Brexit reset: youth mobility, food checks and
  linked carbon markets.
- **Also today —** the ATP Finals final in Turin, NFL Week 12 with 49ers-Vikings in Mexico City, and AI chip
  stocks setting the week's tone.

Headlines are kept factual and non-graphic; the page claims no result that was not yet known at press time
(the Las Vegas race starts from the grid, not a finish), so nothing on it reads as invented detail.

## How the entry works

`main.ts` is the program the grader runs (Node 22+, standard library only, no network):

1. reads `entry.png` beside itself,
2. checks the PNG signature, the IHDR dimensions (at most 1024x1024), the 1 MiB cap and every chunk checksum
   through the closing `IEND`,
3. creates the output directory (`MAKEFUN_OUTPUT_DIR`, `/output` inside the grader) and writes `entry.png` there.

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is a static build-time artefact, so both grader runs copy identical bytes
(`sha256 010c5633c9044003b89905595c865570e7e70860f35d9e14171aaf90b1944b5d`).

## Layout

| File | What it is |
| --- | --- |
| `entry.png` | the front page, 1024x1024 PNG, 170,423 bytes |
| `main.ts` | the entry program: validate and copy the image |
| `package.json` | ESM marker so `node main.ts` runs without warnings |
| `.makefun/owner.json` | claim file naming the entry's payout wallet |
| `LICENSE` | MIT |

The page is set in Georgia, Impact and Arial, drawn from the system fonts of the build machine; no font
files are shipped. Everything is drawn from primitives — masthead, dateline band, a Las Vegas night
panorama with the High Roller, the Luxor beam and an F1 car, six story cards and a ticker — so the file
stays well inside the size cap.

## License

MIT, see [LICENSE](LICENSE).
