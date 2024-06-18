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
                'skyStrong2': '#0072ff',
                'cloud': '#eef8f8',
                
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
