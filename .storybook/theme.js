import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#528afa',
  colorSecondary: '#30c2c9',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"IBM Plex Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBorderColor: 'white',
  barBg: '#528afa',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 3,

  brandTitle: 'Employes Style',
  brandUrl: 'https://employes.nl',
  brandImage: '/assets/images/logo.png',
});
