import { PaletteColorOptions } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  export interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
  export interface SimplePaletteColorOptions {
    darker?: string;
  }
  export interface PaletteColor {
    darker?: string;
  }
}
