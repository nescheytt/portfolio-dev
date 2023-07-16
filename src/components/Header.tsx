import { motion as m } from "framer-motion"

type Props = {
  setMouseHover: (value: boolean) => void
}

const Header = ({ setMouseHover }: Props) => {
  return (
    <header className="hidden md:w-full sm:flex items-center justify-between overflow-hidden sticky sm:top-5 lg:top-10 sm:px-4 md:px-12 mix-blend-difference z-10">
      <m.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2.50, duration: 1 }} onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
        <a href="/" className="text-white tex-sm md:text-xl">Nahuel Scheytt</a>
      </m.div>

      <m.ul animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2.50, duration: 1 }} className="flex gap-x-4">
        <li onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
          <a href="https://www.linkedin.com/in/nahuel-scheytt" className="text-gray-300 hover:underline" target="_blank">LinkedIn</a>
        </li>
        <li onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
          <a href="https://twitter.com/nahueesch" className="text-gray-300 hover:underline" target="_blank">Twitter</a>
        </li>
        <li onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
          <a href="mailto:nahuel.scheytt@gmail.com" className="text-gray-300 hover:underline" target="_blank">Email</a>
        </li>
      </m.ul>
    </header>
  )  
}

export default Header