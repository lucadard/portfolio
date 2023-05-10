/* eslint-disable react/jsx-key */
import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'
import { useRouter } from 'next/router'

const data = projects.mercadogame

const paragraphs = {
  es: [
    <ProjectPageParagraphContainer>
      <p>
        Es un juego en el cual sumas puntos si logras deducir (o adivinar) en
        que publicacion se hizo la pregunta.
      </p>
      <p>
        Los datos se obtienen desde la API de{' '}
        <CoveredLink text='Mercado Libre' href='https://developers.mercadolibre.com.ar/' />.
      </p>
    </ProjectPageParagraphContainer>,
    <ProjectPageParagraphContainer>
      <p>
        A lo largo de trabajar en este proyecto reforcé mis habilidades para
        trabajar con servicios API de terceros para poder obtener todos los datos
        que necesitaba en mi aplicacion.
      </p>
    </ProjectPageParagraphContainer>
  ],
  en: [
    <ProjectPageParagraphContainer>
      <p>
        It's a game in which you score points if you can deduce (or guess) in which
        product was asked the question.
      </p>
      <p>
        The data is obtained from the{' '}
        <CoveredLink text='Mercado Libre' href='https://developers.mercadolibre.com.ar/' /> API.
      </p>
    </ProjectPageParagraphContainer>,
    <ProjectPageParagraphContainer>
      <p>
        Throughout working on this project I reinforced my skills in working
        with third party API services to be able to get all the data I needed
        in my application and handling errors within the application.
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
          href='/images/mercadogame_light.webp'
          as='image'
        />
        <link
          rel='preload'
          href='/images/mercadogame_dark.webp'
          as='image'
        />
      </Head>
      <ProjectPageLayout
        projectName={data.projectName} urls={{
          page: data.urls.page,
          prev: data.urls.prev,
          next: data.urls.next
        }}
        links={data.links}
        tech={data.tech}
        locale={locale}
      >
        {paragraphs[locale as keyof typeof paragraphs][0]}
        <ProjectPageImage src='/images/mercadogame_light.webp' darkSrc='/images/mercadogame_dark.webp' />
        {paragraphs[locale as keyof typeof paragraphs][1]}
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
