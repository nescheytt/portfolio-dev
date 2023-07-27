import { useMouseEventsContext } from "@/context/mouseEvents"
import useMouseMove from "@/hooks/useMouseMove"

const Cursor = () => {
  const mouseEvents = useMouseEventsContext()
  const { coors } = useMouseMove()

  return (
    <div
      className={`${mouseEvents.isMouseHover && "scale-5"} hidden w-4 h-4 bg-white rounded-full lg:flex fixed pointer-events-none mix-blend-difference z-10 transition ease-out duration-300 origin-center -translate-x-1/2 -translate-y-1/2`}
      style={{ top: coors.y + 'px', left: coors.x + 'px' }}
    />
  )
} 

export default Cursor