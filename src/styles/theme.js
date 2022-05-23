import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
 html, body {
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1 {
    font-size: 60px;
    font-weight: 800;
  }

  h2 {
    font-size: 44px;
    font-weight: 800;
  }

  h3 {
    font-size: 39px;
    font-weight: 600;
    line-height: 53px;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export { Theme };