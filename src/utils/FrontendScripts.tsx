'use client'

import Script from 'next/script'
import { useState } from 'react'

const scripts = [
  '/assets/js/jquerymin.js',
  '/assets/js/bootstrap-bundle.js',
  '/assets/js/swiper-bundle.js',
  '/assets/js/ordain-it.js',
  '/assets/js/barba.js',
  '/assets/js/imagesloaded-pkgd.js',
  '/assets/js/isotope-pkgd.js',
  '/assets/js/nice-select.js',
  '/assets/js/purecounter.js',
  '/assets/js/carousel-int.js',
  '/assets/js/script.js',
  '/assets/js/image-gsl-effect.js',
]

export default function FrontendScripts() {
  const [loadedCount, setLoadedCount] = useState(0)
  const currentScript = scripts[loadedCount]

  return (
    currentScript ? (
      <Script
        key={currentScript}
        src={currentScript}
        strategy="afterInteractive"
        onLoad={() => setLoadedCount((count) => count + 1)}
        onError={() => console.error(`Failed to load frontend script: ${currentScript}`)}
      />
    ) : null
  )
}
