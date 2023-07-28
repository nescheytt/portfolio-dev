import { useMouseEventsContext } from '@/context/mouseEvents'
import { listItems } from '@/constants/footer'

const Footer = () => {
  const mouseEvents = useMouseEventsContext()
  
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-300 py-8 px-8 md:px-12 md:pt-6 gap-y-10 md:gap-y-0">
      <ul className="w-full flex justify-center md:justify-start gap-x-4">
        {listItems.map((item, index) => (
          <li key={index} onMouseOver={mouseEvents.onMouseOver} onMouseLeave={mouseEvents.onMouseLeave}>
            <a href={item.href} className="text-gray-800 hover:underline" target="_blank">{item.label}</a>
          </li>
        ))}
      </ul>

      <p className="text-gray-800 whitespace-nowrap">© 2023 Nahuel Scheytt</p>
    </footer>
  )  
}

export default Footer