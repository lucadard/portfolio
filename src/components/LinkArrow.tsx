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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      <motion.div
        animate="show"
        whileHover="showText"
        exit={{
          y: '50vh',
          transition: { delay: 0 }
        }}
        style={{
          transformOrigin: 'bottom',
          transitionDelay: '1s',
          transform: isInView ? 'translateY(0px)' : 'translateY(-100px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
      >
        <Link
          href={href}
          onMouseEnter={setMouseHoverState}
          onMouseLeave={restoreMouseState}
          scroll={false}
          className="groupp cursor-pointer"
        >
          <motion.div
            variants={{ showText: { y: 40 } }}
            className="relative flex justify-center w-[100px] h-[60px] group-hover:translate-y-10 transition-transform duration-500"
          >
            <div className="absolute h-[6px] w-1/2 rounded-[2px] bg-apple-green bottom-7 right-[6px] transition-all duration-200 -rotate-[35deg]" />
            <div className="absolute h-[6px] w-1/2 rounded-[2px] bg-apple-green bottom-7 left-[6px] transition-all duration-200 rotate-[35deg]" />
            <div className="absolute flex justify-center top-full overflow-hidden pointer-events-none">
              <motion.p
                variants={{ show: { y: '-100%' }, showText: { y: 0 } }}
                className="whitespace-nowrap -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              >
                {label}
              </motion.p>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}
