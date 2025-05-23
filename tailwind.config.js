/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
        './resources/views/vendor/statamic-livewire-filters/**/*.blade.php',
    	'./resources/views/vendor/statamic-livewire-filters/**/*.antlers.html',
        "./vendor/livewire/flux-pro/stubs/**/*.blade.php",
        "./vendor/livewire/flux/stubs/**/*.blade.php",
        "./node_modules/tw-elements/js/**/*.js",
    ],

    theme: {
        fontFamily: {
            ApercuRegular: ['ApercuRegular', 'sans-serif'],
            ApercuBold: ['ApercuBold', 'sans-serif'],
            ApercuMono: ['ApercuMono', 'sans-serif'],
            ApercuBoldItalic: ['ApercuBoldItalic', 'sans-serif'],
          },
        extend: {
            gradientColorStops: {
                'to-64%': '64%',
              },
            colors: {
                simpleBlue: '#3226D9',
                darkBlue: '#271ACB',
                lightpurple: '#B9B4FF',
                offwhite: '#E5E7C8',
                highlight: '#FFA6E7',
            },
            typography: ({ theme }) => ({
                sky: {
                  css: {
                    '--tw-prose-body': theme('colors.offwhite'),
                    '--tw-prose-headings': theme('colors.offwhite'),
                    '--tw-prose-lead': theme('colors.offwhite'),
                    '--tw-prose-links': theme('colors.offwhite'),
                    '--tw-prose-bold': theme('colors.offwhite'),
                    '--tw-prose-counters': theme('colors.offwhite'),
                    '--tw-prose-bullets': theme('colors.offwhite'),
                    '--tw-prose-hr': theme('colors.offwhite'),
                    '--tw-prose-quotes': theme('colors.offwhite'),
                    '--tw-prose-quote-borders': theme('colors.offwhite'),
                    '--tw-prose-captions': theme('colors.offwhite'),
                    '--tw-prose-code': theme('colors.offwhite'),
                    '--tw-prose-pre-code': theme('colors.offwhite'),
                    '--tw-prose-pre-bg': theme('colors.offwhite'),
                    '--tw-prose-th-borders': theme('colors.pink[300]'),
                    '--tw-prose-td-borders': theme('colors.pink[200]'),
                    '--tw-prose-invert-body': theme('colors.offwhite'),
                    '--tw-prose-invert-headings': theme('colors.offwhite'),
                    '--tw-prose-invert-lead': theme('colors.offwhite'),
                    '--tw-prose-invert-links': theme('colors.white'),
                    '--tw-prose-invert-bold': theme('colors.white'),
                    '--tw-prose-invert-counters': theme('colors.offwhite'),
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
        require("@tailwindcss/forms")({
            strategy: 'class'
          }),
        [require("tw-elements/plugin.cjs")],
    ],
    darkMode: "class"
};
