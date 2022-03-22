import LangPage, { PayloadType } from '@/components/LangPage'
import Page from '@/components/Page'
import matter from 'gray-matter'
import type { GetServerSideProps, NextPage } from 'next'
import getConfig from 'next/config'
import fs from 'node:fs/promises'
import path from 'node:path'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { serverRuntimeConfig } = getConfig()
  try {
    const content = await fs.readFile(
      path.join(serverRuntimeConfig.PROJECT_ROOT, 'public/lang', query.lang + '.md'),
      'utf-8',
    )
    const parsedData = matter(content)

    return {
      props: {
        payload: { ...parsedData.data, content: parsedData.content },
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const SpecificLangPage: NextPage<{ payload: PayloadType }> = ({ payload }) => {
  return (
    <Page title={payload.lang}>
      <LangPage payload={payload} />
    </Page>
  )
}

export default SpecificLangPage
