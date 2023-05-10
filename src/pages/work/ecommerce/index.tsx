/* eslint-disable react/jsx-key */
import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'
import { useRouter } from 'next/router'

const data = projects.ecommerce

const paragraphs = {
  es: [
    <ProjectPageParagraphContainer>
      <p>
        El proyecto final del curso de "Programacion Backend" de la plataforma{' '}
        <CoveredLink text='Coderhouse' href='https://www.coderhouse.com/' />{' '}
        el cual consta de una API REST para gestionar un ecommerce, en base a
        esa API armé un fronted para utilizarla.
      </p>
      <p>
        Aunque ya habia utilizado NodeJS varias veces, este curso me dio el empujón
        para finalmente poder manejar este entorno de forma muy ágil.
      </p>
    </ProjectPageParagraphContainer>,
    <ProjectPageParagraphContainer>
      <p>
        La web está <span className='line-through'>demasiado</span> inspirada en{' '}
        <CoveredLink text='Deno Merch' href='https://merch.deno.com/' />. Si
        tenés problemas para entrar puede que sea error del servidor debido a
        que esta alojado en la plataforma{' '}
        <CoveredLink text='Render' href='https://render.com/' />.
      </p>
    </ProjectPageParagraphContainer>
  ],
  en: [
    <ProjectPageParagraphContainer>
      <p>
        The final project of the "Backend Programming" course of{' '}
        <CoveredLink text='Coderhouse' href='https://www.coderhouse.com/' />{' '}
        which consists of a REST API to manage an ecommerce, based on that API I built a
        frontend to cosume it.
      </p>
      <p>
        Although I had already used NodeJS several times, this course gave
        me the push to handle this environment agilely.
      </p>
    </ProjectPageParagraphContainer>,
    <ProjectPageParagraphContainer>
      <p>
        The server is hosted on <CoveredLink text='Render' href='https://render.com/' />{' '}
        so you may have to wait a little bit.
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
          href='/images/ecommerce_light.webp'
          as='image'
        />
        <link
          rel='preload'
          href='/images/ecommerce_dark.webp'
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
        <ProjectPageImage src='/images/ecommerce_light.webp' darkSrc='/images/ecommerce_dark.webp' />
        {paragraphs[locale as keyof typeof paragraphs][1]}
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
