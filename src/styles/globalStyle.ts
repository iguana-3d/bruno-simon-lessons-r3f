import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
}

html {
   box-sizing: border-box;
   font-size: 62.5%; // 1 Rem === 10px
}

body {
   font-size: 1.6rem;
   line-height: 1.6;
   background-attachment: fixed;
   background-size: cover;
   background-position: center;
   background-color: lightskyblue;
}
`;
