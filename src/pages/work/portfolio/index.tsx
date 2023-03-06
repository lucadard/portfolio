import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import { useTheme } from 'next-themes'
import ProjectImage from '@/components/ProjectImage'

const data = projects.portfolio

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
        Utilizando Next.js y la libreria de animaciones{' '}
        <CoveredLink
          href="https://www.framer.com/motion/"
          text="Framer Motion"
        />{' '}
        creé este portfolio para tener un lugar en donde pueda mostrar mis
        trabajos, busqué que la web simple, agradable a la vista y tener
        transiciones fluidas para mantener una buena experiencia de usuario.
      </p>
      <p>
        Si bien tomé inspiración de distintas webs, el parecido al portfolio de{' '}
        <CoveredLink text={'Sharlee'} href={'https://itssharl.ee/'} /> es la mas
        notoria.
      </p>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <ProjectImage
        src="/assets/images/portfolio.jpg"
        src_dark="/assets/images/portfolio_dark.jpg"
      />
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
    </ProjectPageLayout>
  )
}

export default ProjectPage
