/*
 *  A development server that mocks GitHub's RESTful API.
 *  Created On 16 September 2021
 */

import Hapi from '@hapi/hapi'

import initLogger, { logger } from './logger.js'
import list from './routes/list.js'
import serve from './routes/serve.js'

// initialize the logger module
await initLogger()

// start the development API server
const hapi = Hapi.server({
    port: 3001,
    host: 'localhost',
    routes: {
        cors: {
            origin: ['*'],
        },
    },
})

hapi.route(list)
hapi.route(serve)

await hapi.start()
logger.success(`API listening at ${hapi.info.uri}`)
