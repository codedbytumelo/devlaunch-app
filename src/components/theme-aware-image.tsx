'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface ThemeAwareImageProps {
  lightSrc: string
  darkSrc: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function ThemeAwareImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: ThemeAwareImageProps) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder or null during SSR to avoid hydration mismatch
    return (
      <div 
        className={`bg-muted ${className}`}
        style={{ width: width || 'auto', height: height || 'auto' }}
      />
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'
  const src = isDark ? darkSrc : lightSrc

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      // Add error handling for missing images
      onError={(e) => {
        console.error(`Failed to load image: ${src}`)
        // Fallback to light mode image if dark mode fails
        if (isDark && e.currentTarget.src !== lightSrc) {
          e.currentTarget.src = lightSrc
        }
      }}
    />
  )
}