import Logo from '@/components/layout/Logo'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const LoadingBar = ({ duration }: { duration: number }) => {
  return (
    <div
      className={`h-1 w-full outline outline-[1px] outline-black dark:outline-white`}
    >
      <motion.div
        initial={{ scaleX: '0%' }}
        animate={{ scaleX: '100%' }}
        transition={{ ease: 'easeInOut', duration }}
        className="h-full origin-left bg-black dark:bg-white"
      />
    </div>
  )
}

const PageLoader = ({ duration }: { duration: number }) => {
  const { resolvedTheme: theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`h-screen grid place-content-center outline-1 ${
        theme === 'light'
          ? 'light bg-white text-black'
          : 'dark bg-black text-white'
      }`}
    >
      <motion.div
        exit={{ opacity: 0 }}
        className="w-[200px] flex flex-col items-center gap-2"
      >
        <Logo animateExit={false} />
        <LoadingBar duration={duration} />
      </motion.div>
    </motion.div>
  )
}

export default PageLoader
