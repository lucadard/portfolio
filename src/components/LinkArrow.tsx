import { useMouse } from '@/context/MouseContext'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function LinkArrow({
  href,
  label
}: {
  href: string
  label?: string
}) {
  const { restoreMouseState, setMouseHoverState } = useMouse()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      <motion.div
        animate="show"
        whileHover="showText"
        style={{
          transformOrigin: 'bottom',
          transitionDelay: '1s',
          transform: isInView ? 'translateY(0px)' : 'translateY(-100px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
        onMouseEnter={setMouseHoverState}
        onMouseLeave={restoreMouseState}
      >
        <Link
          href={href}
          scroll={false}
          className="cursor-pointer"
          aria-label="To the next page"
        >
          <motion.div
            variants={{ showText: { y: 10 } }}
            transition={{ type: 'spring', mass: 0.6 }}
            className="relative flex justify-center w-[100px] h-[60px] mb-8"
          >
            <div className="absolute h-[6px] w-1/2 rounded-[2px] bg-apple-green bottom-7 right-[6px] transition-all duration-200 -rotate-[35deg]" />
            <div className="absolute h-[6px] w-1/2 rounded-[2px] bg-apple-green bottom-7 left-[6px] transition-all duration-200 rotate-[35deg]" />
            <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center"></div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}
