// Seed categories + games from seed-data.mjs (idempotent, upsert by slug)
import pg from "pg";
import { categories, games } from "./seed-data.mjs";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function main() {
  const catIds = {};
  for (const c of categories) {
    const { rows } = await pool.query(
      `INSERT INTO gq_categories (slug, name, description) VALUES ($1,$2,$3)
       ON CONFLICT (slug) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description
       RETURNING id`,
      [c.slug, c.name, c.description]
    );
    catIds[c.slug] = rows[0].id;
  }

  for (const g of games) {
    await pool.query(
      `INSERT INTO gq_games (slug, title, category_id, source, embed_url, thumb, width, height, description, instructions)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       ON CONFLICT (slug) DO UPDATE SET
         title=EXCLUDED.title, category_id=EXCLUDED.category_id, source=EXCLUDED.source,
         embed_url=EXCLUDED.embed_url, thumb=EXCLUDED.thumb, width=EXCLUDED.width, height=EXCLUDED.height,
         description=EXCLUDED.description, instructions=EXCLUDED.instructions`,
      [
        g.slug, g.title, catIds[g.category], g.source, g.embed_url, g.thumb,
        g.width, g.height, g.description, g.instructions,
      ]
    );
  }
  console.log(`Seeded ${categories.length} categories, ${games.length} games`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
