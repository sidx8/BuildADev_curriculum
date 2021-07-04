import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.png'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="w-full mb-10">
      <div className="flex flex-col justify-between h-screen">
        <header className="px-12 md:px-20 flex items-center justify-between bg-white dark:bg-code-flatblack py-5">
          <div className="">
            <Link href="/" aria-label="Build A Dev">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Image
                    src="/static/images/logo.png"
                    width="90"
                    height="42"
                    alt="Picture of the author"
                  />
                  {/* <Logo /> */}
                </div>
                {/* {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )} */}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            {/* <MobileNav /> */}
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <SectionContainer>
          <Footer />
        </SectionContainer>
      </div>
    </div>
  )
}

export default LayoutWrapper
