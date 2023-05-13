/*
 *  Renders the markdown string into the content area
 *  while using DOM Purify to remove any XSS vulnerability.
 *  Created On 16 September 2021
 */

import dompurify from 'https://cdn.skypack.dev/dompurify'
import grayMatter from 'https://cdn.skypack.dev/gray-matter'
import 'https://cdn.jsdelivr.net/npm/marked/marked.min.js'

import { getAuthor } from './api.js'

export default async text => {
    const parsed = grayMatter(text)

    // trim any extra spaces/newlines from the content
    parsed.content = parsed.content.trim()

    // grab the position where the first codeblock starts
    const codeStart =
        parsed.content.indexOf('```', parsed.content.indexOf('```') + 1) + 3

    // only get the code inside the first code block
    const code = parsed.content.substr(0, codeStart).split('\n').slice(1, -1)

    // get the markdown string
    const markdown = parsed.content.substr(codeStart).trim()

    // convert the markdown to HTML code
    const html = marked.parse(markdown)

    // ensure that the HTML we're rendering is safe and secure
    // and does not contain any client-side vulnerabilities
    const clean = dompurify.sanitize(html)

    // add the author information to the data
    await getAuthor(parsed.data)

    // return the data we'll be responding
    return {
        content: clean,
        data: parsed.data,
        code: code.join('\n'),
    }
}
