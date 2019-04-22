import { UIColors } from '../../types/colors-types';

// Used for file labels and the SCM viewlet.
const gitColors: UIColors = (palette) => {
  const { green, yellow, red, blueGray, blue, deepPurple } = palette;

  return {
    gitDecoration: {
      // Color for added Git resources.
      addedResourceForeground: green[1],

      // Color for modified Git resources.
      modifiedResourceForeground: blue[1],

      // Color for deleted Git resources.
      deletedResourceForeground: red[1],

      // Color for untracked Git resources.
      untrackedResourceForeground: deepPurple[1],

      // Color for ignored Git resources.
      ignoredResourceForeground: blueGray[1],

      // Color for conflicting Git resources.
      conflictingResourceForeground: yellow[1],

      //  Color for submodule resources.
      submoduleResourceForeground: blueGray[0]
    }
  };
};

export default gitColors;
