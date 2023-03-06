import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import React, { createRef } from 'react'
import PageLayout from '../PageLayout'
import { useMouse } from '@/context/MouseContext'
import { projects } from '../../projectsData'
import LinkArrow from '@/components/LinkArrow'

const itemVariants = {
  hide: { y: '-200%', opacity: 0 },
  exit: { y: '200%', opacity: 0 },
  show: { y: 0, opacity: 1 }
}
const transition = { type: 'spring', mass: 0.1, stiffness: 60 }

const arrowVariants = {
  hide: {
    opacity: 0,
    y: 100
  },
  exit: {
    y: '100%',
    opacity: 0
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', delay: 2, mass: 0.6 }
  }
}

const links = Object.entries(projects).map(
  ([key, { projectName, urls, description }]) => ({
    key,
    projectName,
    url: urls.page,
    description
  })
)

const WorkPage = () => {
  const { setMouseHoverState, restoreMouseState } = useMouse()
  return (
    <PageLayout title="Mis Proyectos">
      <motion.div
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1,
              staggerDirection: 1,
              delayChildren: 0.5
            }
          },
          hide: { transition: { staggerChildren: 0.1, staggerDirection: 1 } },
          exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
        }}
        className="px-10 md:px-20 mt-[200px] overflow-hidden"
      >
        <ol className="flex flex-col gap-10 w-full max-w-6xl mx-auto">
          {links.map(({ key, projectName, url, description }) => {
            return (
              <motion.li
                key={key}
                variants={itemVariants}
                transition={transition}
              >
                <Link
                  href={url}
                  scroll={false}
                  className="group inline-block"
                  onMouseLeave={restoreMouseState}
                  onMouseEnter={setMouseHoverState}
                >
                  <motion.div whileHover="hover">
                    <div className="flex items-end">
                      <motion.p
                        initial={{ color: 'inherit' }}
                        variants={{
                          hover: {
                            x: 20,
                            skew: -10,
                            transition: { duration: 0.1, delay: 0 }
                          }
                        }}
                        className="text-inherit font-bold text-4xl md:text-6xl lg:text-7xl uppercase"
                      >
                        {projectName}
                      </motion.p>
                    </div>
                    <p className="text-lg md:text-xl font-thin">
                      {description}
                    </p>
                  </motion.div>
                </Link>
              </motion.li>
            )
          })}
        </ol>
      </motion.div>
      <motion.div
        variants={arrowVariants}
        transition={{ type: 'spring', mass: 0.6 }}
        className="flex justify-center text-[24px] mt-10"
      >
        <LinkArrow href="/contact" label="Mis proyectos" />
      </motion.div>
    </PageLayout>
  )
}

export default WorkPage
