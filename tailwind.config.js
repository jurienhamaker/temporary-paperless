const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.tsx', './src/**/*.styled.ts', './src/**/*.styled.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            indigo: {
                light: 'var(--e-color-indigo-light)',
                DEFAULT: 'var(--e-color-indigo)',
                dark: 'var(--e-color-indigo-dark)',
                shade: {
                    15: 'var(--e-color-indigo-shade-15)',
                    20: 'var(--e-color-indigo-shade-20)',
                },
            },
            sky: {
                lighter: '#f5feff',
                light: '#bbf4f6',
                DEFAULT: '#1edae3',
                dark: '#30c2c9',
            },
            storm: {
                lightest: '#b0b2cb',
                lighter: '#989ab7',
                light: '#80829e',
                DEFAULT: '#51536b',
                dark: '#272838',
            },
            mystic: {
                light: '#fcfdfe',
                DEFAULT: '#f7fafc',
                dark: '#e3ecf3',
                darker: '#dae6f0',
            },
            redberry: {
                lighter: '#ffe8ea',
                light: '#ff7d88',
                DEFAULT: '#e63241',
                dark: '#bd0f1e',
            },
        },
        extend: {
            spacing: {
                1.75: '0.4375rem',
                5.5: '1.375rem',
            },
            boxShadow: {
                light: '0px 1px 3px 0px rgba(128, 130, 158, 0.1)',
                'light-md': '0px 2px 6px 0px rgba(47, 84, 158, 0.06)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
