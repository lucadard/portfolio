import React, { useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { ArrowIcon } from '@/assets/icons/Icons'
import { useRouter } from 'next/router'

const Hero = () => {
  const { locale } = useRouter()
  const draggableContainer = useRef<HTMLDivElement | null>(null)
  const draggableItem = useRef<HTMLDivElement | null>(null)
  const [dragProgress, setDragProgress] = useState(0)
  const x = useMotionValue(0) as any

  function handleDrag () {
    const totalDragSpace = draggableContainer.current!.clientWidth - draggableItem.current!.clientWidth
    const dragProgress = x.current / totalDragSpace
    setDragProgress(Math.max(0, Math.min(dragProgress, 1))) // cap value between 0 and 1
  }

  return (
    <motion.section
      initial='hide'
      whileInView='show'
      ref={draggableContainer}
      viewport={{ once: true }}
      variants={{
        show: {
          pointerEvents: 'none',
          transitionEnd: { pointerEvents: 'auto' },
          transition: { staggerChildren: 0.1, delayChildren: 0 }
        }
      }}
      id='hero'
      className='text-[15px] md:text-[18px]'
    >
      <div className='hidden min-h-[90vh] flex-col justify-center md:flex'>
        <div className='relative'>
          <p className='absolute left-0 top-0'>{locale === 'en' ? 'Hi' : 'Hola'}</p>
          <motion.div
            drag='x'
            onDragEnd={() => setDragProgress(0)}
            onDrag={handleDrag}
            dragElastic={0.01}
            dragSnapToOrigin
            dragConstraints={draggableContainer}
            className='w-min'
            style={{ x }}
            ref={draggableItem}
            transition={{
              type: 'spring',
              stiffness: 80,
              mass: 0.3
            }}
          >
            <motion.p
              animate={{ x: `${dragProgress * 50}%` }}
              className='whitespace-nowrap'
            >
              <span className='opacity-0'>{locale === 'en' ? 'Hi!' : 'Hola!'}</span>
              <span>{locale === 'en' ? 'I\'m' : 'soy'}</span>
            </motion.p>
            <motion.h1
              animate={{ x: `${dragProgress * 125}%` }}
              className='w-min font-ibm-plex-sans text-[13vw] font-bold leading-[100%] text-stroke-black text-stroke-2 dark:text-stroke-white '
              transition={{
                type: 'spring',
                stiffness: 120,
                mass: 0.1
              }}
            >
              <span className={`${dragProgress >= 0.7 ? '' : 'text-transparent'} duration-300`}>{dragProgress > 0.7 ? 'Web' : 'Luca'}</span>
            </motion.h1>
            <h1 className={`font-ibm-plex-sans text-[14vw] font-bold leading-[100%] text-stroke-black dark:text-stroke-white ${dragProgress > 0.7 ? 'text-transparent text-stroke-2' : ''}`}>
              <span className={`${dragProgress >= 0.7 ? 'text-transparent' : ''} duration-300`}>{dragProgress > 0.7 ? 'Developer' : 'Dardenne'}</span>
            </h1>
          </motion.div>
          <div className='flex items-center'>
            <span>{locale === 'en' ? 'drag the text' : 'arrastrá el texto'}</span>
            <ArrowIcon direction='right' responsive />
          </div>
        </div>
      </div>
      <div className='block pt-[20vh] pb-[10vh] text-center md:hidden'>
        <h1
          className='text-[max(16vw,60px)] font-[700] leading-[100%] text-transparent text-stroke-black dark:text-stroke-white'
          style={{ WebkitTextStrokeWidth: '1px' }}
        >Luca
          <p className='text-black text-stroke-0 dark:text-white'>
            Dardenne
          </p>
        </h1>
        <p className='font-[400]'>Web Developer</p>
      </div>
    </motion.section>
  )
}

export default Hero
