import styled from 'styled-components';
import { Nav, SEO } from '@mitchell-is/shared/ui';
import React from 'react';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactElement;
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <SEO />
      <Nav />
      <div>{props.children}</div>
    </>
  );
}

export default Layout;
