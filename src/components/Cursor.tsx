import { useMouseEventsContext } from "@/context/mouseEvents"
import useMouseMove from "@/hooks/useMouseMove"

const Cursor = () => {
  const mouseEvents = useMouseEventsContext()
  const { coors } = useMouseMove()

  return (
    <div
      className={`${
        mouseEvents.isMouseHover && "scale-[5]"
      } pointer-events-none fixed z-10 hidden h-4 w-4 origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition duration-300 ease-out lg:flex`}
      style={{ top: coors.y + "px", left: coors.x + "px" }}
    />
  )
}

export default Cursor
