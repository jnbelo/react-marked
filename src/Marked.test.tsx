import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarkedOptions, Slugger } from 'marked';
import React from 'react';
import Marked from './Marked';

it('should render component with default options', () => {
    render(<Marked content="# Test" />);
    expect(screen.queryByRole('heading')).toHaveTextContent('Test');
});

it('should render component with custom options', () => {
    const options = {
        headerPrefix: 'custom-'
    };

    render(<Marked content="# Test" options={options} />);
    expect(screen.queryByRole('heading')).toHaveAttribute('id', 'custom-test');
});

it('should render component with custom extensions', () => {
    const overrides = {
        renderer: {
            heading(text: string, level: 1 | 2 | 3 | 4 | 5 | 6, raw: string, slugger: Slugger): string {
                return `<h${level}>extended-${text}</h${level}>`;
            }
        }
    } as MarkedOptions;

    render(<Marked content="# Test" overrides={overrides} />);
    expect(screen.queryByRole('heading')).toHaveTextContent('extended-Test');
});
