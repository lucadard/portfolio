import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import { useTheme } from 'next-themes'

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
      {theme === 'light' ? (
        <video
          src="/assets/projects/wheretowatch_light.mp4"
          className="w-full"
          autoPlay
          loop
          muted
          controls={false}
        ></video>
      ) : (
        <video
          src="/assets/projects/wheretowatch_dark.mp4"
          className="w-full"
          autoPlay
          loop
          muted
          controls={false}
        ></video>
      )}
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
    </ProjectPageLayout>
  )
}

export default ProjectPage
