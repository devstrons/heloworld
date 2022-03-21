/*
 *  API route that responds with individual programming
 *  languages.
 *  Created On 16 September 2021
 */

import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'

const handler = async (req, h) =>
    h
        .response(
            await fs.readFile(path.join('lang',`${req.params.lang}.md`),'utf-8'),
        )
        .header('Content-Type', 'text/plaintext')

export default {
    handler,
    method: 'GET',
    path: '/{lang}',
    options: {},
}
