import { createContext, useContext } from 'react'
import { MouseEvents } from '@/types/mouseEvents'

export const MouseEventsContext = createContext<MouseEvents | undefined>(undefined)

export function useMouseEventsContext() {
  const mouseEvents = useContext(MouseEventsContext)

  if (mouseEvents === undefined) {
    throw new Error('useMouseEventsContext must be used with a MouseEventsContext')
  }

  return mouseEvents
}