module.exports = {
    stories: ['../stories/index.ts', '../stories/**/*.story.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss',
        {
            name: '@storybook/preset-scss',
            options: {
                cssLoaderOptions: {
                    modules: true,
                }
            }
        },
        '@geometricpanda/storybook-addon-iframe',
        '@geometricpanda/storybook-addon-badges',
    ],
    typescript: {
        check: false, // type-check stories during Storybook build
    },
    webpackFinal: async config => {
        config.node = {
            fs: 'empty',
        };

        config.module.rules.push({
            test: /story\.[j|t]sx?$/,
            loader: 'wix-storybook-utils/loader',
            options: {
                storyConfig: {
                    moduleName: '@employes/ui',
                    repoBaseURL: 'https://github.com/employes/employes-ui/',
                    importFormat:
                        "import { %componentName } from '%moduleName/%componentName'",
                },
            },
        });

        return config;
    },
};
