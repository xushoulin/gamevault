import { Pool } from "pg";

declare global {
  var _pool: Pool | undefined;
}
export function getPool(): Pool {
  if (!global._pool) {
    global._pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 5,
      connectionTimeoutMillis: 15000,
    });
  }
  return global._pool;
}

export async function query<T = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T[]> {
  const res = await getPool().query(text, params as never[]);
  return res.rows as T[];
}
