import { useState } from 'react'

const useMouseEvents = () => {
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
