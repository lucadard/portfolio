import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import { useTheme } from 'next-themes'
import ProjectImage from '@/components/ProjectImage'

const data = projects.wheretowatch

const ProjectPage = () => {
  const { resolvedTheme: theme } = useTheme()
  return (
    <ProjectPageLayout
      projectName={data.projectName}
      urls={data.urls}
      tech={data.tech}
      links={data.links}
    >
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <p>
        Es una herramienta que utiliza la API de{' '}
        <CoveredLink
          text={'TMDB'}
          href={'https://www.themoviedb.org/documentation/api'}
        />{' '}
        para determinar en qué plataforma de streaming se encuentra disponible
        el espectáculo que estás buscando.
      </p>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <ProjectImage
        src="/assets/images/wtw_1.jpg"
        src_dark="/assets/images/wtw_1_dark.jpg"
      />
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <ProjectImage
        src="/assets/images/wtw_3.jpg"
        src_dark="/assets/images/wtw_3_dark.jpg"
      />
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
    </ProjectPageLayout>
  )
}

export default ProjectPage
