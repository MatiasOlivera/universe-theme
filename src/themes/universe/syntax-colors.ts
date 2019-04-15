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
} from '../../types/tokens-types';
import { palette } from './palette';

const {
  blue,
  blueGray,
  green,
  indigo,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow
} = palette;

/**
 * Data types
 */
const type: Type = {
  character: {
    default: {
      foreground: pink[1]
    },
    escape: {
      foreground: purple[2]
    }
  },
  custom: {
    foreground: teal[2]
  },
  number: {
    foreground: orange[2]
  },
  other: {
    foreground: purple[2]
  },
  constant: {
    language: {
      foreground: purple[2]
    },
    languageAlt: {
      foreground: blue[2]
    },
    library: {
      foreground: purple[2]
    }
  },
  string: {
    foreground: green[2]
  },
  typeName: {
    foreground: purple[2]
  },
  library: {
    foreground: purple[2]
  }
};

/**
 * Keywords
 */
const keyword: Keyword = {
  default: {
    foreground: purple[2]
  },
  control: {
    foreground: purple[2]
  },
  modifier: {
    foreground: purple[2]
  },
  operator: {
    foreground: purple[2]
  },
  other: {
    foreground: purple[2]
  }
};

/**
 * Variables
 */
const variable: Settings = {
  foreground: pink[1]
};

/**
 * Constant
 */
const constant: Settings = {
  foreground: pink[1]
};

/**
 * Objects
 */
const object: ObjectType = {
  property: {
    foreground: indigo[2]
  }
};

/**
 * Functions
 */
const functionType: FunctionType = {
  name: {
    foreground: blue[2]
  },
  parameter: {
    foreground: pink[1]
  },
  library: {
    foreground: blue[2]
  }
};

/**
 * Classes
 */
const classType: ClassType = {
  name: {
    foreground: blue[2]
  },
  baseClass: {
    foreground: blue[2]
  },
  library: {
    foreground: blue[2]
  }
};

/**
 * Modules
 */
const moduleType: ModuleType = {
  name: {
    foreground: blue[2]
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
  foreground: blueGray[0]
};

/**
 * Puntuaction
 */
const puntuaction: Puntuaction = {
  default: {
    fontStyle: '' // Inherit the element color
  },
  embedded: {
    foreground: purple[2]
  }
};

/**
 * Invalid
 */
const invalid: Invalid = {
  deprecated: {
    foreground: red[2]
  },
  illegal: {
    foreground: red[2]
  }
};

/**
 * Comments
 */
const comment: Settings = {
  foreground: blueGray[3]
};

/**
 * Configuration files
 */
const config: Config = {
  groupTitle: {
    foreground: blueGray[0]
  },
  key: {
    foreground: purple[2]
  },
  value: {
    foreground: pink[1]
  },
  separator: {
    foreground: blueGray[0]
  }
};

/**
 * CSS
 */
const css: Css = {
  // Selectors
  tag: {
    foreground: pink[1]
  },
  id: {
    foreground: yellow[2]
  },
  class: {
    foreground: orange[2]
  },
  attribute: {
    foreground: purple[2]
  },
  pseudoClass: {
    foreground: teal[2]
  },
  pseudoElement: {
    foreground: teal[2]
  },

  // Properties
  property: {
    name: {
      foreground: purple[2]
    },
    value: {
      foreground: green[2]
    }
  },

  function: {
    parameter: {
      foreground: green[2]
    }
  },

  unit: {
    foreground: pink[1]
  }
};

/**
 * Tags
 */
const tag: Tag = {
  attribute: {
    foreground: indigo[2]
  },
  name: {
    foreground: purple[2]
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
      foreground: orange[2]
    }
  },
  directive: {
    foreground: orange[2]
  }
};

/**
 * JSON
 */
const json: Json = {
  property: {
    foreground: purple[2]
  }
};

/**
 * Markup
 */
const markup: Markup = {
  // Links
  link: {
    foreground: blue[2],
    fontStyle: 'underline'
  },

  // Text
  bold: {
    foreground: pink[1],
    fontStyle: 'bold'
  },
  heading: {
    foreground: purple[2]
  },
  italic: {
    foreground: orange[2],
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
    foreground: green[2]
  },
  raw: {
    foreground: teal[2]
  },
  underline: {
    foreground: blue[2],
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
      foreground: purple[2]
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
  constant,
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
