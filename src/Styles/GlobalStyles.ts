import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    // width 
    ::-webkit-scrollbar {
      width: 15px;
    }

    // Track 
    ::-webkit-scrollbar-track {
      background: var(--grey); 
    }
  
    // Handle 
    ::-webkit-scrollbar-thumb {
      background: var(--darkGrey); 
    }
  }
  html {
    min-height: 100%;
    background: var(--background);
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
    --primary: #BB86FC;
    --secundary: #4f426f;
    --background: #121212;

    --white: #ffffff;
    --darkWhite: #D9D9D9;
    --grey: #6B7274;
    --darkGrey: #3C3E40;
  }
`