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
    const github = new Octokit()
    let res

    // depending on whether we're running in development
    // or production, either fetch from GitHub itself
    // or use our own custom built server
    if (import.meta.env.PROD) {
        res = await github.repos.getContent({
            owner: 'devstrons',
            repo: 'heloworld.xyz',
            path: '/lang',
        })
    } else {
        res = await axios({
            method: 'GET',
            url: 'http://localhost:3001',
        })
    }

    return res.data
}

// picks a random language string when passed with an
// array of language names
export const pickRandom = languages =>
    languages[Math.floor(Math.random() * languages.length)]

// gets the author information if given an API
// response from GitHub's API
export const getAuthor = async data => {
    const { author: username } = data
    if (!username) return

    // initialize a new GitHub API class
    const github = new Octokit()

    const {
        data: { login, avatar_url, name, location, html_url },
    } = await github.rest.users.getByUsername({ username })

    data.author = {
        username: login,
        avatar: avatar_url,
        name: name,
        location: location,
        link: html_url,
    }
}

// gets information about a single language
export const getLanguage = async lang => {
    const { data } = await axios({
        url: lang.download_url,
        method: 'GET',
    })

    return data
}
