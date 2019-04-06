import { UIColors } from '../../types/colors-types';

const progressBarColors: UIColors = (palette) => {
  const { purple } = palette;

  return {
    progressBar: {
      background: purple[3]
    }
  };
};

export default progressBarColors;
