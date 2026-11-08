'use client'

import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import type { ReactNode } from 'react'

type LenisProviderProps = {
  children: ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis root options={{ anchors: true, autoRaf: true, lerp: 0.1 }}>
      {children}
    </ReactLenis>
  )
}
