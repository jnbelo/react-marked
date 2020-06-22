import { FunctionComponent } from 'react';
import marked from 'marked';
export interface MarkedProps {
    options?: marked.MarkedOptions;
    overrides?: marked.MarkedOptions;
    content: string;
}
declare const Marked: FunctionComponent<MarkedProps>;
export default Marked;
