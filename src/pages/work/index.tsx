import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import React, { createRef } from 'react'
import PageLayout from '../PageLayout'
import { useMouse } from '@/context/MouseContext'
import { projects } from '../../projectsData'
import LinkArrow from '@/components/LinkArrow'

const listItem = {
  hide: { y: '-200%', opacity: 0 },
  exit: { y: '-200%', opacity: 0 },
  show: { y: 0, opacity: 1 }
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
          hide: { opacity: 0, transition: { staggerChildren: 0.1 } },
          exit: { opacity: 0, transition: { staggerChildren: 0.1 } },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.3 }
          }
        }}
        className="px-10 md:px-20 pt-20"
      >
        <ol className="flex flex-col gap-10 mt-20">
          {links.map(({ key, projectName, url, description }) => {
            return (
              <motion.li
                key={key}
                variants={listItem}
                transition={{
                  bounce: 0.1,
                  duration: 0.8,
                  type: 'spring'
                }}
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
                        className="text-inherit font-bold text-4xl md:text-6xl lg:text-8xl uppercase"
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
        variants={{
          exit: {
            y: '200%',
            opacity: 0
          }
        }}
        className="flex justify-center text-[24px] mt-10 mb-24"
      >
        <LinkArrow href="/contact" label="Contacto" />
      </motion.div>
    </PageLayout>
  )
}

export default WorkPage
