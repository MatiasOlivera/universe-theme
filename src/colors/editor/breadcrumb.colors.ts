import { UIColors } from '../../types/colors-types';

const breadcrumbColors: UIColors = (palette) => {
  const { gray, background } = palette;

  return {
    breadcrumb: {
      activeSelectionForeground: gray[0],
      background: background[5],
      focusForeground: gray[0],
      foreground: gray[1]
    },
    breadcrumbPicker: {
      background: background[4]
    }
  };
};

export default breadcrumbColors;
