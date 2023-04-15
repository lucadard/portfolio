import useMousePosition from '@/hooks/useMousePosition'
import { projectKeys } from '@/types'
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'
import { useSmoothScroll } from './SmoothScrollContext'

type MouseProviderType = { children: ReactNode }

const MouseContext = createContext<
| {
  mousePosition: {
    x: number | null
    y: number | null
  }
  xSkew: number
  hoveredProject: undefined | projectKeys
  setHoveredProject: React.Dispatch<React.SetStateAction<projectKeys | undefined>>
}
| undefined
>(undefined)

function MouseProvider ({ children }: MouseProviderType) {
  const { mousePosition, xSkew } = useMousePosition()
  const [hoveredProject, setHoveredProject] = useState<undefined | projectKeys>(undefined)
  return (
    <MouseContext.Provider value={{ mousePosition, xSkew, hoveredProject, setHoveredProject }}>
      {children}
    </MouseContext.Provider>
  )
}

function useMouse () {
  const context = useContext(MouseContext)
  if (context === undefined) {
    throw new Error('useMouse must be used within a MouseProvider')
  }
  return context
}

export { MouseProvider, useMouse }
