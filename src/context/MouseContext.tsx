import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'

type MouseProvider = { children: ReactNode }

const MouseContext = createContext<
  | {
      getMouseState: MouseStates
      setMouseHoverState: () => void
      restoreMouseState: () => void
    }
  | undefined
>(undefined)

export type MouseStates =
  | { type: 'default' }
  | { type: 'hover' }
  | { type: 'click' }
  | { type: 'clickHover' }

function MouseProvider({ children }: MouseProvider) {
  const [mouseState, setMouseState] = useState<MouseStates>({ type: 'default' })

  useEffect(() => {
    function handleMouseDown() {
      setMouseState((prev) => ({
        type: prev.type === 'hover' ? 'clickHover' : 'click'
      }))
    }
    function handleMouseUp() {
      setMouseState((prev) => ({
        type: prev.type === 'clickHover' ? 'hover' : 'default'
      }))
    }
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const value = {
    getMouseState: mouseState,
    setMouseHoverState: () =>
      setMouseState((prev) => ({
        type: prev.type === 'click' ? 'clickHover' : 'hover'
      })),
    restoreMouseState: () =>
      setMouseState((prev) => ({
        type: prev.type === 'clickHover' ? 'click' : 'default'
      }))
  }
  return <MouseContext.Provider value={value}>{children}</MouseContext.Provider>
}

function useMouse() {
  const context = useContext(MouseContext)
  if (context === undefined) {
    throw new Error('useMouse must be used within a MouseProvider')
  }
  return context
}

export { MouseProvider, useMouse }
