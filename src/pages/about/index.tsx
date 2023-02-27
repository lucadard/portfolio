import CoveredLink from '@/components/CoveredLink'
import LinkArrow from '@/components/LinkArrow'
import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import PageLayout from '../PageLayout'

const favouriteTech = [
  { name: 'React', link: 'https://reactjs.org/' },
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { name: 'NextJS', link: 'https://nextjs.org/' },
  { name: 'TailwindCSS', link: 'https://tailwindcss.com/' },
  { name: 'Node.js', link: 'https://nodejs.org/' }
]

const variants = {
  hide: {
    y: '200%',
    transition: { type: 'spring', stiffness: 20, duration: 0.5 }
  },
  exit: {
    y: '200%',
    transition: { type: 'spring', stiffness: 20, duration: 0.5 }
  },
  show: {
    y: 0,
    transition: { type: 'spring', mass: 0.8, stiffness: 40, duration: 1 }
  }
}

const paragraphs = [
  <>
    Soy un desarrollador web especializado en{' '}
    <CoveredLink text={favouriteTech[0].name} href={favouriteTech[0].link} /> y
    disfruto creando de aplicaciones web interactivas y dinámicas.
  </>,
  <>
    Comencé a estudiar desarrollo web cuando descubrí JavaScript y quedé
    asombrado debido a su flexibilidad y a la capacidad que le brinda al
    programador para abarcar todas las facetas del desarrollo web utilizando un
    solo lenguaje. Algunas de mis tecnologías preferidas son{' '}
    {favouriteTech.slice(1).map((item, i, { length: l }) => (
      <span key={item.name}>
        <CoveredLink text={item.name} href={item.link} />
        <span>{i !== l - 1 && ', '}</span>
      </span>
    ))}
    .
  </>,
  <>
    Me encanta experimentar y aprender nuevas herramientas, entiendo que el
    desarrollo web evoluciona constantemente y es fundamental mantenerse
    actualizado.
  </>,
  <>
    Te muestro más sobre mis estudios en mi{' '}
    <CoveredLink text={'curriculum'} href={'/Luca_Dardenne_CV.pdf'} />.
  </>,
  <>
    En la siguiente sección presento una selección de proyectos personales en
    los cuales he puesto en práctica mis conocimientos y habilidades en el campo
    del desarrollo web.
  </>
]

const AboutPage = () => {
  return (
    <PageLayout title="Sobre mi">
      <motion.div
        variants={{
          show: { transition: { staggerChildren: 0.1, staggerDirection: 1 } }
        }}
        className="px-10 md:px-32 pt-40 pb-20 overflow-hidden text-[18px]"
      >
        <div className="max-w-[700px] mx-auto">
          <div className="overflow-hidden lg:-translate-x-10">
            <motion.h2
              variants={variants}
              className="text-5xl md:text-[72px] font-bold mb-12"
            >
              Me gusta crear cosas para la web
            </motion.h2>
          </div>
          {paragraphs.map((paragraph, i) => (
            <div className="overflow-hidden" key={i}>
              <motion.p variants={variants} className="leading-8 mb-4 ">
                {paragraph}
              </motion.p>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-[24px] mt-10 mb-8">
          <LinkArrow href="/work" label="Mis proyectos" />
        </div>
      </motion.div>
    </PageLayout>
  )
}

export default AboutPage
