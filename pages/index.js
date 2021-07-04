import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import WebDev from 'public/static/svg/webdev.svg'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y  divide-gray-300 dark:divide-gray-700">
        <div className="flex flex-wrap bg-white dark:bg-code-flatblack sm:justify-center pb-14 space-y-5 space-x-3">
          <WebDev />
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              Data Structrue and Algorithms
            </h1>
            <div className="flex flex-row space-x-2 text-gray-700 dark:text-gray-300">
              <div className="rounded-full px-3 dark:bg-red-700 dark:text-red-100 bg-red-300 text-red-900 py-2 text-sm font-semimedium leading-none flex items-center">
                {posts.length} modules{' '}
              </div>
              <div className="rounded-full px-3 dark:bg-green-700 dark:text-green-100 bg-green-300 text-green-900 py-2 text-sm font-semibold leading-none flex items-center">
                1h 30min
              </div>
              <div className="rounded-full px-3 dark:bg-purple-700 dark:text-purple-100 bg-purple-300 text-purple-900 py-2 text-sm font-semibold leading-none flex items-center">
                Beginer
              </div>
            </div>
            <p className="text-lg leading-7 text-gray-800 dark:text-gray-300">
              Learn the basics of data structures, including programming languages and tools, and
              web accessibility.
            </p>
            <div className="font-semimedium tracking-tight text-gray-900 dark:text-gray-100 sm:text-md md:text-xl">
              Prerequisites
            </div>
            <div className="pb-2">none</div>
            <Link href={`/blog/intro`}>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start &rarr;
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
          <ul>
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags, logo } = frontMatter
              return (
                <li
                  key={slug}
                  className="bg-white dark:bg-code-flatblack rounded shadow my-5 px-5 py-8"
                >
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <div className="my-auto mx-auto">
                        <Image src={logo} width="110" height="110" alt="Picture of the author" />
                      </div>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap prose text-gray-500 font-semibold max-w-none dark:text-gray-400">
                              20 min
                            </div>
                          </div>
                          <div className="prose text-gray-700 max-w-none dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Start &rarr;
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/blog"
                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="all posts"
              >
                All Modules &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
