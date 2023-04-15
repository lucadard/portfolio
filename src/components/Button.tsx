
import { LinkIcon } from '@/assets/icons/Icons'
import React from 'react'

type Props = {
  text: string
  bgColor?: string
  linkIcon?: boolean
}

const Button = ({ text, bgColor = 'bg-black dark:bg-white', linkIcon = false }: Props) => {
  return (
    <button className={`${bgColor} group relative overflow-hidden rounded-full border-2 border-black transition-all duration-300 active:translate-x-[3px] active:translate-y-[3px] dark:border-white`}>
      <div className='absolute top-full flex w-full justify-center'>
        <div className='aspect-square h-32 rounded-full bg-white transition-all duration-1000 group-hover:scale-[6] dark:bg-black' />
      </div>
      <p className='transition-color relative flex items-center whitespace-nowrap px-4 text-black invert delay-300 duration-300 group-hover:invert-0 dark:invert-0 dark:group-hover:invert md:px-8 md:py-2'>
        {text}
        <LinkIcon responsive className={`${linkIcon ? 'transition-transform duration-500 group-hover:-rotate-45' : 'pointer-events-none w-0 opacity-0'}`} />
      </p>
    </button>
  )
}

export default Button
