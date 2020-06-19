/// <reference types="react" />
import marked from "marked";
export interface MarkedProps {
    options?: MarkedOptions;
    overrides?: MarkedOverrides;
    content: string;
}
export interface MarkedOptions extends marked.MarkedOptions {
    tokenizer?: any;
    walkTokens?: Function;
}
export interface MarkedOverrides {
    renderer?: any;
    tokenizer?: any;
    walkTokens?: any;
}
declare const Marked: ({ options, overrides, content }: MarkedProps) => JSX.Element;
export default Marked;
