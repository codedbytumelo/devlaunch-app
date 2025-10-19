'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Github, Menu, X, ChevronDown, Package, Star, LayoutTemplate, Blocks, BookOpen, Wrench, Rocket, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/cart-store'
import { ThemeAwareImage } from '@/components/theme-aware-image'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
  const getTotalItems = useCartStore((state) => state.getTotalItems)

  const components = [
    { name: 'Free Components', href: '/components/free', description: 'High-quality free components', icon: Package, badge: 'Free' },
    { name: 'Premium Components', href: '/components/premium', description: 'Advanced premium components', icon: Star, badge: 'Premium' },
    { name: 'Explore All Components', href: '/components', description: 'Browse our complete collection', icon: Blocks },
  ]

  const templates = [
    { name: 'Free Templates', href: '/templates/free', description: 'Starter templates for quick setup', icon: LayoutTemplate, badge: 'Free' },
    { name: 'Premium Templates', href: '/templates/premium', description: 'Professional-grade templates', icon: Star, badge: 'Premium' },
    { name: 'Explore All Templates', href: '/templates', description: 'Complete template library', icon: LayoutTemplate },
  ]

  const blocks = [
    { name: 'Free Blocks', href: '/blocks/free', description: 'Essential UI blocks', icon: Blocks, badge: 'Free' },
    { name: 'Premium Blocks', href: '/blocks/premium', description: 'Advanced UI blocks', icon: Star, badge: 'Premium' },
    { name: 'Explore All Blocks', href: '/blocks', description: 'Full block collection', icon: Blocks },
  ]

  const documentation = [
    { name: 'Documentation', href: '/documentation', description: 'Comprehensive guides and API reference', icon: BookOpen },
    { name: 'Devlog', href: '/devlog', description: 'Latest development updates', icon: BookOpen },
    { name: 'Changelog', href: '/changelog', description: 'Version history and updates', icon: BookOpen },
  ]

  const tools = [
    { name: 'DevAI', href: '/tools/devai', description: 'Build products using AI prompts', icon: Wrench, badge: 'New' },
  ]

  const launch = [
    { name: 'PYNE', href: '/launch/pyne', description: 'Unified monetization and business intelligence platform', icon: Rocket },
    { name: 'Zukani', href: '/launch/zukani', description: 'Business management software for tradespeople', icon: Rocket },
    { name: 'Nexora', href: '/launch/nexora', description: 'Procurement intelligence platform with AI insights', icon: Rocket },
  ]

  const MegaMenuContent = ({ 
    items, 
    title, 
    description,
    ctaText,
    ctaLink
  }: { 
    items: typeof components, 
    title: string,
    description?: string,
    ctaText?: string,
    ctaLink?: string
  }) => (
    <div className="w-[700px] p-0">
      <div className="grid grid-cols-12 gap-0">
        {/* Main content area */}
        <div className="col-span-8 p-6 border-r">
          <div className="mb-6">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground mt-1">
              {description || `Explore our collection of high-quality ${title.toLowerCase()} built for modern development.`}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            {items.map((item) => (
              <ListItem 
                key={item.href} 
                title={item.name} 
                href={item.href}
                icon={item.icon}
                badge={item.badge}
              >
                {item.description}
              </ListItem>
            ))}
          </div>
        </div>
        
        {/* CTA sidebar */}
        <div className="col-span-4 bg-gradient-to-b from-muted/50 to-muted p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold">Getting Started</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              New to our {title.toLowerCase()}? Check out our comprehensive guide to get up and running quickly.
            </p>
          </div>
          
          <div className="space-y-3">
            <Button className="w-full justify-start gap-2" asChild>
              <Link href={ctaLink || `/getting-started/${title.toLowerCase()}`}>
                {ctaText || 'View Documentation'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" className="w-full justify-start gap-2" asChild>
              <Link href="/examples">
                Browse Examples
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const SimpleDropdownContent = ({ items }: { items: typeof documentation }) => (
    <div className="w-64 p-2">
      <div className="mb-2 px-3 py-1.5 text-sm font-semibold text-muted-foreground">
        Resources
      </div>
      {items.map((item) => (
        <NavigationMenuLink key={item.href} asChild>
          <a
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            href={item.href}
          >
            <item.icon className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </div>
          </a>
        </NavigationMenuLink>
      ))}
    </div>
  )

  const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'> & {
      title: string
      href: string
      icon?: React.ComponentType<{ className?: string }>
      badge?: string
    }
  >(({ className, title, children, href, icon: Icon, badge, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'group flex items-start gap-3 rounded-lg p-3 hover:bg-accent transition-colors',
              className
            )}
            href={href}
            {...props}
          >
            <div className="flex-shrink-0 mt-0.5">
              {Icon && <Icon className="h-5 w-5 text-primary" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="font-medium group-hover:text-primary transition-colors">{title}</div>
                {badge && (
                  <Badge variant="secondary" className="text-xs px-1.5 py-0">
                    {badge}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                {children}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = 'ListItem'

  const toggleMobileSection = (section: string) => {
    setOpenMobileSection(openMobileSection === section ? null : section)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link className="mr-8 flex items-center space-x-2" href="/">
              <ThemeAwareImage
               lightSrc="/devlaunch-logo-light.png"
                darkSrc="/devlaunch-logo-dark.png"
                alt="Devlaunch Logo"
                width={102}
                height={114}
                className="h-8 w-8"
              />
              <span className="hidden font-bold sm:inline-block text-lg">Devlaunch</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium">
                    Components
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MegaMenuContent 
                      items={components} 
                      title="Components"
                      description="Build beautiful UIs faster with our ready-to-use components."
                      ctaText="Component Documentation"
                      ctaLink="/docs/components"
                    />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium">
                    Templates
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MegaMenuContent 
                      items={templates} 
                      title="Templates"
                      description="Kickstart your project with professionally designed templates."
                      ctaText="Template Guide"
                      ctaLink="/docs/templates"
                    />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium">
                    Blocks
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MegaMenuContent 
                      items={blocks} 
                      title="Blocks"
                      description="Compose interfaces quickly with our pre-built section blocks."
                      ctaText="Block Documentation"
                      ctaLink="/docs/blocks"
                    />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <SimpleDropdownContent items={documentation} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium">
                    Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MegaMenuContent 
                      items={tools} 
                      title="Tools"
                      description="Powerful tools to enhance your development workflow."
                      ctaText="Tools Documentation"
                      ctaLink="/docs/tools"
                    />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium">
                    Launch
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MegaMenuContent 
                      items={launch} 
                      title="Launch"
                      description="Discover our latest products and innovations."
                      ctaText="All Products"
                      ctaLink="/launch"
                    />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">Cart</span>
                {getTotalItems() > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild className="hidden md:flex">
              <Link href="/pricing">All Access</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div className="space-y-1">
              {/* Components Section */}
              <div className="px-3 py-2">
                <button
                  className="flex w-full items-center justify-between text-sm font-medium"
                  onClick={() => toggleMobileSection('components')}
                >
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Components
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSection === 'components' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileSection === 'components' && (
                  <div className="mt-1 space-y-1 pl-4">
                    {components.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Templates Section */}
              <div className="px-3 py-2">
                <button
                  className="flex w-full items-center justify-between text-sm font-medium"
                  onClick={() => toggleMobileSection('templates')}
                >
                  <div className="flex items-center gap-2">
                    <LayoutTemplate className="h-4 w-4" />
                    Templates
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSection === 'templates' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileSection === 'templates' && (
                  <div className="mt-1 space-y-1 pl-4">
                    {templates.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Blocks Section */}
              <div className="px-3 py-2">
                <button
                  className="flex w-full items-center justify-between text-sm font-medium"
                  onClick={() => toggleMobileSection('blocks')}
                >
                  <div className="flex items-center gap-2">
                    <Blocks className="h-4 w-4" />
                    Blocks
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSection === 'blocks' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileSection === 'blocks' && (
                  <div className="mt-1 space-y-1 pl-4">
                    {blocks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Resources Section */}
              <div className="px-3 py-2">
                <button
                  className="flex w-full items-center justify-between text-sm font-medium"
                  onClick={() => toggleMobileSection('resources')}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Resources
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSection === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileSection === 'resources' && (
                  <div className="mt-1 space-y-1 pl-4">
                    {documentation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Tools Section */}
              <div className="px-3 py-2">
                <button
                  className="flex w-full items-center justify-between text-sm font-medium"
                  onClick={() => toggleMobileSection('tools')}
                >
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    Tools
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSection === 'tools' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileSection === 'tools' && (
                  <div className="mt-1 space-y-1 pl-4">
                    {tools.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Launch Section */}
              <div className="px-3 py-2">
                <button
                  className="flex w-full items-center justify-between text-sm font-medium"
                  onClick={() => toggleMobileSection('launch')}
                >
                  <div className="flex items-center gap-2">
                    <Rocket className="h-4 w-4" />
                    Launch
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSection === 'launch' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileSection === 'launch' && (
                  <div className="mt-1 space-y-1 pl-4">
                    {launch.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Join Waitlist Button */}
              <div className="px-3 py-2">
                <Button 
                  className="w-full" 
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/pricing">All Access</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}