'use server';

import { deleteTeam, insertTeam } from '@/lib/teams-service';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function createTeamAction(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.string();
  const name = schema.parse(formData.get('name'));
  console.log('createTeamAction', name);
  try {
    await insertTeam({
      name,
      abbreviation: 'NRG',
      logo_url: '/assets/NRG.png',
      primary_color: '#0a0024',
      secondary_color: '#000000',
    });

    revalidatePath('/admin');
    return { message: `Added team` };
  } catch (e) {
    console.log(e);
    return { message: 'Failed to add team' };
  }
}

export async function deleteTeamAction(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  try {
    const schema = z.string().transform((v) => parseInt(v));
    const id = schema.parse(formData.get('id'));
    console.log('deleteTeamAction', id, prevState);
    await deleteTeam(id);

    revalidatePath('/admin');
    return { message: `Deleted team ${id}` };
  } catch (e) {
    console.log(e);
    return { message: 'Failed to delete team' };
  }
}
