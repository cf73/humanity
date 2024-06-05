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
                'highlighter': 'rgb(255 254 0 / 88%)',
                'warmwhite': '#fffff4',
                'algae': '#f8f4ec',
                'algae2': '#c4d6c6',
                'algae3': '#fff6e4',
                'sand': '#ffebbf',
                
                'darkpink': 'rgb(168 145 161 / 90%)',
                'khaki': '#859d44',
                'softblack': '#373737',
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
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
