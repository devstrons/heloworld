/*
 *  Sends API requests to the Serverless functions and picks
 *  a random coding language.
 *  Created On 28 August 2021
 */

import axios from 'axios'
import { Octokit } from 'https://cdn.skypack.dev/@octokit/rest'

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

// gets the author information if given an API
// response from GitHub's API
const getAuthor = async language => {
    const { author: username } = language.data
    if (!username) return language

    // initialize a new GitHub API class
    // while passing in the token
    const github = new Octokit()

    const { data } = await github.rest.users.getByUsername({ username })

    language.data.author = {
        username: data.login,
        avatar: data.avatar_url,
        name: data.name,
        location: data.location,
        link: data.html_url,
    }

    return language
}

// gets information about a single language
export const getLanguage = async name => {
    const { data } = await axios({
        baseURL: import.meta.env.VITE_API_BASE,
        method: 'GET',
        url: `/api/${name}`,
    })

    return await getAuthor(data)
}
