import { useMouse } from '@/context/MouseContext'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export const socials = [
  {
    name: 'Github',
    icon_url: '/assets/icons/github.png',
    link: 'https://github.com/lucadard'
  },
  {
    name: 'LinkedIn',
    icon_url: '/assets/icons/linkedin.png',
    link: 'https://www.linkedin.com/in/lucadardenne/'
  }
]
const transition = { type: 'spring', mass: 0.1, stiffness: 50 }

const Socials = () => {
  const { setMouseHoverState, restoreMouseState } = useMouse()

  return (
    <motion.div
      variants={{
        hide: { opacity: 0, y: '100%' },
        show: { opacity: 1, y: '20%' }
      }}
      initial="hide"
      animate="show"
      // exit="hide"
      transition={transition}
      className="z-[100] md:fixed md:h-52 md:w-[1px] w-[70vw] h-[1px] mb-20 md:mb-0 bottom-0 right-16 xl:right-20 self-end bg-black dark:bg-white"
    >
      <div className="flex md:flex-col md:ml-3 gap-4 md:w-6 justify-end px-5 md:px-0">
        {socials.map(({ name, link, icon_url }) => (
          <Link
            key={name}
            href={link}
            target="_blank"
            className="w-6 aspect-square py-3 md:py-0 flex items-center dark:invert dark:opacity-50"
            onMouseEnter={setMouseHoverState}
            onMouseLeave={restoreMouseState}
          >
            <img className="cursor-pointer" src={icon_url} />
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default Socials
