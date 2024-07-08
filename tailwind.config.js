/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        fontFamily: {
            'serif': ['Spectral', 'serif'],
            'josephin': ['Josefin Sans', 'sans-serif'],
        },
        extend: {
            colors: {
                'highlighter': 'rgb(255 254 0 / 88%)',
                'tape': '#ff0061',
                'warmwhite': '#fffff4',
                'algae': '#f8f4ec',
                'algae2': '#c4d6c6',
                'algae3': '#fff6e4',
                'sand': '#ffebbf',
                'sand2': '#f1ebde',
                'sand3': '#eceae5',
                'sandOG': '#F7FBF1',
                
                'sky': '#d6f6ff',
                'skyStrong': '#b5ebfa',
                'skyStrong2': '#141852',
                
                
                'darkpink': 'rgb(168 145 161 / 90%)',
                'khaki': '#859d44',
                'softblack': '#141852',
                'darkblack': '#252925',
                'wetwhite': '#ECF9EC',
                'forest': '#06977D',
                'earth': '#a08b8b',
                'lightgreen': 'rgb(0 190 144 / 45%)',
                'green': '#76FC9C',
                'hotpink': '#FA90A6',
                'yello': '#7e7847',
                'purple': '#E7C3F8',
                'oceanbluez': 'rgb(118 188 252 / 50%)',

                'diamond': '#B9DEFE',
                'atomicTangerine': '#F89880',
                'buttonBlue': '#199EF3',
                'cetaceanBlue': '#070b34',
                'darkLavender': '#6b4984',
                'chineseViolet': '#855988',
                'spaceCadet': '#141852',
                'stPatrickBlue': '#2b2f77',
                'azure': '#0082F0',
                'veryLightAzure': '#6FB6F6',
                'Regalia': '#483475',
                'lightSkyBlue': '#88C6FC',
            },
            typography: ({ theme }) => ({
                sky: {
                  css: {
                    '--tw-prose-body': theme('colors.spaceCadet'),
                    '--tw-prose-headings': theme('colors.atomicTangerine'),
                    '--tw-prose-lead': theme('colors.cetaceanBlue'),
                    '--tw-prose-links': theme('colors.spaceCadet'),
                    '--tw-prose-bold': theme('colors.spaceCadet'),
                    '--tw-prose-counters': theme('colors.spaceCadet'),
                    '--tw-prose-bullets': theme('colors.spaceCadet'),
                    '--tw-prose-hr': theme('colors.buttonBlue'),
                    '--tw-prose-quotes': theme('colors.darkLavender'),
                    '--tw-prose-quote-borders': theme('colors.darkLavender'),
                    '--tw-prose-captions': theme('colors.darkLavender'),
                    '--tw-prose-code': theme('colors.darkLavender'),
                    '--tw-prose-pre-code': theme('colors.darkLavender'),
                    '--tw-prose-pre-bg': theme('colors.darkLavender'),
                    '--tw-prose-th-borders': theme('colors.pink[300]'),
                    '--tw-prose-td-borders': theme('colors.pink[200]'),
                    '--tw-prose-invert-body': theme('colors.pink[200]'),
                    '--tw-prose-invert-headings': theme('colors.white'),
                    '--tw-prose-invert-lead': theme('colors.pink[300]'),
                    '--tw-prose-invert-links': theme('colors.white'),
                    '--tw-prose-invert-bold': theme('colors.white'),
                    '--tw-prose-invert-counters': theme('colors.pink[400]'),
                    '--tw-prose-invert-bullets': theme('colors.pink[600]'),
                    '--tw-prose-invert-hr': theme('colors.pink[700]'),
                    '--tw-prose-invert-quotes': theme('colors.pink[100]'),
                    '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
                    '--tw-prose-invert-captions': theme('colors.pink[400]'),
                    '--tw-prose-invert-code': theme('colors.white'),
                    '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
                    '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                    '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
                    '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
                  },
                },
            }),
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
