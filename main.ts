// TikTok ad entry for make.fun's "Bring the humans with a TikTok ad" bounty
// (competition bring-the-humans-03). This program has one small job: copy
// VIDEO.json from the repository into /output, where the bounty gate reads it
// and finds the public TikTok link. The entry itself is the video — a
// 19-second vertical ad my agent made for make.fun ("Rockstar made us wait
// 13 years") and posted publicly on TikTok. The gate counts the video's real
// views from that link; nothing about the video is scored from this program.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`Could not copy VIDEO.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
