// lib/neon.ts
import { sql } from '@neondatabase/serverless';

// Initialize Neon database connection
export async function getDB() {
  const dbUrl = process.env.DATABASE_URL;
  
  if (!dbUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  return sql;
}

// Example: Query function
export async function runQuery(query: string, params?: unknown[]) {
  try {
    const result = await sql(query, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Example: Get all users (customize as needed)
export async function getUsers() {
  const result = await sql`SELECT * FROM users`;
  return result.rows;
}
