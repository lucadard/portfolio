import Button from '@/components/Button'
import CoveredLink from '@/components/CoveredLink'
import LinkArrow from '@/components/LinkArrow'
import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import PageLayout from '../PageLayout'

const favouriteTech = [
  { name: 'React', link: 'https://reactjs.org/' },
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { name: 'Next.js', link: 'https://nextjs.org/' },
  { name: 'TailwindCSS', link: 'https://tailwindcss.com/' },
  { name: 'Node.js', link: 'https://nodejs.org/' }
]

const paragraphs = [
  <>
    Soy un desarrollador web especializado en{' '}
    <CoveredLink text={favouriteTech[0].name} href={favouriteTech[0].link} /> y
    disfruto creando aplicaciones web interactivas y dinámicas.
  </>,
  <>
    Me apasiona experimentar con nuevas herramientas y tecnologías, algunas de
    mis preferidas son{' '}
    {favouriteTech.slice(1).map((item, i, { length: l }) => (
      <span key={item.name}>
        <CoveredLink text={item.name} href={item.link} />
        <span>{i !== l - 1 && ', '}</span>
      </span>
    ))}
    . Mantenerme actualizado es fundamental para mí, ya que el desarrollo web
    evoluciona constantemente.
  </>,
  <a href="/resume.pdf" target="_blank">
    <Button>
      <span className="whitespace-nowrap font-semibold">
        Mira mi Curriculum!
      </span>
    </Button>
  </a>
]
const transition = { type: 'spring', mass: 0.1, stiffness: 50 }
const paragraphVariants = {
  hide: {
    y: '200%',
    transition
  },
  exit: {
    y: '200%',
    transition
  },
  show: {
    y: 0,
    transition: { ...transition, delay: 0.5 }
  }
}
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

const AboutPage = () => {
  return (
    <PageLayout title="Sobre mi">
      <motion.div
        variants={{
          show: { transition: { staggerChildren: 0.1, staggerDirection: 1 } }
        }}
        className="px-10 md:px-20 pt-[200px] overflow-hidden"
      >
        <div className="max-w-[700px] mx-auto">
          <div className="overflow-hidden">
            <motion.h2
              variants={paragraphVariants}
              className="text-5xl md:text-6xl font-bold mb-12"
            >
              Un poco acerca de mí
            </motion.h2>
          </div>
          <div className="relative">
            <motion.div
              className="absolute left-0 h-full w-[2px] -ml-5 md:-ml-10 bg-black dark:bg-white"
              variants={paragraphVariants}
            />
            {paragraphs.map((paragraph, i) => (
              <div className="overflow-hidden" key={i}>
                <motion.p
                  variants={paragraphVariants}
                  className="leading-8 mb-4 "
                >
                  {paragraph}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={arrowVariants}
        transition={{ type: 'spring', mass: 0.6 }}
        className="flex justify-center text-[24px] mt-10"
      >
        <LinkArrow href="/work" label="Mis proyectos" />
      </motion.div>
    </PageLayout>
  )
}

export default AboutPage
