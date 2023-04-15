import { useMouse } from '@/context/MouseContext'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Cursor = () => {
  const { mousePosition } = useMouse()
  const [initialMousePosition, setInitialMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    if (!window) return
    setInitialMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    })
  }, [])

  const baseStyles = {
    left: mousePosition?.x ?? initialMousePosition.x,
    top: mousePosition?.y ?? initialMousePosition.y,
    x: '-50%',
    y: '-50%',
    opacity: 0.5
  }

  return (
    <>
      <style>{`
        @keyframes rotate {
          from {
            rotate:0deg;
          }
          50%{
            scale:1 1.5
          }
          to {
            rotate:360deg;
          }
        }
    `}
      </style>
      <div className='fixed inset-0 z-[2] h-full w-full blur-0 backdrop-blur-[200px]' />
      <motion.div
        animate={baseStyles}
        style={{
          animation: 'rotate 20s infinite',
          transformOrigin: '0% 0%'
        }}
        transition={{ type: 'spring', mass: 0.6, stiffness: 50 }}
        className='pointer-events-none fixed z-[1] aspect-square w-[550px] rounded-full bg-[linear-gradient(145deg,_#eab308_20%,_#a855f7_100%)]'
      />
    </>
  )
}

export default Cursor
