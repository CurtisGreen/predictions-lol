'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './styledComponentsRegistry';
import { theme } from '@/styles/theme';

export const StyleProvider = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
