/* eslint-disable react/jsx-key */
import Button from '@/components/Button'
import CoveredLink from '@/components/CoveredLink'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const favouriteTech = [
  { name: 'React', link: 'https://reactjs.org/' },
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { name: 'Next.js', link: 'https://nextjs.org/' },
  { name: 'TailwindCSS', link: 'https://tailwindcss.com/' },
  { name: 'Node.js', link: 'https://nodejs.org/' }
]

const paragraphs = {
  es: [
    <p className='text-[18px] font-[500] leading-[1.4] md:text-[max(2.2vw)]'>
      Desarrollador web autodidacta especializado en{' '}
      <CoveredLink text={favouriteTech[0].name} href={favouriteTech[0].link} /> que
      disfruta creando aplicaciones web interactivas y dinámicas.
    </p>,
    <p className='text-[15px] leading-[1.5] sm:text-[max(1.6vw,20px)]'>
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
    </p>,
    <Link
    // href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      href='es/resume.pdf'
      target='_blank' rel='noreferrer'
      className='mx-auto block w-min md:mx-0'
    >
      <Button text='Mira mi Curriculum!' linkIcon />
    </Link>
  ],
  en: [
    <p className='text-[18px] font-[500] leading-[1.4] sm:text-[max(2.7vw,32px)]'>
      Autodidact web developer who likes{' '}
      <CoveredLink text={favouriteTech[0].name} href={favouriteTech[0].link} /> and
      enjoys creating interactive and dynamic web applications.
    </p>,
    <p className='text-[15px] leading-[1.5] sm:text-[max(1.6vw,20px)]'>
      I am passionate about experimenting with new tools and technologies, some of my favorites are{' '}
      {favouriteTech.slice(1).map((item, i, { length: l }) => (
        <span key={item.name}>
          <CoveredLink text={item.name} href={item.link} />
          <span>{i !== l - 1 && ', '}</span>
        </span>
      ))}
      . Keeping up to date is fundamental for me, as web development is constantly evolving.
    </p>,
    <Link
      // href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      href='resume.pdf'
      target='_blank' rel='noreferrer'
      className='mx-auto block w-min md:mx-0'
    >
      <Button text='Check out my resume!' linkIcon />
    </Link>
  ]
}

const transition = { type: 'spring', mass: 0.1, stiffness: 50 }

const paragraphVariants = {
  hide: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

const About = () => {
  const { locale } = useRouter()
  return (
    <section
      className='md:grid md:grid-cols-2'
    >
      <motion.div
        className='relative col-start-2 flex flex-col gap-10 pb-[80px] md:max-w-[80%] md:pb-[20vh]'
      >
        {paragraphs[locale as keyof typeof paragraphs].map((paragraph, i) => (
          <motion.div
            key={i}
            variants={paragraphVariants}
            transition={transition}
          >
            {paragraph}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default About
