import { Dictionary, SyntaxColors } from '../types/colors-types';
import _editorColors from './editor';
import _syntaxColors from './syntax';

export const editorColors = _editorColors;
export const syntaxColors: Dictionary<SyntaxColors> = _syntaxColors;

export default {
  editorColors,
  syntaxColors
};
