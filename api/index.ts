/*
 *  Serverless function that lists all the languages.
 *  Created On 25 August 2021
 */

import { VercelRequest, VercelResponse } from '@vercel/node'
import path from 'path'
import glob from 'glob'

export default async (req: VercelRequest, res: VercelResponse) => {
    const files = glob
        .sync(path.join(__dirname, '..', 'lang', '*.md'), {
            nodir: true,
        })
        .map(file => path.parse(file).name)

    // respond with JSON
    return res.json({
        langs: files,
    })
}
