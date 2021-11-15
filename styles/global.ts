import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${({ theme }) => {
    return css`
      html {
        font-size: 10px;
        scroll-behavior: smooth;
        font-family: 'Spoqa Han Sans Neo', 'Sans-serif';
        a {
          color: ${theme.colors.black};
          /* text-decoration: none; */
        }
      }
      body {
        font-size: ${theme.fontSizes.f14};
        word-break: keep-all;
      }
    `;
  }}

`;

export default GlobalStyle;
