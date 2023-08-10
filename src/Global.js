import { createGlobalStyle } from 'styled-components';
import UbuntuFontBold from '../src/assets/fonts/Ubuntu-Bold.ttf';
import UbuntuFontRegular from '../src/assets/fonts/Ubuntu-Regular.ttf';
import UbuntuFontMedium from '../src/assets/fonts/Ubuntu-Medium.ttf';
export const Global = createGlobalStyle`

@font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuFontBold}) format('truetype');
    font-weight: 700; 
    font-style: normal;
}

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuFontRegular}) format('truetype');
    font-weight: 400; 
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuFontMedium}) format('truetype');
    font-weight: 500; 
    font-style: normal;
  }


  :root {
  --gray-color: hsl(231, 11%, 63%);
  --gray-ligth-color:  hsl(229, 24%, 87%);
  --magnolia-color: hsl(212, 45%, 89%);
  --alabaster-color: hsl(231, 100%, 99%);
  --white-color: hsl(0, 0%, 100%);
  --blue-ligth-color: hsl(215, 100%, 97%);
  --publish-blue-color: hsl(243, 100%, 62%);
  --marine-blue-color: hsl(213, 96%, 18%);
  --transparent-color: transparent;
  --strawberry-red-color: hsl(354, 84%, 57%);
  --strawberry-red-color: hsl(354, 84%, 57%);
  }

  
*{
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    box-sizing: border-box;
    transform: 0.5s;
}

p{
    font-size: 16px;
    font-weight: 400;
    color:var(--gray-color);
}
button{
  cursor: pointer;
}

html,
body{
    min-height: 100vh;
    background-color: var(--blue-ligth-color);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

`;
