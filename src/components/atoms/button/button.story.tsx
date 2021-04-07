import * as React from 'react';
import { Button, ButtonProps } from './button.react';

function PButton(props: ButtonProps) {
    return (
        <div style={{ margin: '20px' }}>
            <Button {...props}>Click me please!</Button>
        </div>
    );
}

export default {
    category: 'Atoms',
    storyName: 'Button',
    component: Button,
    componentPath: './button.react.tsx',

    componentProps: setState => ({
        'data-hook': 'storybook-button',
        children: ['Click me!'],
    }),

    examples: (
        <div
            style={{
                backgroundColor: '#f6f8fa',
                margin: '10px',
                padding: '16px',
            }}
        >
            <h1>Examples</h1>
            <h2>Variants</h2>
            <PButton variant="primary" />
            <PButton variant="secondary" />
            <PButton variant="link" />
            <h2>Sizes</h2>
            <PButton />
            <PButton size="small" />
        </div>
    ),
};
