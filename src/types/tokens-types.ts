// See docs/syntax-highlight.md

// Data types
export interface Type {
  number: Settings; // constant.numeric
  string: Settings; // string
  character: {
    default: Settings; // constant.character
    escape: Settings; // constant.character.escape
  };
  special: Settings; // constant.language
  custom: Settings; // entity.name.type
  other: Settings; // constant.other
  typeName: Settings; // storage.type
  primitive: Settings;
}

// Keywords
export interface Keyword {
  default: Settings;
  control: Settings;
  operator: Settings;
  modifier: Settings; // storage.modifier
  other: Settings;
}

// Objects
export interface ObjectType {
  property: Settings;
}

// Functions
export interface FunctionType {
  name: Settings; // entity.name.function
  parameter: Settings; // variable.parameter
}

// Classes
export interface ClassType {
  name: Settings;
  baseClass: Settings; // entity.other.inherited-class
}

// Modules
export interface ModuleType {
  name: Settings;
}

// Sections
export interface Section {
  name: Settings; // entity.name.section
}

// Tags
export interface Tag {
  name: Settings; // entity.name.tag
  attributeName: Settings; // entity.other.attribute-name
}

// Markup
export interface Markup {
  link: Settings; // markup.underline.link

  // Text
  heading: Settings;
  bold: Settings;
  italic: Settings;
  underline: Settings;
  list: Settings;
  quote: Settings;
  raw: Settings;
  other: Settings;
}

// Puntuaction
export interface Puntuaction {
  default: Settings;
  embedded: Settings;
}

// Invalid
export interface Invalid {
  illegal: Settings;
  deprecated: Settings;
}

// Config files
export interface Config {
  groupTitle: Settings;
  key: Settings;
  value: Settings;
  separator: Settings;
}

// CSS
export interface Css {
  // Selectors
  tag: Settings;
  id: Settings;
  class: Settings;
  attribute: Settings;
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

  unit: Settings;
}

// HTML
export interface Html {
  tag: Settings;
  attribute: Settings;
  component: {
    tag: Settings;
  };
  directive: Settings;
}

// JSON
export interface Json {
  boolean: Settings;
  property: Settings;
}

// Markdown
export interface Markdown {
  puntuaction: {
    heading: Settings;
    bold: Settings;
    italic: Settings;
    quote: Settings;
    list: Settings;
  };
  linkTitle: Settings;
}

// YAML
export interface Yaml {
  boolean: Settings;
}

export interface Tokens {
  type: Type;
  keyword: Keyword;
  variable: Settings;
  constant: Settings;
  object: ObjectType;
  function: FunctionType;
  class: ClassType;
  module: ModuleType;
  section: Section;
  text: Settings;
  tag: Tag;
  markup: Markup;
  puntuaction: Puntuaction;
  invalid: Invalid;
  comment: Settings;
  config: Config;
  css: Css;
  html: Html;
  json: Json;
  markdown: Markdown;
  yaml: Yaml;
}

export interface Settings {
  foreground?: string;
  fontStyle?: 'italic' | 'bold' | 'underline' | '';
}