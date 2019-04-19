import { UIColors } from '../../types/colors-types';

const progressBarColors: UIColors = (palette) => {
  const { secondary } = palette;

  return {
    progressBar: {
      // Background color of the progress bar shown for long running operations.
      background: secondary[3]
    }
  };
};

export default progressBarColors;
