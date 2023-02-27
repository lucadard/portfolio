import { useMouse } from '@/context/MouseContext'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  isMenuOpen: boolean
}

const ThemeToggler = ({ isMenuOpen }: Props) => {
  const path = usePathname()
  const { resolvedTheme: theme, setTheme } = useTheme()
  const { restoreMouseState, setMouseHoverState } = useMouse()

  return (
    <div
      className={`flex gap-2 items-center h-3 cursor-pointer transition-opacity duration-300
      ${!isMenuOpen && !(path === '/') ? 'opacity-0 pointer-events-none' : ''}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      onMouseEnter={setMouseHoverState}
      onMouseLeave={restoreMouseState}
    >
      <div className="flex items-center gap-1 h-full">
        <div
          className={`h-5/6 aspect-square border-[1px] border-black dark:border-white transition-all duration-300 ${
            theme === 'light' ? 'bg-black' : ''
          }`}
        />
        <p className="uppercase">light</p>
      </div>
      <div className="flex items-center gap-1 h-full">
        <div
          className={`h-5/6 aspect-square border-[1px] border-black dark:border-white transition-all duration-300 ${
            theme === 'dark' ? 'bg-white' : ''
          }`}
        />
        <p className="uppercase">dark</p>
      </div>
    </div>
  )
}

export default ThemeToggler
