import Button from '@/components/Button'
import Footer from '@/components/layout/Footer'
import Header, { HeaderLink, HeaderThemeToggler } from '@/components/layout/Header'
import { ProjectPageProps, TechStackItems } from '@/types'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'
import PageLayout from '../PageLayout'
import * as logos from '../../assets/icons/TechnologyIcons'

const techStackIcons: {
  [key in TechStackItems]: {
    src: React.ReactNode
    title: string
    color?: string
    darkColor?: string
  }
} = {
  javascript: { src: <logos.IconLogoJavascript fill='#f2c141' />, title: 'JavaScript' },
  typescript: { src: <logos.IconTypescript fill='#2f71bc' />, title: 'TypeScript' },
  nextjs: { src: <logos.IconNextjs />, title: 'NextJS' },
  react: { src: <logos.IconReact fill='#04d1f2' />, title: 'ReactJS' },
  tailwind: { src: <logos.IconTailwindcss fill='#09adc9' />, title: 'TailwindCSS' },
  node: { src: <logos.IconNodejs color='#88bb3d' />, title: 'NodeJS' },
  mongodb: { src: <logos.IconMongodb fill='#0e8539' />, title: 'MongoDB' },
  firebase: { src: <logos.IconFirebase fill='#ffca28' />, title: 'Firebase' }
}

export const ProjectPageImage = ({ src, darkSrc, alt = '' }: { src: string, darkSrc?: string, alt?: string }) => {
  const { resolvedTheme: theme } = useTheme()
  return (
    <div className='relative aspect-[1440/1024] w-full overflow-hidden'>
      <div
        className='relative h-full w-full'
        data-scroll
        data-scroll-speed='-2'
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={theme === 'light' || !darkSrc ? src : darkSrc}
          alt=''
          className='origin-top object-cover object-top md:-translate-y-10 '
        />
      </div>
    </div>
  )
}

export const ProjectPageParagraphContainer = ({ children }: { children: React.ReactNode }) => (
  <div className='px-5 font-[400] leading-[1.4] md:px-20 md:text-[max(2.2vw)]'>
    {children}
  </div>
)

const ProjectPageLayout = ({
  projectName,
  urls,
  children,
  tech = [],
  links = [],
  locale = 'en'
}: Omit<ProjectPageProps, 'description'>) => {
  return (
    <PageLayout title={projectName + ' | Luca Dardenne'}>
      <Header>
        <HeaderLink text={locale === 'es' ? 'volver al inicio' : 'back to home'} href='/' />
        <HeaderThemeToggler />
      </Header>
      {/* content */}
      <main>
        <div className='mt-[20vh] mb-5 flex flex-col gap-x-10 gap-y-5 px-5 md:px-20 lg:flex-row'>
          <h2 className='text-[max(6vw,_50px)] leading-[1] lg:place-self-end'>
            {projectName}
          </h2>
          <div className='mt-auto flex flex-wrap gap-2 md:gap-4'>
            {tech.map((key) => (
              <div
                key={key}
                className='transform-scale relative aspect-square max-h-14 duration-300 hover:scale-[1.3] xl:h-20'
                title={techStackIcons[key].title}
              >
                {techStackIcons[key].src}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 flex-wrap gap-x-1 gap-y-3 px-5 md:px-20 lg:gap-x-5'>
          {links.map(({ link, caption }) => (
            <Link
              key={caption}
              href={link}
              target='_blank' rel='noreferrer'
            >
              <Button text={caption} linkIcon />
            </Link>
          ))}
        </div>
        <div className='my-10 flex flex-col gap-10 lg:my-20 lg:gap-20'>
          {React.Children.map(children, (child, i) =>
            child
          )}
        </div>
      </main>
      <div className='flex justify-end px-5 text-end text-[max(4vw,_20px)] font-[500] leading-[100%] md:px-20'>
        <HeaderLink text={locale === 'es' ? 'Siguiente Proyecto' : 'Next Project'} href={urls.next} />
        {/* <p className='text-[max(4vw,_50px)] leading-[1] lg:place-self-end'>Siguiente Proyecto</p> */}
      </div>
      <div className='mx-5 mt-10 md:mx-20 md:mt-20'>
        <Footer />
      </div>
    </PageLayout>
  )
}

export default ProjectPageLayout
