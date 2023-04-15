/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { useSmoothScroll } from '@/context/SmoothScrollContext'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '@/assets/icons/Icons'
import { useRouter } from 'next/router'

export const HeaderThemeToggler = () => {
  const { setTheme, resolvedTheme: theme } = useTheme()
  return (
    <div className='grid place-content-center'>
      <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='relative aspect-square h-10 cursor-pointer select-none overflow-hidden'>
        {/* <Img img={theme === 'dark' ? lightModePicture : darkModePicture} /> */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={theme}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', mass: 0.2, stiffness: 120 }}
            className='relative h-full w-full select-none dark:invert'
          >
            {theme === 'light' ? <MoonIcon height='100%' width='100%' className='scale-[0.7] md:scale-100' /> : <SunIcon height='100%' width='100%' className='scale-[0.7] md:scale-100' />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
export const HeaderLanguageToggler = () => {
  const { locale } = useRouter()
  return (
    <a href={locale === 'en' ? '/es' : '/'}>
      {locale === 'en' ? 'Español' : 'English'}
    </a>
  )
}

interface HeaderLinkProps {
  text: string
  href?: string
  scrollTo?: string
  blank?: boolean
}

export const HeaderLink = (props: HeaderLinkProps) => {
  const { scroll } = useSmoothScroll()
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (props.href) return
    e.preventDefault()
    scroll?.scrollTo(props.scrollTo!)
  }

  return (
    <Link
      className='group cursor-pointer py-2'
      onClick={handleClick}
      scroll={false}
      href={props.href ?? ''}
      target={props.blank ? '_blank' : '_self'} rel='noreferrer'
    >
      <div className='relative after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:w-full after:origin-right after:scale-x-0 after:bg-[linear-gradient(90deg,_transparent,_#000000_0%_100%,_transparent)] after:to-transparent after:transition-[transform] after:duration-300 after:group-hover:origin-left after:group-hover:scale-x-[1] dark:after:bg-[linear-gradient(90deg,_transparent,_#ffffff_0%_100%,_transparent)]'>
        <p>
          {props.text}
        </p>
      </div>
    </Link>
  )
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='absolute inset-x-5 top-0 flex items-center justify-between py-6 uppercase md:inset-x-20'>
      {children}
    </header>
  )
}

export default Header
