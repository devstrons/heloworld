/*
 *  renders a given language into the UI.
 *  Created On 28 August 2021
 */

import highlight from 'highlight.js'

export default async ({ code, data }) => {
    // set window title
    document.title = `${data.title} — hello world`

    // grab the code block
    const blocks = {
        main: document.querySelector('main'),
        pre: document.querySelector('main pre'),
        code: document.querySelector('main pre code'),
        container: document.querySelector('main > div'),
    }

    // set the code content
    blocks.code.textContent = code
    blocks.pre.className = `language-${data.syntax.toLowerCase()}`

    // setup syntax highlighting
    highlight.highlightElement(blocks.pre)
    blocks.main.setAttribute(
        'style',
        `background-color: ${
            window.getComputedStyle(blocks.pre).backgroundColor
        }`,
    )

    // show the code block!
    blocks.container.classList.remove('opacity-0')
}
