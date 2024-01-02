import { neon } from '@neondatabase/serverless';

type Tournament = {
  id?: number;
  end_timestamp: string;
  logo_url: string;
  name: string;
  region: string;
  start_timestamp: string;
};

async function insertTournament({
  end_timestamp,
  logo_url,
  name,
  region,
  start_timestamp,
}: Tournament) {
  const sql = neon(process.env.DATABASE_URL || '');

  // await insertTournament({
  //   endTimestamp: '2023-04-09 00:00:00',
  //   logoUrl:
  //     'https://files.tips.gg/static/image/tournaments/lol-lcs-spring-2021.png',
  //   name: 'LCS',
  //   region: 'NA',
  //   startTimestamp: '2023-01-27 00:00:00',
  // });

  const response = await sql`
    INSERT INTO tournaments (end_timestamp, logo_url, name, region, start_timestamp)
    VALUES (${end_timestamp}, ${logo_url}, ${name}, ${region}, ${start_timestamp})
  `;
  console.log(response);
}

async function getTournaments(): Promise<Tournament[]> {
  const sql = neon(process.env.DATABASE_URL || '');
  return (await sql`SELECT * FROM tournaments`) as Tournament[];
}

export default async function Test() {
  const tournaments = await getTournaments();
  console.log(tournaments);
  console.log(tournaments[0].end_timestamp);

  return (
    <div>
      {tournaments.map((t) => (
        <div key={t.id}>
          <div>{t.name}</div>
          <img src={t.logo_url} alt='Logo' />
          <div>{t.start_timestamp.toString()}</div>
          <div>{t.end_timestamp.toString()}</div>
        </div>
      ))}
    </div>
  );
}
