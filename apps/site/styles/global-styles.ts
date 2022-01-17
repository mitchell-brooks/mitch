import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
--screen-sm: 576px;
--screen-md: 768px;
--screen-lg: 992px;
--screen-xl: 1200px;

--color-white: hsla(0, 0%, 96%, 1.00);
--color-white-darker: hsla(235, 26%, 91%, 1.00);
--color-white-darkest: hsla(168, 5%, 81%, 1.00);
--color-black: hsla(206, 10%, 31%, 1.00);
--color-black-lighter: hsla(207, 34%, 24%, 1.00);
--color-black-lightest: hsla(174, 13%, 30%, 1.00);
--color-primary: hsla(212, 27%, 52%, 1.00);
--color-secondary: hsla(187, 14%, 56%, 1.00);
--color-accent: hsla(14, 48%, 54%, 1.00);

--text-color-primary: var(--color-black-lighter);
--text-color-nav: var(--color-primary);
--text-font-family-nav: 'Verlag';
--text-font-weight-nav: '900';

--nav-background-primary: var(--color-white-darker);
--nav-background-highlight: var(--color-white);
--nav-background-shadow: var(--color-white-darkest);
}

@font-face {
  font-family: 'Verlag';
	font-weight: 900;
  font-display: swap;
  unicode-range: U+000-5FF;
  src: url('apps/site/public/assets/fonts/Verlag-Black.ttf') format('truetype');
}

*, *::before, *::after {
 box-sizing: border-box;
}

* {
  margin: 0;
}

html, body, .app, #__next {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next  {
  isolation: isolate;
}
`;

export default GlobalStyles;
