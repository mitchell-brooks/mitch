import { AppProps } from 'next/app';
import GlobalStyles from '../styles/global-styles';
import { SEO } from '@mitchell-is/shared/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GlobalStyles />
    </>
  );
}

export default CustomApp;
