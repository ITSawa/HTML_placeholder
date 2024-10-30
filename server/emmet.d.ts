declare module "emmet" {
  interface EmmetConfig {
    expandJSTag?: boolean;
    expandJSLiteral?: boolean;
    expandJSXLiteral?: boolean;
    expandJSX?: boolean;
    expandJSXAttr?: boolean;
    expandJSXAttrValue?: boolean;
  }

  export function parse(abbr: string, config?: EmmetConfig): string;
  export default parse;
}
