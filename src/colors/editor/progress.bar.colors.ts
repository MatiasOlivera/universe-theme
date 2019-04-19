import { UIColors } from '../../types/colors-types';

const progressBarColors: UIColors = (palette) => {
  const { deepPurple } = palette;

  return {
    progressBar: {
      background: deepPurple[3]
    }
  };
};

export default progressBarColors;
