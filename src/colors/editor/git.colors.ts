import { UIColors } from '../../types/colors-types';

const gitColors: UIColors = (palette) => {
  const { green, yellow, red, gray, blue, purple } = palette;

  return {
    gitDecoration: {
      addedResourceForeground: green[1],
      conflictingResourceForeground: yellow[1],
      deletedResourceForeground: red[1],
      ignoredResourceForeground: gray[1],
      modifiedResourceForeground: blue[1],
      submoduleResourceForeground: gray[0],
      untrackedResourceForeground: purple[1]
    }
  };
};

export default gitColors;
