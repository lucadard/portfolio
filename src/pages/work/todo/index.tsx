/* eslint-disable react/jsx-key */
import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'
import { useRouter } from 'next/router'

const data = projects.todo

const paragraphs = {
  es: [
    <ProjectPageParagraphContainer>
      <p>
        Tomando como referencia un challenge de{' '}
        <CoveredLink text='Frontend Mentor' href='https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW' />{' '}
        desarrollé esta aplicación utilizando componentes de{' '}
        <CoveredLink text='ChakraUI' href='https://chakra-ui.com/' /> y la librería{' '}
        <CoveredLink text='react-beautiful-dnd' href='https://react-beautiful-dnd.netlify.app/' />{' '}
        para la funcionalidad del drag & drop.
      </p>
    </ProjectPageParagraphContainer>
  ],
  en: [
    <ProjectPageParagraphContainer>
      <p>
        Using a <CoveredLink text='Frontend Mentor' href='https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW' />{' '}
        challenge as a reference I developed this application using{' '}
        <CoveredLink text='ChakraUI' href='https://chakra-ui.com/' /> components and the{' '}
        <CoveredLink text='react-beautiful-dnd' href='https://react-beautiful-dnd.netlify.app/' />{' '}
        library for the drag & drop functionality.
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
        locale={locale}
      >
        {paragraphs[locale as keyof typeof paragraphs][0]}
        <ProjectPageImage src='/images/todo_light.webp' darkSrc='/images/todo_dark.webp' />
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
