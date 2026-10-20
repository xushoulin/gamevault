// Create tables for GameVault (prefix gq_ to coexist with other tables)
import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function main() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS gq_categories (
      id SERIAL PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      description TEXT DEFAULT '',
      created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS gq_games (
      id SERIAL PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      category_id INT REFERENCES gq_categories(id),
      source TEXT NOT NULL DEFAULT 'local',
      embed_url TEXT NOT NULL,
      thumb TEXT NOT NULL,
      width INT DEFAULT 800,
      height INT DEFAULT 600,
      description TEXT DEFAULT '',
      instructions TEXT DEFAULT '',
      plays INT DEFAULT 0,
      published BOOLEAN DEFAULT true,
      created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE INDEX IF NOT EXISTS idx_gq_games_category ON gq_games(category_id);
    CREATE INDEX IF NOT EXISTS idx_gq_games_slug ON gq_games(slug);
  `);
  console.log("Tables gq_categories / gq_games ready");
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
