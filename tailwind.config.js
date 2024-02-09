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
            'thin': ['RaporThin', 'sans-serif'],
            'bold': ['RaporBold', 'sans-serif'],
        },
        extend: {
            colors: {
                'highlighter': '#F6F971',
                'khaki': '#AEC769',
                'softblack': '#373737',
                'forest': '#06977D',
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
