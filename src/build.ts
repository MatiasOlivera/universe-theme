import * as deepmerge from 'deepmerge';
import { flatten } from 'flat';
import { join } from 'path';
import { format, resolveConfig } from 'prettier';

import { editorColors, syntaxColors } from './colors';
import {
  ColorPalettes,
  EditorColors,
  TokenColor,
  TokenColors
} from './types/colors-types';
import { Tokens } from './types/tokens-types';
import { Dictionary } from './types/utils-types';
import { exists, mkdir, writeFile } from './utils/fs-promisify';

const themesDirectory: string = join(__dirname, '../theme');

export async function createThemesDirectory(
  path: string = themesDirectory
): Promise<void> {
  if (!(await exists(path))) {
    await mkdir(path);
  }
}

export async function buildTheme(theme: UniverseThemeConfig) {
  const uiColors = Object.keys(editorColors).map((component) => {
    return editorColors[component](theme.palette);
  });
  const colors: EditorColors = flat(merge(Object.values(uiColors)));

  const syntax: TokenColor[][] = Object.keys(syntaxColors).map((language) => {
    return syntaxColors[language](theme.tokens);
  });
  const tokenColors: TokenColors = Array.prototype.concat(
    ...Object.values(syntax)
  );

  let themeOptions: VsCodeTheme = {
    name: theme.name,
    type: theme.type,
    colors,
    tokenColors
  };

  const themeFile: string = join(themesDirectory, `${theme.filename}.json`);

  try {
    await createTheme(themeFile, themeOptions);
    console.log(`✅  *Big bang!* ${theme.name} was created successfully!`);
  } catch (err) {
    throw err;
  }
}

function merge(array: Array<Dictionary>): Dictionary {
  return deepmerge.all(array);
}

function flat(object: Dictionary<string | Dictionary>): Dictionary<string> {
  return flatten(object);
}

async function createTheme(
  themeFile: string,
  theme: VsCodeTheme
): Promise<void> {
  try {
    const themeJSON = JSON.stringify(theme);

    const prettierConfig = await resolveConfig(__dirname);

    const formattedTheme = format(themeJSON, {
      filepath: themeFile,
      parser: 'json',
      ...prettierConfig
    });

    await writeFile(themeFile, formattedTheme);
  } catch (error) {
    throw error;
  }
}

type UniverseThemeConfig =
  | Universe
  | UniverseItalic
  | UniversePurple
  | UniversePurpleItalic
  | UniverseGray
  | UniverseGrayItalic;

interface Universe extends ThemeConfig {
  name: 'Universe';
  filename: 'universe';
}

interface UniverseItalic extends ThemeConfig {
  name: 'Universe Italic';
  filename: 'universe.italic';
}

interface UniversePurple extends ThemeConfig {
  name: 'Universe Purple';
  filename: 'universe.purple';
}

interface UniversePurpleItalic extends ThemeConfig {
  name: 'Universe Purple Italic';
  filename: 'universe.purple.italic';
}

interface UniverseGray extends ThemeConfig {
  name: 'Universe Gray';
  filename: 'universe.gray';
}

interface UniverseGrayItalic extends ThemeConfig {
  name: 'Universe Gray Italic';
  filename: 'universe.gray.italic';
}

interface ThemeConfig {
  name: ThemeNames;
  filename: ThemeFilenames;
  type: 'dark';
  palette: ColorPalettes;
  tokens: Tokens;
}

type ThemeName = 'Universe';
type ThemeColor = 'Purple' | 'Gray';
type ThemeVariant = 'Italic';

type ThemeNames =
  | `${ThemeName}`
  | `${ThemeName} ${ThemeVariant}`
  | `${ThemeName} ${ThemeColor}`
  | `${ThemeName} ${ThemeColor} ${ThemeVariant}`;

type ThemeFilenames = Lowercase<
  | `${ThemeName}`
  | `${ThemeName}.${ThemeVariant}`
  | `${ThemeName}.${ThemeColor}`
  | `${ThemeName}.${ThemeColor}.${ThemeVariant}`
>;

interface VsCodeTheme {
  name: string;
  type: 'dark' | 'light';
  colors: EditorColors;
  tokenColors: TokenColors;
}
