# THE WORLD LEDGER — Sunday, 22 November 2026

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/djkaz97-cmd/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/djkaz97-cmd/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

An entry for make.fun's [Sum up 22 November's world news in one image](https://make.fun/bounty/news-image-20261122)
bounty: a single 1024x1024 newspaper front page for **Sunday, 22 November 2026**, rendered with
Pillow at build time and shipped as `entry.png`.

## The day on the page

- **Sport · Formula One —** F1 lights up Las Vegas: the Strip becomes a floodlit circuit for the night race.
- **Gaming · global —** GTA VI's launch weekend grips the globe as Rockstar's delayed blockbuster reaches players.
- **Tennis · Turin —** the ATP Finals crown their champion indoors in northern Italy.
- **Climate · Antalya —** COP31 closes after overtime, with delegates running past the deadline on a finance text.
- **Science · Mercury —** the ESA-JAXA BepiColombo probe enters orbit and begins surveying the sun's nearest planet.
- **Markets · New York —** AI chip stocks set the tone before a holiday-shortened US week.
- **Diplomacy · Brussels —** the UK and EU press their post-Brexit reset on defence and mobility.
- **Also today —** the NFL's Week 12 Sunday slate, India and New Zealand's Test series, and the Thanksgiving travel rush.

Headlines are kept factual and non-graphic; the page carries no claimed results that are not yet known,
so nothing on it can read as invented detail.

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
(`sha256 22cccd1edb04f0bd9e6b046b84845b2252f8481e0d8d7b95e00565cbdbd08664`).

## Layout

| File | What it is |
| --- | --- |
| `entry.png` | the front page, 1024x1024 PNG, 169,120 bytes |
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
