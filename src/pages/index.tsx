import About from '@/components/section/About'
import Hero from '@/components/section/Hero'
import Work from '@/components/section/Work'
import PageLayout from './PageLayout'
import Contact from '@/components/section/Contact'
import Header, { HeaderLink, HeaderThemeToggler } from '@/components/layout/Header'
import { useRouter } from 'next/router'

export const routes = {
  home: { text: 'inicio', route: 'home' },
  about: { text: 'sobre mi', route: 'about' },
  work: { text: 'proyectos', route: 'work' },
  contact: { text: 'contacto', route: 'contact' }
}

export default function Home () {
  const { locale } = useRouter()
  return (
    <PageLayout title='Luca Dardenne | Web Developer'>
      <Header>
        <div className='flex items-center gap-4'>
          <HeaderThemeToggler />
          {/* <HeaderLanguageToggler /> */}
        </div>
        <HeaderLink text={locale === 'es' ? 'contacto' : 'contact'} scrollTo='#contact' />
      </Header>
      <main className='px-5 md:px-20'>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </PageLayout>
  )
}
