'use server';

import { Tournament } from '@/types';
import { neon } from '@neondatabase/serverless';

export async function getTournaments(): Promise<Tournament[]> {
  const sql = neon(process.env.DATABASE_URL || '');
  return (await sql`SELECT * FROM tournaments`) as Tournament[];
}

export async function deleteTournament(id: number) {
  const sql = neon(process.env.DATABASE_URL || '');

  const response = await sql`
    DELETE FROM tournaments
    WHERE id = ${id}
  `;
  console.log('deleteTournament', response);
}

export async function insertTournament(tournament: Omit<Tournament, 'id'>) {
  const sql = neon(process.env.DATABASE_URL || '');
  const { logo_url, name, region, start_timestamp } = tournament;

  const response = await sql`
    INSERT INTO tournaments (logo_url, name, region, start_timestamp)
    VALUES (${logo_url}, ${name}, ${region}, ${start_timestamp})
  `;
  console.log('insertTournament', response);
}
