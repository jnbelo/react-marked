/// <reference types="react" />
import marked from "marked";
export interface MarkedProps {
    options: marked.MarkedOptions;
    content: string;
}
declare const Marked: ({ content, options }: MarkedProps) => JSX.Element;
export default Marked;
