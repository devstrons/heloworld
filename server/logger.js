/*
 *  Configuring itivrutaha logger module.
 *  Created On 17 September 2021
 */

import itivrutaha from 'itivrutaha'

export let logger

export default async () => {
    logger = await itivrutaha.createNewLogger({
        appName: 'hello-world',
    })
}
