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

// Neutral (purple gray)
const neutral: ColorPalette = [
  '#F2F2F2',
  '#D8D5DF',
  '#C0BBCD',
  '#A8A2BB',
  '#928AA8',
  '#7D7596',
  '#6A6084',
  '#574E71',
  '#463D5F',
  '#362E4D'
];

export const purplePalette: ColorPalettes = {
  ...universePalette,
  background: deepPurple,
  primary: universePalette.purple,
  secondary: universePalette.green,
  neutral
};
