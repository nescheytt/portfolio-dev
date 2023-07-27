import { useEffect, useState } from "react"
import { MouseHover } from "@/types/cursor"

const Cursor = ({ mouseHover }: MouseHover) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])
  
  return (
    <div
      className={`hidden w-4 h-4 bg-white rounded-full lg:flex fixed pointer-events-none mix-blend-difference z-10 transition ease-out duration-300 ${mouseHover && "scale-5"} origin-center -translate-x-1/2 -translate-y-1/2`}
      style={{ top: mousePosition.y + 'px', left: mousePosition.x + 'px' }}
    />
  )
}

export default Cursor