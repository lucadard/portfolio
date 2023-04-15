import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'

const data = projects.mercadogame

const ProjectPage = () => {
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
      >
        <ProjectPageParagraphContainer>
          <p>
            Es un juego en el cual sumas puntos si logras deducir (o adivinar) en
            que publicacion se hizo la pregunta.
          </p>
          <p>
            Los datos se obtienen desde la propia API de{' '}
            <CoveredLink
              text='Mercado Libre'
              href='https://developers.mercadolibre.com.ar/'
            />
            .
          </p>
        </ProjectPageParagraphContainer>
        <ProjectPageImage src='/images/mercadogame_light.webp' darkSrc='/images/mercadogame_dark.webp' />
        <ProjectPageParagraphContainer>
          <p>
            A lo largo de trabajar en este proyecto afiance mis habilidades para
            trabajar con servicios API de terceros, analizando su documentacion,
            utilizando distintos de sus endpoints para poder obtener todos los datos
            que necesitaba en mi aplicacion y manejando errores dentro de la
            aplicacion.
          </p>
        </ProjectPageParagraphContainer>
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
