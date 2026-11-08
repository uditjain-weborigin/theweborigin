'use client'

import { useEffect, useRef } from 'react'

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const preloader = preloaderRef.current
    if (!preloader) return

    const hidePreloader = () => {
      preloader.classList.remove('is-loading')
      preloader.classList.add('is-loaded')
    }

    if (document.readyState === 'complete') {
      hidePreloader()
      return
    }

    window.addEventListener('load', hidePreloader, { once: true })
    return () => window.removeEventListener('load', hidePreloader)
  }, [])

  return (
    <div id="preloader" className="is-loading" ref={preloaderRef}>
      <div className="preloader">
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
