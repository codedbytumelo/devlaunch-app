import React from 'react'
import Link from 'next/link'
import { Github, X, Mail, ArrowRight } from 'lucide-react'
import { ThemeAwareImage } from '@/components/theme-aware-image'
import { Button } from '@/components/ui/button'

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/devlaunchhq-hub', icon: Github },
    { name: 'X', href: 'https://twitter.com', icon: X },
    { name: 'Email', href: 'mailto:hello@devlaunch.com', icon: Mail },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col items-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <ThemeAwareImage
                lightSrc="/devlaunch-logo-light.png"
                darkSrc="/devlaunch-logo-dark.png"
                alt="Devlaunch Logo"
                width={102}
                height={112}
                className="h-10 w-10"
              />
              <span className="text-lg font-bold">Devlaunch</span>
              <span className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                v1
              </span>
            </div>
            <p className="text-center text-muted-foreground max-w-md">
              Get early access to our premium components, templates, and MVP solutions. 
              Join thousands of developers on our waiting list.
            </p>
          </div>
          
          {/* Waiting List CTA */}
          <div className="mb-10 w-full max-w-md">
            <Button size="lg" className="w-full" asChild>
              <Link href="#waitlist">
                Join the Waiting List
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Limited spots available. Be the first to know when we launch.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-10">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
          
          {/* Bottom Section */}
          <div className="w-full border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-muted-foreground mb-4 md:mb-0">
                © 2025 Devlaunch. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>Built with</span>
                <span className="font-medium">Next.js, shadcn/ui, and Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}