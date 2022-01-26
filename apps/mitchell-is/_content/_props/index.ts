import * as React from 'react';
import { NavProps, FooterProps, LayoutProps, SEOProps } from '@mitch/shared/ui';

export const seoProps: SEOProps = {
  siteName: 'Mitchell Brooks',
  title: 'Mitchell Brooks',
  description:
    'Mitchell Brooks is a full-stack web developer in Raleigh, North Carolina',
  image: '/public/images/image.png',
  twitter: 'aMitchellBrooks',
};
export const navProps: NavProps = {
  home: {
    title: 'Mitchell',
    defaultContent: ' Brooks',
    hoverContent: '.is',
    url: '/',
  },
  navListItems: [
    { title: 'Projects', url: '/building', external: false, icon: null },
    { title: 'About', url: '/me', external: false, icon: null },
  ],
};
export const footerProps: FooterProps = {
  copyright: { holder: 'Mitchell Brooks' },
};
export const layoutProps: LayoutProps = {
  navProps,
  footerProps,
  children: React.createElement('div'),
};
