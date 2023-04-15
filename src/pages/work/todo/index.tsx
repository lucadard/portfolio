import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import { useTheme } from 'next-themes'
import ProjectImage from '@/components/ProjectImage'
import Head from 'next/head'

const data = projects.todo

const ProjectPage = () => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/images/todo_light.webp'
          as='image'
        />
        <link
          rel='preload'
          href='/images/todo_dark.webp'
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
            Tomando como referencia un challenge de{' '}
            <CoveredLink
              text='Frontend Mentor'
              href='https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW'
            />{' '}
            desarrollé esta aplicación utilizando componentes UI de{' '}
            <CoveredLink text='ChakraUI' href='https://chakra-ui.com/' /> y la
            librería{' '}
            <CoveredLink
              text='react-beautiful-dnd'
              href='https://react-beautiful-dnd.netlify.app/'
            />{' '}
            para la funcionalidad del drag & drop.
          </p>
        </ProjectPageParagraphContainer>
        <ProjectPageImage src='/images/todo_light.webp' darkSrc='/images/todo_dark.webp' />
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
