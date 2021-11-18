import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${({ theme }) => {
    return css`
      @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
      html {
        font-size: 10px;
        scroll-behavior: smooth;
        font-family: 'Spoqa Han Sans Neo', 'Sans-serif';
        background-color: ${theme.colors.bgcolor};
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
