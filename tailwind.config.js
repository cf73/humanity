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
            'serif': ['BaskervilleRegular', 'serif'],
            'thin': ['RaporThin', 'sans-serif'],
            'sans': ['RaporRegular', 'sans-serif'],
            'bold': ['RaporBold', 'sans-serif'],
            'extrabold': ['RaporExtraBold', 'sans-serif'],
        },
        extend: {
            colors: {
                'highlighter': '#f3f239',
                'warmwhite': '#fffff4',
                'algae': '#f8f9eb',
                'darkpink': 'rgb(168 145 161 / 90%)',
                'khaki': '#AEC769',
                'softblack': '#373737',
                'forest': '#06977D',
                'earth': '#a08b8b',
                'green': '#76FC9C',
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
