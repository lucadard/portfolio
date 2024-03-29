/* eslint-disable react/jsx-key */
import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import ProjectImage from '@/components/ProjectImage'
import Head from 'next/head'
import { useRouter } from 'next/router'

const data = projects.wheretowatch

const paragraphs = {
  es: [
    <ProjectPageParagraphContainer>
      <p>
        Es una herramienta que utiliza la API de{' '}
        <CoveredLink text='TMDB' href='https://www.themoviedb.org/documentation/api' />{' '}
        para buscar en qué plataforma de streaming se encuentra disponible
        el espectáculo que estás buscando.
      </p>
    </ProjectPageParagraphContainer>
  ],
  en: [
    <ProjectPageParagraphContainer>
      <p>
        Tool that uses the <CoveredLink text='TMDB' href='https://www.themoviedb.org/documentation/api' />{' '}
        API to search on which streaming platform is available the show you are looking for.
      </p>
    </ProjectPageParagraphContainer>
  ]
}

const ProjectPage = () => {
  const { locale } = useRouter()
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
        locale={locale}
      >
        {paragraphs[locale as keyof typeof paragraphs][0]}
        <ProjectPageImage src='/images/wheretowatch_light.webp' darkSrc='/images/wheretowatch_dark.webp' />

      </ProjectPageLayout>
    </>

  )
}

export default ProjectPage
