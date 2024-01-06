'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { deleteTournamentAction } from './tournament-actions';

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

export function DeleteTournamentForm({ id }: { id: number }) {
  const [state, formAction] = useFormState(
    deleteTournamentAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <input type='hidden' name='id' value={id} />
      <DeleteButton />
      <p role='status'>{state?.message}</p>
    </form>
  );
}
