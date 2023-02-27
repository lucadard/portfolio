import CoveredLink from '@/components/CoveredLink'
import { socials } from '@/components/layout/Socials'
import { motion } from 'framer-motion'
import React from 'react'
import PageLayout from '../PageLayout'

type Props = {}
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
const ContactPage = (props: Props) => {
  return (
    <PageLayout title="Inicio">
      <motion.div
        variants={{
          show: { transition: { staggerChildren: 0.5 } }
        }}
        className="px-10 md:px-32 pt-20 md:pt-40 pb-20"
      >
        <motion.div
          variants={{
            show: {
              transition: { staggerChildren: 0.3, staggerDirection: -1 }
            }
          }}
          className="flex flex-col gap-10 pt-10"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={variants}
              className="text-6xl lg:text-8xl font-bold"
            >
              Te podés
            </motion.h1>
          </div>
          <div className="overflow-hidden text-xl">
            <motion.p variants={variants} className="leading-8">
              Contactar conmigo por{' '}
              <CoveredLink
                text={'email'}
                href={'mailto:lucadardenne@hotmail.com'}
                blank={false}
              />
              .
              <br />
              También podes encontrarme en redes:{' '}
              {socials.map((item, i, { length: l }) => (
                <span key={item.name}>
                  <CoveredLink text={item.name} href={item.link} />
                  <span>{i !== l - 1 && ', '}</span>
                </span>
              ))}
              .
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </PageLayout>
  )
}

export default ContactPage
