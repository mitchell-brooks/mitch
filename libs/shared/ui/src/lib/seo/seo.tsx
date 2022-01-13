import styled from 'styled-components';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface SEOProps {
  title: string;
  desc: string;
  canonical: string;
  image: string;
  twitter: string;
  css: string | null;
  js: string | null;
}

export const SEO = ({
  title = 'Mitchell Brooks',
  desc,
  canonical,
  image,
  twitter = '@aMitchellBrooks',
  css = null,
  js = null,
}: SEOProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={desc} key="description" />
    <meta property="og:type" content="website" key="og_type" />
    <meta name="og:title" property="og:title" content={title} key="og_title" />
    <meta
      name="og:description"
      property="og:description"
      content={desc}
      key="og_description"
    />
    <meta property="og:site_name" content="Mitchell Is" key="og_site_name" />
    <meta property="og:url" content={`${canonical}`} key="og_url" />
    <meta name="twitter:card" content="summary" key="twitter_card" />
    <meta name="twitter:title" content={title} key="twitter_title" />
    <meta name="twitter:description" content={desc} key="twitter_description" />
    <meta name="twitter:site" content={twitter} key="twitter_site" />
    <meta name="twitter:creator" content={twitter} key="twitter_creator" />
    <link
      rel="icon"
      type="image/png"
      href="/public/images/favicon.ico"
      key="favicon"
    />
    <link
      rel="apple-touch-icon"
      href="/public/images/favicon.ico"
      key="apple_icon"
    />
    {css && <link rel="stylesheet" href={`${css}`} key="css" />}
    {image ? (
      <meta property="og:image" content={`${image}`} key="og_image" />
    ) : (
      <meta
        property="og:image"
        content="https://mitchell.is/public/images/social.png"
        key="og_image"
      />
    )}
    {image && (
      <meta name="twitter:image" content={`${image}`} key="twitter_image" />
    )}
    {canonical && (
      <link rel="canonical" href={`${canonical}`} key="canonical" />
    )}
    {js && <script type="text/javascript" src={`${js}`} key="js"></script>}
  </Head>
);

export default SEO;
