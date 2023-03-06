import '@/styles/globals.css'
import '@/styles/noise.css'

import type { AppProps } from 'next/app'

import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

import { MouseProvider } from '@/context/MouseContext'
import { SlideDirectionProvider } from '@/context/SlideDirectionContext'
import Cursor from '@/components/Cursor'
import Noise from '@/components/Noise'
import PageLoader from './PageLoader'
import Socials from '@/components/layout/Socials'

const loaderDuration = 1.5 // in seconds

export default function App({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, loaderDuration * 1000)
  }, [])

  return (
    <ThemeProvider storageKey="theme" enableSystem={true}>
      <MouseProvider>
        <SlideDirectionProvider>
          {!isMobile && <Cursor />}
          {/* <Noise /> */}
          <AnimatePresence mode="wait">
            {mounted ? (
              <Component {...pageProps} key={router.asPath + '-content'} />
            ) : (
              <PageLoader
                duration={loaderDuration}
                key={router.asPath + '-loader'}
              />
            )}
          </AnimatePresence>
        </SlideDirectionProvider>
      </MouseProvider>
    </ThemeProvider>
  )
}
