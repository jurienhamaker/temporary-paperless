// const path = require('path');

module.exports = {
    stories: ['../src/**/*.story.@(tsx|mdx)'],
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
};
