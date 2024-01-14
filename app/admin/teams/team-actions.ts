'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { deleteTeam, insertTeam } from '@/lib/teams-service';

export async function createTeamAction(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  try {
    const schema = z.object({
      name: z.string(),
      abbreviation: z.string(),
      logo_url: z.string(),
      primary_color: z.string(),
      secondary_color: z.string(),
    });
    const data = schema.parse({
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
      logo_url: formData.get('logo_url'),
      primary_color: formData.get('primary_color'),
      secondary_color: formData.get('secondary_color'),
    });
    console.log('createTeamAction', data);

    await insertTeam(data);

    revalidatePath('/admin');
    return { message: `Added team` };
  } catch (e) {
    // console.log(e);
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
