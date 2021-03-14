import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: #fff;
  }
  *, button, input {
    border: none;
    background: none;
    font-family: Play, sans-serif;
  }
  ul {
    list-style: none;
  }
  :root {
    --background: #1B191B;
    --white: #ffffff;
    --darkWhite: #D9D9D9;
    --grey: #6B7274;
    --darkGrey: #3C3E40;
    --primary: #7750e9;
    --secundary: #4f426f;
    --pink: rgba(247,1,96,0.4);
  }
`