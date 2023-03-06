import { useMouse } from '@/context/MouseContext'
import { useSlideDirection } from '@/context/SlideDirectionContext'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import CoveredLink from '../CoveredLink'

type Props = {
  nextProjectUrl?: string
  prevProjectUrl?: string
}

const transition = { type: 'spring', mass: 0.1, stiffness: 60 }

const variants = {
  left: {
    initial: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 },
    hide: { x: 100, opacity: 0 },
    exit: { x: 100, opacity: 0 }
  },
  right: {
    initial: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
    hide: { x: -100, opacity: 0 },
    exit: { x: -100, opacity: 0 }
  }
}

const WorkNavigate = ({ nextProjectUrl, prevProjectUrl }: Props) => {
  const { slideDirection, setSlideDirection } = useSlideDirection()
  const { restoreMouseState, setMouseHoverState } = useMouse()

  return (
    <motion.div
      variants={{}}
      className="xl:fixed xl:top-16 xl:left-0 px-5 xl:px-20 w-full flex justify-between md:text-xl mt-10 mb-20"
    >
      <motion.div
        onMouseEnter={setMouseHoverState}
        onMouseLeave={restoreMouseState}
        variants={variants[slideDirection]}
        transition={transition}
        className="cursor-pointer text-left group"
        onClick={() => {
          setSlideDirection('right')
        }}
      >
        <Link href={!prevProjectUrl ? '/work' : prevProjectUrl} scroll={false}>
          <CoveredLink
            text={!prevProjectUrl ? 'Volver a proyectos' : 'Anterior proyecto'}
          />
        </Link>
      </motion.div>

      {nextProjectUrl ? (
        <motion.div
          onClick={() => setSlideDirection('left')}
          onMouseEnter={setMouseHoverState}
          onMouseLeave={restoreMouseState}
          variants={variants[slideDirection]}
          transition={transition}
          className="cursor-pointer text-right group"
        >
          <Link href={nextProjectUrl} scroll={false}>
            <CoveredLink text="Siguiente proyecto" />
          </Link>
        </motion.div>
      ) : null}
    </motion.div>
  )
}

export default WorkNavigate
