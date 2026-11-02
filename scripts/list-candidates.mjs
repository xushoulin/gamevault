// List non-featured games ordered by plays, for picking the next batch to rewrite.
import pg from "pg";
import fs from "node:fs";

const env = fs.readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const m = env.match(/DATABASE_URL="([^"]+)"/);
const pool = new pg.Pool({ connectionString: m[1] });

const offset = Number(process.argv[2] || 0);
const { rows } = await pool.query(
  `SELECT slug, title, category_id FROM gq_games WHERE featured = false ORDER BY plays DESC NULLS LAST OFFSET $1 LIMIT 60`,
  [offset]
);
for (const r of rows) console.log(`${r.slug} | ${r.title} | ${r.category_id}`);
await pool.end();
