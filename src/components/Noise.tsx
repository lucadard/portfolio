import { motion } from 'framer-motion'
import React from 'react'

const Noise = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="noise-container"
    ></motion.div>
  )
}

export default Noise
