'use server';

import { deleteTournament, insertTournament } from '@/lib/tournaments-service';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function createTournamentAction(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.string();
  const name = schema.parse(formData.get('name'));
  console.log('createTournamentAction', name, prevState);
  try {
    await insertTournament({
      logo_url: '/assets/LCS.png',
      name,
      region: 'LCS',
      start_timestamp: '2024-01-06 00:00:00',
    });

    revalidatePath('/admin');
    return { message: `Added tournament` };
  } catch (e) {
    return { message: 'Failed to create tournament' };
  }
}

export async function deleteTournamentAction(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  try {
    const schema = z.string().transform((v) => parseInt(v));
    const id = schema.parse(formData.get('id'));
    console.log('deleteTodo', id, prevState);
    await deleteTournament(id);

    revalidatePath('/admin');
    return { message: `Deleted todo ${id}` };
  } catch (e) {
    console.log(e);
    return { message: 'Failed to delete todo' };
  }
}
