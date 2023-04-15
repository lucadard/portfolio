import { useTheme } from 'next-themes'
import React from 'react'

type Props = {
  src: string
  srcDark?: string
  alt?: string
}

const ProjectImage = ({
  src,
  srcDark,
  alt = 'project overview photo'
}: Props) => {
  const { resolvedTheme: theme } = useTheme()

  return (
    <img
      className='w-full shadow-lg shadow-black/20 dark:shadow-none'
      src={theme !== 'light' && srcDark ? srcDark : src}
      alt={alt}
    />
  )
}

export default ProjectImage
