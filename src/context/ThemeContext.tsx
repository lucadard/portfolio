import { createContext, useContext, ReactNode, useState } from 'react'

type ThemeProvider = { children: ReactNode }

const ThemeContext = createContext<
  | {
      currentTheme: 'light' | 'dark'
      toggleTheme: () => void
    }
  | undefined
>(undefined)

function ThemeProvider({ children }: ThemeProvider) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(() => {
    const isThemeDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    return isThemeDark ? 'dark' : 'light'
  })

  const value = {
    currentTheme,
    toggleTheme: () =>
      setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
