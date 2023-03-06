import WorkNavigate from '@/components/layout/WorkNavigate'
import { useMouse } from '@/context/MouseContext'
import { useSlideDirection } from '@/context/SlideDirectionContext'
import { ProjectPageProps, TechStackItems } from '@/types'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import PageLayout from '../PageLayout'

const variants = {
  left: {
    initial: { opacity: 0, x: '-50vw' },
    show: { opacity: 1, x: 0 },
    hide: { opacity: 0, x: '50vw' },
    exit: { opacity: 0, x: '50vw' }
  },
  right: {
    initial: { opacity: 0, x: '50vw' },
    show: { opacity: 1, x: 0 },
    hide: { opacity: 0, x: '-50vw' },
    exit: { opacity: 0, x: '-50vw' }
  }
}

const techStack: {
  [key in TechStackItems]: {
    url: string
    title: string
    invertOnDark?: boolean
  }
} = {
  javascript: { url: '/assets/icons/javascript.png', title: 'JavaScript' },
  typescript: { url: '/assets/icons/typescript.png', title: 'TypeScript' },
  nextjs: {
    url: '/assets/icons/nextjs.svg',
    title: 'NextJS',
    invertOnDark: true
  },
  react: { url: '/assets/icons/react.png', title: 'ReactJS' },
  tailwind: { url: '/assets/icons/tailwind.png', title: 'TailwindCSS' },
  node: { url: '/assets/icons/node.png', title: 'NodeJS' },
  mongodb: { url: '/assets/icons/mongodb.png', title: 'MongoDB' }
}

const transition = { type: 'spring', mass: 0.1, stiffness: 100 }

const ProjectPageLayout = ({
  projectName,
  urls,
  children,
  tech = [],
  links = []
}: ProjectPageProps) => {
  const { slideDirection } = useSlideDirection()
  const { setMouseHoverState, restoreMouseState } = useMouse()
  return (
    <PageLayout title={projectName + ' | Proyectos | lucadar'}>
      <motion.div
        variants={{
          show: { transition: { staggerChildren: 0.1 } }
        }}
        className="px-10 md:px-20 pt-40 overflow-hidden"
      >
        {/* content */}
        <div className="lg:mx-32 xl:mx-52 xl:mb-20">
          <div className="flex gap-6 items-center flex-wrap">
            <motion.h3
              variants={variants[slideDirection]}
              transition={transition}
              className="uppercase text-4xl md:text-5xl font-bold lg:whitespace-nowrap"
            >
              {projectName}
            </motion.h3>
            <div className="flex gap-4 flex-wrap">
              {tech.map((key) => (
                <div
                  key={key}
                  className={`h-10 aspect-square 
                  ${
                    techStack[key].invertOnDark
                      ? 'dark:invert dark:grayscale'
                      : ''
                  }`}
                  title={techStack[key].title}
                >
                  <motion.img
                    variants={variants[slideDirection]}
                    whileHover={{
                      scale: 1.3
                    }}
                    transition={transition}
                    src={techStack[key].url}
                    alt={techStack[key].title + ' icon.'}
                    className="h-full object-fit"
                  />
                </div>
              ))}
            </div>
            <motion.div
              variants={variants[slideDirection]}
              transition={transition}
              className="flex gap-4 flex-wrap"
            >
              {links.map(({ link, caption }) => (
                <Link
                  key={caption}
                  href={link}
                  target="_blank"
                  onMouseEnter={setMouseHoverState}
                  onMouseLeave={restoreMouseState}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05
                    }}
                    transition={transition}
                    className="h-10 rounded-sm shadow-md bg-apple-green text-white hover:text-black/80 transition-colors duration-200 font-semibold"
                  >
                    <p className="px-4 whitespace-nowrap">{caption}</p>
                  </motion.button>
                </Link>
              ))}
            </motion.div>
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {React.Children.map(children, (child, i) => {
              return (
                <motion.div
                  key={i}
                  variants={variants[slideDirection]}
                  transition={transition}
                >
                  {child}
                </motion.div>
              )
            })}
          </div>
        </div>
        {/*  */}
        <WorkNavigate nextProjectUrl={urls?.next} prevProjectUrl={urls?.prev} />
      </motion.div>
    </PageLayout>
  )
}

export default ProjectPageLayout
