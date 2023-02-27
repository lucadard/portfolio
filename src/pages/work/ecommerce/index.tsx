import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout from '../ProjectPageLayout'
import { projects } from '../../../projectsData'

const data = projects.ecommerce

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
        El proyecto final del curso de programacion backend de la plataforma{' '}
        <CoveredLink text={'Coderhouse'} href={'https://www.coderhouse.com/'} />{' '}
        el cual consta de una API REST para gestionar un ecommerce, en base a
        esa API armé un fronted para utilizarla.
      </p>
      <p>
        Aunque lo habia utilizado varias veces, este curso me dio el empujón
        para terminar de amigarme con NodeJS y finalmente poder moverme en este
        entorno de forma muy ágil.
      </p>
      <p>
        La web está <span className="line-through">demasiado</span> inspirada en{' '}
        <CoveredLink text={'Deno Merch'} href={'https://merch.deno.com/'} />. Si
        tenés problemas para entrar puede que sea error del servidor debido a
        que esta alojado en la plataforma{' '}
        <CoveredLink text={'Render'} href={'https://render.com/'} />.
      </p>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <img
        className="w-full"
        src="/assets/projects/ecommerce_1.png"
        alt="project overview photo"
      />
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <img
        className="w-full"
        src="/assets/projects/ecommerce_3.png"
        alt="project overview photo"
      />
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <img
        className="w-full"
        src="/assets/projects/ecommerce_4.png"
        alt="project overview photo"
      />
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
    </ProjectPageLayout>
  )
}

export default ProjectPage
