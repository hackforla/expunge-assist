import { PaletteColorOptions } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createMuiTheme' {
  export interface Theme {
    globals: {
      contentWidth: number;
    };
  }

  export interface ThemeOptions {
    globals: {
      contentWidth: number;
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  // additional color palette options
  export interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
  export interface SimplePaletteColorOptions {
    darker?: string;
  }
  export interface PaletteColor {
    darker?: string;
  }
  export interface CommonColors {
    grey: string;
    lightgrey: string;
  }
}
