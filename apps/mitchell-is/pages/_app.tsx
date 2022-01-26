import { AppProps } from 'next/app';
import GlobalStyles from '../styles/global-styles';
import { SEO } from '@mitch/shared/ui';
import '@reach/skip-nav/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const SEOProps = {
    siteName: 'Mitchell Brooks',
    title: 'Mitchell Brooks',
    description:
      'Mitchell Brooks is a full-stack web developer in Raleigh, North Carolina',
    image: '/public/images/image.png',
    twitter: 'aMitchellBrooks',
  };
  return (
    <>
      <SEO {...SEOProps} />
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GlobalStyles />
    </>
  );
}

export default CustomApp;
