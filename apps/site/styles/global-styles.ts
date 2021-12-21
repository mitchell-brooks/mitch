import styled, { createGlobalStyle } from 'styled-components';

/* eslint-disable-next-line */
export interface GlobalStylesProps {}

const GlobalStyles = createGlobalStyle`
/*
   Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
   Remove default margin
*/
* {
  margin: 0;
}
/*
   Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
   Add accessible line-height
   Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
   Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
   Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
   Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
   Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

  html {
    ${'' /* change this if implementing light/dark mode functionality */}
    color: ${(props) => props.theme.color.primary};

  }
  
  body {
    font-family: ${(props) => props.theme.font.primary};
  }

  
  h1 {
    ${(props) => props.theme.font_size.xlarge};
    font-family: ${(props) => props.theme.font.bold};
    
  }

  h2 {
    ${(props) => props.theme.font_size.larger};
  }

  h3 {
    ${(props) => props.theme.font_size.larger};
    font-family: ${(props) => props.theme.font.bold};
  }

  h4 {
    ${(props) => props.theme.font_size.large};
    font-family: ${(props) => props.theme.font.bold};
  }

  h5 {
    ${(props) => props.theme.font_size.xsmall};
    font-family: ${(props) => props.theme.font.normal};
  }

  p {
    ${(props) => props.theme.font_size.small};
    line-height: 22px;

  }

  input {
    font-family: ${(props) => props.theme.font.normal};
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    h1 {
      ${(props) => props.theme.font_size.larger};
    }

    h2 {
      ${(props) => props.theme.font_size.large};
    }

    h3 {
      ${(props) => props.theme.font_size.regular};
    }

    p {
      ${(props) => props.theme.font_size.small};
    }
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {

    h1 {

    }

    h2 {

    }

    h3 {
      font-size: 32px;
      line-height: 36px;
    }

    h4 {
      font-size: 22px;
      line-height: 24px;
    }
    p {

    }

  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyles;
