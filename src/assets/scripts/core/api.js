/*
 *  Sends API requests to the Serverless functions and picks
 *  a random coding language.
 *  Created On 28 August 2021
 */

import axios from 'axios'

// fetches a list of all available languages
// from the API server
export const getLanguages = async () => {
    const { data } = await axios({
        baseURL: import.meta.env.VITE_API_BASE,
        method: 'GET',
        url: '/api',
    })

    return data
}

// picks a random language string when passed with an
// array of language names
export const pickRandom = languages =>
    languages.langs[Math.floor(Math.random() * languages.langs.length)]

// gets information about a single language
export const getLanguage = async name => {
    const { data } = await axios({
        baseURL: import.meta.env.VITE_API_BASE,
        method: 'GET',
        url: `/api/${name}`,
    })

    return data
}
