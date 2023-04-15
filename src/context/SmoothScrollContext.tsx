import { InstanceOptions } from 'locomotive-scroll'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const SmoothScrollContext = createContext<{ scroll: LocomotiveScroll | null }>({
  scroll: null
})

const SmoothScrollProvider = ({ children, options }: { children: React.ReactNode, options: InstanceOptions }) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (!scroll) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      ;(async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default

          setScroll(
            new LocomotiveScroll({
              el: document.querySelector('[data-scroll-container]') as HTMLElement ?? undefined,
              ...options
            })
          )
        } catch (error) {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          throw Error(`[SmoothScrollProvider]: ${error}`)
        }
      })()
    }
    return () => {
      scroll?.destroy()
    }
  }, [scroll])

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

function useSmoothScroll () {
  const context = useContext(SmoothScrollContext)
  if (context === undefined) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider')
  }
  return context
}

export { SmoothScrollProvider, useSmoothScroll }
