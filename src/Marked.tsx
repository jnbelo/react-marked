import React, { useState, useEffect, FunctionComponent } from 'react';
import marked from 'marked';

export interface MarkedProps {
    options?: marked.MarkedOptions;
    overrides?: marked.MarkedOptions;
    content: string;
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
                marked.use(overrides);
            }

            marked(content, options, (error, parsedResult) => {
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
