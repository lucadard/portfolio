import { useMouse } from '@/context/MouseContext'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {
  text: string
  href?: string | null
  blank?: boolean
}

const CoveredLink = ({ href = undefined, text, blank = true }: Props) => {
  const { setMouseHoverState, restoreMouseState } = useMouse()

  const content = () => (
    <motion.span
      initial="hide"
      animate="show"
      whileHover="hover"
      className="relative inline-block group"
    >
      <span className="z-10 group-hover:text-white transition-colors duration-100">{text}</span>
      <motion.span
        variants={{
          hide: { opacity: 0, height: 0 },
          show: { opacity: 1, height: 2 },
          hover: { opacity: 1, height: '100%' }
        }}
        transition={{ type: 'spring', mass: 0.2, stiffness: 100 }}
        className="absolute bottom-0 left-0 w-full bg-black dark:bg-white mix-blend-exclusion"
      />
    </motion.span>
  )
  return href ? (
    <Link
      href={href}
      target={blank ? '_blank' : ''}
      onMouseEnter={setMouseHoverState}
      onMouseLeave={restoreMouseState}
    >
      {content()}
    </Link>
  ) : (
    content()
  )
}

export default CoveredLink
