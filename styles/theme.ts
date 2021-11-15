import 'styled-components';
const colors = {
  yellow: '#FFF100',
  blue: '#3159BD',
  black: '#111111',
  gray2: '#222222',
  gray3: '#333333',
  gray8: '#888888',
  grayA: '#aaaaaa',
  grayC: '#cccccc',
  grayD: '#dddddd',
  grayE: '#eeeeee', //	disabled text color
  bgcolor: '#F8FAFF',
  white: '#ffffff',
};

const fontSizes = {
  f70: '7.0rem',
  f60: '6.0rem',
  f50: '5.0rem',
  f42: '4.2rem',
  f32: '3.2rem',
  f24: '2.4rem',
  f18: '1.8rem',
  f14: '1.4rem',
  f12: '1.2rem',
};

const fontFamily = ['Spoqa Han Sans Neo', 'Helvetica', 'Arial'].join(',');

const theme = {
  colors,
  fontSizes,
  fontFamily,
};

export interface Theme {
  navStyled: Color;
}

export interface Color {
  [key: string]: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      f70: string;
      f60: string;
      f50: string;
      f42: string;
      f32: string;
      f24: string;
      f18: string;
      f14: string;
      f12: string;
    };
    colors: {
      yellow: string;
      blue: string;
      black: string;
      gray2: string;
      gray3: string;
      gray8: string;
      grayA: string;
      grayC: string;
      grayD: string;
      grayE: string;
      bgcolor: string;
      white: string;
    };
  }
}

export default theme;
