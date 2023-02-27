import Header from '@/components/layout/Header'
import Head from 'next/head'
import React, { ReactNode, useEffect, useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Menu from '@/components/layout/Menu'
import Socials from '@/components/layout/Socials'
import { useTheme } from 'next-themes'
import ThemeToggler from '@/components/layout/ThemeToggler'
import { useMouse } from '@/context/MouseContext'
import { usePathname } from 'next/navigation'
import BackgroundChanger from '@/components/layout/BackgroundChanger'

type LayoutProps = {
  children: ReactNode
  title: string
}

const menuVariants: Variants = {
  close: {
    opacity: 0.5,
    transitionEnd: { display: 'none' }
  },
  open: { display: 'block', opacity: 1, transition: { delayChildren: 0.5 } }
}
const contentVariants: Variants = {
  hide: {
    opacity: 0,
    transitionEnd: { pointerEvents: 'none' }
  },
  show: {
    pointerEvents: 'initial',
    opacity: 1,
    transition: { delayChildren: 0.2 }
  }
}

function PageLayout({ children, title }: LayoutProps) {
  const { restoreMouseState } = useMouse()
  const { resolvedTheme: theme } = useTheme()
  const path = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    restoreMouseState()
    window && window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [path])
  return (
    <>
      <style jsx global>{`
        body {
          overflow-y: ${isMenuOpen ? 'hidden' : 'auto'};
        }
      `}</style>

      <Head>
        <title>{title + ' | lucadar'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.svg" /> */}
      </Head>
      <div className={theme}>
        <BackgroundChanger />
        <div
          id="page"
          className="text-black dark:text-white transition-all duration-500 delay-500"
        >
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {
            <AnimatePresence mode="wait">
              {isMenuOpen && (
                <motion.div
                  key="menu"
                  variants={menuVariants}
                  initial="close"
                  animate="open"
                  exit="close"
                  transition={{ duration: 0.5 }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          }
          <motion.div
            key="content"
            variants={contentVariants}
            initial="hide"
            animate={!isMenuOpen ? 'show' : 'hide'}
            exit="exit"
            className="w-full"
          >
            {children}
          </motion.div>
          <motion.div
            key="socials"
            variants={contentVariants}
            initial="hide"
            animate={!isMenuOpen ? 'show' : 'hide'}
            exit="hide"
          >
            <div className="m-4 md:hidden">
              <ThemeToggler isMenuOpen={isMenuOpen} />
            </div>
            <Socials />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default PageLayout
