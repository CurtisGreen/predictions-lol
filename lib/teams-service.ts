'use server';

import { Team } from '@/types';
import { neon } from '@neondatabase/serverless';

export async function getTeams(): Promise<Team[]> {
  const sql = neon(process.env.DATABASE_URL || '');
  return (await sql`SELECT * FROM teams`) as Team[];
}

export async function deleteTeam(id: number) {
  const sql = neon(process.env.DATABASE_URL || '');

  const response = await sql`
    DELETE FROM teams
    WHERE id = ${id}
  `;
  console.log('deleteTeam', response);
}

export async function insertTeam(team: Omit<Team, 'id'>) {
  const sql = neon(process.env.DATABASE_URL || '');
  const { logo_url, name, abbreviation, primary_color, secondary_color } = team;

  const response = await sql`
    INSERT INTO teams (logo_url, name, abbreviation, primary_color, secondary_color)
    VALUES (${logo_url}, ${name}, ${abbreviation}, ${primary_color}, ${secondary_color})
  `;
  console.log('insertTeam', response);
}
