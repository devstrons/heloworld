/*
 *  renders a given language into the UI.
 *  Created On 28 August 2021
 */

import highlight from 'highlight.js'

export default async ({ code, content, data }) => {
    // set window title
    document.title = `${data.title} — hello world`

    // grab the code block
    const blocks = {
        pre: document.querySelector('main pre'),
        code: document.querySelector('main pre code'),
        container: document.querySelector('main > div'),
        title: document.querySelector('article #title'),
        link: document.querySelector('article #link'),
        avatar: document.querySelector('article #avatar'),
        author: document.querySelector('article #author'),
        location: document.querySelector('article #location'),
        content: document.querySelector('article #content'),
    }

    // set the code content
    blocks.code.textContent = code
    blocks.pre.className = `language-${data.syntax.toLowerCase()} lg:leading-extra-loose`

    // setup syntax highlighting
    highlight.highlightElement(blocks.pre)

    // show the code block!
    blocks.container.classList.remove('opacity-0')

    // set the article properties
    blocks.content.innerHTML = content
    blocks.title.textContent = data.title
    if (data.author) {
        blocks.author.textContent = data.author.name
        blocks.location.textContent = data.author.location
        blocks.link.setAttribute('href', data.author.link)
        blocks.avatar.setAttribute('src', data.author.avatar)
    } else {
        ;[blocks.author, blocks.location, blocks.link, blocks.avatar].forEach(
            elm => (elm.className = 'hidden'),
        )
    }
}
