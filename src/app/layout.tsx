import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { configMetadata } from "@/config/metadata"
import { configViewport } from "@/config/viewport"

const inter = Inter({ subsets: ["latin"] })
export const metadata = configMetadata
export const viewport = configViewport

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
