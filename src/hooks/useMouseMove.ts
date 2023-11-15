import { useEffect, useState } from "react"

const useMouseMove = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: { clientX: number; clientY: number }) => {
      setCoors({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return {
    coors,
  }
}

export default useMouseMove
