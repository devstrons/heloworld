/*
 *  Serverless function that lists all the languages.
 *  Created On 25 August 2021
 */

import { VercelRequest, VercelResponse } from '@vercel/node'
import path from 'path'
import fs from 'fs/promises'
import { promise } from '@vsnthdev/utilities-node'
import grayMatter, { GrayMatterFile } from 'gray-matter'
import marked from 'marked'
import sanitize from 'sanitize-html'

const getCode = (parsed: GrayMatterFile<any>) => {
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
    const html = marked(markdown)

    // ensure that the HTML we're rendering is safe and secure
    // and does not contain any client-side vulnerabilities
    const clean = sanitize(html, {
        allowedAttributes: {
            '*': ['id'],
        },
    }).trim()

    // return the data we'll be responding
    return {
        content: clean,
        data: parsed.data,
        code: code.join('\n'),
    }
}

export default async (req: VercelRequest, res: VercelResponse) => {
    // pull the language from the query params
    const { lang } = req.query

    // construct the path of the markdown file
    const file = path.join(__dirname, '..', 'lang', `${lang}.md`)

    // try opening the file
    const { err, returned } = await promise.handle(fs.readFile(file, 'utf-8'))

    // handle errors
    if (err)
        return res.status(404).json({
            code: 404,
            error: 'Not found',
            message: 'Language not found',
        })

    // parse the front-matter
    const parsed = grayMatter(returned)
    const { code, content, data } = getCode(parsed)

    // respond with JSON
    return res.json({ code, content, data })
}
