import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function BackgroundChanger() {
  const { resolvedTheme: theme } = useTheme()
  return (
    <div className="z-[-20] fixed left-0 w-full top-0 h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          variants={{
            show: { y: '0%' },
            exit: { y: '100%' }
          }}
          animate="show"
          exit="exit"
          className={`z-[10] absolute left-0 top-0 h-full w-screen 
          ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <div
        className={`absolute left-0 top-0 h-full w-screen
        ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
      />
    </div>
  )
}
