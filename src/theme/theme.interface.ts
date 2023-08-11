import styles from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    textColor: Palette['primary'];
    customGray: Palette['primary'];
  }

  interface PaletteOptions {
    textColor?: PaletteOptions['primary'];
    customGray?: PaletteOptions['primary'];
  }
}
