/*
 *  Vite bundler configuration for hello-world project.
 *  Created On 26 August 2021
 */

import { defineConfig } from 'vite'

export default ({ mode }) =>
    defineConfig({
        clearScreen: false,
        publicDir: '../public',
        build: {
            emptyOutDir: true,
            outDir: '../dist',
        },
        server: {
            port: 3000,
            fs: {
                allow: ['.'],
            },
        },
        css: {},
        plugins: [],
    })
