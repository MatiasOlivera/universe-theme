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

type ThemeColor = 'Purple' | 'Gray';
type ThemeVariant = 'Italic';
type ThemeName =
  | 'Universe'
  | `Universe ${ThemeVariant}`
  | `Universe ${ThemeColor}`
  | `Universe ${ThemeColor} ${ThemeVariant}`;

interface ThemeConfig {
  name: ThemeName;
  filename: string;
  type: 'dark' | 'light';
  palette: ColorPalettes;
  tokens: Tokens;
}

const themesDirectory: string = join(__dirname, '../theme');

export async function createThemesDirectory(
  path: string = themesDirectory
): Promise<void> {
  if (!(await exists(path))) {
    await mkdir(path);
  }
}

export async function buildTheme(theme: ThemeConfig) {
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

interface VsCodeTheme {
  name: string;
  type: 'dark' | 'light';
  colors: EditorColors;
  tokenColors: TokenColors;
}
