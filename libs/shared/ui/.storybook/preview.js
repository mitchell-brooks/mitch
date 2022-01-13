import React from 'react';
import { GlobalStyles } from '../../../../apps/site/styles';

export const decorators = [
  (Story) => {
    return (
      <>
        <Story />
        <GlobalStyles />
      </>
    );
  },
];
