import React, { useState, useEffect, FunctionComponent } from 'react';
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

const Marked: FunctionComponent<MarkedProps> = ({ options, overrides, content }: MarkedProps) => {
    const [html, setHtml] = useState<string>();

    useEffect(() => {
        const printError = (error: any) => {
            if (error instanceof Error) {
                setHtml(`<p>${error.name}: ${error.message}</p><p>${error.stack}</p>`);
            } else {
                setHtml(`<p>${error}</p>`);
            }
        };

        try {
            if (overrides) {
                // @ts-ignore
                marked.use(overrides);
            }

            marked(content, options, (error: any | undefined, parsedResult: string) => {
                if (error) {
                    printError(error);
                } else {
                    setHtml(parsedResult);
                }
            });
        } catch (e) {
            printError(e);
        }
    }, [options, overrides, content, setHtml]);

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Marked;
