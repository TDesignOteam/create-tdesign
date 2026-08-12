import type { PropsWithChildren } from 'react'
import './Layout.css'
import 'tdesign-mobile-react/es/style/index.css'

export default function LayoutDefault({ children }: PropsWithChildren) {
  return <>{children}</>
}
