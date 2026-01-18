import type React from "react"
import type { Metadata } from "next"
<<<<<<< HEAD
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/providers/theme-provider"

import "@/styles/globals.css"

=======
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SmoothScrollWrapper } from "@/components/providers/smooth-scroll-wrapper"
import "@/styles/globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
export const metadata: Metadata = {
  title: "LabelPro - Professional Label Resizing for E-commerce",
  description:
    "The complete platform for e-commerce label management. 255+ label formats for Amazon FBA, Walmart, eBay, Shopify and more.",
  generator: "v0.app",
  icons: {
    icon: [
      {
<<<<<<< HEAD
        url: "/favicon.ico",
        sizes: "16x16 32x32",
=======
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
<<<<<<< HEAD
=======
    apple: "/apple-icon.png",
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
<<<<<<< HEAD
=======
          <SmoothScrollWrapper />
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
