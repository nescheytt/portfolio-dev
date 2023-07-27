import useMouseMove from "@/hooks/useMouseMove"
import { MouseEvents } from "@/types/cursor"

const Cursor = ({ isMouseHover }: MouseEvents) => {
  const { coors } = useMouseMove()

  return (
    <div
      className={`${isMouseHover && "scale-5"} hidden w-4 h-4 bg-white rounded-full lg:flex fixed pointer-events-none mix-blend-difference z-10 transition ease-out duration-300 origin-center -translate-x-1/2 -translate-y-1/2`}
      style={{ top: coors.y + 'px', left: coors.x + 'px' }}
    />
  )
} 

export default Cursor