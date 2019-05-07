import { UIColors } from '../../types/colors-types';

// Used for file labels and the SCM viewlet.
const gitColors: UIColors = (palette) => {
  const { blue, red, green, neutral } = palette;
  const foregroundSwatch: number = 2;

  return {
    gitDecoration: {
      // Color for added Git resources.
      addedResourceForeground: green[foregroundSwatch],

      // Color for modified Git resources.
      modifiedResourceForeground: blue[foregroundSwatch],

      // Color for deleted Git resources.
      deletedResourceForeground: red[foregroundSwatch],

      // Color for untracked Git resources.
      untrackedResourceForeground: green[foregroundSwatch],

      // Color for ignored Git resources.
      ignoredResourceForeground: neutral[7],

      // Color for conflicting Git resources.
      conflictingResourceForeground: red[foregroundSwatch],

      //  Color for submodule resources.
      submoduleResourceForeground: neutral[5]
    }
  };
};

export default gitColors;
