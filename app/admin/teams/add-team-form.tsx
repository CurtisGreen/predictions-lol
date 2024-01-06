'use client';

import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { createTeamAction } from './team-actions';

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

export function AddTeamForm() {
  const [state, formAction] = useFormState(createTeamAction, initialState);

  return (
    <form action={formAction}>
      <label htmlFor='name'>Enter Team Name</label>
      <input type='text' id='name' name='name' required />
      <AddButton />
      <p role='status'>{state?.message}</p>
    </form>
  );
}
