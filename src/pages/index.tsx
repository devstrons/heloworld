import Page from "@/components/Page"
import type { NextPage } from "next"

const HomePage: NextPage = () => {
  return (
    <Page title="Home">
      <div className="h-screen">
        <p className="text-red-400">its really working</p>
      </div>
    </Page>
  )
}

export default HomePage
