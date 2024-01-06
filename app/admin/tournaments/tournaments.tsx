import Image from 'next/image';
import { DeleteTournamentForm } from './delete-tournament-form';
import { getTournaments } from '@/lib/tournaments-service';

export async function Tournaments() {
  const tournaments = await getTournaments();

  return (
    <div>
      <h2>Tournaments</h2>
      {tournaments.map((t) => (
        <div key={t.id}>
          <div>
            {t.name} ({t.id})
          </div>
          <div>{t.region}</div>
          <Image src={t.logo_url} alt='Logo' width={50} height={50} />
          <div>{t.start_timestamp.toString()}</div>
          <DeleteTournamentForm id={t.id} />
        </div>
      ))}
    </div>
  );
}
