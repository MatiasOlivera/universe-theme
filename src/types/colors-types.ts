import { Settings, Tokens } from './tokens-types';
import { Dictionary } from './utils-types';

export interface UIColors {
  (palette: ColorPalettes): EditorColors;
}

export interface SyntaxColors {
  (tokens: Tokens): TokenColors;
}

export interface ColorPalettes {
  background: ColorPalette;
  blue: ColorPalette;
  blueGray: ColorPalette;
  green: ColorPalette;
  indigo: ColorPalette;
  orange: ColorPalette;
  pink: ColorPalette;
  purple: ColorPalette;
  red: ColorPalette;
  teal: ColorPalette;
  yellow: ColorPalette;
  gray: ColorPalette;
  white: string;
  black: string;
}

export type ColorPalette = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export interface EditorColors {
  [key: string]: string | Dictionary<string>;
}

export type TokenColors = Array<TokenColor>;

export interface TokenColor {
  name: string;
  scope: string | Array<string>;
  settings: Settings;
}
