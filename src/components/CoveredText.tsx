import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  text: string
}

/**
 * It needs a parent with the 'group' class
 * to function correctly
 */
const CoveredText = ({ text }: Props) => {
  return (
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
  )
}

export default CoveredText
