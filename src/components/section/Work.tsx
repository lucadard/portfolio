import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { projects } from '../../projectsData'
import { languages, projectKeys } from '@/types'
import { useRouter } from 'next/router'
import { useMouse } from '@/context/MouseContext'

const itemVariants = {
  hide: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 }
}
const transition = { type: 'spring', mass: 0.1, stiffness: 60 }

const links = Object.entries(projects).map(
  ([key, { projectName, urls, description }]) => ({
    key: key as projectKeys,
    projectName,
    url: urls.page,
    description
  })
)

const Work = () => {
  const { locale } = useRouter()
  const { setHoveredProject } = useMouse()

  return (
    <motion.section
      variants={{
        show: {
          pointerEvents: 'none',
          transitionEnd: { pointerEvents: 'auto' },
          transition: { staggerChildren: 0.1, delayChildren: 0 }
        }
      }}
    >
      <h2
        className='p-2 uppercase'
      >{locale === 'es' ? 'Mis Proyectos' : 'Projects'}
      </h2>
      <ol
        className='flex flex-col border-t border-black/30 dark:border-white/30'
        onMouseLeave={() => setHoveredProject(undefined)}
      >
        {links.map(({ key, projectName, url, description }) => {
          return (
            <Link
              key={key}
              href={url}
              scroll={false}
              onClick={() => setHoveredProject(undefined)}
              onMouseEnter={() => setHoveredProject(key)}
            >
              <motion.li
                variants={itemVariants}
                transition={transition}
                className='group border-b border-black/30 py-6 hover:text-black/60 dark:border-white/30 dark:hover:text-white/60 md:py-6'
              >
                <p className='font-ibm-plex-sans text-8xl font-thin uppercase leading-[100%] md:text-[max(7.2vw,60px)]'>
                  {projectName}
                </p>
                {description[locale as languages] &&
                  <p className='pt-5 font-[200]'>
                    {description[locale as languages]}
                  </p>}
              </motion.li>
            </Link>
          )
        })}
      </ol>
    </motion.section>
  )
}

export default Work
