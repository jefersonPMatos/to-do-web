import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');



 html, body {
  height: 100vh;
  font-family: 'Space Mono', monospace;
  background-size: 125%;
  background-image: linear-gradient( 112.7deg,  rgba(162,247,241,1) 0.3%, rgba(199,146,255,1) 88.7% );
  }

  h1 {
    font-family: 'Space Mono', monospace;
    font-weight: bold;
    font-size: 96px;
    color: #000;
    background: -webkit-linear-gradient( 117deg,  rgba(123,216,96,1) 39.2%, rgba(255,255,255,1) 156.2% );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  h2 {
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 36px;
    color: #fff;

  }

  h3 {
    font-family: 'Space Mono', monospace;
    font-size: 20px;
    color: #fff;
  }

  p {
    font-family: 'Space Mono', monospace;
    font-size: 18px;
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`;

export { Theme };
