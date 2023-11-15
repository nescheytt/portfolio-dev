import Link from 'next/link'
import { motion as m } from 'framer-motion'
import { useMouseEventsContext } from '@/context/mouseEvents'
import { menuItems } from '@/data/header'

const Header = () => {
  const mouseEvents = useMouseEventsContext()

  return (
    <header className="absolute top-4 z-10 flex w-full items-center justify-between overflow-hidden px-4 mix-blend-difference lg:top-0 lg:p-12">
      <m.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        onMouseOver={mouseEvents.onMouseOver}
        onMouseLeave={mouseEvents.onMouseLeave}
      >
        <a href="/" className="text-sm text-white md:text-xl">
          Nahuel Scheytt
        </a>
      </m.div>

      <nav>
        <m.ol
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex gap-x-4"
        >
          {menuItems.map((item) => (
            <li
              key={item.id}
              onMouseOver={mouseEvents.onMouseOver}
              onMouseLeave={mouseEvents.onMouseLeave}
            >
              <Link
                href={item.href}
                className="text-sm text-gray-300 hover:underline md:text-xl"
                target="_blank"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </m.ol>
      </nav>
    </header>
  )
}

export default Header
