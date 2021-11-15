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
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        ></link>
        <meta property="og:title" content="그레잇237" />
        <meta property="og:url" content="http://www.Great237.com/" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/img/great237_kakao.jpg" /> */}
        <meta property="og:description" content="그레잇237" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
