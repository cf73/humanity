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
            'sans': ['RaporRegular', 'sans-serif'],
            'serif': ['BaskervilleRegular', 'serif'],
        },
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
