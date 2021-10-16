// See docs/syntax-highlight.md

import { Dictionary } from './utils-types';

// Data types
export interface Type extends SettingsDict {
  number: Settings; // constant.numeric
  string: Settings; // string
  character: {
    default: Settings; // constant.character
    escape: Settings; // constant.character.escape
  };
  constant: {
    language: Settings; // constant.language
    library: Settings; // support.constant
  };
  custom: Settings; // entity.name.type
  other: Settings; // constant.other
  typeName: Settings; // storage.type
  library: Settings; // support.type
}

// Keywords
export interface Keyword extends SettingsDict {
  default: Settings;
  control: Settings;
  operator: Settings;
  modifier: Settings; // storage.modifier
  other: Settings; // non arithmetics operators
}

// Variables
export interface Variable extends SettingsDict {
  default: Settings;
  other: Settings;
}

// Objects
export interface ObjectType extends SettingsDict {
  property: Settings;
  intermediateProperty: Settings;
}

// Functions
export interface FunctionType extends SettingsDict {
  name: Settings; // entity.name.function
  parameter: Settings; // variable.parameter
  library: Settings; // support.function
}

// Classes
export interface ClassType extends SettingsDict {
  name: Settings;
  baseClass: Settings; // entity.other.inherited-class
  library: Settings; // support.class
}

// Enums
export interface EnumType extends SettingsDict {
  member: Settings;
}

// Modules
export interface ModuleType extends SettingsDict {
  name: Settings;
  path: Settings;
}

// Sections
export interface Section extends SettingsDict {
  name: Settings; // entity.name.section
}

// Tags
export interface Tag extends SettingsDict {
  name: Settings; // entity.name.tag
  attribute: Settings; // entity.other.attribute-name
  value: Settings;
}

// Markup
export interface Markup extends SettingsDict {
  link: Settings; // markup.underline.link

  // Text
  heading: Settings;
  bold: Settings;
  italic: Settings;
  underline: Settings;
  list: {
    numbered: Settings;
    unnumbered: Settings;
  };
  quote: Settings;
  raw: Settings;
  other: Settings;
}

// Punctuation
export interface Punctuation extends SettingsDict {
  default: Settings;
}

// Invalid
export interface Invalid extends SettingsDict {
  illegal: Settings;
  deprecated: Settings;
}

// Config files
export interface Config extends SettingsDict {
  groupTitle: Settings;
  key: Settings;
  value: Settings;
}

// CSS
export interface Css extends SettingsDict {
  // Selectors
  tag: Settings;
  id: Settings;
  class: Settings;
  attribute: {
    name: Settings;
  };
  pseudoClass: Settings;
  pseudoElement: Settings;

  // Properties
  property: {
    name: Settings;
    value: Settings;
  };

  function: {
    parameter: Settings;
  };

  number: Settings;
  unit: Settings;
}

// GraphQL
export interface GraphQL extends SettingsDict {
  alias: Settings;
}

// HTML
export interface Html extends SettingsDict {
  tag: {
    name: Settings;
    attribute: Settings;
    value: Settings;
  };
  component: Settings;
  directive: Settings;
}

// Javascript
export interface Javascript extends SettingsDict {
  arrowFunction: Settings;
}

// JSON
export interface Json extends SettingsDict {
  property: Settings;
}

// Markdown
export interface Markdown extends SettingsDict {
  link: {
    title: Settings;
  };
}

// SQL
export interface Sql extends SettingsDict {
  keyword: Settings;
}

// YAML
export interface Yaml extends SettingsDict {
  document: Settings;
  anchor: {
    name: Settings;
  };
  constant: Settings;
}

export interface Tokens extends SettingsDict {
  type: Type;
  keyword: Keyword;
  variable: Variable;
  object: ObjectType;
  function: FunctionType;
  class: ClassType;
  enum: EnumType;
  module: ModuleType;
  section: Section;
  text: Settings;
  tag: Tag;
  markup: Markup;
  punctuation: Punctuation;
  invalid: Invalid;
  comment: Settings;
  config: Config;
  css: Css;
  graphql: GraphQL;
  html: Html;
  javascript: Javascript;
  json: Json;
  markdown: Markdown;
  sql: Sql;
  yaml: Yaml;
}

export interface Settings {
  foreground?: string;
  fontStyle?: 'normal' | 'italic' | 'bold' | 'underline' | '';
}

type SettingsDict = Dictionary<Settings | Dictionary<Settings>>;
