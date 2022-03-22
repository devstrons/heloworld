import fs from 'fs/promises'
import matter from 'gray-matter'
import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'
import path from 'path'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const content = await getRandomFileContentIn('public/lang')
  // console.log()
  response.json({ data: matter(content) })

  // res.status(200).json({ name: "John Doe" })
}

async function getRandomFileContentIn(folder: string) {
  const { serverRuntimeConfig } = getConfig()
  const langDirectory = path.join(serverRuntimeConfig.PROJECT_ROOT, folder)
  const files = await fs.readdir(langDirectory)
  const randomFile = getRandomItem(files)
  return fs.readFile(path.join(langDirectory, randomFile), 'utf-8')
}

function getRandomItem<T>(arr: T[]) {
  return arr[(Math.random() * arr.length) | 0]
}
