import { useTheme } from 'next-themes'
import React from 'react'

type Props = {
  src: string
  src_dark?: string
}

const ProjectImage = ({ src, src_dark }: Props) => {
  const { resolvedTheme: theme } = useTheme()

  return (
    <img
      className="w-full shadow-lg shadow-black/20 dark:shadow-none"
      src={theme !== 'light' && src_dark ? src_dark : src}
      alt="project overview photo"
    />
  )
}

export default ProjectImage
