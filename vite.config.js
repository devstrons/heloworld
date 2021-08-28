/*
 *  Vite bundler configuration for hello-world project.
 *  Created On 26 August 2021
 */

import autoprefixer from 'autoprefixer'
import inlineSVG from 'posthtml-inline-svg'
import modules from 'posthtml-modules'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import fullReload from 'vite-plugin-full-reload'
import { minifyHtml } from 'vite-plugin-html'
import { posthtmlPlugin } from 'vite-plugin-posthtml'

export default ({ mode }) =>
    defineConfig({
        esbuild: true,
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
        css: {
            postcss: {
                plugins: [tailwindcss(), autoprefixer()],
            },
        },
        plugins: [
            // run PostHTML to construct the single-page HTML file
            posthtmlPlugin({
                plugins: [
                    // render other HTML files as modules
                    modules({
                        root: 'src',
                    }),

                    // inline SVGs wherever
                    // required straight into HTML
                    inlineSVG({
                        cwd: 'src',
                        tag: 'vector',
                        attr: 'src',
                    }),
                ],
            }),

            // minify html during production
            mode == 'production' ? minifyHtml() : null,

            // fully reload the page if any of the component
            // HTML files are changed
            fullReload.default(['src/sections/**/*.html']),
        ],
    })
