import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* global CSS variables */
html {
--color-white: hsla(0, 0%, 96%, 1.00);
--color-white-darker: hsla(235, 26%, 91%, 1.00);
--color-white-darkest: hsla(168, 5%, 81%, 1.00);
--color-black: hsla(206, 10%, 31%, 1.00);
--color-black-lighter: hsla(207, 34%, 24%, 1.00);
--color-black-lightest: hsla(174, 13%, 30%, 1.00);
--color-primary: hsla(212, 27%, 52%, 1.00);
--color-secondary: hsla(187, 14%, 56%, 1.00);
--color-accent: hsla(14, 48%, 54%, 1.00);
}

/* fonts */
@font-face {
  font-family: 'Verlag Black';
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url('../assets/Verlag-Black.ttf') format('truetype');
}

/* boilerplate reset below */

/* Use a more intuitive box-sizing model. */

*, *::before, *::after {
  box-sizing: border-box;
}
/* Remove default margin  */

* {
  margin: 0;
}

/* Allow percentage based heights in the application */

html, body {
  height: 100%;
}
/* Add accessible line-height & Improve text rendering */

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/*   Improve media defaults */

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* Remove built in form typography styles */

input, button, textarea, select {
  font: inherit;
}
/* Avoid text overflows */

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*  Create a root stacking context */

#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
