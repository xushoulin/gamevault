import { readFileSync } from "node:fs";
import { Pool } from "pg";

const env = readFileSync(".env.local", "utf8");
const conn = env.match(/DATABASE_URL="([^"]+)"/)[1];
const pool = new Pool({ connectionString: conn });

const { rows } = await pool.query("SELECT slug FROM gq_games WHERE featured = true");
await pool.end();

const { gameEditorial } = await import("../src/content/game-editorial.ts");
const have = new Set(Object.keys(gameEditorial));

const missing = rows.map((r) => r.slug).filter((s) => !have.has(s));
const extras = [...have].filter((s) => !rows.find((r) => r.slug === s));
console.log("covered:", rows.length - missing.length, "/", rows.length);
console.log("missing:", JSON.stringify(missing));
console.log("entries not in DB:", JSON.stringify(extras));
const bad = Object.entries(gameEditorial).filter(([, v]) => !v.tips?.length || !v.faqs?.length);
console.log("entries missing tips/faqs:", JSON.stringify(bad.map(([k]) => k)));
