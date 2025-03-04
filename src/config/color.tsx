export type IPaletteItem = {
  main: string;
  light: string;
  dark: string;
};

export type IPalette = {
  primary: IPaletteItem;
  secondary: IPaletteItem;
  tertiary: IPaletteItem;
};

export const palette: IPalette = {
  primary: { main: '#1744E6', dark: '#2e29b8', light: '#BFD8DE' },
  secondary: { main: '#F05D61', dark: '#E03D42', light: '#FBE2A1' },
  tertiary: { main: '#97978f', dark: '#050411', light: '#e1e2d6' },
};
