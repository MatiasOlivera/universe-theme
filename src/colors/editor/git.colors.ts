import { UIColors } from '../../types/colors-types';

const gitColors: UIColors = (palette) => {
  const { green, yellow, red, blueGray, blue, purple } = palette;

  return {
    gitDecoration: {
      addedResourceForeground: green[1],
      conflictingResourceForeground: yellow[1],
      deletedResourceForeground: red[1],
      ignoredResourceForeground: blueGray[1],
      modifiedResourceForeground: blue[1],
      submoduleResourceForeground: blueGray[0],
      untrackedResourceForeground: purple[1]
    }
  };
};

export default gitColors;
