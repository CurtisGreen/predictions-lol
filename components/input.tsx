'use client';

import styled from 'styled-components';

const StyledInput = styled.input`
  border-radius: 4px;
  border-width: 1px;
  padding: 4px;
`;

type Props = JSX.IntrinsicElements['input'];

export function Input({ ...props }: Props) {
  return <StyledInput {...props} />;
}
