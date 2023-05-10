/* eslint-disable react/jsx-key */
import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'
import { useRouter } from 'next/router'

const data = projects.giphyclone

const paragraphs = {
  es: [
    <ProjectPageParagraphContainer>
      <p>
        Este proyecto consiste en un clon de la página web de{' '}
        <CoveredLink text='GIPHY' href='https://giphy.com/' />, utiliza su{' '}
        <CoveredLink text='API' href='https://developers.giphy.com/' /> para
        la obtención de datos y{' '}
        <CoveredLink
          text='React Wouter'
          href='https://github.com/molefrog/wouter'
        />{' '}
        para la gestión de rutas.
      </p>
    </ProjectPageParagraphContainer>
  ],
  en: [
    <ProjectPageParagraphContainer>
      <p>
        This project consists of a clone of the{' '}
        <CoveredLink text='GIPHY' href='https://giphy.com/' /> website, using its{' '}
        <CoveredLink text='API' href='https://developers.giphy.com/' /> for data
        collection and <CoveredLink text='React Wouter' href='https://github.com/molefrog/wouter' />{' '}
        for route management.
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
          href='/images/giphyclone_light.webp'
          as='image'
        />
        <link
          rel='preload'
          href='/images/giphyclone_dark.webp'
          as='image'
        />
      </Head>
      <ProjectPageLayout
        projectName={data.projectName}
        urls={data.urls}
        tech={data.tech}
        links={data.links}
        locale={locale}
      >
        {paragraphs[locale as keyof typeof paragraphs][0]}
        <ProjectPageImage src='/images/giphyclone_light.webp' darkSrc='/images/giphyclone_dark.webp' />
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
