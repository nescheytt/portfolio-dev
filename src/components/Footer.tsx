import { MouseEvents } from "@/types/cursor"

const Footer = ({ onMouseOver, onMouseLeave }: MouseEvents) => {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-300 py-8 px-8 md:px-12 md:pt-6 gap-y-10 md:gap-y-0">
      <ul className="w-full flex justify-center md:justify-start gap-x-4">
        <li onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <a href="https://www.linkedin.com/in/nahuel-scheytt/" className="text-gray-800 hover:underline" target="_blank">LinkedIn</a>
        </li>
        <li onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <a href="https://twitter.com/nahueesch" className="text-gray-800 hover:underline" target="_blank">Twitter</a>
        </li>
        <li onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <a href="mailto:nahuel.scheytt@gmail.com" className="text-gray-800 hover:underline">Email</a>
        </li>
      </ul>

      <p className="text-gray-800 whitespace-nowrap">© 2023 Nahuel Scheytt</p>
    </footer>
  )  
}

export default Footer