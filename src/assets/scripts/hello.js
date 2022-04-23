/*
 *  Entry client-side bundle file for hello world project.
 *  Created On 26 August 2021
 */

import progress from 'nprogress'

import core from './core/index.js'

// The esbuild that is packaged with Vite
// doesn't seem to support top level awaits
// So, we're wrapping everything in a main()
const main = async () => {
    // start showing the progress bar
    progress.start()

    // initialize the core
    await core(progress)
}

main()
