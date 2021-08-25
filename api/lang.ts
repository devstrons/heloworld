/*
 *  Serverless function that lists all the languages.
 *  Created On 25 August 2021
 */

import { VercelRequest, VercelResponse } from '@vercel/node'
import path from 'path'
import fs from 'fs/promises'
import { promise } from '@vsnthdev/utilities-node'
import grayMatter, { GrayMatterFile } from 'gray-matter'

const getCode = (parsed: GrayMatterFile<any>) => {
    parsed.content = parsed.content.trim()

    const codeStart =
        parsed.content.indexOf('```', parsed.content.indexOf('```') + 1) + 3

    let code = parsed.content.substr(0, codeStart).split('\n')
    const content = parsed.content.substr(codeStart).trim()

    code.shift()
    code.pop()

    return {
        content,
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
