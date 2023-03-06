import CoveredLink from '@/components/CoveredLink'
import React from 'react'
import ProjectPageLayout from '../ProjectPageLayout'
import { projects } from '../../../projectsData'

const data = projects.giphyclone

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
        Este proyecto consiste en un clon de la página web de{' '}
        <CoveredLink text={'GIPHY'} href={'https://giphy.com/'} />, utiliza su{' '}
        <CoveredLink text={'API'} href={'https://developers.giphy.com/'} /> para
        la obtención de datos y{' '}
        <CoveredLink
          text={'React Wouter'}
          href={'https://github.com/molefrog/wouter'}
        />{' '}
        para la gestión de rutas.
      </p>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <video
        src="/assets/videos/giphy_1.mp4"
        className="w-full shadow-lg shadow-black/20"
        autoPlay
        loop
        muted
        controls={false}
      ></video>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />

      <video
        src="/assets/videos/giphy_2.mp4"
        className="w-full shadow-lg shadow-black/20"
        autoPlay
        loop
        muted
        controls={false}
      ></video>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />

      <video
        src="/assets/videos/giphy_3.mp4"
        className="w-full shadow-lg shadow-black/20"
        autoPlay
        loop
        muted
        controls={false}
      ></video>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
    </ProjectPageLayout>
  )
}

export default ProjectPage
