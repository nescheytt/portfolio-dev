import { useMouseEventsContext } from '@/context/mouseEvents'
import { motion as m } from 'framer-motion'

const Header = () => {
  const mouseEvents = useMouseEventsContext()

  return (
    <header className="w-full flex items-center justify-between overflow-hidden px-4 lg:p-12 mix-blend-difference absolute top-4 lg:top-0 z-10">
      <m.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2.50, duration: 1 }} onMouseOver={mouseEvents.onMouseOver} onMouseLeave={mouseEvents.onMouseLeave}>
        <a href="/" className="text-white text-sm md:text-xl">Nahuel Scheytt</a>
      </m.div>

      <m.ul animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2.50, duration: 1 }} className="flex gap-x-4">
        <li onMouseOver={mouseEvents.onMouseOver} onMouseLeave={mouseEvents.onMouseLeave}>
          <a href="https://www.linkedin.com/in/nahuel-scheytt" className="text-sm md:text-xl text-gray-300 hover:underline" target="_blank">LinkedIn</a>
        </li>
        <li onMouseOver={mouseEvents.onMouseOver} onMouseLeave={mouseEvents.onMouseLeave}>
          <a href="mailto:nahuel.scheytt@gmail.com" className="text-sm md:text-xl text-gray-300 hover:underline">Email</a>
        </li>
      </m.ul>
    </header>
  )  
}

export default Header