import { SyntaxColors, UIColors } from '../types/colors-types';
import { Dictionary } from '../types/utils-types';
import _editorColors from './editor';
import _syntaxColors from './syntax';

export const editorColors: Dictionary<UIColors> = _editorColors;
export const syntaxColors: Dictionary<SyntaxColors> = _syntaxColors;

export default {
  editorColors,
  syntaxColors
};
