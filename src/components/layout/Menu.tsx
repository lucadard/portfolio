import { useMouse } from '@/context/MouseContext'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const routes = {
  Inicio: '/',
  'Sobre mi': '/about',
  proyectos: '/work',
  Contacto: '/contact'
}

const listItem: Variants = {
  close: { x: '-100%' },
  open: { x: 0 }
}

const Menu = () => {
  const { setMouseHoverState, restoreMouseState } = useMouse()
  const path = '/' + usePathname()?.split('/')[1]
  const [currentSelection, setCurrentSelection] = useState<string | null>(path)

  function handleMouseEnter(route: string) {
    setCurrentSelection(route)
    setMouseHoverState()
  }
  function handleMouseLeave() {
    setCurrentSelection(path)
    restoreMouseState()
  }

  function ItemsUnderline() {
    return (
      <motion.div
        transition={{
          type: 'spring',
          stiffness: 100,
          mass: 0.4
        }}
        layoutId="menuUnderline"
        className="z-[10] w-full h-1/2 md:h-full self-end mix-blend-overlay bg-black/30 dark:bg-white/20"
      />
    )
  }

  return (
    <div className="text-black dark:text-white fixed h-screen w-screen top-0 left-0 pt-32 md:pt-0 flex md:items-center justify-center select-none">
      <motion.ol
        variants={{
          open: { transition: { staggerChildren: 0.03 } },
          close: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
        }}
      >
        {Object.entries(routes).map(([key, route], index, { length }) => {
          return (
            <div key={key} className="relative w-min">
              <motion.div
                variants={{
                  close: { height: 0, transition: { delay: 0 } },
                  open: { height: '30px', transition: { delay: 1 } }
                }}
                className="absolute flex left-10 right-0 bottom-2 pointer-events-none"
              >
                {currentSelection === route && <ItemsUnderline />}
              </motion.div>
              <Link
                href={route}
                scroll={false}
                className="block overflow-hidden"
              >
                <motion.li
                  key={key}
                  variants={listItem}
                  transition={{
                    bounce: 0.1,
                    duration: 0.8,
                    type: 'spring'
                  }}
                  className="items-end py-1 px-2"
                  onMouseEnter={() => handleMouseEnter(route)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="overflow-hidden flex">
                    <span className="text-apple-green font-ibm-mono self-end text-xl mb-[5px]">
                      0{index + 1}
                    </span>
                    <span
                      className={`px-3 font-bold text-5xl md:text-8xl whitespace-nowrap transition-colors duration-300 
                    ${currentSelection === route ? 'text-apple-green' : ''}`}
                    >
                      {key.toUpperCase()}
                    </span>
                  </div>
                </motion.li>
              </Link>
            </div>
          )
        })}
      </motion.ol>
    </div>
  )
}

export default Menu
