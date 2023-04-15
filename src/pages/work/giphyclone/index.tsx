import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'

const data = projects.giphyclone

const ProjectPage = () => {
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
      >
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
        <ProjectPageImage src='/images/giphyclone_light.webp' darkSrc='/images/giphyclone_dark.webp' />
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
