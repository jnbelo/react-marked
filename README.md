# React Marked

![build](https://github.com/jnbelo/react-marked/workflows/build/badge.svg)

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

```javascript
import React from 'react';
import Marked from 'react-marked';

const App = () => {
    const options = {
        gfm: true
    };

    const overrides = {
        renderer: {
            heading(text:, level, raw:, slugger) {
                return `<h${level}>extended-${text}</h${level}>`;
            }
        }
    };

    const content = '# This is a title';

    return <Marked
            content={content}
            options={options}
            overrides={overrides} />;
};
```

## Further Documentation

Check out Marked's [documentation pages](https://marked.js.org/) for further options and extensibility.

## License

Copyright (c) 2020 José Belo. (MIT License)
