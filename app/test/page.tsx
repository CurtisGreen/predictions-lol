import { neon } from '@neondatabase/serverless';

async function getData(): Promise<string> {
  const sql = neon(process.env.DATABASE_URL || '');

  const response = await sql`SELECT version()`;
  const version = response[0].version;
  console.log(version);
  return version;
}

export default async function Test() {
  const data = await getData();

  return <div>{data}</div>;
}
