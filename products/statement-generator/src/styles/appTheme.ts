import { createMuiTheme } from '@material-ui/core';

/**
 * @link https://v4.mui.com/customization/theming/
 */
const appTheme = createMuiTheme({
  globals: {
    contentWidth: 600,
  },
  palette: {
    primary: {
      light: '#F7EBFF',
      main: '#9903FF',
      dark: '#c5b3d1',
      darker: '#25003F',
    },
    warning: {
      main: '#E87461',
    },
    success: {
      main: '#0aeba0',
    },
  },
  spacing: 6,
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
});

export default appTheme;
