export type Dictionary<Value = any> = {
  [key: string]: Value;
};

export interface EditorColors {
  [key: string]: string | Dictionary<string>;
}
