const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');

module.exports = ({ config, env, defaultConfig }) => {
    config.module.rules.push({
        test: /\.stories\.[j|t]sx?$/,
        loader: 'wix-storybook-utils/loader',
        options: {
            storyConfig: {
                moduleName: 'employes-paperless',
                repoBaseURL:
                    'https://github.com/wix/wix-ui-backoffice/tree/master/src/components/',
                importFormat:
                    "import {%componentName} from '%moduleName/%componentName'",
            },
        },
    });

    return config;
};
