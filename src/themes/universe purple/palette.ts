import { ColorPalette, ColorPalettes } from '../../types/colors-types';
import { universePalette } from '../universe/palette';

const deepPurple: ColorPalette = [
  '#30264D',
  '#2A2045',
  '#241B3E',
  '#1E1637',
  '#191230',
  '#150E29',
  '#100A22',
  '#0C071B',
  '#080514',
  '#05030D'
];

export const purplePalette: ColorPalettes = {
  ...universePalette,
  background: deepPurple
};
