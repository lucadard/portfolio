import { usePathname } from 'next/navigation'
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'

type SlideProvider = { children: ReactNode }

const SlideContext = createContext<
  | {
      slideDirection: 'left' | 'right'
      setSlideDirection: React.Dispatch<React.SetStateAction<'left' | 'right'>>
    }
  | undefined
>(undefined)

function SlideDirectionProvider({ children }: SlideProvider) {
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left')
  const path = usePathname()
  useEffect(() => {
    setSlideDirection((prev) => (prev === 'left' ? 'right' : 'left'))
  }, [path])
  const value = {
    slideDirection,
    setSlideDirection
  }
  return <SlideContext.Provider value={value}>{children}</SlideContext.Provider>
}

function useSlideDirection() {
  const context = useContext(SlideContext)
  if (context === undefined) {
    throw new Error(
      'useSlideDirection must be used within a SlideDirectionProvider'
    )
  }
  return context
}

export { SlideDirectionProvider, useSlideDirection }
