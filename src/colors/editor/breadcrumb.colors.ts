import { UIColors } from '../../types/colors-types';

const breadcrumbColors: UIColors = (palette) => {
  const { blueGray, background } = palette;

  return {
    breadcrumb: {
      activeSelectionForeground: blueGray[1],
      background: background[5],
      focusForeground: blueGray[1],
      foreground: blueGray[2]
    },
    breadcrumbPicker: {
      background: background[4]
    }
  };
};

export default breadcrumbColors;
