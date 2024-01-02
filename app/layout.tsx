import { GlobalStyles } from '@/styles/globalStyles';
import { StyleProvider } from '@/styles/styledProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyleProvider>
          <GlobalStyles />
          {children}
        </StyleProvider>
      </body>
    </html>
  );
}
