import { PaletteColorOptions } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createMuiTheme' {
  export interface Theme {
    globals: {
      contentWidth: number;
      wideWidth: number;
      headerHeight: number;
    };
  }

  export interface ThemeOptions {
    globals: {
      contentWidth: number;
      wideWidth: number;
      headerHeight: number;
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  // additional color palette options
  export interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
  export interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  export interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  export interface CommonColors {
    grey: string;
    lightgrey: string;
  }
}
