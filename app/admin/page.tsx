import { AddTournamentForm, Tournaments } from './tournaments';
import { AddTeamForm, Teams } from './teams';

export default async function Main() {
  return (
    <div>
      <h1>Admin</h1>
      <Tournaments />
      <AddTournamentForm />
      <Teams />
      <AddTeamForm />
    </div>
  );
}
