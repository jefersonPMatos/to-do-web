import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
 html, body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    font-family: 'Roboto', sans-serif;
    background: #212121;
  }
`;

export { Theme };
