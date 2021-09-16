/*
 *  An API route that list all the programming
 *  languages available in the filesystem.
 *  Created On 16 September 2021
 */

import dirname from 'es-dirname'
import fs from 'fs/promises'
import glob from 'glob'
import path from 'path'

const handler = async () => {
    const returnable = []
    const files = glob.sync(
        path.join(dirname(), '..', '..', 'public', 'lang', '*.md'),
        {
            nodir: true,
        },
    )

    for (const file of files) {
        const stats = await fs.stat(file)

        returnable.push({
            name: path.parse(file).base,
            size: stats.size,
            download_url: `http://localhost:3001/${path.parse(file).name}`,
        })
    }

    return returnable
}

export default {
    handler,
    method: 'GET',
    path: '/',
}
