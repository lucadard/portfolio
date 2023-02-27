import { useMouse } from '@/context/MouseContext'
import useMousePosition from '@/hooks/useMousePosition'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Cursor = () => {
  const mousePosition = useMousePosition()
  const [initialMousePosition, setInitialMousePosition] = useState({
    x: 0,
    y: 0
  })
  const { getMouseState } = useMouse()
  useEffect(() => {
    if (!window) return
    setInitialMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    })
  }, [])
  const baseStyles = {
    left: mousePosition.x ?? initialMousePosition.x,
    top: mousePosition.y ?? initialMousePosition.y,
    borderColor: '#ece7e1',
    backgroundColor: '#ece7e1',
    borderWidth: 1.5,
    x: '-50%',
    y: '-50%',
    opacity: mousePosition.x === null ? 0 : 1
  }
  const cursor = {
    default: {
      ...baseStyles
      // backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    hover: {
      ...baseStyles,
      // backgroundColor: '#ece7e1',
      scale: 3
    },
    clickHover: {
      ...baseStyles,
      // backgroundColor: '#ece7e1',
      scale: 6
    },
    click: {
      ...baseStyles,
      // backgroundColor: 'rgba(0, 0, 0, 0)',
      scale: 3
    }
  }

  return (
    <motion.div
      variants={cursor}
      initial={{ opacity: 0 }}
      animate={cursor[getMouseState.type]}
      transition={{ type: 'spring', mass: 0.25, stiffness: 200 }}
      className="z-[500] w-3 aspect-square fixed pointer-events-none mix-blend-difference rounded-full overflow-hidden"
    >
      <motion.div
      // variants={cursor}
      // animate={cursor[mouseState.type]}
      // className="w-full h-full bg-white"
      // src={mouseState.type === 'custom' ? mouseState.image : ''}
      // alt=""
      />
    </motion.div>
  )
}

export default Cursor
