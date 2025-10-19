import React from 'react'
import Link from 'next/link'
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react'
import { ThemeAwareImage } from '@/components/theme-aware-image'

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Components', href: '/components' },
      { name: 'Templates', href: '/templates' },
      { name: 'Blocks', href: '/blocks' },
      { name: 'MVPs', href: '/mvp' },
    ],
    resources: [
      { name: 'Documentation', href: '/documentation' },
      { name: 'Devlog', href: '/devlog' },
      { name: 'Changelog', href: '/changelog' },
      { name: 'API Reference', href: '/documentation/api' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'License', href: '/license' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'Email', href: 'mailto:hello@devlaunch.com', icon: Mail },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <ThemeAwareImage
                lightSrc="/devlaunch-logo-light.png"
                darkSrc="/devlaunch-logo-dark.png"
                alt="Devlaunch Logo"
                width={102}
                height={114}
                className="h-10 w-10"
              />
              <h3 className="text-lg font-semibold">Devlaunch</h3>
              <span className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                v1
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Build and ship products faster with our high-quality templates, components, blocks, and MVPs. 
              Designed for modern developers using shadcn/ui, Tailwind, and React.
            </p>
            <div className="mt-6 flex space-x-4">
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
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-3">
            <div>
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-xs text-muted-foreground">
              © 2025 Devlaunch. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>Built with</span>
              <ExternalLink className="h-3 w-3" />
              <span>Next.js, shadcn/ui, and Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}