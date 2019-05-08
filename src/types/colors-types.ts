import { Settings, Tokens } from './tokens-types';
import { Dictionary } from './utils-types';

export interface UIColors {
  (palette: ColorPalettes): EditorColors;
}

export interface SyntaxColors {
  (tokens: Tokens): TokenColors;
}

export interface ColorPalettes {
  white: string;
  black: string;
  background: ColorPalette;
  primary: ColorPalette;
  secondary: ColorPalette;
  neutral: ColorPalette;
  blue: ColorPalette;
  green: ColorPalette;
  orange: ColorPalette;
  pink: ColorPalette;
  deepPurple: ColorPalette;
  red: ColorPalette;
  cyan: ColorPalette;
  yellow: ColorPalette;
  gray: ColorPalette;
  purple: ColorPalette;
  lightBlue: ColorPalette;
  teal: ColorPalette;
  lime: ColorPalette;
  lightGreen: ColorPalette;
  deepOrange: ColorPalette;
}

export type ColorPalette = Array<string>;

export interface EditorColors {
  [key: string]: string | Dictionary<string>;
}

export type TokenColors = Array<TokenColor>;

export interface TokenColor {
  name: string;
  scope: string | Array<string>;
  settings: Settings;
}
