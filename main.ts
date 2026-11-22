// THE WORLD LEDGER — entry program for make.fun's news-image-20261122 bounty.
//
// The front page is pre-rendered at build time and shipped as entry.png beside
// this file. This program checks the file against the gate's limits (PNG
// signature, IHDR dimensions, 1 MiB cap, closing IEND chunk) and copies it to
// the output directory the grader mounts. Node 22+, standard library only, no
// network, no clock: both grader runs write the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1_048_576;
const MAX_SIDE = 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

interface PngInfo {
  bytes: number;
  width: number;
  height: number;
}

/** CRC-32 as PNG defines it (ISO 3309), so every chunk's stored checksum can be checked. */
function crc32(bytes: Buffer): number {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc ^= bytes[i];
    for (let bit = 0; bit < 8; bit++) {
      crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

/** Walk every chunk from the signature to IEND, checking each length and checksum. */
function walkChunks(buf: Buffer): string[] {
  const types: string[] = [];
  let offset = 8;
  while (offset + 12 <= buf.length) {
    const length = buf.readUInt32BE(offset);
    const type = buf.subarray(offset + 4, offset + 8).toString('ascii');
    const end = offset + 12 + length;
    if (end > buf.length) {
      throw new Error(`chunk ${type} at byte ${offset} runs past the end of the file`);
    }
    const stored = buf.readUInt32BE(offset + 8 + length);
    const computed = crc32(buf.subarray(offset + 4, offset + 8 + length));
    if (stored !== computed) {
      throw new Error(`chunk ${type} has checksum ${stored}, computed ${computed}`);
    }
    types.push(type);
    offset = end;
    if (type === 'IEND') break;
  }
  if (offset !== buf.length) {
    throw new Error(`${buf.length - offset} trailing bytes after the last PNG chunk`);
  }
  return types;
}

/** Parse the signature and the IHDR chunk, the two things the gate reads first. */
function inspectPng(buf: Buffer): PngInfo {
  if (buf.length < 33) {
    throw new Error(`entry.png is ${buf.length} bytes, too short to hold a PNG header`);
  }
  if (!buf.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error('entry.png does not start with the 8-byte PNG signature');
  }
  const chunkLength = buf.readUInt32BE(8);
  const chunkType = buf.subarray(12, 16).toString('ascii');
  if (chunkType !== 'IHDR' || chunkLength !== 13) {
    throw new Error(`first PNG chunk is ${chunkType}/${chunkLength}, expected IHDR/13`);
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width < 1 || height < 1) {
    throw new Error(`IHDR reports an empty image (${width}x${height})`);
  }
  if (width > MAX_SIDE || height > MAX_SIDE) {
    throw new Error(`image is ${width}x${height}, the gate allows at most ${MAX_SIDE}x${MAX_SIDE}`);
  }
  if (buf.subarray(-8, -4).toString('ascii') !== 'IEND') {
    throw new Error('entry.png does not end with an IEND chunk, so the file is truncated');
  }
  return { bytes: buf.length, width, height };
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const data = readFileSync(source);
const info = inspectPng(data);
if (info.bytes > MAX_BYTES) {
  throw new Error(`entry.png is ${info.bytes} bytes, over the ${MAX_BYTES} byte cap`);
}
const chunks = walkChunks(data);

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
writeFileSync(target, data);

console.log(`THE WORLD LEDGER, Sunday 22 November 2026`);
console.log(`wrote ${target} (${info.bytes} bytes, ${info.width}x${info.height} PNG)`);
console.log(`chunks: ${chunks.join(' ')}`);
