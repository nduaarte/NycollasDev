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
    --primary: #a061ff;
    --secundary: #59d9a5;
    --primaryDark: #4f4263;
    --background: #121212;

    --lightWhite: #ffffff;
    --white: #f0f0f0;
    --darkWhite: #D9D9D9;
    --darkerWhite: #bdbdbd;
    --grey: #484d4f;
    --darkGrey: #2d2f30;
    --darkerGrey: #1c1c1c;
  }
`