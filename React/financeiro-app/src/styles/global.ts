//createGlobalStyle é uma função.
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    //criação de variáveis css
    :root{
        --background: #f0f2f5;
    }
//* - significa aplicar estilo para todos os componentes
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 html{
     @media (max-width: 1080px){
        font-size: 93.75%; //15px - 16px x 0,9375 = 15px
     }
     @media (max-width: 720px){
         font-size: 87.5%; //14px - 16px x 0,875 = 14px
     }
 }
 //REM = 1REM = 16px
 body {
    background-color: var(--background);
     //melhora a definição da fonte.
     -webkit-font-smoothing: antialiased;
 }
button {
    cursor: pointer;
}
//tudo que estiver desabilitado
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}`