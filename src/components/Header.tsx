import Link from 'next/link'
import { motion as m } from 'framer-motion'
import { useMouseEventsContext } from '@/context/mouseEvents'
import { menuItems } from '@/data/header'

const Header = () => {
  const mouseEvents = useMouseEventsContext()

  return (
    <header className="w-full flex items-center justify-between overflow-hidden px-4 lg:p-12 mix-blend-difference absolute top-4 lg:top-0 z-10">
      <m.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2.50, duration: 1 }} onMouseOver={mouseEvents.onMouseOver} onMouseLeave={mouseEvents.onMouseLeave}>
        <a href="/" className="text-white text-sm md:text-xl">Nahuel Scheytt</a>
      </m.div>

      <nav>
        <m.ol animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2.50, duration: 1 }} className="flex gap-x-4">
          {menuItems.map((item) => (
            <li key={item.id} onMouseOver={mouseEvents.onMouseOver} onMouseLeave={mouseEvents.onMouseLeave}>
              <Link href={item.href} className="text-sm md:text-xl text-gray-300 hover:underline" target="_blank">{item.label}</Link>
            </li>
          ))}
        </m.ol>
      </nav>
    </header>
  )
}

export default Header