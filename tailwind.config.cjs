/* eslint-env node */
/*
 *  Tailwind CSS configuration for hello world project.
 *  Created On 26 August 2021
 */

const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['**/*.html', '**/*.svg'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: colors.blueGray,
                white: '#FFF',
                black: '#000',
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
