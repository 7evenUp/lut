import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: ["300", "900"], subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Lut",
  description: "Все шмотки тут",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
