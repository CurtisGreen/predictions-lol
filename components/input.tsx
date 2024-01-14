'use client';

import styled from 'styled-components';

const StyledInput = styled.input`
  border-radius: 4px;
  border-width: 1px;
  padding: 4px;
`;

type InputProps = JSX.IntrinsicElements['input'];

export function Input({ ...props }: InputProps) {
  return <StyledInput {...props} />;
}
