import type React from "react"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Maderas Artesanales - Maderas que construyen confianza",
  description:
    "Empresa familiar especializada en maderas de calidad, vigas, tablas y productos artesanales para construcción.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
