import CoveredLink from '@/components/CoveredLink'
import LinkArrow from '@/components/LinkArrow'
import { motion } from 'framer-motion'
import PageLayout from './PageLayout'

const transition = { type: 'spring', mass: 0.1, stiffness: 50 }
const exitTransition = { type: 'spring', mass: 0.4, stiffness: 120 }

const variants = {
  hide: {
    y: '200%',
    opacity: 0
  },
  exit: {
    y: '50vh',
    opacity: 0,
    transition: exitTransition
  },
  initial: {
    y: '100%',
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ...transition, delay: 0.5 }
  }
}

export default function Home() {
  return (
    <PageLayout title="Inicio">
      <motion.div
        variants={{
          show: { transition: { staggerChildren: 0.7 } },
          exit: {
            transition: { staggerChildren: 0.1, staggerDirection: -1 }
          },
          hide: {
            transition: { staggerChildren: 0.1, staggerDirection: -1 }
          }
        }}
        className="px-10 md:px-20 mt-[200px]"
      >
        <motion.div
          className="flex flex-col items-center flex-1"
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
            exit: {
              transition: { staggerChildren: 0.03, staggerDirection: -1 }
            }
          }}
        >
          <motion.p
            variants={variants}
            className="font-bold text-7xl md:text-8xl"
            transition={transition}
          >
            Hola!
          </motion.p>
          <div className="flex gap-2 mb-3">
            <motion.span
              variants={variants}
              className="font-bold text-3xl mt-[6px]"
              transition={transition}
            >
              soy
            </motion.span>
            <motion.div
              variants={variants}
              className="z-10 font-bold text-7xl md:text-8xl relative select-none group "
              transition={transition}
            >
              <CoveredLink text="Luca" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="h-1/2 flex flex-col items-center justify-start gap-10">
          <motion.p
            variants={{
              hide: { opacity: 0, y: 100 },
              exit: { y: '50vh', opacity: 0 },
              show: { opacity: 1, y: 0 }
            }}
            transition={transition}
            className="md:text-2xl text-center"
          >
            Front-end web developer
          </motion.p>
        </motion.div>
        <motion.div
          variants={{
            hide: { opacity: 0, y: 100 },
            exit: { y: '100%', opacity: 0 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ type: 'spring', mass: 0.6 }}
          className="flex justify-center text-[24px] mt-10"
        >
          <LinkArrow href="/about" label="Sobre mi" />
        </motion.div>
      </motion.div>
    </PageLayout>
  )
}
