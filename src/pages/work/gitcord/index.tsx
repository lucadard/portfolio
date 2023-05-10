/* eslint-disable react/jsx-key */
import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'
import { useRouter } from 'next/router'

const data = projects.gitcord

const paragraphs = {
  es: [
    <ProjectPageParagraphContainer>
      <p>
        Es una aplicación similar a{' '}
        <CoveredLink text='Discord' href='https://discord.com/' /> donde
        utilizas tu usuario de Github.
      </p>
    </ProjectPageParagraphContainer>
  ],
  en: [
    <ProjectPageParagraphContainer>
      <p>
        It is an application similar to{' '}
        <CoveredLink text='Discord' href='https://discord.com/' />{' '}
        where you use your Github user to chat.
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
          href='/images/gitcord_light.webp'
          as='image'
        />
        <link
          rel='preload'
          href='/images/gitcord_dark.webp'
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
        <ProjectPageImage src='/images/gitcord_light.webp' darkSrc='/images/gitcord_dark.webp' />
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
