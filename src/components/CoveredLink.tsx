
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {
  text: string
  href?: string | null
  blank?: boolean
}

const CoveredLink = ({ href = undefined, text, blank = true }: Props) => {
  const content = () => (
    <motion.span
      initial='hide'
      animate='show'
      whileHover='hover'
      className='group relative inline-block'
    >
      <span className='z-10 group-hover:text-white'>{text}</span>
      <motion.span
        variants={{
          hide: { opacity: 0, width: 0, height: 0 },
          show: { opacity: 1, width: '100%', height: 2 },
          hover: { opacity: 1, width: '100%', height: '100%' }
        }}
        transition={{ type: 'spring', mass: 0.2, stiffness: 100 }}
        className='pointer-events-none absolute bottom-0 left-0 bg-black mix-blend-exclusion dark:bg-white'
      />
    </motion.span>
  )
  return href
    ? (
      <Link
        href={href}
        target={blank ? '_blank' : ''} rel='noreferrer'
      >
        {content()}
      </Link>
      )
    : (
        content()
      )
}

export default CoveredLink
