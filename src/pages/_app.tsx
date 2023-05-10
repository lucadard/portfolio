/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import '@/styles/locomotive-scroll.css'
import { SmoothScrollProvider } from '@/context/SmoothScrollContext'
import { AnimatePresence } from 'framer-motion'
import { isMobile } from 'react-device-detect'
import ImageOnCursor from '@/components/ImageOnCursor'
import Cursor from '@/components/Cursor'
import { MouseProvider } from '@/context/MouseContext'

import { Inter, IBM_Plex_Sans } from '@next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap'
})

export default function App ({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => { setMounted(false) }
  }, [])

  return (
    <ThemeProvider storageKey='theme' enableSystem>
      <SmoothScrollProvider options={{ smooth: true, smartphone: { smooth: false } }}>
        <MouseProvider>
          {mounted &&
            <>
              {isMobile
                ? null
                : <>
                  <Cursor />
                  {router.asPath === '/' && <ImageOnCursor />}
                  </>}
              <div className='pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(-20deg,_#eab308_10%,_#a855f7_40%,_transparent_90%)] opacity-30 blur-3xl' />
              <div className={`${inter.variable} ${ibmPlexSans.variable}`} data-scroll-container>
                <AnimatePresence mode='wait'>
                  <Component {...pageProps} key={router.asPath} />
                </AnimatePresence>
              </div>
            </>}
        </MouseProvider>
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}
