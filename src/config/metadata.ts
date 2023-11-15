import type { Metadata } from "next"

const title = "Nahuel Scheytt | Frontend Developer"
const description =
  "Nahuel Scheytt is a Frontend Developer yet capable to develop on backend."

export const configMetadata: Metadata = {
  title,
  description,
  keywords: [
    "Nahuel",
    "Scheytt",
    "Frontend",
    "Developer",
    "React",
    "JavaScript",
  ],
  authors: [
    {
      name: "Nahuel Scheytt",
    },
  ],
  openGraph: {
    title,
    description,
    url: "https://www.nahuelscheytt.com",
    siteName: title,
    images: [
      {
        url: "opengraph-image.jpg",
        type: "image/*",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@nahueesch",
    images: {
      url: "opengraph-image.jpg",
      alt: "Nahuel Scheytt - Frontend Developer Logo",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "Next.js",
  metadataBase: new URL("https://www.nahuelscheytt.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    shortcut: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
    },
  },
}
