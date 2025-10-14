import React from 'react'
import { Navbar } from './navbar'
import { AnnouncementBanner } from './announcement-banner'
import { Footer } from './footer'

interface LayoutWrapperProps {
  children: React.ReactNode
  showFooter?: boolean
  showNavbar?: boolean
  showBanner?: boolean
}

export function LayoutWrapper({ 
  children, 
  showFooter = true, 
  showNavbar = true, 
  showBanner = true 
}: LayoutWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showBanner && <AnnouncementBanner />}
      {showNavbar && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}