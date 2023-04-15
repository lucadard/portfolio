import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import ProjectImage from '@/components/ProjectImage'
import Head from 'next/head'

const data = projects.wheretowatch

const ProjectPage = () => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/images/wheretowatch_light.webp'
          as='image'
        />
        <link
          rel='preload'
          href='/images/wheretowatch_dark.webp'
          as='image'
        />
      </Head>
      <ProjectPageLayout
        projectName={data.projectName}
        urls={data.urls}
        links={data.links}
        tech={data.tech}
      >
        <ProjectPageParagraphContainer>
          <p>
            Es una herramienta que utiliza la API de{' '}
            <CoveredLink
              text='TMDB'
              href='https://www.themoviedb.org/documentation/api'
            />{' '}
            para determinar en qué plataforma de streaming se encuentra disponible
            el espectáculo que estás buscando.
          </p>
        </ProjectPageParagraphContainer>
        <ProjectPageImage src='/images/wheretowatch_light.webp' darkSrc='/images/wheretowatch_dark.webp' />

      </ProjectPageLayout>
    </>

  )
}

export default ProjectPage
