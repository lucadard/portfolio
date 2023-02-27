import { useMouse } from '@/context/MouseContext'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {
  text: string
  href: string
  blank?: boolean
}

const CoveredLink = ({ href, text, blank = true }: Props) => {
  const { setMouseHoverState, restoreMouseState } = useMouse()
  return (
    <Link
      href={href}
      target={blank ? '_blank' : ''}
      className="group"
      onMouseEnter={setMouseHoverState}
      onMouseLeave={restoreMouseState}
    >
      <span className="relative inline-block">
        <span className="z-10 transition-colors duration-100 dark:transition-none group-hover:text-white">
          {text}
        </span>
        <motion.span
          variants={{
            hide: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { delay: 1.5 }
            }
          }}
          className="absolute bottom-0 left-0 w-full h-[2px] transition-all group-hover:h-full bg-black dark:bg-white mix-blend-exclusion"
        />
      </span>
    </Link>
  )
}

export default CoveredLink
