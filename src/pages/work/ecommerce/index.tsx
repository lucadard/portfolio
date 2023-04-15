import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout, { ProjectPageImage, ProjectPageParagraphContainer } from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import Head from 'next/head'

const data = projects.ecommerce

const ProjectPage = () => {
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
      >
        <ProjectPageParagraphContainer>
          <p>
            El proyecto final del curso de programacion backend de la plataforma{' '}
            <CoveredLink text='Coderhouse' href='https://www.coderhouse.com/' />{' '}
            el cual consta de una API REST para gestionar un ecommerce, en base a
            esa API armé un fronted para utilizarla.
          </p>
          <p>
            Aunque ya habia utilizado NodeJS varias veces, este curso me dio el empujón
            para terminar de amigarme con él y finalmente poder manejar este
            entorno de forma muy ágil.
          </p>
        </ProjectPageParagraphContainer>
        <ProjectPageImage src='/images/ecommerce_light.webp' darkSrc='/images/ecommerce_dark.webp' />
        <ProjectPageParagraphContainer>
          <p>
            La web está <span className='line-through'>demasiado</span> inspirada en{' '}
            <CoveredLink text='Deno Merch' href='https://merch.deno.com/' />. Si
            tenés problemas para entrar puede que sea error del servidor debido a
            que esta alojado en la plataforma{' '}
            <CoveredLink text='Render' href='https://render.com/' />.
          </p>
        </ProjectPageParagraphContainer>
      </ProjectPageLayout>
    </>
  )
}

export default ProjectPage
