import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box; 
    font-family: -apple-system, BlinkMacSystemFont, monospace, sans-serif;
  }

  a, button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
