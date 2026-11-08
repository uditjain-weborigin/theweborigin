'use client'

import { useEffect } from 'react'

export function BodyClasses({ classes }: { classes: string[] }) {
  useEffect(() => {
    document.body.classList.add(...classes)

    return () => {
      document.body.classList.remove(...classes)
    }
  }, [classes])

  return null
}
