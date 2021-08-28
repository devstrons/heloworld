/*
 *  Entry client-side bundle file for hello world project.
 *  Created On 26 August 2021
 */

import progress from 'nprogress'

import core from './core/index.js'

// start showing the progress bar
progress.start()

// initialize the core
await core(progress)
