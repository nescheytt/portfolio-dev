import type { Viewport } from "next"

export const configViewport: Viewport = {
  themeColor: {
    media: "(prefers-color-scheme: light)",
    color: "#ffd7ed",
  },
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}
