import { getLanguage, getLanguages, pickRandom } from './api.js'
import render from './render/index.js'

// initialize the core of the application
export default async progress => {
    // send HTTP request to get all languages
    const languages = await getLanguages()

    // pick a random one
    const name = pickRandom(languages)

    // (async) get the previous two languages and next two languages

    // fetch that language
    const language = await getLanguage(name)

    // render that into the UI
    render(language)

    // register the shortcut keys

    // stop the progress bar
    progress.done()
}
