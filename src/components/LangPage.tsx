import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Curves from './Curves'

export type PayloadType = {
  title: string
  author: string
  content: string
  syntax: string
  lang: string
}
type LangPageProps = {
  payload?: PayloadType | null
}
const LangPage: React.FC<LangPageProps> = ({ payload, children }) => {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-slate-50">
      <header className="flex items-center justify-between bg-slate-800 px-8 py-4 text-slate-200">
        <div className="">
          <Link href="/">
            <a>
              <h1 className="border-dotted font-mono text-xl font-bold hover:border-b">
                hello world
              </h1>
            </a>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li className="border-accent tracking-wide transition-all hover:border-b-2 hover:font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="border-accent tracking-wide transition-all hover:border-b-2 hover:font-semibold">
              <a href="https://discord.com/invite/MVujzTBqed">Discord</a>
            </li>
            <li className="border-accent tracking-wide transition-all hover:border-b-2 hover:font-semibold">
              <Link href="/about-us">About</Link>
            </li>
          </ul>
        </nav>
        <div className="">
          <a
            href="https://github.com/devstrons/heloworld.xyz"
            className="inline-block whitespace-nowrap rounded-md bg-slate-50 p-2 pr-4 text-slate-700 transition-colors hover:bg-slate-200"
            target="_blank">
            <span className="icon-outline">bolt</span> Contribute
          </a>
        </div>
      </header>
      <section className="relative flex shrink-0 flex-col items-center bg-slate-800 text-slate-200">
        <div className="grow py-32">
          <p className=" text-5xl font-semibold text-slate-50">
            Imagine a cool code <span className="text-accent">snippet</span> here!
          </p>
        </div>

        {children}
        <div className="h-32"></div>
        <Curves />
      </section>
      <article className="markdown markdown-slate mx-auto w-full max-w-7xl grow px-4 pt-16 markdown-h1:text-center md:px-8 xl:px-0">
        {payload ? (
          <>
            <h1>{payload.title}</h1>
            <div className="not-markdown flex justify-center">
              <div className="flex items-center gap-2 rounded-md border bg-white p-2">
                <div className="h-10 w-10 rounded-full bg-slate-200 shadow-inner"></div>
                <div className="grow">
                  <h3 className="font-semibold leading-none">{payload.author}</h3>
                  <span className="text-sm leading-none text-slate-500">India</span>
                </div>
              </div>
            </div>
            <ReactMarkdown children={payload.content} />
          </>
        ) : (
          <p className="text-center text-lg">Loading...</p>
        )}
      </article>
      <footer className="h-32 shrink-0"></footer>
    </div>
  )
}

export default LangPage
