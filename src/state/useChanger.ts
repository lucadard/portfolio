import { create } from 'zustand'

interface BackgroundState {
  color: string
  setColor: (color: string) => void
  sectionIndicator: { route: string, text: string }
  setSectionIndicator: (section: { route: string, text: string }) => void
}

export const useChanger = create<BackgroundState>()(
  (set) => ({
    color: 'bg-white',
    setColor: (color) => set((state) => ({ color })),
    sectionIndicator: { route: 'home', text: 'inicio' },
    setSectionIndicator: (section) => set((state) => ({ sectionIndicator: section }))
  })
)
