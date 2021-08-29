/* eslint-env node */
/*
 *  Tailwind CSS configuration for hello world project.
 *  Created On 26 August 2021
 */

const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

module.exports = {
    plugins: [typography],
    purge: {
        content: ['**/*.html', '**/*.svg'],
        options: {
            safelist: ['leading-extra-loose'],
        },
    },
    darkMode: 'class',
    variants: {
        extend: {
            display: ['dark'],
        },
    },
    theme: {
        extend: {
            colors: {
                gray: colors.blueGray,
                white: '#FFF',
                black: '#000',
                'hero-light': '#22272E',
            },
            height: {
                106: '32rem',
            },
            lineHeight: {
                'extra-loose': '2.5rem',
            },
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            fontFamily: 'Poppins',
                        },
                        h2: {
                            fontFamily: 'Poppins',
                        },
                        h3: {
                            fontFamily: 'Poppins',
                        },
                        h4: {
                            fontFamily: 'Poppins',
                        },
                        h5: {
                            fontFamily: 'Poppins',
                        },
                        h6: {
                            fontFamily: 'Poppins',
                        },
                    },
                },
            },
        },
        container: {
            center: true,
        },
        fontFamily: {
            body: ['Urbanist', 'sans-serif'],
            display: ['Poppins', 'sans-serif'],
            code: ['Recursive', 'monospace'],
        },
    },
}
