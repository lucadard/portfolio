import { useRouter } from 'next/router'
import { HeaderLink } from './Header'

const Footer = () => {
  const { locale } = useRouter()
  return (
    <footer className='upercase grid grid-cols-2 grid-rows-2 items-center border-t border-black/30 py-6 uppercase dark:border-white/30 lg:grid-cols-3 lg:grid-rows-1'>
      <div className='col-start-1 flex gap-5 lg:gap-10'>
        <HeaderLink text='Github' href='https://github.com/lucadard' blank />
        <HeaderLink text='LinkedIn' href='https://www.linkedin.com/in/lucadardenne/' blank />
        {/* <HeaderLink text='LinkedIn' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' blank /> */}
      </div>
      <p className='col-span-full row-start-2 justify-self-center lg:col-span-1 lg:col-start-2 lg:row-start-1'>2023 - Luca Dardenne</p>
      <div className='col-start-2 flex items-center justify-self-end whitespace-nowrap text-end lg:col-start-3 lg:gap-10'>
        <HeaderLink text={locale === 'es' ? 'ir arriba' : 'back to top'} scrollTo='#top' />
      </div>
    </footer>
  )
}

export default Footer
