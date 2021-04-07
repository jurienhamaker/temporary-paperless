import '../src/style/style.css';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export const parameters = {
    options: {
        storySort: {
            order: [
                'Intro',
                ['Welcome'],
                'Foundation',
                'Atoms',
                'Molecules',
                'Organisms',
            ],
        },
    },
    previewTabs: {
        canvas: {
            title: 'Playground',
        },
        'storybook/docs/panel': {
            hidden: true,
        },
        '@geometricpanda/storybook-addon-iframe': {
            title: 'Abstract',
        },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    badgesConfig: {
        stable: {
            contract: '#fff',
            color: '#1da360',
            title: 'Stable',
        },
        beta: {
            contract: '#fff',
            color: '#ffa231',
            title: 'Beta',
        },
        deprecated: {
            contract: '#fff',
            color: '#e63241',
            title: 'Deprecated',
        },
    },
};
