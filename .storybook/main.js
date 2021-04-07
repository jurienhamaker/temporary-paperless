// const path = require('path');

module.exports = {
    stories: ['../src/stories/index.ts'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss',
        '@geometricpanda/storybook-addon-iframe',
        '@geometricpanda/storybook-addon-badges',
    ],
    typescript: {
        check: true, // type-check stories during Storybook build
    },
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.story\.[j|t]sx?$/,
            loader: 'wix-storybook-utils/loader',
            options: {
                storyConfig: {
                    moduleName: 'paperless',
                    repoBaseURL: 'https://github.com',
                    importFormat:
                        "import {%componentName} from '%moduleName/%componentName'",
                },
            },
        });

        return config;
    },
};
