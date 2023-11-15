import Link from "next/link"
import { useMouseEventsContext } from "@/context/mouseEvents"
import { listItems } from "@/data/footer"

const Footer = () => {
  const mouseEvents = useMouseEventsContext()

  return (
    <footer className="flex w-full flex-col items-center justify-between gap-y-10 border-t border-gray-300 p-8 md:flex-row md:gap-y-0 md:px-12 md:pt-6">
      <ol className="flex w-full justify-center gap-x-4 md:justify-start">
        {listItems.map((item, index) => (
          <li
            key={index}
            onMouseOver={mouseEvents.onMouseOver}
            onMouseLeave={mouseEvents.onMouseLeave}
          >
            <Link
              href={item.href}
              className="text-gray-800 hover:underline"
              target="_blank"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>

      <p className="whitespace-nowrap text-gray-800">© 2023 Nahuel Scheytt</p>
    </footer>
  )
}

export default Footer
