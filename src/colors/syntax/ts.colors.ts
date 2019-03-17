import { TokenColors } from '../../types/colors-types';
import { violet_2 } from '../palette/violet.colors';

const tsColors: TokenColors = [
  /**
   * Keywords
   */
  {
    name: 'JSON object',
    scope: 'support.constant.json',
    settings: {
      foreground: violet_2
    }
  }
];

export default tsColors;
