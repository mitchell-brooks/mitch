import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global-styles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to site!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GlobalStyles />
    </>
  );
}

export default CustomApp;
