'use server';

import { NeonQueryFunction, neon } from '@neondatabase/serverless';
import { Team } from '@/types';

let db: NeonQueryFunction<false, false>;
const connect = () => {
  if (db) return db;
  db = neon(process.env.DATABASE_URL || '');
  return db;
};

export async function getTeams(): Promise<Team[]> {
  const sql = connect();
  return (await sql`SELECT * FROM teams;`) as Team[];
}

export async function deleteTeam(id: number) {
  const sql = connect();

  const response = await sql`
    DELETE FROM teams
    WHERE id = ${id};
  `;
  console.log('deleteTeam', response);
}

export async function insertTeam(team: Omit<Team, 'id'>) {
  const sql = connect();
  const { logo_url, name, abbreviation, primary_color, secondary_color } = team;

  const response = await sql`
    INSERT INTO teams (logo_url, name, abbreviation, primary_color, secondary_color)
    VALUES (${logo_url}, ${name}, ${abbreviation}, ${primary_color}, ${secondary_color});
  `;
  console.log('insertTeam', response);
}

export async function updateTeam(team: Team) {
  const sql = connect();

  const response = await sql`
    UPDATE teams
    SET 
      logo_url = ${team.logo_url},
      name = ${team.name},
      abbreviation = ${team.abbreviation},
      primary_color = ${team.primary_color},
      secondary_color = ${team.secondary_color}
    WHERE id = ${team.id};
  `;
  console.log('insertTeam', response);
}
