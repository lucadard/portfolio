import React from 'react'
import CoveredLink from '@/components/CoveredLink'
import ProjectPageLayout from '../ProjectPageLayout'
import { projects } from '../../../projectsData'
import { useTheme } from 'next-themes'
import ProjectImage from '@/components/ProjectImage'

const data = projects.todo

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
        Tomando como referencia un challenge de{' '}
        <CoveredLink
          text={'Frontend Mentor'}
          href={'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW'}
        />{' '}
        desarrollé esta aplicación utilizando componentes UI de{' '}
        <CoveredLink text={'ChakraUI'} href={'https://chakra-ui.com/'} /> y la
        librería{' '}
        <CoveredLink
          text={'react-beautiful-dnd'}
          href={'https://react-beautiful-dnd.netlify.app/'}
        />{' '}
        para la funcionalidad del drag & drop.
      </p>
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
      <ProjectImage
        src="/assets/images/todo.jpg"
        src_dark="/assets/images/todo_dark.jpg"
      />
      <div className="h-[1px] w-full bg-black/50 dark:bg-white/50" />
    </ProjectPageLayout>
  )
}

export default ProjectPage
