'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createTeamAction } from './team-actions';
import { Input } from '@/components/input';
import styled from 'styled-components';
import { Button } from '@/components/button';

const initialState = {
  message: '',
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLabel = styled.label`
  margin-right: 4px;
`;

const StyledButton = styled(Button)`
  margin-top: 8px;
`;

function AddButton() {
  const { pending } = useFormStatus();

  return (
    <StyledButton type='submit' aria-disabled={pending}>
      Add team
    </StyledButton>
  );
}

export function AddTeamForm() {
  const [state, formAction] = useFormState(createTeamAction, initialState);

  return (
    <StyledForm action={formAction}>
      <StyledLabel htmlFor='name'>Name</StyledLabel>
      <Input
        type='text'
        id='name'
        name='name'
        placeholder='Cloud 9'
        defaultValue='Cloud 9'
        required
      />

      <StyledLabel htmlFor='abbreviation'>Abbreviation</StyledLabel>
      <Input
        type='text'
        id='abbreviation'
        name='abbreviation'
        placeholder='C9'
        defaultValue='C9'
        required
      />

      <StyledLabel htmlFor='logo_url'>Logo path</StyledLabel>
      <Input
        type='text'
        id='logo_url'
        name='logo_url'
        placeholder='/assets/teams/C9.png'
        defaultValue='/assets/teams/C9.png'
        required
      />

      <StyledLabel htmlFor='primary_color'>Primary color</StyledLabel>
      <Input
        type='text'
        id='primary_color'
        name='primary_color'
        placeholder='#0193c7'
        defaultValue='#0193c7'
        required
      />

      <StyledLabel htmlFor='secondary_color'>Secondary color</StyledLabel>
      <Input
        type='text'
        id='secondary_color'
        name='secondary_color'
        placeholder='#ffffff'
        defaultValue='#ffffff'
        required
      />

      <AddButton />
      <p role='status'>{state?.message}</p>
    </StyledForm>
  );
}
