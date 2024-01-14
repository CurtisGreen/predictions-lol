import { getTeams } from '@/lib/teams-service';
import { TeamsTable } from './teams-table';

export async function Teams() {
  const teams = await getTeams();

  return (
    <div>
      <h2>Teams</h2>
      <TeamsTable teams={teams} />
    </div>
  );
}
