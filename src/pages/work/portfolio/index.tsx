import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'

const data = projects.portfolio

const ProjectPage = () => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/images/portfolio_light.webp'
          as='image'
        />
        <link
          rel='preload'
          href='/images/portfolio_dark.webp'
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
            Utilizando Next.js y la libreria de animaciones{' '}
            <CoveredLink
              href='https://www.framer.com/motion/'
              text='Framer Motion'
            />{' '}
            creé este portfolio para tener un lugar en donde pueda mostrar mis
            trabajos, busqué que la web simple, agradable a la vista y tener
            transiciones fluidas para mantener una buena experiencia de usuario.
          </p>
        </ProjectPageParagraphContainer>
        <ProjectPageImage src='/images/portfolio_light.webp' darkSrc='/images/portfolio_dark.webp' />
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
