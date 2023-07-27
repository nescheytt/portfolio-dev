import { useState } from "react"
import { MouseEvents } from "@/types/cursor"

const useMouseEvents = (): MouseEvents => {
  const [isMouseHover, setIsMouseHover] = useState(false)

  const handleMouseOver = () => {
    setIsMouseHover(true);
  }

  const handleMouseLeave = () => {
    setIsMouseHover(false);
  }

  return {
    isMouseHover,
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave
  }
}

export default useMouseEvents
