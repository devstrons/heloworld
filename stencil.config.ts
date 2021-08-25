/*
 *  Stencil.js configuration file for hello-world project.
 *  Created On 25 August 2021
 */

import { Config } from '@stencil/core'

export const config: Config = {
    outputTargets: [
        {
            type: 'www',
            serviceWorker: null,
        },
    ],
}
