import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme.mui';
import NavBar from './components/NavBar/NavBar';

import type { Metadata, Viewport } from 'next';
 
export const viewport: Viewport = {
  width: 'device-width',
  height: "device-height",
  initialScale: 1,
  viewportFit: "contain",
}

export const metadata: Metadata = {
  title: {
    default: "Jack Kwok",
    template: "%s - Jack Kwok"
  },
  description: "Hi, I am Jack Kwok. Come in and try to navigate around. I hope the website can brings you some insights."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Container sx={{ my: { xs: 10, md: 12 } }}>
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
