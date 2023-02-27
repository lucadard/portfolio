import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { useMouse } from '@/context/MouseContext'
import ThemeToggler from './ThemeToggler'
import { useTheme } from 'next-themes'

type Props = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

enum PATH_MESSAGES {
  '/' = 'inicio',
  '/about' = 'sobre mi',
  '/work' = 'proyectos',
  '/contact' = 'contacto'
}

const Message = ({ text, hide }: { text: string; hide: boolean }) => {
  return (
    <motion.p
      initial={{ y: -40, opacity: 0 }}
      animate={hide ? { y: -40, opacity: 0 } : { y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      className="uppercase font-[200] text-[20px] text-md"
    >
      {text}
    </motion.p>
  )
}

const Header = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const { resolvedTheme: theme } = useTheme()
  const { setMouseHoverState, restoreMouseState } = useMouse()
  const [currentMessage, setCurrentMessage] = useState('')
  const { scrollY } = useScroll()
  const backgroundOpacity = useTransform(scrollY, [50, 200], [0, 0.9])
  const path = usePathname()
  useEffect(() => {
    setCurrentMessage(
      isMenuOpen ? '' : PATH_MESSAGES[path as keyof typeof PATH_MESSAGES]
    )
  }, [])
  return (
    <header
      className="text-black dark:text-white z-[10] top-0 pt-10 pb-5 px-10 md:px-20 fixed w-screen flex flex-col justify-between dark:mix-blend-difference"
      draggable="false"
    >
      <motion.div
        className="absolute w-full left-0 top-0 -bottom-16 pointer-events-none"
        animate={
          !isMenuOpen && theme === 'light' ? { opacity: 1 } : { opacity: 0 }
        }
      >
        <motion.div
          style={{ opacity: backgroundOpacity }}
          className="h-full w-full bg-gradient-to-b from-white via-white to-transparent dark:from-transparent dark:via-transparent"
        />
      </motion.div>
      <div
        id="header-content"
        className="z-10 flex justify-between items-center"
      >
        <div id="content-left" className="flex gap-6 items-baseline">
          <Link
            href="/"
            scroll={false}
            className="text-3xl"
            onMouseEnter={setMouseHoverState}
            onMouseLeave={restoreMouseState}
          >
            <Logo />
          </Link>
          <Message key="customMsg" text={currentMessage} hide={isMenuOpen} />
        </div>
        <div className="flex items-center gap-10">
          <div className="md:block hidden">
            <ThemeToggler isMenuOpen={isMenuOpen} />
          </div>
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            onMouseEnter={setMouseHoverState}
            onMouseLeave={restoreMouseState}
            title="Menu"
          >
            <MenuIcon active={isMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  )
}

function MenuIcon({ active = true }: { active?: boolean }) {
  return (
    <div className="cursor-pointer px-1 select-none outline outline-0 flex flex-col gap-[6px] w-10 p-2">
      <div
        className={`h-[3px] w-full bg-apple-green origin-center transition-transform duration-500 ease-in-out 
      ${active ? 'rotate-45 translate-y-[9px]' : ''}`}
      />
      <div
        className={`h-[3px] w-full bg-apple-green transition-all duration-500 ease-in-out 
        ${active ? 'translate-x-full opacity-0' : ''}`}
      />
      <div
        className={`h-[3px] w-full bg-apple-green origin-center transition-transform duration-500 ease-in-out 
      ${active ? '-rotate-45 -translate-y-[9px]' : ''}`}
      />
    </div>
  )
}

export default Header
