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
            'medium': ['RaporMedium', 'sans-serif'],
            'medium-italic': ['RaporMediumItalic', 'sans-serif'],
            'semibold': ['RaporSemibold', 'sans-serif'],
            'bold': ['RaporBold', 'sans-serif'],
            'extrabold': ['RaporExtraBold', 'sans-serif'],
        },
        extend: {
            colors: {
                'highlighter': '#f3f239',
                'warmwhite': '#fffff4',
                'algae': '#f8f4ec',
                'darkpink': 'rgb(168 145 161 / 90%)',
                'khaki': '#AEC769',
                'softblack': '#373737',
                'darkblack': '#252925',
                'wetwhite': '#ECF9EC',
                'forest': '#06977D',
                'earth': '#a08b8b',
                'lightgreen': 'rgb(0 190 144 / 45%)',
                'green': '#76FC9C',
                'hotpink': '#FA90A6',
                'yello': '#FCDF76',
                'oceanbluez': 'rgb(118 188 252 / 50%)',
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
