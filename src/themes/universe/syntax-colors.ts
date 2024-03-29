import {
  ClassType,
  Config,
  Css,
  EnumType,
  FunctionType,
  GraphQL,
  Html,
  Invalid,
  Javascript,
  Json,
  Keyword,
  Markdown,
  Markup,
  ModuleType,
  ObjectType,
  Punctuation,
  Section,
  Settings,
  Sql,
  Tag,
  Tokens,
  Type,
  Variable,
  Yaml
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
const typeForeground: string = cyan[4];
const constantForeground: string = teal[4];

export const type: Type = {
  character: {
    default: {
      foreground: blue[4]
    },
    escape: {
      foreground: deepPurple[4]
    }
  },
  custom: {
    foreground: typeForeground
  },
  number: {
    foreground: orange[4]
  },
  other: {
    foreground: constantForeground
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
    foreground: typeForeground
  }
};

/**
 * Keywords
 */
export const keyword: Keyword = {
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
export const variable: Variable = {
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
export const object: ObjectType = {
  property: {
    foreground: neutral[1]
  },
  intermediateProperty: {
    foreground: cyan[2]
  }
};

/**
 * Functions
 */
export const functionType: FunctionType = {
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

export const classType: ClassType = {
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
 * Enums
 */
export const enumType: EnumType = {
  member: object.property
};

/**
 * Modules
 */
export const moduleType: ModuleType = {
  name: {
    foreground: blue[4]
  },
  path: {
    foreground: green[4]
  }
};

/**
 * Sections
 */
export const section: Section = {
  name: {
    foreground: ''
  }
};

/**
 * Text
 */
export const text: Settings = {
  foreground: neutral[1]
};

/**
 * Punctuation marks
 */
export const punctuation: Punctuation = {
  default: {
    foreground: neutral[4],
    fontStyle: 'normal'
  }
};

/**
 * Invalid
 */
export const invalid: Invalid = {
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
export const comment: Settings = {
  foreground: neutral[5]
};

/**
 * Configuration files
 */
export const config: Config = {
  groupTitle: {
    foreground: neutral[0]
  },
  key: {
    foreground: deepPurple[4]
  },
  value: {
    foreground: pink[4]
  }
};

/**
 * Tags
 */
export const tag: Tag = {
  name: {
    foreground: red[4]
  },
  attribute: {
    foreground: blue[4]
  },
  value: {
    foreground: green[4]
  }
};

/**
 * GraphQL
 */
export const graphql: GraphQL = {
  alias: variable.default
};

/**
 * HTML
 */
export const html: Html = {
  tag: {
    name: tag.name,
    attribute: tag.attribute,
    value: tag.value
  },
  component: {
    foreground: orange[4]
  },
  directive: {
    foreground: deepPurple[4]
  }
};

/**
 * CSS
 */
export const css: Css = {
  // Selectors
  tag: html.tag.name,
  id: {
    foreground: yellow[4]
  },
  class: {
    foreground: orange[4]
  },
  attribute: {
    name: html.tag.attribute
  },
  pseudoClass: keyword.modifier,
  pseudoElement: keyword.modifier,

  // Properties
  property: {
    name: object.property,
    value: {
      foreground: blue[4]
    }
  },

  function: {
    parameter: {
      foreground: green[4]
    }
  },

  number: {
    foreground: orange[3]
  },

  unit: {
    foreground: orange[4]
  }
};

/**
 * Javascript
 */
export const javascript: Javascript = {
  arrowFunction: keyword.other
};

/**
 * JSON
 */
export const json: Json = {
  property: {
    foreground: deepPurple[4]
  }
};

/**
 * Markup
 */
export const markup: Markup = {
  // Links
  link: {
    foreground: blue[4],
    fontStyle: 'underline'
  },

  // Text
  bold: {
    foreground: green[4],
    fontStyle: 'bold'
  },
  heading: {
    foreground: yellow[4],
    fontStyle: 'bold'
  },
  italic: {
    foreground: teal[4],
    fontStyle: 'italic'
  },
  list: {
    numbered: text,
    unnumbered: text
  },
  other: text,
  quote: {
    foreground: neutral[3]
  },
  raw: {
    foreground: blue[4]
  },
  underline: {
    foreground: blue[4],
    fontStyle: 'underline'
  }
};

/**
 * Markdown
 */
export const markdown: Markdown = {
  // markup.link
  link: {
    title: {
      foreground: blue[2]
    }
  }
};

/**
 * SQL
 */
export const sql: Sql = {
  keyword: keyword.other
};

/**
 * YAML
 */
export const yaml: Yaml = {
  document: {
    foreground: yellow[4]
  },

  anchor: {
    name: variable.default
  },

  constant: {
    foreground: deepPurple[4]
  }
};

export const tokens: Tokens = {
  type,
  keyword,
  variable,
  object,
  function: functionType,
  class: classType,
  enum: enumType,
  module: moduleType,
  section,
  text,
  punctuation,
  invalid,
  comment,
  config,
  css,
  graphql,
  html,
  javascript,
  json,
  tag,
  markup,
  markdown,
  sql,
  yaml
};
