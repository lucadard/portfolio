import Button from '@/components/Button'
import CoveredLink from '@/components/CoveredLink'
import LinkArrow from '@/components/LinkArrow'
import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import PageLayout from '../PageLayout'

const paragraphs = [
  <>
    Podés enviarme un{' '}
    <CoveredLink text={'email'} href={'mailto:lucadardenne@hotmail.com'} />
  </>,
  <>
    O encontrarme en{' '}
    <CoveredLink
      text={'LinkedIn'}
      href={'https://www.linkedin.com/in/lucadardenne/'}
    />{' '}
    y <CoveredLink text={'Github'} href={'https://github.com/lucadard'} />.
  </>
]
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

const ContactPage = () => {
  return (
    <PageLayout title="Contacto">
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
              className="text-5xl md:text-7xl font-bold mb-12"
            >
              Contactame!
            </motion.h2>
          </div>
          <div className="relative">
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
    </PageLayout>
  )
}

export default ContactPage
