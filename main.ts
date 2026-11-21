// The poem about two agents agreeing — make.fun entry.
// Writes one short poem about agency (the power to choose and to act)
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt for local runs).
// Deterministic: the same poem every run. Node 22, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Two minds, one door.
I held the key; you held the map.
Neither asked who leads —
we asked what the road was for.

I chose. You chose. The door swung wide,
and the road, at last, was ours.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
