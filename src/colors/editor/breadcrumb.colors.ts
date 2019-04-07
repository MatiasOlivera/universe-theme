import { UIColors } from '../../types/colors-types';

const breadcrumbColors: UIColors = (palette) => {
  const { blueGray, background } = palette;

  return {
    breadcrumb: {
      activeSelectionForeground: blueGray[0],
      background: background[5],
      focusForeground: blueGray[0],
      foreground: blueGray[1]
    },
    breadcrumbPicker: {
      background: background[4]
    }
  };
};

export default breadcrumbColors;
