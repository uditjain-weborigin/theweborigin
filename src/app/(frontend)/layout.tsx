import React from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/sections/Header/Header'
import { Footer } from '@/components/sections/Footer/Footer'
import { Preloader } from '@/components/sections/Preloader/Preloader'
import { OffCanvas } from '@/components/sections/OffCanvas/OffCanvas'

import '@/assets/css/bootstrap.css'
import '@/assets/css/animate.css'
import '@/assets/css/nice-select.css'
import '@/assets/css/swiper-bundle.css'
import '@/assets/css/font-awesome-pro.css'
import '@/assets/css/spacing.css'
import '@/assets/css/reak.css'

import FrontendScripts from '@/utils/FrontendScripts'
import { LenisProvider } from '@/utils/LenisProvider'

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Home',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="no-js reak-dark">
      <body data-bg-color="#0D0D0D">
        <Preloader />
        <OffCanvas />
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FrontendScripts />
        </LenisProvider>
      </body>
    </html>
  )
}
