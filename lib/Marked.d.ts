import { FunctionComponent } from 'react';
import marked from 'marked';
export interface MarkedProps {
    options?: MarkedOptions;
    overrides?: MarkedOverrides;
    content: string;
}
export interface MarkedOptions extends marked.MarkedOptions {
    tokenizer?: any;
    walkTokens?: (token: any) => void;
}
export interface MarkedOverrides {
    renderer?: any;
    tokenizer?: any;
    walkTokens?: any;
}
declare const Marked: FunctionComponent<MarkedProps>;
export default Marked;
