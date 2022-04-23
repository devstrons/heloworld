import { getLanguage, getLanguages, pickRandom } from './api.js'
import parse from './parse.js'
import render from './render/index.js'

// initialize the core of the application
/*
 *  The core logic that picks a programming language
 *  and renders it onto the frontend.
 *  Created On 16 September 2021
 */

export default async progress => {
    // send HTTP request to get all languages
    const languages = await getLanguages()

    // pick a random one
    const lang = pickRandom(languages)

    // (async) get the previous two languages and next two languages

    // fetch that language
    let language = await getLanguage(lang)

    // parse the language string into an object
    language = await parse(language)

    // render that into the UI
    render(language)

    // register the shortcut keys

    // stop the progress bar
    progress.done()
}
