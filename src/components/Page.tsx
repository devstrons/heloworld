import Head from "next/head"

const Page: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} — HelloWorld</title>
      </Head>
      {children}
    </>
  )
}
export default Page
