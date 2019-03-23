import { TokenColors } from '../../types/colors-types';
import { purple_300 } from '../palette/purple.colors';

const tsColors: TokenColors = [
  /**
   * Keywords
   */
  {
    name: 'JSON object',
    scope: 'support.constant.json',
    settings: {
      foreground: purple_300
    }
  }
];

export default tsColors;
