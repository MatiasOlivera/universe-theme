import { ColorPalette, ColorPalettes } from '../../types/colors-types';
import { universePalette } from '../universe/palette';

const gray: ColorPalette = [
  '#323232',
  '#2D2D2D',
  '#282828',
  '#232323',
  '#1E1E1E',
  '#1A1A1A',
  '#151515',
  '#101010',
  '#0B0B0B',
  '#060606'
];

const neutral: ColorPalette = [
  '#F2F2F2',
  '#DDDDDD',
  '#C8C8C8',
  '#B4B4B4',
  '#9F9F9F',
  '#8A8A8A',
  '#757575',
  '#616161',
  '#4C4C4C',
  '#373737'
];

export const grayPalette: ColorPalettes = {
  ...universePalette,
  background: gray,
  primary: universePalette.pink,
  secondary: universePalette.cyan,
  neutral: neutral
};
