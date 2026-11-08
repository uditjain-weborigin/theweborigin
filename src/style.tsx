'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import './style.scss'

const CloseCollapsiblesOnLoad = () => {
  const pathname = usePathname()

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLButtonElement>(
          '.collapsible:not(.collapsible--collapsed) .collapsible__toggle',
        )
        .forEach((toggle) => toggle.click())
    }, 100)

    return () => window.clearTimeout(timeout)
  }, [pathname])

  return null
}

export default CloseCollapsiblesOnLoad
