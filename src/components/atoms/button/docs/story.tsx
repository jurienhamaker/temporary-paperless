import * as React from 'react';
import { Button } from '../button.react';

import {
    header,
    tabs,
    tab,
    api,
    playground,
    description,
    importExample,
    divider,
    title,
    example,
} from 'wix-storybook-utils/dist/src/Sections';

import variantsText from './variants.md';
import * as examples from './examples';

export default {
    category: 'UI/Atoms',
    storyName: 'Button',
    component: Button,
    componentPath: '../button.react.tsx',

    parameters: {
        badges: ['beta'],
        iframe: {
            url:
                'https://app.goabstract.com/embed/3b1136b5-4f3b-4a29-97f1-d882303eb8d6',
        },
    },

    componentProps: {
        children: 'Action text',
        variant: 'primary',
        size: 'default',
        loading: false,
    },
    exampleProps: {
        onClick: () => 'Clicked!',
        variant: [
            {
                label: 'Primary',
                value: 'primary',
            },
            {
                label: 'Secondary',
                value: 'secondary',
            },
            {
                label: 'Link',
                value: 'link',
            },
        ],
        size: [
            {
                label: 'Default',
                value: 'default',
            },
            {
                label: 'Small',
                value: 'small',
            },
        ],
        loading: false,
    },

    sections: [
        header({
            component: <Button>Action text</Button>,
        }),

        tabs([
            tab({
                title: 'Description',
                sections: [
                    description(
                        `Button is a default component to display action in a page.`
                    ),

                    importExample(),

                    divider(),

                    title('Examples'),

                    example({
                        title: 'Variants',
                        text: variantsText,
                        components: { Button },
                        source: examples.variants,
                    }),
                ],
            }),

            ...[
                { title: 'API', sections: [api()] },
                { title: 'Playground', sections: [playground()] },
            ].map(tab),
        ]),
    ],
};
