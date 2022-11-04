import { createMuiTheme } from '@material-ui/core';

/**
 * @link https://v4.mui.com/customization/theming/
 */
const customMuiTheme = createMuiTheme({
  globals: {
    contentWidth: 600,
    wideWidth: 960,
    headerHeight: 60,
  },
  palette: {
    primary: {
      lighter: '#F7EBFF', // pink-purple
      light: '#e5c0ff', // light purple
      main: '#9903FF',
      dark: '#c5b3d1', // thistle
      darker: '#25003F',
    },
    secondary: {
      main: '#FFFAF2', // tangerine light orange
    },
    common: {
      black: '#0a0a0a',
      lightgrey: '#cbcbcb',
      grey: '#adadad',
    },
    warning: {
      main: '#E87461',
    },
    success: {
      main: '#0aeba0',
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },

  overrides: {
    MuiFormLabel: {
      root: {
        color: '#0a0a0a', // common.black
      },
    },
  },
});

export default customMuiTheme;
