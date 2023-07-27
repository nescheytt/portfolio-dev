import { Dispatch, SetStateAction } from "react"

export type SetMouseHover = {
  setMouseHover: Dispatch<SetStateAction<boolean>>
}

export type MouseHover = {
  mouseHover: boolean
}