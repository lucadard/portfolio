import { useEffect, useState } from 'react'
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: null | number, y: null | number }>({ x: null, y: null })
  const [xSkew, setXSkew] = useState(0)

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition(prev => {
        setXSkew((prev.x ?? 0) - ev.clientX)
        return { x: ev.clientX, y: ev.clientY }
      })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])
  return { mousePosition, xSkew }
}
export default useMousePosition
