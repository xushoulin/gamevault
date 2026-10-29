import { query } from "./db";

export type Category = {
  id: number;
  slug: string;
  name: string;
  description: string;
};

export type Game = {
  id: number;
  slug: string;
  title: string;
  source: string;
  embed_url: string;
  thumb: string;
  width: number;
  height: number;
  description: string;
  instructions: string;
  plays: number;
  featured: boolean;
  category_slug?: string;
  category_name?: string;
};

export async function getCategories(): Promise<Category[]> {
  return query<Category>(`SELECT id, slug, name, description FROM gq_categories ORDER BY id`);
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const rows = await query<Category>(
    `SELECT id, slug, name, description FROM gq_categories WHERE slug = $1`,
    [slug]
  );
  return rows[0] ?? null;
}

export async function getGamesByCategory(slug: string): Promise<Game[]> {
  return query<Game>(
    `SELECT g.*, c.slug AS category_slug, c.name AS category_name
     FROM gq_games g JOIN gq_categories c ON c.id = g.category_id
     WHERE c.slug = $1 AND g.published = true
     ORDER BY g.featured DESC, g.id`,
    [slug]
  );
}

export async function getFeaturedGames(): Promise<Game[]> {
  return query<Game>(
    `SELECT g.*, c.slug AS category_slug, c.name AS category_name
     FROM gq_games g JOIN gq_categories c ON c.id = g.category_id
     WHERE g.published = true AND g.featured = true
     ORDER BY g.id`
  );
}

export async function getAllGames(): Promise<Game[]> {
  return query<Game>(
    `SELECT g.*, c.slug AS category_slug, c.name AS category_name
     FROM gq_games g JOIN gq_categories c ON c.id = g.category_id
     WHERE g.published = true
     ORDER BY g.id`
  );
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
  const rows = await query<Game>(
    `SELECT g.*, c.slug AS category_slug, c.name AS category_name
     FROM gq_games g JOIN gq_categories c ON c.id = g.category_id
     WHERE g.slug = $1 AND g.published = true`,
    [slug]
  );
  return rows[0] ?? null;
}

export async function getPopularGames(limit = 8): Promise<Game[]> {
  return query<Game>(
    `SELECT g.*, c.slug AS category_slug, c.name AS category_name
     FROM gq_games g JOIN gq_categories c ON c.id = g.category_id
     WHERE g.published = true AND g.featured = true
     ORDER BY g.plays DESC, g.id ASC
     LIMIT $1`,
    [limit]
  );
}

export async function getRelatedGames(categorySlug: string, excludeSlug: string, limit = 6): Promise<Game[]> {
  return query<Game>(
    `SELECT g.*, c.slug AS category_slug, c.name AS category_name
     FROM gq_games g JOIN gq_categories c ON c.id = g.category_id
     WHERE c.slug = $1 AND g.slug <> $2 AND g.published = true
     ORDER BY random() LIMIT $3`,
    [categorySlug, excludeSlug, limit]
  );
}

export async function incrementPlays(slug: string): Promise<void> {
  await query(`UPDATE gq_games SET plays = plays + 1 WHERE slug = $1`, [slug]);
}
