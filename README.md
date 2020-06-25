# React Marked

![tests](https://github.com/jnbelo/react-marked/workflows/tests/badge.svg)
[![coverage](https://coveralls.io/repos/github/jnbelo/react-marked/badge.svg?branch=master)](https://coveralls.io/github/jnbelo/react-marked?branch=master)

A simple React component that wraps the [Marked](https://github.com/markedjs/marked) markdown parsing library.

## Installation

### npm

```
npm install @jnbelo/react-marked
```

### yarn

```
yarn add @jnbelo/react-marked
```

## Usage

```typescript
import React from 'react';
import MarkedViewer from 'react-marked';
import { MarkedOptions } from 'marked';

const App = () => {
    const content = '# Heading \n Lorem Ipsum [link](https://github.com)';

    const options: MarkedOptions = {
        gfm: true
    };

    const overrides = {
        renderer: {
            link(href: string | null, title: string | null, text: string): string {
                return `<a href=${href} title=${title} target="_blank">${text}</a>`;
            }
        }
    } as MarkedOptions;

    return <MarkedViewer content={content} options={options} overrides={overrides} />;
};
```

_Note: Currently, due to the way the options typings were created, when adding overrides (See Marked's [extensibility documentation](https://marked.js.org/#/USING_PRO.md), we need to use type assertion as opposed to type annotation)_

## Further Documentation

Check out Marked's [documentation pages](https://marked.js.org/) for further options and extensibility.

## License

Copyright (c) 2020 José Belo. (MIT License)
