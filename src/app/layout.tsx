import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script } from "next/font/google"
import "./globals.css"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sefina - Mobile Application Developer",
  description: "Portfolio of Sefina, Mobile Application Developer",
  icons: {
    icon: '/icon-s.svg',
    apple: [],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${dancingScript.variable}`}>
  <body className="antialiased bg-[#282830] text-[#f2f2f2]">{children}</body>
    </html>
  )
}
