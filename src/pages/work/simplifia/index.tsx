/* eslint-disable react/jsx-key */
import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'
import { useRouter } from 'next/router'

const data = projects.simplifia
const paragraphs = {
  es: [
    <ProjectPageParagraphContainer>
      <p>
        Aplicacion clon de <CoveredLink text='ChatGPT' href='https://chat.openai.com/chat' />{' '}
        pero solo responde definiciones de forma simple.
        Utiliza <CoveredLink text='next-auth' href='https://next-auth.js.org/' />{' '}
        para gestionar sesiones y la API de <CoveredLink text='OpenAI' href='https://openai.com/api/' />{' '}
        para obtener las respuestas.
      </p>
      <p>
        La pagina web <span>NO</span> se encuentra en funcionamiento ya que no posee
        una API KEY de OpenAI.
      </p>
    </ProjectPageParagraphContainer>
  ],
  en: [
    <ProjectPageParagraphContainer>
      <p>
        <CoveredLink text='ChatGPT' href='https://chat.openai.com/chat' /> clone application
        but only answers definitions in a simple way.
        It uses <CoveredLink text='next-auth' href='https://next-auth.js.org/' />{' '}
        to manage sessions and <CoveredLink text='OpenAI' href='https://openai.com/api/' /> API{' '} to get the answers.
      </p>
      <p>
        The web page is <span className='font-bold text-red-500 underline'>NOT</span>{' '}
        working because it does not have a valid OpenAI API KEY.
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
        locale={locale}
      >
        {paragraphs[locale as keyof typeof paragraphs][0]}
        <ProjectPageImage src='/images/simplifia_light.webp' darkSrc='/images/simplifia_dark.webp' />
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
