import { useState } from "react"
import { MouseEvents } from "@/types/cursor"

const useMouseEvents = (): MouseEvents => {
  const [isMouseHover, setIsMouseHover] = useState(false)

  const handleMouse = (isHovering: boolean) => {
    setIsMouseHover(isHovering)
  }

  return {
    isMouseHover,
    onMouseOver: () => handleMouse(true),
    onMouseLeave: () => handleMouse(false)
  }
}

export default useMouseEvents
