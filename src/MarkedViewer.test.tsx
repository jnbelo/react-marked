import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MarkedOptions, Slugger } from 'marked';
import React from 'react';
import MarkedViewer from './MarkedViewer';
import marked from 'marked';

beforeEach(() => {
    jest.clearAllMocks();
});

it('should render component with default options', () => {
    render(<MarkedViewer content="# Test" />);
    expect(screen.queryByRole('heading')).toHaveTextContent('Test');
});

it('should render component with custom options', () => {
    const options = {
        headerPrefix: 'custom-'
    };

    render(<MarkedViewer content="# Test" options={options} />);
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

    render(<MarkedViewer content="# Test" overrides={overrides} />);
    expect(screen.queryByRole('heading')).toHaveTextContent('extended-Test');
});

it('should render error in callback', () => {
    const spy = jest
        .spyOn(marked, 'parse')
        .mockImplementation(
            (
                content: string,
                options?: marked.MarkedOptions,
                callback?: (error: any, parseResult: string) => void
            ): any => {
                callback('A callback error occurred', '');
                return '';
            }
        );

    render(<MarkedViewer content="Callback error Test" />);
    expect(screen.queryByText('A callback error occurred')).not.toBeNull();
    expect(spy).toHaveBeenCalled();
});

it('should render a thrown error', () => {
    const spy = jest
        .spyOn(marked, 'parse')
        .mockImplementation(
            (
                content: string,
                options?: marked.MarkedOptions,
                callback?: (error: any, parseResult: string) => void
            ): any => {
                throw new Error('A thrown error occurred');
            }
        );

    render(<MarkedViewer content="Thrown error test" />);
    expect(screen.queryByText('Error: A thrown error occurred')).not.toBeNull();
    expect(spy).toHaveBeenCalled();
});
