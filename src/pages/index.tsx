import CoveredText from '@/components/CoveredText'
import LinkArrow from '@/components/LinkArrow'
import { motion } from 'framer-motion'
import PageLayout from './PageLayout'

const variants = {
  hide: {
    y: '200%',
    rotate: '20deg',
    opacity: 0
  },
  exit: {
    y: '50vh',
    opacity: 0
  },
  show: {
    y: ['200%', '100%', '100%', '0%'],
    rotate: ['20deg', '0deg', '0deg', '0deg'],
    opacity: [0, 1, 1, 1],
    transition: {
      times: [0, 0.2, 0.7, 1],
      duration: 1.5
    }
  }
}

export default function Home() {
  return (
    <PageLayout title="Inicio">
      <div className="px-10 pt-40 md:pt-40 pb-20 h-screen text-black dark:text-white transition-all duration-500 overflow-hidden">
        <motion.div
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
            exit: {
              transition: { staggerChildren: 0.03, staggerDirection: -1 }
            }
            // exit: {
            //   y: '50vh',
            //   opacity: 0,
            //   transition: {
            //     type: 'spring',
            //     delay: 0,
            //     delayChildren: 0,
            //     duration: 1,
            //     staggerChildren: 0.1
            //   }
            // }
          }}
          className="flex flex-col h-full text-thin gap-4 border-white/80"
        >
          <div className="flex flex-col items-center justify-end -mt-32 flex-1">
            <motion.p
              variants={variants}
              className="font-bold text-7xl md:text-8xl"
              transition={{ type: 'spring', mass: 0.2 }}
            >
              hola.
            </motion.p>
            <div className="flex gap-2 mb-3">
              <motion.span
                variants={variants}
                className="font-bold text-3xl mt-[6px]"
                transition={{ type: 'spring', mass: 0.2 }}
              >
                soy
              </motion.span>
              <motion.div
                variants={variants}
                className="z-10 font-bold text-7xl md:text-8xl relative select-none group "
                transition={{ type: 'spring', mass: 0.2 }}
              >
                <CoveredText text="Luca" />
              </motion.div>
            </div>
          </div>
          <motion.div className="h-1/2 flex flex-col items-center justify-start gap-10">
            <motion.p
              variants={{
                hide: {
                  opacity: 0,
                  scaleY: 0,
                  y: 100,
                  transformOrigin: 'bottom',
                  transition: { delay: 0 }
                },
                exit: {
                  y: '50vh',
                  transition: { delay: 0 },
                  opacity: 0
                },
                show: {
                  opacity: 1,
                  scaleY: 1,
                  y: 0,
                  transformOrigin: 'bottom'
                }
              }}
              transition={{ delay: 2, duration: 0.5 }}
              className="text7lg md:text-2xl text-cen7er md:mt-5"
            >
              Front-end web developer
            </motion.p>
            <motion.div
              variants={{
                hide: {
                  opacity: 0,
                  y: -50,
                  transformOrigin: 'bottom',
                  transition: { delay: 0 }
                },
                exit: {
                  y: '50vh',
                  transition: { delay: 0 }
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transformOrigin: 'bottom'
                }
              }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="flex justify-center text-[24px]"
            >
              <LinkArrow href="/about" label="Sobre mi" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
