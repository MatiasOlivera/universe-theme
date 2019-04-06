export interface SyntaxColors {
  (palette: ColorPalettes): TokenColors;
}

export interface ColorPalettes {
  background: ColorPalette;
  blue: ColorPalette;
  gray: ColorPalette;
  green: ColorPalette;
  indigo: ColorPalette;
  orange: ColorPalette;
  pink: ColorPalette;
  purple: ColorPalette;
  red: ColorPalette;
  teal: ColorPalette;
  yellow: ColorPalette;
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
  string
];

export type Dictionary<Value = any> = {
  [key: string]: Value;
};

export interface EditorColors {
  [key: string]: string | Dictionary<string>;
}

export type TokenColors = Array<TokenColor>;

export interface TokenColor {
  name: string;
  scope: string | Array<string>;
  settings: Settings;
}

interface Settings {
  foreground?: string;
  fontStyle?: 'italic' | 'bold' | 'underline' | '';
}
