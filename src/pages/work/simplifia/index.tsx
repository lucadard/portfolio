import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import ProjectImage from '@/components/ProjectImage'
import Head from 'next/head'

const data = projects.simplifia

const ProjectPage = () => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/images/simplifia_light.webp'
          as='image'
        />
        <link
          rel='preload'
          href='/images/simplifia_dark.webp'
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
            Aplicacion clon de{' '}
            <CoveredLink text='ChatGPT' href='https://chat.openai.com/chat' />,
            pero solo responde definiciones de forma simple.
          </p>
          <p>
            Utiliza{' '}
            <CoveredLink text='next-auth' href='https://next-auth.js.org/' />{' '}
            para manejar sesiones con{' '}
            <CoveredLink
              text='OAuth'
              href='https://auth0.com/es/intro-to-iam/what-is-oauth-2'
            />{' '}
            y la API de{' '}
            <CoveredLink text='OpenAI' href='https://openai.com/api/' /> para
            obtener las respuestas.
          </p>
          <p>
            <span className='underline'>Nota</span>: Debido a que la web utiliza una
            API de pago, no se encuentra en funcionamiento.
          </p>
        </ProjectPageParagraphContainer>
        <ProjectPageImage src='/images/simplifia_light.webp' darkSrc='/images/simplifia_dark.webp' />
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
