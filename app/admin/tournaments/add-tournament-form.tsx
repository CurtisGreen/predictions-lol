'use client';

import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { createTournamentAction } from './tournament-actions';

const initialState = {
  message: '',
};

function AddButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' aria-disabled={pending}>
      Add
    </button>
  );
}

export function AddTournamentForm() {
  const [state, formAction] = useFormState(
    createTournamentAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <label htmlFor='name'>Enter Tournament Name</label>
      <input type='text' id='name' name='name' required />
      <AddButton />
      <p role='status'>{state?.message}</p>
    </form>
  );
}
