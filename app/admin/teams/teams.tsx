import { getTeams } from '@/lib/teams-service';
import Image from 'next/image';
import { DeleteTeamForm } from './delete-team-form';

export async function Teams() {
  const teams = await getTeams();

  return (
    <div>
      <h2>Teams</h2>
      {teams.map((t) => (
        <div key={t.id}>
          <div>{t.name}</div>
          <div>{t.abbreviation}</div>
          <Image src={t.logo_url} alt='Logo' width={50} height={50} />
          <DeleteTeamForm id={t.id} />
        </div>
      ))}
    </div>
  );
}
