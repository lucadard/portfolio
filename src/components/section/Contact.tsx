/* eslint-disable react/jsx-key */
import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import Footer from '@/components/layout/Footer'
import { useRouter } from 'next/router'

const transition = { type: 'spring', mass: 0.1, stiffness: 50 }
const exitTransition = { type: 'spring', mass: 0.8, stiffness: 120 }
const paragraphVariants = {
  hide: {
    y: '200%',
    transition
  },
  exit: {
    y: '200%',
    transition: exitTransition
  },
  show: {
    y: 0,
    transition: { ...transition, delay: 0.5 }
  }
}

const Contact = () => {
  const { locale } = useRouter()
  return (
    <motion.section
      variants={{
        show: { transition: { staggerChildren: 0.1, staggerDirection: 1 } }
      }}
      className='flex min-h-screen flex-col justify-between overflow-hidden'
      id='contact'
    >
      <div className='flex h-full flex-1 flex-col items-center justify-center gap-5 overflow-hidden md:items-start'>
        <motion.p
          variants={paragraphVariants}
          className='items-right inline-block select-none text-center font-ibm-plex-sans text-[60px] font-medium uppercase leading-[100%] md:text-left md:text-[max(10vw)]'
        >
          Contact{locale === 'es' ? 'a' : ' '}
          <span className='md:hidden'>{locale === 'es' ? ' ' : ''}</span>
          me
        </motion.p>
        <a href='mailto:lucadardenne@hotmail.com' target='_blank' rel='noreferrer' className='md:mx-0'>
          <Button text={locale === 'es' ? 'Enviame un email' : 'Send me an email'} />
        </a>
      </div>
      <Footer />
    </motion.section>
  )
}

export default Contact
