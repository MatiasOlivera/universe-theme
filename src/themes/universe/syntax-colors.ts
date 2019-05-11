import {
  ClassType,
  Config,
  Css,
  FunctionType,
  Html,
  Invalid,
  Json,
  Keyword,
  Markdown,
  Markup,
  ModuleType,
  ObjectType,
  Puntuaction,
  Section,
  Settings,
  Tag,
  Tokens,
  Type,
  Variable,
} from '../../types/tokens-types';
import { universePalette } from './palette';

const {
  blue,
  neutral,
  green,
  orange,
  pink,
  deepPurple,
  red,
  cyan,
  yellow,
  teal
} = universePalette;

/**
 * Data types
 */
const constantForeground: string = teal[4];

const type: Type = {
  character: {
    default: {
      foreground: pink[4]
    },
    escape: {
      foreground: deepPurple[4]
    }
  },
  custom: {
    foreground: cyan[4]
  },
  number: {
    foreground: orange[4]
  },
  other: {
    foreground: deepPurple[4]
  },
  constant: {
    language: {
      foreground: constantForeground
    },
    library: {
      foreground: constantForeground
    }
  },
  string: {
    foreground: green[4]
  },
  typeName: {
    foreground: deepPurple[4]
  },
  library: {
    foreground: deepPurple[4]
  }
};

/**
 * Keywords
 */
const keyword: Keyword = {
  default: {
    foreground: deepPurple[4]
  },
  control: {
    foreground: deepPurple[4]
  },
  modifier: {
    foreground: deepPurple[4]
  },
  operator: {
    foreground: deepPurple[4]
  },
  other: {
    foreground: deepPurple[4]
  }
};

/**
 * Variables
 */
const variable: Variable = {
  default: {
    foreground: pink[4]
  },
  other: {
    foreground: pink[4]
  }
};

/**
 * Objects
 */
const object: ObjectType = {
  property: {
    foreground: green[4]
  }
};

/**
 * Functions
 */
const functionType: FunctionType = {
  name: {
    foreground: blue[4]
  },
  parameter: {
    foreground: pink[4]
  },
  library: {
    foreground: blue[4]
  }
};

/**
 * Classes
 */
const classForeground: string = yellow[4];

const classType: ClassType = {
  name: {
    foreground: classForeground
  },
  baseClass: {
    foreground: classForeground
  },
  library: {
    foreground: classForeground
  }
};

/**
 * Modules
 */
const moduleType: ModuleType = {
  name: {
    foreground: blue[4]
  }
};

/**
 * Sections
 */
const section: Section = {
  name: {
    foreground: ''
  }
};

/**
 * Text
 */
const text: Settings = {
  foreground: neutral[0]
};

/**
 * Puntuaction
 */
const puntuaction: Puntuaction = {
  default: {
    fontStyle: '' // Inherit the element color
  },
  embedded: {
    foreground: deepPurple[4]
  }
};

/**
 * Invalid
 */
const invalid: Invalid = {
  deprecated: {
    foreground: red[4]
  },
  illegal: {
    foreground: red[4]
  }
};

/**
 * Comments
 */
const comment: Settings = {
  foreground: neutral[5]
};

/**
 * Configuration files
 */
const config: Config = {
  groupTitle: {
    foreground: neutral[0]
  },
  key: {
    foreground: deepPurple[4]
  },
  value: {
    foreground: pink[4]
  },
  separator: {
    foreground: neutral[0]
  }
};

/**
 * CSS
 */
const css: Css = {
  // Selectors
  tag: {
    foreground: pink[4]
  },
  id: {
    foreground: yellow[4]
  },
  class: {
    foreground: orange[4]
  },
  attribute: {
    foreground: deepPurple[4]
  },
  pseudoClass: {
    foreground: cyan[4]
  },
  pseudoElement: {
    foreground: cyan[4]
  },

  // Properties
  property: {
    name: {
      foreground: deepPurple[4]
    },
    value: {
      foreground: green[4]
    }
  },

  function: {
    parameter: {
      foreground: green[4]
    }
  },

  unit: {
    foreground: pink[4]
  }
};

/**
 * Tags
 */
const tag: Tag = {
  attribute: {
    foreground: blue[4]
  },
  name: {
    foreground: deepPurple[4]
  }
};

/**
 * HTML
 */
const html: Html = {
  tag: tag.name,
  attribute: tag.attribute,
  component: {
    tag: {
      foreground: orange[4]
    }
  },
  directive: {
    foreground: orange[4]
  }
};

/**
 * JSON
 */
const json: Json = {
  property: {
    foreground: deepPurple[4]
  }
};

/**
 * Markup
 */
const markup: Markup = {
  // Links
  link: {
    foreground: blue[4],
    fontStyle: 'underline'
  },

  // Text
  bold: {
    foreground: pink[4],
    fontStyle: 'bold'
  },
  heading: {
    foreground: deepPurple[4]
  },
  italic: {
    foreground: orange[4],
    fontStyle: 'italic'
  },
  list: {
    numbered: {
      foreground: text.foreground
    },
    unnumbered: {
      foreground: text.foreground
    }
  },
  other: {
    foreground: text.foreground
  },
  quote: {
    foreground: green[4]
  },
  raw: {
    foreground: cyan[4]
  },
  underline: {
    foreground: blue[4],
    fontStyle: 'underline'
  }
};

/**
 * Markdown
 */
const markdown: Markdown = {
  puntuaction: {
    heading: markup.heading,
    bold: markup.bold,
    italic: markup.italic,
    quote: markup.quote,
    list: {
      foreground: deepPurple[4]
    }
  },
  linkTitle: {
    foreground: markup.link.foreground
  }
};

export const tokens: Tokens = {
  type,
  keyword,
  variable,
  object,
  function: functionType,
  class: classType,
  module: moduleType,
  section,
  text,
  puntuaction,
  invalid,
  comment,
  config,
  css,
  html,
  json,
  tag,
  markup,
  markdown
};
