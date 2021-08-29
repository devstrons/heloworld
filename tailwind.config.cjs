/* eslint-env node */
/*
 *  Tailwind CSS configuration for hello world project.
 *  Created On 26 August 2021
 */

const colors = require('tailwindcss/colors')

module.exports = {
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
        },
        container: {
            center: true,
        },
        fontFamily: {
            body: ['Urbanist', 'sans-serif'],
            display: ['Manrope', 'sans-serif'],
            code: ['Recursive', 'monospace'],
        },
    },
}
