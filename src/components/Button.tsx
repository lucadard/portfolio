import { useMouse } from '@/context/MouseContext'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  const { setMouseHoverState, restoreMouseState } = useMouse()
  return (
    <button
      onMouseEnter={setMouseHoverState}
      onMouseLeave={restoreMouseState}
      onMouseUp={restoreMouseState}
      className="group transition-all duration-300 active:translate-x-[3px] active:translate-y-[3px]"
    >
      <div className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white w-min py-1 px-3 rounded-sm group-hover:rounded-lg transition-all duration-300 relative">
        <div className="-z-10 absolute left-0 top-0 h-full w-full bg-black dark:bg-white rounded-md group-hover:rounded-lg transition-all duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[5px] group-active:translate-x-0 group-active:translate-y-0" />
        <div className="z-10 relative">{children}</div>
      </div>
    </button>
  )
}

export default Button
