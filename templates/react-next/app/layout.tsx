import type { ReactNode } from 'react'
import 'tdesign-react/es/style/index.css'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
