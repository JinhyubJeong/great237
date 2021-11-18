import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>그레잇237</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="그레잇237" />
        <meta property="og:url" content="http://www.Great237.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="그레잇237" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
