import React from 'react'

function MenuIcon ({ active = true }: { active?: boolean }) {
  return (
    <div className='flex w-10 select-none flex-col gap-[6px] p-2 px-1 outline outline-0'>
      <div
        className={`bg-apple-green h-[3px] w-full origin-center transition-transform duration-500 ease-in-out 
      ${active ? 'translate-y-[9px] rotate-45' : ''}`}
      />
      <div
        className={`bg-apple-green h-[3px] w-full transition-all duration-500 ease-in-out 
        ${active ? 'translate-x-full opacity-0' : ''}`}
      />
      <div
        className={`bg-apple-green h-[3px] w-full origin-center transition-transform duration-500 ease-in-out 
      ${active ? 'translate-y-[-9px] -rotate-45' : ''}`}
      />
    </div>
  )
}
