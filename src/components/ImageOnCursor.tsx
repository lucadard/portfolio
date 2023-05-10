import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { useMouse } from '@/context/MouseContext'
import { projectKeys } from '@/types'

const onHoverImages: { [key in projectKeys]: string } = {
  mercadogame: '/images/onHover/mercadogame.webp',
  ecommerce: '/images/onHover/ecommerce.webp',
  giphyclone: '/images/onHover/giphyclone.webp',
  simplifia: '/images/onHover/simplifia.webp',
  todo: '/images/onHover/todo.webp',
  wheretowatch: '/images/onHover/wheretowatch.webp',
  gitcord: '/images/onHover/gitcord.webp'
}

const ImageOnCursor = () => {
  const { mousePosition, hoveredProject } = useMouse()

  const imageStyles = {
    left: mousePosition?.x ?? 0,
    top: mousePosition?.y ?? 0,
    x: '-10%',
    y: '-30%',
    opacity: 1
  }

  const src = onHoverImages[hoveredProject!]

  return (
    <>
      <Head>
        {Object.entries(onHoverImages).map(([key, image]) =>
          <link
            key={key}
            rel='preload'
            href={image}
            as='image'
          />
        )}
      </Head>
      <AnimatePresence>
        {src &&
          <motion.div
            initial={{
              ...imageStyles,
              opacity: 0
            }}
            animate={imageStyles}
            exit={{
              ...imageStyles,
              opacity: 0
            }}
            transition={{ type: 'spring', mass: 0.3, stiffness: 60 }}
            className='pointer-events-none fixed z-[100] aspect-video w-[40vw] overflow-hidden'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt='' src={src} className='h-full w-full object-cover object-top' />
          </motion.div>}
      </AnimatePresence>
    </>
  )
}

export default ImageOnCursor
