/**
 * Import GameMonetize feed JSON pages into Neon PostgreSQL.
 * Usage: node scripts/import-feed.mjs /tmp/gmf1.json /tmp/gmf2.json ...
 * - Maps feed categories to the 6 site categories
 * - Slugs: title -> kebab-case, dedup vs DB and within batch
 * - Skips games already in DB (by slug)
 */
import { readFileSync } from "node:fs";
import { Pool } from "pg";

const FILES = process.argv.slice(2);
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL || FILES.length === 0) {
  console.error("usage: DATABASE_URL=... node scripts/import-feed.mjs <feed.json...>");
  process.exit(1);
}

const CAT_MAP = {
  puzzle: 1, jigsaw: 1, mahjong: 1, sudoku: 1,
  arcade: 2, ".io": 2, "bejeweled": 2, clicker: 2,
  action: 3, adventure: 3, shooting: 3, stickman: 3, fighting: 3, zombie: 3,
  casual: 4, hypercasual: 4, girls: 4, boys: 4, multiplayer: 4, simulation: 4,
  "dress up": 4, cooking: 4, baby: 4, ".io": 2,
  sports: 5, racing: 5, football: 5, soccer: 5, basketball: 5,
  brain: 6, word: 6, educational: 6, board: 6, cards: 6, trivia: 6, quiz: 6,
};

function catId(category) {
  const c = (category || "").toLowerCase().trim();
  if (CAT_MAP[c] !== undefined) return CAT_MAP[c];
  for (const key of Object.keys(CAT_MAP)) {
    if (c.includes(key)) return CAT_MAP[key];
  }
  return 4; // fallback: casual
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "game";
}

const pool = new Pool({ connectionString: DATABASE_URL });

const existing = new Set();
{
  const r = await pool.query("SELECT slug FROM gq_games");
  for (const row of r.rows) existing.add(row.slug);
}

const used = new Set(existing);
let inserted = 0, skipped = 0, batchDup = 0;

for (const file of FILES) {
  let games;
  try {
    games = JSON.parse(readFileSync(file, "utf8"));
  } catch (e) {
    console.error(`skip ${file}: ${e.message}`);
    continue;
  }

  for (const g of games) {
    if (!g.title || !g.url || !g.thumb) { skipped++; continue; }

    let slug = slugify(g.title);
    if (used.has(slug)) {
      batchDup++;
      continue; // skip dupes (in DB or earlier in batch)
    }

    const desc = (g.description || `${g.title} — free HTML5 game. Play instantly in your browser.`).trim().slice(0, 1500);
    const instr = (g.instructions || "Use mouse or touch controls. Play directly in your browser.").trim().slice(0, 1000);

    try {
      await pool.query(
        `INSERT INTO gq_games (slug, title, source, embed_url, thumb, width, height, description, instructions, plays, published, category_id)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,0,true,$10)`,
        [slug, g.title, "gamemonetize", g.url, g.thumb, g.width || 1920, g.height || 1080, desc, instr, catId(g.category)]
      );
      used.add(slug);
      inserted++;
    } catch (e) {
      console.error(`insert fail [${g.title}]: ${e.message}`);
      skipped++;
    }
  }
}

console.log(`inserted: ${inserted}, skipped(dup/invalid): ${skipped} (batch dupes: ${batchDup})`);
await pool.end();
