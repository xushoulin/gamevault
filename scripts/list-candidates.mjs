// List non-featured games ordered by plays, for picking the next batch to rewrite.
import pg from "pg";
import fs from "node:fs";

const env = fs.readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const m = env.match(/DATABASE_URL="([^"]+)"/);
const pool = new pg.Pool({ connectionString: m[1] });

const { rows } = await pool.query(
  `SELECT slug, title, category_id FROM gq_games WHERE featured = false ORDER BY plays DESC NULLS LAST LIMIT 60`
);
for (const r of rows) console.log(`${r.slug} | ${r.title} | ${r.category_id}`);
await pool.end();
