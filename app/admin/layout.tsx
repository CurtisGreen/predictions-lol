'use client';

import styled from 'styled-components';

const Container = styled.div`
  margin: 16px;
`;

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
