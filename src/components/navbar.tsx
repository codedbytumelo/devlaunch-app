"use client"

import React from "react"
import Link from "next/link"
import { Menu, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeAwareImage } from "@/components/theme-aware-image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center space-x-2" href="/">
          <ThemeAwareImage
            lightSrc="/devlaunch-logo-light.png"
            darkSrc="/devlaunch-logo-dark.png"
            alt="Devlaunch Logo"
            width={102}
            height={114}
            className="h-8 w-8"
          />
          <span className="text-lg font-bold">Devlaunch</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/explore"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Explore
          </Link>
          <Button asChild>
            <Link href="#waitlist">Join Waitlist</Link>
          </Button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/devlaunchhq-hub" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="md:hidden px-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-4 px-4 py-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Button 
              className="w-full" 
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="#waitlist">Join Waitlist</Link>
            </Button>
            <div className="flex justify-center pt-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/devlaunchhq-hub" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}