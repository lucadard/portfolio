import Head from 'next/head'
import React, { ReactNode, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useSmoothScroll } from '@/context/SmoothScrollContext'

type LayoutProps = {
  children: ReactNode
  title: string
}

function PageLayout ({ children, title }: LayoutProps) {
  const [observer, setObserver] = useState<any>(null)
  const { resolvedTheme: theme } = useTheme()
  const { scroll } = useSmoothScroll()

  useEffect(() => {
    if (!document || observer) return
    setObserver(new ResizeObserver(() => {
      // scroll?.stop()
      scroll?.destroy()
      scroll?.init()
    }).observe(
      document.querySelector('[data-scroll-container]')!))
    return () => {
      setObserver(null)
    }
  }, [document])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <style jsx global>{`
      body {
        background: ${theme === 'dark' ? '#222222' : '#efefef'};
      }
      `}
      </style>
      <div className={theme}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='relative z-[10] overflow-x-hidden font-inter text-[14px] text-black transition-opacity duration-500 ease-in-out dark:text-white md:text-[16px]'
          data-scroll-section
        >
          <div id='top' />
          {children}
        </motion.div>
      </div>
    </>
  )
}

export default PageLayout
