'use client';

import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 4px;
  border-width: 1px;
  padding: 8px;
  font-size: 16px;
`;

type Props = JSX.IntrinsicElements['button'];

export function Button({ ...props }: Props) {
  return <StyledButton {...props} />;
}
