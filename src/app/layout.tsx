import type { Metadata } from "next"
import { Providers } from "@/app/providers"
import { appFont } from "@/config/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Overlay",
    template: "%s · Overlay",
  },
  description: "El contenido es tuyo. La forma también.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={appFont.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
