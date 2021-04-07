import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import { addons } from '@storybook/addons';
import employes from './theme';

function loadStories() {
    require('../src/stories');
    require('../src/style/style.css');
}

configure(loadStories, module);

setOptions({
    showDownPanel: false,
    name: 'employes-paperless',
    url: 'https://github.com/wix/wix-ui-backoffice',
    sidebarAnimations: false,
});

addons.setConfig({
    theme: employes,
});
