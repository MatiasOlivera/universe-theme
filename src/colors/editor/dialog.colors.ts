import { ColorPalettes } from '../../types/colors-types';

interface DialogColors {
  dialogBackground: string;
  dialogBorder: string;
}

export const dialogTokens = (palette: ColorPalettes): DialogColors => {
  const { background } = palette;

  return {
    dialogBackground: background[3],
    dialogBorder: background[2]
  };
};
