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

  :root {
    --primary: #6949B6;
    --secundary: #59d9a5;
    --primaryDark: #3d324d;
    --background: #121212;

    --lightWhite: #ffffff;
    --white: #f0f0f0;
    --darkWhite: #D9D9D9;
    --darkerWhite: #bdbdbd;
    --grey: #616669;
    --darkGrey: #2d2f30;
    --darkerGrey: #1c1c1c;
  }
`;