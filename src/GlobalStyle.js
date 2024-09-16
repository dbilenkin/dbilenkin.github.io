// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    padding: 0;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ textColor }) => textColor};
    font-family: ${({ fontFamily }) => fontFamily};
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
