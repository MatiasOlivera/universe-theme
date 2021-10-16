import { Settings, Tokens } from './tokens-types';
import { Dictionary } from './utils-types';

export interface UIColors {
  (palette: ColorPalettes): EditorColors;
}

export interface SyntaxColors {
  (tokens: Tokens): TokenColors;
}

export type ColorPalettes = Record<
  | 'background'
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'blue'
  | 'green'
  | 'orange'
  | 'pink'
  | 'deepPurple'
  | 'red'
  | 'cyan'
  | 'yellow'
  | 'purple'
  | 'teal',
  ColorPalette
>;

type HexColor = string;

export type ColorPalette = [
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor
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
