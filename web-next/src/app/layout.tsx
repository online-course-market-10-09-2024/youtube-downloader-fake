import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Youtube Downloader Fake",
  description: "Youtube Downloader Fake",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
