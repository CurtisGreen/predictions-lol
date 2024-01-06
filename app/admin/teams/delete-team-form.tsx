'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { deleteTeamAction } from './team-actions';

const initialState = {
  message: '',
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' aria-disabled={pending}>
      Delete
    </button>
  );
}

export function DeleteTeamForm({ id }: { id: number }) {
  const [state, formAction] = useFormState(deleteTeamAction, initialState);

  return (
    <form action={formAction}>
      <input type='hidden' name='id' value={id} />
      <DeleteButton />
      <p role='status'>{state?.message}</p>
    </form>
  );
}
