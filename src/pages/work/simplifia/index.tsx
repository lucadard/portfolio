import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import { useTheme } from 'next-themes'
import ProjectImage from '@/components/ProjectImage'

const data = projects.simplifia

const ProjectPage = () => {
  const { resolvedTheme: theme } = useTheme()

  return (
    <ProjectPageLayout
      projectName={data.projectName}
      urls={data.urls}
      tech={data.tech}
      links={data.links}
    >
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <p>
        Aplicacion clon de{' '}
        <CoveredLink text={'ChatGPT'} href={'https://chat.openai.com/chat'} />,
        pero solo responde definiciones de forma simple.
      </p>
      <p>
        Utiliza{' '}
        <CoveredLink text={'next-auth'} href={'https://next-auth.js.org/'} />{' '}
        para manejar sesiones con{' '}
        <CoveredLink
          text={'OAuth'}
          href={'https://auth0.com/es/intro-to-iam/what-is-oauth-2'}
        />{' '}
        y la API de{' '}
        <CoveredLink text={'OpenAI'} href={'https://openai.com/api/'} /> para
        obtener las respuestas.
      </p>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <ProjectImage
        src="/assets/images/simplifia_1.jpg"
        src_dark="/assets/images/simplifia_1_dark.jpg"
      />
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
    </ProjectPageLayout>
  )
}

export default ProjectPage
