import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout from '../ProjectPageLayout'
import { projects } from '../../../projectsData'

const data = projects.mercadogame

const ProjectPage = () => {
  return (
    <ProjectPageLayout
      projectName={data.projectName}
      urls={data.urls}
      tech={data.tech}
      links={data.links}
    >
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />

      <p>
        Es un juego en el cual sumas puntos si logras deducir (o adivinar) en
        que publicacion se hizo la pregunta.
      </p>
      <p>
        Los datos se obtienen desde la propia API de{' '}
        <CoveredLink
          text={'Mercado Libre'}
          href={'https://developers.mercadolibre.com.ar/'}
        />
        .
      </p>
      <p>
        A lo largo de trabajar en este proyecto afiance mis habilidades para
        trabajar con servicios API de terceros, analizando su documentacion,
        utilizando distintos de sus endpoints para poder obtener todos los datos
        que necesitaba en mi aplicacion y manejando errores dentro de la
        aplicacion.
      </p>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <img
        src="/assets/projects/mercadogame_1.png"
        alt="project overview photo"
      />
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
    </ProjectPageLayout>
  )
}

export default ProjectPage
