import { motion, Transition } from 'framer-motion'
import React from 'react'

const transition: Transition = {
  type: 'spring',
  duration: 0.3,
  stiffness: 260,
  damping: 20,
  delay: 0.5
}

const Logo = ({ animateExit = true }: { animateExit?: boolean }) => {
  return (
    <div className="flex text-[32px] pointer-events-none select-none">
      <motion.p
        initial={{ x: 10 }}
        animate={{ x: 0 }}
        exit={animateExit ? { x: 10 } : {}}
        transition={transition}
      >
        l
      </motion.p>
      <motion.p
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        exit={
          animateExit
            ? {
                scaleX: 0,
                transition: {
                  delay: 0.3
                }
              }
            : {}
        }
        transition={transition}
      >
        uca
      </motion.p>
      <motion.p
        initial={{ x: -65 }}
        animate={{
          x: 0
        }}
        exit={
          animateExit
            ? {
                x: -65,
                transition: {
                  delay: 0.3
                }
              }
            : {}
        }
        transition={{ ...transition }}
      >
        d
      </motion.p>
      <motion.p
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{
          scaleX: 1
        }}
        exit={
          animateExit
            ? {
                scaleX: 0,
                transition: {
                  delay: 0
                }
              }
            : {}
        }
        transition={{ ...transition, delay: 1 }}
      >
        ar
      </motion.p>
    </div>
  )
}

export default Logo
