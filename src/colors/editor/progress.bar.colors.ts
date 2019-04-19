import { UIColors } from '../../types/colors-types';

const progressBarColors: UIColors = (palette) => {
  const { deepPurple } = palette;

  return {
    progressBar: {
      // Background color of the progress bar shown for long running operations.
      background: deepPurple[3]
    }
  };
};

export default progressBarColors;
