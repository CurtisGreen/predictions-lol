'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { deleteTeamAction } from './team-actions';
import { Button } from '@/components/button';
import { Dialog } from '@/components/dialog';
import { useState } from 'react';

const initialState = {
  message: '',
};

export function DeleteTeamButton({ id }: { id: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dialog open={open} setOpen={setOpen}>
        <DeleteTeamForm id={id} />
      </Dialog>
      <Button onClick={() => setOpen(true)}>Delete</Button>
    </div>
  );
}

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' aria-disabled={pending}>
      Delete
    </Button>
  );
}

function DeleteTeamForm({ id }: { id: number }) {
  const [state, formAction] = useFormState(deleteTeamAction, initialState);

  return (
    <form action={formAction}>
      <h3>Are you sure?</h3>
      <input type='hidden' name='id' value={id} />
      <DeleteButton />
      <p role='status'>{state?.message}</p>
    </form>
  );
}
