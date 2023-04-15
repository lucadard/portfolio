import { useChanger } from '@/state/useChanger'
import { useInView } from 'framer-motion'
import { useEffect } from 'react'

export const useChangeBackgroundColor = (ref: React.RefObject<HTMLDivElement>, color: string) => {
  const setColor = useChanger(state => state.setColor)
  const isInView = useInView(ref)
  useEffect(() => {
    if (isInView) setColor(color)
  }, [isInView])
}
