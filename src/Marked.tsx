import React, { useState, useEffect } from "react";
import marked from "marked";

export interface MarkedProps {
    options: marked.MarkedOptions;
    content: string;
}

const Marked = ({ content, options }: MarkedProps) => {
    const [html, setHtml] = useState<string>();

    useEffect(() => {
        marked(content, options, (error: any, parsedResult: string) => {
            setHtml(parsedResult);
        });
    }, [content, options, setHtml]);

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Marked;
