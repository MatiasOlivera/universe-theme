import * as deepmerge from 'deepmerge';
import { flatten } from 'flat';
import { join } from 'path';

import { editorColors } from './colors';
import { Dictionary, EditorColors } from './types/colors-types';
import { exists, mkdir, writeFile } from './utils/fs-promisify';

async function build() {
  const themeDir: string = join(__dirname, '../theme');
  const themeFile: string = join(themeDir, 'universe-color-theme.json');

  const _editorColors = Object.values(editorColors);
  const colors = flat(merge(_editorColors));

  let theme: Theme = {
    name: 'Universe',
    type: 'dark',
    colors,
    tokenColors: []
  };

  await createDirectory(themeDir);
  await createTheme(themeFile, theme);
}

function merge(array: Array<Dictionary>): Dictionary {
  return deepmerge.all(array);
}

function flat(object: Dictionary<string | Dictionary>): Dictionary<string> {
  return flatten(object);
}

async function createDirectory(path: string): Promise<void> {
  if (!(await exists(path))) {
    await mkdir(path);
  }
}

async function createTheme(themeFile: string, theme: Theme): Promise<void> {
  try {
    const json = JSON.stringify(theme);
    await writeFile(themeFile, json);
  } catch (error) {
    throw error;
  }
}

interface Theme {
  name: string;
  type: 'dark' | 'light';
  colors: EditorColors;
  tokenColors: any;
}

export default build;
